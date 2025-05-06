var Qr, J, Al, Vt, Y1, El, Sl, Tl, r1, zn, Bn, Nl, Wr = {}, Ll = [], R2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, eo = Array.isArray;
function gt(e, r) {
  for (var t in r) e[t] = r[t];
  return e;
}
function o1(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Ke(e, r, t) {
  var o, i, a, s = {};
  for (a in r) a == "key" ? o = r[a] : a == "ref" ? i = r[a] : s[a] = r[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Qr.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) s[a] == null && (s[a] = e.defaultProps[a]);
  return jr(e, s, o, i, null);
}
function jr(e, r, t, o, i) {
  var a = { type: e, props: r, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Al, __i: -1, __u: 0 };
  return i == null && J.vnode != null && J.vnode(a), a;
}
function Rl() {
  return { current: null };
}
function we(e) {
  return e.children;
}
function nt(e, r) {
  this.props = e, this.context = r;
}
function dr(e, r) {
  if (r == null) return e.__ ? dr(e.__, e.__i + 1) : null;
  for (var t; r < e.__k.length; r++) if ((t = e.__k[r]) != null && t.__e != null) return t.__e;
  return typeof e.type == "function" ? dr(e) : null;
}
function Ml(e) {
  var r, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, r = 0; r < e.__k.length; r++) if ((t = e.__k[r]) != null && t.__e != null) {
      e.__e = e.__c.base = t.__e;
      break;
    }
    return Ml(e);
  }
}
function Fn(e) {
  (!e.__d && (e.__d = !0) && Vt.push(e) && !Lo.__r++ || Y1 != J.debounceRendering) && ((Y1 = J.debounceRendering) || El)(Lo);
}
function Lo() {
  for (var e, r, t, o, i, a, s, c = 1; Vt.length; ) Vt.length > c && Vt.sort(Sl), e = Vt.shift(), c = Vt.length, e.__d && (t = void 0, i = (o = (r = e).__v).__e, a = [], s = [], r.__P && ((t = gt({}, o)).__v = o.__v + 1, J.vnode && J.vnode(t), i1(r.__P, t, o, r.__n, r.__P.namespaceURI, 32 & o.__u ? [i] : null, a, i ?? dr(o), !!(32 & o.__u), s), t.__v = o.__v, t.__.__k[t.__i] = t, Pl(a, t, s), t.__e != i && Ml(t)));
  Lo.__r = 0;
}
function Il(e, r, t, o, i, a, s, c, l, d, p) {
  var u, f, m, w, b, E, S = o && o.__k || Ll, _ = r.length;
  for (l = M2(t, r, S, l, _), u = 0; u < _; u++) (m = t.__k[u]) != null && (f = m.__i == -1 ? Wr : S[m.__i] || Wr, m.__i = u, E = i1(e, m, f, i, a, s, c, l, d, p), w = m.__e, m.ref && f.ref != m.ref && (f.ref && n1(f.ref, null, m), p.push(m.ref, m.__c || w, m)), b == null && w != null && (b = w), 4 & m.__u || f.__k === m.__k ? l = Ol(m, l, e) : typeof m.type == "function" && E !== void 0 ? l = E : w && (l = w.nextSibling), m.__u &= -7);
  return t.__e = b, l;
}
function M2(e, r, t, o, i) {
  var a, s, c, l, d, p = t.length, u = p, f = 0;
  for (e.__k = new Array(i), a = 0; a < i; a++) (s = r[a]) != null && typeof s != "boolean" && typeof s != "function" ? (l = a + f, (s = e.__k[a] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? jr(null, s, null, null, null) : eo(s) ? jr(we, { children: s }, null, null, null) : s.constructor == null && s.__b > 0 ? jr(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e, s.__b = e.__b + 1, c = null, (d = s.__i = I2(s, t, l, u)) != -1 && (u--, (c = t[d]) && (c.__u |= 2)), c == null || c.__v == null ? (d == -1 && (i > p ? f-- : i < p && f++), typeof s.type != "function" && (s.__u |= 4)) : d != l && (d == l - 1 ? f-- : d == l + 1 ? f++ : (d > l ? f-- : f++, s.__u |= 4))) : e.__k[a] = null;
  if (u) for (a = 0; a < p; a++) (c = t[a]) != null && (2 & c.__u) == 0 && (c.__e == o && (o = dr(c)), Hl(c, c));
  return o;
}
function Ol(e, r, t) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, r = Ol(o[i], r, t));
    return r;
  }
  e.__e != r && (r && e.type && !t.contains(r) && (r = dr(e)), t.insertBefore(e.__e, r || null), r = e.__e);
  do
    r = r && r.nextSibling;
  while (r != null && r.nodeType == 8);
  return r;
}
function At(e, r) {
  return r = r || [], e == null || typeof e == "boolean" || (eo(e) ? e.some(function(t) {
    At(t, r);
  }) : r.push(e)), r;
}
function I2(e, r, t, o) {
  var i, a, s = e.key, c = e.type, l = r[t];
  if (l === null && e.key == null || l && s == l.key && c == l.type && (2 & l.__u) == 0) return t;
  if (o > (l != null && (2 & l.__u) == 0 ? 1 : 0)) for (i = t - 1, a = t + 1; i >= 0 || a < r.length; ) {
    if (i >= 0) {
      if ((l = r[i]) && (2 & l.__u) == 0 && s == l.key && c == l.type) return i;
      i--;
    }
    if (a < r.length) {
      if ((l = r[a]) && (2 & l.__u) == 0 && s == l.key && c == l.type) return a;
      a++;
    }
  }
  return -1;
}
function K1(e, r, t) {
  r[0] == "-" ? e.setProperty(r, t ?? "") : e[r] = t == null ? "" : typeof t != "number" || R2.test(r) ? t : t + "px";
}
function ho(e, r, t, o, i) {
  var a;
  e: if (r == "style") if (typeof t == "string") e.style.cssText = t;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (r in o) t && r in t || K1(e.style, r, "");
    if (t) for (r in t) o && t[r] == o[r] || K1(e.style, r, t[r]);
  }
  else if (r[0] == "o" && r[1] == "n") a = r != (r = r.replace(Tl, "$1")), r = r.toLowerCase() in e || r == "onFocusOut" || r == "onFocusIn" ? r.toLowerCase().slice(2) : r.slice(2), e.l || (e.l = {}), e.l[r + a] = t, t ? o ? t.u = o.u : (t.u = r1, e.addEventListener(r, a ? Bn : zn, a)) : e.removeEventListener(r, a ? Bn : zn, a);
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
function J1(e) {
  return function(r) {
    if (this.l) {
      var t = this.l[r.type + e];
      if (r.t == null) r.t = r1++;
      else if (r.t < t.u) return;
      return t(J.event ? J.event(r) : r);
    }
  };
}
function i1(e, r, t, o, i, a, s, c, l, d) {
  var p, u, f, m, w, b, E, S, _, C, x, h, g, y, k, P, D, j = r.type;
  if (r.constructor != null) return null;
  128 & t.__u && (l = !!(32 & t.__u), a = [c = r.__e = t.__e]), (p = J.__b) && p(r);
  e: if (typeof j == "function") try {
    if (S = r.props, _ = "prototype" in j && j.prototype.render, C = (p = j.contextType) && o[p.__c], x = p ? C ? C.props.value : p.__ : o, t.__c ? E = (u = r.__c = t.__c).__ = u.__E : (_ ? r.__c = u = new j(S, x) : (r.__c = u = new nt(S, x), u.constructor = j, u.render = P2), C && C.sub(u), u.props = S, u.state || (u.state = {}), u.context = x, u.__n = o, f = u.__d = !0, u.__h = [], u._sb = []), _ && u.__s == null && (u.__s = u.state), _ && j.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = gt({}, u.__s)), gt(u.__s, j.getDerivedStateFromProps(S, u.__s))), m = u.props, w = u.state, u.__v = r, f) _ && j.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), _ && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (_ && j.getDerivedStateFromProps == null && S !== m && u.componentWillReceiveProps != null && u.componentWillReceiveProps(S, x), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(S, u.__s, x) === !1 || r.__v == t.__v) {
        for (r.__v != t.__v && (u.props = S, u.state = u.__s, u.__d = !1), r.__e = t.__e, r.__k = t.__k, r.__k.some(function(H) {
          H && (H.__ = r);
        }), h = 0; h < u._sb.length; h++) u.__h.push(u._sb[h]);
        u._sb = [], u.__h.length && s.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(S, u.__s, x), _ && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(m, w, b);
      });
    }
    if (u.context = x, u.props = S, u.__P = e, u.__e = !1, g = J.__r, y = 0, _) {
      for (u.state = u.__s, u.__d = !1, g && g(r), p = u.render(u.props, u.state, u.context), k = 0; k < u._sb.length; k++) u.__h.push(u._sb[k]);
      u._sb = [];
    } else do
      u.__d = !1, g && g(r), p = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++y < 25);
    u.state = u.__s, u.getChildContext != null && (o = gt(gt({}, o), u.getChildContext())), _ && !f && u.getSnapshotBeforeUpdate != null && (b = u.getSnapshotBeforeUpdate(m, w)), P = p, p != null && p.type === we && p.key == null && (P = Dl(p.props.children)), c = Il(e, eo(P) ? P : [P], r, t, o, i, a, s, c, l, d), u.base = r.__e, r.__u &= -161, u.__h.length && s.push(u), E && (u.__E = u.__ = null);
  } catch (H) {
    if (r.__v = null, l || a != null) if (H.then) {
      for (r.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      a[a.indexOf(c)] = null, r.__e = c;
    } else for (D = a.length; D--; ) o1(a[D]);
    else r.__e = t.__e, r.__k = t.__k;
    J.__e(H, r, t);
  }
  else a == null && r.__v == t.__v ? (r.__k = t.__k, r.__e = t.__e) : c = r.__e = O2(t.__e, r, t, o, i, a, s, l, d);
  return (p = J.diffed) && p(r), 128 & r.__u ? void 0 : c;
}
function Pl(e, r, t) {
  for (var o = 0; o < t.length; o++) n1(t[o], t[++o], t[++o]);
  J.__c && J.__c(r, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(a) {
        a.call(i);
      });
    } catch (a) {
      J.__e(a, i.__v);
    }
  });
}
function Dl(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : eo(e) ? e.map(Dl) : gt({}, e);
}
function O2(e, r, t, o, i, a, s, c, l) {
  var d, p, u, f, m, w, b, E = t.props, S = r.props, _ = r.type;
  if (_ == "svg" ? i = "http://www.w3.org/2000/svg" : _ == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((m = a[d]) && "setAttribute" in m == !!_ && (_ ? m.localName == _ : m.nodeType == 3)) {
      e = m, a[d] = null;
      break;
    }
  }
  if (e == null) {
    if (_ == null) return document.createTextNode(S);
    e = document.createElementNS(i, _, S.is && S), c && (J.__m && J.__m(r, a), c = !1), a = null;
  }
  if (_ == null) E === S || c && e.data == S || (e.data = S);
  else {
    if (a = a && Qr.call(e.childNodes), E = t.props || Wr, !c && a != null) for (E = {}, d = 0; d < e.attributes.length; d++) E[(m = e.attributes[d]).name] = m.value;
    for (d in E) if (m = E[d], d != "children") {
      if (d == "dangerouslySetInnerHTML") u = m;
      else if (!(d in S)) {
        if (d == "value" && "defaultValue" in S || d == "checked" && "defaultChecked" in S) continue;
        ho(e, d, null, m, i);
      }
    }
    for (d in S) m = S[d], d == "children" ? f = m : d == "dangerouslySetInnerHTML" ? p = m : d == "value" ? w = m : d == "checked" ? b = m : c && typeof m != "function" || E[d] === m || ho(e, d, m, E[d], i);
    if (p) c || u && (p.__html == u.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html), r.__k = [];
    else if (u && (e.innerHTML = ""), Il(r.type == "template" ? e.content : e, eo(f) ? f : [f], r, t, o, _ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, s, a ? a[0] : t.__k && dr(t, 0), c, l), a != null) for (d = a.length; d--; ) o1(a[d]);
    c || (d = "value", _ == "progress" && w == null ? e.removeAttribute("value") : w != null && (w !== e[d] || _ == "progress" && !w || _ == "option" && w != E[d]) && ho(e, d, w, E[d], i), d = "checked", b != null && b != e[d] && ho(e, d, b, E[d], i));
  }
  return e;
}
function n1(e, r, t) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && r == null || (e.__u = e(r));
    } else e.current = r;
  } catch (i) {
    J.__e(i, t);
  }
}
function Hl(e, r, t) {
  var o, i;
  if (J.unmount && J.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || n1(o, null, r)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (a) {
      J.__e(a, r);
    }
    o.base = o.__P = null;
  }
  if (o = e.__k) for (i = 0; i < o.length; i++) o[i] && Hl(o[i], r, t || typeof e.type != "function");
  t || o1(e.__e), e.__c = e.__ = e.__e = void 0;
}
function P2(e, r, t) {
  return this.constructor(e, t);
}
function Je(e, r, t) {
  var o, i, a, s;
  r == document && (r = document.documentElement), J.__ && J.__(e, r), i = (o = typeof t == "function") ? null : t && t.__k || r.__k, a = [], s = [], i1(r, e = (!o && t || r).__k = Ke(we, null, [e]), i || Wr, Wr, r.namespaceURI, !o && t ? [t] : i ? null : r.firstChild ? Qr.call(r.childNodes) : null, a, !o && t ? t : i ? i.__e : r.firstChild, o, s), Pl(a, e, s);
}
function zl(e, r) {
  Je(e, r, zl);
}
function D2(e, r, t) {
  var o, i, a, s, c = gt({}, e.props);
  for (a in e.type && e.type.defaultProps && (s = e.type.defaultProps), r) a == "key" ? o = r[a] : a == "ref" ? i = r[a] : c[a] = r[a] == null && s != null ? s[a] : r[a];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Qr.call(arguments, 2) : t), jr(e.type, c, o || e.key, i || e.ref, null);
}
function Bl(e) {
  function r(t) {
    var o, i;
    return this.getChildContext || (o = /* @__PURE__ */ new Set(), (i = {})[r.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && o.forEach(function(s) {
        s.__e = !0, Fn(s);
      });
    }, this.sub = function(a) {
      o.add(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o && o.delete(a), s && s.call(a);
      };
    }), t.children;
  }
  return r.__c = "__cC" + Nl++, r.__ = e, r.Provider = r.__l = (r.Consumer = function(t, o) {
    return t.children(o);
  }).contextType = r, r;
}
Qr = Ll.slice, J = { __e: function(e, r, t, o) {
  for (var i, a, s; r = r.__; ) if ((i = r.__c) && !i.__) try {
    if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), s = i.__d), s) return i.__E = i;
  } catch (c) {
    e = c;
  }
  throw e;
} }, Al = 0, nt.prototype.setState = function(e, r) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = gt({}, this.state), typeof e == "function" && (e = e(gt({}, t), this.props)), e && gt(t, e), e != null && this.__v && (r && this._sb.push(r), Fn(this));
}, nt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Fn(this));
}, nt.prototype.render = we, Vt = [], El = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Sl = function(e, r) {
  return e.__v.__b - r.__v.__b;
}, Lo.__r = 0, Tl = /(PointerCapture)$|Capture$/i, r1 = 0, zn = J1(!1), Bn = J1(!0), Nl = 0;
var H2 = 0;
function n(e, r, t, o, i, a) {
  r || (r = {});
  var s, c, l = r;
  if ("ref" in l) for (c in l = {}, r) c == "ref" ? s = r[c] : l[c] = r[c];
  var d = { type: e, props: l, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --H2, __i: -1, __u: 0, __source: i, __self: a };
  if (typeof e == "function" && (s = e.defaultProps)) for (c in s) l[c] === void 0 && (l[c] = s[c]);
  return J.vnode && J.vnode(d), d;
}
var St, de, Yo, Q1, ur = 0, Fl = [], be = J, ea = be.__b, ta = be.__r, ra = be.diffed, oa = be.__c, ia = be.unmount, na = be.__;
function qt(e, r) {
  be.__h && be.__h(de, e, ur || r), ur = 0;
  var t = de.__H || (de.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({}), t.__[e];
}
function Z(e) {
  return ur = 1, Oo($l, e);
}
function Oo(e, r, t) {
  var o = qt(St++, 2);
  if (o.t = e, !o.__c && (o.__ = [t ? t(r) : $l(void 0, r), function(c) {
    var l = o.__N ? o.__N[0] : o.__[0], d = o.t(l, c);
    l !== d && (o.__N = [d, o.__[1]], o.__c.setState({}));
  }], o.__c = de, !de.__f)) {
    var i = function(c, l, d) {
      if (!o.__c.__H) return !0;
      var p = o.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (p.every(function(f) {
        return !f.__N;
      })) return !a || a.call(this, c, l, d);
      var u = o.__c.props !== c;
      return p.forEach(function(f) {
        if (f.__N) {
          var m = f.__[0];
          f.__ = f.__N, f.__N = void 0, m !== f.__[0] && (u = !0);
        }
      }), a && a.call(this, c, l, d) || u;
    };
    de.__f = !0;
    var a = de.shouldComponentUpdate, s = de.componentWillUpdate;
    de.componentWillUpdate = function(c, l, d) {
      if (this.__e) {
        var p = a;
        a = void 0, i(c, l, d), a = p;
      }
      s && s.call(this, c, l, d);
    }, de.shouldComponentUpdate = i;
  }
  return o.__N || o.__;
}
function O(e, r) {
  var t = qt(St++, 3);
  !be.__s && c1(t.__H, r) && (t.__ = e, t.u = r, de.__H.__h.push(t));
}
function br(e, r) {
  var t = qt(St++, 4);
  !be.__s && c1(t.__H, r) && (t.__ = e, t.u = r, de.__h.push(t));
}
function Me(e) {
  return ur = 5, to(function() {
    return { current: e };
  }, []);
}
function Po(e, r, t) {
  ur = 6, br(function() {
    if (typeof e == "function") {
      var o = e(r());
      return function() {
        e(null), o && typeof o == "function" && o();
      };
    }
    if (e) return e.current = r(), function() {
      return e.current = null;
    };
  }, t == null ? t : t.concat(e));
}
function to(e, r) {
  var t = qt(St++, 7);
  return c1(t.__H, r) && (t.__ = e(), t.__H = r, t.__h = e), t.__;
}
function ro(e, r) {
  return ur = 8, to(function() {
    return e;
  }, r);
}
function a1(e) {
  var r = de.context[e.__c], t = qt(St++, 9);
  return t.c = e, r ? (t.__ == null && (t.__ = !0, r.sub(de)), r.props.value) : e.__;
}
function s1(e, r) {
  be.useDebugValue && be.useDebugValue(r ? r(e) : e);
}
function z2(e) {
  var r = qt(St++, 10), t = Z();
  return r.__ = e, de.componentDidCatch || (de.componentDidCatch = function(o, i) {
    r.__ && r.__(o, i), t[1](o);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function l1() {
  var e = qt(St++, 11);
  if (!e.__) {
    for (var r = de.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    var t = r.__m || (r.__m = [0, 0]);
    e.__ = "P" + t[0] + "-" + t[1]++;
  }
  return e.__;
}
function B2() {
  for (var e; e = Fl.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(So), e.__H.__h.forEach($n), e.__H.__h = [];
  } catch (r) {
    e.__H.__h = [], be.__e(r, e.__v);
  }
}
be.__b = function(e) {
  de = null, ea && ea(e);
}, be.__ = function(e, r) {
  e && r.__k && r.__k.__m && (e.__m = r.__k.__m), na && na(e, r);
}, be.__r = function(e) {
  ta && ta(e), St = 0;
  var r = (de = e.__c).__H;
  r && (Yo === de ? (r.__h = [], de.__h = [], r.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (r.__h.forEach(So), r.__h.forEach($n), r.__h = [], St = 0)), Yo = de;
}, be.diffed = function(e) {
  ra && ra(e);
  var r = e.__c;
  r && r.__H && (r.__H.__h.length && (Fl.push(r) !== 1 && Q1 === be.requestAnimationFrame || ((Q1 = be.requestAnimationFrame) || F2)(B2)), r.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Yo = de = null;
}, be.__c = function(e, r) {
  r.some(function(t) {
    try {
      t.__h.forEach(So), t.__h = t.__h.filter(function(o) {
        return !o.__ || $n(o);
      });
    } catch (o) {
      r.some(function(i) {
        i.__h && (i.__h = []);
      }), r = [], be.__e(o, t.__v);
    }
  }), oa && oa(e, r);
}, be.unmount = function(e) {
  ia && ia(e);
  var r, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(o) {
    try {
      So(o);
    } catch (i) {
      r = i;
    }
  }), t.__H = void 0, r && be.__e(r, t.__v));
};
var aa = typeof requestAnimationFrame == "function";
function F2(e) {
  var r, t = function() {
    clearTimeout(o), aa && cancelAnimationFrame(r), setTimeout(e);
  }, o = setTimeout(t, 100);
  aa && (r = requestAnimationFrame(t));
}
function So(e) {
  var r = de, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), de = r;
}
function $n(e) {
  var r = de;
  e.__c = e.__(), de = r;
}
function c1(e, r) {
  return !e || e.length !== r.length || r.some(function(t, o) {
    return t !== e[o];
  });
}
function $l(e, r) {
  return typeof r == "function" ? r(e) : r;
}
const sa = (e) => {
  let r;
  const t = /* @__PURE__ */ new Set(), o = (d, p) => {
    const u = typeof d == "function" ? d(r) : d;
    if (!Object.is(u, r)) {
      const f = r;
      r = p ?? (typeof u != "object" || u === null) ? u : Object.assign({}, r, u), t.forEach((m) => m(r, f));
    }
  }, i = () => r, c = { setState: o, getState: i, getInitialState: () => l, subscribe: (d) => (t.add(d), () => t.delete(d)) }, l = r = e(o, i, c);
  return c;
}, $2 = (e) => e ? sa(e) : sa;
function Ul(e, r) {
  for (var t in r) e[t] = r[t];
  return e;
}
function Un(e, r) {
  for (var t in e) if (t !== "__source" && !(t in r)) return !0;
  for (var o in r) if (o !== "__source" && e[o] !== r[o]) return !0;
  return !1;
}
function d1(e, r) {
  var t = r(), o = Z({ t: { __: t, u: r } }), i = o[0].t, a = o[1];
  return br(function() {
    i.__ = t, i.u = r, Ko(i) && a({ t: i });
  }, [e, t, r]), O(function() {
    return Ko(i) && a({ t: i }), e(function() {
      Ko(i) && a({ t: i });
    });
  }, [e]), t;
}
function Ko(e) {
  var r, t, o = e.u, i = e.__;
  try {
    var a = o();
    return !((r = i) === (t = a) && (r !== 0 || 1 / r == 1 / t) || r != r && t != t);
  } catch {
    return !0;
  }
}
function u1(e) {
  e();
}
function p1(e) {
  return e;
}
function h1() {
  return [!1, u1];
}
var f1 = br;
function Ro(e, r) {
  this.props = e, this.context = r;
}
function Vl(e, r) {
  function t(i) {
    var a = this.props.ref, s = a == i.ref;
    return !s && a && (a.call ? a(null) : a.current = null), r ? !r(this.props, i) || !s : Un(this.props, i);
  }
  function o(i) {
    return this.shouldComponentUpdate = t, Ke(e, i);
  }
  return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, o.__f = !0, o;
}
(Ro.prototype = new nt()).isPureReactComponent = !0, Ro.prototype.shouldComponentUpdate = function(e, r) {
  return Un(this.props, e) || Un(this.state, r);
};
var la = J.__b;
J.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), la && la(e);
};
var U2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Ce(e) {
  function r(t) {
    var o = Ul({}, t);
    return delete o.ref, e(o, t.ref || null);
  }
  return r.$$typeof = U2, r.render = r, r.prototype.isReactComponent = r.__f = !0, r.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", r;
}
var ca = function(e, r) {
  return e == null ? null : At(At(e).map(r));
}, jl = { map: ca, forEach: ca, count: function(e) {
  return e ? At(e).length : 0;
}, only: function(e) {
  var r = At(e);
  if (r.length !== 1) throw "Children.only";
  return r[0];
}, toArray: At }, V2 = J.__e;
J.__e = function(e, r, t, o) {
  if (e.then) {
    for (var i, a = r; a = a.__; ) if ((i = a.__c) && i.__c) return r.__e == null && (r.__e = t.__e, r.__k = t.__k), i.__c(e, r);
  }
  V2(e, r, t, o);
};
var da = J.unmount;
function Gl(e, r, t) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
    typeof o.__c == "function" && o.__c();
  }), e.__c.__H = null), (e = Ul({}, e)).__c != null && (e.__c.__P === t && (e.__c.__P = r), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
    return Gl(o, r, t);
  })), e;
}
function ql(e, r, t) {
  return e && t && (e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
    return ql(o, r, t);
  }), e.__c && e.__c.__P === r && (e.__e && t.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = t)), e;
}
function Gr() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Zl(e) {
  var r = e.__.__c;
  return r && r.__a && r.__a(e);
}
function Wl(e) {
  var r, t, o;
  function i(a) {
    if (r || (r = e()).then(function(s) {
      t = s.default || s;
    }, function(s) {
      o = s;
    }), o) throw o;
    if (!t) throw r;
    return Ke(t, a);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function sr() {
  this.i = null, this.l = null;
}
J.unmount = function(e) {
  var r = e.__c;
  r && r.__R && r.__R(), r && 32 & e.__u && (e.type = null), da && da(e);
}, (Gr.prototype = new nt()).__c = function(e, r) {
  var t = r.__c, o = this;
  o.o == null && (o.o = []), o.o.push(t);
  var i = Zl(o.__v), a = !1, s = function() {
    a || (a = !0, t.__R = null, i ? i(c) : c());
  };
  t.__R = s;
  var c = function() {
    if (!--o.__u) {
      if (o.state.__a) {
        var l = o.state.__a;
        o.__v.__k[0] = ql(l, l.__c.__P, l.__c.__O);
      }
      var d;
      for (o.setState({ __a: o.__b = null }); d = o.o.pop(); ) d.forceUpdate();
    }
  };
  o.__u++ || 32 & r.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), e.then(s, s);
}, Gr.prototype.componentWillUnmount = function() {
  this.o = [];
}, Gr.prototype.render = function(e, r) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), o = this.__v.__k[0].__c;
      this.__v.__k[0] = Gl(this.__b, t, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = r.__a && Ke(we, null, e.fallback);
  return i && (i.__u &= -33), [Ke(we, null, r.__a ? null : e.children), i];
};
var ua = function(e, r, t) {
  if (++t[1] === t[0] && e.l.delete(r), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (t = e.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[0]) break;
    e.i = t = t[2];
  }
};
function j2(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function G2(e) {
  var r = this, t = e.h;
  r.componentWillUnmount = function() {
    Je(null, r.v), r.v = null, r.h = null;
  }, r.h && r.h !== t && r.componentWillUnmount(), r.v || (r.h = t, r.v = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(o) {
    this.childNodes.push(o), r.h.appendChild(o);
  }, insertBefore: function(o, i) {
    this.childNodes.push(o), r.h.insertBefore(o, i);
  }, removeChild: function(o) {
    this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), r.h.removeChild(o);
  } }), Je(Ke(j2, { context: r.context }, e.__v), r.v);
}
function Xl(e, r) {
  var t = Ke(G2, { __v: e, h: r });
  return t.containerInfo = r, t;
}
(sr.prototype = new nt()).__a = function(e) {
  var r = this, t = Zl(r.__v), o = r.l.get(e);
  return o[0]++, function(i) {
    var a = function() {
      r.props.revealOrder ? (o.push(i), ua(r, e, o)) : i();
    };
    t ? t(a) : a();
  };
}, sr.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var r = At(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && r.reverse();
  for (var t = r.length; t--; ) this.l.set(r[t], this.i = [1, 0, this.i]);
  return e.children;
}, sr.prototype.componentDidUpdate = sr.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(r, t) {
    ua(e, t, r);
  });
};
var Yl = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, q2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Z2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, W2 = /[A-Z0-9]/g, X2 = typeof document < "u", Y2 = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Kl(e, r, t) {
  return r.__k == null && (r.textContent = ""), Je(e, r), typeof t == "function" && t(), e ? e.__c : null;
}
function Jl(e, r, t) {
  return zl(e, r), typeof t == "function" && t(), e ? e.__c : null;
}
nt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(nt.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(r) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: r });
  } });
});
var pa = J.event;
function K2() {
}
function J2() {
  return this.cancelBubble;
}
function Q2() {
  return this.defaultPrevented;
}
J.event = function(e) {
  return pa && (e = pa(e)), e.persist = K2, e.isPropagationStopped = J2, e.isDefaultPrevented = Q2, e.nativeEvent = e;
};
var g1, e5 = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, ha = J.vnode;
J.vnode = function(e) {
  typeof e.type == "string" && function(r) {
    var t = r.props, o = r.type, i = {}, a = o.indexOf("-") === -1;
    for (var s in t) {
      var c = t[s];
      if (!(s === "value" && "defaultValue" in t && c == null || X2 && s === "children" && o === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in t && t.value == null ? s = "value" : s === "download" && c === !0 ? c = "" : l === "translate" && c === "no" ? c = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || o !== "input" && o !== "textarea" || Y2(t.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : Z2.test(s) && (s = l) : l = s = "oninput" : a && q2.test(s) ? s = s.replace(W2, "-$&").toLowerCase() : c === null && (c = void 0), l === "oninput" && i[s = l] && (s = "oninputCapture"), i[s] = c;
      }
    }
    o == "select" && i.multiple && Array.isArray(i.value) && (i.value = At(t.children).forEach(function(d) {
      d.props.selected = i.value.indexOf(d.props.value) != -1;
    })), o == "select" && i.defaultValue != null && (i.value = At(t.children).forEach(function(d) {
      d.props.selected = i.multiple ? i.defaultValue.indexOf(d.props.value) != -1 : i.defaultValue == d.props.value;
    })), t.class && !t.className ? (i.class = t.class, Object.defineProperty(i, "className", e5)) : (t.className && !t.class || t.class && t.className) && (i.class = i.className = t.className), r.props = i;
  }(e), e.$$typeof = Yl, ha && ha(e);
};
var fa = J.__r;
J.__r = function(e) {
  fa && fa(e), g1 = e.__c;
};
var ga = J.diffed;
J.diffed = function(e) {
  ga && ga(e);
  var r = e.props, t = e.__e;
  t != null && e.type === "textarea" && "value" in r && r.value !== t.value && (t.value = r.value == null ? "" : r.value), g1 = null;
};
var Ql = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return g1.__n[e.__c].props.value;
}, useCallback: ro, useContext: a1, useDebugValue: s1, useDeferredValue: p1, useEffect: O, useId: l1, useImperativeHandle: Po, useInsertionEffect: f1, useLayoutEffect: br, useMemo: to, useReducer: Oo, useRef: Me, useState: Z, useSyncExternalStore: d1, useTransition: h1 } } }, t5 = "18.3.1";
function ec(e) {
  return Ke.bind(null, e);
}
function oo(e) {
  return !!e && e.$$typeof === Yl;
}
function tc(e) {
  return oo(e) && e.type === we;
}
function rc(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function oc(e) {
  return oo(e) ? D2.apply(null, arguments) : e;
}
function ic(e) {
  return !!e.__k && (Je(null, e), !0);
}
function nc(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var ac = function(e, r) {
  return e(r);
}, sc = function(e, r) {
  return e(r);
}, lc = we, cc = oo, Vn = { useState: Z, useId: l1, useReducer: Oo, useEffect: O, useLayoutEffect: br, useInsertionEffect: f1, useTransition: h1, useDeferredValue: p1, useSyncExternalStore: d1, startTransition: u1, useRef: Me, useImperativeHandle: Po, useMemo: to, useCallback: ro, useContext: a1, useDebugValue: s1, version: "18.3.1", Children: jl, render: Kl, hydrate: Jl, unmountComponentAtNode: ic, createPortal: Xl, createElement: Ke, createContext: Bl, createFactory: ec, cloneElement: oc, createRef: Rl, Fragment: we, isValidElement: oo, isElement: cc, isFragment: tc, isMemo: rc, findDOMNode: nc, Component: nt, PureComponent: Ro, memo: Vl, forwardRef: Ce, flushSync: sc, unstable_batchedUpdates: ac, StrictMode: lc, Suspense: Gr, SuspenseList: sr, lazy: Wl, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ql };
const r5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: jl,
  Component: nt,
  Fragment: we,
  PureComponent: Ro,
  StrictMode: lc,
  Suspense: Gr,
  SuspenseList: sr,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ql,
  cloneElement: oc,
  createContext: Bl,
  createElement: Ke,
  createFactory: ec,
  createPortal: Xl,
  createRef: Rl,
  default: Vn,
  findDOMNode: nc,
  flushSync: sc,
  forwardRef: Ce,
  hydrate: Jl,
  isElement: cc,
  isFragment: tc,
  isMemo: rc,
  isValidElement: oo,
  lazy: Wl,
  memo: Vl,
  render: Kl,
  startTransition: u1,
  unmountComponentAtNode: ic,
  unstable_batchedUpdates: ac,
  useCallback: ro,
  useContext: a1,
  useDebugValue: s1,
  useDeferredValue: p1,
  useEffect: O,
  useErrorBoundary: z2,
  useId: l1,
  useImperativeHandle: Po,
  useInsertionEffect: f1,
  useLayoutEffect: br,
  useMemo: to,
  useReducer: Oo,
  useRef: Me,
  useState: Z,
  useSyncExternalStore: d1,
  useTransition: h1,
  version: t5
}, Symbol.toStringTag, { value: "Module" })), o5 = (e) => e;
function i5(e, r = o5) {
  const t = Vn.useSyncExternalStore(
    e.subscribe,
    () => r(e.getState()),
    () => r(e.getInitialState())
  );
  return Vn.useDebugValue(t), t;
}
const ma = (e) => {
  const r = $2(e), t = (o) => i5(r, o);
  return Object.assign(t, r), t;
}, Ot = (e) => e ? ma(e) : ma;
function n5(e, r) {
  let t;
  try {
    t = e();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var a;
      const s = (l) => l === null ? null : JSON.parse(l, void 0), c = (a = t.getItem(i)) != null ? a : null;
      return c instanceof Promise ? c.then(s) : s(c);
    },
    setItem: (i, a) => t.setItem(
      i,
      JSON.stringify(a, void 0)
    ),
    removeItem: (i) => t.removeItem(i)
  };
}
const jn = (e) => (r) => {
  try {
    const t = e(r);
    return t instanceof Promise ? t : {
      then(o) {
        return jn(o)(t);
      },
      catch(o) {
        return this;
      }
    };
  } catch (t) {
    return {
      then(o) {
        return this;
      },
      catch(o) {
        return jn(o)(t);
      }
    };
  }
}, a5 = (e, r) => (t, o, i) => {
  let a = {
    storage: n5(() => localStorage),
    partialize: (b) => b,
    version: 0,
    merge: (b, E) => ({
      ...E,
      ...b
    }),
    ...r
  }, s = !1;
  const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let d = a.storage;
  if (!d)
    return e(
      (...b) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), t(...b);
      },
      o,
      i
    );
  const p = () => {
    const b = a.partialize({ ...o() });
    return d.setItem(a.name, {
      state: b,
      version: a.version
    });
  }, u = i.setState;
  i.setState = (b, E) => {
    u(b, E), p();
  };
  const f = e(
    (...b) => {
      t(...b), p();
    },
    o,
    i
  );
  i.getInitialState = () => f;
  let m;
  const w = () => {
    var b, E;
    if (!d) return;
    s = !1, c.forEach((_) => {
      var C;
      return _((C = o()) != null ? C : f);
    });
    const S = ((E = a.onRehydrateStorage) == null ? void 0 : E.call(a, (b = o()) != null ? b : f)) || void 0;
    return jn(d.getItem.bind(d))(a.name).then((_) => {
      if (_)
        if (typeof _.version == "number" && _.version !== a.version) {
          if (a.migrate) {
            const C = a.migrate(
              _.state,
              _.version
            );
            return C instanceof Promise ? C.then((x) => [!0, x]) : [!0, C];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, _.state];
      return [!1, void 0];
    }).then((_) => {
      var C;
      const [x, h] = _;
      if (m = a.merge(
        h,
        (C = o()) != null ? C : f
      ), t(m, !0), x)
        return p();
    }).then(() => {
      S == null || S(m, void 0), m = o(), s = !0, l.forEach((_) => _(m));
    }).catch((_) => {
      S == null || S(void 0, _);
    });
  };
  return i.persist = {
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
    rehydrate: () => w(),
    hasHydrated: () => s,
    onHydrate: (b) => (c.add(b), () => {
      c.delete(b);
    }),
    onFinishHydration: (b) => (l.add(b), () => {
      l.delete(b);
    })
  }, a.skipHydration || w(), m || f;
}, dc = a5;
function uc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function s5(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function o() {
      return this instanceof o ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var i = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(t, o, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), t;
}
var Jo, va;
function pc() {
  if (va) return Jo;
  va = 1;
  var e = Object.prototype.toString;
  return Jo = function(t) {
    var o = e.call(t), i = o === "[object Arguments]";
    return i || (i = o !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && e.call(t.callee) === "[object Function]"), i;
  }, Jo;
}
var Qo, ba;
function l5() {
  if (ba) return Qo;
  ba = 1;
  var e;
  if (!Object.keys) {
    var r = Object.prototype.hasOwnProperty, t = Object.prototype.toString, o = pc(), i = Object.prototype.propertyIsEnumerable, a = !i.call({ toString: null }, "toString"), s = i.call(function() {
    }, "prototype"), c = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], l = function(f) {
      var m = f.constructor;
      return m && m.prototype === f;
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
      for (var f in window)
        try {
          if (!d["$" + f] && r.call(window, f) && window[f] !== null && typeof window[f] == "object")
            try {
              l(window[f]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), u = function(f) {
      if (typeof window > "u" || !p)
        return l(f);
      try {
        return l(f);
      } catch {
        return !1;
      }
    };
    e = function(m) {
      var w = m !== null && typeof m == "object", b = t.call(m) === "[object Function]", E = o(m), S = w && t.call(m) === "[object String]", _ = [];
      if (!w && !b && !E)
        throw new TypeError("Object.keys called on a non-object");
      var C = s && b;
      if (S && m.length > 0 && !r.call(m, 0))
        for (var x = 0; x < m.length; ++x)
          _.push(String(x));
      if (E && m.length > 0)
        for (var h = 0; h < m.length; ++h)
          _.push(String(h));
      else
        for (var g in m)
          !(C && g === "prototype") && r.call(m, g) && _.push(String(g));
      if (a)
        for (var y = u(m), k = 0; k < c.length; ++k)
          !(y && c[k] === "constructor") && r.call(m, c[k]) && _.push(c[k]);
      return _;
    };
  }
  return Qo = e, Qo;
}
var ei, Ca;
function c5() {
  if (Ca) return ei;
  Ca = 1;
  var e = Array.prototype.slice, r = pc(), t = Object.keys, o = t ? function(s) {
    return t(s);
  } : l5(), i = Object.keys;
  return o.shim = function() {
    if (Object.keys) {
      var s = function() {
        var c = Object.keys(arguments);
        return c && c.length === arguments.length;
      }(1, 2);
      s || (Object.keys = function(l) {
        return r(l) ? i(e.call(l)) : i(l);
      });
    } else
      Object.keys = o;
    return Object.keys || o;
  }, ei = o, ei;
}
var ti, ya;
function Do() {
  if (ya) return ti;
  ya = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return ti = e, ti;
}
var ri, wa;
function hc() {
  return wa || (wa = 1, ri = SyntaxError), ri;
}
var oi, _a;
function io() {
  return _a || (_a = 1, oi = TypeError), oi;
}
var ii, xa;
function d5() {
  return xa || (xa = 1, ii = Object.getOwnPropertyDescriptor), ii;
}
var ni, ka;
function Ho() {
  if (ka) return ni;
  ka = 1;
  var e = /* @__PURE__ */ d5();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return ni = e, ni;
}
var ai, Aa;
function fc() {
  if (Aa) return ai;
  Aa = 1;
  var e = /* @__PURE__ */ Do(), r = /* @__PURE__ */ hc(), t = /* @__PURE__ */ io(), o = /* @__PURE__ */ Ho();
  return ai = function(a, s, c) {
    if (!a || typeof a != "object" && typeof a != "function")
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
    var l = arguments.length > 3 ? arguments[3] : null, d = arguments.length > 4 ? arguments[4] : null, p = arguments.length > 5 ? arguments[5] : null, u = arguments.length > 6 ? arguments[6] : !1, f = !!o && o(a, s);
    if (e)
      e(a, s, {
        configurable: p === null && f ? f.configurable : !p,
        enumerable: l === null && f ? f.enumerable : !l,
        value: c,
        writable: d === null && f ? f.writable : !d
      });
    else if (u || !l && !d && !p)
      a[s] = c;
    else
      throw new r("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, ai;
}
var si, Ea;
function gc() {
  if (Ea) return si;
  Ea = 1;
  var e = /* @__PURE__ */ Do(), r = function() {
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
  }, si = r, si;
}
var li, Sa;
function mc() {
  if (Sa) return li;
  Sa = 1;
  var e = c5(), r = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", t = Object.prototype.toString, o = Array.prototype.concat, i = /* @__PURE__ */ fc(), a = function(d) {
    return typeof d == "function" && t.call(d) === "[object Function]";
  }, s = /* @__PURE__ */ gc()(), c = function(d, p, u, f) {
    if (p in d) {
      if (f === !0) {
        if (d[p] === u)
          return;
      } else if (!a(f) || !f())
        return;
    }
    s ? i(d, p, u, !0) : i(d, p, u);
  }, l = function(d, p) {
    var u = arguments.length > 2 ? arguments[2] : {}, f = e(p);
    r && (f = o.call(f, Object.getOwnPropertySymbols(p)));
    for (var m = 0; m < f.length; m += 1)
      c(d, f[m], p[f[m]], u[f[m]]);
  };
  return l.supportsDescriptors = !!s, li = l, li;
}
var ci = { exports: {} }, di, Ta;
function vc() {
  return Ta || (Ta = 1, di = Object), di;
}
var ui, Na;
function u5() {
  return Na || (Na = 1, ui = Error), ui;
}
var pi, La;
function p5() {
  return La || (La = 1, pi = EvalError), pi;
}
var hi, Ra;
function h5() {
  return Ra || (Ra = 1, hi = RangeError), hi;
}
var fi, Ma;
function f5() {
  return Ma || (Ma = 1, fi = ReferenceError), fi;
}
var gi, Ia;
function g5() {
  return Ia || (Ia = 1, gi = URIError), gi;
}
var mi, Oa;
function m5() {
  return Oa || (Oa = 1, mi = Math.abs), mi;
}
var vi, Pa;
function v5() {
  return Pa || (Pa = 1, vi = Math.floor), vi;
}
var bi, Da;
function b5() {
  return Da || (Da = 1, bi = Math.max), bi;
}
var Ci, Ha;
function C5() {
  return Ha || (Ha = 1, Ci = Math.min), Ci;
}
var yi, za;
function y5() {
  return za || (za = 1, yi = Math.pow), yi;
}
var wi, Ba;
function w5() {
  return Ba || (Ba = 1, wi = Math.round), wi;
}
var _i, Fa;
function _5() {
  return Fa || (Fa = 1, _i = Number.isNaN || function(r) {
    return r !== r;
  }), _i;
}
var xi, $a;
function x5() {
  if ($a) return xi;
  $a = 1;
  var e = /* @__PURE__ */ _5();
  return xi = function(t) {
    return e(t) || t === 0 ? t : t < 0 ? -1 : 1;
  }, xi;
}
var ki, Ua;
function k5() {
  return Ua || (Ua = 1, ki = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var r = {}, t = Symbol("test"), o = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Symbol]")
      return !1;
    var i = 42;
    r[t] = i;
    for (var a in r)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(r);
    if (s.length !== 1 || s[0] !== t || !Object.prototype.propertyIsEnumerable.call(r, t))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var c = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(r, t)
      );
      if (c.value !== i || c.enumerable !== !0)
        return !1;
    }
    return !0;
  }), ki;
}
var Ai, Va;
function A5() {
  if (Va) return Ai;
  Va = 1;
  var e = typeof Symbol < "u" && Symbol, r = k5();
  return Ai = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
  }, Ai;
}
var Ei, ja;
function bc() {
  return ja || (ja = 1, Ei = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ei;
}
var Si, Ga;
function Cc() {
  if (Ga) return Si;
  Ga = 1;
  var e = /* @__PURE__ */ vc();
  return Si = e.getPrototypeOf || null, Si;
}
var Ti, qa;
function E5() {
  if (qa) return Ti;
  qa = 1;
  var e = "Function.prototype.bind called on incompatible ", r = Object.prototype.toString, t = Math.max, o = "[object Function]", i = function(l, d) {
    for (var p = [], u = 0; u < l.length; u += 1)
      p[u] = l[u];
    for (var f = 0; f < d.length; f += 1)
      p[f + l.length] = d[f];
    return p;
  }, a = function(l, d) {
    for (var p = [], u = d, f = 0; u < l.length; u += 1, f += 1)
      p[f] = l[u];
    return p;
  }, s = function(c, l) {
    for (var d = "", p = 0; p < c.length; p += 1)
      d += c[p], p + 1 < c.length && (d += l);
    return d;
  };
  return Ti = function(l) {
    var d = this;
    if (typeof d != "function" || r.apply(d) !== o)
      throw new TypeError(e + d);
    for (var p = a(arguments, 1), u, f = function() {
      if (this instanceof u) {
        var S = d.apply(
          this,
          i(p, arguments)
        );
        return Object(S) === S ? S : this;
      }
      return d.apply(
        l,
        i(p, arguments)
      );
    }, m = t(0, d.length - p.length), w = [], b = 0; b < m; b++)
      w[b] = "$" + b;
    if (u = Function("binder", "return function (" + s(w, ",") + "){ return binder.apply(this,arguments); }")(f), d.prototype) {
      var E = function() {
      };
      E.prototype = d.prototype, u.prototype = new E(), E.prototype = null;
    }
    return u;
  }, Ti;
}
var Ni, Za;
function no() {
  if (Za) return Ni;
  Za = 1;
  var e = E5();
  return Ni = Function.prototype.bind || e, Ni;
}
var Li, Wa;
function m1() {
  return Wa || (Wa = 1, Li = Function.prototype.call), Li;
}
var Ri, Xa;
function v1() {
  return Xa || (Xa = 1, Ri = Function.prototype.apply), Ri;
}
var Mi, Ya;
function S5() {
  return Ya || (Ya = 1, Mi = typeof Reflect < "u" && Reflect && Reflect.apply), Mi;
}
var Ii, Ka;
function yc() {
  if (Ka) return Ii;
  Ka = 1;
  var e = no(), r = v1(), t = m1(), o = S5();
  return Ii = o || e.call(t, r), Ii;
}
var Oi, Ja;
function b1() {
  if (Ja) return Oi;
  Ja = 1;
  var e = no(), r = /* @__PURE__ */ io(), t = m1(), o = yc();
  return Oi = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new r("a function is required");
    return o(e, t, a);
  }, Oi;
}
var Pi, Qa;
function T5() {
  if (Qa) return Pi;
  Qa = 1;
  var e = b1(), r = /* @__PURE__ */ Ho(), t;
  try {
    t = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var o = !!t && r && r(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, a = i.getPrototypeOf;
  return Pi = o && typeof o.get == "function" ? e([o.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(c) {
      return a(c == null ? c : i(c));
    }
  ) : !1, Pi;
}
var Di, es;
function N5() {
  if (es) return Di;
  es = 1;
  var e = bc(), r = Cc(), t = /* @__PURE__ */ T5();
  return Di = e ? function(i) {
    return e(i);
  } : r ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return r(i);
  } : t ? function(i) {
    return t(i);
  } : null, Di;
}
var Hi, ts;
function wc() {
  if (ts) return Hi;
  ts = 1;
  var e = Function.prototype.call, r = Object.prototype.hasOwnProperty, t = no();
  return Hi = t.call(e, r), Hi;
}
var zi, rs;
function _c() {
  if (rs) return zi;
  rs = 1;
  var e, r = /* @__PURE__ */ vc(), t = /* @__PURE__ */ u5(), o = /* @__PURE__ */ p5(), i = /* @__PURE__ */ h5(), a = /* @__PURE__ */ f5(), s = /* @__PURE__ */ hc(), c = /* @__PURE__ */ io(), l = /* @__PURE__ */ g5(), d = /* @__PURE__ */ m5(), p = /* @__PURE__ */ v5(), u = /* @__PURE__ */ b5(), f = /* @__PURE__ */ C5(), m = /* @__PURE__ */ y5(), w = /* @__PURE__ */ w5(), b = /* @__PURE__ */ x5(), E = Function, S = function(ye) {
    try {
      return E('"use strict"; return (' + ye + ").constructor;")();
    } catch {
    }
  }, _ = /* @__PURE__ */ Ho(), C = /* @__PURE__ */ Do(), x = function() {
    throw new c();
  }, h = _ ? function() {
    try {
      return arguments.callee, x;
    } catch {
      try {
        return _(arguments, "callee").get;
      } catch {
        return x;
      }
    }
  }() : x, g = A5()(), y = N5(), k = Cc(), P = bc(), D = v1(), j = m1(), H = {}, $ = typeof Uint8Array > "u" || !y ? e : y(Uint8Array), z = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": g && y ? y([][Symbol.iterator]()) : e,
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
    "%Error%": t,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": o,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": E,
    "%GeneratorFunction%": H,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": g && y ? y(y([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !g || !y ? e : y((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": r,
    "%Object.getOwnPropertyDescriptor%": _,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !g || !y ? e : y((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": g && y ? y(""[Symbol.iterator]()) : e,
    "%Symbol%": g ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": h,
    "%TypedArray%": $,
    "%TypeError%": c,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": l,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": j,
    "%Function.prototype.apply%": D,
    "%Object.defineProperty%": C,
    "%Object.getPrototypeOf%": k,
    "%Math.abs%": d,
    "%Math.floor%": p,
    "%Math.max%": u,
    "%Math.min%": f,
    "%Math.pow%": m,
    "%Math.round%": w,
    "%Math.sign%": b,
    "%Reflect.getPrototypeOf%": P
  };
  if (y)
    try {
      null.error;
    } catch (ye) {
      var se = y(y(ye));
      z["%Error.prototype%"] = se;
    }
  var _e = function ye(oe) {
    var ce;
    if (oe === "%AsyncFunction%")
      ce = S("async function () {}");
    else if (oe === "%GeneratorFunction%")
      ce = S("function* () {}");
    else if (oe === "%AsyncGeneratorFunction%")
      ce = S("async function* () {}");
    else if (oe === "%AsyncGenerator%") {
      var te = ye("%AsyncGeneratorFunction%");
      te && (ce = te.prototype);
    } else if (oe === "%AsyncIteratorPrototype%") {
      var ve = ye("%AsyncGenerator%");
      ve && y && (ce = y(ve.prototype));
    }
    return z[oe] = ce, ce;
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
  }, U = no(), De = /* @__PURE__ */ wc(), st = U.call(j, Array.prototype.concat), ee = U.call(D, Array.prototype.splice), rt = U.call(j, String.prototype.replace), X = U.call(j, String.prototype.slice), me = U.call(j, RegExp.prototype.exec), ie = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ae = /\\(\\)?/g, ne = function(oe) {
    var ce = X(oe, 0, 1), te = X(oe, -1);
    if (ce === "%" && te !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (te === "%" && ce !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var ve = [];
    return rt(oe, ie, function(xe, qe, ke, Ae) {
      ve[ve.length] = ke ? rt(Ae, ae, "$1") : qe || xe;
    }), ve;
  }, lt = function(oe, ce) {
    var te = oe, ve;
    if (De(Le, te) && (ve = Le[te], te = "%" + ve[0] + "%"), De(z, te)) {
      var xe = z[te];
      if (xe === H && (xe = _e(te)), typeof xe > "u" && !ce)
        throw new c("intrinsic " + oe + " exists, but is not available. Please file an issue!");
      return {
        alias: ve,
        name: te,
        value: xe
      };
    }
    throw new s("intrinsic " + oe + " does not exist!");
  };
  return zi = function(oe, ce) {
    if (typeof oe != "string" || oe.length === 0)
      throw new c("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ce != "boolean")
      throw new c('"allowMissing" argument must be a boolean');
    if (me(/^%?[^%]*%?$/, oe) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var te = ne(oe), ve = te.length > 0 ? te[0] : "", xe = lt("%" + ve + "%", ce), qe = xe.name, ke = xe.value, Ae = !1, Ie = xe.alias;
    Ie && (ve = Ie[0], ee(te, st([0, 1], Ie)));
    for (var Ze = 1, Ge = !0; Ze < te.length; Ze += 1) {
      var Se = te[Ze], ct = X(Se, 0, 1), We = X(Se, -1);
      if ((ct === '"' || ct === "'" || ct === "`" || We === '"' || We === "'" || We === "`") && ct !== We)
        throw new s("property names with quotes must have matching quotes");
      if ((Se === "constructor" || !Ge) && (Ae = !0), ve += "." + Se, qe = "%" + ve + "%", De(z, qe))
        ke = z[qe];
      else if (ke != null) {
        if (!(Se in ke)) {
          if (!ce)
            throw new c("base intrinsic for " + oe + " exists, but the property is not available.");
          return;
        }
        if (_ && Ze + 1 >= te.length) {
          var dt = _(ke, Se);
          Ge = !!dt, Ge && "get" in dt && !("originalValue" in dt.get) ? ke = dt.get : ke = ke[Se];
        } else
          Ge = De(ke, Se), ke = ke[Se];
        Ge && !Ae && (z[qe] = ke);
      }
    }
    return ke;
  }, zi;
}
var Bi, os;
function L5() {
  if (os) return Bi;
  os = 1;
  var e = /* @__PURE__ */ _c(), r = /* @__PURE__ */ fc(), t = /* @__PURE__ */ gc()(), o = /* @__PURE__ */ Ho(), i = /* @__PURE__ */ io(), a = e("%Math.floor%");
  return Bi = function(c, l) {
    if (typeof c != "function")
      throw new i("`fn` is not a function");
    if (typeof l != "number" || l < 0 || l > 4294967295 || a(l) !== l)
      throw new i("`length` must be a positive 32-bit integer");
    var d = arguments.length > 2 && !!arguments[2], p = !0, u = !0;
    if ("length" in c && o) {
      var f = o(c, "length");
      f && !f.configurable && (p = !1), f && !f.writable && (u = !1);
    }
    return (p || u || !d) && (t ? r(
      /** @type {Parameters<define>[0]} */
      c,
      "length",
      l,
      !0,
      !0
    ) : r(
      /** @type {Parameters<define>[0]} */
      c,
      "length",
      l
    )), c;
  }, Bi;
}
var Fi, is;
function R5() {
  if (is) return Fi;
  is = 1;
  var e = no(), r = v1(), t = yc();
  return Fi = function() {
    return t(e, r, arguments);
  }, Fi;
}
var ns;
function M5() {
  return ns || (ns = 1, function(e) {
    var r = /* @__PURE__ */ L5(), t = /* @__PURE__ */ Do(), o = b1(), i = R5();
    e.exports = function(s) {
      var c = o(arguments), l = s.length - (arguments.length - 1);
      return r(
        c,
        1 + (l > 0 ? l : 0),
        !0
      );
    }, t ? t(e.exports, "apply", { value: i }) : e.exports.apply = i;
  }(ci)), ci.exports;
}
var $i, as;
function I5() {
  if (as) return $i;
  as = 1;
  var e = /* @__PURE__ */ io();
  return $i = function(t) {
    if (t == null)
      throw new e(arguments.length > 0 && arguments[1] || "Cannot call method on " + t);
    return t;
  }, $i;
}
var Ui, ss;
function O5() {
  if (ss) return Ui;
  ss = 1;
  var e = /* @__PURE__ */ _c(), r = b1(), t = r([e("%String.prototype.indexOf%")]);
  return Ui = function(i, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(i, !!a)
    );
    return typeof s == "function" && t(i, ".prototype.") > -1 ? r(
      /** @type {const} */
      [s]
    ) : s;
  }, Ui;
}
var Vi, ls;
function xc() {
  if (ls) return Vi;
  ls = 1;
  var e = /* @__PURE__ */ I5(), r = /* @__PURE__ */ O5(), t = r("Object.prototype.propertyIsEnumerable"), o = r("Array.prototype.push");
  return Vi = function(a) {
    var s = e(a), c = [];
    for (var l in s)
      t(s, l) && o(c, [l, s[l]]);
    return c;
  }, Vi;
}
var ji, cs;
function kc() {
  if (cs) return ji;
  cs = 1;
  var e = xc();
  return ji = function() {
    return typeof Object.entries == "function" ? Object.entries : e;
  }, ji;
}
var Gi, ds;
function P5() {
  if (ds) return Gi;
  ds = 1;
  var e = kc(), r = mc();
  return Gi = function() {
    var o = e();
    return r(Object, { entries: o }, {
      entries: function() {
        return Object.entries !== o;
      }
    }), o;
  }, Gi;
}
var qi, us;
function D5() {
  if (us) return qi;
  us = 1;
  var e = mc(), r = M5(), t = xc(), o = kc(), i = P5(), a = r(o(), Object);
  return e(a, {
    getPolyfill: o,
    implementation: t,
    shim: i
  }), qi = a, qi;
}
var Zi, ps;
function H5() {
  if (ps) return Zi;
  ps = 1;
  var e = {}, r = e.NODE_ENV !== "production", t = function() {
  };
  if (r) {
    var o = function(a, s) {
      var c = arguments.length;
      s = new Array(c > 1 ? c - 1 : 0);
      for (var l = 1; l < c; l++)
        s[l - 1] = arguments[l];
      var d = 0, p = "Warning: " + a.replace(/%s/g, function() {
        return s[d++];
      });
      typeof console < "u" && console.error(p);
      try {
        throw new Error(p);
      } catch {
      }
    };
    t = function(i, a, s) {
      var c = arguments.length;
      s = new Array(c > 2 ? c - 2 : 0);
      for (var l = 2; l < c; l++)
        s[l - 2] = arguments[l];
      if (a === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      i || o.apply(null, [a].concat(s));
    };
  }
  return Zi = t, Zi;
}
var Wi, hs;
function z5() {
  if (hs) return Wi;
  hs = 1;
  var e = D5(), r = H5(), t = /* @__PURE__ */ wc(), o = function(x) {
    r(!1, x);
  }, i = String.prototype.replace, a = String.prototype.split, s = "||||", c = function(C) {
    var x = C % 100, h = x % 10;
    return x !== 11 && h === 1 ? 0 : 2 <= h && h <= 4 && !(x >= 12 && x <= 14) ? 1 : 2;
  }, l = {
    // Mapping from pluralization group plural logic.
    pluralTypes: {
      arabic: function(C) {
        if (C < 3)
          return C;
        var x = C % 100;
        return x >= 3 && x <= 10 ? 3 : x >= 11 ? 4 : 5;
      },
      bosnian_serbian: c,
      chinese: function() {
        return 0;
      },
      croatian: c,
      french: function(C) {
        return C >= 2 ? 1 : 0;
      },
      german: function(C) {
        return C !== 1 ? 1 : 0;
      },
      russian: c,
      lithuanian: function(C) {
        return C % 10 === 1 && C % 100 !== 11 ? 0 : C % 10 >= 2 && C % 10 <= 9 && (C % 100 < 11 || C % 100 > 19) ? 1 : 2;
      },
      czech: function(C) {
        return C === 1 ? 0 : C >= 2 && C <= 4 ? 1 : 2;
      },
      polish: function(C) {
        if (C === 1)
          return 0;
        var x = C % 10;
        return 2 <= x && x <= 4 && (C % 100 < 10 || C % 100 >= 20) ? 1 : 2;
      },
      icelandic: function(C) {
        return C % 10 !== 1 || C % 100 === 11 ? 1 : 0;
      },
      slovenian: function(C) {
        var x = C % 100;
        return x === 1 ? 0 : x === 2 ? 1 : x === 3 || x === 4 ? 2 : 3;
      },
      romanian: function(C) {
        if (C === 1)
          return 0;
        var x = C % 100;
        return C === 0 || x >= 2 && x <= 19 ? 1 : 2;
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
  function d(C) {
    for (var x = {}, h = e(C), g = 0; g < h.length; g += 1)
      for (var y = h[g][0], k = h[g][1], P = 0; P < k.length; P += 1)
        x[k[P]] = y;
    return x;
  }
  function p(C, x) {
    var h = d(C.pluralTypeToLanguages);
    return h[x] || h[a.call(x, /-/, 1)[0]] || h.en;
  }
  function u(C, x, h) {
    return C.pluralTypes[x](h);
  }
  function f() {
    var C = {};
    return function(x, h) {
      var g = C[h];
      return g && !x.pluralTypes[g] && (g = null, C[h] = g), g || (g = p(x, h), g && (C[h] = g)), g;
    };
  }
  function m(C) {
    return C.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function w(C) {
    var x = C && C.prefix || "%{", h = C && C.suffix || "}";
    if (x === s || h === s)
      throw new RangeError('"' + s + '" token is reserved for pluralization');
    return new RegExp(m(x) + "(.*?)" + m(h), "g");
  }
  var b = f(), E = /%\{(.*?)\}/g;
  function S(C, x, h, g, y, k) {
    if (typeof C != "string")
      throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
    if (x == null)
      return C;
    var P = C, D = g || E, j = k || i, H = typeof x == "number" ? { smart_count: x } : x;
    if (H.smart_count != null && C) {
      var $ = y || l, z = a.call(C, s), se = h || "en", _e = b($, se), Le = u(
        $,
        _e,
        H.smart_count
      );
      P = i.call(z[Le] || z[0], /^[^\S]*|[^\S]*$/g, "");
    }
    return P = j.call(P, D, function(U, De) {
      return !t(H, De) || H[De] == null ? U : H[De];
    }), P;
  }
  function _(C) {
    var x = C || {};
    this.phrases = {}, this.extend(x.phrases || {}), this.currentLocale = x.locale || "en";
    var h = x.allowMissing ? S : null;
    this.onMissingKey = typeof x.onMissingKey == "function" ? x.onMissingKey : h, this.warn = x.warn || o, this.replaceImplementation = x.replace || i, this.tokenRegex = w(x.interpolation), this.pluralRules = x.pluralRules || l;
  }
  return _.prototype.locale = function(C) {
    return C && (this.currentLocale = C), this.currentLocale;
  }, _.prototype.extend = function(C, x) {
    for (var h = e(C || {}), g = 0; g < h.length; g += 1) {
      var y = h[g][0], k = h[g][1], P = x ? x + "." + y : y;
      typeof k == "object" ? this.extend(k, P) : this.phrases[P] = k;
    }
  }, _.prototype.unset = function(C, x) {
    if (typeof C == "string")
      delete this.phrases[C];
    else
      for (var h = e(C || {}), g = 0; g < h.length; g += 1) {
        var y = h[g][0], k = h[g][1], P = x ? x + "." + y : y;
        typeof k == "object" ? this.unset(k, P) : delete this.phrases[P];
      }
  }, _.prototype.clear = function() {
    this.phrases = {};
  }, _.prototype.replace = function(C) {
    this.clear(), this.extend(C);
  }, _.prototype.t = function(C, x) {
    var h, g, y = x ?? {};
    if (typeof this.phrases[C] == "string")
      h = this.phrases[C];
    else if (typeof y._ == "string")
      h = y._;
    else if (this.onMissingKey) {
      var k = this.onMissingKey;
      g = k(
        C,
        y,
        this.currentLocale,
        this.tokenRegex,
        this.pluralRules,
        this.replaceImplementation
      );
    } else
      this.warn('Missing translation for key: "' + C + '"'), g = C;
    return typeof h == "string" && (g = S(
      h,
      y,
      this.currentLocale,
      this.tokenRegex,
      this.pluralRules,
      this.replaceImplementation
    )), g;
  }, _.prototype.has = function(C) {
    return t(this.phrases, C);
  }, _.transformPhrase = function(x, h, g) {
    return S(x, h, g);
  }, Wi = _, Wi;
}
var B5 = z5();
const fs = /* @__PURE__ */ uc(B5), F5 = "Tema da página", $5 = "Clique Fácil", U5 = "Navegação por teclas ativada", V5 = "Apenas Português", j5 = "Selecionar cor", G5 = "Expandir", q5 = "Colapsar", Z5 = "Filtro Noturno", W5 = "Diminuir brilho", X5 = "Leitor de Texto ativado", Y5 = "Filtro de daltonismo", K5 = "Desativar Sons", J5 = "Desativar Autoplay", Q5 = "Fonte para Dislexia", e7 = "Leitor de Texto", t7 = "Contraste", r7 = "Aumentar Fonte", o7 = "Espaço entre letras", i7 = "Espaço entre linhas", n7 = "Destacar links", a7 = "Destacar títulos", s7 = "Modo Leitor", l7 = "Pausar animações", c7 = "Navegação por teclas", d7 = "Cores da página", u7 = "Ocultar imagens", p7 = "Guia de leitura", h7 = "Máscara de leitura", f7 = "Cursor grande", g7 = "Cor do texto", m7 = "Saturação", v7 = "Estrutura da Página", b7 = "Dicionário", C7 = "Personalizada", y7 = "Médio", w7 = "Grande", _7 = "Muito grande", x7 = "Desativado", k7 = "Em breve", A7 = "Ativado", E7 = "Tela inteira", S7 = "Normal", T7 = "Claro", N7 = "Escuro", L7 = "Invertido", R7 = "Configurações", M7 = "Resetar", I7 = "Alterar idioma", O7 = "Sem suporte", P7 = "O sintetizador de voz não é suportado pelo seu navegador", D7 = "Interagir", H7 = "Acessar link", z7 = "Mover para cima", B7 = "Mover para baixo", F7 = "Azul", $7 = "Amarelo", U7 = { page_theme: "Alterar tema da página", contrast: "Alterar o contraste das cores", easy_click: "Ativar clique fácil", keyboard_navigation: "Ativar navegação por teclas", page_structure: "Visualizar estrutura da página", page_colors: "Alterar as cores da páginas", disable_autoplay: "Impedir início automático de mídias", adjust_saturation: "Ajustar saturação", open_settings: "Abrir configurações", large_window: "Janela grande", small_window: "Janela pequena", night_filter: "Ativar filtro noturno", reduce_brightness: "Diminuir o brilho da tela", color_blind_filter: "Ativar filtro para daltonismo", disable_sound: "Desativar o som de vídeos e audios", dyslexic_font: "Ativar font para dyslexia", "dictionary.search": "Pesquisar no dicionário", definition_to_libras: "Ler definição em Libras", read_definition: "Ler definição", dictionary: "Ativar o dicionário", text_reader: "Ouvir o texto", font_increase: "Aumentar o tamanho da fonte", letter_spacing: "Modificar espaço entre as letras", line_spacing: "Modificar espaço entre linhas", highlight_links: "Destacar links", highlight_titles: "Destacar títulos", reset: "Resetar definições", close: "Fechar", change_language: "Alterar o idioma da ferramenta", reader_mode: "Ativar modo leitor", toggle_theme: "Alterar o tema", pause_animations: "Pausar animações", hide_images: "Esconder todas as imagens", reading_guide: "Ativar o Guia de leitura", reading_mask: "Ativar a Máscara de leitura", move_reading_mask: "Mover a Máscara de leitura", move_reading_guide: "Mover o Guia de leitura", large_cursor: "Ativar o cursor grande", text_color: "Alterar a cor do texto", open_navigation_profiles: "Abrir ou fechar os perfis de navegação", blind: "Definições para pessoas cegas", low_vision: "Definições para pessoas com baixa visão" }, V7 = { reset: "Resetar definições", close: "Fechar", toggle_theme: "Alterar o tema" }, j7 = { text_and_typography: "Texto e Tipografia", reading_and_comprehension: "Leitura e Compreensão", focus_and_visibility: "Foco e Acessibilidade Visual", colors_filters_and_contrast: "Cores, Filtros e Contraste", distraction_reduction: "Redução de Distrações", navigation_profiles: "Perfis de Navegação", navigation_and_motor_accessibility: "Navegação e Acessibilidade Motora", profiles: "Perfis" }, G7 = "Definição em Libras", q7 = "Ler definição", Z7 = "Acessibilidade em Libras", W7 = "Contato e Suporte", X7 = "Fale conosco ou relate algum problema", Y7 = "Sobre o projeto", K7 = "Saiba mais sobre o projeto e quem o desenvolve", J7 = "Novidades da versão", Q7 = "Veja o que há de novo", ed = {
  page_theme: F5,
  easy_click: $5,
  keyboard_navigation_active: U5,
  only_pt: V5,
  color_picker: j5,
  expand: G5,
  collapse: q5,
  night_filter: Z5,
  reduce_brightness: W5,
  text_reader_is_actived: X5,
  color_blind_filter: Y5,
  disable_sounds: K5,
  disable_autoplay: J5,
  dyslexic_font: Q5,
  text_reader: e7,
  contrast: t7,
  font_increase: r7,
  letter_spacing: o7,
  line_spacing: i7,
  highlight_links: n7,
  highlight_titles: a7,
  reader_mode: s7,
  pause_animations: l7,
  keyboard_navigation: c7,
  page_colors: d7,
  hide_images: u7,
  reading_guide: p7,
  reading_mask: h7,
  large_cursor: f7,
  text_color: g7,
  saturation: m7,
  page_structure: v7,
  dictionary: b7,
  custom: C7,
  default: "Padrão",
  medium: y7,
  large: w7,
  very_large: _7,
  deactivated: x7,
  upcoming: k7,
  actived: A7,
  full: E7,
  normal: S7,
  light: T7,
  dark: N7,
  invert: L7,
  settings: R7,
  reset: M7,
  change_language: I7,
  no_support: O7,
  speech_is_not_supported: P7,
  interact: D7,
  access_link: H7,
  move_top: z7,
  move_bottom: B7,
  blue: F7,
  yellow: $7,
  al: U7,
  titles: V7,
  sections: j7,
  definition_to_libras: G7,
  read_definition: q7,
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
  libras_accessibility: Z7,
  contact_and_support: W7,
  contact_and_support_description: X7,
  about_the_project: Y7,
  about_the_project_description: K7,
  version_updates: J7,
  version_updates_description: Q7,
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
  "about.project_description_to_speak": "Ler descrição"
}, td = "Page Theme", rd = "Easy Click", od = "Keyboard navigation activated", id = "Only Portuguese", nd = "Color Picker", ad = "Expand", sd = "Collapse", ld = "Night Filter", cd = "Reduce Brightness", dd = "Text Reader is actived", ud = "Color Blind Filter", pd = "Disable Sounds", hd = "Disable Autoplay", fd = "Dyslexic Font", gd = "Text Reader", md = "Contrast", vd = "Increase Font", bd = "Letter Spacing", Cd = "Line Spacing", yd = "Highlight Links", wd = "Highlight Titles", _d = "Reader Mode", xd = "Page Colors", kd = "Pause Animations", Ad = "Keyboard Navigation", Ed = "Hide images", Sd = "Reading Guide", Td = "Reading Mask", Nd = "Large Cursor", Ld = "Text Color", Rd = "Saturation", Md = "Page Structure", Id = "Dictionary", Od = "Custom", Pd = "Medium", Dd = "Large", Hd = "Very Large", zd = "Deactivated", Bd = "Upcoming", Fd = "Actived", $d = "Full", Ud = "Normal", Vd = "Light", jd = "Dark", Gd = "Inverted", qd = "Settings", Zd = "Reset", Wd = "Change language", Xd = "No support", Yd = "Speech Synthesis is not supported in this browser", Kd = "Interact", Jd = "Access link", Qd = "Move up", e0 = "Move down", t0 = "Blue", r0 = "Yellow", o0 = { page_theme: "Change page theme", contrast: "Change contrast of colors", easy_click: "Activate easy click", keyboard_navigation: "Activate keyboard navigation", page_structure: "View page structure", page_colors: "Change page colors", disable_autoplay: "Prevent automatic media playback", adjust_saturation: "Adjust saturation", open_settings: "Open settings", large_window: "Large Window", small_window: "Small Window", night_filter: "Activate night filter", reduce_brightness: "Reduce brightness", color_blind_filter: "Activate color blind filter", disable_sound: "Disable the sound of the videos and audios", dyslexic_font: "Activate font for dyslexic", "dictionary.search": "Search in dictionary", dictionary: "Activate dictionary", text_reader: "Read text", font_increase: "Increase font", letter_spacing: "Modify letter spacing", line_spacing: "Modify line spacing", highlight_links: "Highlight links", highlight_titles: "Highlight titles", reset: "Reset definitions", close: "Close", change_language: "Change application language", reader_mode: "Activate reader mode", toggle_theme: "Toggle theme", pause_animations: "Pause animations", hide_images: "Hide all images", reading_guide: "Activate reading guide", reading_mask: "Activate reading mask", move_reading_mask: "Move reading mask", move_reading_guide: "Move reading guide", large_cursor: "Activate large cursor", text_color: "Change text color", open_navigation_profiles: "Open or close navigation profiles", blind: "Definitions for blind people", low_vision: "Definitions for low vision people" }, i0 = { reset: "Reset definitions", close: "Close", toggle_theme: "Toggle theme" }, n0 = { text_and_typography: "Text and Typography", reading_and_comprehension: "Reading and Comprehension", focus_and_visibility: "Focus and Visibility", colors_filters_and_contrast: "Colors, Filters and Contrast", distraction_reduction: "Distraction Reduction", navigation_profiles: "Navigation Profiles", navigation_and_motor_accessibility: "Navigation and Motor Accessibility", profiles: "Profiles" }, a0 = "Contact & Support", s0 = "Get in touch or report a problem", l0 = "About the Project", c0 = "Learn about the project and its creators", d0 = "What's New", u0 = "See what's new", p0 = {
  page_theme: td,
  easy_click: rd,
  keyboard_navigation_active: od,
  only_pt: id,
  color_picker: nd,
  expand: ad,
  collapse: sd,
  night_filter: ld,
  reduce_brightness: cd,
  text_reader_is_actived: dd,
  color_blind_filter: ud,
  disable_sounds: pd,
  disable_autoplay: hd,
  dyslexic_font: fd,
  text_reader: gd,
  contrast: md,
  font_increase: vd,
  letter_spacing: bd,
  line_spacing: Cd,
  highlight_links: yd,
  highlight_titles: wd,
  reader_mode: _d,
  page_colors: xd,
  pause_animations: kd,
  keyboard_navigation: Ad,
  hide_images: Ed,
  reading_guide: Sd,
  reading_mask: Td,
  large_cursor: Nd,
  text_color: Ld,
  saturation: Rd,
  page_structure: Md,
  dictionary: Id,
  custom: Od,
  default: "Default",
  medium: Pd,
  large: Dd,
  very_large: Hd,
  deactivated: zd,
  upcoming: Bd,
  actived: Fd,
  full: $d,
  normal: Ud,
  light: Vd,
  dark: jd,
  invert: Gd,
  settings: qd,
  reset: Zd,
  change_language: Wd,
  no_support: Xd,
  speech_is_not_supported: Yd,
  interact: Kd,
  access_link: Jd,
  move_top: Qd,
  move_bottom: e0,
  blue: t0,
  yellow: r0,
  al: o0,
  titles: i0,
  sections: n0,
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
  contact_and_support: a0,
  contact_and_support_description: s0,
  about_the_project: l0,
  about_the_project_description: c0,
  version_updates: d0,
  version_updates_description: u0,
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
  "about.project_description_to_speak": "Read description aloud"
}, h0 = "Tema de la página", f0 = "Clic Fácil", g0 = "Navegación por teclado activada", m0 = "Solo Portugués", v0 = "Seleccionar color", b0 = "Expandir", C0 = "Colapsar", y0 = "Filtro Nocturno", w0 = "Disminuir brillo", _0 = "Lector de texto activado", x0 = "Filtro de daltonismo", k0 = "Desactivar sonidos", A0 = "Desactivar autoplay", E0 = "Fuente para dislexia", S0 = "Leer texto", T0 = "Contraste", N0 = "Aumentar fuente", L0 = "Espaciado entre letras", R0 = "Espaciado entre líneas", M0 = "Resaltar enlaces", I0 = "Resaltar títulos", O0 = "Modo lector", P0 = "Colores de la página", D0 = "Pausar animaciones", H0 = "Navegación por teclas", z0 = "Ocultar imágenes", B0 = "Guía de lectura", F0 = "Máscara de lectura", $0 = "Cursor grande", U0 = "Color del texto", V0 = "Saturación", j0 = "Estructura de la página", G0 = "Diccionario", q0 = "Personalizada", Z0 = "Mediano", W0 = "Grande", X0 = "Muy grande", Y0 = "Desactivado", K0 = "Proximamente", J0 = "Activado", Q0 = "Pantalla completa", e3 = "Normal", t3 = "Claro", r3 = "Oscuro", o3 = "Invertido", i3 = "Configuraciones", n3 = "Restablecer", a3 = "Cambiar idioma", s3 = "Sin soporte", l3 = "El sintetizador de voz no es compatible con su navegador", c3 = "Interactuar", d3 = "Acceder enlace", u3 = "Mover hacia arriba", p3 = "Mover hacia abajo", h3 = "Azul", f3 = "Amarillo", g3 = { page_theme: "Cambiar el tema de la página", contrast: "Ajustar el contraste de los colores", easy_click: "Activar clic fácil", keyboard_navigation: "Activar navegación por teclado", page_structure: "Visualizar la estructura de la página", page_colors: "Cambiar los colores de la página", disable_autoplay: "Impedir reproducción automática de medios", open_settings: "Abrir configuraciones", large_window: "Ventana grande", small_window: "Ventana pequeña", night_filter: "Activar filtro nocturno", reduce_brightness: "Disminuir el brillo de la pantalla", color_blind_filter: "Activar filtro para daltonismo", disable_sound: "Desactivar sonido de vídeos y audios", dyslexic_font: "Activar fuente para personas con dislexia", "dictionary.search": "Buscar en diccionario", dictionary: "Activar el diccionario", text_reader: "Leer el texto", font_increase: "Aumentar el tamaño de la fuente", letter_spacing: "Modificar el espaciado entre letras", line_spacing: "Modificar el espaciado entre líneas", highlight_links: "Resaltar enlaces", highlight_titles: "Resaltar títulos", reset: "Restablecer configuraciones", close: "Cerrar", change_language: "Cambiar el idioma de la herramienta", reader_mode: "Activar modo lector", toggle_theme: "Cambiar el tema", pause_animations: "Pausar animaciones", hide_images: "Ocultar todas las imágenes", reading_guide: "Activar la guía de lectura", reading_mask: "Activar la máscara de lectura", move_reading_mask: "Mover la máscara de lectura", move_reading_guide: "Mover la guía de lectura", large_cursor: "Activar el cursor grande", text_color: "Cambiar el color del texto", open_navigation_profiles: "Abrir o cerrar los perfiles de navegación", blind: "Configuraciones para personas ciegas", low_vision: "Configuraciones para personas con baja visión" }, m3 = { reset: "Restablecer configuraciones", close: "Cerrar", toggle_theme: "Cambiar el tema" }, v3 = { text_and_typography: "Texto y tipografía", reading_and_comprehension: "Lectura y comprensión", focus_and_visibility: "Enfoque y accesibilidad visual", colors_filters_and_contrast: "Colores, filtros y contraste", distraction_reduction: "Reducción de distracciones", navigation_profiles: "Perfiles de navegación", navigation_and_motor_accessibility: "Navegación y Accesibilidad Motora", profiles: "Perfiles" }, b3 = "Contacto y Soporte", C3 = "Contáctanos o informa de un problema", y3 = "Sobre el Proyecto", w3 = "Conoce el proyecto y a sus creadores", _3 = "Novedades de la versión", x3 = "Mira lo nuevo", k3 = {
  page_theme: h0,
  easy_click: f0,
  keyboard_navigation_active: g0,
  only_pt: m0,
  color_picker: v0,
  expand: b0,
  collapse: C0,
  night_filter: y0,
  reduce_brightness: w0,
  text_reader_is_actived: _0,
  color_blind_filter: x0,
  disable_sounds: k0,
  disable_autoplay: A0,
  dyslexic_font: E0,
  text_reader: S0,
  Contrast: T0,
  font_increase: N0,
  letter_spacing: L0,
  line_spacing: R0,
  highlight_links: M0,
  highlight_titles: I0,
  reader_mode: O0,
  page_colors: P0,
  pause_animations: D0,
  keyboard_navigation: H0,
  hide_images: z0,
  reading_guide: B0,
  reading_mask: F0,
  large_cursor: $0,
  text_color: U0,
  saturation: V0,
  page_structure: j0,
  dictionary: G0,
  custom: q0,
  default: "Predeterminada",
  medium: Z0,
  large: W0,
  very_large: X0,
  deactivated: Y0,
  upcoming: K0,
  actived: J0,
  full: Q0,
  normal: e3,
  light: t3,
  dark: r3,
  invert: o3,
  settings: i3,
  reset: n3,
  change_language: a3,
  no_support: s3,
  speech_is_not_supported: l3,
  interact: c3,
  access_link: d3,
  move_top: u3,
  move_bottom: p3,
  blue: h3,
  yellow: f3,
  al: g3,
  titles: m3,
  sections: v3,
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
  contact_and_support: b3,
  contact_and_support_description: C3,
  about_the_project: y3,
  about_the_project_description: w3,
  version_updates: _3,
  version_updates_description: x3,
  "structure.titles": "Títulos",
  "structure.sections": "Secciones",
  "structure.links": "Enlaces",
  "structure.no_results": "Sin resultados",
  "profiles.blind": "Ciego",
  "profiles.low_vision": "Baja visión",
  "profiles.cognitive": "Cognitivo",
  "profiles.dyslexic": "Disléxico",
  "profiles.color_blind": "Daltónico",
  "profiles.fewer_distractions": "Menos distracciones",
  "about.implementers": "Implementadores",
  "about.social_media": "Redes Sociales",
  "about.project_description": "VLibras es un proyecto de accesibilidad digital que busca garantizar el acceso a la información para personas sordas mediante la traducción de contenidos digitales a la Lengua de Señas Brasileña (Libras). Como parte de esta iniciativa, VLibras Widget+ amplía este propósito al integrar otras funciones de accesibilidad, como ajustes visuales y mejoras de usabilidad, para hacer la navegación web aún más inclusiva.",
  "about.project_description_to_speak": "Leer descripción en voz alta"
}, gs = { pt: ed, en: p0, es: k3 }, W = Ot()(
  dc(
    (e, r) => ({
      locale: "pt",
      polyglot: new fs({ locale: "pt", phrases: gs.pt }),
      setLocale: (t) => e(() => ({ locale: t, polyglot: new fs({ locale: t, phrases: gs[t] }) })),
      t: (t, o) => r().polyglot.t(t, o)
    }),
    {
      name: "@vlibras-widget-plus.locale",
      partialize: (e) => ({ locale: e.locale }),
      version: 1
    }
  )
), pr = (e, r) => W.getState().t(e, r), zo = () => {
  const [e, r] = Z(!1);
  return O(() => {
    const t = () => {
      r(window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches);
    };
    return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), e;
}, Ac = () => {
  const [e, r] = Z({ x: 0, y: 0 });
  return O(() => {
    const t = (o) => {
      r({ x: o.clientX, y: o.clientY });
    };
    return window.addEventListener("mousemove", t), () => window.removeEventListener("mousemove", t);
  }, []), e;
}, Ec = () => {
  const [e, r] = Z({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return O(() => {
    function t() {
      r({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), e;
}, Bo = (e) => {
  const [r, t] = Z(!1);
  return O(() => {
    function o(a) {
      t(a.matches);
    }
    const i = matchMedia(e);
    return i.addEventListener("change", o), t(i.matches), () => i.removeEventListener("change", o);
  }, [e]), r;
}, Xi = "@vwp-theme", A3 = (e) => ["light", "dark"].includes(e), Fo = Ot((e) => ({
  theme: (() => {
    const r = localStorage.getItem(Xi) || "";
    return A3(r) ? r : "light";
  })(),
  toggleTheme: () => e((r) => {
    const t = r.theme === "dark" ? "light" : "dark";
    return localStorage.setItem(Xi, t), { theme: t };
  }),
  setTheme: (r) => {
    localStorage.setItem(Xi, r), e({ theme: r });
  }
})), Zt = () => {
  const [e, r] = Z(""), [t, o] = Z("");
  return O(() => {
    var i;
    e || r("0.3.0"), t || o(((i = window == null ? void 0 : window.VLibrasWidgetPlus) == null ? void 0 : i.path) ?? "./");
  }, [e, t]), { version: e, path: t };
}, E3 = (e, r = []) => {
  const [t, o] = Z(null), [i, a] = Z(null), [s, c] = Z(!0);
  return O(() => {
    let l = !0;
    return c(!0), a(null), o(null), e().then((d) => {
      l && (o(d), c(!1));
    }).catch((d) => {
      l && (a(d), c(!1));
    }), () => {
      l = !1;
    };
  }, [e, ...r]), { data: t, error: i, isLoading: s };
};
function Sc(e) {
  var r, t, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (r = 0; r < i; r++) e[r] && (t = Sc(e[r])) && (o && (o += " "), o += t);
  } else for (t in e) e[t] && (o && (o += " "), o += t);
  return o;
}
function S3() {
  for (var e, r, t = 0, o = "", i = arguments.length; t < i; t++) (e = arguments[t]) && (r = Sc(e)) && (o && (o += " "), o += r);
  return o;
}
const C1 = "-", T3 = (e) => {
  const r = L3(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      const c = s.split(C1);
      return c[0] === "" && c.length !== 1 && c.shift(), Tc(c, r) || N3(s);
    },
    getConflictingClassGroupIds: (s, c) => {
      const l = t[s] || [];
      return c && o[s] ? [...l, ...o[s]] : l;
    }
  };
}, Tc = (e, r) => {
  var s;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], o = r.nextPart.get(t), i = o ? Tc(e.slice(1), o) : void 0;
  if (i)
    return i;
  if (r.validators.length === 0)
    return;
  const a = e.join(C1);
  return (s = r.validators.find(({
    validator: c
  }) => c(a))) == null ? void 0 : s.classGroupId;
}, ms = /^\[(.+)\]$/, N3 = (e) => {
  if (ms.test(e)) {
    const r = ms.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, L3 = (e) => {
  const {
    theme: r,
    classGroups: t
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in t)
    Gn(t[i], o, i, r);
  return o;
}, Gn = (e, r, t, o) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? r : vs(r, i);
      a.classGroupId = t;
      return;
    }
    if (typeof i == "function") {
      if (R3(i)) {
        Gn(i(o), r, t, o);
        return;
      }
      r.validators.push({
        validator: i,
        classGroupId: t
      });
      return;
    }
    Object.entries(i).forEach(([a, s]) => {
      Gn(s, vs(r, a), t, o);
    });
  });
}, vs = (e, r) => {
  let t = e;
  return r.split(C1).forEach((o) => {
    t.nextPart.has(o) || t.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(o);
  }), t;
}, R3 = (e) => e.isThemeGetter, M3 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const i = (a, s) => {
    t.set(a, s), r++, r > e && (r = 0, o = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = t.get(a);
      if (s !== void 0)
        return s;
      if ((s = o.get(a)) !== void 0)
        return i(a, s), s;
    },
    set(a, s) {
      t.has(a) ? t.set(a, s) : i(a, s);
    }
  };
}, qn = "!", Zn = ":", I3 = Zn.length, O3 = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: t
  } = e;
  let o = (i) => {
    const a = [];
    let s = 0, c = 0, l = 0, d;
    for (let w = 0; w < i.length; w++) {
      let b = i[w];
      if (s === 0 && c === 0) {
        if (b === Zn) {
          a.push(i.slice(l, w)), l = w + I3;
          continue;
        }
        if (b === "/") {
          d = w;
          continue;
        }
      }
      b === "[" ? s++ : b === "]" ? s-- : b === "(" ? c++ : b === ")" && c--;
    }
    const p = a.length === 0 ? i : i.substring(l), u = P3(p), f = u !== p, m = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: f,
      baseClassName: u,
      maybePostfixModifierPosition: m
    };
  };
  if (r) {
    const i = r + Zn, a = o;
    o = (s) => s.startsWith(i) ? a(s.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const i = o;
    o = (a) => t({
      className: a,
      parseClassName: i
    });
  }
  return o;
}, P3 = (e) => e.endsWith(qn) ? e.substring(0, e.length - 1) : e.startsWith(qn) ? e.substring(1) : e, D3 = (e) => {
  const r = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const i = [];
    let a = [];
    return o.forEach((s) => {
      s[0] === "[" || r[s] ? (i.push(...a.sort(), s), a = []) : a.push(s);
    }), i.push(...a.sort()), i;
  };
}, H3 = (e) => ({
  cache: M3(e.cacheSize),
  parseClassName: O3(e),
  sortModifiers: D3(e),
  ...T3(e)
}), z3 = /\s+/, B3 = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: o,
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = r, s = [], c = e.trim().split(z3);
  let l = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const p = c[d], {
      isExternal: u,
      modifiers: f,
      hasImportantModifier: m,
      baseClassName: w,
      maybePostfixModifierPosition: b
    } = t(p);
    if (u) {
      l = p + (l.length > 0 ? " " + l : l);
      continue;
    }
    let E = !!b, S = o(E ? w.substring(0, b) : w);
    if (!S) {
      if (!E) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (S = o(w), !S) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      E = !1;
    }
    const _ = a(f).join(":"), C = m ? _ + qn : _, x = C + S;
    if (s.includes(x))
      continue;
    s.push(x);
    const h = i(S, E);
    for (let g = 0; g < h.length; ++g) {
      const y = h[g];
      s.push(C + y);
    }
    l = p + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function F3() {
  let e = 0, r, t, o = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = Nc(r)) && (o && (o += " "), o += t);
  return o;
}
const Nc = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (r = Nc(e[o])) && (t && (t += " "), t += r);
  return t;
};
function $3(e, ...r) {
  let t, o, i, a = s;
  function s(l) {
    const d = r.reduce((p, u) => u(p), e());
    return t = H3(d), o = t.cache.get, i = t.cache.set, a = c, c(l);
  }
  function c(l) {
    const d = o(l);
    if (d)
      return d;
    const p = B3(l, t);
    return i(l, p), p;
  }
  return function() {
    return a(F3.apply(null, arguments));
  };
}
const Ne = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}, Lc = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Rc = /^\((?:(\w[\w-]*):)?(.+)\)$/i, U3 = /^\d+\/\d+$/, V3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, j3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, G3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, q3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Z3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qt = (e) => U3.test(e), Q = (e) => !!e && !Number.isNaN(Number(e)), Nt = (e) => !!e && Number.isInteger(Number(e)), Yi = (e) => e.endsWith("%") && Q(e.slice(0, -1)), yt = (e) => V3.test(e), W3 = () => !0, X3 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  j3.test(e) && !G3.test(e)
), Mc = () => !1, Y3 = (e) => q3.test(e), K3 = (e) => Z3.test(e), J3 = (e) => !B(e) && !F(e), Q3 = (e) => Cr(e, Pc, Mc), B = (e) => Lc.test(e), Ht = (e) => Cr(e, Dc, X3), Ki = (e) => Cr(e, iu, Q), bs = (e) => Cr(e, Ic, Mc), eu = (e) => Cr(e, Oc, K3), fo = (e) => Cr(e, Hc, Y3), F = (e) => Rc.test(e), kr = (e) => yr(e, Dc), tu = (e) => yr(e, nu), Cs = (e) => yr(e, Ic), ru = (e) => yr(e, Pc), ou = (e) => yr(e, Oc), go = (e) => yr(e, Hc, !0), Cr = (e, r, t) => {
  const o = Lc.exec(e);
  return o ? o[1] ? r(o[1]) : t(o[2]) : !1;
}, yr = (e, r, t = !1) => {
  const o = Rc.exec(e);
  return o ? o[1] ? r(o[1]) : t : !1;
}, Ic = (e) => e === "position" || e === "percentage", Oc = (e) => e === "image" || e === "url", Pc = (e) => e === "length" || e === "size" || e === "bg-size", Dc = (e) => e === "length", iu = (e) => e === "number", nu = (e) => e === "family-name", Hc = (e) => e === "shadow", au = () => {
  const e = Ne("color"), r = Ne("font"), t = Ne("text"), o = Ne("font-weight"), i = Ne("tracking"), a = Ne("leading"), s = Ne("breakpoint"), c = Ne("container"), l = Ne("spacing"), d = Ne("radius"), p = Ne("shadow"), u = Ne("inset-shadow"), f = Ne("text-shadow"), m = Ne("drop-shadow"), w = Ne("blur"), b = Ne("perspective"), E = Ne("aspect"), S = Ne("ease"), _ = Ne("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
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
  ], h = () => [...x(), F, B], g = () => ["auto", "hidden", "clip", "visible", "scroll"], y = () => ["auto", "contain", "none"], k = () => [F, B, l], P = () => [Qt, "full", "auto", ...k()], D = () => [Nt, "none", "subgrid", F, B], j = () => ["auto", {
    span: ["full", Nt, F, B]
  }, Nt, F, B], H = () => [Nt, "auto", F, B], $ = () => ["auto", "min", "max", "fr", F, B], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], se = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], _e = () => ["auto", ...k()], Le = () => [Qt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], U = () => [e, F, B], De = () => [...x(), Cs, bs, {
    position: [F, B]
  }], st = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ee = () => ["auto", "cover", "contain", ru, Q3, {
    size: [F, B]
  }], rt = () => [Yi, kr, Ht], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    F,
    B
  ], me = () => ["", Q, kr, Ht], ie = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ne = () => [Q, Yi, Cs, bs], lt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    F,
    B
  ], ye = () => ["none", Q, F, B], oe = () => ["none", Q, F, B], ce = () => [Q, F, B], te = () => [Qt, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [yt],
      breakpoint: [yt],
      color: [W3],
      container: [yt],
      "drop-shadow": [yt],
      ease: ["in", "out", "in-out"],
      font: [J3],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [yt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [yt],
      shadow: [yt],
      spacing: ["px", Q],
      text: [yt],
      "text-shadow": [yt],
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
        aspect: ["auto", "square", Qt, B, F, E]
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
        columns: [Q, B, F, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
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
        object: h()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: g()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": g()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": g()
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
        inset: P()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: P()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: P()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: P()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: P()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: P()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: P()
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
        z: [Nt, "auto", F, B]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Qt, "full", "auto", c, ...k()]
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
        flex: [Q, Qt, "auto", "initial", "none", B]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Q, F, B]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Q, F, B]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Nt, "first", "last", "none", F, B]
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
        col: j()
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
        row: j()
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
        "auto-cols": $()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": $()
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
        justify: [...z(), "normal"]
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
        content: ["normal", ...z()]
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
        "place-content": z()
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
        m: _e()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: _e()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: _e()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: _e()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: _e()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: _e()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: _e()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: _e()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: _e()
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
        size: Le()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...Le()]
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
          ...Le()
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
          ...Le()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...Le()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...Le()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...Le()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, kr, Ht]
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
        font: [o, F, Ki]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Yi, B]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tu, B, r]
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
        tracking: [i, F, B]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Q, "none", F, Ki]
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
        "list-image": ["none", F, B]
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
        list: ["disc", "decimal", "none", F, B]
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
        placeholder: U()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: U()
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
        decoration: [Q, "from-font", "auto", F, Ht]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: U()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Q, "auto", F, B]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", F, B]
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
        content: ["none", F, B]
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
        bg: De()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: st()
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
          }, Nt, F, B],
          radial: ["", F, B],
          conic: [Nt, F, B]
        }, ou, eu]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: U()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: rt()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: rt()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: rt()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: U()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: U()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: U()
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
        border: me()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": me()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": me()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": me()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": me()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": me()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": me()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": me()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": me()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": me()
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
        "divide-y": me()
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
        border: U()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": U()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": U()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": U()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": U()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": U()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": U()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": U()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": U()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: U()
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
        "outline-offset": [Q, F, B]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Q, kr, Ht]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: U()
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
          go,
          fo
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: U()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, go, fo]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": U()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: me()
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
        ring: U()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Q, Ht]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": U()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": me()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": U()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, go, fo]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": U()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Q, F, B]
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
        "mask-linear-from": U()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": U()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ne()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ne()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": U()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": U()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ne()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ne()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": U()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": U()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ne()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ne()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": U()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": U()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ne()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ne()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": U()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": U()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ne()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ne()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": U()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": U()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ne()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ne()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": U()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": U()
      }],
      "mask-image-radial": [{
        "mask-radial": [F, B]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ne()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ne()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": U()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": U()
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
        "mask-conic-from": U()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": U()
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
        mask: De()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: st()
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
        mask: ["none", F, B]
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
          F,
          B
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: lt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Q, F, B]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Q, F, B]
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
          m,
          go,
          fo
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": U()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Q, F, B]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Q, F, B]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Q, F, B]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Q, F, B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Q, F, B]
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
          F,
          B
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": lt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Q, F, B]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Q, F, B]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Q, F, B]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Q, F, B]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Q, F, B]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Q, F, B]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Q, F, B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Q, F, B]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", F, B]
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
        duration: [Q, "initial", F, B]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", S, F, B]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Q, F, B]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", _, F, B]
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
        perspective: [b, F, B]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": h()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ye()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ye()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ye()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ye()
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
        skew: ce()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ce()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ce()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [F, B, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: h()
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
        accent: U()
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
        caret: U()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", F, B]
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
        "will-change": ["auto", "scroll", "contents", "transform", F, B]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...U()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Q, kr, Ht, Ki]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...U()]
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
}, su = /* @__PURE__ */ $3(au);
function G(...e) {
  return su(S3(e));
}
function zc(e, r) {
  const t = { ...e };
  for (const o of r) delete t[o];
  return t;
}
const Bc = (e) => e.split(" ").map((r) => r.charAt(0).toUpperCase() + r.slice(1)).join(" "), hr = (e, r) => (r || document).querySelector(e), at = (e, r) => Array.from((r || document).querySelectorAll(e)), lu = () => {
  var e;
  return (e = hr("[vp]")) == null ? void 0 : e.closest("[vw]");
}, y1 = {
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
  easyClick: void 0,
  pageTheme: void 0,
  pageContrast: void 0,
  isActive: !1
}, M = Ot()(
  dc(
    (e) => ({
      isOpenWidget: !1,
      isExpanded: !1,
      isLoaded: !1,
      isActive: !1,
      setIsExpanded: (r) => e((t) => ({
        isExpanded: typeof r == "function" ? r(t.isExpanded) : r
      })),
      setIsOpenWidget: (r) => e((t) => ({
        isOpenWidget: typeof r == "function" ? r(t.isExpanded) : r
      })),
      setIsLoaded: (r) => e({ isLoaded: r }),
      reset: () => e(y1)
    }),
    {
      name: "@vlibras-widget-plus",
      partialize: (e) => zc(e, ["textReader", "dictionary", "readerMode", "pageStructure"]),
      version: 1
    }
  )
);
M.subscribe((e, r) => {
  const o = Object.keys(zc(y1, ["isActive"])).some((i) => {
    const a = e[i];
    return ["textReader", "textColor", "dictionary"].includes(i) ? a == null ? void 0 : a.isActive : !!a;
  });
  o !== r.isActive && (e.isActive = o), window.VLibrasWidgetPlus && (window.VLibrasWidgetPlus.isOpen = e.isOpenWidget);
});
const ar = "vwp-app-root", mo = "vwp-root-overlay", Et = {}, ys = {}, cu = () => {
  if (!Et[mo]) {
    const r = document.createElement("div");
    r.id = mo, document.body.appendChild(r), Et[mo] = r;
  }
  const e = Et[mo];
  return e.shadowRoot || e.attachShadow({ mode: "open" });
}, ao = (e) => {
  if (!Et[e]) {
    const r = document.createElement("div");
    return r.id = e, cu().appendChild(r), Et[e] = r, r;
  }
  return Et[e];
}, Fc = () => {
  if (!Et[ar]) {
    let o = document.getElementById(ar);
    o || (o = document.createElement("div"), o.id = ar, document.body.appendChild(o)), Et[ar] = o;
  }
  const e = Et[ar], r = e.shadowRoot || e.attachShadow({ mode: "open" });
  return { root: e, shadowRoot: r, isRootActive: () => e.getAttribute("data-active") === "true" };
}, et = (e, r, t) => {
  if (!ys[r]) {
    const o = document.createElement("style");
    o.id = r, o.innerHTML = e, ys[r] = o, document.head.appendChild(o);
  }
}, w1 = (e, r) => {
  const o = ["html", "input", "head", "script", "style", "iframe", "meta", "canvas", "noscript"], i = e.tagName.toLowerCase(), a = o.includes(i), s = e.classList.contains("vwp-ignore"), c = e.closest("[vw]");
  return e.id !== ar && !a && !s && !c;
}, du = () => {
  at(
    "body *:not(.vwp-ignore, .sr-only, .sr-only *, [vw], [vw] *, vlibras-widget-plus):where(a, span, p, h1, h2, h3, h4, h5, h6, strong, em, label)"
  ).forEach((r) => {
    const t = window.getComputedStyle(r).color;
    ["rgba(0, 0, 0, 0)", "rgb(0, 0, 0)"].includes(t) && r.classList.add("vwp-ignore--text-color");
  });
}, uu = async (e, r) => {
  const t = [
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-500.ttf) format('truetype')`, {
      weight: "500"
    }),
    new FontFace("VLibrasWidget_Font", `url(${e}/assets/fonts/rawline/rawline-500i.ttf) format('truetype')`, {
      weight: "500",
      style: "italic"
    })
  ];
  await _1(t, (o) => {
    r.adoptedStyleSheets = [...r.adoptedStyleSheets, ...o];
  });
}, pu = async (e) => {
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
  await _1(r, (t) => {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, ...t];
  });
}, hu = async (e) => {
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
  await _1(r, (t) => {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, ...t];
  });
}, _1 = async (e, r) => {
  await Promise.all(e.map((t) => t.load())), e.forEach((t) => document.fonts.add(t)), r && r(document.adoptedStyleSheets);
}, fu = {
  main: !0,
  about: !1,
  settings: !1,
  open: () => {
  }
}, $o = Ot()((e) => ({
  ...fu,
  open: (r) => e({ main: !1, about: !1, settings: !1, [r]: !0 })
})), mt = Ce(({ children: e, disabled: r, variant: t = "default", className: o, ...i }, a) => /* @__PURE__ */ n(
  "button",
  {
    disabled: r,
    ref: a,
    className: G(
      "cursor-pointer group text-foreground flex justify-center items-center gap-x-2",
      "size-9 hover:bg-muted rounded-full",
      "[&>svg]:pointer-events-none [&>svg]:fill-foreground/80 hover:[&>svg]:fill-foreground",
      r && "!pointer-events-none *:!pointer-events-none opacity-50",
      t === "destructive" && "hover:bg-destructive/10 hover:[&>svg]:fill-destructive",
      o
    ),
    type: i.type || "button",
    ...i,
    children: e
  }
)), $c = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n("div", { ref: o, className: G("animate-move-right h-full flex flex-col", r), ...t, children: e })
), Uc = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n("div", { ref: o, className: G("p-4 flex items-center gap-2 border-b-1", r), ...t, children: e })
), Vc = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n("h3", { ref: o, className: G("text-lg font-semibold", r), ...t, children: e })
), jc = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n("div", { ref: o, className: G("overflow-y-auto p-4 h-full", r), ...t, children: e })
), gu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M4.675 15.425L3.65 18.275C3.56667 18.5083 3.43333 18.6875 3.25 18.8125C3.06667 18.9375 2.85833 19 2.625 19C2.24167 19 1.9375 18.8375 1.7125 18.5125C1.4875 18.1875 1.44167 17.8417 1.575 17.475L5.975 5.75C6.05833 5.51667 6.2 5.33333 6.4 5.2C6.6 5.06667 6.81667 5 7.05 5H7.95C8.2 5 8.42083 5.06667 8.6125 5.2C8.80417 5.33333 8.94167 5.51667 9.025 5.75L13.45 17.5C13.5833 17.8667 13.5375 18.2083 13.3125 18.525C13.0875 18.8417 12.7833 19 12.4 19C12.1667 19 11.95 18.9333 11.75 18.8C11.55 18.6667 11.4083 18.4833 11.325 18.25L10.325 15.425H4.675ZM5.4 13.4H9.6L7.55 7.6H7.45L5.4 13.4ZM18 13H16C15.7167 13 15.4792 12.9042 15.2875 12.7125C15.0958 12.5208 15 12.2833 15 12C15 11.7167 15.0958 11.4792 15.2875 11.2875C15.4792 11.0958 15.7167 11 16 11H18V9C18 8.71667 18.0958 8.47917 18.2875 8.2875C18.4792 8.09583 18.7167 8 19 8C19.2833 8 19.5208 8.09583 19.7125 8.2875C19.9042 8.47917 20 8.71667 20 9V11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20V15C20 15.2833 19.9042 15.5208 19.7125 15.7125C19.5208 15.9042 19.2833 16 19 16C18.7167 16 18.4792 15.9042 18.2875 15.7125C18.0958 15.5208 18 15.2833 18 15V13Z" })
    ]
  }
), mu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2.5875 19.4125C2.97917 19.8042 3.45 20 4 20H20C20.55 20 21.0208 19.8042 21.4125 19.4125C21.8042 19.0208 22 18.55 22 18V6C22 5.45 21.8042 4.97917 21.4125 4.5875C21.0208 4.19583 20.55 4 20 4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V18C2 18.55 2.19583 19.0208 2.5875 19.4125ZM5.17 14.83C5.95 15.61 6.89333 16 8 16H10.4C10.6267 16 10.8167 15.9233 10.97 15.77C11.1233 15.6167 11.2 15.4267 11.2 15.2C11.2 14.9733 11.1233 14.7833 10.97 14.63C10.8167 14.4767 10.6267 14.4 10.4 14.4H8C7.33333 14.4 6.76667 14.1667 6.3 13.7C5.83333 13.2333 5.6 12.6667 5.6 12C5.6 11.3333 5.83333 10.7667 6.3 10.3C6.76667 9.83333 7.33333 9.6 8 9.6H10.4C10.6267 9.6 10.8167 9.52333 10.97 9.37C11.1233 9.21667 11.2 9.02667 11.2 8.8C11.2 8.57333 11.1233 8.38333 10.97 8.23C10.8167 8.07667 10.6267 8 10.4 8H8C6.89333 8 5.95 8.39 5.17 9.17C4.39 9.95 4 10.8933 4 12C4 13.1067 4.39 14.05 5.17 14.83ZM9.03 12.57C9.18333 12.7233 9.37333 12.8 9.6 12.8H14.4C14.6267 12.8 14.8167 12.7233 14.97 12.57C15.1233 12.4167 15.2 12.2267 15.2 12C15.2 11.7733 15.1233 11.5833 14.97 11.43C14.8167 11.2767 14.6267 11.2 14.4 11.2H9.6C9.37333 11.2 9.18333 11.2767 9.03 11.43C8.87667 11.5833 8.8 11.7733 8.8 12C8.8 12.2267 8.87667 12.4167 9.03 12.57ZM13.03 15.77C13.1833 15.9233 13.3733 16 13.6 16H16C17.1067 16 18.05 15.61 18.83 14.83C19.61 14.05 20 13.1067 20 12C20 10.8933 19.61 9.95 18.83 9.17C18.05 8.39 17.1067 8 16 8H13.6C13.3733 8 13.1833 8.07667 13.03 8.23C12.8767 8.38333 12.8 8.57333 12.8 8.8C12.8 9.02667 12.8767 9.21667 13.03 9.37C13.1833 9.52333 13.3733 9.6 13.6 9.6H16C16.6667 9.6 17.2333 9.83333 17.7 10.3C18.1667 10.7667 18.4 11.3333 18.4 12C18.4 12.6667 18.1667 13.2333 17.7 13.7C17.2333 14.1667 16.6667 14.4 16 14.4H13.6C13.3733 14.4 13.1833 14.4767 13.03 14.63C12.8767 14.7833 12.8 14.9733 12.8 15.2C12.8 15.4267 12.8767 15.6167 13.03 15.77Z"
        }
      )
    ]
  }
), vu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.2751 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" })
    ]
  }
), bu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M6.7 21.3C6.5 21.5 6.26667 21.6 6 21.6C5.73334 21.6 5.5 21.5 5.3 21.3L2.7 18.7C2.5 18.5 2.4 18.2667 2.4 18C2.4 17.7333 2.5 17.5 2.7 17.3L5.3 14.7C5.5 14.5 5.73334 14.4 6 14.4C6.26667 14.4 6.5 14.5 6.7 14.7C6.9 14.9 7 15.1375 7 15.4125C7 15.6875 6.9 15.925 6.7 16.125L5.825 17H18.175L17.3 16.125C17.1167 15.925 17.0208 15.6875 17.0125 15.4125C17.0042 15.1375 17.1 14.9 17.3 14.7C17.5 14.5 17.7333 14.4 18 14.4C18.2667 14.4 18.5 14.5 18.7 14.7L21.3 17.3C21.5 17.5 21.6 17.7333 21.6 18C21.6 18.2667 21.5 18.5 21.3 18.7L18.7 21.3C18.5 21.5 18.2667 21.6 18 21.6C17.7333 21.6 17.5 21.5 17.3 21.3C17.1 21.1 17 20.8625 17 20.5875C17 20.3125 17.1 20.075 17.3 19.875L18.175 19H5.825L6.7 19.875C6.88334 20.075 6.97917 20.3125 6.9875 20.5875C6.99583 20.8625 6.9 21.1 6.7 21.3ZM7.35 11.8L10.775 2.6C10.8417 2.41667 10.9542 2.27083 11.1125 2.1625C11.2708 2.05417 11.45 2 11.65 2H12.35C12.55 2 12.7292 2.05417 12.8875 2.1625C13.0458 2.27083 13.1583 2.41667 13.225 2.6L16.65 11.825C16.75 12.1083 16.7167 12.375 16.55 12.625C16.3833 12.875 16.15 13 15.85 13C15.6667 13 15.4958 12.9458 15.3375 12.8375C15.1792 12.7292 15.0667 12.5833 15 12.4L14.25 10.2H9.8L9 12.425C8.93333 12.6083 8.825 12.75 8.675 12.85C8.525 12.95 8.35834 13 8.175 13C7.85834 13 7.6125 12.8708 7.4375 12.6125C7.2625 12.3542 7.23334 12.0833 7.35 11.8ZM10.35 8.6H13.65L12.05 4.05H11.95L10.35 8.6Z" })
    ]
  }
), Cu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M5 16C4.45 16 3.97917 15.8042 3.5875 15.4125C3.19583 15.0208 3 14.55 3 14V10C3 9.45 3.19583 8.97917 3.5875 8.5875C3.97917 8.19583 4.45 8 5 8H19C19.55 8 20.0208 8.19583 20.4125 8.5875C20.8042 8.97917 21 9.45 21 10V14C21 14.55 20.8042 15.0208 20.4125 15.4125C20.0208 15.8042 19.55 16 19 16H5ZM19 10H5V14H19V10Z" }),
      /* @__PURE__ */ n("path", { d: "M5 5.5C5 4.67157 5.67157 4 6.5 4H17.5C18.3284 4 19 4.67157 19 5.5C19 6.32843 18.3284 7 17.5 7H6.5C5.67157 7 5 6.32843 5 5.5Z" }),
      /* @__PURE__ */ n("path", { d: "M5 18.5C5 17.6716 5.67157 17 6.5 17H17.5C18.3284 17 19 17.6716 19 18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5Z" })
    ]
  }
), yu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("g", { clipPath: "url(#clip0_1_148)", children: /* @__PURE__ */ n("path", { d: "M19.2535 0.622806C19.3084 0.240758 19.3471 0.0804978 19.3932 0.0451324C19.4789 -0.0206635 19.5056 -0.0169822 19.5926 0.0724691C19.6724 0.154597 19.9771 1.09947 20.0779 1.57791C20.1352 1.84951 20.135 1.88989 20.0759 2.13771C19.9652 2.6008 19.6335 2.99013 19.1006 3.28241C18.9851 3.34574 18.6504 3.45983 18.3568 3.53592C17.6512 3.71874 17.2297 3.86298 16.6183 4.13083C16.3401 4.25267 16.1052 4.35943 16.0961 4.36813C16.087 4.37678 16.0979 4.40271 16.1203 4.42574C16.1492 4.45543 16.1959 4.44896 16.2814 4.4035C16.4124 4.33378 16.5502 4.35454 16.5502 4.44395C16.5502 4.47481 16.5344 4.50007 16.515 4.50007C16.4958 4.50007 16.4276 4.54543 16.3636 4.60085C16.1919 4.74959 16.153 4.94505 16.23 5.27227C16.4027 6.00515 16.4017 6.31432 16.2248 6.90867C16.1409 7.19097 16.1305 7.78395 16.204 8.10319C16.2764 8.41752 16.5183 8.91056 16.7329 9.18098C16.9939 9.50977 17.2719 9.71782 17.7142 9.91544C18.3958 10.2199 18.5918 10.4187 18.4804 10.6927C18.4052 10.878 18.0014 11.3848 17.7604 11.5963C17.5332 11.7959 17.2539 11.9842 16.8998 12.1767C16.7628 12.2512 16.6378 12.3507 16.609 12.4082C16.5812 12.4638 16.5461 12.6806 16.5308 12.8901C16.5156 13.0995 16.4839 13.2872 16.4601 13.3072C16.4364 13.3272 16.3449 13.3634 16.2569 13.3875C16.0586 13.4422 16.0299 13.485 16.139 13.5635C16.3328 13.7033 16.3293 13.7678 16.1085 14.1161C15.7627 14.6622 15.5852 15.232 15.4256 16.3081C15.3178 17.0344 15.2468 17.1655 14.9046 17.2695C14.7149 17.3271 12.514 16.953 12.108 16.7942C12.0481 16.7707 11.9722 16.7795 11.8698 16.8217C11.7411 16.8747 11.6952 16.9297 11.5518 17.2029C11.4596 17.3785 11.302 17.7121 11.2015 17.9442L11.0188 18.3664L11.1826 18.6055C11.3396 18.8345 11.3486 18.8634 11.3972 19.2935C11.4369 19.6445 11.4696 19.7806 11.5474 19.9171C11.6255 20.0542 11.6373 20.1038 11.6025 20.147C11.5645 20.1941 11.5446 20.1929 11.4653 20.1394C11.3005 20.0283 11.3201 20.1208 11.4978 20.2926C11.7142 20.5018 11.9786 20.9245 12.1167 21.2819C12.1749 21.4328 12.3047 21.8998 12.405 22.3198C12.5051 22.7387 12.6975 23.4938 12.8331 24H3.00041C2.98473 24.0403 3.01575 23.9574 3.00041 24C3.16755 23.5707 3.4904 22.8509 3.8808 22.252C4.46487 21.3561 5.02401 20.2783 5.51163 19.1083C5.90984 18.153 6.38331 17.7143 6.38331 17.7143C6.26008 17.6461 6.61797 17.7551 6.61797 17.6382C6.61797 17.5579 6.95175 16.9075 7.18483 16.5336C7.41605 16.1626 7.56918 16.0665 7.81704 16.1369C8.03326 16.1984 8.13338 16.1546 8.21257 15.9642C8.44094 15.4149 8.80668 14.3393 8.92336 13.8742C9.09575 13.1867 9.09445 13.1799 8.59894 12.1515C7.87567 10.6507 7.07851 9.43031 6.08246 8.29901C5.30939 7.4209 4.92823 6.89207 4.53928 6.1577C4.44428 5.97837 4.352 5.83166 4.33416 5.83166C4.27867 5.83166 4.2574 5.96502 4.29268 6.09167C4.33792 6.25393 4.28061 6.35286 4.20245 6.24751C4.09167 6.09833 4.0688 5.80017 4.11919 5.16328C4.16417 4.59497 4.17478 4.54327 4.27559 4.39958C4.33507 4.31487 4.49186 4.16043 4.62398 4.05642C4.86278 3.86847 4.95514 3.74635 5.20995 3.28159C5.42598 2.88755 6.07318 2.27883 6.17007 2.37854C6.18754 2.39651 6.12596 2.59367 6.03326 2.81675C5.94055 3.03979 5.87255 3.24333 5.88218 3.2691C5.89398 3.30074 6.03748 3.25265 6.3254 3.12058C6.55955 3.01315 7.18784 2.73145 7.72155 2.49458C8.76213 2.0328 9.98105 1.42003 10.7474 0.973443C11.3249 0.636944 11.4547 0.576866 11.8752 0.451541C12.4345 0.284896 12.9336 0.260615 14.431 0.327233C15.1596 0.359661 15.7719 0.396397 15.7914 0.40889C15.8718 0.46 15.8169 0.533433 15.6409 0.609921C15.454 0.691226 15.3534 0.806369 15.4018 0.88411C15.4356 0.938705 16.9252 1.61359 17.2819 1.73598C17.4341 1.78822 17.6956 1.86067 17.8631 1.89705C18.5205 2.03985 18.8096 1.96939 18.9947 1.6215C19.1339 1.35987 19.164 1.24355 19.2535 0.622806Z" }) })
    ]
  }
), wu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M8.65 20.5L2.5 14.35C2.33333 14.1833 2.20833 14 2.125 13.8C2.04167 13.6 2 13.3916 2 13.175C2 12.9583 2.04167 12.75 2.125 12.55C2.20833 12.35 2.33333 12.1666 2.5 12L8.25 6.27498L6.375 4.39998C6.15833 4.18331 6.04583 3.92498 6.0375 3.62498C6.02917 3.32498 6.13333 3.05831 6.35 2.82498C6.56667 2.59164 6.83333 2.47498 7.15 2.47498C7.46667 2.47498 7.74167 2.59164 7.975 2.82498L17.15 12C17.3167 12.1666 17.4375 12.35 17.5125 12.55C17.5875 12.75 17.625 12.9583 17.625 13.175C17.625 13.3916 17.5875 13.6 17.5125 13.8C17.4375 14 17.3167 14.1833 17.15 14.35L11 20.5C10.8333 20.6666 10.65 20.7916 10.45 20.875C10.25 20.9583 10.0417 21 9.825 21C9.60833 21 9.4 20.9583 9.2 20.875C9 20.7916 8.81667 20.6666 8.65 20.5ZM9.825 7.84998L4.475 13.2H15.175L9.825 7.84998ZM19.8 21C19.2 21 18.6917 20.7875 18.275 20.3625C17.8583 19.9375 17.65 19.4166 17.65 18.8C17.65 18.35 17.7625 17.925 17.9875 17.525C18.2125 17.125 18.4667 16.7333 18.75 16.35L19.225 15.75C19.375 15.5666 19.5708 15.4708 19.8125 15.4625C20.0542 15.4541 20.25 15.5416 20.4 15.725L20.9 16.35C21.1667 16.7333 21.4167 17.125 21.65 17.525C21.8833 17.925 22 18.35 22 18.8C22 19.4166 21.7833 19.9375 21.35 20.3625C20.9167 20.7875 20.4 21 19.8 21Z" })
    ]
  }
), _u = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M21 5V15.725C21 15.9583 20.9417 16.15 20.825 16.3C20.7083 16.45 20.5583 16.5667 20.375 16.65C20.1917 16.7333 20.0083 16.7625 19.825 16.7375C19.6417 16.7125 19.4667 16.6167 19.3 16.45L7.55001 4.7C7.38335 4.53333 7.28751 4.35833 7.26251 4.175C7.23751 3.99167 7.26668 3.80833 7.35001 3.625C7.43335 3.44167 7.55001 3.29167 7.70001 3.175C7.85001 3.05833 8.04168 3 8.27501 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5ZM5.00001 21C4.45001 21 3.97918 20.8042 3.58751 20.4125C3.19585 20.0208 3.00001 19.55 3.00001 19V5.8L2.10001 4.9C1.91668 4.71667 1.82501 4.48333 1.82501 4.2C1.82501 3.91667 1.91668 3.68333 2.10001 3.5C2.28335 3.31667 2.51668 3.225 2.80001 3.225C3.08335 3.225 3.31668 3.31667 3.50001 3.5L20.5 20.5C20.6833 20.6833 20.775 20.9167 20.775 21.2C20.775 21.4833 20.6833 21.7167 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L18.2 21H5.00001ZM14.175 17L12.075 14.9L11.25 16L9.40001 13.525C9.30001 13.3917 9.16668 13.325 9.00001 13.325C8.83335 13.325 8.70001 13.3917 8.60001 13.525L6.60001 16.2C6.46668 16.3667 6.45001 16.5417 6.55001 16.725C6.65001 16.9083 6.80001 17 7.00001 17H14.175Z" })
    ]
  }
), xu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M11.6875 22L9.7375 17.1667L6 20.5V2L19 14.5833L13.9625 15.25L15.9125 20.1667L11.6875 22ZM10.3875 14.5833L12.5813 19.9167L13.9625 19.25L11.6875 14L15.5063 13.5L7.4625 5.66667V17.1667L10.3875 14.5833Z" })
    ]
  }
), ku = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M9.47259 13.2703L8.37438 16.3514C8.28509 16.6036 8.14223 16.7973 7.94581 16.9324C7.74938 17.0676 7.52616 17.1351 7.27616 17.1351C6.86545 17.1351 6.53956 16.9595 6.29848 16.6081C6.05741 16.2568 6.00831 15.8829 6.15116 15.4865L10.8654 2.81081C10.9547 2.55856 11.1065 2.36036 11.3208 2.21622C11.5351 2.07207 11.7672 2 12.0172 2H12.9815C13.2494 2 13.486 2.07207 13.6913 2.21622C13.8967 2.36036 14.044 2.55856 14.1333 2.81081L18.8744 15.5135C19.0172 15.9099 18.9681 16.2793 18.7271 16.6216C18.486 16.964 18.1601 17.1351 17.7494 17.1351C17.4994 17.1351 17.2672 17.0631 17.0529 16.9189C16.8387 16.7748 16.6869 16.5766 16.5976 16.3243L15.5262 13.2703H9.47259ZM10.2494 11.0811H14.7494L12.5529 4.81081H12.4458L10.2494 11.0811Z" }),
      /* @__PURE__ */ n("path", { d: "M5.30804 21.6892C5.51339 21.8964 5.76786 22 6.07143 22H18.9286C19.2321 22 19.4866 21.8964 19.692 21.6892C19.8973 21.482 20 21.2252 20 20.9189C20 20.6126 19.8973 20.3559 19.692 20.1486C19.4866 19.9414 19.2321 19.8378 18.9286 19.8378H6.07143C5.76786 19.8378 5.51339 19.9414 5.30804 20.1486C5.10268 20.3559 5 20.6126 5 20.9189C5 21.2252 5.10268 21.482 5.30804 21.6892Z" })
    ]
  }
), Au = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14V10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10V14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM14 15C14.2833 15 14.5208 14.9042 14.7125 14.7125C14.9042 14.5208 15 14.2833 15 14V10C15 9.71667 14.9042 9.47917 14.7125 9.2875C14.5208 9.09583 14.2833 9 14 9C13.7167 9 13.4792 9.09583 13.2875 9.2875C13.0958 9.47917 13 9.71667 13 10V14C13 14.2833 13.0958 14.5208 13.2875 14.7125C13.4792 14.9042 13.7167 15 14 15ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 11.4667 2.04167 10.9333 2.125 10.4C2.20833 9.86667 2.33333 9.34167 2.5 8.825C2.58333 8.55833 2.75417 8.37917 3.0125 8.2875C3.27083 8.19583 3.51667 8.21667 3.75 8.35C4 8.48333 4.17917 8.67917 4.2875 8.9375C4.39583 9.19583 4.40833 9.46667 4.325 9.75C4.225 10.1167 4.14583 10.4875 4.0875 10.8625C4.02917 11.2375 4 11.6167 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.6 4 11.2042 4.02917 10.8125 4.0875C10.4208 4.14583 10.0333 4.23333 9.65 4.35C9.36667 4.43333 9.1 4.425 8.85 4.325C8.6 4.225 8.41667 4.05 8.3 3.8C8.18333 3.55 8.17917 3.29583 8.2875 3.0375C8.39583 2.77917 8.58333 2.60833 8.85 2.525C9.35 2.34167 9.86667 2.20833 10.4 2.125C10.9333 2.04167 11.4667 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM5.5 7C5.08333 7 4.72917 6.85417 4.4375 6.5625C4.14583 6.27083 4 5.91667 4 5.5C4 5.08333 4.14583 4.72917 4.4375 4.4375C4.72917 4.14583 5.08333 4 5.5 4C5.91667 4 6.27083 4.14583 6.5625 4.4375C6.85417 4.72917 7 5.08333 7 5.5C7 5.91667 6.85417 6.27083 6.5625 6.5625C6.27083 6.85417 5.91667 7 5.5 7ZM6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12Z" })
    ]
  }
), Eu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM13 18H20V6H13V18ZM18.25 15C18.4667 15 18.6458 14.9292 18.7875 14.7875C18.9292 14.6458 19 14.4667 19 14.25C19 14.0333 18.9292 13.8542 18.7875 13.7125C18.6458 13.5708 18.4667 13.5 18.25 13.5H14.75C14.5333 13.5 14.3542 13.5708 14.2125 13.7125C14.0708 13.8542 14 14.0333 14 14.25C14 14.4667 14.0708 14.6458 14.2125 14.7875C14.3542 14.9292 14.5333 15 14.75 15H18.25ZM18.25 12.5C18.4667 12.5 18.6458 12.4292 18.7875 12.2875C18.9292 12.1458 19 11.9667 19 11.75C19 11.5333 18.9292 11.3542 18.7875 11.2125C18.6458 11.0708 18.4667 11 18.25 11H14.75C14.5333 11 14.3542 11.0708 14.2125 11.2125C14.0708 11.3542 14 11.5333 14 11.75C14 11.9667 14.0708 12.1458 14.2125 12.2875C14.3542 12.4292 14.5333 12.5 14.75 12.5H18.25ZM18.25 10C18.4667 10 18.6458 9.92917 18.7875 9.7875C18.9292 9.64583 19 9.46667 19 9.25C19 9.03333 18.9292 8.85417 18.7875 8.7125C18.6458 8.57083 18.4667 8.5 18.25 8.5H14.75C14.5333 8.5 14.3542 8.57083 14.2125 8.7125C14.0708 8.85417 14 9.03333 14 9.25C14 9.46667 14.0708 9.64583 14.2125 9.7875C14.3542 9.92917 14.5333 10 14.75 10H18.25Z" })
    ]
  }
), Su = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M8.20101 12.3166L11.1558 9.36181C11.397 9.1206 11.6784 9 12 9C12.3216 9 12.603 9.1206 12.8442 9.36181L15.799 12.3166C16 12.5176 16.0503 12.7387 15.9497 12.9799C15.8492 13.2211 15.6583 13.3417 15.3769 13.3417L8.62312 13.3417C8.34171 13.3417 8.15075 13.2211 8.05025 12.9799C7.94975 12.7387 8 12.5176 8.20101 12.3166Z" }),
      /* @__PURE__ */ n("path", { d: "M2 13.5C2 12.6716 2.67157 12 3.5 12H20.5C21.3284 12 22 12.6716 22 13.5C22 14.3284 21.3284 15 20.5 15H3.5C2.67157 15 2 14.3284 2 13.5Z" })
    ]
  }
), Tu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M4.99999 7.84999L4.09999 8.72499C3.91665 8.90832 3.68749 8.99999 3.41249 8.99999C3.13749 8.99999 2.89999 8.89999 2.69999 8.69999C2.51665 8.51665 2.42499 8.28332 2.42499 7.99999C2.42499 7.71665 2.51665 7.48332 2.69999 7.29999L5.29999 4.69999C5.39999 4.59999 5.50832 4.52915 5.62499 4.48749C5.74165 4.44582 5.86665 4.42499 5.99999 4.42499C6.13332 4.42499 6.25832 4.44582 6.37499 4.48749C6.49165 4.52915 6.59999 4.59999 6.69999 4.69999L9.29999 7.29999C9.48332 7.48332 9.57915 7.71249 9.58749 7.98749C9.59582 8.26249 9.49999 8.49999 9.29999 8.69999C9.11665 8.88332 8.88749 8.97915 8.61249 8.98749C8.33749 8.99582 8.09999 8.90832 7.89999 8.72499L6.99999 7.84999V16.15L7.89999 15.275C8.08332 15.0917 8.31249 15 8.58749 15C8.86249 15 9.09999 15.1 9.29999 15.3C9.48332 15.4833 9.57499 15.7167 9.57499 16C9.57499 16.2833 9.48332 16.5167 9.29999 16.7L6.69999 19.3C6.59999 19.4 6.49165 19.4708 6.37499 19.5125C6.25832 19.5542 6.13332 19.575 5.99999 19.575C5.86665 19.575 5.74165 19.5542 5.62499 19.5125C5.50832 19.4708 5.39999 19.4 5.29999 19.3L2.69999 16.7C2.51665 16.5167 2.42082 16.2875 2.41249 16.0125C2.40415 15.7375 2.49999 15.5 2.69999 15.3C2.88332 15.1167 3.11249 15.0208 3.38749 15.0125C3.66249 15.0042 3.89999 15.0917 4.09999 15.275L4.99999 16.15V7.84999ZM13 19C12.7167 19 12.4792 18.9042 12.2875 18.7125C12.0958 18.5208 12 18.2833 12 18C12 17.7167 12.0958 17.4792 12.2875 17.2875C12.4792 17.0958 12.7167 17 13 17H21C21.2833 17 21.5208 17.0958 21.7125 17.2875C21.9042 17.4792 22 17.7167 22 18C22 18.2833 21.9042 18.5208 21.7125 18.7125C21.5208 18.9042 21.2833 19 21 19H13ZM13 13C12.7167 13 12.4792 12.9042 12.2875 12.7125C12.0958 12.5208 12 12.2833 12 12C12 11.7167 12.0958 11.4792 12.2875 11.2875C12.4792 11.0958 12.7167 11 13 11H21C21.2833 11 21.5208 11.0958 21.7125 11.2875C21.9042 11.4792 22 11.7167 22 12C22 12.2833 21.9042 12.5208 21.7125 12.7125C21.5208 12.9042 21.2833 13 21 13H13ZM13 6.99999C12.7167 6.99999 12.4792 6.90415 12.2875 6.71249C12.0958 6.52082 12 6.28332 12 5.99999C12 5.71665 12.0958 5.47915 12.2875 5.28749C12.4792 5.09582 12.7167 4.99999 13 4.99999H21C21.2833 4.99999 21.5208 5.09582 21.7125 5.28749C21.9042 5.47915 22 5.71665 22 5.99999C22 6.28332 21.9042 6.52082 21.7125 6.71249C21.5208 6.90415 21.2833 6.99999 21 6.99999H13Z" })
    ]
  }
), x1 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" })
    ]
  }
), Pt = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M18.3 5.70998C18.2075 5.61727 18.0976 5.54372 17.9766 5.49354C17.8557 5.44336 17.726 5.41753 17.595 5.41753C17.464 5.41753 17.3343 5.44336 17.2134 5.49354C17.0924 5.54372 16.9825 5.61727 16.89 5.70998L12 10.59L7.11 5.69998C7.01749 5.60727 6.9076 5.53372 6.78663 5.48354C6.66565 5.43336 6.53597 5.40753 6.405 5.40753C6.27403 5.40753 6.14435 5.43336 6.02338 5.48354C5.9024 5.53372 5.79251 5.60727 5.7 5.69998C5.31 6.08998 5.31 6.71998 5.7 7.10998L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10998C18.68 6.72998 18.68 6.08998 18.3 5.70998Z" })
    ]
  }
), Gc = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 21C9.9 21 8.04167 20.3625 6.425 19.0875C4.80833 17.8125 3.75833 16.1833 3.275 14.2C3.20833 13.95 3.25833 13.7208 3.425 13.5125C3.59167 13.3042 3.81667 13.1833 4.1 13.15C4.36667 13.1167 4.60833 13.1667 4.825 13.3C5.04167 13.4333 5.19167 13.6333 5.275 13.9C5.675 15.4 6.5 16.625 7.75 17.575C9 18.525 10.4167 19 12 19C13.95 19 15.6042 18.3208 16.9625 16.9625C18.3208 15.6042 19 13.95 19 12C19 10.05 18.3208 8.39583 16.9625 7.0375C15.6042 5.67917 13.95 5 12 5C10.85 5 9.775 5.26667 8.775 5.8C7.775 6.33333 6.93333 7.06667 6.25 8H8C8.28333 8 8.52083 8.09583 8.7125 8.2875C8.90417 8.47917 9 8.71667 9 9C9 9.28333 8.90417 9.52083 8.7125 9.7125C8.52083 9.90417 8.28333 10 8 10H4C3.71667 10 3.47917 9.90417 3.2875 9.7125C3.09583 9.52083 3 9.28333 3 9V5C3 4.71667 3.09583 4.47917 3.2875 4.2875C3.47917 4.09583 3.71667 4 4 4C4.28333 4 4.52083 4.09583 4.7125 4.2875C4.90417 4.47917 5 4.71667 5 5V6.35C5.85 5.28333 6.8875 4.45833 8.1125 3.875C9.3375 3.29167 10.6333 3 12 3C13.25 3 14.4208 3.2375 15.5125 3.7125C16.6042 4.1875 17.5542 4.82917 18.3625 5.6375C19.1708 6.44583 19.8125 7.39583 20.2875 8.4875C20.7625 9.57917 21 10.75 21 12C21 13.25 20.7625 14.4208 20.2875 15.5125C19.8125 16.6042 19.1708 17.5542 18.3625 18.3625C17.5542 19.1708 16.6042 19.8125 15.5125 20.2875C14.4208 20.7625 13.25 21 12 21Z" })
    ]
  }
), Nu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 5C11.7167 5 11.4792 4.90417 11.2875 4.7125C11.0958 4.52083 11 4.28333 11 4V2C11 1.71667 11.0958 1.47917 11.2875 1.2875C11.4792 1.09583 11.7167 1 12 1C12.2833 1 12.5208 1.09583 12.7125 1.2875C12.9042 1.47917 13 1.71667 13 2V4C13 4.28333 12.9042 4.52083 12.7125 4.7125C12.5208 4.90417 12.2833 5 12 5ZM16.95 7.05C16.7667 6.86667 16.675 6.6375 16.675 6.3625C16.675 6.0875 16.7667 5.85 16.95 5.65L18.35 4.225C18.55 4.025 18.7875 3.925 19.0625 3.925C19.3375 3.925 19.575 4.025 19.775 4.225C19.9583 4.40833 20.05 4.64167 20.05 4.925C20.05 5.20833 19.9583 5.44167 19.775 5.625L18.35 7.05C18.1667 7.23333 17.9333 7.325 17.65 7.325C17.3667 7.325 17.1333 7.23333 16.95 7.05ZM20 13C19.7167 13 19.4792 12.9042 19.2875 12.7125C19.0958 12.5208 19 12.2833 19 12C19 11.7167 19.0958 11.4792 19.2875 11.2875C19.4792 11.0958 19.7167 11 20 11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20ZM12 23C11.7167 23 11.4792 22.9042 11.2875 22.7125C11.0958 22.5208 11 22.2833 11 22V20C11 19.7167 11.0958 19.4792 11.2875 19.2875C11.4792 19.0958 11.7167 19 12 19C12.2833 19 12.5208 19.0958 12.7125 19.2875C12.9042 19.4792 13 19.7167 13 20V22C13 22.2833 12.9042 22.5208 12.7125 22.7125C12.5208 22.9042 12.2833 23 12 23ZM5.65 7.05L4.225 5.65C4.025 5.45 3.925 5.20833 3.925 4.925C3.925 4.64167 4.025 4.40833 4.225 4.225C4.40833 4.04167 4.64167 3.95 4.925 3.95C5.20833 3.95 5.44167 4.04167 5.625 4.225L7.05 5.65C7.23333 5.83333 7.325 6.06667 7.325 6.35C7.325 6.63333 7.23333 6.86667 7.05 7.05C6.85 7.23333 6.61667 7.325 6.35 7.325C6.08333 7.325 5.85 7.23333 5.65 7.05ZM18.35 19.775L16.95 18.35C16.7667 18.15 16.675 17.9125 16.675 17.6375C16.675 17.3625 16.7667 17.1333 16.95 16.95C17.1333 16.7667 17.3625 16.675 17.6375 16.675C17.9125 16.675 18.15 16.7667 18.35 16.95L19.775 18.35C19.975 18.5333 20.0708 18.7667 20.0625 19.05C20.0542 19.3333 19.9583 19.575 19.775 19.775C19.575 19.975 19.3333 20.075 19.05 20.075C18.7667 20.075 18.5333 19.975 18.35 19.775ZM2 13C1.71667 13 1.47917 12.9042 1.2875 12.7125C1.09583 12.5208 1 12.2833 1 12C1 11.7167 1.09583 11.4792 1.2875 11.2875C1.47917 11.0958 1.71667 11 2 11H4C4.28333 11 4.52083 11.0958 4.7125 11.2875C4.90417 11.4792 5 11.7167 5 12C5 12.2833 4.90417 12.5208 4.7125 12.7125C4.52083 12.9042 4.28333 13 4 13H2ZM4.225 19.775C4.04167 19.5917 3.95 19.3583 3.95 19.075C3.95 18.7917 4.04167 18.5583 4.225 18.375L5.65 16.95C5.83333 16.7667 6.0625 16.675 6.3375 16.675C6.6125 16.675 6.85 16.7667 7.05 16.95C7.25 17.15 7.35 17.3875 7.35 17.6625C7.35 17.9375 7.25 18.175 7.05 18.375L5.65 19.775C5.45 19.975 5.20833 20.075 4.925 20.075C4.64167 20.075 4.40833 19.975 4.225 19.775ZM12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18ZM12 16C13.1 16 14.0417 15.6083 14.825 14.825C15.6083 14.0417 16 13.1 16 12C16 10.9 15.6083 9.95833 14.825 9.175C14.0417 8.39167 13.1 8 12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 13.1 8.39167 14.0417 9.175 14.825C9.95833 15.6083 10.9 16 12 16Z" })
    ]
  }
), Lu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 21C9.48333 21 7.35417 20.1292 5.6125 18.3875C3.87083 16.6458 3 14.5167 3 12C3 9.70002 3.75 7.70418 5.25 6.01252C6.75 4.32085 8.66667 3.33335 11 3.05002C11.2167 3.01668 11.4083 3.04585 11.575 3.13752C11.7417 3.22918 11.875 3.35002 11.975 3.50002C12.075 3.65002 12.1292 3.82502 12.1375 4.02502C12.1458 4.22502 12.0833 4.41668 11.95 4.60002C11.6667 5.03335 11.4542 5.49168 11.3125 5.97502C11.1708 6.45835 11.1 6.96668 11.1 7.50002C11.1 9.00002 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.0167 12.9 17.5292 12.825 18.0375 12.675C18.5458 12.525 19 12.3167 19.4 12.05C19.5833 11.9333 19.7708 11.8792 19.9625 11.8875C20.1542 11.8958 20.325 11.9417 20.475 12.025C20.6417 12.1083 20.7708 12.2333 20.8625 12.4C20.9542 12.5667 20.9833 12.7667 20.95 13C20.7167 15.3 19.7375 17.2083 18.0125 18.725C16.2875 20.2417 14.2833 21 12 21ZM12 19C13.4667 19 14.7833 18.5958 15.95 17.7875C17.1167 16.9792 17.9667 15.925 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.7042 14.1792 11.2625 12.7375C9.82083 11.2958 9.1 9.55002 9.1 7.50002C9.1 7.16668 9.125 6.83335 9.175 6.50002C9.225 6.16668 9.29167 5.83335 9.375 5.50002C8.075 6.03335 7.02083 6.88335 6.2125 8.05002C5.40417 9.21668 5 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z" })
    ]
  }
), Ru = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M11 18.15V15C11 14.7167 11.0958 14.4792 11.2875 14.2875C11.4792 14.0959 11.7167 14 12 14C12.2833 14 12.5208 14.0959 12.7125 14.2875C12.9042 14.4792 13 14.7167 13 15V18.125L14.075 17.025C14.275 16.825 14.5167 16.725 14.8 16.725C15.0833 16.725 15.325 16.825 15.525 17.025C15.725 17.225 15.825 17.4667 15.825 17.75C15.825 18.0334 15.725 18.275 15.525 18.475L12.7 21.3C12.6 21.4 12.4917 21.4709 12.375 21.5125C12.2583 21.5542 12.1333 21.575 12 21.575C11.8667 21.575 11.7417 21.5542 11.625 21.5125C11.5083 21.4709 11.4 21.4 11.3 21.3L8.44999 18.45C8.24999 18.25 8.15415 18.0125 8.16249 17.7375C8.17082 17.4625 8.27499 17.225 8.47499 17.025C8.67499 16.825 8.91249 16.725 9.18749 16.725C9.46249 16.725 9.69999 16.825 9.89999 17.025L11 18.15ZM5.87499 13L6.97499 14.075C7.17499 14.275 7.27499 14.5167 7.27499 14.8C7.27499 15.0834 7.17499 15.325 6.97499 15.525C6.77499 15.725 6.53332 15.825 6.24999 15.825C5.96665 15.825 5.72499 15.725 5.52499 15.525L2.69999 12.7C2.59999 12.6 2.52915 12.4917 2.48749 12.375C2.44582 12.2584 2.42499 12.1334 2.42499 12C2.42499 11.8667 2.44582 11.7417 2.48749 11.625C2.52915 11.5084 2.59999 11.4 2.69999 11.3L5.52499 8.47505C5.72499 8.27505 5.96249 8.17505 6.23749 8.17505C6.51249 8.17505 6.74999 8.27505 6.94999 8.47505C7.14999 8.67505 7.24999 8.91255 7.24999 9.18755C7.24999 9.46255 7.14999 9.70005 6.94999 9.90005L5.84999 11H8.99999C9.28332 11 9.52082 11.0959 9.71249 11.2875C9.90415 11.4792 9.99999 11.7167 9.99999 12C9.99999 12.2834 9.90415 12.5209 9.71249 12.7125C9.52082 12.9042 9.28332 13 8.99999 13H5.87499ZM18.15 13H15C14.7167 13 14.4792 12.9042 14.2875 12.7125C14.0958 12.5209 14 12.2834 14 12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0959 14.7167 11 15 11H18.125L17.025 9.92505C16.825 9.72505 16.725 9.48338 16.725 9.20005C16.725 8.91672 16.825 8.67505 17.025 8.47505C17.225 8.27505 17.4667 8.17505 17.75 8.17505C18.0333 8.17505 18.275 8.27505 18.475 8.47505L21.3 11.3C21.4 11.4 21.4708 11.5084 21.5125 11.625C21.5542 11.7417 21.575 11.8667 21.575 12C21.575 12.1334 21.5542 12.2584 21.5125 12.375C21.4708 12.4917 21.4 12.6 21.3 12.7L18.45 15.55C18.25 15.75 18.0167 15.8459 17.75 15.8375C17.4833 15.8292 17.25 15.725 17.05 15.525C16.85 15.325 16.75 15.0875 16.75 14.8125C16.75 14.5375 16.85 14.3 17.05 14.1L18.15 13ZM11 5.85005L9.87499 6.97505C9.67499 7.17505 9.44165 7.27505 9.17499 7.27505C8.90832 7.27505 8.67499 7.17505 8.47499 6.97505C8.27499 6.77505 8.17499 6.53755 8.17499 6.26255C8.17499 5.98755 8.27499 5.75005 8.47499 5.55005L11.3 2.70005C11.4 2.60005 11.5083 2.52922 11.625 2.48755C11.7417 2.44588 11.8667 2.42505 12 2.42505C12.1333 2.42505 12.2583 2.44588 12.375 2.48755C12.4917 2.52922 12.6 2.60005 12.7 2.70005L15.55 5.55005C15.75 5.75005 15.85 5.98338 15.85 6.25005C15.85 6.51672 15.75 6.75005 15.55 6.95005C15.35 7.15005 15.1125 7.25005 14.8375 7.25005C14.5625 7.25005 14.325 7.15005 14.125 6.95005L13 5.85005V9.00005C13 9.28338 12.9042 9.52088 12.7125 9.71255C12.5208 9.90422 12.2833 10 12 10C11.7167 10 11.4792 9.90422 11.2875 9.71255C11.0958 9.52088 11 9.28338 11 9.00005V5.85005Z" })
    ]
  }
), Uo = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M23 9.00002C23 10.15 22.7958 11.2458 22.3875 12.2875C21.9792 13.3292 21.425 14.275 20.725 15.125C20.525 15.3583 20.275 15.4833 19.975 15.5C19.675 15.5167 19.4083 15.4083 19.175 15.175C18.9583 14.9583 18.8583 14.7 18.875 14.4C18.8917 14.1 18.9917 13.825 19.175 13.575C19.675 12.9417 20.0625 12.2333 20.3375 11.45C20.6125 10.6667 20.75 9.85002 20.75 9.00002C20.75 8.15002 20.6125 7.34168 20.3375 6.57502C20.0625 5.80835 19.675 5.10835 19.175 4.47502C18.975 4.22502 18.8708 3.95002 18.8625 3.65002C18.8542 3.35002 18.9583 3.08335 19.175 2.85002C19.3917 2.61668 19.6542 2.50418 19.9625 2.51252C20.2708 2.52085 20.525 2.64168 20.725 2.87502C21.425 3.72502 21.9792 4.67085 22.3875 5.71252C22.7958 6.75418 23 7.85002 23 9.00002ZM18.45 9.00002C18.45 9.53335 18.3667 10.0458 18.2 10.5375C18.0333 11.0292 17.8 11.4833 17.5 11.9C17.3167 12.15 17.0708 12.2792 16.7625 12.2875C16.4542 12.2958 16.1833 12.1833 15.95 11.95C15.7333 11.7333 15.6208 11.4708 15.6125 11.1625C15.6042 10.8542 15.675 10.5583 15.825 10.275C15.925 10.0917 16.0042 9.89168 16.0625 9.67502C16.1208 9.45835 16.15 9.23335 16.15 9.00002C16.15 8.76668 16.1208 8.54168 16.0625 8.32502C16.0042 8.10835 15.925 7.90002 15.825 7.70002C15.675 7.41668 15.6042 7.12502 15.6125 6.82502C15.6208 6.52502 15.7333 6.26668 15.95 6.05002C16.1833 5.81668 16.4542 5.70418 16.7625 5.71252C17.0708 5.72085 17.3167 5.85002 17.5 6.10002C17.8 6.51668 18.0333 6.97085 18.2 7.46252C18.3667 7.95418 18.45 8.46668 18.45 9.00002ZM9 13C7.9 13 6.95833 12.6083 6.175 11.825C5.39167 11.0417 5 10.1 5 9.00002C5 7.90002 5.39167 6.95835 6.175 6.17502C6.95833 5.39168 7.9 5.00002 9 5.00002C10.1 5.00002 11.0417 5.39168 11.825 6.17502C12.6083 6.95835 13 7.90002 13 9.00002C13 10.1 12.6083 11.0417 11.825 11.825C11.0417 12.6083 10.1 13 9 13ZM1 19V18.2C1 17.65 1.14167 17.1333 1.425 16.65C1.70833 16.1667 2.1 15.8 2.6 15.55C3.45 15.1167 4.40833 14.75 5.475 14.45C6.54167 14.15 7.71667 14 9 14C10.2833 14 11.4583 14.15 12.525 14.45C13.5917 14.75 14.55 15.1167 15.4 15.55C15.9 15.8 16.2917 16.1667 16.575 16.65C16.8583 17.1333 17 17.65 17 18.2V19C17 19.55 16.8042 20.0208 16.4125 20.4125C16.0208 20.8042 15.55 21 15 21H3C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19Z" })
    ]
  }
), qc = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M7 17C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H10C10.2833 7 10.5208 7.09583 10.7125 7.2875C10.9042 7.47917 11 7.71667 11 8C11 8.28333 10.9042 8.52083 10.7125 8.7125C10.5208 8.90417 10.2833 9 10 9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H10C10.2833 15 10.5208 15.0958 10.7125 15.2875C10.9042 15.4792 11 15.7167 11 16C11 16.2833 10.9042 16.5208 10.7125 16.7125C10.5208 16.9042 10.2833 17 10 17H7ZM9 13C8.71667 13 8.47917 12.9042 8.2875 12.7125C8.09583 12.5208 8 12.2833 8 12C8 11.7167 8.09583 11.4792 8.2875 11.2875C8.47917 11.0958 8.71667 11 9 11H15C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12C16 12.2833 15.9042 12.5208 15.7125 12.7125C15.5208 12.9042 15.2833 13 15 13H9ZM14 17C13.7167 17 13.4792 16.9042 13.2875 16.7125C13.0958 16.5208 13 16.2833 13 16C13 15.7167 13.0958 15.4792 13.2875 15.2875C13.4792 15.0958 13.7167 15 14 15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8C13 7.71667 13.0958 7.47917 13.2875 7.2875C13.4792 7.09583 13.7167 7 14 7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H14Z" })
    ]
  }
), Mu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M10.475 22C10.0083 22 9.57082 21.9 9.16249 21.7C8.75416 21.5 8.40832 21.2167 8.12499 20.85L3.09999 14.475C2.96666 14.325 2.90832 14.1458 2.92499 13.9375C2.94166 13.7292 3.01666 13.5583 3.14999 13.425C3.48332 13.075 3.88332 12.8667 4.34999 12.8C4.81666 12.7333 5.24999 12.825 5.64999 13.075L7.49999 14.2V6C7.49999 5.71667 7.59582 5.47917 7.78749 5.2875C7.97916 5.09583 8.21666 5 8.49999 5C8.78332 5 9.02499 5.09583 9.22499 5.2875C9.42499 5.47917 9.52499 5.71667 9.52499 6V11H17C17.8333 11 18.5417 11.2917 19.125 11.875C19.7083 12.4583 20 13.1667 20 14V18C20 19.1 19.6083 20.0417 18.825 20.825C18.0417 21.6083 17.1 22 16 22H10.475ZM11.975 9C11.6917 9 11.4542 8.90417 11.2625 8.7125C11.0708 8.52083 10.975 8.28333 10.975 8C10.975 7.96667 11.0167 7.8 11.1 7.5C11.2333 7.26667 11.3333 7.02917 11.4 6.7875C11.4667 6.54583 11.5 6.28333 11.5 6C11.5 5.16667 11.2083 4.45833 10.625 3.875C10.0417 3.29167 9.33332 3 8.49999 3C7.66666 3 6.95832 3.29167 6.37499 3.875C5.79166 4.45833 5.49999 5.16667 5.49999 6C5.49999 6.28333 5.53332 6.54583 5.59999 6.7875C5.66666 7.02917 5.76666 7.26667 5.89999 7.5C5.94999 7.58333 5.98332 7.66667 5.99999 7.75C6.01666 7.83333 6.02499 7.91667 6.02499 8C6.02499 8.28333 5.93332 8.52083 5.74999 8.7125C5.56666 8.90417 5.33332 9 5.04999 9C4.86666 9 4.69582 8.95 4.53749 8.85C4.37916 8.75 4.25832 8.625 4.17499 8.475C3.95832 8.10833 3.79166 7.71667 3.67499 7.3C3.55832 6.88333 3.49999 6.45 3.49999 6C3.49999 4.61667 3.98749 3.4375 4.96249 2.4625C5.93749 1.4875 7.11666 1 8.49999 1C9.88332 1 11.0625 1.4875 12.0375 2.4625C13.0125 3.4375 13.5 4.61667 13.5 6C13.5 6.45 13.4417 6.88333 13.325 7.3C13.2083 7.71667 13.0417 8.10833 12.825 8.475C12.7417 8.625 12.625 8.75 12.475 8.85C12.325 8.95 12.1583 9 11.975 9Z" })
    ]
  }
), Zc = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M13 17.05C13.7333 16.7 14.4708 16.4375 15.2125 16.2625C15.9542 16.0875 16.7167 16 17.5 16C18.1 16 18.6875 16.05 19.2625 16.15C19.8375 16.25 20.4167 16.4 21 16.6V6.7C20.45 6.46667 19.8792 6.29167 19.2875 6.175C18.6958 6.05833 18.1 6 17.5 6C16.7167 6 15.9417 6.1 15.175 6.3C14.4083 6.5 13.6833 6.8 13 7.2V17.05ZM12 19.475C11.7667 19.475 11.5458 19.4458 11.3375 19.3875C11.1292 19.3292 10.9333 19.25 10.75 19.15C10.1 18.7667 9.41667 18.4792 8.7 18.2875C7.98333 18.0958 7.25 18 6.5 18C5.8 18 5.1125 18.0917 4.4375 18.275C3.7625 18.4583 3.11667 18.7167 2.5 19.05C2.15 19.2333 1.8125 19.225 1.4875 19.025C1.1625 18.825 1 18.5333 1 18.15V6.1C1 5.91667 1.04583 5.74167 1.1375 5.575C1.22917 5.40833 1.36667 5.28333 1.55 5.2C2.33333 4.81667 3.1375 4.52083 3.9625 4.3125C4.7875 4.10417 5.63333 4 6.5 4C7.46667 4 8.4125 4.125 9.3375 4.375C10.2625 4.625 11.15 5 12 5.5C12.85 5 13.7375 4.625 14.6625 4.375C15.5875 4.125 16.5333 4 17.5 4C18.3667 4 19.2125 4.10417 20.0375 4.3125C20.8625 4.52083 21.6667 4.81667 22.45 5.2C22.6333 5.28333 22.7708 5.40833 22.8625 5.575C22.9542 5.74167 23 5.91667 23 6.1V18.15C23 18.5333 22.8375 18.825 22.5125 19.025C22.1875 19.225 21.85 19.2333 21.5 19.05C20.8833 18.7167 20.2375 18.4583 19.5625 18.275C18.8875 18.0917 18.2 18 17.5 18C16.75 18 16.0167 18.0958 15.3 18.2875C14.5833 18.4792 13.9 18.7667 13.25 19.15C13.0667 19.25 12.8708 19.3292 12.6625 19.3875C12.4542 19.4458 12.2333 19.475 12 19.475ZM14 8.775C14 8.625 14.0542 8.47083 14.1625 8.3125C14.2708 8.15417 14.3917 8.05 14.525 8C15.0083 7.83333 15.4917 7.70833 15.975 7.625C16.4583 7.54167 16.9667 7.5 17.5 7.5C17.8333 7.5 18.1625 7.52083 18.4875 7.5625C18.8125 7.60417 19.1333 7.65833 19.45 7.725C19.6 7.75833 19.7292 7.84167 19.8375 7.975C19.9458 8.10833 20 8.25833 20 8.425C20 8.70833 19.9083 8.91667 19.725 9.05C19.5417 9.18333 19.3083 9.21667 19.025 9.15C18.7917 9.1 18.5458 9.0625 18.2875 9.0375C18.0292 9.0125 17.7667 9 17.5 9C17.0667 9 16.6417 9.04167 16.225 9.125C15.8083 9.20833 15.4083 9.31667 15.025 9.45C14.725 9.56667 14.4792 9.55833 14.2875 9.425C14.0958 9.29167 14 9.075 14 8.775ZM14 14.275C14 14.125 14.0542 13.9708 14.1625 13.8125C14.2708 13.6542 14.3917 13.55 14.525 13.5C15.0083 13.3333 15.4917 13.2083 15.975 13.125C16.4583 13.0417 16.9667 13 17.5 13C17.8333 13 18.1625 13.0208 18.4875 13.0625C18.8125 13.1042 19.1333 13.1583 19.45 13.225C19.6 13.2583 19.7292 13.3417 19.8375 13.475C19.9458 13.6083 20 13.7583 20 13.925C20 14.2083 19.9083 14.4167 19.725 14.55C19.5417 14.6833 19.3083 14.7167 19.025 14.65C18.7917 14.6 18.5458 14.5625 18.2875 14.5375C18.0292 14.5125 17.7667 14.5 17.5 14.5C17.0667 14.5 16.6417 14.5375 16.225 14.6125C15.8083 14.6875 15.4083 14.7917 15.025 14.925C14.725 15.0417 14.4792 15.0375 14.2875 14.9125C14.0958 14.7875 14 14.575 14 14.275ZM14 11.525C14 11.375 14.0542 11.2208 14.1625 11.0625C14.2708 10.9042 14.3917 10.8 14.525 10.75C15.0083 10.5833 15.4917 10.4583 15.975 10.375C16.4583 10.2917 16.9667 10.25 17.5 10.25C17.8333 10.25 18.1625 10.2708 18.4875 10.3125C18.8125 10.3542 19.1333 10.4083 19.45 10.475C19.6 10.5083 19.7292 10.5917 19.8375 10.725C19.9458 10.8583 20 11.0083 20 11.175C20 11.4583 19.9083 11.6667 19.725 11.8C19.5417 11.9333 19.3083 11.9667 19.025 11.9C18.7917 11.85 18.5458 11.8125 18.2875 11.7875C18.0292 11.7625 17.7667 11.75 17.5 11.75C17.0667 11.75 16.6417 11.7917 16.225 11.875C15.8083 11.9583 15.4083 12.0667 15.025 12.2C14.725 12.3167 14.4792 12.3083 14.2875 12.175C14.0958 12.0417 14 11.825 14 11.525Z" })
    ]
  }
), k1 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M7.74687 1.00812C7.66942 1.02044 7.51497 1.11665 7.40368 1.22196C7.20272 1.41219 7.20164 1.41645 7.24371 1.87875C7.26705 2.1347 7.31392 2.69232 7.34776 3.11796C7.61178 6.43593 7.65513 7.42951 7.53904 7.5022C7.34378 7.62448 7.23611 7.43996 5.4151 3.86266C4.79087 2.63635 4.67189 2.50711 4.2859 2.63614C3.67367 2.84085 3.72185 3.15023 4.69994 5.29459C4.82544 5.56968 4.92804 5.80618 4.92804 5.82021C4.92804 5.83432 5.03816 6.08815 5.17297 6.38423C5.90324 7.98987 6.09352 8.6429 5.85782 8.73457C5.69079 8.79947 5.39329 8.63804 5.14872 8.34994C5.02431 8.20336 4.87122 8.02534 4.80861 7.95439C4.7459 7.88354 4.56811 7.66583 4.41348 7.47076C4.25885 7.27569 4.11761 7.10162 4.0996 7.08383C4.0816 7.06614 3.78704 6.71341 3.4451 6.29999C3.10309 5.88657 2.77897 5.53109 2.72474 5.51001C2.41291 5.38882 2 5.62798 2 5.92975C2 6.1932 2.62513 7.25305 3.92633 9.19547C4.74183 10.4127 4.93347 10.851 5.11805 11.9204C5.50893 14.1859 6.04086 15.5747 6.72906 16.1271C7.19756 16.5032 7.21077 16.506 8.31382 16.4582L9.32404 16.4145L10.0917 15.3766C10.5139 14.8057 10.8924 14.2951 10.9331 14.2418C11.2275 13.8553 11.9934 12.4858 11.9934 12.346C11.9934 12.326 11.5954 12.3281 11.1089 12.3505C10.51 12.3781 10.0939 12.3655 9.81996 12.3116C9.34503 12.2179 8.74686 11.9422 8.41869 11.6655C7.90078 11.2289 7.74859 10.454 8.07143 9.89599C8.31256 9.47909 8.64688 9.30024 9.34964 9.21197C9.91759 9.14074 10.5252 8.97299 11.4046 8.64492L11.8661 8.47277V7.71973C11.8661 6.94826 12.0114 4.25775 12.1217 2.98899C12.2083 1.99134 12.2097 2.00218 11.968 1.75726C11.8009 1.58811 11.6985 1.53801 11.5195 1.53801C11.0687 1.53801 11.0441 1.60107 10.5976 3.89255C10.3765 5.02711 10.1557 6.18752 10.1069 6.47123C10.0003 7.09053 9.9166 7.31878 9.77581 7.3735C9.59186 7.44509 9.41968 7.15323 9.33698 6.62999C9.29518 6.36535 9.18624 5.66997 9.09485 5.08477C8.92565 4.00081 8.58735 1.97013 8.51505 1.60372C8.47162 1.38388 8.1867 1.05499 8.00266 1.01237C7.93951 0.99773 7.82441 0.995796 7.74687 1.00812ZM16.2263 7.64538C15.9431 7.71349 15.12 8.01544 14.7447 8.18897C14.5251 8.29054 14.3287 8.37358 14.3083 8.37358C14.288 8.37358 13.7516 8.63383 13.1164 8.952C11.7752 9.62364 10.2221 10.1791 9.68469 10.1793C9.31526 10.1794 8.91769 10.3451 8.88702 10.5115C8.85291 10.6978 9.23971 11.0663 9.62615 11.2154C9.9688 11.3476 10.0583 11.3531 11.2858 11.3164C12.3829 11.2837 12.6156 11.2932 12.7917 11.3779C13.0946 11.5234 13.1779 11.7716 13.0775 12.2305C12.9753 12.6983 12.4059 13.8553 11.947 14.5277C11.6488 14.9647 9.87371 17.3579 8.84259 18.7132C8.47461 19.197 8.45814 19.4434 8.77256 19.762C9.17981 20.1745 9.12724 20.2112 11.3156 17.9827C13.3582 15.9029 13.5287 15.7665 13.6211 16.1396C13.6772 16.3662 13.6901 16.3331 12.782 18.2958C12.6283 18.6278 12.5026 18.9087 12.5026 18.9198C12.5026 18.9309 12.3989 19.167 12.2723 19.4445C11.2318 21.7231 11.1894 21.8762 11.4905 22.2639C11.5982 22.4027 11.6723 22.4313 11.9185 22.4297C12.0822 22.4286 12.2603 22.3923 12.3142 22.349C12.3682 22.3058 12.6808 21.7772 13.009 21.1742C13.584 20.1178 13.9216 19.5059 14.2076 19.0011C15.2641 17.1362 15.2589 17.1438 15.4502 17.1438C15.5724 17.1438 15.5758 17.1739 15.538 17.9338C15.5035 18.6276 15.4165 19.4544 15.1769 21.3677C15.0863 22.09 15.0979 22.6972 15.2049 22.8402C15.3309 23.0086 15.7683 23.0562 15.9687 22.9233C16.1743 22.7867 16.2702 22.4417 16.5086 20.9808C17.0134 17.8841 17.14 17.2951 17.34 17.1118C17.4632 16.9988 17.472 16.9989 17.6007 17.1169C17.6739 17.1841 17.7601 17.2887 17.7921 17.3494C17.8242 17.41 17.9206 18.1358 18.0065 18.9623C18.2479 21.2883 18.2687 21.4088 18.4576 21.5773C18.6664 21.7635 18.8796 21.7613 19.0981 21.571C19.2645 21.426 19.2741 21.3836 19.3292 20.5554C19.3608 20.08 19.3739 19.1397 19.3582 18.4657C19.3278 17.1534 19.3875 16.0546 19.5099 15.6715C19.5515 15.5414 19.7501 15.0432 19.9513 14.5643C20.1526 14.0855 20.4383 13.3165 20.5862 12.8554C21.0422 11.4342 21.0078 10.2932 20.4931 9.76903C20.3838 9.65775 20.0548 9.43637 19.7619 9.27714C19.3877 9.07383 19.0357 8.80332 18.5784 8.36772C18.056 7.87024 17.8702 7.73311 17.6375 7.67371C17.3547 7.60166 16.4811 7.58406 16.2263 7.64538ZM21.1923 9.53069C21.1675 9.60989 21.2138 9.82614 21.3071 10.0665C21.5134 10.5978 21.5604 11.0656 21.4707 11.6947C21.3551 12.5054 21.3599 12.5943 21.5214 12.6176C21.7393 12.649 21.8504 12.3982 21.9315 11.6911C22.0198 10.9209 21.9423 10.334 21.6807 9.79231C21.4926 9.40282 21.2697 9.28347 21.1923 9.53069ZM22.3483 9.75326C22.3295 9.80267 22.372 10.0276 22.4425 10.253C22.6088 10.7841 22.5769 11.6232 22.366 12.2625C22.234 12.6626 22.2301 12.7103 22.3218 12.8033C22.5391 13.0235 22.7617 12.7194 22.9131 11.9954C23.0736 11.2284 23.006 10.2756 22.7576 9.80542C22.6731 9.64546 22.4022 9.6109 22.3483 9.75326ZM4.7516 15.2847C4.6205 15.4175 4.66339 15.6069 4.9389 16.112C5.4065 16.9693 6.53615 17.9508 6.7999 17.7292C6.98675 17.5721 6.91282 17.4272 6.5205 17.1819C6.03028 16.8754 5.59868 16.3776 5.27512 15.7453C5.01716 15.2414 4.898 15.1365 4.7516 15.2847ZM3.84671 15.6918C3.74599 15.8148 3.82653 16.119 4.12023 16.7246C4.52341 17.556 5.39555 18.4088 5.71531 18.2844C5.8846 18.2187 5.84099 17.9585 5.64067 17.8386C5.10936 17.5206 4.59317 16.8063 4.323 16.0153C4.18248 15.6036 4.01319 15.4886 3.84671 15.6918Z" })
    ]
  }
), Iu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M8.5 22C8.08333 22 7.72917 21.8542 7.4375 21.5625C7.14583 21.2708 7 20.9167 7 20.5V7.5C7 7.08333 7.14583 6.72917 7.4375 6.4375C7.72917 6.14583 8.08333 6 8.5 6C8.91667 6 9.27083 6.14583 9.5625 6.4375C9.85417 6.72917 10 7.08333 10 7.5V20.5C10 20.9167 9.85417 21.2708 9.5625 21.5625C9.27083 21.8542 8.91667 22 8.5 22ZM15.5 16C15.0833 16 14.7292 15.8542 14.4375 15.5625C14.1458 15.2708 14 14.9167 14 14.5V7.5C14 7.08333 14.1458 6.72917 14.4375 6.4375C14.7292 6.14583 15.0833 6 15.5 6C15.9167 6 16.2708 6.14583 16.5625 6.4375C16.8542 6.72917 17 7.08333 17 7.5V14.5C17 14.9167 16.8542 15.2708 16.5625 15.5625C16.2708 15.8542 15.9167 16 15.5 16ZM3 4C2.71667 4 2.47917 3.90417 2.2875 3.7125C2.09583 3.52083 2 3.28333 2 3C2 2.71667 2.09583 2.47917 2.2875 2.2875C2.47917 2.09583 2.71667 2 3 2H21C21.2833 2 21.5208 2.09583 21.7125 2.2875C21.9042 2.47917 22 2.71667 22 3C22 3.28333 21.9042 3.52083 21.7125 3.7125C21.5208 3.90417 21.2833 4 21 4H3Z" })
    ]
  }
), Ou = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M3 22C2.71667 22 2.47917 21.9042 2.2875 21.7125C2.09583 21.5208 2 21.2833 2 21C2 20.7167 2.09583 20.4792 2.2875 20.2875C2.47917 20.0958 2.71667 20 3 20H21C21.2833 20 21.5208 20.0958 21.7125 20.2875C21.9042 20.4792 22 20.7167 22 21C22 21.2833 21.9042 21.5208 21.7125 21.7125C21.5208 21.9042 21.2833 22 21 22H3ZM8.5 18C8.08333 18 7.72917 17.8542 7.4375 17.5625C7.14583 17.2708 7 16.9167 7 16.5V3.5C7 3.08333 7.14583 2.72917 7.4375 2.4375C7.72917 2.14583 8.08333 2 8.5 2C8.91667 2 9.27083 2.14583 9.5625 2.4375C9.85417 2.72917 10 3.08333 10 3.5V16.5C10 16.9167 9.85417 17.2708 9.5625 17.5625C9.27083 17.8542 8.91667 18 8.5 18ZM15.5 18C15.0833 18 14.7292 17.8542 14.4375 17.5625C14.1458 17.2708 14 16.9167 14 16.5V9.5C14 9.08333 14.1458 8.72917 14.4375 8.4375C14.7292 8.14583 15.0833 8 15.5 8C15.9167 8 16.2708 8.14583 16.5625 8.4375C16.8542 8.72917 17 9.08333 17 9.5V16.5C17 16.9167 16.8542 17.2708 16.5625 17.5625C16.2708 17.8542 15.9167 18 15.5 18Z" })
    ]
  }
), Wc = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M7.85894 17.8215C7.69777 17.8215 7.5603 17.7803 7.44654 17.6979C7.34225 17.6064 7.29011 17.4783 7.29011 17.3135V17.1625C6.68336 17.7208 5.85856 18 4.8157 18C4.39856 18 4.0146 17.9405 3.66382 17.8215C3.32253 17.7117 3.02863 17.5515 2.78214 17.341C2.53565 17.1213 2.3413 16.8604 2.19909 16.5584C2.06636 16.2563 2 15.9176 2 15.5423C2 14.6545 2.3176 13.9954 2.95279 13.5652C3.58798 13.135 4.50759 12.9199 5.71161 12.9199H7.16212C7.20952 12.9199 7.24271 12.9382 7.26167 12.9748C7.28063 13.0114 7.29011 13.0206 7.29011 13.0023C7.29011 12.508 7.13368 12.1236 6.82082 11.849C6.50797 11.5652 5.99602 11.405 5.28499 11.3684C4.93421 11.3501 4.58817 11.3776 4.24687 11.4508C3.91506 11.524 3.59272 11.6247 3.27986 11.7529C3.09974 11.8261 2.93383 11.8307 2.78214 11.7666C2.63993 11.6934 2.56883 11.5561 2.56883 11.3547V11.0801C2.56883 10.8146 2.71104 10.6316 2.99545 10.5309C3.82973 10.2563 4.64031 10.119 5.42719 10.119C7.80679 10.119 8.99659 11.2632 8.99659 13.5515V17.3135C8.99659 17.46 8.94919 17.5835 8.85439 17.6842C8.75958 17.7757 8.62212 17.8215 8.44199 17.8215H7.85894ZM5.6405 14.1831C5.2044 14.1831 4.84888 14.2014 4.57395 14.238C4.3085 14.2746 4.09519 14.3295 3.93402 14.4027C3.78233 14.476 3.6733 14.5675 3.60694 14.6773C3.55006 14.7872 3.51688 14.9153 3.5074 15.0618C3.49792 15.1167 3.49318 15.167 3.49318 15.2128C3.50266 15.2494 3.51688 15.2952 3.53584 15.3501C3.61168 15.5515 3.76337 15.6796 3.9909 15.7346C4.21843 15.7895 4.55973 15.8169 5.01479 15.8169C5.29921 15.8169 5.54096 15.8032 5.74005 15.7757C5.93914 15.7391 6.10031 15.6705 6.22355 15.5698C6.3468 15.46 6.43686 15.3043 6.49375 15.103C6.55063 14.9016 6.57907 14.627 6.57907 14.2792C6.57907 14.2426 6.56959 14.2197 6.55063 14.2105C6.54115 14.1922 6.50797 14.1831 6.45109 14.1831H5.6405Z" }),
      /* @__PURE__ */ n("path", { d: "M19.7531 17.8078C19.592 17.8078 19.4498 17.7712 19.3265 17.6979C19.2127 17.6156 19.1322 17.492 19.0848 17.3272L18.7861 16.0778C18.7672 15.9954 18.7435 15.9451 18.715 15.9268C18.6866 15.8993 18.6297 15.8856 18.5444 15.8856H14.1075C14.0032 15.8856 13.9369 15.8993 13.9084 15.9268C13.88 15.9451 13.861 15.9771 13.8515 16.0229L13.6098 17.3272C13.5813 17.5011 13.5007 17.6247 13.368 17.6979C13.2448 17.7712 13.1026 17.8078 12.9414 17.8078H11.2349C11.0737 17.8078 10.9315 17.7712 10.8083 17.6979C10.6945 17.6156 10.6376 17.4966 10.6376 17.341C10.6376 17.2586 10.6566 17.1762 10.6945 17.0938L15.2309 6.4119C15.3447 6.1373 15.5675 6 15.8993 6H16.7526C17.0844 6 17.3072 6.1373 17.4209 6.4119L21.9431 17.0938C21.981 17.1762 22 17.2586 22 17.341C22 17.4966 21.9384 17.6156 21.8151 17.6979C21.7014 17.7712 21.5686 17.8078 21.417 17.8078H19.7531ZM16.3259 9.14416L14.7332 13.5789C14.7237 13.5881 14.719 13.6156 14.719 13.6613C14.719 13.7071 14.7711 13.73 14.8754 13.73H17.7764C17.8523 13.73 17.895 13.7208 17.9044 13.7025C17.9234 13.6842 17.9329 13.6705 17.9329 13.6613C17.9329 13.6064 17.9281 13.5744 17.9187 13.5652L16.3259 9.14416Z" })
    ]
  }
), Pu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M16.775 19.575C16.5917 19.6916 16.4083 19.8 16.225 19.9C16.0417 20 15.85 20.0916 15.65 20.175C15.4 20.2916 15.1458 20.2916 14.8875 20.175C14.6292 20.0583 14.45 19.8666 14.35 19.6C14.25 19.35 14.2625 19.1041 14.3875 18.8625C14.5125 18.6208 14.7 18.4416 14.95 18.325C15.0167 18.2916 15.0792 18.2583 15.1375 18.225C15.1958 18.1916 15.2583 18.1583 15.325 18.125L12 14.8V17.575C12 18.025 11.7958 18.3375 11.3875 18.5125C10.9792 18.6875 10.6167 18.6166 10.3 18.3L7 15H4C3.71666 15 3.47916 14.9041 3.2875 14.7125C3.09583 14.5208 3 14.2833 3 14V9.99998C3 9.71664 3.09583 9.47914 3.2875 9.28748C3.47916 9.09581 3.71666 8.99998 4 8.99998H6.2L2.1 4.89998C1.91666 4.71664 1.825 4.48331 1.825 4.19998C1.825 3.91664 1.91666 3.68331 2.1 3.49998C2.28333 3.31664 2.51666 3.22498 2.8 3.22498C3.08333 3.22498 3.31666 3.31664 3.5 3.49998L20.5 20.5C20.6833 20.6833 20.775 20.9166 20.775 21.2C20.775 21.4833 20.6833 21.7166 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L16.775 19.575ZM19 11.975C19 10.5916 18.6333 9.32914 17.9 8.18748C17.1667 7.04581 16.1833 6.19164 14.95 5.62498C14.7 5.50831 14.5167 5.32914 14.4 5.08748C14.2833 4.84581 14.2667 4.59998 14.35 4.34998C14.45 4.08331 14.6292 3.89164 14.8875 3.77498C15.1458 3.65831 15.4083 3.65831 15.675 3.77498C17.2917 4.49164 18.5833 5.58331 19.55 7.04998C20.5167 8.51664 21 10.1583 21 11.975C21 12.525 20.95 13.0708 20.85 13.6125C20.75 14.1541 20.6083 14.675 20.425 15.175C20.2917 15.5416 20.0875 15.7708 19.8125 15.8625C19.5375 15.9541 19.2833 15.9583 19.05 15.875C18.8167 15.7916 18.6292 15.6416 18.4875 15.425C18.3458 15.2083 18.3417 14.9583 18.475 14.675C18.6583 14.2416 18.7917 13.8041 18.875 13.3625C18.9583 12.9208 19 12.4583 19 11.975ZM14.775 8.42498C15.325 8.77498 15.75 9.29998 16.05 9.99998C16.35 10.7 16.5 11.3666 16.5 12V12.25C16.5 12.3333 16.4917 12.4166 16.475 12.5C16.4417 12.7166 16.325 12.8583 16.125 12.925C15.925 12.9916 15.7417 12.9416 15.575 12.775L14.3 11.5C14.2 11.4 14.125 11.2875 14.075 11.1625C14.025 11.0375 14 10.9083 14 10.775V8.84998C14 8.64998 14.0875 8.50414 14.2625 8.41248C14.4375 8.32081 14.6083 8.32498 14.775 8.42498ZM9.75 6.94998C9.65 6.84998 9.6 6.73331 9.6 6.59998C9.6 6.46664 9.65 6.34998 9.75 6.24998L10.3 5.69998C10.6167 5.38331 10.9792 5.31248 11.3875 5.48748C11.7958 5.66248 12 5.97498 12 6.42498V7.99998C12 8.23331 11.9 8.39164 11.7 8.47498C11.5 8.55831 11.3167 8.51664 11.15 8.34998L9.75 6.94998Z" })
    ]
  }
), Du = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 10.8L8.1 14.7C7.91667 14.8834 7.68334 14.975 7.4 14.975C7.11667 14.975 6.88334 14.8834 6.7 14.7C6.51667 14.5167 6.425 14.2834 6.425 14C6.425 13.7167 6.51667 13.4834 6.7 13.3L11.3 8.70002C11.5 8.50002 11.7333 8.40002 12 8.40002C12.2667 8.40002 12.5 8.50002 12.7 8.70002L17.3 13.3C17.4833 13.4834 17.575 13.7167 17.575 14C17.575 14.2834 17.4833 14.5167 17.3 14.7C17.1167 14.8834 16.8833 14.975 16.6 14.975C16.3167 14.975 16.0833 14.8834 15.9 14.7L12 10.8Z" })
    ]
  }
), Hu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 4.00305C11.9087 4.00102 11.817 4 11.725 4C9.49167 4 7.45417 4.6 5.6125 5.8C3.77083 7 2.31667 8.58333 1.25 10.55C1.16667 10.7 1.10417 10.8542 1.0625 11.0125C1.02083 11.1708 1 11.3333 1 11.5C1 11.6667 1.02083 11.8292 1.0625 11.9875C1.10417 12.1458 1.16667 12.3 1.25 12.45C2.31667 14.4167 3.77083 16 5.6125 17.2C7.45417 18.4 9.49167 19 11.725 19C11.817 19 11.9087 18.999 12 18.9969V15.9928C11.9094 15.9976 11.8177 16 11.725 16C10.475 16 9.4125 15.5625 8.5375 14.6875C7.6625 13.8125 7.225 12.75 7.225 11.5C7.225 10.25 7.6625 9.1875 8.5375 8.3125C9.4125 7.4375 10.475 7 11.725 7C11.8177 7 11.9094 7.00241 12 7.00722V4.00305Z" }),
      /* @__PURE__ */ n("path", { d: "M12 8.81222C11.9101 8.80407 11.8184 8.8 11.725 8.8C10.975 8.8 10.3375 9.0625 9.8125 9.5875C9.2875 10.1125 9.025 10.75 9.025 11.5C9.025 12.25 9.2875 12.8875 9.8125 13.4125C10.3375 13.9375 10.975 14.2 11.725 14.2C11.8184 14.2 11.9101 14.1959 12 14.1878V8.81222Z" }),
      /* @__PURE__ */ n("path", { d: "M12 18.9939C14.1259 18.9465 16.0717 18.3475 17.8375 17.1969C19.6792 15.9969 21.1333 14.4136 22.2 12.4469C22.2833 12.2969 22.3458 12.1428 22.3875 11.9844C22.4292 11.8261 22.45 11.6636 22.45 11.4969C22.45 11.3303 22.4292 11.1678 22.3875 11.0094C22.3458 10.8511 22.2833 10.6969 22.2 10.5469C21.1333 8.58028 19.6792 6.99695 17.8375 5.79695C16.0717 4.64638 14.1259 4.0474 12 4V6.0005C13.777 6.04659 15.4145 6.54124 16.9125 7.48445C18.4875 8.47611 19.6917 9.81361 20.525 11.4969C19.6917 13.1803 18.4875 14.5178 16.9125 15.5094C15.4145 16.4527 13.777 16.9473 12 16.9934V18.9939Z" }),
      /* @__PURE__ */ n("path", { d: "M12 15.9897C13.1316 15.9297 14.1024 15.4946 14.9125 14.6844C15.7875 13.8094 16.225 12.7469 16.225 11.4969C16.225 10.2469 15.7875 9.18445 14.9125 8.30945C14.1024 7.49933 13.1316 7.06424 12 7.00416V8.80916C12.6321 8.86641 13.1779 9.12483 13.6375 9.58445C14.1625 10.1094 14.425 10.7469 14.425 11.4969C14.425 12.2469 14.1625 12.8844 13.6375 13.4094C13.1779 13.8691 12.6321 14.1275 12 14.1847V15.9897Z" })
    ]
  }
), zu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.27083 9.31667 2.8125 8.1C3.35417 6.88333 4.0875 5.825 5.0125 4.925C5.9375 4.025 7.01667 3.3125 8.25 2.7875C9.48333 2.2625 10.8 2 12.2 2C13.5333 2 14.7917 2.22917 15.975 2.6875C17.1583 3.14583 18.1958 3.77917 19.0875 4.5875C19.9792 5.39583 20.6875 6.35417 21.2125 7.4625C21.7375 8.57083 22 9.76667 22 11.05C22 12.9667 21.4167 14.4375 20.25 15.4625C19.0833 16.4875 17.6667 17 16 17H14.15C14 17 13.8958 17.0417 13.8375 17.125C13.7792 17.2083 13.75 17.3 13.75 17.4C13.75 17.6 13.875 17.8875 14.125 18.2625C14.375 18.6375 14.5 19.0667 14.5 19.55C14.5 20.3833 14.2708 21 13.8125 21.4C13.3542 21.8 12.75 22 12 22ZM6.5 13C6.93333 13 7.29167 12.8583 7.575 12.575C7.85833 12.2917 8 11.9333 8 11.5C8 11.0667 7.85833 10.7083 7.575 10.425C7.29167 10.1417 6.93333 10 6.5 10C6.06667 10 5.70833 10.1417 5.425 10.425C5.14167 10.7083 5 11.0667 5 11.5C5 11.9333 5.14167 12.2917 5.425 12.575C5.70833 12.8583 6.06667 13 6.5 13ZM9.5 9C9.93333 9 10.2917 8.85833 10.575 8.575C10.8583 8.29167 11 7.93333 11 7.5C11 7.06667 10.8583 6.70833 10.575 6.425C10.2917 6.14167 9.93333 6 9.5 6C9.06667 6 8.70833 6.14167 8.425 6.425C8.14167 6.70833 8 7.06667 8 7.5C8 7.93333 8.14167 8.29167 8.425 8.575C8.70833 8.85833 9.06667 9 9.5 9ZM14.5 9C14.9333 9 15.2917 8.85833 15.575 8.575C15.8583 8.29167 16 7.93333 16 7.5C16 7.06667 15.8583 6.70833 15.575 6.425C15.2917 6.14167 14.9333 6 14.5 6C14.0667 6 13.7083 6.14167 13.425 6.425C13.1417 6.70833 13 7.06667 13 7.5C13 7.93333 13.1417 8.29167 13.425 8.575C13.7083 8.85833 14.0667 9 14.5 9ZM17.5 13C17.9333 13 18.2917 12.8583 18.575 12.575C18.8583 12.2917 19 11.9333 19 11.5C19 11.0667 18.8583 10.7083 18.575 10.425C18.2917 10.1417 17.9333 10 17.5 10C17.0667 10 16.7083 10.1417 16.425 10.425C16.1417 10.7083 16 11.0667 16 11.5C16 11.9333 16.1417 12.2917 16.425 12.575C16.7083 12.8583 17.0667 13 17.5 13Z" })
    ]
  }
), Bu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M10 22C8.61667 22 7.4375 21.5125 6.4625 20.5375C5.4875 19.5625 5 18.3833 5 17C5 16.15 5.19167 15.3667 5.575 14.65C5.95833 13.9333 6.46667 13.35 7.1 12.9C7.33333 12.7333 7.58333 12.675 7.85 12.725C8.11667 12.775 8.33333 12.9167 8.5 13.15C8.66667 13.3833 8.72917 13.6333 8.6875 13.9C8.64583 14.1667 8.50833 14.3833 8.275 14.55C7.89167 14.8333 7.58333 15.1875 7.35 15.6125C7.11667 16.0375 7 16.5 7 17C7 17.8333 7.29167 18.5417 7.875 19.125C8.45833 19.7083 9.16667 20 10 20C10.5 20 10.9625 19.8833 11.3875 19.65C11.8125 19.4167 12.1667 19.1083 12.45 18.725C12.6167 18.4917 12.8333 18.3542 13.1 18.3125C13.3667 18.2708 13.6167 18.3333 13.85 18.5C14.0833 18.6667 14.225 18.8833 14.275 19.15C14.325 19.4167 14.2667 19.6667 14.1 19.9C13.65 20.5333 13.0667 21.0417 12.35 21.425C11.6333 21.8083 10.85 22 10 22ZM18 22C17.7167 22 17.4792 21.9042 17.2875 21.7125C17.0958 21.5208 17 21.2833 17 21V17H12C11.45 17 10.9792 16.8042 10.5875 16.4125C10.1958 16.0208 10 15.55 10 15V9C10 8.45 10.1958 7.97917 10.5875 7.5875C10.9792 7.19583 11.45 7 12 7C12.4 7 12.7458 7.0875 13.0375 7.2625C13.3292 7.4375 13.6417 7.71667 13.975 8.1C14.725 9 15.4042 9.65833 16.0125 10.075C16.6208 10.4917 17.275 10.7667 17.975 10.9C18.2583 10.95 18.5 11.075 18.7 11.275C18.9 11.475 19 11.7167 19 12C19 12.2833 18.8958 12.5167 18.6875 12.7C18.4792 12.8833 18.2417 12.95 17.975 12.9C17.2417 12.7667 16.5292 12.5333 15.8375 12.2C15.1458 11.8667 14.5333 11.4833 14 11.05V14.5H17C17.55 14.5 18.0208 14.6958 18.4125 15.0875C18.8042 15.4792 19 15.95 19 16.5V21C19 21.2833 18.9042 21.5208 18.7125 21.7125C18.5208 21.9042 18.2833 22 18 22ZM12 6C11.45 6 10.9792 5.80417 10.5875 5.4125C10.1958 5.02083 10 4.55 10 4C10 3.45 10.1958 2.97917 10.5875 2.5875C10.9792 2.19583 11.45 2 12 2C12.55 2 13.0208 2.19583 13.4125 2.5875C13.8042 2.97917 14 3.45 14 4C14 4.55 13.8042 5.02083 13.4125 5.4125C13.0208 5.80417 12.55 6 12 6Z" })
    ]
  }
), Fu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20ZM12 18C10.3333 18 8.91667 17.4167 7.75 16.25C6.58333 15.0833 6 13.6667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6667 6 15.0833 6.58333 16.25 7.75C17.4167 8.91667 18 10.3333 18 12C18 13.6667 17.4167 15.0833 16.25 16.25C15.0833 17.4167 13.6667 18 12 18ZM12 16C13.1 16 14.0417 15.6083 14.825 14.825C15.6083 14.0417 16 13.1 16 12C16 10.9 15.6083 9.95833 14.825 9.175C14.0417 8.39167 13.1 8 12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 13.1 8.39167 14.0417 9.175 14.825C9.95833 15.6083 10.9 16 12 16ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14Z" })
    ]
  }
), $u = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12.275 15.525C13.4417 15.525 14.4333 15.15 15.25 14.4C16.0667 13.65 16.475 12.7417 16.475 11.675C16.475 10.725 16.1708 9.92083 15.5625 9.2625C14.9542 8.60417 14.2167 8.275 13.35 8.275C12.5667 8.275 11.9042 8.525 11.3625 9.025C10.8208 9.525 10.55 10.1417 10.55 10.875C10.55 11.1917 10.6042 11.5042 10.7125 11.8125C10.8208 12.1208 11.0083 12.3917 11.275 12.625C11.5417 12.8583 11.8083 12.9542 12.075 12.9125C12.3417 12.8708 12.5583 12.7583 12.725 12.575C12.8917 12.3917 12.9875 12.1708 13.0125 11.9125C13.0375 11.6542 12.9333 11.4167 12.7 11.2C12.6667 11.1667 12.6333 11.125 12.6 11.075C12.5667 11.025 12.55 10.9667 12.55 10.9C12.55 10.7167 12.625 10.5708 12.775 10.4625C12.925 10.3542 13.1167 10.3 13.35 10.3C13.6833 10.3 13.9583 10.4375 14.175 10.7125C14.3917 10.9875 14.5 11.3167 14.5 11.7C14.5 12.2167 14.2875 12.6542 13.8625 13.0125C13.4375 13.3708 12.9167 13.55 12.3 13.55C11.5167 13.55 10.8542 13.2333 10.3125 12.6C9.77083 11.9667 9.5 11.1917 9.5 10.275C9.5 9.95833 9.5375 9.65 9.6125 9.35C9.6875 9.05 9.8 8.76667 9.95 8.5C10.0833 8.25 10.15 7.9875 10.15 7.7125C10.15 7.4375 10.05 7.2 9.85 7C9.65 6.8 9.40833 6.70417 9.125 6.7125C8.84167 6.72083 8.625 6.84167 8.475 7.075C8.14167 7.54167 7.89167 8.04167 7.725 8.575C7.55833 9.10833 7.475 9.66667 7.475 10.25C7.475 11.7167 7.94167 12.9625 8.875 13.9875C9.80833 15.0125 10.9417 15.525 12.275 15.525ZM7 22C6.71667 22 6.47917 21.9042 6.2875 21.7125C6.09583 21.5208 6 21.2833 6 21V17.7C5.05 16.8333 4.3125 15.8208 3.7875 14.6625C3.2625 13.5042 3 12.2833 3 11C3 8.5 3.875 6.375 5.625 4.625C7.375 2.875 9.5 2 12 2C14.0833 2 15.9292 2.6125 17.5375 3.8375C19.1458 5.0625 20.1917 6.65833 20.675 8.625L21.975 13.75C22.0583 14.0667 22 14.3542 21.8 14.6125C21.6 14.8708 21.3333 15 21 15H19V18C19 18.55 18.8042 19.0208 18.4125 19.4125C18.0208 19.8042 17.55 20 17 20H15V21C15 21.2833 14.9042 21.5208 14.7125 21.7125C14.5208 21.9042 14.2833 22 14 22H7Z" })
    ]
  }
), Uu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M8.63849 19C8.34916 19 8.11045 18.9212 7.92238 18.7636C7.74878 18.606 7.66198 18.3983 7.66198 18.1404V17.8395C7.06884 18.4699 6.24423 18.7851 5.18815 18.7851C4.39247 18.7851 3.67637 18.5917 3.03982 18.2049C2.40328 17.8181 1.90418 17.2736 1.54251 16.5716C1.18084 15.8553 1 15.0458 1 14.1433C1 13.1404 1.217 12.1734 1.65101 11.2421C2.08501 10.2966 2.69262 9.53009 3.47383 8.94269C4.26951 8.3553 5.18092 8.0616 6.20806 8.0616C6.87354 8.0616 7.47391 8.15473 8.00919 8.34097C8.54446 8.51289 9.10143 8.72779 9.68011 8.98567V17.9255C9.68011 18.212 9.57884 18.4628 9.3763 18.6776C9.17377 18.8925 8.92783 19 8.63849 19ZM5.34005 16.7865C5.75959 16.7865 6.16466 16.7006 6.55527 16.5287C6.96034 16.3567 7.29308 16.149 7.55348 15.9054L7.61858 10.2966C7.19904 10.1246 6.74334 10.0387 6.25146 10.0387C5.62939 10.0387 5.07965 10.2321 4.60224 10.6189C4.12484 10.9914 3.75593 11.4928 3.49553 12.1232C3.23513 12.7393 3.10493 13.3983 3.10493 14.1003C3.10493 14.9742 3.30023 15.6404 3.69083 16.0989C4.08144 16.5573 4.63118 16.7865 5.34005 16.7865Z" }),
      /* @__PURE__ */ n("path", { d: "M21.915 18.8066C21.3942 18.8066 21.0542 18.563 20.8951 18.0759L19.3327 13.606L14.9058 14.5731L13.4953 18.0974C13.4085 18.298 13.2783 18.4628 13.1047 18.5917C12.9455 18.7206 12.743 18.7851 12.4971 18.7851C12.2077 18.7851 11.9546 18.6848 11.7376 18.4842C11.5206 18.2837 11.4121 18.0473 11.4121 17.7751C11.4121 17.5888 11.4627 17.3739 11.564 17.1304L12.432 14.9814C12.3452 14.9527 12.2801 14.9241 12.2367 14.8954C11.8605 14.7092 11.6725 14.394 11.6725 13.9499C11.6725 13.692 11.7448 13.4699 11.8895 13.2837C12.0486 13.0974 12.2511 12.9756 12.4971 12.9183L13.3 12.7464L16.5116 4.66619C16.5984 4.45129 16.7359 4.28653 16.9239 4.17192C17.112 4.05731 17.3145 4 17.5315 4C17.763 4 17.9655 4.05731 18.1391 4.17192C18.3127 4.28653 18.4429 4.46562 18.5297 4.70917L22.8481 17.1089C22.8626 17.1375 22.8915 17.2235 22.9349 17.3668C22.9783 17.4957 23 17.6318 23 17.7751C23 18.0473 22.8987 18.2908 22.6962 18.5057C22.4937 18.7063 22.2333 18.8066 21.915 18.8066ZM18.6165 11.6074L17.4447 8.14756L15.8172 12.2092L18.6165 11.6074Z" })
    ]
  }
), Xc = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.68749 7.4375 8.81249 8.3125C7.93749 9.1875 7.49999 10.25 7.49999 11.5C7.49999 12.75 7.93749 13.8125 8.81249 14.6875C9.68749 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.56249 12.8875 9.29999 12.25 9.29999 11.5C9.29999 10.75 9.56249 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.76666 19 7.72916 18.4 5.88749 17.2C4.04583 16 2.59166 14.4167 1.52499 12.45C1.44166 12.3 1.37916 12.1458 1.33749 11.9875C1.29583 11.8292 1.27499 11.6667 1.27499 11.5C1.27499 11.3333 1.29583 11.1708 1.33749 11.0125C1.37916 10.8542 1.44166 10.7 1.52499 10.55C2.59166 8.58333 4.04583 7 5.88749 5.8C7.72916 4.6 9.76666 4 12 4C14.2333 4 16.2708 4.6 18.1125 5.8C19.9542 7 21.4083 8.58333 22.475 10.55C22.5583 10.7 22.6208 10.8542 22.6625 11.0125C22.7042 11.1708 22.725 11.3333 22.725 11.5C22.725 11.6667 22.7042 11.8292 22.6625 11.9875C22.6208 12.1458 22.5583 12.3 22.475 12.45C21.4083 14.4167 19.9542 16 18.1125 17.2C16.2708 18.4 14.2333 19 12 19Z" })
    ]
  }
), Vu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M8.65 20H6C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15.35L2.075 13.4C1.89167 13.2 1.75 12.9792 1.65 12.7375C1.55 12.4958 1.5 12.25 1.5 12C1.5 11.75 1.55 11.5042 1.65 11.2625C1.75 11.0208 1.89167 10.8 2.075 10.6L4 8.65V6C4 5.45 4.19583 4.97917 4.5875 4.5875C4.97917 4.19583 5.45 4 6 4H8.65L10.6 2.075C10.8 1.89167 11.0208 1.75 11.2625 1.65C11.5042 1.55 11.75 1.5 12 1.5C12.25 1.5 12.4958 1.55 12.7375 1.65C12.9792 1.75 13.2 1.89167 13.4 2.075L15.35 4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V8.65L21.925 10.6C22.1083 10.8 22.25 11.0208 22.35 11.2625C22.45 11.5042 22.5 11.75 22.5 12C22.5 12.25 22.45 12.4958 22.35 12.7375C22.25 12.9792 22.1083 13.2 21.925 13.4L20 15.35V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H15.35L13.4 21.925C13.2 22.1083 12.9792 22.25 12.7375 22.35C12.4958 22.45 12.25 22.5 12 22.5C11.75 22.5 11.5042 22.45 11.2625 22.35C11.0208 22.25 10.8 22.1083 10.6 21.925L8.65 20ZM12 17C13.3833 17 14.5625 16.5125 15.5375 15.5375C16.5125 14.5625 17 13.3833 17 12C17 10.6167 16.5125 9.4375 15.5375 8.4625C14.5625 7.4875 13.3833 7 12 7V17Z" })
    ]
  }
), ju = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 12.75 8.1875 13.4417 8.5625 14.075C8.9375 14.7083 9.45833 15.2 10.125 15.55C10.3917 15.6833 10.5792 15.8792 10.6875 16.1375C10.7958 16.3958 10.7917 16.6583 10.675 16.925C10.5583 17.1583 10.3833 17.3333 10.15 17.45C9.91667 17.5667 9.68333 17.5667 9.45 17.45C8.4 16.95 7.5625 16.2083 6.9375 15.225C6.3125 14.2417 6 13.1667 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.1833 6 14.2708 6.3125 15.2625 6.9375C16.2542 7.5625 16.9917 8.41667 17.475 9.5C17.575 9.73333 17.5708 9.96667 17.4625 10.2C17.3542 10.4333 17.1833 10.6 16.95 10.7C16.6833 10.8167 16.4167 10.8167 16.15 10.7C15.8833 10.5833 15.6833 10.3917 15.55 10.125C15.2 9.45833 14.7083 8.9375 14.075 8.5625C13.4417 8.1875 12.75 8 12 8ZM12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.1 4.69167 15.9 6.075 17.4C7.45833 18.9 9.19167 19.75 11.275 19.95C11.5583 19.9833 11.8042 20.1083 12.0125 20.325C12.2208 20.5417 12.3167 20.7917 12.3 21.075C12.2833 21.3583 12.1792 21.5917 11.9875 21.775C11.7958 21.9583 11.5583 22.0417 11.275 22.025C9.975 21.9417 8.7625 21.6167 7.6375 21.05C6.5125 20.4833 5.52917 19.7458 4.6875 18.8375C3.84583 17.9292 3.1875 16.8875 2.7125 15.7125C2.2375 14.5375 2 13.3 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C14.6167 2 16.8958 2.89167 18.8375 4.675C20.7792 6.45833 21.8417 8.65833 22.025 11.275C22.0583 11.5417 21.9792 11.7708 21.7875 11.9625C21.5958 12.1542 21.3583 12.2583 21.075 12.275C20.7917 12.2917 20.5375 12.2 20.3125 12C20.0875 11.8 19.9583 11.5583 19.925 11.275C19.675 9.275 18.8042 7.5625 17.3125 6.1375C15.8208 4.7125 14.05 4 12 4ZM19.55 21.5L16.25 18.225L15.5 20.5C15.4167 20.7333 15.2583 20.8458 15.025 20.8375C14.7917 20.8292 14.6333 20.7083 14.55 20.475L12.275 12.9C12.2083 12.7167 12.25 12.55 12.4 12.4C12.55 12.25 12.7167 12.2083 12.9 12.275L20.475 14.55C20.7083 14.6333 20.8292 14.7917 20.8375 15.025C20.8458 15.2583 20.7333 15.4167 20.5 15.5L18.225 16.25L21.525 19.55C21.8083 19.8333 21.95 20.1583 21.95 20.525C21.95 20.8917 21.8083 21.2167 21.525 21.5C21.2417 21.7833 20.9125 21.925 20.5375 21.925C20.1625 21.925 19.8333 21.7833 19.55 21.5Z" })
    ]
  }
), Yc = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 21C9.48333 21 7.35417 20.1292 5.6125 18.3875C3.87083 16.6458 3 14.5167 3 12C3 9.70002 3.75 7.70418 5.25 6.01252C6.75 4.32085 8.66667 3.33335 11 3.05002C11.2167 3.01668 11.4083 3.04585 11.575 3.13752C11.7417 3.22918 11.875 3.35002 11.975 3.50002C12.075 3.65002 12.1292 3.82502 12.1375 4.02502C12.1458 4.22502 12.0833 4.41668 11.95 4.60002C11.6667 5.03335 11.4542 5.49168 11.3125 5.97502C11.1708 6.45835 11.1 6.96668 11.1 7.50002C11.1 9.00002 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.0167 12.9 17.5292 12.825 18.0375 12.675C18.5458 12.525 19 12.3167 19.4 12.05C19.5833 11.9333 19.7708 11.8792 19.9625 11.8875C20.1542 11.8958 20.325 11.9417 20.475 12.025C20.6417 12.1083 20.7708 12.2333 20.8625 12.4C20.9542 12.5667 20.9833 12.7667 20.95 13C20.7167 15.3 19.7375 17.2083 18.0125 18.725C16.2875 20.2417 14.2833 21 12 21Z" })
    ]
  }
), Gu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M4 18C3.45 18 2.97917 17.8042 2.5875 17.4125C2.19583 17.0208 2 16.55 2 16V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H14.675L12.825 20.75C12.725 20.9 12.6042 21.0125 12.4625 21.0875C12.3208 21.1625 12.1667 21.2 12 21.2C11.8333 21.2 11.6792 21.1625 11.5375 21.0875C11.3958 21.0125 11.275 20.9 11.175 20.75L9.325 18H4ZM12 18.4L13.6 16H20V4H4V16H10.4L12 18.4Z" }),
      /* @__PURE__ */ n("path", { d: "M17 9H7C6.44772 9 6 8.55228 6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9Z" }),
      /* @__PURE__ */ n("path", { d: "M13 13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13Z" })
    ]
  }
), qu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16V12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12V16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM12 9C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" })
    ]
  }
), Zu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M16.45 13.6L8.35 5.49998C8.51666 5.36664 8.70833 5.28748 8.925 5.26248C9.14166 5.23748 9.35 5.29164 9.55 5.42498L17.675 11.15C17.9917 11.35 18.1458 11.6333 18.1375 12C18.1292 12.3666 17.9667 12.65 17.65 12.85L16.45 13.6ZM19.05 21.9L13 15.8L9.55 18.025C9.21666 18.2416 8.875 18.2541 8.525 18.0625C8.175 17.8708 8 17.575 8 17.175V10.8L2.1 4.89998C1.91666 4.71664 1.825 4.48331 1.825 4.19998C1.825 3.91664 1.91666 3.68331 2.1 3.49998C2.28333 3.31664 2.51666 3.22498 2.8 3.22498C3.08333 3.22498 3.31666 3.31664 3.5 3.49998L20.475 20.475C20.675 20.675 20.775 20.9125 20.775 21.1875C20.775 21.4625 20.675 21.7 20.475 21.9C20.275 22.0833 20.0375 22.1791 19.7625 22.1875C19.4875 22.1958 19.25 22.1 19.05 21.9Z" })
    ]
  }
), Wu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 21.4C9.78333 21.4 7.89583 20.6333 6.3375 19.1C4.77917 17.5667 4 15.7083 4 13.525C4 12.425 4.20833 11.4042 4.625 10.4625C5.04167 9.52083 5.61667 8.68333 6.35 7.95L10.95 3.425C11.1 3.29167 11.2667 3.1875 11.45 3.1125C11.6333 3.0375 11.8167 3 12 3C12.1833 3 12.3667 3.0375 12.55 3.1125C12.7333 3.1875 12.9 3.29167 13.05 3.425L17.65 7.95C18.3833 8.68333 18.9583 9.52083 19.375 10.4625C19.7917 11.4042 20 12.425 20 13.525C20 15.7083 19.2208 17.5667 17.6625 19.1C16.1042 20.6333 14.2167 21.4 12 21.4ZM12 19.4V5.2L7.75 9.4C7.16667 9.95 6.72917 10.575 6.4375 11.275C6.14583 11.975 6 12.725 6 13.525C6 15.1417 6.58333 16.525 7.75 17.675C8.91667 18.825 10.3333 19.4 12 19.4Z" })
    ]
  }
), Xu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M17.65 7.57498C18.45 8.37498 19.0417 9.23748 19.425 10.1625C19.8083 11.0875 20 12.0666 20 13.1C20 13.3833 19.9875 13.6583 19.9625 13.925C19.9375 14.1916 19.9 14.45 19.85 14.7C19.8 14.95 19.675 15.1458 19.475 15.2875C19.275 15.4291 19.0583 15.5 18.825 15.5C18.675 15.5 18.5292 15.475 18.3875 15.425C18.2458 15.375 18.1083 15.2833 17.975 15.15L12.575 9.74998C12.3917 9.56664 12.25 9.35414 12.15 9.11248C12.05 8.87081 12 8.61664 12 8.34998V4.79998L10.475 6.29998C10.2917 6.48331 10.0583 6.57081 9.77501 6.56248C9.49168 6.55414 9.25835 6.45831 9.07501 6.27498C8.87501 6.07498 8.77918 5.83748 8.78751 5.56248C8.79585 5.28748 8.90001 5.05831 9.10001 4.87498L10.95 3.04998C11.1 2.89998 11.2667 2.78748 11.45 2.71248C11.6333 2.63748 11.8167 2.59998 12 2.59998C12.1833 2.59998 12.3667 2.63748 12.55 2.71248C12.7333 2.78748 12.9 2.89998 13.05 3.04998L17.65 7.57498ZM12 21C9.78335 21 7.89585 20.2375 6.33751 18.7125C4.77918 17.1875 4.00001 15.3166 4.00001 13.1C4.00001 12.25 4.13335 11.4333 4.40001 10.65C4.66668 9.86664 5.06668 9.11664 5.60001 8.39998L2.10001 4.89998C1.91668 4.71664 1.82501 4.48331 1.82501 4.19998C1.82501 3.91664 1.91668 3.68331 2.10001 3.49998C2.28335 3.31664 2.51668 3.22498 2.80001 3.22498C3.08335 3.22498 3.31668 3.31664 3.50001 3.49998L20.5 20.5C20.6833 20.6833 20.775 20.9166 20.775 21.2C20.775 21.4833 20.6833 21.7166 20.5 21.9C20.3167 22.0833 20.0833 22.175 19.8 22.175C19.5167 22.175 19.2833 22.0833 19.1 21.9L16.7 19.5C16 20.0166 15.2375 20.3958 14.4125 20.6375C13.5875 20.8791 12.7833 21 12 21ZM12 19V14.825L7.00001 9.82498C6.65001 10.3583 6.39585 10.8958 6.23751 11.4375C6.07918 11.9791 6.00001 12.5333 6.00001 13.1C6.00001 14.7666 6.58335 16.1666 7.75001 17.3C8.91668 18.4333 10.3333 19 12 19Z" })
    ]
  }
), Yu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 21.4C9.78333 21.4 7.89583 20.6333 6.3375 19.1C4.77917 17.5667 4 15.7083 4 13.525C4 12.425 4.20833 11.4042 4.625 10.4625C5.04167 9.52083 5.61667 8.68333 6.35 7.95L10.95 3.425C11.1 3.29167 11.2667 3.1875 11.45 3.1125C11.6333 3.0375 11.8167 3 12 3C12.1833 3 12.3667 3.0375 12.55 3.1125C12.7333 3.1875 12.9 3.29167 13.05 3.425L17.65 7.95C18.3833 8.68333 18.9583 9.52083 19.375 10.4625C19.7917 11.4042 20 12.425 20 13.525C20 15.7083 19.2208 17.5667 17.6625 19.1C16.1042 20.6333 14.2167 21.4 12 21.4ZM12 19.4V5.2L7.75 9.4C7.16667 9.95 6.72917 10.575 6.4375 11.275C6.14583 11.975 6 12.725 6 13.525C6 15.1417 6.58333 16.525 7.75 17.675C8.91667 18.825 10.3333 19.4 12 19.4Z" }),
      /* @__PURE__ */ n("path", { d: "M18 5H19V6C19 6.28333 19.0958 6.52083 19.2875 6.7125C19.4792 6.90417 19.7167 7 20 7C20.2833 7 20.5208 6.90417 20.7125 6.7125C20.9042 6.52083 21 6.28333 21 6V5H22C22.2833 5 22.5208 4.90417 22.7125 4.7125C22.9042 4.52083 23 4.28333 23 4C23 3.71667 22.9042 3.47917 22.7125 3.2875C22.5208 3.09583 22.2833 3 22 3H21V2C21 1.71667 20.9042 1.47917 20.7125 1.2875C20.5208 1.09583 20.2833 1 20 1C19.7167 1 19.4792 1.09583 19.2875 1.2875C19.0958 1.47917 19 1.71667 19 2V3H18C17.7167 3 17.4792 3.09583 17.2875 3.2875C17.0958 3.47917 17 3.71667 17 4C17 4.28333 17.0958 4.52083 17.2875 4.7125C17.4792 4.90417 17.7167 5 18 5Z" })
    ]
  }
), Ku = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 21.4C9.78333 21.4 7.89583 20.6333 6.3375 19.1C4.77917 17.5667 4 15.7083 4 13.525C4 12.425 4.20833 11.4042 4.625 10.4625C5.04167 9.52083 5.61667 8.68333 6.35 7.95L10.95 3.425C11.1 3.29167 11.2667 3.1875 11.45 3.1125C11.6333 3.0375 11.8167 3 12 3C12.1833 3 12.3667 3.0375 12.55 3.1125C12.7333 3.1875 12.9 3.29167 13.05 3.425L17.65 7.95C18.3833 8.68333 18.9583 9.52083 19.375 10.4625C19.7917 11.4042 20 12.425 20 13.525C20 15.7083 19.2208 17.5667 17.6625 19.1C16.1042 20.6333 14.2167 21.4 12 21.4ZM12 19.4V5.2L7.75 9.4C7.16667 9.95 6.72917 10.575 6.4375 11.275C6.14583 11.975 6 12.725 6 13.525C6 15.1417 6.58333 16.525 7.75 17.675C8.91667 18.825 10.3333 19.4 12 19.4Z" }),
      /* @__PURE__ */ n("path", { d: "M18 2.40002C17.7167 2.40002 17.4792 2.49586 17.2875 2.68752C17.0958 2.87919 17 3.11669 17 3.40002C17 3.68336 17.0958 3.92086 17.2875 4.11252C17.4792 4.30419 17.7167 4.40002 18 4.40002H22C22.2833 4.40002 22.5208 4.30419 22.7125 4.11252C22.9042 3.92086 23 3.68336 23 3.40002C23 3.11669 22.9042 2.87919 22.7125 2.68752C22.5208 2.49586 22.2833 2.40002 22 2.40002H18Z" })
    ]
  }
), Ju = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M7.1 11.35C7.33334 10.8833 7.575 10.4333 7.825 9.99996C8.075 9.56663 8.35 9.13329 8.65 8.69996L7.25 8.42496L5.15 10.525L7.1 11.35ZM19.15 4.47496C17.9833 4.50829 16.7375 4.84996 15.4125 5.49996C14.0875 6.14996 12.8833 7.01663 11.8 8.09996C11.1 8.79996 10.475 9.54996 9.925 10.35C9.375 11.15 8.96667 11.9 8.7 12.6L11.55 15.425C12.25 15.1583 13 14.75 13.8 14.2C14.6 13.65 15.35 13.025 16.05 12.325C17.1333 11.2416 18 10.0416 18.65 8.72496C19.3 7.40829 19.6417 6.16663 19.675 4.99996C19.675 4.93329 19.6625 4.86663 19.6375 4.79996C19.6125 4.73329 19.575 4.67496 19.525 4.62496C19.475 4.57496 19.4167 4.53746 19.35 4.51246C19.2833 4.48746 19.2167 4.47496 19.15 4.47496ZM13.65 10.475C13.2667 10.0916 13.075 9.62079 13.075 9.06246C13.075 8.50413 13.2667 8.03329 13.65 7.64996C14.0333 7.26663 14.5083 7.07496 15.075 7.07496C15.6417 7.07496 16.1167 7.26663 16.5 7.64996C16.8833 8.03329 17.075 8.50413 17.075 9.06246C17.075 9.62079 16.8833 10.0916 16.5 10.475C16.1167 10.8583 15.6417 11.05 15.075 11.05C14.5083 11.05 14.0333 10.8583 13.65 10.475ZM12.8 17.025L13.625 19L15.725 16.9L15.45 15.5C15.0167 15.8 14.5833 16.0708 14.15 16.3125C13.7167 16.5541 13.2667 16.7916 12.8 17.025ZM21.575 3.67496C21.7083 5.50829 21.4083 7.29579 20.675 9.03746C19.9417 10.7791 18.7833 12.4416 17.2 14.025L17.7 16.5C17.7667 16.8333 17.75 17.1583 17.65 17.475C17.55 17.7916 17.3833 18.0666 17.15 18.3L14 21.45C13.75 21.7 13.45 21.7958 13.1 21.7375C12.75 21.6791 12.5083 21.4833 12.375 21.15L10.85 17.575L6.575 13.3L3 11.775C2.66667 11.6416 2.46667 11.4 2.4 11.05C2.33334 10.7 2.425 10.4 2.675 10.15L5.825 6.99996C6.05834 6.76663 6.3375 6.59996 6.6625 6.49996C6.9875 6.39996 7.31667 6.38329 7.65 6.44996L10.125 6.94996C11.7083 5.36663 13.3708 4.20829 15.1125 3.47496C16.8542 2.74163 18.6417 2.44163 20.475 2.57496C20.6083 2.59163 20.7417 2.62913 20.875 2.68746C21.0083 2.74579 21.125 2.82496 21.225 2.92496C21.325 3.02496 21.4042 3.14163 21.4625 3.27496C21.5208 3.40829 21.5583 3.54163 21.575 3.67496ZM3.925 15.975C4.50834 15.3916 5.22084 15.0958 6.0625 15.0875C6.90417 15.0791 7.61667 15.3666 8.2 15.95C8.78334 16.5333 9.07084 17.2458 9.0625 18.0875C9.05417 18.9291 8.75834 19.6416 8.175 20.225C7.375 21.025 6.42917 21.5 5.3375 21.65C4.24584 21.8 3.15 21.95 2.05 22.1C2.2 21 2.35 19.9041 2.5 18.8125C2.65 17.7208 3.125 16.775 3.925 15.975ZM5.35 17.375C5.06667 17.6583 4.87084 18 4.7625 18.4C4.65417 18.8 4.56667 19.2083 4.5 19.625C4.91667 19.5583 5.325 19.475 5.725 19.375C6.125 19.275 6.46667 19.0833 6.75 18.8C6.95 18.6 7.05834 18.3583 7.075 18.075C7.09167 17.7916 7 17.55 6.8 17.35C6.6 17.15 6.35834 17.0541 6.075 17.0625C5.79167 17.0708 5.55 17.175 5.35 17.375Z" })
    ]
  }
), Qu = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 13.725C11.8333 13.725 11.6708 13.7042 11.5125 13.6625C11.3542 13.6209 11.2 13.5584 11.05 13.475L2.6 8.87502C2.41667 8.77502 2.2875 8.65002 2.2125 8.50002C2.1375 8.35002 2.1 8.18336 2.1 8.00002C2.1 7.81669 2.1375 7.65002 2.2125 7.50002C2.2875 7.35002 2.41667 7.22502 2.6 7.12502L11.05 2.52502C11.2 2.44169 11.3542 2.37919 11.5125 2.33752C11.6708 2.29586 11.8333 2.27502 12 2.27502C12.1667 2.27502 12.3292 2.29586 12.4875 2.33752C12.6458 2.37919 12.8 2.44169 12.95 2.52502L21.4 7.12502C21.5833 7.22502 21.7125 7.35002 21.7875 7.50002C21.8625 7.65002 21.9 7.81669 21.9 8.00002C21.9 8.18336 21.8625 8.35002 21.7875 8.50002C21.7125 8.65002 21.5833 8.77502 21.4 8.87502L12.95 13.475C12.8 13.5584 12.6458 13.6209 12.4875 13.6625C12.3292 13.7042 12.1667 13.725 12 13.725ZM12 15.725L19.85 11.45C19.8833 11.4334 20.0417 11.3917 20.325 11.325C20.6083 11.325 20.8458 11.4209 21.0375 11.6125C21.2292 11.8042 21.325 12.0417 21.325 12.325C21.325 12.5084 21.2833 12.675 21.2 12.825C21.1167 12.975 20.9833 13.1 20.8 13.2L12.95 17.475C12.8 17.5584 12.6458 17.6209 12.4875 17.6625C12.3292 17.7042 12.1667 17.725 12 17.725C11.8333 17.725 11.6708 17.7042 11.5125 17.6625C11.3542 17.6209 11.2 17.5584 11.05 17.475L3.2 13.2C3.01667 13.1 2.88333 12.975 2.8 12.825C2.71667 12.675 2.675 12.5084 2.675 12.325C2.675 12.0417 2.77083 11.8042 2.9625 11.6125C3.15417 11.4209 3.39167 11.325 3.675 11.325C3.75833 11.325 3.8375 11.3375 3.9125 11.3625C3.9875 11.3875 4.06667 11.4167 4.15 11.45L12 15.725ZM12 19.725L19.85 15.45C19.8833 15.4334 20.0417 15.3917 20.325 15.325C20.6083 15.325 20.8458 15.4209 21.0375 15.6125C21.2292 15.8042 21.325 16.0417 21.325 16.325C21.325 16.5084 21.2833 16.675 21.2 16.825C21.1167 16.975 20.9833 17.1 20.8 17.2L12.95 21.475C12.8 21.5584 12.6458 21.6209 12.4875 21.6625C12.3292 21.7042 12.1667 21.725 12 21.725C11.8333 21.725 11.6708 21.7042 11.5125 21.6625C11.3542 21.6209 11.2 21.5584 11.05 21.475L3.2 17.2C3.01667 17.1 2.88333 16.975 2.8 16.825C2.71667 16.675 2.675 16.5084 2.675 16.325C2.675 16.0417 2.77083 15.8042 2.9625 15.6125C3.15417 15.4209 3.39167 15.325 3.675 15.325C3.75833 15.325 3.8375 15.3375 3.9125 15.3625C3.9875 15.3875 4.06667 15.4167 4.15 15.45L12 19.725Z" })
    ]
  }
), e8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M16 8.4L7.1 17.3C6.91667 17.4833 6.68334 17.575 6.4 17.575C6.11667 17.575 5.88334 17.4833 5.7 17.3C5.51667 17.1167 5.425 16.8833 5.425 16.6C5.425 16.3167 5.51667 16.0833 5.7 15.9L14.6 7H7C6.71667 7 6.47917 6.90417 6.2875 6.7125C6.09584 6.52083 6 6.28333 6 6C6 5.71667 6.09584 5.47917 6.2875 5.2875C6.47917 5.09583 6.71667 5 7 5H17C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6V16C18 16.2833 17.9042 16.5208 17.7125 16.7125C17.5208 16.9042 17.2833 17 17 17C16.7167 17 16.4792 16.9042 16.2875 16.7125C16.0958 16.5208 16 16.2833 16 16V8.4Z" })
    ]
  }
), t8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M4 19C3.45 19 2.97917 18.8042 2.5875 18.4125C2.19583 18.0208 2 17.55 2 17V7C2 6.45 2.19583 5.97917 2.5875 5.5875C2.97917 5.19583 3.45 5 4 5H20C20.55 5 21.0208 5.19583 21.4125 5.5875C21.8042 5.97917 22 6.45 22 7V17C22 17.55 21.8042 18.0208 21.4125 18.4125C21.0208 18.8042 20.55 19 20 19H4ZM9 16H15C15.2833 16 15.5208 15.9042 15.7125 15.7125C15.9042 15.5208 16 15.2833 16 15C16 14.7167 15.9042 14.4792 15.7125 14.2875C15.5208 14.0958 15.2833 14 15 14H9C8.71667 14 8.47917 14.0958 8.2875 14.2875C8.09583 14.4792 8 14.7167 8 15C8 15.2833 8.09583 15.5208 8.2875 15.7125C8.47917 15.9042 8.71667 16 9 16ZM6 10C6.28333 10 6.52083 9.90417 6.7125 9.7125C6.90417 9.52083 7 9.28333 7 9C7 8.71667 6.90417 8.47917 6.7125 8.2875C6.52083 8.09583 6.28333 8 6 8C5.71667 8 5.47917 8.09583 5.2875 8.2875C5.09583 8.47917 5 8.71667 5 9C5 9.28333 5.09583 9.52083 5.2875 9.7125C5.47917 9.90417 5.71667 10 6 10ZM9 10C9.28333 10 9.52083 9.90417 9.7125 9.7125C9.90417 9.52083 10 9.28333 10 9C10 8.71667 9.90417 8.47917 9.7125 8.2875C9.52083 8.09583 9.28333 8 9 8C8.71667 8 8.47917 8.09583 8.2875 8.2875C8.09583 8.47917 8 8.71667 8 9C8 9.28333 8.09583 9.52083 8.2875 9.7125C8.47917 9.90417 8.71667 10 9 10ZM12 10C12.2833 10 12.5208 9.90417 12.7125 9.7125C12.9042 9.52083 13 9.28333 13 9C13 8.71667 12.9042 8.47917 12.7125 8.2875C12.5208 8.09583 12.2833 8 12 8C11.7167 8 11.4792 8.09583 11.2875 8.2875C11.0958 8.47917 11 8.71667 11 9C11 9.28333 11.0958 9.52083 11.2875 9.7125C11.4792 9.90417 11.7167 10 12 10ZM15 10C15.2833 10 15.5208 9.90417 15.7125 9.7125C15.9042 9.52083 16 9.28333 16 9C16 8.71667 15.9042 8.47917 15.7125 8.2875C15.5208 8.09583 15.2833 8 15 8C14.7167 8 14.4792 8.09583 14.2875 8.2875C14.0958 8.47917 14 8.71667 14 9C14 9.28333 14.0958 9.52083 14.2875 9.7125C14.4792 9.90417 14.7167 10 15 10ZM18 10C18.2833 10 18.5208 9.90417 18.7125 9.7125C18.9042 9.52083 19 9.28333 19 9C19 8.71667 18.9042 8.47917 18.7125 8.2875C18.5208 8.09583 18.2833 8 18 8C17.7167 8 17.4792 8.09583 17.2875 8.2875C17.0958 8.47917 17 8.71667 17 9C17 9.28333 17.0958 9.52083 17.2875 9.7125C17.4792 9.90417 17.7167 10 18 10ZM6 13C6.28333 13 6.52083 12.9042 6.7125 12.7125C6.90417 12.5208 7 12.2833 7 12C7 11.7167 6.90417 11.4792 6.7125 11.2875C6.52083 11.0958 6.28333 11 6 11C5.71667 11 5.47917 11.0958 5.2875 11.2875C5.09583 11.4792 5 11.7167 5 12C5 12.2833 5.09583 12.5208 5.2875 12.7125C5.47917 12.9042 5.71667 13 6 13ZM9 13C9.28333 13 9.52083 12.9042 9.7125 12.7125C9.90417 12.5208 10 12.2833 10 12C10 11.7167 9.90417 11.4792 9.7125 11.2875C9.52083 11.0958 9.28333 11 9 11C8.71667 11 8.47917 11.0958 8.2875 11.2875C8.09583 11.4792 8 11.7167 8 12C8 12.2833 8.09583 12.5208 8.2875 12.7125C8.47917 12.9042 8.71667 13 9 13ZM12 13C12.2833 13 12.5208 12.9042 12.7125 12.7125C12.9042 12.5208 13 12.2833 13 12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12C11 12.2833 11.0958 12.5208 11.2875 12.7125C11.4792 12.9042 11.7167 13 12 13ZM15 13C15.2833 13 15.5208 12.9042 15.7125 12.7125C15.9042 12.5208 16 12.2833 16 12C16 11.7167 15.9042 11.4792 15.7125 11.2875C15.5208 11.0958 15.2833 11 15 11C14.7167 11 14.4792 11.0958 14.2875 11.2875C14.0958 11.4792 14 11.7167 14 12C14 12.2833 14.0958 12.5208 14.2875 12.7125C14.4792 12.9042 14.7167 13 15 13ZM18 13C18.2833 13 18.5208 12.9042 18.7125 12.7125C18.9042 12.5208 19 12.2833 19 12C19 11.7167 18.9042 11.4792 18.7125 11.2875C18.5208 11.0958 18.2833 11 18 11C17.7167 11 17.4792 11.0958 17.2875 11.2875C17.0958 11.4792 17 11.7167 17 12C17 12.2833 17.0958 12.5208 17.2875 12.7125C17.4792 12.9042 17.7167 13 18 13Z" })
    ]
  }
), Kc = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M7.825 13L12.725 17.9C12.925 18.1 13.0208 18.3334 13.0125 18.6C13.0042 18.8667 12.9 19.1 12.7 19.3C12.5 19.4834 12.2667 19.5792 12 19.5875C11.7333 19.5959 11.5 19.5 11.3 19.3L4.7 12.7C4.6 12.6 4.52917 12.4917 4.4875 12.375C4.44584 12.2584 4.425 12.1334 4.425 12C4.425 11.8667 4.44584 11.7417 4.4875 11.625C4.52917 11.5084 4.6 11.4 4.7 11.3L11.3 4.70005C11.4833 4.51672 11.7125 4.42505 11.9875 4.42505C12.2625 4.42505 12.5 4.51672 12.7 4.70005C12.9 4.90005 13 5.13755 13 5.41255C13 5.68755 12.9 5.92505 12.7 6.12505L7.825 11H19C19.2833 11 19.5208 11.0959 19.7125 11.2875C19.9042 11.4792 20 11.7167 20 12C20 12.2834 19.9042 12.5209 19.7125 12.7125C19.5208 12.9042 19.2833 13 19 13H7.825Z" })
    ]
  }
), r8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("g", { "clip-path": "url(#clip0_758_951)", children: /* @__PURE__ */ n("path", { d: "M12.025 19C11.0917 19 10.2 18.825 9.35 18.475C8.5 18.125 7.74167 17.6167 7.075 16.95C6.40833 16.2833 5.9 15.525 5.55 14.675C5.2 13.825 5.025 12.9333 5.025 12C5.025 11.15 5.16667 10.3375 5.45 9.5625C5.73333 8.7875 6.15 8.08333 6.7 7.45C6.91667 7.21667 7.18333 7.1375 7.5 7.2125C7.81667 7.2875 8.04167 7.49167 8.175 7.825C8.525 8.74167 8.9625 9.60833 9.4875 10.425C10.0125 11.2417 10.625 12 11.325 12.7C12.025 13.4 12.7833 14.0125 13.6 14.5375C14.4167 15.0625 15.2833 15.5 16.2 15.85C16.5333 15.9833 16.7375 16.2083 16.8125 16.525C16.8875 16.8417 16.8083 17.1083 16.575 17.325C15.9417 17.875 15.2375 18.2917 14.4625 18.575C13.6875 18.8583 12.875 19 12.025 19ZM17.6 14.2C17.3333 14.1167 17.1417 13.9458 17.025 13.6875C16.9083 13.4292 16.875 13.1583 16.925 12.875C17.075 12.075 17.025 11.2875 16.775 10.5125C16.525 9.7375 16.1083 9.05833 15.525 8.475C14.9417 7.89167 14.2708 7.47917 13.5125 7.2375C12.7542 6.99583 11.9833 6.94167 11.2 7.075C10.9167 7.125 10.65 7.09167 10.4 6.975C10.15 6.85833 9.975 6.66667 9.875 6.4C9.775 6.13333 9.7875 5.875 9.9125 5.625C10.0375 5.375 10.2333 5.21667 10.5 5.15C11.65 4.9 12.8 4.9375 13.95 5.2625C15.1 5.5875 16.1083 6.18333 16.975 7.05C17.825 7.9 18.4167 8.9 18.75 10.05C19.0833 11.2 19.125 12.35 18.875 13.5C18.8083 13.7833 18.65 13.9917 18.4 14.125C18.15 14.2583 17.8833 14.2833 17.6 14.2ZM12 3C11.7167 3 11.4792 2.90417 11.2875 2.7125C11.0958 2.52083 11 2.28333 11 2V1C11 0.716667 11.0958 0.479167 11.2875 0.2875C11.4792 0.0958333 11.7167 0 12 0C12.2833 0 12.5208 0.0958333 12.7125 0.2875C12.9042 0.479167 13 0.716667 13 1V2C13 2.28333 12.9042 2.52083 12.7125 2.7125C12.5208 2.90417 12.2833 3 12 3ZM12 24C11.7167 24 11.4792 23.9042 11.2875 23.7125C11.0958 23.5208 11 23.2833 11 23V22C11 21.7167 11.0958 21.4792 11.2875 21.2875C11.4792 21.0958 11.7167 21 12 21C12.2833 21 12.5208 21.0958 12.7125 21.2875C12.9042 21.4792 13 21.7167 13 22V23C13 23.2833 12.9042 23.5208 12.7125 23.7125C12.5208 23.9042 12.2833 24 12 24ZM18.375 5.65C18.175 5.45 18.075 5.2125 18.075 4.9375C18.075 4.6625 18.175 4.425 18.375 4.225L19.075 3.525C19.2583 3.34167 19.4875 3.25 19.7625 3.25C20.0375 3.25 20.275 3.34167 20.475 3.525C20.675 3.725 20.775 3.9625 20.775 4.2375C20.775 4.5125 20.675 4.75 20.475 4.95L19.775 5.65C19.575 5.85 19.3417 5.95 19.075 5.95C18.8083 5.95 18.575 5.85 18.375 5.65ZM3.525 20.475C3.325 20.275 3.225 20.0375 3.225 19.7625C3.225 19.4875 3.325 19.25 3.525 19.05L4.225 18.35C4.425 18.15 4.65833 18.05 4.925 18.05C5.19167 18.05 5.425 18.15 5.625 18.35C5.825 18.55 5.925 18.7875 5.925 19.0625C5.925 19.3375 5.825 19.575 5.625 19.775L4.925 20.475C4.74167 20.6583 4.5125 20.75 4.2375 20.75C3.9625 20.75 3.725 20.6583 3.525 20.475ZM22 13C21.7167 13 21.4792 12.9042 21.2875 12.7125C21.0958 12.5208 21 12.2833 21 12C21 11.7167 21.0958 11.4792 21.2875 11.2875C21.4792 11.0958 21.7167 11 22 11H23C23.2833 11 23.5208 11.0958 23.7125 11.2875C23.9042 11.4792 24 11.7167 24 12C24 12.2833 23.9042 12.5208 23.7125 12.7125C23.5208 12.9042 23.2833 13 23 13H22ZM1 13C0.716667 13 0.479167 12.9042 0.2875 12.7125C0.0958333 12.5208 0 12.2833 0 12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11H2C2.28333 11 2.52083 11.0958 2.7125 11.2875C2.90417 11.4792 3 11.7167 3 12C3 12.2833 2.90417 12.5208 2.7125 12.7125C2.52083 12.9042 2.28333 13 2 13H1ZM20.475 20.475C20.275 20.675 20.0375 20.775 19.7625 20.775C19.4875 20.775 19.25 20.675 19.05 20.475L18.35 19.775C18.15 19.575 18.05 19.3417 18.05 19.075C18.05 18.8083 18.15 18.575 18.35 18.375C18.55 18.175 18.7875 18.075 19.0625 18.075C19.3375 18.075 19.575 18.175 19.775 18.375L20.475 19.075C20.6583 19.2583 20.75 19.4875 20.75 19.7625C20.75 20.0375 20.6583 20.275 20.475 20.475ZM5.65 5.625C5.45 5.825 5.2125 5.925 4.9375 5.925C4.6625 5.925 4.425 5.825 4.225 5.625L3.525 4.925C3.34167 4.74167 3.25 4.5125 3.25 4.2375C3.25 3.9625 3.34167 3.725 3.525 3.525C3.725 3.325 3.9625 3.225 4.2375 3.225C4.5125 3.225 4.75 3.325 4.95 3.525L5.65 4.225C5.85 4.425 5.95 4.65833 5.95 4.925C5.95 5.19167 5.85 5.425 5.65 5.625Z" }) }),
      /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ n("clipPath", { id: "clip0_758_951", children: /* @__PURE__ */ n("rect", { width: "24", height: "24" }) }) })
    ]
  }
), o8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM2 13C1.71667 13 1.47917 12.9042 1.2875 12.7125C1.09583 12.5208 1 12.2833 1 12C1 11.7167 1.09583 11.4792 1.2875 11.2875C1.47917 11.0958 1.71667 11 2 11H4C4.28333 11 4.52083 11.0958 4.7125 11.2875C4.90417 11.4792 5 11.7167 5 12C5 12.2833 4.90417 12.5208 4.7125 12.7125C4.52083 12.9042 4.28333 13 4 13H2ZM20 13C19.7167 13 19.4792 12.9042 19.2875 12.7125C19.0958 12.5208 19 12.2833 19 12C19 11.7167 19.0958 11.4792 19.2875 11.2875C19.4792 11.0958 19.7167 11 20 11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20ZM12 5C11.7167 5 11.4792 4.90417 11.2875 4.7125C11.0958 4.52083 11 4.28333 11 4V2C11 1.71667 11.0958 1.47917 11.2875 1.2875C11.4792 1.09583 11.7167 1 12 1C12.2833 1 12.5208 1.09583 12.7125 1.2875C12.9042 1.47917 13 1.71667 13 2V4C13 4.28333 12.9042 4.52083 12.7125 4.7125C12.5208 4.90417 12.2833 5 12 5ZM12 23C11.7167 23 11.4792 22.9042 11.2875 22.7125C11.0958 22.5208 11 22.2833 11 22V20C11 19.7167 11.0958 19.4792 11.2875 19.2875C11.4792 19.0958 11.7167 19 12 19C12.2833 19 12.5208 19.0958 12.7125 19.2875C12.9042 19.4792 13 19.7167 13 20V22C13 22.2833 12.9042 22.5208 12.7125 22.7125C12.5208 22.9042 12.2833 23 12 23ZM5.65 7.05L4.575 6C4.375 5.81667 4.27917 5.58333 4.2875 5.3C4.29583 5.01667 4.39167 4.775 4.575 4.575C4.775 4.375 5.01667 4.275 5.3 4.275C5.58333 4.275 5.81667 4.375 6 4.575L7.05 5.65C7.23333 5.85 7.325 6.08333 7.325 6.35C7.325 6.61667 7.23333 6.85 7.05 7.05C6.86667 7.25 6.6375 7.34583 6.3625 7.3375C6.0875 7.32917 5.85 7.23333 5.65 7.05ZM18 19.425L16.95 18.35C16.7667 18.15 16.675 17.9125 16.675 17.6375C16.675 17.3625 16.7667 17.1333 16.95 16.95C17.1333 16.75 17.3625 16.6542 17.6375 16.6625C17.9125 16.6708 18.15 16.7667 18.35 16.95L19.425 18C19.625 18.1833 19.7208 18.4167 19.7125 18.7C19.7042 18.9833 19.6083 19.225 19.425 19.425C19.225 19.625 18.9833 19.725 18.7 19.725C18.4167 19.725 18.1833 19.625 18 19.425ZM16.95 7.05C16.75 6.86667 16.6542 6.6375 16.6625 6.3625C16.6708 6.0875 16.7667 5.85 16.95 5.65L18 4.575C18.1833 4.375 18.4167 4.27917 18.7 4.2875C18.9833 4.29583 19.225 4.39167 19.425 4.575C19.625 4.775 19.725 5.01667 19.725 5.3C19.725 5.58333 19.625 5.81667 19.425 6L18.35 7.05C18.15 7.23333 17.9167 7.325 17.65 7.325C17.3833 7.325 17.15 7.23333 16.95 7.05ZM4.575 19.425C4.375 19.225 4.275 18.9833 4.275 18.7C4.275 18.4167 4.375 18.1833 4.575 18L5.65 16.95C5.85 16.7667 6.0875 16.675 6.3625 16.675C6.6375 16.675 6.86667 16.7667 7.05 16.95C7.25 17.1333 7.34583 17.3625 7.3375 17.6375C7.32917 17.9125 7.23333 18.15 7.05 18.35L6 19.425C5.81667 19.625 5.58333 19.7208 5.3 19.7125C5.01667 19.7042 4.775 19.6083 4.575 19.425Z" })
    ]
  }
), i8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M14.5 2.75C11.639 2.75 9.25 5.139 9.25 8V9.75H6.5C6.4337 9.75 6.37011 9.77634 6.32322 9.82322C6.27634 9.87011 6.25 9.9337 6.25 10V14C6.25 14.138 6.362 14.25 6.5 14.25H9.25V21C9.25 21.138 9.362 21.25 9.5 21.25H13.5C13.5663 21.25 13.6299 21.2237 13.6768 21.1768C13.7237 21.1299 13.75 21.0663 13.75 21V14.25H16.5C16.5557 14.2498 16.6098 14.2311 16.6537 14.1966C16.6975 14.1622 16.7286 14.1141 16.742 14.06L17.742 10.06C17.7511 10.0232 17.7517 9.98487 17.7438 9.94783C17.7359 9.91078 17.7197 9.87602 17.6964 9.84616C17.6731 9.8163 17.6433 9.79213 17.6093 9.77547C17.5752 9.75882 17.5379 9.7501 17.5 9.75H13.75V8C13.7526 7.80189 13.8324 7.61263 13.9725 7.47253C14.1126 7.33244 14.3019 7.25259 14.5 7.25H17.5C17.5663 7.25 17.6299 7.22366 17.6768 7.17678C17.7237 7.12989 17.75 7.0663 17.75 7V3C17.75 2.9337 17.7237 2.87011 17.6768 2.82322C17.6299 2.77634 17.5663 2.75 17.5 2.75H14.5Z" })
    ]
  }
), n8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM11 19.95V18C10.45 18 9.97917 17.8042 9.5875 17.4125C9.19583 17.0208 9 16.55 9 16V15L4.2 10.2C4.15 10.5 4.10417 10.8 4.0625 11.1C4.02083 11.4 4 11.7 4 12C4 14.0167 4.6625 15.7833 5.9875 17.3C7.3125 18.8167 8.98333 19.7 11 19.95ZM17.9 17.4C18.5833 16.65 19.1042 15.8125 19.4625 14.8875C19.8208 13.9625 20 13 20 12C20 10.3667 19.5458 8.875 18.6375 7.525C17.7292 6.175 16.5167 5.2 15 4.6V5C15 5.55 14.8042 6.02083 14.4125 6.4125C14.0208 6.80417 13.55 7 13 7H11V9C11 9.28333 10.9042 9.52083 10.7125 9.7125C10.5208 9.90417 10.2833 10 10 10H8V12H14C14.2833 12 14.5208 12.0958 14.7125 12.2875C14.9042 12.4792 15 12.7167 15 13V16H16C16.4333 16 16.825 16.1292 17.175 16.3875C17.525 16.6458 17.7667 16.9833 17.9 17.4Z" })
    ]
  }
), a8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M8.44433 3L8.56347 3.00684C8.83884 3.03982 9.09031 3.18643 9.25488 3.41406L13.4131 9.17188L19.293 3.29297C19.6835 2.90244 20.3165 2.90244 20.707 3.29297C21.0975 3.68349 21.0975 4.31651 20.707 4.70703L14.5996 10.8135L20.8105 19.4141C21.0303 19.7184 21.0614 20.1208 20.8906 20.4551C20.7197 20.7894 20.3755 21 20 21H15.5557C15.2347 21 14.9331 20.846 14.7451 20.5859L10.5859 14.8271L4.70703 20.707C4.3165 21.0976 3.68349 21.0976 3.29296 20.707C2.90244 20.3165 2.90244 19.6835 3.29296 19.293L9.39941 13.1855L3.18945 4.58594C2.96965 4.28158 2.93856 3.87922 3.10937 3.54492C3.28033 3.21058 3.62447 3 3.99999 3H8.44433ZM11.5205 12.7051H11.5195L16.0674 19H18.0439L12.4795 11.2949V11.2939L7.93261 5H5.95605L11.5205 12.7051Z" })
    ]
  }
), s8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 4C12.855 4 13.732 4.022 14.582 4.058L15.586 4.106L16.547 4.163L17.447 4.224L18.269 4.288C19.1612 4.35589 20.0008 4.73643 20.64 5.3626C21.2791 5.98877 21.6768 6.8204 21.763 7.711L21.803 8.136L21.878 9.046C21.948 9.989 22 11.017 22 12C22 12.983 21.948 14.011 21.878 14.954L21.803 15.864L21.763 16.289C21.6768 17.1798 21.2789 18.0115 20.6396 18.6377C20.0002 19.2639 19.1604 19.6443 18.268 19.712L17.448 19.775L16.548 19.837L15.586 19.894L14.582 19.942C13.7218 19.9793 12.861 19.9986 12 20C11.139 19.9986 10.2782 19.9793 9.418 19.942L8.414 19.894L7.453 19.837L6.553 19.775L5.731 19.712C4.83881 19.6441 3.9992 19.2636 3.36004 18.6374C2.72089 18.0112 2.32319 17.1796 2.237 16.289L2.197 15.864L2.122 14.954C2.04583 13.9711 2.00514 12.9858 2 12C2 11.017 2.052 9.989 2.122 9.046L2.197 8.136L2.237 7.711C2.32316 6.82055 2.72071 5.98905 3.35966 5.36291C3.99861 4.73676 4.83799 4.35612 5.73 4.288L6.551 4.224L7.451 4.163L8.413 4.106L9.417 4.058C10.2775 4.02073 11.1387 4.00139 12 4ZM10 9.575V14.425C10 14.887 10.5 15.175 10.9 14.945L15.1 12.52C15.1914 12.4674 15.2673 12.3916 15.3201 12.3003C15.3729 12.209 15.4007 12.1055 15.4007 12C15.4007 11.8945 15.3729 11.791 15.3201 11.6997C15.2673 11.6084 15.1914 11.5326 15.1 11.48L10.9 9.056C10.8088 9.00332 10.7053 8.9756 10.5999 8.97562C10.4945 8.97563 10.3911 9.00339 10.2998 9.0561C10.2086 9.1088 10.1329 9.1846 10.0802 9.27587C10.0276 9.36713 9.99993 9.47065 10 9.576V9.575Z"
        }
      )
    ]
  }
), l8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M11.95 1H12.05C13.877 1 15.316 1 16.47 1.105C17.648 1.211 18.626 1.433 19.5 1.938C20.564 2.55235 21.4476 3.43595 22.062 4.5C22.567 5.374 22.789 6.352 22.895 7.53C23 8.684 23 10.123 23 11.95V12.05C23 13.877 23 15.316 22.895 16.47C22.789 17.648 22.567 18.626 22.062 19.5C21.4476 20.564 20.564 21.4476 19.5 22.062C18.626 22.567 17.648 22.789 16.47 22.895C15.316 23 13.877 23 12.05 23H11.95C10.123 23 8.684 23 7.53 22.895C6.352 22.789 5.374 22.567 4.5 22.062C3.43595 21.4476 2.55235 20.564 1.938 19.5C1.433 18.626 1.211 17.648 1.105 16.47C1 15.316 1 13.877 1 12.05V11.95C1 10.123 1 8.684 1.105 7.53C1.211 6.352 1.433 5.374 1.938 4.5C2.55235 3.43595 3.43595 2.55235 4.5 1.938C5.374 1.433 6.352 1.211 7.53 1.105C8.684 1 10.123 1 11.95 1ZM7.71 3.096C6.671 3.191 6.019 3.37 5.5 3.67C4.73997 4.10882 4.10882 4.73997 3.67 5.5C3.37 6.019 3.19 6.671 3.096 7.71C3.001 8.764 3 10.112 3 12C3 13.888 3.001 15.236 3.096 16.29C3.191 17.329 3.37 17.981 3.67 18.5C4.10882 19.26 4.73997 19.8912 5.5 20.33C6.019 20.63 6.671 20.81 7.71 20.904C8.764 20.999 10.112 21 12 21C13.888 21 15.236 20.999 16.29 20.904C17.329 20.809 17.981 20.63 18.5 20.33C19.26 19.8912 19.8912 19.26 20.33 18.5C20.63 17.981 20.81 17.329 20.904 16.29C20.999 15.237 21 13.888 21 12C21 10.112 20.999 8.764 20.904 7.71C20.809 6.671 20.63 6.019 20.33 5.5C19.8912 4.73997 19.26 4.10882 18.5 3.67C17.981 3.37 17.329 3.19 16.29 3.096C15.237 3.001 13.888 3 12 3C10.112 3 8.764 3.001 7.71 3.096ZM16.75 6.252C16.75 5.7 17.2 5.25 17.752 5.25C18.304 5.25 18.754 5.7 18.754 6.252C18.754 6.804 18.304 7.254 17.752 7.254C17.2 7.254 16.75 6.804 16.75 6.252ZM12 8.5C11.5404 8.5 11.0852 8.59053 10.6606 8.76642C10.236 8.94231 9.85013 9.20012 9.52513 9.52513C9.20012 9.85013 8.94231 10.236 8.76642 10.6606C8.59053 11.0852 8.5 11.5404 8.5 12C8.5 12.4596 8.59053 12.9148 8.76642 13.3394C8.94231 13.764 9.20012 14.1499 9.52513 14.4749C9.85013 14.7999 10.236 15.0577 10.6606 15.2336C11.0852 15.4095 11.5404 15.5 12 15.5C12.9283 15.5 13.8185 15.1313 14.4749 14.4749C15.1313 13.8185 15.5 12.9283 15.5 12C15.5 11.0717 15.1313 10.1815 14.4749 9.52513C13.8185 8.86875 12.9283 8.5 12 8.5ZM6.5 12C6.5 10.5413 7.07946 9.14236 8.11091 8.11091C9.14236 7.07946 10.5413 6.5 12 6.5C13.4587 6.5 14.8576 7.07946 15.8891 8.11091C16.9205 9.14236 17.5 10.5413 17.5 12C17.5 13.4587 16.9205 14.8576 15.8891 15.8891C14.8576 16.9205 13.4587 17.5 12 17.5C10.5413 17.5 9.14236 16.9205 8.11091 15.8891C7.07946 14.8576 6.5 13.4587 6.5 12Z" })
    ]
  }
), c8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 21C10.755 21 9.585 20.7638 8.49 20.2913C7.395 19.8188 6.4425 19.1775 5.6325 18.3675C4.8225 17.5575 4.18125 16.605 3.70875 15.51C3.23625 14.415 3 13.245 3 12C3 10.755 3.23625 9.585 3.70875 8.49C4.18125 7.395 4.8225 6.4425 5.6325 5.6325C6.4425 4.8225 7.395 4.18125 8.49 3.70875C9.585 3.23625 10.755 3 12 3C13.245 3 14.415 3.23625 15.51 3.70875C16.605 4.18125 17.5575 4.8225 18.3675 5.6325C19.1775 6.4425 19.8188 7.395 20.2913 8.49C20.7638 9.585 21 10.755 21 12C21 13.245 20.7638 14.415 20.2913 15.51C19.8188 16.605 19.1775 17.5575 18.3675 18.3675C17.5575 19.1775 16.605 19.8188 15.51 20.2913C14.415 20.7638 13.245 21 12 21ZM12.9 19.1325C14.685 18.9075 16.1813 18.1238 17.3888 16.7813C18.5963 15.4388 19.2 13.845 19.2 12C19.2 10.155 18.5963 8.56125 17.3888 7.21875C16.1813 5.87625 14.685 5.0925 12.9 4.8675L12.9 19.1325Z" })
    ]
  }
), d8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 21C10.755 21 9.585 20.7638 8.49 20.2913C7.395 19.8188 6.4425 19.1775 5.6325 18.3675C4.8225 17.5575 4.18125 16.605 3.70875 15.51C3.23625 14.415 3 13.245 3 12C3 10.755 3.23625 9.585 3.70875 8.49C4.18125 7.395 4.8225 6.4425 5.6325 5.6325C6.4425 4.8225 7.395 4.18125 8.49 3.70875C9.585 3.23625 10.755 3 12 3C13.245 3 14.415 3.23625 15.51 3.70875C16.605 4.18125 17.5575 4.8225 18.3675 5.6325C19.1775 6.4425 19.8188 7.395 20.2913 8.49C20.7638 9.585 21 10.755 21 12C21 13.245 20.7638 14.415 20.2913 15.51C19.8188 16.605 19.1775 17.5575 18.3675 18.3675C17.5575 19.1775 16.605 19.8188 15.51 20.2913C14.415 20.7638 13.245 21 12 21ZM12.9 19.1325C14.685 18.9075 16.1813 18.1238 17.3888 16.7813C18.5963 15.4388 19.2 13.845 19.2 12C19.2 10.155 18.5963 8.56125 17.3888 7.21875C16.1813 5.87625 14.685 5.0925 12.9 4.8675V19.1325Z" }),
      /* @__PURE__ */ n("path", { d: "M19 4H20V5C20 5.28333 20.0958 5.52083 20.2875 5.7125C20.4792 5.90417 20.7167 6 21 6C21.2833 6 21.5208 5.90417 21.7125 5.7125C21.9042 5.52083 22 5.28333 22 5V4H23C23.2833 4 23.5208 3.90417 23.7125 3.7125C23.9042 3.52083 24 3.28333 24 3C24 2.71667 23.9042 2.47917 23.7125 2.2875C23.5208 2.09583 23.2833 2 23 2H22V1C22 0.716667 21.9042 0.479167 21.7125 0.2875C21.5208 0.0958335 21.2833 0 21 0C20.7167 0 20.4792 0.0958335 20.2875 0.2875C20.0958 0.479167 20 0.716667 20 1V2H19C18.7167 2 18.4792 2.09583 18.2875 2.2875C18.0958 2.47917 18 2.71667 18 3C18 3.28333 18.0958 3.52083 18.2875 3.7125C18.4792 3.90417 18.7167 4 19 4Z" })
    ]
  }
), u8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 21C10.755 21 9.585 20.7638 8.49 20.2913C7.395 19.8188 6.4425 19.1775 5.6325 18.3675C4.8225 17.5575 4.18125 16.605 3.70875 15.51C3.23625 14.415 3 13.245 3 12C3 10.755 3.23625 9.585 3.70875 8.49C4.18125 7.395 4.8225 6.4425 5.6325 5.6325C6.4425 4.8225 7.395 4.18125 8.49 3.70875C9.585 3.23625 10.755 3 12 3C13.245 3 14.415 3.23625 15.51 3.70875C16.605 4.18125 17.5575 4.8225 18.3675 5.6325C19.1775 6.4425 19.8188 7.395 20.2913 8.49C20.7638 9.585 21 10.755 21 12C21 13.245 20.7638 14.415 20.2913 15.51C19.8188 16.605 19.1775 17.5575 18.3675 18.3675C17.5575 19.1775 16.605 19.8188 15.51 20.2913C14.415 20.7638 13.245 21 12 21ZM12.9 19.1325C14.685 18.9075 16.1813 18.1238 17.3888 16.7813C18.5963 15.4388 19.2 13.845 19.2 12C19.2 10.155 18.5963 8.56125 17.3888 7.21875C16.1813 5.87625 14.685 5.0925 12.9 4.8675V19.1325Z" }),
      /* @__PURE__ */ n("path", { d: "M19 4H20H23C23.2833 4 23.5208 3.90417 23.7125 3.7125C23.9042 3.52083 24 3.28333 24 3C24 2.71667 23.9042 2.47917 23.7125 2.2875C23.5208 2.09583 23.2833 2 23 2H20H19C18.7167 2 18.4792 2.09583 18.2875 2.2875C18.0958 2.47917 18 2.71667 18 3C18 3.28333 18.0958 3.52083 18.2875 3.7125C18.4792 3.90417 18.7167 4 19 4Z" })
    ]
  }
), p8 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M12 3C13.245 3 14.415 3.23625 15.51 3.70875C16.605 4.18125 17.5575 4.8225 18.3675 5.6325C19.1775 6.4425 19.8188 7.395 20.2913 8.49C20.7638 9.585 21 10.755 21 12C21 13.245 20.7638 14.415 20.2913 15.51C19.8188 16.605 19.1775 17.5575 18.3675 18.3675C17.5575 19.1775 16.605 19.8187 15.51 20.2912C14.415 20.7637 13.245 21 12 21C10.755 21 9.585 20.7637 8.49 20.2912C7.395 19.8187 6.4425 19.1775 5.6325 18.3675C4.8225 17.5575 4.18125 16.605 3.70875 15.51C3.23625 14.415 3 13.245 3 12C3 10.755 3.23625 9.585 3.70875 8.49C4.18125 7.395 4.8225 6.4425 5.6325 5.6325C6.4425 4.8225 7.395 4.18125 8.49 3.70875C9.585 3.23625 10.755 3 12 3ZM11.1 4.8675C9.315 5.0925 7.81875 5.87625 6.61125 7.21875C5.40375 8.56125 4.8 10.155 4.8 12C4.8 13.845 5.40375 15.4387 6.61125 16.7812C7.81875 18.1237 9.315 18.9075 11.1 19.1325L11.1 4.8675Z" })
    ]
  }
), h8 = () => {
  const { open: e } = $o();
  return /* @__PURE__ */ n($c, { autofocus: !0, children: [
    /* @__PURE__ */ n(Uc, { children: [
      /* @__PURE__ */ n(mt, { title: pr("titles.close"), "aria-label": pr("titles.close"), onClick: () => e("main"), children: /* @__PURE__ */ n(Kc, { "aria-hidden": !0, size: 22 }) }),
      /* @__PURE__ */ n(Vc, { children: "Configurações" })
    ] }),
    /* @__PURE__ */ n(jc, {})
  ] });
}, f8 = () => {
  const { open: e } = $o();
  return /* @__PURE__ */ n($c, { autofocus: !0, children: [
    /* @__PURE__ */ n(Uc, { children: [
      /* @__PURE__ */ n(mt, { title: pr("titles.close"), "aria-label": pr("titles.close"), onClick: () => e("main"), children: /* @__PURE__ */ n(Kc, { "aria-hidden": !0, size: 22 }) }),
      /* @__PURE__ */ n(Vc, { children: "Sobre" })
    ] }),
    /* @__PURE__ */ n(jc, {})
  ] });
}, g8 = () => {
  const { settings: e, about: r } = $o();
  return /* @__PURE__ */ n(we, { children: [
    e && /* @__PURE__ */ n(h8, {}),
    r && /* @__PURE__ */ n(f8, {})
  ] });
}, m8 = () => {
  const { content: e } = Wt();
  return e;
}, Wt = Ot((e) => ({
  dialogId: "",
  setContent: (r) => e({ content: r })
})), v8 = ({ children: e }) => {
  const { isOpenWidget: r, isLoaded: t, isExpanded: o } = M();
  return /* @__PURE__ */ n(
    "div",
    {
      className: G(
        "spacing flex flex-col gap-0 transition-[bottom,width] duration-500 overflow-hidden rounded-2xl pt-0 border-1 tracking-normal",
        "leading-normal fixed z-[2147483640] -bottom-[100dvh] right-2 bg-background",
        "xs:w-md max-xs:left-2 h-[75dvh] xs:h-[90dvh] data-[active='true']:bottom-2",
        o && "md:w-2xl"
      ),
      style: { boxShadow: "0 0 30px -5px rgba(0, 0, 0, 0.2)" },
      "data-active": r && t,
      children: e
    }
  );
}, b8 = () => {
  const { toggleTheme: e, theme: r } = Fo(), { setIsOpenWidget: t, reset: o, isActive: i } = M(), { t: a } = W(), { version: s } = Zt();
  return /* @__PURE__ */ n("div", { className: "flex gap-2 items-center justify-between w-full border-b-1 border-border p-4", children: [
    /* @__PURE__ */ n(
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
        children: /* @__PURE__ */ n(yu, { "aria-hidden": !0, size: 22, className: "text-white absolute size-7 bottom-0" })
      }
    ),
    /* @__PURE__ */ n("div", { className: "flex max-xxs:hidden flex-col ml-1 leading-tight relative -top-[1px]", children: [
      /* @__PURE__ */ n("p", { className: "text-sm xs:text-lg font-bold text-foreground truncate", children: [
        "VLibras ",
        /* @__PURE__ */ n("span", { className: "max-xxs:hidden", children: "Widget+" })
      ] }),
      /* @__PURE__ */ n("span", { className: "text-xs truncate font-medium text-muted-foreground", children: [
        "Versão ",
        s
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "ml-auto flex items-center xs:gap-x-1", children: [
      i && /* @__PURE__ */ n(mt, { title: a("titles.reset"), "aria-label": a("titles.reset"), onClick: o, children: /* @__PURE__ */ n(Gc, { "aria-hidden": !0, size: 22 }) }),
      /* @__PURE__ */ n(mt, { title: a("titles.toggle_theme"), onClick: e, children: [
        r === "light" && /* @__PURE__ */ n(Nu, { "aria-hidden": !0, size: 22, iconTitle: a("titles.reset") }),
        r === "dark" && /* @__PURE__ */ n(Lu, { "aria-hidden": !0, size: 22, iconTitle: a("titles.reset") })
      ] }),
      /* @__PURE__ */ n(
        mt,
        {
          title: a("titles.close"),
          "aria-label": a("titles.close"),
          variant: "destructive",
          onClick: () => t(!1),
          children: /* @__PURE__ */ n(Pt, { "aria-hidden": !0, size: 22 })
        }
      )
    ] })
  ] });
}, Ee = Ce(({ children: e, disabled: r, className: t, variant: o, ...i }, a) => /* @__PURE__ */ n(
  "button",
  {
    tabIndex: r ? -1 : 0,
    disabled: r,
    ref: a,
    className: G(
      "cursor-pointer text-foreground rounded-md flex justify-center items-center gap-x-2",
      r && "pointer-events-none *:!pointer-events-none opacity-50",
      !!o && "px-4 h-9",
      o === "primary" && "bg-primary text-primary-foreground hover:brightness-110 outline-primary-foreground",
      o === "outline" && "border-1 border-foreground/20 hover:bg-foreground/5",
      o === "ghost" && "hover:bg-foreground/10",
      o === "secondary" && "bg-accent text-foreground hover:brightness-110",
      o === "destructive" && "bg-destructive text-destructive-foreground hover:brightness-110 outline-destructive-foreground",
      t
    ),
    type: i.type || "button",
    ...i,
    children: e
  }
)), C8 = Ce(
  ({ children: e, className: r, disabled: t, ...o }, i) => /* @__PURE__ */ n(
    Ee,
    {
      tabIndex: t ? -1 : 0,
      disabled: t,
      ref: i,
      type: "button",
      className: G(
        "w-full relative group rounded-full border-1 border-border hover:border-primary bg-white",
        "leading-none text-xs xs:text-sm justify-start p-1.5 pr-2 dark:bg-background",
        "[&>svg]:size-7 xs:[&>svg]:size-8 [&>svg]:bg-accent [&>svg]:fill-foreground [&>svg]:p-1 xs:[&>svg]:p-1.5 [&>svg]:rounded-full",
        "data-[active=true]:!border-primary data-[active=true]:!bg-primary/10",
        "data-[active=true]:[&>svg]:bg-primary data-[active=true]:[&>svg]:fill-primary-foreground",
        r
      ),
      ...o,
      children: e
    }
  )
), er = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n(
    "div",
    {
      ref: o,
      className: G(
        "gap-4 grid xs:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] grid-cols-[repeat(auto-fill,minmax(132px,1fr))] auto-rows-min",
        r
      ),
      ...t,
      children: e
    }
  )
), $t = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n(
    "p",
    {
      ref: o,
      className: G("text-foreground/80 text-base font-bold leading-normal col-span-full", r),
      ...t,
      children: e
    }
  )
), y8 = [
  {
    nameKey: "profiles.blind",
    icon: Fu
  },
  {
    nameKey: "profiles.dyslexic",
    icon: Wc
  },
  {
    nameKey: "profiles.low_vision",
    icon: Hu
  },
  {
    nameKey: "profiles.color_blind",
    icon: Xc
  },
  {
    nameKey: "profiles.mobility",
    icon: Bu
  },
  {
    nameKey: "profiles.cognitive",
    icon: $u
  }
], w8 = () => {
  const { t: e } = W(), { profile: r, reset: t } = M(), [o, i] = Z(!0);
  O(() => {
    const { profile: s } = M.getState();
    s && a(s, !0);
  }, []);
  const a = (s, c) => {
    if (!c && r === s) return t();
    const l = { ...y1, isActive: !0, profile: s };
    switch (s) {
      case "profiles.blind":
        M.setState({
          ...l,
          keyboardNavigation: "speech"
        });
        break;
      case "profiles.dyslexic": {
        M.setState({
          ...l,
          dyslexicFont: "open-dyslexic",
          fontSize: "large",
          lineSpacing: "large"
        });
        break;
      }
      case "profiles.low_vision":
        M.setState({
          ...l,
          fontSize: "large",
          letterSpacing: "large",
          lineSpacing: "medium",
          highlightLinks: !0,
          highlightTitles: !0
        });
        break;
      case "profiles.color_blind":
        M.setState({
          ...l,
          colorBlindFilter: "deuteranopia",
          saturation: "high"
        });
        break;
      case "profiles.mobility":
        M.setState({
          ...l,
          largeCursor: !0,
          easyClick: !0
        });
        break;
      case "profiles.cognitive":
        M.setState({
          ...l,
          disableAutoplay: !0,
          pauseAnimations: !0,
          disableSound: !0
        });
        break;
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      style: { boxShadow: o ? "" : "2px 2px 15px -5px rgba(0, 0, 0, .2)" },
      className: G(
        "dark:bg-muted dark:!shadow-none border-1 rounded-lg",
        r && "border-primary/50",
        r && !o && "border-primary"
      ),
      children: [
        /* @__PURE__ */ n("div", { className: "flex items-center gap-x-2 p-2.5 pl-4 relative", children: [
          /* @__PURE__ */ n("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ n("span", { className: "text-xs sm:text-sm text-muted-foreground h-4.5 sm:h-[22px]", children: [
              r && /* @__PURE__ */ n(x1, { className: "inline relative -top-[3px] mr-1.5 size-4 fill-primary" }),
              e(r || "deactivated")
            ] }),
            /* @__PURE__ */ n($t, { className: "line-clamp-1 break-all text-base max-sm:text-sm col-auto", children: e("sections.navigation_profiles") })
          ] }),
          /* @__PURE__ */ n(
            Ee,
            {
              "aria-label": e("al.open_navigation_profiles"),
              title: e(o ? "expand" : "collapse"),
              onClick: () => i(!o),
              className: "size-7 sm:size-10 fill-muted-foreground absolute right-2 hover:fill-foreground",
              children: /* @__PURE__ */ n(Du, { className: G("transition-all rotate-180 size-5 sm:size-6", !o && "rotate-0") })
            }
          )
        ] }),
        /* @__PURE__ */ n(
          "div",
          {
            className: G(
              "grid xs:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2 transition-all overflow-hidden px-4",
              o ? "!max-h-0 [&>*]:!pointer-events-none" : "pb-4 pt-2 max-h-[400px]"
            ),
            children: y8.map(({ nameKey: s, icon: c }) => {
              const l = s === r;
              return /* @__PURE__ */ n(
                C8,
                {
                  "aria-label": `${e("sections.navigation_profiles")}: ${e(s)}`,
                  onClick: () => a(s),
                  tabindex: o ? -1 : 0,
                  "data-active": l,
                  children: [
                    /* @__PURE__ */ n(c, {}),
                    /* @__PURE__ */ n("span", { children: e(s) })
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
}, vo = [
  { key: "medium", value: 1.15 },
  { key: "large", value: 1.3 },
  { key: "very_large", value: 1.6 }
];
function Jc() {
  const { fontSize: e } = M(), [r, t] = Z(-1), [o, i] = Z(), [a, s] = Z(!1), c = Me(/* @__PURE__ */ new Map());
  O(() => {
    a || (document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((p) => {
      if (!w1(p)) return;
      const u = p, f = Number.parseFloat(window.getComputedStyle(u).fontSize);
      c.current.has(u) || c.current.set(u, f);
    }), s(!0));
  }, [a]), O(() => {
    if (!a) return;
    const p = vo.find(({ key: u }) => u === e);
    t(vo.findIndex(({ key: u }) => u === e)), i(p), l(p);
  }, [e, a]);
  const l = (p) => {
    c.current.forEach((u, f) => {
      f.style.fontSize = p ? `${u * p.value}px` : "";
    });
  };
  return { increaseFontSize: () => {
    const p = r + 1 < vo.length ? r + 1 : -1, u = vo[p] || void 0;
    M.setState({ fontSize: u == null ? void 0 : u.key });
  }, index: r, option: o };
}
const ue = Ce(({ children: e, className: r, disabled: t, isActive: o, showActiveIndicator: i, ...a }) => {
  const s = Me(null);
  return O(() => {
    const c = s.current;
    c == null || c.addEventListener("click", () => M.setState({ profile: void 0 }));
  }, []), /* @__PURE__ */ n(
    Ee,
    {
      ref: s,
      "data-disabled": t,
      className: G(
        "cursor-pointer group bg-muted fill-foreground/80 text-foreground/80 border-1 border-border",
        "flex flex-col rounded-lg max-h-28 p-4 font-bold relative",
        "hover:text-foreground hover:fill-foreground hover:border-primary",
        o && !t && "!bg-primary/5 border-primary [&>*]:text-primary [&>*]:fill-primary",
        t && "!cursor-not-allowed pointer-events-none *:pointer-events-none !text-muted-foreground opacity-80 !border-border !bg-muted/30",
        r
      ),
      ...a,
      children: [
        e,
        !t && i && o && /* @__PURE__ */ n(_8, {})
      ]
    }
  );
}), _8 = () => {
  const { t: e } = W();
  return /* @__PURE__ */ n("div", { "aria-hidden": !0, className: "absolute top-2 right-2 fill-primary", children: /* @__PURE__ */ n(x1, { iconTitle: e("actived"), size: 16 }) });
}, tt = ({ size: e, actived: r }) => {
  if (r !== -1)
    return /* @__PURE__ */ n("div", { className: "absolute group-data-[disabled='true']:!hidden top-2 right-2 flex items-center gap-1", children: Array.from({ length: e }).map((t, o) => /* @__PURE__ */ n(
      "div",
      {
        className: G(
          "w-2.5 h-2.5 rounded-full bg-primary/30",
          r === -1 && "bg-foreground/15",
          r === o && "bg-primary"
        )
      },
      o
    )) });
}, pe = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n("span", { ref: o, className: G("text-[13.5px] xs:text-[15px] leading-tight font-semibold", r), ...t, children: e })
), he = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n(
    "span",
    {
      ref: o,
      className: G("text-[13px] xs:text-[13.5px] text-muted-foreground font-medium", r),
      ...t,
      children: e
    }
  )
), fe = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n("span", { ref: o, className: G("xs:mb-1 mt-1 [&_svg]:size-8", r), ...t, children: e })
), x8 = () => {
  const { t: e } = W(), { increaseFontSize: r, option: t, index: o } = Jc();
  return /* @__PURE__ */ n(ue, { "aria-label": e("al.font_increase"), isActive: !!t, onClick: r, children: [
    /* @__PURE__ */ n(tt, { size: 3, actived: o }),
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(gu, { iconTitle: e("al.font_increase") }) }),
    /* @__PURE__ */ n(pe, { children: e("font_increase") }),
    /* @__PURE__ */ n(he, { children: e((t == null ? void 0 : t.key) || "deactivated") })
  ] });
}, k8 = "body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){outline:2px solid yellow!important;font-weight:700!important;background:#000!important;transition:transform .3s ease!important;color:#fff!important}body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) *:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){color:#fff!important;background-color:#000!important}body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) button{background:#000!important}body.vwp-highlight-links a:not(.vwp-ignore,.vwp-ignore--text-color,.vwp-ignore--text-color *,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus):hover{transform:scale(1.05)!important}", Ji = "vwp-highlight-links", A8 = "vwp-highlight-links-style", E8 = () => {
  const { highlightLinks: e } = M();
  return O(() => {
    e && et(k8, A8);
  }, [e]), O(() => (document.body.classList.toggle(Ji, !!e), () => document.body.classList.remove(Ji)), [e]), { toggle: (t) => {
    const o = t !== void 0 ? t : !e;
    document.body.classList.toggle(Ji, o), M.setState({ highlightLinks: o });
  }, isActive: !!e };
}, S8 = () => {
  const { t: e } = W(), { toggle: r, isActive: t } = E8();
  return /* @__PURE__ */ n(ue, { showActiveIndicator: !0, "aria-label": e("al.highlight_links"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(mu, { iconTitle: e("al.highlight_links") }) }),
    /* @__PURE__ */ n(pe, { children: e("highlight_links") }),
    /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
  ] });
}, bo = [
  { key: "medium", value: 1.5 },
  { key: "large", value: 3 },
  { key: "very_large", value: 6 }
];
function Qc() {
  const { letterSpacing: e } = M(), [r, t] = Z(-1), [o, i] = Z(), [a, s] = Z(!1), c = Me(/* @__PURE__ */ new Map());
  O(() => {
    a || (document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((p) => {
      if (!w1(p)) return;
      const u = p, m = window.getComputedStyle(u).letterSpacing;
      let w;
      m === "normal" ? w = 0 : (w = Number.parseFloat(m), Number.isNaN(w) && (w = 0)), c.current.set(u, w);
    }), s(!0));
  }, [a]), O(() => {
    if (!a) return;
    const p = bo.find(({ key: u }) => u === e);
    t(bo.findIndex(({ key: u }) => u === e)), i(p), l(p);
  }, [e, a]);
  const l = (p) => {
    c.current.forEach((u, f) => {
      f.style.letterSpacing = p ? `${u + p.value}px` : "";
    });
  };
  return { increaseLetterSpacing: () => {
    const p = r + 1 < bo.length ? r + 1 : -1, u = bo[p] || void 0;
    M.setState({ letterSpacing: u == null ? void 0 : u.key });
  }, index: r, option: o };
}
const T8 = () => {
  const { t: e } = W(), { increaseLetterSpacing: r, option: t, index: o } = Qc();
  return /* @__PURE__ */ n(ue, { "aria-label": e("al.letter_spacing"), isActive: !!t, onClick: r, children: [
    /* @__PURE__ */ n(tt, { size: 3, actived: o }),
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(bu, { iconTitle: e("al.letter_spacing") }) }),
    /* @__PURE__ */ n(pe, { children: e("letter_spacing") }),
    /* @__PURE__ */ n(he, { children: e((t == null ? void 0 : t.key) || "deactivated") })
  ] });
}, N8 = () => {
  const { readingMask: e } = M();
  return { toggle: (t) => {
    const o = t !== void 0 ? t : !e;
    M.setState({ readingMask: o, readingGuide: !1 });
  }, isActive: !!e };
}, L8 = () => {
  const { t: e } = W(), { toggle: r, isActive: t } = N8();
  return /* @__PURE__ */ n(ue, { showActiveIndicator: !0, "aria-label": e("al.reading_mask"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Cu, { iconTitle: e("al.reading_mask") }) }),
    /* @__PURE__ */ n(pe, { children: e("reading_mask") }),
    /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
  ] });
}, R8 = "body.vwp-highlight-titles :is(h1,h2,h3,h4,h5,h6):not(.vwp-ignore,.vwp-ignore--text-color,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){text-decoration:underline!important;color:#1351b4!important;font-weight:700!important}", Qi = "vwp-highlight-titles", M8 = "vwp-highlight-titles-style", I8 = () => {
  const { highlightTitles: e } = M();
  return O(() => {
    e && et(R8, M8);
  }, [e]), O(() => (document.body.classList.toggle(Qi, !!e), () => document.body.classList.remove(Qi)), [e]), { toggle: (t) => {
    const o = t !== void 0 ? t : !e;
    document.body.classList.toggle(Qi, o), M.setState({ highlightTitles: o });
  }, isActive: !!e };
}, O8 = () => {
  const { t: e } = W(), { toggle: r, isActive: t } = I8();
  return /* @__PURE__ */ n(
    ue,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.highlight_titles"),
      isActive: t,
      onClick: () => r(),
      children: [
        /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(ku, { iconTitle: e("al.highlight_titles") }) }),
        /* @__PURE__ */ n(pe, { children: e("highlight_titles") }),
        /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
      ]
    }
  );
}, P8 = "body.vwp-text-color *:not(.vwp-ignore,.vwp-ignore--text-color,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){color:var(--vwp-text-color)!important}", ws = "vwp-text-color", D8 = "--vwp-text-color", H8 = "vwp-text-color-style", z8 = () => {
  const { textColor: e } = M();
  O(() => {
    e != null && e.isActive && et(P8, H8);
  }, [e]), O(() => {
    if (e != null && e.color)
      return document.body.classList.toggle(ws, !!(e != null && e.isActive)), document.body.style.setProperty(D8, e.color), () => document.body.classList.remove(ws);
  }, [e]);
  const r = (o) => {
    (o !== void 0 ? o : !(e != null && e.isActive)) ? t(e == null ? void 0 : e.color) : M.setState({
      textColor: {
        isActive: !1,
        color: e == null ? void 0 : e.color
      }
    });
  }, t = (o) => {
    o && M.setState({ textColor: { color: o, isActive: !0 } });
  };
  return { toggle: r, apply: t, textColor: e, isActive: e == null ? void 0 : e.isActive };
}, B8 = () => {
  const e = Me(null), { path: r } = Zt(), { t } = W(), { apply: o, toggle: i, textColor: a, isActive: s } = z8(), c = () => {
    var p;
    s || (p = e.current) == null || p.click(), i();
  }, l = () => {
    var p;
    return (p = e.current) == null ? void 0 : p.click();
  }, d = (p) => {
    const u = p.target.value;
    o(u);
  };
  return /* @__PURE__ */ n(ue, { "aria-label": t("al.text_color"), isActive: s, onClick: c, children: [
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(wu, { iconTitle: t("al.text_color") }) }),
    /* @__PURE__ */ n(pe, { children: t("text_color") }),
    /* @__PURE__ */ n(he, { children: t(s ? "custom" : "default") }),
    /* @__PURE__ */ n(
      "div",
      {
        "aria-label": t("color_picker"),
        tabindex: 0,
        onClick: l,
        onKeyDown: () => {
        },
        style: { backgroundColor: (a == null ? void 0 : a.color) || "#000" },
        className: "absolute top-2 right-2 size-6 rounded-full border-1 grid place-content-center",
        children: !(a != null && a.color) && /* @__PURE__ */ n("img", { src: `${r}/assets/images/color-picker.png`, alt: "" })
      }
    ),
    /* @__PURE__ */ n(
      "input",
      {
        ref: e,
        onChange: d,
        type: "color",
        className: "pointer-events-none absolute top-2 right-2 size-6 sr-only"
      }
    )
  ] });
}, F8 = ".vwp-large-cursor *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAA0CAYAAAAACoF6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgBzZmN0aIwEIbfuwoogQ6kA7CCswPmKuDrADqwBK4DSsAOtAPsAK0glwXDxJiEAAF8ZnZGIMLjZvOjAkCBL4Lhi4TYK0p8AUyKikeAHWFKXPcUYppoeITYAfZNQoPA+XzeXWh4OFGW5a5CbzJEXdcsCAJZqOURYQM+ZIjr9aoTSrAyWhmiaRoWhqHabSlWxChjEfrBSlhlLEIFVmBUZkshJxmibVsWRdGqQs4yQuh0OqlCZ3hikowgTVNVqIQHZskQRVF4X/Fny1iEQsxkkYxBqJkrtFjGp5AXGcLHiu9NhqiqSl1gSch5xfcqQxhWfCch7zLE3BV/FRmL0M8uMhahYheZqUKryxAuK/5vbMD9fu+CL67go0y+lENa8X+hN+zgHwBzeDwe3cNut9vwWhw/n8/u3Aj/ePztHLCwm7IsU9M/NRrKkJfMXC4XHI9HWxNKzZ3HTXotjp+vc72DS2aoAGlmNZEkifxJax5/0M+6k/Y3ozJiaNIDTSjf01vMxCpD2ZDnCMqQKXPKepRgBkYZ2hIoD2B5nhuzQ9fw3lV+ZJQbD0FyJiiLSvvJ++EPGc1QbdDXQXdMexYTSiHnmMhbPcRxrIqIHX8uztkKmX5OwYJCHt6sWcxKqV0gX6OHmlhSyKZZUZfiSlynrjSxpJB1IqmhbQKpkG3DXLnf9D0w+j6OR9rXoj1NdL4LWR4xoUP7TLyH9icmNDOy0zAXIyaEGwGkYS4XMnUPSRwOB13XZy43LzF9csohDXMSooJWZ2u8F/Fqv5ZGwOgepX1JH7ABQyHjMwvUJZv+GZJoJGLsCI1A6govWfgPEfBNVkVYxn8AAAAASUVORK5CYII=),pointer!important}", en = "vwp-large-cursor", $8 = "vwp-large-cursor-style", U8 = () => {
  const { largeCursor: e } = M();
  return O(() => {
    e && et(F8, $8);
  }, [e]), O(() => (document.body.classList.toggle(en, !!e), () => document.body.classList.remove(en)), [e]), { toggle: (t) => {
    const o = t !== void 0 ? t : !e;
    document.documentElement.classList.toggle(en, o), M.setState({ largeCursor: o, textReader: void 0 });
  }, isActive: !!e };
}, V8 = () => {
  const { t: e } = W(), { toggle: r, isActive: t } = U8();
  return zo() ? null : /* @__PURE__ */ n(ue, { showActiveIndicator: !0, "aria-label": e("al.large_cursor"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(xu, { iconTitle: e("al.large_cursor") }) }),
    /* @__PURE__ */ n(pe, { children: e("large_cursor") }),
    /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
  ] });
}, Co = [
  { key: "medium", value: 1.15 },
  { key: "large", value: 1.3 },
  { key: "very_large", value: 1.45 }
];
function e2() {
  const { lineSpacing: e } = M(), [r, t] = Z(!1), [o, i] = Z(-1), [a, s] = Z(), c = Me(/* @__PURE__ */ new Map());
  O(() => {
    r || (document.querySelectorAll(
      "p, span, a, strong, h1, h2, h3, h4, h5, h6, b, em, i, code, mark, pre, blockquote, abbr, cite, q, time"
    ).forEach((p) => {
      if (!w1(p)) return;
      const u = p, f = window.getComputedStyle(u), m = Number.parseFloat(f.fontSize);
      let w;
      f.lineHeight === "normal" ? w = 1.2 : f.lineHeight.endsWith("px") ? w = Number.parseFloat(f.lineHeight) / m : w = Number.parseFloat(f.lineHeight), Number.isNaN(w) || c.current.set(u, w);
    }), t(!0));
  }, [r]), O(() => {
    if (!r) return;
    const p = Co.find(({ key: u }) => u === e);
    i(Co.findIndex(({ key: u }) => u === e)), s(p), l(p);
  }, [e, r]);
  const l = (p) => {
    c.current.forEach((u, f) => {
      f.style.lineHeight = p ? `${u * p.value}` : "";
    });
  };
  return { increaseLineSpacing: () => {
    const p = o + 1 < Co.length ? o + 1 : -1, u = Co[p] || void 0;
    M.setState({ lineSpacing: u == null ? void 0 : u.key });
  }, index: o, option: a };
}
const j8 = () => {
  const { t: e } = W(), { increaseLineSpacing: r, option: t, index: o } = e2();
  return /* @__PURE__ */ n(ue, { "aria-label": e("al.line_spacing"), isActive: !!t, onClick: r, children: [
    /* @__PURE__ */ n(tt, { size: 3, actived: o }),
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Tu, { iconTitle: e("al.line_spacing") }) }),
    /* @__PURE__ */ n(pe, { children: e("line_spacing") }),
    /* @__PURE__ */ n(he, { children: e((t == null ? void 0 : t.key) || "deactivated") })
  ] });
}, G8 = "body.vwp-hide-images *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) img,body.vwp-hide-images *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) figure{display:none!important}", tn = "vwp-hide-images", q8 = "vwp-hide-images-style", Z8 = () => {
  const { hideImages: e } = M();
  return O(() => {
    e && et(G8, q8);
  }, [e]), O(() => (document.body.classList.toggle(tn, !!e), () => document.body.classList.remove(tn)), [e]), { toggle: (t) => {
    const o = t !== void 0 ? t : !e;
    document.body.classList.toggle(tn, o), M.setState({ hideImages: o });
  }, isActive: !!e };
}, W8 = () => {
  const { t: e } = W(), { toggle: r, isActive: t } = Z8();
  return /* @__PURE__ */ n(ue, { showActiveIndicator: !0, "aria-label": e("al.hide_images"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(_u, { iconTitle: e("al.hide_images") }) }),
    /* @__PURE__ */ n(pe, { children: e("hide_images") }),
    /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
  ] });
}, X8 = "body.vwp-pause-animations *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) *{animation-play-state:paused!important}", rn = "vwp-pause-animations", Y8 = "vwp-pause-animations-style", K8 = () => {
  const { pauseAnimations: e } = M();
  return O(() => {
    e && et(X8, Y8);
  }, [e]), O(() => (document.body.classList.toggle(rn, !!e), () => document.body.classList.remove(rn)), [e]), { toggle: (t) => {
    const o = t !== void 0 ? t : !e;
    document.body.classList.toggle(rn, o), M.setState({ pauseAnimations: o });
  }, isActive: !!e };
}, J8 = () => {
  const { t: e } = W(), { toggle: r, isActive: t } = K8();
  return /* @__PURE__ */ n(
    ue,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.pause_animations"),
      isActive: t,
      onClick: () => r(),
      children: [
        /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Au, { iconTitle: e("al.pause_animations") }) }),
        /* @__PURE__ */ n(pe, { children: e("pause_animations") }),
        /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
      ]
    }
  );
}, Q8 = () => {
  const { readingGuide: e } = M();
  return { toggle: (t) => {
    const o = t !== void 0 ? t : !e;
    M.setState({ readingGuide: o, readingMask: !1 });
  }, isActive: !!e };
}, _s = () => {
  const { t: e } = W(), { toggle: r, isActive: t } = Q8();
  return /* @__PURE__ */ n(ue, { showActiveIndicator: !0, "aria-label": e("al.reading_guide"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Su, { iconTitle: e("al.reading_guide") }) }),
    /* @__PURE__ */ n(pe, { children: e("reading_guide") }),
    /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
  ] });
}, ep = "#vwp-reader-mode-view::-webkit-scrollbar{height:10px;width:10px}#vwp-reader-mode-view::-webkit-scrollbar-track{background-color:transparent}#vwp-reader-mode-view::-webkit-scrollbar-thumb{border-radius:10000px;border:1px solid transparent;background-clip:padding-box;border-color:transparent;background-color:#333}#vwp-reader-mode-view[data-theme=light]::-webkit-scrollbar-thumb{background-color:#bbb}#vwp-reader-mode-view{display:none;flex-direction:column;z-index:2147483630;position:fixed;align-items:center;top:0;right:0;bottom:0;left:0;overflow-y:auto}#vwp-reader-mode-view[data-active=true]{display:flex}#vwp-reader-mode-view[data-theme=light]{color:#111;background-color:#fff}#vwp-reader-mode-view[data-theme=dark]{color:#eee;background-color:#0a0a0a}#vwp-reader-mode-view[highlight-titles=true] h1,#vwp-reader-mode-view[highlight-titles=true] h2,#vwp-reader-mode-view[highlight-titles=true] h3,#vwp-reader-mode-view[highlight-titles=true] h4,#vwp-reader-mode-view[highlight-titles=true] h5,#vwp-reader-mode-view[highlight-titles=true] h6{text-decoration:underline!important;color:#1351b4!important;font-weight:700!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){outline:2px solid yellow!important;font-weight:700!important;background:#000!important;transition:transform .3s ease!important;color:#fff!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) *{color:#fff!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) button{background:#000!important}#vwp-reader-mode-view[highlight-links=true] a:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus):hover{transform:scale(1.05)!important}#vwp-reader-mode-view *{color:inherit;background-color:inherit}#vwp-reader-mode-view img{display:none}#vwp-reader-mode-view header{display:flex;flex-direction:column}#vwp-reader-mode-view header p{opacity:70%}#vwp-reader-mode-view a{color:#2362c7}#vwp-reader-mode-view a:hover{filter:brightness(1.2)}#vwp-reader-mode-view .vwp-reader-mode-container{padding:48px;display:flex;flex-direction:column;gap:24px;max-width:1024px}@media (max-width: 640px){#vwp-reader-mode-view .vwp-reader-mode-container{padding:24px}}#vwp-reader-mode-view .vwp-reader-mode-container .vwp-reader-mode-content p{margin-bottom:16px}#vwp-reader-mode-view *{background-color:transparent;border:none;outline:transparent;padding:0;margin:0}body.vwp-reader-mode{overflow:hidden!important;height:100dvh!important}";
var Ar = {}, tr = {}, yo = {}, zt = {}, Bt = {}, on = {}, xs;
function t2() {
  return xs || (xs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
    var r;
    (function(o) {
      o.Root = "root", o.Text = "text", o.Directive = "directive", o.Comment = "comment", o.Script = "script", o.Style = "style", o.Tag = "tag", o.CDATA = "cdata", o.Doctype = "doctype";
    })(r = e.ElementType || (e.ElementType = {}));
    function t(o) {
      return o.type === r.Tag || o.type === r.Script || o.type === r.Style;
    }
    e.isTag = t, e.Root = r.Root, e.Text = r.Text, e.Directive = r.Directive, e.Comment = r.Comment, e.Script = r.Script, e.Style = r.Style, e.Tag = r.Tag, e.CDATA = r.CDATA, e.Doctype = r.Doctype;
  }(on)), on;
}
var K = {}, ks;
function As() {
  if (ks) return K;
  ks = 1;
  var e = K && K.__extends || /* @__PURE__ */ function() {
    var h = function(g, y) {
      return h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(k, P) {
        k.__proto__ = P;
      } || function(k, P) {
        for (var D in P) Object.prototype.hasOwnProperty.call(P, D) && (k[D] = P[D]);
      }, h(g, y);
    };
    return function(g, y) {
      if (typeof y != "function" && y !== null)
        throw new TypeError("Class extends value " + String(y) + " is not a constructor or null");
      h(g, y);
      function k() {
        this.constructor = g;
      }
      g.prototype = y === null ? Object.create(y) : (k.prototype = y.prototype, new k());
    };
  }(), r = K && K.__assign || function() {
    return r = Object.assign || function(h) {
      for (var g, y = 1, k = arguments.length; y < k; y++) {
        g = arguments[y];
        for (var P in g) Object.prototype.hasOwnProperty.call(g, P) && (h[P] = g[P]);
      }
      return h;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(K, "__esModule", { value: !0 }), K.cloneNode = K.hasChildren = K.isDocument = K.isDirective = K.isComment = K.isText = K.isCDATA = K.isTag = K.Element = K.Document = K.CDATA = K.NodeWithChildren = K.ProcessingInstruction = K.Comment = K.Text = K.DataNode = K.Node = void 0;
  var t = /* @__PURE__ */ t2(), o = (
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
        set: function(g) {
          this.parent = g;
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
        set: function(g) {
          this.prev = g;
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
        set: function(g) {
          this.next = g;
        },
        enumerable: !1,
        configurable: !0
      }), h.prototype.cloneNode = function(g) {
        return g === void 0 && (g = !1), C(this, g);
      }, h;
    }()
  );
  K.Node = o;
  var i = (
    /** @class */
    function(h) {
      e(g, h);
      function g(y) {
        var k = h.call(this) || this;
        return k.data = y, k;
      }
      return Object.defineProperty(g.prototype, "nodeValue", {
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
      }), g;
    }(o)
  );
  K.DataNode = i;
  var a = (
    /** @class */
    function(h) {
      e(g, h);
      function g() {
        var y = h !== null && h.apply(this, arguments) || this;
        return y.type = t.ElementType.Text, y;
      }
      return Object.defineProperty(g.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: !1,
        configurable: !0
      }), g;
    }(i)
  );
  K.Text = a;
  var s = (
    /** @class */
    function(h) {
      e(g, h);
      function g() {
        var y = h !== null && h.apply(this, arguments) || this;
        return y.type = t.ElementType.Comment, y;
      }
      return Object.defineProperty(g.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: !1,
        configurable: !0
      }), g;
    }(i)
  );
  K.Comment = s;
  var c = (
    /** @class */
    function(h) {
      e(g, h);
      function g(y, k) {
        var P = h.call(this, k) || this;
        return P.name = y, P.type = t.ElementType.Directive, P;
      }
      return Object.defineProperty(g.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), g;
    }(i)
  );
  K.ProcessingInstruction = c;
  var l = (
    /** @class */
    function(h) {
      e(g, h);
      function g(y) {
        var k = h.call(this) || this;
        return k.children = y, k;
      }
      return Object.defineProperty(g.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var y;
          return (y = this.children[0]) !== null && y !== void 0 ? y : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(g.prototype, "lastChild", {
        /** Last child of the node. */
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(g.prototype, "childNodes", {
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
      }), g;
    }(o)
  );
  K.NodeWithChildren = l;
  var d = (
    /** @class */
    function(h) {
      e(g, h);
      function g() {
        var y = h !== null && h.apply(this, arguments) || this;
        return y.type = t.ElementType.CDATA, y;
      }
      return Object.defineProperty(g.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: !1,
        configurable: !0
      }), g;
    }(l)
  );
  K.CDATA = d;
  var p = (
    /** @class */
    function(h) {
      e(g, h);
      function g() {
        var y = h !== null && h.apply(this, arguments) || this;
        return y.type = t.ElementType.Root, y;
      }
      return Object.defineProperty(g.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: !1,
        configurable: !0
      }), g;
    }(l)
  );
  K.Document = p;
  var u = (
    /** @class */
    function(h) {
      e(g, h);
      function g(y, k, P, D) {
        P === void 0 && (P = []), D === void 0 && (D = y === "script" ? t.ElementType.Script : y === "style" ? t.ElementType.Style : t.ElementType.Tag);
        var j = h.call(this, P) || this;
        return j.name = y, j.attribs = k, j.type = D, j;
      }
      return Object.defineProperty(g.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(g.prototype, "tagName", {
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
      }), Object.defineProperty(g.prototype, "attributes", {
        get: function() {
          var y = this;
          return Object.keys(this.attribs).map(function(k) {
            var P, D;
            return {
              name: k,
              value: y.attribs[k],
              namespace: (P = y["x-attribsNamespace"]) === null || P === void 0 ? void 0 : P[k],
              prefix: (D = y["x-attribsPrefix"]) === null || D === void 0 ? void 0 : D[k]
            };
          });
        },
        enumerable: !1,
        configurable: !0
      }), g;
    }(l)
  );
  K.Element = u;
  function f(h) {
    return (0, t.isTag)(h);
  }
  K.isTag = f;
  function m(h) {
    return h.type === t.ElementType.CDATA;
  }
  K.isCDATA = m;
  function w(h) {
    return h.type === t.ElementType.Text;
  }
  K.isText = w;
  function b(h) {
    return h.type === t.ElementType.Comment;
  }
  K.isComment = b;
  function E(h) {
    return h.type === t.ElementType.Directive;
  }
  K.isDirective = E;
  function S(h) {
    return h.type === t.ElementType.Root;
  }
  K.isDocument = S;
  function _(h) {
    return Object.prototype.hasOwnProperty.call(h, "children");
  }
  K.hasChildren = _;
  function C(h, g) {
    g === void 0 && (g = !1);
    var y;
    if (w(h))
      y = new a(h.data);
    else if (b(h))
      y = new s(h.data);
    else if (f(h)) {
      var k = g ? x(h.children) : [], P = new u(h.name, r({}, h.attribs), k);
      k.forEach(function($) {
        return $.parent = P;
      }), h.namespace != null && (P.namespace = h.namespace), h["x-attribsNamespace"] && (P["x-attribsNamespace"] = r({}, h["x-attribsNamespace"])), h["x-attribsPrefix"] && (P["x-attribsPrefix"] = r({}, h["x-attribsPrefix"])), y = P;
    } else if (m(h)) {
      var k = g ? x(h.children) : [], D = new d(k);
      k.forEach(function(z) {
        return z.parent = D;
      }), y = D;
    } else if (S(h)) {
      var k = g ? x(h.children) : [], j = new p(k);
      k.forEach(function(z) {
        return z.parent = j;
      }), h["x-mode"] && (j["x-mode"] = h["x-mode"]), y = j;
    } else if (E(h)) {
      var H = new c(h.name, h.data);
      h["x-name"] != null && (H["x-name"] = h["x-name"], H["x-publicId"] = h["x-publicId"], H["x-systemId"] = h["x-systemId"]), y = H;
    } else
      throw new Error("Not implemented yet: ".concat(h.type));
    return y.startIndex = h.startIndex, y.endIndex = h.endIndex, h.sourceCodeLocation != null && (y.sourceCodeLocation = h.sourceCodeLocation), y;
  }
  K.cloneNode = C;
  function x(h) {
    for (var g = h.map(function(k) {
      return C(k, !0);
    }), y = 1; y < g.length; y++)
      g[y].prev = g[y - 1], g[y - 1].next = g[y];
    return g;
  }
  return K;
}
var Es;
function r2() {
  return Es || (Es = 1, function(e) {
    var r = Bt && Bt.__createBinding || (Object.create ? function(c, l, d, p) {
      p === void 0 && (p = d);
      var u = Object.getOwnPropertyDescriptor(l, d);
      (!u || ("get" in u ? !l.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: function() {
        return l[d];
      } }), Object.defineProperty(c, p, u);
    } : function(c, l, d, p) {
      p === void 0 && (p = d), c[p] = l[d];
    }), t = Bt && Bt.__exportStar || function(c, l) {
      for (var d in c) d !== "default" && !Object.prototype.hasOwnProperty.call(l, d) && r(l, c, d);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
    var o = /* @__PURE__ */ t2(), i = /* @__PURE__ */ As();
    t(/* @__PURE__ */ As(), e);
    var a = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    }, s = (
      /** @class */
      function() {
        function c(l, d, p) {
          this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof d == "function" && (p = d, d = a), typeof l == "object" && (d = l, l = void 0), this.callback = l ?? null, this.options = d ?? a, this.elementCB = p ?? null;
        }
        return c.prototype.onparserinit = function(l) {
          this.parser = l;
        }, c.prototype.onreset = function() {
          this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
        }, c.prototype.onend = function() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, c.prototype.onerror = function(l) {
          this.handleCallback(l);
        }, c.prototype.onclosetag = function() {
          this.lastNode = null;
          var l = this.tagStack.pop();
          this.options.withEndIndices && (l.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(l);
        }, c.prototype.onopentag = function(l, d) {
          var p = this.options.xmlMode ? o.ElementType.Tag : void 0, u = new i.Element(l, d, void 0, p);
          this.addNode(u), this.tagStack.push(u);
        }, c.prototype.ontext = function(l) {
          var d = this.lastNode;
          if (d && d.type === o.ElementType.Text)
            d.data += l, this.options.withEndIndices && (d.endIndex = this.parser.endIndex);
          else {
            var p = new i.Text(l);
            this.addNode(p), this.lastNode = p;
          }
        }, c.prototype.oncomment = function(l) {
          if (this.lastNode && this.lastNode.type === o.ElementType.Comment) {
            this.lastNode.data += l;
            return;
          }
          var d = new i.Comment(l);
          this.addNode(d), this.lastNode = d;
        }, c.prototype.oncommentend = function() {
          this.lastNode = null;
        }, c.prototype.oncdatastart = function() {
          var l = new i.Text(""), d = new i.CDATA([l]);
          this.addNode(d), l.parent = d, this.lastNode = l;
        }, c.prototype.oncdataend = function() {
          this.lastNode = null;
        }, c.prototype.onprocessinginstruction = function(l, d) {
          var p = new i.ProcessingInstruction(l, d);
          this.addNode(p);
        }, c.prototype.handleCallback = function(l) {
          if (typeof this.callback == "function")
            this.callback(l, this.dom);
          else if (l)
            throw l;
        }, c.prototype.addNode = function(l) {
          var d = this.tagStack[this.tagStack.length - 1], p = d.children[d.children.length - 1];
          this.options.withStartIndices && (l.startIndex = this.parser.startIndex), this.options.withEndIndices && (l.endIndex = this.parser.endIndex), d.children.push(l), p && (l.prev = p, p.next = l), l.parent = d, this.lastNode = null;
        }, c;
      }()
    );
    e.DomHandler = s, e.default = s;
  }(Bt)), Bt;
}
var nn = {}, Ss;
function tp() {
  return Ss || (Ss = 1, function(e) {
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
  }(nn)), nn;
}
var Ts;
function o2() {
  if (Ts) return zt;
  Ts = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.formatAttributes = o, zt.escapeSpecialCharacters = a, zt.revertEscapedCharacters = s, zt.formatDOM = c;
  var e = /* @__PURE__ */ r2(), r = tp();
  function t(l) {
    return r.CASE_SENSITIVE_TAG_NAMES_MAP[l];
  }
  function o(l) {
    for (var d = {}, p = 0, u = l.length; p < u; p++) {
      var f = l[p];
      d[f.name] = f.value;
    }
    return d;
  }
  function i(l) {
    l = l.toLowerCase();
    var d = t(l);
    return d || l;
  }
  function a(l) {
    return l.replace(r.CARRIAGE_RETURN_REGEX, r.CARRIAGE_RETURN_PLACEHOLDER);
  }
  function s(l) {
    return l.replace(r.CARRIAGE_RETURN_PLACEHOLDER_REGEX, r.CARRIAGE_RETURN);
  }
  function c(l, d, p) {
    d === void 0 && (d = null);
    for (var u = [], f, m = 0, w = l.length; m < w; m++) {
      var b = l[m];
      switch (b.nodeType) {
        case 1: {
          var E = i(b.nodeName);
          f = new e.Element(E, o(b.attributes)), f.children = c(
            // template children are on content
            E === "template" ? b.content.childNodes : b.childNodes,
            f
          );
          break;
        }
        case 3:
          f = new e.Text(s(b.nodeValue));
          break;
        case 8:
          f = new e.Comment(b.nodeValue);
          break;
        default:
          continue;
      }
      var S = u[m - 1] || null;
      S && (S.next = f), f.parent = d, f.prev = S, f.next = null, u.push(f);
    }
    return p && (f = new e.ProcessingInstruction(p.substring(0, p.indexOf(" ")).toLowerCase(), p), f.next = u[0] || null, f.parent = d, u.unshift(f), u[1] && (u[1].prev = u[0])), u;
  }
  return zt;
}
var Ns;
function rp() {
  if (Ns) return yo;
  Ns = 1, Object.defineProperty(yo, "__esModule", { value: !0 }), yo.default = b;
  var e = o2(), r = "html", t = "head", o = "body", i = /<([a-zA-Z]+[0-9]?)/, a = /<head[^]*>/i, s = /<body[^]*>/i, c = function(E, S) {
    throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
  }, l = function(E, S) {
    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
  }, d = typeof window == "object" && window.DOMParser;
  if (typeof d == "function") {
    var p = new d(), u = "text/html";
    l = function(E, S) {
      return S && (E = "<".concat(S, ">").concat(E, "</").concat(S, ">")), p.parseFromString(E, u);
    }, c = l;
  }
  if (typeof document == "object" && document.implementation) {
    var f = document.implementation.createHTMLDocument();
    c = function(E, S) {
      if (S) {
        var _ = f.documentElement.querySelector(S);
        return _ && (_.innerHTML = E), f;
      }
      return f.documentElement.innerHTML = E, f;
    };
  }
  var m = typeof document == "object" && document.createElement("template"), w;
  m && m.content && (w = function(E) {
    return m.innerHTML = E, m.content.childNodes;
  });
  function b(E) {
    var S, _;
    E = (0, e.escapeSpecialCharacters)(E);
    var C = E.match(i), x = C && C[1] ? C[1].toLowerCase() : "";
    switch (x) {
      case r: {
        var h = l(E);
        if (!a.test(E)) {
          var g = h.querySelector(t);
          (S = g == null ? void 0 : g.parentNode) === null || S === void 0 || S.removeChild(g);
        }
        if (!s.test(E)) {
          var g = h.querySelector(o);
          (_ = g == null ? void 0 : g.parentNode) === null || _ === void 0 || _.removeChild(g);
        }
        return h.querySelectorAll(r);
      }
      case t:
      case o: {
        var y = c(E).querySelectorAll(x);
        return s.test(E) && a.test(E) ? y[0].parentNode.childNodes : y;
      }
      // low-level tag or text
      default: {
        if (w)
          return w(E);
        var g = c(E, o).querySelector(o);
        return g.childNodes;
      }
    }
  }
  return yo;
}
var Ls;
function op() {
  if (Ls) return tr;
  Ls = 1;
  var e = tr && tr.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(tr, "__esModule", { value: !0 }), tr.default = i;
  var r = e(rp()), t = o2(), o = /<(![a-zA-Z\s]+)>/;
  function i(a) {
    if (typeof a != "string")
      throw new TypeError("First argument must be a string");
    if (!a)
      return [];
    var s = a.match(o), c = s ? s[1] : void 0;
    return (0, t.formatDOM)((0, r.default)(a), null, c);
  }
  return tr;
}
var wo = {}, Xe = {}, Er = {}, Rs;
function ip() {
  if (Rs) return Er;
  Rs = 1;
  var e = 0;
  Er.SAME = e;
  var r = 1;
  return Er.CAMELCASE = r, Er.possibleStandardNames = {
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
  }, Er;
}
var Ms;
function np() {
  if (Ms) return Xe;
  Ms = 1;
  const e = 0, r = 1, t = 2, o = 3, i = 4, a = 5, s = 6;
  function c(h) {
    return d.hasOwnProperty(h) ? d[h] : null;
  }
  function l(h, g, y, k, P, D, j) {
    this.acceptsBooleans = g === t || g === o || g === i, this.attributeName = k, this.attributeNamespace = P, this.mustUseProperty = y, this.propertyName = h, this.type = g, this.sanitizeURL = D, this.removeEmptyString = j;
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
  ].forEach((h) => {
    d[h] = new l(
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
  ].forEach(([h, g]) => {
    d[h] = new l(
      h,
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
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach((h) => {
    d[h] = new l(
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
    d[h] = new l(
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
    d[h] = new l(
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
    d[h] = new l(
      h,
      o,
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
    d[h] = new l(
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
    d[h] = new l(
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
    d[h] = new l(
      h,
      a,
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
  const u = /[\-\:]([a-z])/g, f = (h) => h[1].toUpperCase();
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
    const g = h.replace(u, f);
    d[g] = new l(
      g,
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
    const g = h.replace(u, f);
    d[g] = new l(
      g,
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
    const g = h.replace(u, f);
    d[g] = new l(
      g,
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
    d[h] = new l(
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
  const m = "xlinkHref";
  d[m] = new l(
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
    d[h] = new l(
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
    CAMELCASE: w,
    SAME: b,
    possibleStandardNames: E
  } = ip(), _ = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD" + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", C = RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp("^(data|aria)-[" + _ + "]*$")
  ), x = Object.keys(
    E
  ).reduce((h, g) => {
    const y = E[g];
    return y === b ? h[g] = g : y === w ? h[g.toLowerCase()] = g : h[g] = y, h;
  }, {});
  return Xe.BOOLEAN = o, Xe.BOOLEANISH_STRING = t, Xe.NUMERIC = a, Xe.OVERLOADED_BOOLEAN = i, Xe.POSITIVE_NUMERIC = s, Xe.RESERVED = e, Xe.STRING = r, Xe.getPropertyInfo = c, Xe.isCustomAttribute = C, Xe.possibleStandardNames = x, Xe;
}
var Sr = {};
const i2 = /* @__PURE__ */ s5(r5);
var rr = {}, an, Is;
function ap() {
  if (Is) return an;
  Is = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, t = /^\s*/, o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, s = /^[;\s]*/, c = /^\s+|\s+$/g, l = `
`, d = "/", p = "*", u = "", f = "comment", m = "declaration";
  an = function(b, E) {
    if (typeof b != "string")
      throw new TypeError("First argument must be a string");
    if (!b) return [];
    E = E || {};
    var S = 1, _ = 1;
    function C($) {
      var z = $.match(r);
      z && (S += z.length);
      var se = $.lastIndexOf(l);
      _ = ~se ? $.length - se : _ + $.length;
    }
    function x() {
      var $ = { line: S, column: _ };
      return function(z) {
        return z.position = new h($), k(), z;
      };
    }
    function h($) {
      this.start = $, this.end = { line: S, column: _ }, this.source = E.source;
    }
    h.prototype.content = b;
    function g($) {
      var z = new Error(
        E.source + ":" + S + ":" + _ + ": " + $
      );
      if (z.reason = $, z.filename = E.source, z.line = S, z.column = _, z.source = b, !E.silent) throw z;
    }
    function y($) {
      var z = $.exec(b);
      if (z) {
        var se = z[0];
        return C(se), b = b.slice(se.length), z;
      }
    }
    function k() {
      y(t);
    }
    function P($) {
      var z;
      for ($ = $ || []; z = D(); )
        z !== !1 && $.push(z);
      return $;
    }
    function D() {
      var $ = x();
      if (!(d != b.charAt(0) || p != b.charAt(1))) {
        for (var z = 2; u != b.charAt(z) && (p != b.charAt(z) || d != b.charAt(z + 1)); )
          ++z;
        if (z += 2, u === b.charAt(z - 1))
          return g("End of comment missing");
        var se = b.slice(2, z - 2);
        return _ += 2, C(se), b = b.slice(z), _ += 2, $({
          type: f,
          comment: se
        });
      }
    }
    function j() {
      var $ = x(), z = y(o);
      if (z) {
        if (D(), !y(i)) return g("property missing ':'");
        var se = y(a), _e = $({
          type: m,
          property: w(z[0].replace(e, u)),
          value: se ? w(se[0].replace(e, u)) : u
        });
        return y(s), _e;
      }
    }
    function H() {
      var $ = [];
      P($);
      for (var z; z = j(); )
        z !== !1 && ($.push(z), P($));
      return $;
    }
    return k(), H();
  };
  function w(b) {
    return b ? b.replace(c, u) : u;
  }
  return an;
}
var Os;
function sp() {
  if (Os) return rr;
  Os = 1;
  var e = rr && rr.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(rr, "__esModule", { value: !0 }), rr.default = t;
  var r = e(ap());
  function t(o, i) {
    var a = null;
    if (!o || typeof o != "string")
      return a;
    var s = (0, r.default)(o), c = typeof i == "function";
    return s.forEach(function(l) {
      if (l.type === "declaration") {
        var d = l.property, p = l.value;
        c ? i(d, p, l) : p && (a = a || {}, a[d] = p);
      }
    }), a;
  }
  return rr;
}
var Tr = {}, Ps;
function lp() {
  if (Ps) return Tr;
  Ps = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, t = /^[^-]+$/, o = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, a = function(d) {
    return !d || t.test(d) || e.test(d);
  }, s = function(d, p) {
    return p.toUpperCase();
  }, c = function(d, p) {
    return "".concat(p, "-");
  }, l = function(d, p) {
    return p === void 0 && (p = {}), a(d) ? d : (d = d.toLowerCase(), p.reactCompat ? d = d.replace(i, c) : d = d.replace(o, c), d.replace(r, s));
  };
  return Tr.camelCase = l, Tr;
}
var Nr, Ds;
function cp() {
  if (Ds) return Nr;
  Ds = 1;
  var e = Nr && Nr.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, r = e(sp()), t = lp();
  function o(i, a) {
    var s = {};
    return !i || typeof i != "string" || (0, r.default)(i, function(c, l) {
      c && l && (s[(0, t.camelCase)(c, a)] = l);
    }), s;
  }
  return o.default = o, Nr = o, Nr;
}
var Hs;
function n2() {
  return Hs || (Hs = 1, function(e) {
    var r = Sr && Sr.__importDefault || function(p) {
      return p && p.__esModule ? p : { default: p };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = a, e.setStyleProp = c;
    var t = i2, o = r(cp()), i = /* @__PURE__ */ new Set([
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
      return p.includes("-") ? !i.has(p) : !!(u && typeof u.is == "string");
    }
    var s = {
      reactCompat: !0
    };
    function c(p, u) {
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
    var l = function(p) {
      return !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(p.name);
    };
    e.canTextBeChildOfNode = l;
    var d = function(p) {
      return p;
    };
    e.returnFirstArg = d;
  }(Sr)), Sr;
}
var zs;
function a2() {
  if (zs) return wo;
  zs = 1, Object.defineProperty(wo, "__esModule", { value: !0 }), wo.default = a;
  var e = np(), r = n2(), t = ["checked", "value"], o = ["input", "select", "textarea"], i = {
    reset: !0,
    submit: !0
  };
  function a(c, l) {
    c === void 0 && (c = {});
    var d = {}, p = !!(c.type && i[c.type]);
    for (var u in c) {
      var f = c[u];
      if ((0, e.isCustomAttribute)(u)) {
        d[u] = f;
        continue;
      }
      var m = u.toLowerCase(), w = s(m);
      if (w) {
        var b = (0, e.getPropertyInfo)(w);
        switch (t.includes(w) && o.includes(l) && !p && (w = s("default" + m)), d[w] = f, b && b.type) {
          case e.BOOLEAN:
            d[w] = !0;
            break;
          case e.OVERLOADED_BOOLEAN:
            f === "" && (d[w] = !0);
            break;
        }
        continue;
      }
      r.PRESERVE_CUSTOM_ATTRIBUTES && (d[u] = f);
    }
    return (0, r.setStyleProp)(c.style, d), d;
  }
  function s(c) {
    return e.possibleStandardNames[c];
  }
  return wo;
}
var or = {}, Bs;
function dp() {
  if (Bs) return or;
  Bs = 1;
  var e = or && or.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(or, "__esModule", { value: !0 }), or.default = a;
  var r = i2, t = e(a2()), o = n2(), i = {
    cloneElement: r.cloneElement,
    createElement: r.createElement,
    isValidElement: r.isValidElement
  };
  function a(c, l) {
    l === void 0 && (l = {});
    for (var d = [], p = typeof l.replace == "function", u = l.transform || o.returnFirstArg, f = l.library || i, m = f.cloneElement, w = f.createElement, b = f.isValidElement, E = c.length, S = 0; S < E; S++) {
      var _ = c[S];
      if (p) {
        var C = l.replace(_, S);
        if (b(C)) {
          E > 1 && (C = m(C, {
            key: C.key || S
          })), d.push(u(C, _, S));
          continue;
        }
      }
      if (_.type === "text") {
        var x = !_.data.trim().length;
        if (x && _.parent && !(0, o.canTextBeChildOfNode)(_.parent) || l.trim && x)
          continue;
        d.push(u(_.data, _, S));
        continue;
      }
      var h = _, g = {};
      s(h) ? ((0, o.setStyleProp)(h.attribs.style, h.attribs), g = h.attribs) : h.attribs && (g = (0, t.default)(h.attribs, h.name));
      var y = void 0;
      switch (_.type) {
        case "script":
        case "style":
          _.children[0] && (g.dangerouslySetInnerHTML = {
            __html: _.children[0].data
          });
          break;
        case "tag":
          _.name === "textarea" && _.children[0] ? g.defaultValue = _.children[0].data : _.children && _.children.length && (y = a(_.children, l));
          break;
        // skip all other cases (e.g., comment)
        default:
          continue;
      }
      E > 1 && (g.key = S), d.push(u(w(_.name, g, y), _, S));
    }
    return d.length === 1 ? d[0] : d;
  }
  function s(c) {
    return o.PRESERVE_CUSTOM_ATTRIBUTES && c.type === "tag" && (0, o.isCustomComponent)(c.name, c.attribs);
  }
  return or;
}
var Fs;
function up() {
  return Fs || (Fs = 1, function(e) {
    var r = Ar && Ar.__importDefault || function(l) {
      return l && l.__esModule ? l : { default: l };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = c;
    var t = r(op());
    e.htmlToDOM = t.default;
    var o = r(a2());
    e.attributesToProps = o.default;
    var i = r(dp());
    e.domToReact = i.default;
    var a = /* @__PURE__ */ r2();
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
    function c(l, d) {
      if (typeof l != "string")
        throw new TypeError("First argument must be a string");
      return l ? (0, i.default)((0, t.default)(l, (d == null ? void 0 : d.htmlparser2) || s), d) : [];
    }
  }(Ar)), Ar;
}
var s2 = up();
const $s = /* @__PURE__ */ uc(s2), pp = $s.default || $s;
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
const {
  entries: l2,
  setPrototypeOf: Us,
  isFrozen: hp,
  getPrototypeOf: fp,
  getOwnPropertyDescriptor: gp
} = Object;
let {
  freeze: Be,
  seal: Qe,
  create: c2
} = Object, {
  apply: Wn,
  construct: Xn
} = typeof Reflect < "u" && Reflect;
Be || (Be = function(r) {
  return r;
});
Qe || (Qe = function(r) {
  return r;
});
Wn || (Wn = function(r, t, o) {
  return r.apply(t, o);
});
Xn || (Xn = function(r, t) {
  return new r(...t);
});
const _o = Fe(Array.prototype.forEach), mp = Fe(Array.prototype.lastIndexOf), Vs = Fe(Array.prototype.pop), Lr = Fe(Array.prototype.push), vp = Fe(Array.prototype.splice), To = Fe(String.prototype.toLowerCase), sn = Fe(String.prototype.toString), js = Fe(String.prototype.match), Rr = Fe(String.prototype.replace), bp = Fe(String.prototype.indexOf), Cp = Fe(String.prototype.trim), ot = Fe(Object.prototype.hasOwnProperty), ze = Fe(RegExp.prototype.test), Mr = yp(TypeError);
function Fe(e) {
  return function(r) {
    r instanceof RegExp && (r.lastIndex = 0);
    for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      o[i - 1] = arguments[i];
    return Wn(e, r, o);
  };
}
function yp(e) {
  return function() {
    for (var r = arguments.length, t = new Array(r), o = 0; o < r; o++)
      t[o] = arguments[o];
    return Xn(e, t);
  };
}
function re(e, r) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : To;
  Us && Us(e, null);
  let o = r.length;
  for (; o--; ) {
    let i = r[o];
    if (typeof i == "string") {
      const a = t(i);
      a !== i && (hp(r) || (r[o] = a), i = a);
    }
    e[i] = !0;
  }
  return e;
}
function wp(e) {
  for (let r = 0; r < e.length; r++)
    ot(e, r) || (e[r] = null);
  return e;
}
function Ut(e) {
  const r = c2(null);
  for (const [t, o] of l2(e))
    ot(e, t) && (Array.isArray(o) ? r[t] = wp(o) : o && typeof o == "object" && o.constructor === Object ? r[t] = Ut(o) : r[t] = o);
  return r;
}
function Ir(e, r) {
  for (; e !== null; ) {
    const o = gp(e, r);
    if (o) {
      if (o.get)
        return Fe(o.get);
      if (typeof o.value == "function")
        return Fe(o.value);
    }
    e = fp(e);
  }
  function t() {
    return null;
  }
  return t;
}
const Gs = Be(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ln = Be(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), cn = Be(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _p = Be(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), dn = Be(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), xp = Be(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qs = Be(["#text"]), Zs = Be(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), un = Be(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ws = Be(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), xo = Be(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), kp = Qe(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ap = Qe(/<%[\w\W]*|[\w\W]*%>/gm), Ep = Qe(/\$\{[\w\W]*/gm), Sp = Qe(/^data-[\-\w.\u00B7-\uFFFF]+$/), Tp = Qe(/^aria-[\-\w]+$/), d2 = Qe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Np = Qe(/^(?:\w+script|data):/i), Lp = Qe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), u2 = Qe(/^html$/i), Rp = Qe(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Xs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Tp,
  ATTR_WHITESPACE: Lp,
  CUSTOM_ELEMENT: Rp,
  DATA_ATTR: Sp,
  DOCTYPE_NAME: u2,
  ERB_EXPR: Ap,
  IS_ALLOWED_URI: d2,
  IS_SCRIPT_OR_DATA: Np,
  MUSTACHE_EXPR: kp,
  TMPLIT_EXPR: Ep
});
const Or = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Mp = function() {
  return typeof window > "u" ? null : window;
}, Ip = function(r, t) {
  if (typeof r != "object" || typeof r.createPolicy != "function")
    return null;
  let o = null;
  const i = "data-tt-policy-suffix";
  t && t.hasAttribute(i) && (o = t.getAttribute(i));
  const a = "dompurify" + (o ? "#" + o : "");
  try {
    return r.createPolicy(a, {
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
}, Ys = function() {
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
function p2() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mp();
  const r = (q) => p2(q);
  if (r.version = "3.2.5", r.removed = [], !e || !e.document || e.document.nodeType !== Or.document || !e.Element)
    return r.isSupported = !1, r;
  let {
    document: t
  } = e;
  const o = t, i = o.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: s,
    Node: c,
    Element: l,
    NodeFilter: d,
    NamedNodeMap: p = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: f,
    trustedTypes: m
  } = e, w = l.prototype, b = Ir(w, "cloneNode"), E = Ir(w, "remove"), S = Ir(w, "nextSibling"), _ = Ir(w, "childNodes"), C = Ir(w, "parentNode");
  if (typeof s == "function") {
    const q = t.createElement("template");
    q.content && q.content.ownerDocument && (t = q.content.ownerDocument);
  }
  let x, h = "";
  const {
    implementation: g,
    createNodeIterator: y,
    createDocumentFragment: k,
    getElementsByTagName: P
  } = t, {
    importNode: D
  } = o;
  let j = Ys();
  r.isSupported = typeof l2 == "function" && typeof C == "function" && g && g.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: H,
    ERB_EXPR: $,
    TMPLIT_EXPR: z,
    DATA_ATTR: se,
    ARIA_ATTR: _e,
    IS_SCRIPT_OR_DATA: Le,
    ATTR_WHITESPACE: U,
    CUSTOM_ELEMENT: De
  } = Xs;
  let {
    IS_ALLOWED_URI: st
  } = Xs, ee = null;
  const rt = re({}, [...Gs, ...ln, ...cn, ...dn, ...qs]);
  let X = null;
  const me = re({}, [...Zs, ...un, ...Ws, ...xo]);
  let ie = Object.seal(c2(null, {
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
  })), ae = null, ne = null, lt = !0, ye = !0, oe = !1, ce = !0, te = !1, ve = !0, xe = !1, qe = !1, ke = !1, Ae = !1, Ie = !1, Ze = !1, Ge = !0, Se = !1;
  const ct = "user-content-";
  let We = !0, dt = !1, Xt = {}, Yt = null;
  const O1 = re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let P1 = null;
  const D1 = re({}, ["audio", "video", "img", "source", "image", "track"]);
  let Go = null;
  const H1 = re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), so = "http://www.w3.org/1998/Math/MathML", lo = "http://www.w3.org/2000/svg", bt = "http://www.w3.org/1999/xhtml";
  let Kt = bt, qo = !1, Zo = null;
  const k2 = re({}, [so, lo, bt], sn);
  let co = re({}, ["mi", "mo", "mn", "ms", "mtext"]), uo = re({}, ["annotation-xml"]);
  const A2 = re({}, ["title", "style", "font", "a", "script"]);
  let _r = null;
  const E2 = ["application/xhtml+xml", "text/html"], S2 = "text/html";
  let Re = null, Jt = null;
  const T2 = t.createElement("form"), z1 = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, Wo = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Jt && Jt === v)) {
      if ((!v || typeof v != "object") && (v = {}), v = Ut(v), _r = // eslint-disable-next-line unicorn/prefer-includes
      E2.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? S2 : v.PARSER_MEDIA_TYPE, Re = _r === "application/xhtml+xml" ? sn : To, ee = ot(v, "ALLOWED_TAGS") ? re({}, v.ALLOWED_TAGS, Re) : rt, X = ot(v, "ALLOWED_ATTR") ? re({}, v.ALLOWED_ATTR, Re) : me, Zo = ot(v, "ALLOWED_NAMESPACES") ? re({}, v.ALLOWED_NAMESPACES, sn) : k2, Go = ot(v, "ADD_URI_SAFE_ATTR") ? re(Ut(H1), v.ADD_URI_SAFE_ATTR, Re) : H1, P1 = ot(v, "ADD_DATA_URI_TAGS") ? re(Ut(D1), v.ADD_DATA_URI_TAGS, Re) : D1, Yt = ot(v, "FORBID_CONTENTS") ? re({}, v.FORBID_CONTENTS, Re) : O1, ae = ot(v, "FORBID_TAGS") ? re({}, v.FORBID_TAGS, Re) : {}, ne = ot(v, "FORBID_ATTR") ? re({}, v.FORBID_ATTR, Re) : {}, Xt = ot(v, "USE_PROFILES") ? v.USE_PROFILES : !1, lt = v.ALLOW_ARIA_ATTR !== !1, ye = v.ALLOW_DATA_ATTR !== !1, oe = v.ALLOW_UNKNOWN_PROTOCOLS || !1, ce = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = v.SAFE_FOR_TEMPLATES || !1, ve = v.SAFE_FOR_XML !== !1, xe = v.WHOLE_DOCUMENT || !1, Ae = v.RETURN_DOM || !1, Ie = v.RETURN_DOM_FRAGMENT || !1, Ze = v.RETURN_TRUSTED_TYPE || !1, ke = v.FORCE_BODY || !1, Ge = v.SANITIZE_DOM !== !1, Se = v.SANITIZE_NAMED_PROPS || !1, We = v.KEEP_CONTENT !== !1, dt = v.IN_PLACE || !1, st = v.ALLOWED_URI_REGEXP || d2, Kt = v.NAMESPACE || bt, co = v.MATHML_TEXT_INTEGRATION_POINTS || co, uo = v.HTML_INTEGRATION_POINTS || uo, ie = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && z1(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ie.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && z1(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ie.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ie.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), te && (ye = !1), Ie && (Ae = !0), Xt && (ee = re({}, qs), X = [], Xt.html === !0 && (re(ee, Gs), re(X, Zs)), Xt.svg === !0 && (re(ee, ln), re(X, un), re(X, xo)), Xt.svgFilters === !0 && (re(ee, cn), re(X, un), re(X, xo)), Xt.mathMl === !0 && (re(ee, dn), re(X, Ws), re(X, xo))), v.ADD_TAGS && (ee === rt && (ee = Ut(ee)), re(ee, v.ADD_TAGS, Re)), v.ADD_ATTR && (X === me && (X = Ut(X)), re(X, v.ADD_ATTR, Re)), v.ADD_URI_SAFE_ATTR && re(Go, v.ADD_URI_SAFE_ATTR, Re), v.FORBID_CONTENTS && (Yt === O1 && (Yt = Ut(Yt)), re(Yt, v.FORBID_CONTENTS, Re)), We && (ee["#text"] = !0), xe && re(ee, ["html", "head", "body"]), ee.table && (re(ee, ["tbody"]), delete ae.tbody), v.TRUSTED_TYPES_POLICY) {
        if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Mr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Mr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = v.TRUSTED_TYPES_POLICY, h = x.createHTML("");
      } else
        x === void 0 && (x = Ip(m, i)), x !== null && typeof h == "string" && (h = x.createHTML(""));
      Be && Be(v), Jt = v;
    }
  }, B1 = re({}, [...ln, ...cn, ..._p]), F1 = re({}, [...dn, ...xp]), N2 = function(v) {
    let I = C(v);
    (!I || !I.tagName) && (I = {
      namespaceURI: Kt,
      tagName: "template"
    });
    const V = To(v.tagName), ge = To(I.tagName);
    return Zo[v.namespaceURI] ? v.namespaceURI === lo ? I.namespaceURI === bt ? V === "svg" : I.namespaceURI === so ? V === "svg" && (ge === "annotation-xml" || co[ge]) : !!B1[V] : v.namespaceURI === so ? I.namespaceURI === bt ? V === "math" : I.namespaceURI === lo ? V === "math" && uo[ge] : !!F1[V] : v.namespaceURI === bt ? I.namespaceURI === lo && !uo[ge] || I.namespaceURI === so && !co[ge] ? !1 : !F1[V] && (A2[V] || !B1[V]) : !!(_r === "application/xhtml+xml" && Zo[v.namespaceURI]) : !1;
  }, ut = function(v) {
    Lr(r.removed, {
      element: v
    });
    try {
      C(v).removeChild(v);
    } catch {
      E(v);
    }
  }, po = function(v, I) {
    try {
      Lr(r.removed, {
        attribute: I.getAttributeNode(v),
        from: I
      });
    } catch {
      Lr(r.removed, {
        attribute: null,
        from: I
      });
    }
    if (I.removeAttribute(v), v === "is")
      if (Ae || Ie)
        try {
          ut(I);
        } catch {
        }
      else
        try {
          I.setAttribute(v, "");
        } catch {
        }
  }, $1 = function(v) {
    let I = null, V = null;
    if (ke)
      v = "<remove></remove>" + v;
    else {
      const Oe = js(v, /^[\r\n\t ]+/);
      V = Oe && Oe[0];
    }
    _r === "application/xhtml+xml" && Kt === bt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const ge = x ? x.createHTML(v) : v;
    if (Kt === bt)
      try {
        I = new f().parseFromString(ge, _r);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = g.createDocument(Kt, "template", null);
      try {
        I.documentElement.innerHTML = qo ? h : ge;
      } catch {
      }
    }
    const Pe = I.body || I.documentElement;
    return v && V && Pe.insertBefore(t.createTextNode(V), Pe.childNodes[0] || null), Kt === bt ? P.call(I, xe ? "html" : "body")[0] : xe ? I.documentElement : Pe;
  }, U1 = function(v) {
    return y.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Xo = function(v) {
    return v instanceof u && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof p) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
  }, V1 = function(v) {
    return typeof c == "function" && v instanceof c;
  };
  function Ct(q, v, I) {
    _o(q, (V) => {
      V.call(r, v, I, Jt);
    });
  }
  const j1 = function(v) {
    let I = null;
    if (Ct(j.beforeSanitizeElements, v, null), Xo(v))
      return ut(v), !0;
    const V = Re(v.nodeName);
    if (Ct(j.uponSanitizeElement, v, {
      tagName: V,
      allowedTags: ee
    }), v.hasChildNodes() && !V1(v.firstElementChild) && ze(/<[/\w!]/g, v.innerHTML) && ze(/<[/\w!]/g, v.textContent) || v.nodeType === Or.progressingInstruction || ve && v.nodeType === Or.comment && ze(/<[/\w]/g, v.data))
      return ut(v), !0;
    if (!ee[V] || ae[V]) {
      if (!ae[V] && q1(V) && (ie.tagNameCheck instanceof RegExp && ze(ie.tagNameCheck, V) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(V)))
        return !1;
      if (We && !Yt[V]) {
        const ge = C(v) || v.parentNode, Pe = _(v) || v.childNodes;
        if (Pe && ge) {
          const Oe = Pe.length;
          for (let $e = Oe - 1; $e >= 0; --$e) {
            const pt = b(Pe[$e], !0);
            pt.__removalCount = (v.__removalCount || 0) + 1, ge.insertBefore(pt, S(v));
          }
        }
      }
      return ut(v), !0;
    }
    return v instanceof l && !N2(v) || (V === "noscript" || V === "noembed" || V === "noframes") && ze(/<\/no(script|embed|frames)/i, v.innerHTML) ? (ut(v), !0) : (te && v.nodeType === Or.text && (I = v.textContent, _o([H, $, z], (ge) => {
      I = Rr(I, ge, " ");
    }), v.textContent !== I && (Lr(r.removed, {
      element: v.cloneNode()
    }), v.textContent = I)), Ct(j.afterSanitizeElements, v, null), !1);
  }, G1 = function(v, I, V) {
    if (Ge && (I === "id" || I === "name") && (V in t || V in T2))
      return !1;
    if (!(ye && !ne[I] && ze(se, I))) {
      if (!(lt && ze(_e, I))) {
        if (!X[I] || ne[I]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(q1(v) && (ie.tagNameCheck instanceof RegExp && ze(ie.tagNameCheck, v) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(v)) && (ie.attributeNameCheck instanceof RegExp && ze(ie.attributeNameCheck, I) || ie.attributeNameCheck instanceof Function && ie.attributeNameCheck(I)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            I === "is" && ie.allowCustomizedBuiltInElements && (ie.tagNameCheck instanceof RegExp && ze(ie.tagNameCheck, V) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(V)))
          ) return !1;
        } else if (!Go[I]) {
          if (!ze(st, Rr(V, U, ""))) {
            if (!((I === "src" || I === "xlink:href" || I === "href") && v !== "script" && bp(V, "data:") === 0 && P1[v])) {
              if (!(oe && !ze(Le, Rr(V, U, "")))) {
                if (V)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, q1 = function(v) {
    return v !== "annotation-xml" && js(v, De);
  }, Z1 = function(v) {
    Ct(j.beforeSanitizeAttributes, v, null);
    const {
      attributes: I
    } = v;
    if (!I || Xo(v))
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: X,
      forceKeepAttr: void 0
    };
    let ge = I.length;
    for (; ge--; ) {
      const Pe = I[ge], {
        name: Oe,
        namespaceURI: $e,
        value: pt
      } = Pe, xr = Re(Oe);
      let He = Oe === "value" ? pt : Cp(pt);
      if (V.attrName = xr, V.attrValue = He, V.keepAttr = !0, V.forceKeepAttr = void 0, Ct(j.uponSanitizeAttribute, v, V), He = V.attrValue, Se && (xr === "id" || xr === "name") && (po(Oe, v), He = ct + He), ve && ze(/((--!?|])>)|<\/(style|title)/i, He)) {
        po(Oe, v);
        continue;
      }
      if (V.forceKeepAttr || (po(Oe, v), !V.keepAttr))
        continue;
      if (!ce && ze(/\/>/i, He)) {
        po(Oe, v);
        continue;
      }
      te && _o([H, $, z], (X1) => {
        He = Rr(He, X1, " ");
      });
      const W1 = Re(v.nodeName);
      if (G1(W1, xr, He)) {
        if (x && typeof m == "object" && typeof m.getAttributeType == "function" && !$e)
          switch (m.getAttributeType(W1, xr)) {
            case "TrustedHTML": {
              He = x.createHTML(He);
              break;
            }
            case "TrustedScriptURL": {
              He = x.createScriptURL(He);
              break;
            }
          }
        try {
          $e ? v.setAttributeNS($e, Oe, He) : v.setAttribute(Oe, He), Xo(v) ? ut(v) : Vs(r.removed);
        } catch {
        }
      }
    }
    Ct(j.afterSanitizeAttributes, v, null);
  }, L2 = function q(v) {
    let I = null;
    const V = U1(v);
    for (Ct(j.beforeSanitizeShadowDOM, v, null); I = V.nextNode(); )
      Ct(j.uponSanitizeShadowNode, I, null), j1(I), Z1(I), I.content instanceof a && q(I.content);
    Ct(j.afterSanitizeShadowDOM, v, null);
  };
  return r.sanitize = function(q) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, V = null, ge = null, Pe = null;
    if (qo = !q, qo && (q = "<!-->"), typeof q != "string" && !V1(q))
      if (typeof q.toString == "function") {
        if (q = q.toString(), typeof q != "string")
          throw Mr("dirty is not a string, aborting");
      } else
        throw Mr("toString is not a function");
    if (!r.isSupported)
      return q;
    if (qe || Wo(v), r.removed = [], typeof q == "string" && (dt = !1), dt) {
      if (q.nodeName) {
        const pt = Re(q.nodeName);
        if (!ee[pt] || ae[pt])
          throw Mr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (q instanceof c)
      I = $1("<!---->"), V = I.ownerDocument.importNode(q, !0), V.nodeType === Or.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? I = V : I.appendChild(V);
    else {
      if (!Ae && !te && !xe && // eslint-disable-next-line unicorn/prefer-includes
      q.indexOf("<") === -1)
        return x && Ze ? x.createHTML(q) : q;
      if (I = $1(q), !I)
        return Ae ? null : Ze ? h : "";
    }
    I && ke && ut(I.firstChild);
    const Oe = U1(dt ? q : I);
    for (; ge = Oe.nextNode(); )
      j1(ge), Z1(ge), ge.content instanceof a && L2(ge.content);
    if (dt)
      return q;
    if (Ae) {
      if (Ie)
        for (Pe = k.call(I.ownerDocument); I.firstChild; )
          Pe.appendChild(I.firstChild);
      else
        Pe = I;
      return (X.shadowroot || X.shadowrootmode) && (Pe = D.call(o, Pe, !0)), Pe;
    }
    let $e = xe ? I.outerHTML : I.innerHTML;
    return xe && ee["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && ze(u2, I.ownerDocument.doctype.name) && ($e = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + $e), te && _o([H, $, z], (pt) => {
      $e = Rr($e, pt, " ");
    }), x && Ze ? x.createHTML($e) : $e;
  }, r.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wo(q), qe = !0;
  }, r.clearConfig = function() {
    Jt = null, qe = !1;
  }, r.isValidAttribute = function(q, v, I) {
    Jt || Wo({});
    const V = Re(q), ge = Re(v);
    return G1(V, ge, I);
  }, r.addHook = function(q, v) {
    typeof v == "function" && Lr(j[q], v);
  }, r.removeHook = function(q, v) {
    if (v !== void 0) {
      const I = mp(j[q], v);
      return I === -1 ? void 0 : vp(j[q], I, 1)[0];
    }
    return Vs(j[q]);
  }, r.removeHooks = function(q) {
    j[q] = [];
  }, r.removeAllHooks = function() {
    j = Ys();
  }, r;
}
var Op = p2(), pn = { exports: {} }, Ks;
function Pp() {
  return Ks || (Ks = 1, function(e) {
    function r(t, o) {
      if (o && o.documentElement)
        t = o, o = arguments[2];
      else if (!t || !t.documentElement)
        throw new Error(
          "First argument to Readability constructor should be a document object."
        );
      if (o = o || {}, this._doc = t, this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__, this._articleTitle = null, this._articleByline = null, this._articleDir = null, this._articleSiteName = null, this._attempts = [], this._metadata = {}, this._debug = !!o.debug, this._maxElemsToParse = o.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE, this._nbTopCandidates = o.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES, this._charThreshold = o.charThreshold || this.DEFAULT_CHAR_THRESHOLD, this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(
        o.classesToPreserve || []
      ), this._keepClasses = !!o.keepClasses, this._serializer = o.serializer || function(i) {
        return i.innerHTML;
      }, this._disableJSONLD = !!o.disableJSONLD, this._allowedVideoRegex = o.allowedVideoRegex || this.REGEXPS.videos, this._linkDensityModifier = o.linkDensityModifier || 0, this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY, this._debug) {
        let i = function(a) {
          if (a.nodeType == a.TEXT_NODE)
            return `${a.nodeName} ("${a.textContent}")`;
          let s = Array.from(a.attributes || [], function(c) {
            return `${c.name}="${c.value}"`;
          }).join(" ");
          return `<${a.localName} ${s}>`;
        };
        this.log = function() {
          if (typeof console < "u") {
            let s = Array.from(arguments, (c) => c && c.nodeType == this.ELEMENT_NODE ? i(c) : c);
            s.unshift("Reader: (Readability)"), console.log(...s);
          } else if (typeof dump < "u") {
            var a = Array.prototype.map.call(arguments, function(s) {
              return s && s.nodeName ? i(s) : s;
            }).join(" ");
            dump("Reader: (Readability) " + a + `
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
      _removeNodes(t, o) {
        if (this._docJSDOMParser && t._isLiveNodeList)
          throw new Error("Do not pass live node lists to _removeNodes");
        for (var i = t.length - 1; i >= 0; i--) {
          var a = t[i], s = a.parentNode;
          s && (!o || o.call(this, a, i, t)) && s.removeChild(a);
        }
      },
      /**
       * Iterates over a NodeList, and calls _setNodeTag for each node.
       *
       * @param NodeList nodeList The nodes to operate on
       * @param String newTagName the new tag name to use
       * @return void
       */
      _replaceNodeTags(t, o) {
        if (this._docJSDOMParser && t._isLiveNodeList)
          throw new Error("Do not pass live node lists to _replaceNodeTags");
        for (const i of t)
          this._setNodeTag(i, o);
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
      _forEachNode(t, o) {
        Array.prototype.forEach.call(t, o, this);
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
      _findNode(t, o) {
        return Array.prototype.find.call(t, o, this);
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
      _someNode(t, o) {
        return Array.prototype.some.call(t, o, this);
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
      _everyNode(t, o) {
        return Array.prototype.every.call(t, o, this);
      },
      _getAllNodesWithTag(t, o) {
        return t.querySelectorAll ? t.querySelectorAll(o.join(",")) : [].concat.apply(
          [],
          o.map(function(i) {
            var a = t.getElementsByTagName(i);
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
      _cleanClasses(t) {
        var o = this._classesToPreserve, i = (t.getAttribute("class") || "").split(/\s+/).filter((a) => o.includes(a)).join(" ");
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
        var o = this._doc.baseURI, i = this._doc.documentURI;
        function a(l) {
          if (o == i && l.charAt(0) == "#")
            return l;
          try {
            return new URL(l, o).href;
          } catch {
          }
          return l;
        }
        var s = this._getAllNodesWithTag(t, ["a"]);
        this._forEachNode(s, function(l) {
          var d = l.getAttribute("href");
          if (d)
            if (d.indexOf("javascript:") === 0)
              if (l.childNodes.length === 1 && l.childNodes[0].nodeType === this.TEXT_NODE) {
                var p = this._doc.createTextNode(l.textContent);
                l.parentNode.replaceChild(p, l);
              } else {
                for (var u = this._doc.createElement("span"); l.firstChild; )
                  u.appendChild(l.firstChild);
                l.parentNode.replaceChild(u, l);
              }
            else
              l.setAttribute("href", a(d));
        });
        var c = this._getAllNodesWithTag(t, [
          "img",
          "picture",
          "figure",
          "video",
          "audio",
          "source"
        ]);
        this._forEachNode(c, function(l) {
          var d = l.getAttribute("src"), p = l.getAttribute("poster"), u = l.getAttribute("srcset");
          if (d && l.setAttribute("src", a(d)), p && l.setAttribute("poster", a(p)), u) {
            var f = u.replace(
              this.REGEXPS.srcsetUrl,
              function(m, w, b, E) {
                return a(w) + (b || "") + E;
              }
            );
            l.setAttribute("srcset", f);
          }
        });
      },
      _simplifyNestedElements(t) {
        for (var o = t; o; ) {
          if (o.parentNode && ["DIV", "SECTION"].includes(o.tagName) && !(o.id && o.id.startsWith("readability"))) {
            if (this._isElementWithoutContent(o)) {
              o = this._removeAndGetNext(o);
              continue;
            } else if (this._hasSingleTagInsideElement(o, "DIV") || this._hasSingleTagInsideElement(o, "SECTION")) {
              for (var i = o.children[0], a = 0; a < o.attributes.length; a++)
                i.setAttributeNode(o.attributes[a].cloneNode());
              o.parentNode.replaceChild(i, o), o = i;
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
        var t = this._doc, o = "", i = "";
        try {
          o = i = t.title.trim(), typeof o != "string" && (o = i = this._getInnerText(
            t.getElementsByTagName("title")[0]
          ));
        } catch {
        }
        var a = !1;
        function s(f) {
          return f.split(/\s+/).length;
        }
        if (/ [\|\-\\\/>»] /.test(o)) {
          a = / [\\\/>»] /.test(o);
          let f = Array.from(i.matchAll(/ [\|\-\\\/>»] /gi));
          o = i.substring(0, f.pop().index), s(o) < 3 && (o = i.replace(/^[^\|\-\\\/>»]*[\|\-\\\/>»]/gi, ""));
        } else if (o.includes(": ")) {
          var c = this._getAllNodesWithTag(t, ["h1", "h2"]), l = o.trim(), d = this._someNode(c, function(f) {
            return f.textContent.trim() === l;
          });
          d || (o = i.substring(i.lastIndexOf(":") + 1), s(o) < 3 ? o = i.substring(i.indexOf(":") + 1) : s(i.substr(0, i.indexOf(":"))) > 5 && (o = i));
        } else if (o.length > 150 || o.length < 15) {
          var p = t.getElementsByTagName("h1");
          p.length === 1 && (o = this._getInnerText(p[0]));
        }
        o = o.trim().replace(this.REGEXPS.normalize, " ");
        var u = s(o);
        return u <= 4 && (!a || u != s(i.replace(/[\|\-\\\/>»]+/g, "")) - 1) && (o = i), o;
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
        for (var o = t; o && o.nodeType != this.ELEMENT_NODE && this.REGEXPS.whitespace.test(o.textContent); )
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
      _replaceBrs(t) {
        this._forEachNode(this._getAllNodesWithTag(t, ["br"]), function(o) {
          for (var i = o.nextSibling, a = !1; (i = this._nextNode(i)) && i.tagName == "BR"; ) {
            a = !0;
            var s = i.nextSibling;
            i.remove(), i = s;
          }
          if (a) {
            var c = this._doc.createElement("p");
            for (o.parentNode.replaceChild(c, o), i = c.nextSibling; i; ) {
              if (i.tagName == "BR") {
                var l = this._nextNode(i.nextSibling);
                if (l && l.tagName == "BR")
                  break;
              }
              if (!this._isPhrasingContent(i))
                break;
              var d = i.nextSibling;
              c.appendChild(i), i = d;
            }
            for (; c.lastChild && this._isWhitespace(c.lastChild); )
              c.lastChild.remove();
            c.parentNode.tagName === "P" && this._setNodeTag(c.parentNode, "DIV");
          }
        });
      },
      _setNodeTag(t, o) {
        if (this.log("_setNodeTag", t, o), this._docJSDOMParser)
          return t.localName = o.toLowerCase(), t.tagName = o.toUpperCase(), t;
        for (var i = t.ownerDocument.createElement(o); t.firstChild; )
          i.appendChild(t.firstChild);
        t.parentNode.replaceChild(i, t), t.readability && (i.readability = t.readability);
        for (var a = 0; a < t.attributes.length; a++)
          i.setAttributeNode(t.attributes[a].cloneNode());
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
        var o = this.DEFAULT_CHAR_THRESHOLD;
        this._forEachNode(t.children, function(i) {
          this._cleanMatchedNodes(i, function(a, s) {
            return this.REGEXPS.shareElements.test(s) && a.textContent.length < o;
          });
        }), this._clean(t, "iframe"), this._clean(t, "input"), this._clean(t, "textarea"), this._clean(t, "select"), this._clean(t, "button"), this._cleanHeaders(t), this._cleanConditionally(t, "table"), this._cleanConditionally(t, "ul"), this._cleanConditionally(t, "div"), this._replaceNodeTags(
          this._getAllNodesWithTag(t, ["h1"]),
          "h2"
        ), this._removeNodes(
          this._getAllNodesWithTag(t, ["p"]),
          function(i) {
            var a = this._getAllNodesWithTag(i, [
              "img",
              "embed",
              "object",
              "iframe"
            ]).length;
            return a === 0 && !this._getInnerText(i, !1);
          }
        ), this._forEachNode(
          this._getAllNodesWithTag(t, ["br"]),
          function(i) {
            var a = this._nextNode(i.nextSibling);
            a && a.tagName == "P" && i.remove();
          }
        ), this._forEachNode(
          this._getAllNodesWithTag(t, ["table"]),
          function(i) {
            var a = this._hasSingleTagInsideElement(i, "TBODY") ? i.firstElementChild : i;
            if (this._hasSingleTagInsideElement(a, "TR")) {
              var s = a.firstElementChild;
              if (this._hasSingleTagInsideElement(s, "TD")) {
                var c = s.firstElementChild;
                c = this._setNodeTag(
                  c,
                  this._everyNode(c.childNodes, this._isPhrasingContent) ? "P" : "DIV"
                ), i.parentNode.replaceChild(c, i);
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
        var o = this._getNextNode(t, !0);
        return t.remove(), o;
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
      _getNextNode(t, o) {
        if (!o && t.firstElementChild)
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
      _textSimilarity(t, o) {
        var i = t.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean), a = o.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
        if (!i.length || !a.length)
          return 0;
        var s = a.filter((l) => !i.includes(l)), c = s.join(" ").length / a.join(" ").length;
        return 1 - c;
      },
      /**
       * Checks whether an element node contains a valid byline
       *
       * @param node {Element}
       * @param matchString {string}
       * @return boolean
       */
      _isValidByline(t, o) {
        var i = t.getAttribute("rel"), a = t.getAttribute("itemprop"), s = t.textContent.trim().length;
        return (i === "author" || a && a.includes("author") || this.REGEXPS.byline.test(o)) && !!s && s < 100;
      },
      _getNodeAncestors(t, o) {
        o = o || 0;
        for (var i = 0, a = []; t.parentNode && (a.push(t.parentNode), !(o && ++i === o)); )
          t = t.parentNode;
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
      _grabArticle(t) {
        this.log("**** grabArticle ****");
        var o = this._doc, i = t !== null;
        if (t = t || this._doc.body, !t)
          return this.log("No body found in document. Abort."), null;
        for (var a = t.innerHTML; ; ) {
          this.log("Starting grabArticle loop");
          var s = this._flagIsActive(
            this.FLAG_STRIP_UNLIKELYS
          ), c = [], l = this._doc.documentElement;
          let ke = !0;
          for (; l; ) {
            l.tagName === "HTML" && (this._articleLang = l.getAttribute("lang"));
            var d = l.className + " " + l.id;
            if (!this._isProbablyVisible(l)) {
              this.log("Removing hidden node - " + d), l = this._removeAndGetNext(l);
              continue;
            }
            if (l.getAttribute("aria-modal") == "true" && l.getAttribute("role") == "dialog") {
              l = this._removeAndGetNext(l);
              continue;
            }
            if (!this._articleByline && !this._metadata.byline && this._isValidByline(l, d)) {
              for (var p = this._getNextNode(l, !0), u = this._getNextNode(l), f = null; u && u != p; ) {
                var m = u.getAttribute("itemprop");
                if (m && m.includes("name")) {
                  f = u;
                  break;
                } else
                  u = this._getNextNode(u);
              }
              this._articleByline = (f ?? l).textContent.trim(), l = this._removeAndGetNext(l);
              continue;
            }
            if (ke && this._headerDuplicatesTitle(l)) {
              this.log(
                "Removing header: ",
                l.textContent.trim(),
                this._articleTitle.trim()
              ), ke = !1, l = this._removeAndGetNext(l);
              continue;
            }
            if (s) {
              if (this.REGEXPS.unlikelyCandidates.test(d) && !this.REGEXPS.okMaybeItsACandidate.test(d) && !this._hasAncestorTag(l, "table") && !this._hasAncestorTag(l, "code") && l.tagName !== "BODY" && l.tagName !== "A") {
                this.log("Removing unlikely candidate - " + d), l = this._removeAndGetNext(l);
                continue;
              }
              if (this.UNLIKELY_ROLES.includes(l.getAttribute("role"))) {
                this.log(
                  "Removing content with role " + l.getAttribute("role") + " - " + d
                ), l = this._removeAndGetNext(l);
                continue;
              }
            }
            if ((l.tagName === "DIV" || l.tagName === "SECTION" || l.tagName === "HEADER" || l.tagName === "H1" || l.tagName === "H2" || l.tagName === "H3" || l.tagName === "H4" || l.tagName === "H5" || l.tagName === "H6") && this._isElementWithoutContent(l)) {
              l = this._removeAndGetNext(l);
              continue;
            }
            if (this.DEFAULT_TAGS_TO_SCORE.includes(l.tagName) && c.push(l), l.tagName === "DIV") {
              for (var w = null, b = l.firstChild; b; ) {
                var E = b.nextSibling;
                if (this._isPhrasingContent(b))
                  w !== null ? w.appendChild(b) : this._isWhitespace(b) || (w = o.createElement("p"), l.replaceChild(w, b), w.appendChild(b));
                else if (w !== null) {
                  for (; w.lastChild && this._isWhitespace(w.lastChild); )
                    w.lastChild.remove();
                  w = null;
                }
                b = E;
              }
              if (this._hasSingleTagInsideElement(l, "P") && this._getLinkDensity(l) < 0.25) {
                var S = l.children[0];
                l.parentNode.replaceChild(S, l), l = S, c.push(l);
              } else this._hasChildBlockElement(l) || (l = this._setNodeTag(l, "P"), c.push(l));
            }
            l = this._getNextNode(l);
          }
          var _ = [];
          this._forEachNode(c, function(Ae) {
            if (!(!Ae.parentNode || typeof Ae.parentNode.tagName > "u")) {
              var Ie = this._getInnerText(Ae);
              if (!(Ie.length < 25)) {
                var Ze = this._getNodeAncestors(Ae, 5);
                if (Ze.length !== 0) {
                  var Ge = 0;
                  Ge += 1, Ge += Ie.split(this.REGEXPS.commas).length, Ge += Math.min(Math.floor(Ie.length / 100), 3), this._forEachNode(Ze, function(Se, ct) {
                    if (!(!Se.tagName || !Se.parentNode || typeof Se.parentNode.tagName > "u")) {
                      if (typeof Se.readability > "u" && (this._initializeNode(Se), _.push(Se)), ct === 0)
                        var We = 1;
                      else ct === 1 ? We = 2 : We = ct * 3;
                      Se.readability.contentScore += Ge / We;
                    }
                  });
                }
              }
            }
          });
          for (var C = [], x = 0, h = _.length; x < h; x += 1) {
            var g = _[x], y = g.readability.contentScore * (1 - this._getLinkDensity(g));
            g.readability.contentScore = y, this.log("Candidate:", g, "with score " + y);
            for (var k = 0; k < this._nbTopCandidates; k++) {
              var P = C[k];
              if (!P || y > P.readability.contentScore) {
                C.splice(k, 0, g), C.length > this._nbTopCandidates && C.pop();
                break;
              }
            }
          }
          var D = C[0] || null, j = !1, H;
          if (D === null || D.tagName === "BODY") {
            for (D = o.createElement("DIV"), j = !0; t.firstChild; )
              this.log("Moving child out:", t.firstChild), D.appendChild(t.firstChild);
            t.appendChild(D), this._initializeNode(D);
          } else if (D) {
            for (var $ = [], z = 1; z < C.length; z++)
              C[z].readability.contentScore / D.readability.contentScore >= 0.75 && $.push(
                this._getNodeAncestors(C[z])
              );
            var se = 3;
            if ($.length >= se)
              for (H = D.parentNode; H.tagName !== "BODY"; ) {
                for (var _e = 0, Le = 0; Le < $.length && _e < se; Le++)
                  _e += Number(
                    $[Le].includes(
                      H
                    )
                  );
                if (_e >= se) {
                  D = H;
                  break;
                }
                H = H.parentNode;
              }
            D.readability || this._initializeNode(D), H = D.parentNode;
            for (var U = D.readability.contentScore, De = U / 3; H.tagName !== "BODY"; ) {
              if (!H.readability) {
                H = H.parentNode;
                continue;
              }
              var st = H.readability.contentScore;
              if (st < De)
                break;
              if (st > U) {
                D = H;
                break;
              }
              U = H.readability.contentScore, H = H.parentNode;
            }
            for (H = D.parentNode; H.tagName != "BODY" && H.children.length == 1; )
              D = H, H = D.parentNode;
            D.readability || this._initializeNode(D);
          }
          var ee = o.createElement("DIV");
          i && (ee.id = "readability-content");
          var rt = Math.max(
            10,
            D.readability.contentScore * 0.2
          );
          H = D.parentNode;
          for (var X = H.children, me = 0, ie = X.length; me < ie; me++) {
            var ae = X[me], ne = !1;
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
              var lt = 0;
              if (ae.className === D.className && D.className !== "" && (lt += D.readability.contentScore * 0.2), ae.readability && ae.readability.contentScore + lt >= rt)
                ne = !0;
              else if (ae.nodeName === "P") {
                var ye = this._getLinkDensity(ae), oe = this._getInnerText(ae), ce = oe.length;
                (ce > 80 && ye < 0.25 || ce < 80 && ce > 0 && ye === 0 && oe.search(/\.( |$)/) !== -1) && (ne = !0);
              }
            }
            ne && (this.log("Appending node:", ae), this.ALTER_TO_DIV_EXCEPTIONS.includes(ae.nodeName) || (this.log("Altering sibling:", ae, "to div."), ae = this._setNodeTag(ae, "DIV")), ee.appendChild(ae), X = H.children, me -= 1, ie -= 1);
          }
          if (this._debug && this.log("Article content pre-prep: " + ee.innerHTML), this._prepArticle(ee), this._debug && this.log("Article content post-prep: " + ee.innerHTML), j)
            D.id = "readability-page-1", D.className = "page";
          else {
            var te = o.createElement("DIV");
            for (te.id = "readability-page-1", te.className = "page"; ee.firstChild; )
              te.appendChild(ee.firstChild);
            ee.appendChild(te);
          }
          this._debug && this.log("Article content after paging: " + ee.innerHTML);
          var ve = !0, xe = this._getInnerText(ee, !0).length;
          if (xe < this._charThreshold)
            if (ve = !1, t.innerHTML = a, this._attempts.push({
              articleContent: ee,
              textLength: xe
            }), this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))
              this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
            else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
              this._removeFlag(this.FLAG_WEIGHT_CLASSES);
            else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
              this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
            else {
              if (this._attempts.sort(function(Ae, Ie) {
                return Ie.textLength - Ae.textLength;
              }), !this._attempts[0].textLength)
                return null;
              ee = this._attempts[0].articleContent, ve = !0;
            }
          if (ve) {
            var qe = [H, D].concat(
              this._getNodeAncestors(H)
            );
            return this._someNode(qe, function(Ae) {
              if (!Ae.tagName)
                return !1;
              var Ie = Ae.getAttribute("dir");
              return Ie ? (this._articleDir = Ie, !0) : !1;
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
      _unescapeHtmlEntities(t) {
        if (!t)
          return t;
        var o = this.HTML_ESCAPE_MAP;
        return t.replace(/&(quot|amp|apos|lt|gt);/g, function(i, a) {
          return o[a];
        }).replace(/&#(?:x([0-9a-f]+)|([0-9]+));/gi, function(i, a, s) {
          var c = parseInt(a || s, a ? 16 : 10);
          return (c == 0 || c > 1114111 || c >= 55296 && c <= 57343) && (c = 65533), String.fromCodePoint(c);
        });
      },
      /**
       * Try to extract metadata from JSON-LD object.
       * For now, only Schema.org objects of type Article or its subtypes are supported.
       * @return Object with any metadata that could be extracted (possibly none)
       */
      _getJSONLD(t) {
        var o = this._getAllNodesWithTag(t, ["script"]), i;
        return this._forEachNode(o, function(a) {
          if (!i && a.getAttribute("type") === "application/ld+json")
            try {
              var s = a.textContent.replace(
                /^\s*<!\[CDATA\[|\]\]>\s*$/g,
                ""
              ), c = JSON.parse(s);
              if (Array.isArray(c) && (c = c.find((m) => m["@type"] && m["@type"].match(this.REGEXPS.jsonLdArticleTypes)), !c))
                return;
              var l = /^https?\:\/\/schema\.org\/?$/, d = typeof c["@context"] == "string" && c["@context"].match(l) || typeof c["@context"] == "object" && typeof c["@context"]["@vocab"] == "string" && c["@context"]["@vocab"].match(l);
              if (!d || (!c["@type"] && Array.isArray(c["@graph"]) && (c = c["@graph"].find((m) => (m["@type"] || "").match(this.REGEXPS.jsonLdArticleTypes))), !c || !c["@type"] || !c["@type"].match(this.REGEXPS.jsonLdArticleTypes)))
                return;
              if (i = {}, typeof c.name == "string" && typeof c.headline == "string" && c.name !== c.headline) {
                var p = this._getArticleTitle(), u = this._textSimilarity(c.name, p) > 0.75, f = this._textSimilarity(c.headline, p) > 0.75;
                f && !u ? i.title = c.headline : i.title = c.name;
              } else typeof c.name == "string" ? i.title = c.name.trim() : typeof c.headline == "string" && (i.title = c.headline.trim());
              c.author && (typeof c.author.name == "string" ? i.byline = c.author.name.trim() : Array.isArray(c.author) && c.author[0] && typeof c.author[0].name == "string" && (i.byline = c.author.filter(function(m) {
                return m && typeof m.name == "string";
              }).map(function(m) {
                return m.name.trim();
              }).join(", "))), typeof c.description == "string" && (i.excerpt = c.description.trim()), c.publisher && typeof c.publisher.name == "string" && (i.siteName = c.publisher.name.trim()), typeof c.datePublished == "string" && (i.datePublished = c.datePublished.trim());
            } catch (m) {
              this.log(m.message);
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
        var o = {}, i = {}, a = this._doc.getElementsByTagName("meta"), s = /\s*(article|dc|dcterm|og|twitter)\s*:\s*(author|creator|description|published_time|title|site_name)\s*/gi, c = /^\s*(?:(dc|dcterm|og|twitter|parsely|weibo:(article|webpage))\s*[-\.:]\s*)?(author|creator|pub-date|description|title|site_name)\s*$/i;
        this._forEachNode(a, function(d) {
          var p = d.getAttribute("name"), u = d.getAttribute("property"), f = d.getAttribute("content");
          if (f) {
            var m = null, w = null;
            u && (m = u.match(s), m && (w = m[0].toLowerCase().replace(/\s/g, ""), i[w] = f.trim())), !m && p && c.test(p) && (w = p, f && (w = w.toLowerCase().replace(/\s/g, "").replace(/\./g, ":"), i[w] = f.trim()));
          }
        }), o.title = t.title || i["dc:title"] || i["dcterm:title"] || i["og:title"] || i["weibo:article:title"] || i["weibo:webpage:title"] || i.title || i["twitter:title"] || i["parsely-title"], o.title || (o.title = this._getArticleTitle());
        const l = typeof i["article:author"] == "string" && !this._isUrl(i["article:author"]) ? i["article:author"] : void 0;
        return o.byline = t.byline || i["dc:creator"] || i["dcterm:creator"] || i.author || i["parsely-author"] || l, o.excerpt = t.excerpt || i["dc:description"] || i["dcterm:description"] || i["og:description"] || i["weibo:article:description"] || i["weibo:webpage:description"] || i.description || i["twitter:description"], o.siteName = t.siteName || i["og:site_name"], o.publishedTime = t.datePublished || i["article:published_time"] || i["parsely-pub-date"] || null, o.title = this._unescapeHtmlEntities(o.title), o.byline = this._unescapeHtmlEntities(o.byline), o.excerpt = this._unescapeHtmlEntities(o.excerpt), o.siteName = this._unescapeHtmlEntities(o.siteName), o.publishedTime = this._unescapeHtmlEntities(o.publishedTime), o;
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
        var o = Array.from(t.getElementsByTagName("img"));
        this._forEachNode(o, function(a) {
          for (var s = 0; s < a.attributes.length; s++) {
            var c = a.attributes[s];
            switch (c.name) {
              case "src":
              case "srcset":
              case "data-src":
              case "data-srcset":
                return;
            }
            if (/\.(jpg|jpeg|png|webp)/i.test(c.value))
              return;
          }
          a.remove();
        });
        var i = Array.from(t.getElementsByTagName("noscript"));
        this._forEachNode(i, function(a) {
          if (this._isSingleImage(a)) {
            var s = t.createElement("div");
            s.innerHTML = a.innerHTML;
            var c = a.previousElementSibling;
            if (c && this._isSingleImage(c)) {
              var l = c;
              l.tagName !== "IMG" && (l = c.getElementsByTagName("img")[0]);
              for (var d = s.getElementsByTagName("img")[0], p = 0; p < l.attributes.length; p++) {
                var u = l.attributes[p];
                if (u.value !== "" && (u.name === "src" || u.name === "srcset" || /\.(jpg|jpeg|png|webp)/i.test(u.value))) {
                  if (d.getAttribute(u.name) === u.value)
                    continue;
                  var f = u.name;
                  d.hasAttribute(f) && (f = "data-old-" + f), d.setAttribute(f, u.value);
                }
              }
              a.parentNode.replaceChild(s.firstElementChild, c);
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
      _hasSingleTagInsideElement(t, o) {
        return t.children.length != 1 || t.children[0].tagName !== o ? !1 : !this._someNode(t.childNodes, function(i) {
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
        return this._someNode(t.childNodes, function(o) {
          return this.DIV_TO_P_ELEMS.has(o.tagName) || this._hasChildBlockElement(o);
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
      _getInnerText(t, o) {
        o = typeof o > "u" ? !0 : o;
        var i = t.textContent.trim();
        return o ? i.replace(this.REGEXPS.normalize, " ") : i;
      },
      /**
       * Get the number of times a string s appears in the node e.
       *
       * @param Element
       * @param string - what to split on. Default is ","
       * @return number (integer)
       **/
      _getCharCount(t, o) {
        return o = o || ",", this._getInnerText(t).split(o).length - 1;
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
          for (var o = 0; o < this.PRESENTATIONAL_ATTRIBUTES.length; o++)
            t.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[o]);
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
        var o = this._getInnerText(t).length;
        if (o === 0)
          return 0;
        var i = 0;
        return this._forEachNode(t.getElementsByTagName("a"), function(a) {
          var s = a.getAttribute("href"), c = s && this.REGEXPS.hashUrl.test(s) ? 0.3 : 1;
          i += this._getInnerText(a).length * c;
        }), i / o;
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
        var o = 0;
        return typeof t.className == "string" && t.className !== "" && (this.REGEXPS.negative.test(t.className) && (o -= 25), this.REGEXPS.positive.test(t.className) && (o += 25)), typeof t.id == "string" && t.id !== "" && (this.REGEXPS.negative.test(t.id) && (o -= 25), this.REGEXPS.positive.test(t.id) && (o += 25)), o;
      },
      /**
       * Clean a node of all elements of type "tag".
       * (Unless it's a youtube/vimeo video. People love movies.)
       *
       * @param Element
       * @param string tag to clean
       * @return void
       **/
      _clean(t, o) {
        var i = ["object", "embed", "iframe"].includes(o);
        this._removeNodes(this._getAllNodesWithTag(t, [o]), function(a) {
          if (i) {
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
      _hasAncestorTag(t, o, i, a) {
        i = i || 3, o = o.toUpperCase();
        for (var s = 0; t.parentNode; ) {
          if (i > 0 && s > i)
            return !1;
          if (t.parentNode.tagName === o && (!a || a(t.parentNode)))
            return !0;
          t = t.parentNode, s++;
        }
        return !1;
      },
      /**
       * Return an object indicating how many rows and columns this table has.
       */
      _getRowAndColumnCount(t) {
        for (var o = 0, i = 0, a = t.getElementsByTagName("tr"), s = 0; s < a.length; s++) {
          var c = a[s].getAttribute("rowspan") || 0;
          c && (c = parseInt(c, 10)), o += c || 1;
          for (var l = 0, d = a[s].getElementsByTagName("td"), p = 0; p < d.length; p++) {
            var u = d[p].getAttribute("colspan") || 0;
            u && (u = parseInt(u, 10)), l += u || 1;
          }
          i = Math.max(i, l);
        }
        return { rows: o, columns: i };
      },
      /**
       * Look for 'data' (as opposed to 'layout') tables, for which we use
       * similar checks as
       * https://searchfox.org/mozilla-central/rev/f82d5c549f046cb64ce5602bfd894b7ae807c8f8/accessible/generic/TableAccessible.cpp#19
       */
      _markDataTables(t) {
        for (var o = t.getElementsByTagName("table"), i = 0; i < o.length; i++) {
          var a = o[i], s = a.getAttribute("role");
          if (s == "presentation") {
            a._readabilityDataTable = !1;
            continue;
          }
          var c = a.getAttribute("datatable");
          if (c == "0") {
            a._readabilityDataTable = !1;
            continue;
          }
          var l = a.getAttribute("summary");
          if (l) {
            a._readabilityDataTable = !0;
            continue;
          }
          var d = a.getElementsByTagName("caption")[0];
          if (d && d.childNodes.length) {
            a._readabilityDataTable = !0;
            continue;
          }
          var p = ["col", "colgroup", "tfoot", "thead", "th"], u = function(m) {
            return !!a.getElementsByTagName(m)[0];
          };
          if (p.some(u)) {
            this.log("Data table because found data-y descendant"), a._readabilityDataTable = !0;
            continue;
          }
          if (a.getElementsByTagName("table")[0]) {
            a._readabilityDataTable = !1;
            continue;
          }
          var f = this._getRowAndColumnCount(a);
          if (f.columns == 1 || f.rows == 1) {
            a._readabilityDataTable = !1;
            continue;
          }
          if (f.rows >= 10 || f.columns > 4) {
            a._readabilityDataTable = !0;
            continue;
          }
          a._readabilityDataTable = f.rows * f.columns > 10;
        }
      },
      /* convert images and figures that have properties like data-src into images that can be loaded without JS */
      _fixLazyImages(t) {
        this._forEachNode(
          this._getAllNodesWithTag(t, ["img", "picture", "figure"]),
          function(o) {
            if (o.src && this.REGEXPS.b64DataUrl.test(o.src)) {
              var i = this.REGEXPS.b64DataUrl.exec(o.src);
              if (i[1] === "image/svg+xml")
                return;
              for (var a = !1, s = 0; s < o.attributes.length; s++) {
                var c = o.attributes[s];
                if (c.name !== "src" && /\.(jpg|jpeg|png|webp)/i.test(c.value)) {
                  a = !0;
                  break;
                }
              }
              if (a) {
                var l = i[0].length, d = o.src.length - l;
                d < 133 && o.removeAttribute("src");
              }
            }
            if (!((o.src || o.srcset && o.srcset != "null") && !o.className.toLowerCase().includes("lazy"))) {
              for (var p = 0; p < o.attributes.length; p++)
                if (c = o.attributes[p], !(c.name === "src" || c.name === "srcset" || c.name === "alt")) {
                  var u = null;
                  if (/\.(jpg|jpeg|png|webp)\s+\d/.test(c.value) ? u = "srcset" : /^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(c.value) && (u = "src"), u) {
                    if (o.tagName === "IMG" || o.tagName === "PICTURE")
                      o.setAttribute(u, c.value);
                    else if (o.tagName === "FIGURE" && !this._getAllNodesWithTag(o, ["img", "picture"]).length) {
                      var f = this._doc.createElement("img");
                      f.setAttribute(u, c.value), o.appendChild(f);
                    }
                  }
                }
            }
          }
        );
      },
      _getTextDensity(t, o) {
        var i = this._getInnerText(t, !0).length;
        if (i === 0)
          return 0;
        var a = 0, s = this._getAllNodesWithTag(t, o);
        return this._forEachNode(
          s,
          (c) => a += this._getInnerText(c, !0).length
        ), a / i;
      },
      /**
       * Clean an element of all tags of type "tag" if they look fishy.
       * "Fishy" is an algorithm based on content length, classnames, link density, number of images & embeds, etc.
       *
       * @return void
       **/
      _cleanConditionally(t, o) {
        this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY) && this._removeNodes(this._getAllNodesWithTag(t, [o]), function(i) {
          var a = function(H) {
            return H._readabilityDataTable;
          }, s = o === "ul" || o === "ol";
          if (!s) {
            var c = 0, l = this._getAllNodesWithTag(i, ["ul", "ol"]);
            this._forEachNode(
              l,
              (H) => c += this._getInnerText(H).length
            ), s = c / this._getInnerText(i).length > 0.9;
          }
          if (o === "table" && a(i) || this._hasAncestorTag(i, "table", -1, a) || this._hasAncestorTag(i, "code") || [...i.getElementsByTagName("table")].some(
            (H) => H._readabilityDataTable
          ))
            return !1;
          var d = this._getClassWeight(i);
          this.log("Cleaning Conditionally", i);
          var p = 0;
          if (d + p < 0)
            return !0;
          if (this._getCharCount(i, ",") < 10) {
            for (var u = i.getElementsByTagName("p").length, f = i.getElementsByTagName("img").length, m = i.getElementsByTagName("li").length - 100, w = i.getElementsByTagName("input").length, b = this._getTextDensity(i, [
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6"
            ]), E = 0, S = this._getAllNodesWithTag(i, [
              "object",
              "embed",
              "iframe"
            ]), _ = 0; _ < S.length; _++) {
              for (var C = 0; C < S[_].attributes.length; C++)
                if (this._allowedVideoRegex.test(S[_].attributes[C].value))
                  return !1;
              if (S[_].tagName === "object" && this._allowedVideoRegex.test(S[_].innerHTML))
                return !1;
              E++;
            }
            var x = this._getInnerText(i);
            if (this.REGEXPS.adWords.test(x) || this.REGEXPS.loadingWords.test(x))
              return !0;
            var h = x.length, g = this._getLinkDensity(i), y = ["SPAN", "LI", "TD"].concat(
              Array.from(this.DIV_TO_P_ELEMS)
            ), k = this._getTextDensity(i, y), P = this._hasAncestorTag(i, "figure"), D = (() => {
              const $ = [];
              return !P && f > 1 && u / f < 0.5 && $.push(`Bad p to img ratio (img=${f}, p=${u})`), !s && m > u && $.push(`Too many li's outside of a list. (li=${m} > p=${u})`), w > Math.floor(u / 3) && $.push(`Too many inputs per p. (input=${w}, p=${u})`), !s && !P && b < 0.9 && h < 25 && (f === 0 || f > 2) && g > 0 && $.push(
                `Suspiciously short. (headingDensity=${b}, img=${f}, linkDensity=${g})`
              ), !s && d < 25 && g > 0.2 + this._linkDensityModifier && $.push(
                `Low weight and a little linky. (linkDensity=${g})`
              ), d >= 25 && g > 0.5 + this._linkDensityModifier && $.push(
                `High weight and mostly links. (linkDensity=${g})`
              ), (E === 1 && h < 75 || E > 1) && $.push(
                `Suspicious embed. (embedCount=${E}, contentLength=${h})`
              ), f === 0 && k === 0 && $.push(
                `No useful content. (img=${f}, textDensity=${k})`
              ), $.length ? (this.log("Checks failed", $), !0) : !1;
            })();
            if (s && D) {
              for (var j = 0; j < i.children.length; j++)
                if (i.children[j].children.length > 1)
                  return D;
              let $ = i.getElementsByTagName("li").length;
              if (f == $)
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
      _cleanMatchedNodes(t, o) {
        for (var i = this._getNextNode(t, !0), a = this._getNextNode(t); a && a != i; )
          o.call(this, a, a.className + " " + a.id) ? a = this._removeAndGetNext(a) : a = this._getNextNode(a);
      },
      /**
       * Clean out spurious headers from an Element.
       *
       * @param Element
       * @return void
       **/
      _cleanHeaders(t) {
        let o = this._getAllNodesWithTag(t, ["h1", "h2"]);
        this._removeNodes(o, function(i) {
          let a = this._getClassWeight(i) < 0;
          return a && this.log("Removing header with low class weight:", i), a;
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
        var o = this._getInnerText(t, !1);
        return this.log("Evaluating similarity of header:", o, this._articleTitle), this._textSimilarity(this._articleTitle, o) > 0.75;
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
        var o = this._disableJSONLD ? {} : this._getJSONLD(this._doc);
        this._removeScripts(this._doc), this._prepDocument();
        var i = this._getArticleMetadata(o);
        this._metadata = i, this._articleTitle = i.title;
        var a = this._grabArticle();
        if (!a)
          return null;
        if (this.log("Grabbed: " + a.innerHTML), this._postProcessContent(a), !i.excerpt) {
          var s = a.getElementsByTagName("p");
          s.length && (i.excerpt = s[0].textContent.trim());
        }
        var c = a.textContent;
        return {
          title: this._articleTitle,
          byline: i.byline || this._articleByline,
          dir: this._articleDir,
          lang: this._articleLang,
          content: this._serializer(a),
          textContent: c,
          length: c.length,
          excerpt: i.excerpt,
          siteName: i.siteName || this._articleSiteName,
          publishedTime: i.publishedTime
        };
      }
    }, e.exports = r;
  }(pn)), pn.exports;
}
var hn = { exports: {} }, Js;
function Dp() {
  return Js || (Js = 1, function(e) {
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
    function o(i, a = {}) {
      typeof a == "function" && (a = { visibilityChecker: a });
      var s = {
        minScore: 20,
        minContentLength: 140,
        visibilityChecker: t
      };
      a = Object.assign(s, a);
      var c = i.querySelectorAll("p, pre, article"), l = i.querySelectorAll("div > br");
      if (l.length) {
        var d = new Set(c);
        [].forEach.call(l, function(u) {
          d.add(u.parentNode);
        }), c = Array.from(d);
      }
      var p = 0;
      return [].some.call(c, function(u) {
        if (!a.visibilityChecker(u))
          return !1;
        var f = u.className + " " + u.id;
        if (r.unlikelyCandidates.test(f) && !r.okMaybeItsACandidate.test(f) || u.matches("li p"))
          return !1;
        var m = u.textContent.trim().length;
        return m < a.minContentLength ? !1 : (p += Math.sqrt(m - a.minContentLength), p > a.minScore);
      });
    }
    e.exports = o;
  }(hn)), hn.exports;
}
var fn, Qs;
function Hp() {
  if (Qs) return fn;
  Qs = 1;
  var e = Pp(), r = Dp();
  return fn = {
    Readability: e,
    isProbablyReaderable: r
  }, fn;
}
var h2 = Hp();
const zp = "body[data-vwp-font=open-dyslexic] *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){font-family:OpenDyslexic_Font,sans-serif!important}body[data-vwp-font=comic-neue] *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){font-family:ComicNeue_Font,sans-serif!important}", gn = ["open-dyslexic", "comic-neue"], Bp = "vwp-dyslexic-font-style", f2 = () => {
  const [e, r] = Z([]), { dyslexicFont: t } = M(), { path: o } = Zt(), [i, a] = Z(-1), [s, c] = Z();
  O(() => {
    t && et(zp, Bp);
  }, [t]), O(() => {
    o && (a(gn.findIndex((p) => p === t)), c(t), d(t));
  }, [o, t]);
  const l = () => {
    const p = i + 1 < gn.length ? i + 1 : -1, u = gn[p] || void 0;
    M.setState({ dyslexicFont: u });
  }, d = async (p) => {
    switch (p) {
      case "open-dyslexic":
        e.includes("open-dyslexic") || await pu(o), r((u) => [...u, "open-dyslexic"]);
        break;
      case "comic-neue":
        e.includes("comic-neue") || await hu(o), r((u) => [...u, "comic-neue"]);
    }
    if (!p) return document.body.removeAttribute("data-vwp-font");
    document.body.dataset.vwpFont = p;
  };
  return { toggleFont: l, index: i, option: s };
}, Fp = (e, r = 150) => {
  const t = e.trim().split(/\s+/).length;
  return Math.ceil(t / r);
}, $p = () => {
  const [e, r] = Z(), { theme: t } = Fo(), { highlightTitles: o, highlightLinks: i, readerMode: a } = M(), { option: s } = Jc(), { option: c } = e2(), { option: l } = f2(), { option: d } = Qc();
  if (O(() => {
    const f = document.cloneNode(!0), w = new h2.Readability(f).parse();
    r({ ...w, readingTime: Fp((w == null ? void 0 : w.textContent) || "") });
  }, []), !(e != null && e.content)) return null;
  const p = e != null && e.content ? Op.sanitize(e.content) : "", u = pp(p, {
    replace: (f) => {
      if (f.type === "tag" && f.name === "a") {
        const m = f;
        return /* @__PURE__ */ n("a", { ...m.attribs, target: "_blank", rel: "noopener noreferrer", children: s2.domToReact(m.children) });
      }
    }
  });
  return /* @__PURE__ */ n(we, { children: [
    /* @__PURE__ */ n("style", { children: ep }),
    /* @__PURE__ */ n(
      "div",
      {
        id: "vwp-reader-mode-view",
        "data-active": a,
        "data-theme": t,
        "data-highlight-titles": o,
        "data-highlight-links": i,
        style: {
          fontSize: 18 * ((s == null ? void 0 : s.value) || 1),
          lineHeight: 1.5 * ((c == null ? void 0 : c.value) || 1),
          letterSpacing: (d == null ? void 0 : d.value) || 0,
          fontFamily: l ? l === "open-dyslexic" ? "OpenDyslexic_Font" : "ComicNeue_Font" : "inherit"
        },
        children: /* @__PURE__ */ n("div", { className: "vwp-reader-mode-container", children: [
          /* @__PURE__ */ n("header", { children: [
            /* @__PURE__ */ n("h1", { style: { fontSize: 36 * ((s == null ? void 0 : s.value) || 1) }, children: e.title }),
            /* @__PURE__ */ n("p", { style: { fontSize: 16 * ((s == null ? void 0 : s.value) || 1) }, children: [
              "Tempo de leitura: ",
              e.readingTime,
              " minuto(s)"
            ] })
          ] }),
          /* @__PURE__ */ n("div", { class: "vwp-reader-mode-content", children: u })
        ] })
      }
    )
  ] });
}, Up = "vwp-reader-mode", Vp = "vwp-reader-mode-overlay", jp = () => {
  const { readerMode: e } = M();
  O(() => {
    M.getState().readerMode && r(!0);
  }, []), O(() => {
    const t = ao(Vp);
    Je(/* @__PURE__ */ n($p, {}), t);
  }, []);
  const r = (t) => {
    const o = t !== void 0 ? t : !e;
    M.setState({ readerMode: o }), document.body.classList.toggle(Up, o);
  };
  return { toggle: r, isActive: !!e };
}, el = () => {
  const { t: e } = W(), { toggle: r, isActive: t } = jp();
  if (h2.isProbablyReaderable(document))
    return /* @__PURE__ */ n(ue, { showActiveIndicator: !0, "aria-label": e("al.reader_mode"), isActive: t, onClick: () => r(), children: [
      /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Eu, { iconTitle: e("al.reader_mode") }) }),
      /* @__PURE__ */ n(pe, { children: e("reader_mode") }),
      /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
    ] });
}, Gp = "body *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) .vwp-text-reader{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXkSURBVHgBzVlNSBxXHP+/t+qukBBPie0hbKF6S5uESgyNdkMCpcmhLQULPW3SWynRY4MGlaDNLbH0Wj8uPQhp7KHpJSWb1sOCpWvw5hY6eEn0UkVBV9338n6zzu7szHu7s+6syQ+G2Z2P9/7fX8MujO8MMGL9pCAltTGiNtKBkWWfJSucSVokyZJMrjMhn+d5fn1h8NgiHTFY99juU0VMgkKCEsaiAHMkU2Asfac1RQ0E6x7P/ackGaeGgqUkiTlB+8/C1hK7MJb732g2jYHFJJuTe/mJ9GirRXVCmVBO0msDS5Gg6fSdlhk6JF4zA0VYJNjIYRh5UxhwYOVp7/Na/ITTm4V4hJozSqhTiWEZyC+PhIG3TjD7qAHJnZbdTPfwdrzag6Gb0LnTjM6rA+eOU4yORcvvb+WIllcl/ZVVx7KkFxvm7dUdlSTZQCXfCC0PXDvD1VEgvBb8syLp9yVJj5dEpcdG04PREd2NuhkAwUPXI9R+guoCGBn/TZg1IlhSp4m6fODrS5x+/Kp+4gGY3fSNCPV9YCCJy+musa2zvsul4qw2DF7ndPNSuDHgWIyo/6p5XRWhHnmjE7eryhoB4mHzjQI0a2Aivh3dG3Zf4Iyxdapx8UYSX20fJuVA993thPOfCyksCgjE8rDNBsiu6qNQ/xWuzx88UtQCZyQ3KCDgsI3AmIo+OGb/LmcCPnHrik5gMuFogXOKBKo7oM4woo0OTu74aV7Yic6N3k59bmEs8inOvGW32aIA6OsKlqA2VWIHIR/f36cP7+1TciqvNY/sWikLw96Rsbd2iGYX/M/2dvj3FkwmbQZSo8qJnX7XAJQEHSeDMfDtz3madEkS9u01DxCanMzbzOE5mEpfV8FUHi/5Exm07y1J0ITBjOy3mKSKZhS0PICk/13V3/OahyNxRzs9B1KGVrxmBAYhRC8kZ+/bDKgmPEUVoFOhDigHTACxjsmAoJ7Owpoo7IC3XdFmc0cGpeFAA2p6QBUQlvOCCd3vIGjXhFM1ATlrMxDbj1U0oaC1fG8Hr7iGY4ogHuU0cP504Z3ltZLUj8f8+3Wc8q+p3miz37YdGQ12nUDIM2XpW1fLr8MHwBRKcMDxBV0PYQIcuan4Tyo/YJSgOoE6CZIGQS9Vinz3JNGXXbwsEMAHHn5T2hq+kTnwH2M1aoCLAfGMWDhlQk8nIldpLZ0JuqWMCAVm3Rrx4oWhXigygBGgGnKt64ZckFA1P0AE+jMraH6ZtE0JNIBIgujjXcsJvV4zc8Pg9FaT+5/KBw+UGY14n8qsKOmc0S5gEz3xpCDBSoCJ4Jj4g+gTJWVkX4eRe19EbKYr5ZvsmiZES1nOgMmMCi/7F0eWvf2wYi+rBXrglxuiWBwiTLdX0XBGk2MY8cUyaguTZH80MjXcurQfFCBIK1UN3E7uBhKwX9wiP+q9BPvTLbBZ50QmaDLLGDI82xPPfQzYWtAUd4gUXtQ4rDr0+7q9EfYx3W7SviGF0gKfcl9ynNDtaHBESDGoKThACL32XrD+wgmxfhr5NE5GEei+3GDDmZtNgTNlvYDto+z2VqcKlhp0vYMf5sCr8QVIAiHzKAD/Qm+hIR7dzIjz08gAfEFNLB54ryMiTc43nokfnkhTbrHcE7qKtUM01zxqcuhGMQHJo4Mzzkp3xWX336phoPv77bgUPKMrMVAWGEcfhwBs/rtf8sauTtXPI+mhaJlpB9r54t3cZ5LTI909OHa9wy5IfXZB2g291uZtsOn0YMsN31UKiO6x7aQ3tLrhMAKtHI8Gn2BUJ5wKMX8odll3qybdgwlJ/H61z7JO5Wk3J7FS6Qwis6vovgrNf2YlSP7QS754l2oEfEIlkaeN/zhOWpv3ombDTd9utWK5lnOQDDUOFmM8UY14oK7wYWsjz6bUnC9BIcD+JqZ6kiCEOwgl/tmMCDUxZqr0OIxpKSeVjOZad6MzhQFDcIQTwF24OL73kRQioQjCzCau0lHc4/QWOik0Iyo0L8Zyzb/WSrQbrwDCzLLGTU5efAAAAABJRU5ErkJggg==),pointer!important;text-decoration:underline!important}", qp = {
  event: null,
  isActive: !1,
  onClick: void 0,
  type: "button",
  element: null,
  listener: null,
  render: void 0
}, Gt = Ot()(() => ({
  ...qp
})), Zp = Array.from([document.body, ...document.body.children]), mn = lu(), vn = hr(".vp-guide-container"), Wp = (e) => {
  var r;
  return vt(e, ["IMG"]) ? e.alt : A1(e) ? e.value : vt(e, ["SELECT"]) ? (r = hr(`[value="${e.value}"]`, e)) == null ? void 0 : r.innerText : e.innerText.trim() || "";
}, g2 = (e) => {
  let r = e;
  for (; r && !Zp.includes(r); ) {
    if (Xp(r) || r.onclick && !Jp(r)) return r;
    r = r.parentNode;
  }
  return null;
}, tl = (e) => mn != null && mn.contains(e) || vn != null && vn.contains(e) || e.matches(".vw-links") ? !1 : Qp(e) || g2(e) || A1(e) || Yp(e) || Kp(e), vt = (e, r) => r.includes(e.tagName), Xp = (e) => vt(e, ["A", "BUTTON"]), A1 = (e) => vt(e, "INPUT") && e.type === "submit", Yp = (e) => vt(e, "IMG") && e.alt && e.alt.trim(), Kp = (e) => vt(e, "SELECT"), Jp = (e) => vt(e, ["SVG", "PATH"]), Qp = (e) => {
  const r = (t) => {
    var o;
    return t.nodeType === Node.TEXT_NODE && ((o = t == null ? void 0 : t.textContent) == null ? void 0 : o.trim());
  };
  return Array.from(e.childNodes).some((t) => r(t));
}, e6 = (e) => {
  if (!e.parentElement) return;
  const r = hr("input", e.parentElement);
  r && ["radio", "checkbox"].includes(r.type) && (r.checked = !r.checked);
}, t6 = (e, r) => {
  var u;
  let t = null, o = 0;
  if (document.caretPositionFromPoint) {
    const f = document.caretPositionFromPoint(e, r);
    if (!f || !f.offsetNode) return null;
    t = f.offsetNode, o = f.offset;
  } else if (document.caretRangeFromPoint) {
    const f = document.caretRangeFromPoint(e, r);
    if (!f || !f.startContainer) return null;
    t = f.startContainer, o = f.startOffset;
  }
  if (!t || t.nodeType !== Node.TEXT_NODE) return null;
  const i = t.textContent ?? "";
  if (!i.trim()) return null;
  const a = i.slice(0, o), s = i.slice(o), c = a.match(/[\wÀ-ú’-]+$/), l = s.match(/^[\wÀ-ú’-]+/), d = `${(c == null ? void 0 : c[0]) ?? ""}${(l == null ? void 0 : l[0]) ?? ""}`;
  if (!d) return null;
  const p = o - (((u = c == null ? void 0 : c[0]) == null ? void 0 : u.length) ?? 0);
  return { word: d, node: t, offset: p };
}, r6 = (e) => {
  document.querySelectorAll(`span.${e}`).forEach((r) => {
    const t = r.parentNode;
    if (!t) return;
    const o = document.createTextNode(r.textContent || "");
    t.replaceChild(o, r), t.normalize();
  });
}, m2 = ({ callback: e, isWordByWord: r, markWordClss: t, hoverClss: o, isOnlyClick: i }) => {
  if (r && !(t != null && t.trim())) throw new Error("markWordClss is required when isWordByWord is true");
  const a = (d) => {
    if (!o) return;
    const p = d.target;
    (!(tl(p) && r) || !vt(p, "IMG")) && p.classList.add(o);
  }, s = (d) => {
    const p = d.target, u = window.getSelection(), f = u == null ? void 0 : u.toString().trim(), m = t && p.classList.contains(t);
    if (t && !m && r6(t), Gt.setState({ isActive: !1 }), !tl(p)) return;
    if (f && !r) return e == null ? void 0 : e(f);
    if (d.preventDefault(), d.stopPropagation(), r && t) {
      const { word: b, node: E, offset: S } = t6(d.clientX, d.clientY) || {};
      if (b && E && typeof S == "number") {
        const _ = document.createRange();
        if (_.setStart(E, S), _.setEnd(E, S + b.length), !m) {
          const C = document.createElement("span");
          C.className = t, C.textContent = b, _.deleteContents(), _.insertNode(C);
        }
        e == null || e(b);
      }
    } else {
      const b = Wp(p);
      b != null && b.trim() && (e == null || e(b));
    }
    const w = p.tagName === "A" ? p : g2(p);
    w && l(w, d), vt(p, "LABEL") ? e6(p) : (vt(p, "BUTTON") || A1(p)) && l(p, d);
  }, c = (d) => {
    if (!o) return;
    d.target.classList.remove(o);
  }, l = (d, p) => {
    Gt.setState({
      isActive: !0,
      event: p,
      type: d.tagName.toLowerCase() === "a" ? "link" : "button",
      onClick: () => {
        d.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), Gt.setState({ isActive: !1 });
      }
    });
  };
  return document.body.removeEventListener("mouseover", a), document.body.removeEventListener("mouseout", c), document.body.removeEventListener("click", s, !0), i || (document.body.addEventListener("mouseover", a), document.body.addEventListener("mouseout", c)), document.body.addEventListener("click", s, !0), () => {
    document.body.removeEventListener("mouseover", a), document.body.removeEventListener("mouseout", c), document.body.removeEventListener("click", s, !0);
  };
}, o6 = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES"
};
let wt = null;
const fr = (e, r) => {
  if (!("speechSynthesis" in window))
    return console.error(pr("speech_is_not_supported", { locale: (r == null ? void 0 : r.locale) || "pt" })), null;
  const t = () => {
    const o = o6[(r == null ? void 0 : r.locale) || "pt"] || "pt-BR", i = speechSynthesis.getVoices();
    wt = new SpeechSynthesisUtterance(e);
    let a = i.find((s) => s.lang === o);
    a || (console.warn(`Voz para ${o} não encontrada. Usando fallback en-US.`), a = i.find((s) => s.lang === "en-US")), wt.lang = o, wt.rate = (r == null ? void 0 : r.velocity) || 1, wt.pitch = 1, wt.volume = 1, wt.voice = a || null, speechSynthesis.cancel(), speechSynthesis.speak(wt), wt.onend = () => speechSynthesis.cancel();
  };
  return speechSynthesis.getVoices().length === 0 ? window.speechSynthesis.onvoiceschanged = () => t() : t(), wt;
}, Xr = () => {
  "speechSynthesis" in window && speechSynthesis.cancel();
}, i6 = "vwp-text-reader-style", n6 = () => {
  const { textReader: e } = M();
  return O(() => {
    e != null && e.isActive && et(Gp, i6);
  }, [e]), O(() => {
    const t = e != null && e.isActive ? m2({
      hoverClss: "vwp-text-reader",
      callback: (o) => fr(o, { velocity: e == null ? void 0 : e.velocity })
    }) : void 0;
    return () => {
      t == null || t();
    };
  }, [e]), { toggle: (t) => {
    const o = t !== void 0 ? t : !(e != null && e.isActive);
    o ? fr(pr("text_reader_is_actived")) : Xr(), M.setState({ textReader: { isActive: o }, largeCursor: void 0, dictionary: void 0 });
  }, isActive: !!(e != null && e.isActive) };
}, a6 = () => {
  const { t: e } = W(), { toggle: r, isActive: t } = n6(), o = "speechSynthesis" in window;
  return /* @__PURE__ */ n(
    ue,
    {
      disabled: !o,
      showActiveIndicator: !0,
      "aria-label": e("al.text_reader"),
      isActive: t,
      onClick: () => r(),
      children: [
        /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Uo, { iconTitle: e("al.text_reader") }) }),
        /* @__PURE__ */ n(pe, { children: e("text_reader") }),
        /* @__PURE__ */ n(he, { children: e(o ? t ? "actived" : "deactivated" : "no_support") })
      ]
    }
  );
}, s6 = "body *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) .vwp-dictionary{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAY4SURBVHgBzVlNTFRXFD73jTKQaLQbf7qwNBF3WGlqxNSfIZI0wqK0pDRxRXHVpi0s26KBiYWyU9omrsrPpkmpiXShTZM2Dtom00AK6g5M+sJCxY0YTWCAudfzvcfAzHv3vXmPmUG+ZPLm/d17vnvP/c6554ljvYsdgkQ7MZSi3YJoN+kgyLSOSthHUiYpMpVQ80Kqu2kjPT/euWOKNhmitmfpFhsToyKBB2NKghypBIglL1YkqIQQtb2p/3kkK6mkEAlFclTSylixZ0kc60k99XSb0sAUSoyq5XR/Ml5hUoFgF0opemUQCZI0lLxYNkwbxCsmsAaTpOjeCJGtQiADM03LH4RZJwZtLVRGaPskD+pgrEsFWpdbjUAGrYtlS5O1XQuV+R4sugvtjAo6e1hQ1R78iPZzaNwRte+9SBE9mlf06BnRnRlFk7P479093+EgKTr81kbR4kDNAUHnTxjWMQxuTysamZAWGR/Ek53Rbt2Nggns3yWoszG84U6AyPd/Se8ZkaJVNxMFEWg5alijnnGRQvFikeinv6U1IzqwQtU4FcpYT87CAYa3nyme8cCOcqL2eoPaTui1hRXqulOdDCurDAkY79VJMeDTfuVCdLkr+4IhhJinEIDblNL4DECi5R13P0KpjtpLC7HMuSGVNCkgsGDPn9i80IG+0KcLRmRtFgxB6hkFxJf1xfX5fMCa+KZRN2AqlpmFbQZFsAHJ15Ylk6eq3KPxH+v37RlJU7N2kEKwAkkEsIMcyBqr1yXW79kjB4hOV7nl+G0+xzVnnBAi8j4fEgKrmsP2U8qDvuYInXQQ+PzndL4AtEYeCPJsAxPudIw6iH/BfWUDUfrfzuhrVsv5YgH88NqnEdf1d/tWKAyQZrQctUe0aq+dYmAWpueUlVqMjNv6/89X21zvvnd5xXo2B1LWWVSFIt/0NUyUhZHahce49lmEPmICmIeb96QVtHDcCf0/4y8OmBknlCHesqhKbMBJNHm9fOpQcAJDbRF6vqiodTDtuocRb76apsca2dCNejYwYxrErLdQPYAeeWHfLgoEzNRDzmXE6n+dz3/M2g5jsl0IhPMBguAED/oRi0D5SvkUL2TPl71cwglM8837cAlbsXQEDrLhY6xEv0zYuQ+kEs/ur/bv43WNDdz6bsuxEnFEY95geyCo9sPVMh2BjO49qMmv44oezNnnj7nnkYn8MwCiTqCasu54SiX4Sow2CBgMV9jHBPbx+XPeJ51kQr/fzzXuh3MROrRXFC0gZhGQYyT0SpAJOH5oYBeAqmQMPlsNNzL4PHcxP2DJHODnZubWA1nNG4L6Poz4tg938yWAEiAXueZ1RS5sMrBF9MO3N3LVBUQmZ91KBHeBKDQcNkIt4of6jY6Zo10cD66wG3U7n5phf63aQ77QSaPumi4gBoGuLXb7XAJebjTzBOwL2zIC+XIhP+A9JwQZUy6rdNVqKMAfHe5AEzaVCApdUGu+uuKaBf4c0OR+UqbjZBix7EtYQNB0Z0qB+IB7KKNAy535jb0O1ksnfrkQnkUM0cUcbPh1LiSW5V2tX+iSO3T647lc/80kV34KhY7hOiDacNhfPr3a02a9LPvJC+V1+gREyTjvdQazL6EB5ywE0XJLcaqDrR9dexh9bRqujCEcPFvWrQUYM9y2bdN2ZQiGrQPa5M/kQteb+OOdw2ItOICGEKw2CwN39L6PUnzmrycBBDauWFxxXsemY2ATSPgUuMzsCp3vLiKa2h5f+zrpaLyUJHzbX5J12ae+BKwsVcg67D91nfRzLdO1zSsA8Pn+P32MV9Tt/K4WSB6OX0o1KYOu6+5hYXfUuzf8YQGp7bmh363ZEEPJzrJPXFcpIGp7Flqd0poNyCuqdqdCEoHhGHHfisWq5utuheoNJBQZl/0+y2JGrBrSIVTV7HNEYAAughFGcjj9hFPveyqAC+pHfkMELBLf8WcfZdwq/cdxsn3+QjTu90joQmfy6wqzPFVWg5Gh0sEUwojlMx4oaOVZs5EWg1zni1ERYH0T4z1JEMMzKDzJp1UikivGglOPjbgWL1IlaLRiKTpsFxiCoygEsnG8d/m0kjLGBh1h/6xkRa90LHoTOylsRliap8pT238La3Q2XgKRMujGoESLwAAAAABJRU5ErkJggg==),pointer!important}body *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus) .vwp-mark-word{background:#2670e8!important;border-radius:4px!important;color:#fff!important;padding:0 2px!important;position:relative!important;display:inline-block!important;transition:all .3s ease!important}", l6 = "vwp-dictionary-style", bn = "vwp-dictionary", c6 = "vwp-mark-word", v2 = () => {
  const { dictionary: e } = M(), r = Bo("(max-width: 980px)");
  return O(() => {
    e && et(s6, l6);
  }, [e]), O(() => {
    const o = e != null && e.isActive ? m2({
      hoverClss: bn,
      markWordClss: c6,
      isWordByWord: !0,
      callback: (i) => M.setState({ dictionary: { ...e, word: i } })
    }) : at(`.${bn}`).forEach((i) => i.classList.remove(bn));
    return () => {
      o == null || o();
    };
  }, [e]), { toggle: (o) => {
    const i = o !== void 0 ? o : !(e != null && e.isActive);
    M.setState({
      dictionary: { isActive: i },
      pageStructure: void 0,
      textReader: void 0,
      largeCursor: void 0
    }), r && M.setState({ isOpenWidget: !i });
  }, isActive: !!(e != null && e.isActive) };
}, d6 = () => {
  const { t: e, locale: r } = W(), { toggle: t, isActive: o } = v2(), i = r !== "pt";
  return /* @__PURE__ */ n(
    ue,
    {
      disabled: i,
      className: "min-h-full",
      showActiveIndicator: !0,
      "aria-label": e("al.dictionary"),
      isActive: o,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Zc, { iconTitle: e("al.dictionary") }) }),
        /* @__PURE__ */ n(pe, { children: e("dictionary") }),
        /* @__PURE__ */ n(he, { children: e(i ? "only_pt" : o ? "actived" : "deactivated") })
      ]
    }
  );
}, u6 = () => {
  const { t: e } = W(), { toggleFont: r, option: t, index: o } = f2();
  return /* @__PURE__ */ n(ue, { "aria-label": e("al.dyslexic_font"), isActive: !!t, onClick: r, children: [
    /* @__PURE__ */ n(tt, { size: 2, actived: o }),
    /* @__PURE__ */ n(fe, { children: t === "comic-neue" ? /* @__PURE__ */ n(Uu, { iconTitle: e("al.dyslexic_font") }) : /* @__PURE__ */ n(Wc, { iconTitle: e("al.dyslexic_font") }) }),
    /* @__PURE__ */ n(pe, { children: e("dyslexic_font") }),
    /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
  ] });
}, p6 = () => {
  const { disableSound: e } = M();
  O(() => {
    M.getState().disableSound && r(!0);
  }, []);
  const r = (t) => {
    const o = t !== void 0 ? t : !e;
    M.setState({ disableSound: o }), at("audio, video").forEach((i) => {
      i.muted = !o;
    });
  };
  return { toggle: r, isActive: !!e };
}, h6 = () => {
  const { t: e } = W(), { isActive: r, toggle: t } = p6();
  return /* @__PURE__ */ n(ue, { showActiveIndicator: !0, "aria-label": e("al.disable_sound"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Pu, { iconTitle: e("al.disable_sound") }) }),
    /* @__PURE__ */ n(pe, { children: e("disable_sounds") }),
    /* @__PURE__ */ n(he, { children: e(r ? "actived" : "deactivated") })
  ] });
}, Cn = [15, 30, 50, 75], f6 = () => {
  const { brightness: e } = M(), [r, t] = Z(-1), [o, i] = Z();
  return O(() => {
    t(Cn.findIndex((s) => s === e)), i(e);
  }, [e]), { toggle: () => {
    const s = r + 1 < Cn.length ? r + 1 : -1, c = Cn[s] || void 0;
    M.setState({ brightness: c });
  }, index: r, option: o };
}, g6 = () => {
  const { t: e } = W(), { toggle: r, option: t, index: o } = f6();
  return /* @__PURE__ */ n(ue, { "aria-label": e("al.reduce_brightness"), isActive: !!t, onClick: r, children: [
    /* @__PURE__ */ n(tt, { size: 4, actived: o }),
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Vu, {}) }),
    /* @__PURE__ */ n(pe, { children: e("reduce_brightness") }),
    /* @__PURE__ */ n(he, { children: t ? `${t}%` : e("deactivated") })
  ] });
}, yn = ["blue", "yellow"], m6 = () => {
  const { nightFilter: e } = M(), [r, t] = Z(-1), [o, i] = Z();
  return O(() => {
    t(yn.findIndex((s) => s === e)), i(e);
  }, [e]), { toggle: () => {
    const s = r + 1 < yn.length ? r + 1 : -1, c = yn[s] || void 0;
    M.setState({ nightFilter: c });
  }, index: r, option: o };
}, v6 = () => {
  const { t: e } = W(), { toggle: r, option: t, index: o } = m6();
  return /* @__PURE__ */ n(ue, { "aria-label": e("al.night_filter"), isActive: !!t, onClick: () => r(), children: [
    /* @__PURE__ */ n(tt, { size: 2, actived: o }),
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Yc, { iconTitle: e("al.night_filter") }) }),
    /* @__PURE__ */ n(pe, { children: e("night_filter") }),
    /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
  ] });
}, b6 = () => {
  const { disableAutoplay: e } = M();
  O(() => {
    M.getState().disableAutoplay && r(!0);
  }, []);
  const r = (t) => {
    const o = t !== void 0 ? t : !e;
    M.setState({ disableAutoplay: o }), at("audio, video").forEach((i) => {
      i.autoplay = !o;
    });
  };
  return { toggle: r, isActive: !!e };
}, C6 = () => {
  const { t: e } = W(), { isActive: r, toggle: t } = b6();
  return /* @__PURE__ */ n(
    ue,
    {
      showActiveIndicator: !0,
      "aria-label": e("al.disable_autoplay"),
      isActive: r,
      onClick: () => t(),
      children: [
        /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Zu, { iconTitle: e("al.disable_autoplay") }) }),
        /* @__PURE__ */ n(pe, { children: e("disable_autoplay") }),
        /* @__PURE__ */ n(he, { children: e(r ? "actived" : "deactivated") })
      ]
    }
  );
}, rl = /* @__PURE__ */ new Map([
  ["low", "saturate(0.5)"],
  ["high", "saturate(2)"],
  ["grayscale", "grayscale(1)"]
]), y6 = () => {
  const { saturation: e } = M();
  if (e)
    return /* @__PURE__ */ n(
      "div",
      {
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 2147483647,
          pointerEvents: "none",
          backgroundColor: "rgba(255,255,255,0.001)",
          backdropFilter: rl.get(e),
          WebkitBackdropFilter: rl.get(e)
        }
      }
    );
}, wn = ["low", "high", "grayscale"], w6 = "vwp-saturation-overlay", _6 = () => {
  const { saturation: e } = M(), [r, t] = Z(-1), [o, i] = Z();
  return O(() => {
    const s = ao(w6);
    Je(/* @__PURE__ */ n(y6, {}), s);
  }, []), O(() => {
    t(wn.findIndex((s) => s === e)), i(e);
  }, [e]), { toggle: () => {
    const s = r + 1 < wn.length ? r + 1 : -1, c = wn[s] || void 0;
    M.setState({ saturation: c });
  }, index: r, option: o };
}, x6 = () => {
  const { t: e } = W(), { toggle: r, option: t, index: o } = _6();
  return /* @__PURE__ */ n(ue, { "aria-label": e("al.adjust_saturation"), isActive: !!t, onClick: () => r(), children: [
    /* @__PURE__ */ n(tt, { size: 3, actived: o }),
    /* @__PURE__ */ n(fe, { children: [
      !t && /* @__PURE__ */ n(Wu, { iconTitle: e("al.adjust_saturation") }),
      t === "low" && /* @__PURE__ */ n(Ku, { iconTitle: e("al.adjust_saturation") }),
      t === "high" && /* @__PURE__ */ n(Yu, { iconTitle: e("al.adjust_saturation") }),
      t === "grayscale" && /* @__PURE__ */ n(Xu, { iconTitle: e("al.adjust_saturation") })
    ] }),
    /* @__PURE__ */ n(pe, { children: e("saturation") }),
    /* @__PURE__ */ n(he, { children: e(t ? `saturation.${t}` : "deactivated") })
  ] });
}, ol = /* @__PURE__ */ new Map([
  ["low", "contrast(0.8)"],
  ["high", "contrast(1.2)"],
  ["invert", "invert(1)"]
]), k6 = () => {
  const { pageContrast: e } = M();
  return e ? /* @__PURE__ */ n(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: "none",
        backgroundColor: "rgba(255,255,255,0.001)",
        backdropFilter: ol.get(e),
        WebkitBackdropFilter: ol.get(e)
      }
    }
  ) : null;
}, No = ["low", "high", "invert"], A6 = "vwp-contrast-overlay", E6 = () => {
  const { pageContrast: e } = M(), [r, t] = Z(-1), [o, i] = Z();
  return O(() => {
    const s = ao(A6);
    Je(/* @__PURE__ */ n(k6, {}), s);
  }, []), O(() => {
    t(No.findIndex((s) => s === e)), i(e);
  }, [e]), { toggle: () => {
    const s = r + 1 < No.length ? r + 1 : -1, c = No[s] || void 0;
    M.setState({ pageContrast: c });
  }, index: r, option: o };
}, S6 = () => {
  const { t: e } = W(), { toggle: r, option: t, index: o } = E6();
  return /* @__PURE__ */ n(ue, { "aria-label": e("al.contrast"), isActive: !!t, onClick: () => r(), children: [
    /* @__PURE__ */ n(tt, { size: No.length, actived: o }),
    /* @__PURE__ */ n(fe, { children: [
      !t && /* @__PURE__ */ n(c8, { iconTitle: e("al.contrast") }),
      t === "low" && /* @__PURE__ */ n(u8, { iconTitle: e("al.contrast") }),
      t === "high" && /* @__PURE__ */ n(d8, { iconTitle: e("al.contrast") }),
      t === "invert" && /* @__PURE__ */ n(p8, { iconTitle: e("al.contrast") })
    ] }),
    /* @__PURE__ */ n(pe, { children: e("contrast") }),
    /* @__PURE__ */ n(he, { children: e(t ? `contrast.${t}` : "deactivated") })
  ] });
}, T6 = () => {
  const { colorBlindFilter: e } = M();
  if (e)
    return /* @__PURE__ */ n(
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
        children: /* @__PURE__ */ n("svg", { "data-vwp-color-blind": e, "aria-hidden": "true", children: [
          /* @__PURE__ */ n("filter", { id: "vwp-protanopia", colorInterpolationFilters: "linearRGB", children: /* @__PURE__ */ n(
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
          /* @__PURE__ */ n("filter", { id: "vwp-deuteranopia", colorInterpolationFilters: "linearRGB", children: /* @__PURE__ */ n(
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
          /* @__PURE__ */ n("filter", { id: "vwp-tritanopia", colorInterpolationFilters: "linearRGB", children: [
            /* @__PURE__ */ n(
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
            /* @__PURE__ */ n("feComponentTransfer", { in: "ProjectionOnPlane1", result: "ProjectionOnPlane1", children: /* @__PURE__ */ n("feFuncA", { type: "discrete", tableValues: "0 0 0 0 1" }) }),
            /* @__PURE__ */ n(
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
            /* @__PURE__ */ n("feBlend", { in: "ProjectionOnPlane1", in2: "ProjectionOnPlane2", mode: "normal" })
          ] })
        ] })
      }
    );
}, _n = ["deuteranopia", "protanopia", "tritanopia"], N6 = "vwp-color-blind-overlay", L6 = () => {
  const { colorBlindFilter: e } = M(), [r, t] = Z(-1), [o, i] = Z();
  return O(() => {
    const s = ao(N6);
    Je(/* @__PURE__ */ n(T6, {}), s);
  }, []), O(() => {
    t(_n.findIndex((s) => s === e)), i(e);
  }, [e]), { toggleFilter: () => {
    const s = r + 1 < _n.length ? r + 1 : -1, c = _n[s] || void 0;
    M.setState({ colorBlindFilter: c, pageColor: void 0 });
  }, index: r, option: o };
}, R6 = () => {
  const { t: e } = W(), { toggleFilter: r, option: t, index: o } = L6(), i = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return /* @__PURE__ */ n(
    ue,
    {
      disabled: i,
      "aria-label": e("al.color_blind_filter"),
      isActive: !!t,
      onClick: r,
      children: [
        /* @__PURE__ */ n("span", { className: "text-xs absolute left-2 top-1 text-muted-foreground font-normal", children: "Beta" }),
        /* @__PURE__ */ n(tt, { size: 3, actived: o }),
        /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Xc, { iconTitle: e("al.color_blind_filter") }) }),
        /* @__PURE__ */ n(pe, { children: e("color_blind_filter") }),
        /* @__PURE__ */ n(he, { children: i ? e("no_support") : t ? Bc(t) : e("deactivated") })
      ]
    }
  );
}, M6 = () => {
  const { pageColor: e } = M();
  if (!(!e || !qr.includes(e)))
    return /* @__PURE__ */ n(
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
}, qr = ["red", "green", "darkblue", "orange", "aliceblue", "blueviolet"], I6 = "vwp-page-colors-overlay", O6 = () => {
  const { pageColor: e } = M(), [r, t] = Z(-1), [o, i] = Z();
  return O(() => {
    const s = ao(I6);
    Je(/* @__PURE__ */ n(M6, {}), s);
  }, []), O(() => {
    t(qr.findIndex((s) => s === e)), i(e);
  }, [e]), { toggle: () => {
    const s = r + 1 < qr.length ? r + 1 : -1, c = qr[s] || void 0;
    M.setState({ pageColor: c, colorBlindFilter: void 0 });
  }, index: r, option: o };
}, P6 = () => {
  const { t: e } = W(), { toggle: r, option: t, index: o } = O6();
  return /* @__PURE__ */ n(
    ue,
    {
      className: "col-span-full sm:col-span-2",
      "aria-label": e("al.page_colors"),
      isActive: !!t,
      onClick: () => r(),
      children: [
        /* @__PURE__ */ n(tt, { size: qr.length, actived: o }),
        /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(zu, { iconTitle: e("al.page_colors") }) }),
        /* @__PURE__ */ n(pe, { children: e("page_colors") }),
        /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
      ]
    }
  );
}, D6 = "body.vwp-keyboard-navigation *:not(.vwp-ignore,.sr-only,.sr-only *,[vw],[vw] *,#vwp-app-wrapper,#vwp-app-wrapper *,#vwp-app-root,#vwp-app-root *,vlibras-widget-plus):focus{outline:2px solid transparent;animation:pulse 1s linear infinite alternate;background-color:#000!important;color:#fff!important;fill:#fff!important}@keyframes pulse{0%{transform:scale(1);box-shadow:0 0 #ff0}50%{transform:scale(1.03);outline-color:#ff0;box-shadow:0 0 20px 5px #ff0}}", xn = ["no-speech", "speech"], il = "vwp-keyboard-navigation", H6 = "vwp-keyboard-navigation-style", nl = `
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
`, { shadowRoot: al } = Fc(), z6 = () => {
  const { keyboardNavigation: e, pageStructure: r, dictionary: t } = M(), [o, i] = Z(-1), [a, s] = Z();
  return O(() => {
    e && et(D6, H6);
  }, [e]), O(() => (i(xn.findIndex((l) => l === e)), s(e), document.body.classList.toggle(il, !!e), () => document.body.classList.remove(il)), [e]), O(() => {
    var f;
    if (!e) return;
    const l = Array.from(at(nl)).filter((m) => m.offsetParent !== null), d = Array.from(
      at(nl, al).filter((m) => m.offsetParent !== null)
    ), p = [...l, ...d];
    (f = p[0]) == null || f.focus();
    const u = (m) => {
      if (p.length === 0) return;
      const w = p.findIndex(
        (S) => S === document.activeElement || S === al.activeElement
      );
      let b = w;
      switch (m.key) {
        case "ArrowDown":
        case "ArrowRight":
          b = (w + 1) % p.length;
          break;
        case "ArrowUp":
        case "ArrowLeft":
          b = (w - 1 + p.length) % p.length;
          break;
        default:
          return;
      }
      m.preventDefault();
      const E = p[b];
      a === "speech" && fr(E.getAttribute("aria-label") || E.title || E.textContent || ""), E.focus();
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [e, r, t, a]), { toggle: () => {
    const l = o + 1 < xn.length ? o + 1 : -1, d = xn[l] || void 0;
    M.setState({ keyboardNavigation: d });
  }, index: o, option: a };
}, B6 = () => {
  const { t: e } = W(), { toggle: r, option: t, index: o } = z6(), i = zo();
  return O(() => {
    t === "speech" && fr(e("keyboard_navigation_active"));
  }, [t, e]), i ? null : /* @__PURE__ */ n(ue, { "aria-label": e("al.keyboard_navigation"), isActive: !!t, onClick: () => r(), children: [
    t === "speech" && /* @__PURE__ */ n(Uo, { className: "size-5 absolute left-2 top-2" }),
    /* @__PURE__ */ n(tt, { size: 2, actived: o }),
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(t8, { iconTitle: e("al.keyboard_navigation") }) }),
    /* @__PURE__ */ n(pe, { children: e("keyboard_navigation") }),
    /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
  ] });
}, b2 = () => {
  const { pageStructure: e } = M(), r = Bo("(max-width: 980px)");
  O(() => {
    M.getState().pageStructure && t(!0);
  }, []);
  const t = (o) => {
    const i = o !== void 0 ? o : !e;
    M.setState({
      pageStructure: i,
      dictionary: void 0,
      textReader: void 0,
      largeCursor: void 0
    }), r && M.setState({ isOpenWidget: !i });
  };
  return { toggle: t, isActive: !!e };
}, F6 = () => {
  const { t: e } = W(), { isActive: r, toggle: t } = b2();
  return /* @__PURE__ */ n(ue, { showActiveIndicator: !0, "aria-label": e("al.page_structure"), isActive: r, onClick: () => t(), children: [
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(Qu, { iconTitle: e("al.page_structure") }) }),
    /* @__PURE__ */ n(pe, { children: e("page_structure") }),
    /* @__PURE__ */ n(he, { children: e(r ? "actived" : "deactivated") })
  ] });
}, $6 = "[data-vwp-theme=light] *:not(.vwp-ignore,a,button,img,script,video,iframe,.vwp-ignore--text-color,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){color:#000!important;background-color:#fff!important}[data-vwp-theme=dark] *:not(.vwp-ignore,a,button,img,script,video,iframe,.vwp-ignore--text-color,.sr-only,.sr-only *,[vw],[vw] *,vlibras-widget-plus){color:#fff!important;background-color:#000!important}", kn = ["dark", "light"], U6 = "vwp-page-theme-style", V6 = () => {
  const { pageTheme: e } = M(), [r, t] = Z(-1), [o, i] = Z();
  O(() => {
    e && et($6, U6);
  }, [e]), O(() => {
    t(kn.findIndex((c) => c === e)), i(e), s(e);
  }, [e]);
  const a = () => {
    const c = r + 1 < kn.length ? r + 1 : -1, l = kn[c] || void 0;
    M.setState({ pageTheme: l });
  }, s = async (c) => {
    if (!c) return document.documentElement.removeAttribute("data-vwp-theme");
    document.documentElement.dataset.vwpTheme = c;
  };
  return { toggle: a, index: r, option: o };
}, j6 = () => {
  const { t: e } = W(), { toggle: r, option: t, index: o } = V6();
  return /* @__PURE__ */ n(ue, { "aria-label": e("al.page_theme"), isActive: !!t, onClick: () => r(), children: [
    /* @__PURE__ */ n(tt, { size: 2, actived: o }),
    /* @__PURE__ */ n(fe, { children: [
      !t && /* @__PURE__ */ n(r8, { iconTitle: e("al.page_theme") }),
      t === "light" && /* @__PURE__ */ n(o8, { iconTitle: e("al.page_theme") }),
      t === "dark" && /* @__PURE__ */ n(Yc, { iconTitle: e("al.page_theme") })
    ] }),
    /* @__PURE__ */ n(pe, { children: e("page_theme") }),
    /* @__PURE__ */ n(he, { children: e(t || "deactivated") })
  ] });
}, G6 = '.vwp-easy-click{position:relative;display:inline-block;z-index:0}.vwp-easy-click:after{content:"";position:absolute;top:-12px;bottom:-12px;left:-12px;right:-12px;z-index:1;background:transparent;pointer-events:auto;cursor:pointer}', q6 = "vwp-easy-click-style", An = "vwp-easy-click", Z6 = () => {
  const { easyClick: e } = M();
  return O(() => {
    e ? (et(G6, q6), at("button, a").filter((o) => !(o.classList.contains("vwp-ignore") || o.classList.contains("sr-only") || o.hasAttribute("vw") || o.closest("#\\31 1y-accessibility") !== null || o.closest("vlibras-widget-plus") !== null || o.querySelector("img, figure, picture") !== null)).forEach((o) => {
      o.classList.add(An);
    })) : at(`.${An}`).forEach((o) => {
      o.classList.remove(An);
    });
  }, [e]), { toggle: (t) => {
    const o = t !== void 0 ? t : !e;
    M.setState({ easyClick: o });
  }, isActive: !!e };
}, W6 = () => {
  const { t: e } = W(), { toggle: r, isActive: t } = Z6();
  return /* @__PURE__ */ n(ue, { showActiveIndicator: !0, "aria-label": e("al.easy_click"), isActive: t, onClick: () => r(), children: [
    /* @__PURE__ */ n("span", { className: "text-xs absolute left-2 top-1 text-muted-foreground font-normal", children: "Beta" }),
    /* @__PURE__ */ n(fe, { children: /* @__PURE__ */ n(ju, { iconTitle: e("al.easy_click") }) }),
    /* @__PURE__ */ n(pe, { children: e("easy_click") }),
    /* @__PURE__ */ n(he, { children: e(t ? "actived" : "deactivated") })
  ] });
}, X6 = ({ className: e, ...r }) => /* @__PURE__ */ n("div", { className: G("h-4", e), ...r }), Y6 = () => {
  const { t: e } = W(), { isExpanded: r } = M(), t = Bo("(min-width: 768px)");
  return /* @__PURE__ */ n("div", { className: G("overflow-y-auto space-y-4 rounded-sm p-4"), children: [
    /* @__PURE__ */ n(w8, {}),
    /* @__PURE__ */ n(er, { children: [
      /* @__PURE__ */ n($t, { children: e("sections.text_and_typography") }),
      /* @__PURE__ */ n(x8, {}),
      /* @__PURE__ */ n(T8, {}),
      /* @__PURE__ */ n(j8, {}),
      /* @__PURE__ */ n(u6, {}),
      /* @__PURE__ */ n(B8, {})
    ] }),
    /* @__PURE__ */ n(er, { children: [
      /* @__PURE__ */ n($t, { children: e("sections.focus_and_visibility") }),
      /* @__PURE__ */ n(O8, {}),
      /* @__PURE__ */ n(S8, {}),
      /* @__PURE__ */ n(V8, {})
    ] }),
    /* @__PURE__ */ n(er, { children: [
      /* @__PURE__ */ n($t, { children: e("sections.reading_and_comprehension") }),
      /* @__PURE__ */ n(a6, {}),
      /* @__PURE__ */ n(L8, {}),
      (!r || !t) && /* @__PURE__ */ n("div", { className: "grid grid-cols-1 gap-y-4", children: [
        /* @__PURE__ */ n(_s, {}),
        /* @__PURE__ */ n(el, {})
      ] }),
      r && t && /* @__PURE__ */ n(we, { children: [
        /* @__PURE__ */ n(_s, {}),
        /* @__PURE__ */ n(el, {})
      ] }),
      /* @__PURE__ */ n(d6, {})
    ] }),
    /* @__PURE__ */ n(er, { children: [
      /* @__PURE__ */ n($t, { children: e("sections.colors_filters_and_contrast") }),
      /* @__PURE__ */ n(R6, {}),
      /* @__PURE__ */ n(x6, {}),
      /* @__PURE__ */ n(S6, {}),
      /* @__PURE__ */ n(j6, {}),
      /* @__PURE__ */ n(v6, {}),
      /* @__PURE__ */ n(g6, {}),
      /* @__PURE__ */ n(P6, {})
    ] }),
    /* @__PURE__ */ n(er, { children: [
      /* @__PURE__ */ n($t, { children: e("sections.navigation_and_motor_accessibility") }),
      /* @__PURE__ */ n(F6, {}),
      /* @__PURE__ */ n(B6, {}),
      /* @__PURE__ */ n(W6, {})
    ] }),
    /* @__PURE__ */ n(er, { children: [
      /* @__PURE__ */ n($t, { children: e("sections.distraction_reduction") }),
      /* @__PURE__ */ n(W8, {}),
      /* @__PURE__ */ n(J8, {}),
      /* @__PURE__ */ n(h6, {}),
      /* @__PURE__ */ n(C6, {})
    ] }),
    /* @__PURE__ */ n(X6, { className: "h-14" })
  ] });
}, Zr = Ce(({ children: e, content: r, arrow: t, offset: o = 0, align: i = "center", placement: a = "top", className: s, ...c }, l) => {
  const [d, p] = Z(!1), u = "vwp-tooltip";
  return r ? /* @__PURE__ */ n(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      onFocus: () => p(!0),
      onBlur: () => p(!1),
      children: [
        /* @__PURE__ */ n("span", { "aria-describedby": u, children: e }),
        d && /* @__PURE__ */ n(
          "div",
          {
            ref: l,
            id: u,
            role: "tooltip",
            style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)", ...(() => {
              switch (a) {
                case "top":
                  return { top: `calc((-100% + 8px) - ${o}px)` };
                case "bottom":
                  return { bottom: `calc((-100% + 8px) - ${o}px)` };
                case "left":
                  return { left: `calc((-100% + 8px) - ${o}px)` };
                case "right":
                  return { right: `calc((-100% + 8px) - ${o}px)` };
                default:
                  return { top: `calc((-100% + 8px) - ${o}px)` };
              }
            })() },
            className: G(
              "absolute border-1 px-3 py-1.5 z-[2147483647] : text-sm text-popover-foreground bg-popover rounded-md shadow-lg transition-opacity duration-200",
              a === "bottom" && "left-1/2 -translate-x-1/2 translate-y-1/2",
              a === "right" && "top-1/2 translate-x-1/2 -translate-y-1/2",
              a === "top" && "left-1/2 -translate-1/2",
              a === "left" && "top-1/2 -translate-y-1/2",
              i === "start" && "!left-0 right-auto translate-x-0",
              i === "end" && "!right-0 translate-x-0 left-auto",
              s
            ),
            ...c,
            children: /* @__PURE__ */ n("div", { className: "relative", children: [
              r,
              t && /* @__PURE__ */ n(
                "div",
                {
                  className: G(
                    "absolute grid place-content-center overflow-hidden max-h-2 left-1/2 -ml-2",
                    t.position.includes("top") && "-top-[13.444px]",
                    t.position.includes("bottom") && "-bottom-[13.444px]",
                    t.position.includes("left") && "left-2",
                    t.position.includes("right") && "right-0 left-auto",
                    t.position === "right" && "top-1/2 -translate-y-1/2 -right-6 -rotate-90 left-auto",
                    t.position === "right" && "top-1/2 -translate-y-1/2 -right-6 -rotate-90 left-auto"
                  ),
                  children: /* @__PURE__ */ n(
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
}), K6 = () => {
  const { t: e } = W();
  return /* @__PURE__ */ n(
    Zr,
    {
      offset: 4,
      arrow: { position: "bottom", className: "bg-primary border-none" },
      className: "whitespace-nowrap bg-primary text-primary-foreground border-none",
      content: /* @__PURE__ */ n("span", { children: [
        e("libras_accessibility"),
        " ",
        /* @__PURE__ */ n("span", { className: "text-primary-foreground/80", children: [
          "(",
          e("upcoming"),
          ")"
        ] })
      ] }),
      children: /* @__PURE__ */ n(
        Ee,
        {
          disabled: !0,
          variant: "primary",
          className: G(
            "justify-start p-0 rounded-full transition-all overflow-hidden min-w-10 max-w-10 h-10 bg-primary"
          ),
          children: /* @__PURE__ */ n(k1, { className: "min-w-6 min-h-6 size-6 ml-2 group-hover:ml-0 transition-all fill-primary-foreground" })
        }
      )
    }
  );
}, E1 = ({ children: e }) => (O(() => {
  const r = (t) => {
    t.key === "Escape" && Wt.getState().setContent(void 0);
  };
  return window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r);
}, []), /* @__PURE__ */ n(we, { children: e })), S1 = Ce(({ children: e, className: r, showOverlay: t = !0, ...o }, i) => {
  const a = Me(null), s = o;
  return Po(i, () => a.current, []), O(() => {
    requestAnimationFrame(() => {
      if (!a.current) return;
      const c = a.current.children[0];
      c.tabIndex = 0, c.focus({ preventScroll: !0 }), c.removeAttribute("tabindex");
    });
  }, []), /* @__PURE__ */ n(
    "dialog",
    {
      className: G(
        "modal modal-open !w-[calc(100%+10px)] absolute !bg-transparent !inset-0 !p-0 !outline-none",
        !t && "!pointer-events-none"
      ),
      children: [
        /* @__PURE__ */ n("div", { ...s, ref: a, className: G("bg-popover animate-move-up border-1 rounded-lg", r), children: e }),
        /* @__PURE__ */ n(J6, {})
      ]
    }
  );
}), T1 = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n("div", { ref: o, className: G("flex relative border-b-1 p-4 flex-col leading-snug", r), ...t, children: e })
), N1 = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n("p", { ref: o, className: G("text-base sm:text-lg font-semibold text-foreground", r), ...t, children: e })
);
Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n("span", { ref: o, className: G("text-sm sm:text-base text-muted-foreground font-normal", r), ...t, children: e })
);
const L1 = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n(
    "div",
    {
      ref: o,
      className: G(
        "w-full text-foreground p-4 max-h-[65.3dvh] xs:max-h-[80dvh] leading-relaxed font-normal overflow-y-auto",
        r
      ),
      ...t,
      children: e
    }
  )
), J6 = () => /* @__PURE__ */ n(
  "div",
  {
    onKeyDown: void 0,
    onClick: () => Wt.getState().setContent(void 0),
    className: "modal-backdrop !bg-black/20 dark:!bg-black/50 absolute inset-0"
  }
), Q6 = () => {
  const { t: e } = W(), { setContent: r } = Wt();
  return /* @__PURE__ */ n(E1, { children: /* @__PURE__ */ n(S1, { className: "absolute inset-4 bg-background top-auto", children: [
    /* @__PURE__ */ n(T1, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ n(N1, { children: e("contact_and_support") }),
      /* @__PURE__ */ n(
        mt,
        {
          className: "rounded-md absolute right-2.5",
          title: e("titles.close"),
          "aria-label": e("titles.close"),
          variant: "destructive",
          onClick: () => r(void 0),
          children: /* @__PURE__ */ n(Pt, { size: 22 })
        }
      )
    ] }),
    /* @__PURE__ */ n(L1, { children: /* @__PURE__ */ n("div", { children: "content" }) })
  ] }) });
}, e9 = () => {
  const { t: e } = W(), { version: r } = Zt(), { setContent: t } = Wt();
  return /* @__PURE__ */ n(E1, { children: /* @__PURE__ */ n(S1, { className: "absolute inset-4 bg-background top-auto", children: [
    /* @__PURE__ */ n(T1, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ n(N1, { children: e("version_updates") }),
      /* @__PURE__ */ n(
        mt,
        {
          className: "rounded-md absolute right-2.5",
          title: e("titles.close"),
          "aria-label": e("titles.close"),
          variant: "destructive",
          onClick: () => t(void 0),
          children: /* @__PURE__ */ n(Pt, { size: 22 })
        }
      )
    ] }),
    /* @__PURE__ */ n(L1, { children: /* @__PURE__ */ n("div", { className: "space-y-4", children: [
      /* @__PURE__ */ n("div", { className: "flex items-baseline-last gap-2", children: [
        /* @__PURE__ */ n("h3", { className: "font-bold", children: [
          "🎉 ",
          r
        ] }),
        /* @__PURE__ */ n("span", { className: "text-muted-foreground text-sm", children: "| Março de 2025" })
      ] }),
      /* @__PURE__ */ n("section", { children: "Testing" })
    ] }) })
  ] }) });
}, C2 = Ot()((e) => ({
  isOpenLibrasDescription: !1,
  setOpenLibrasDescription: (r) => e((t) => ({
    isOpenLibrasDescription: typeof r == "function" ? r(t.isOpenLibrasDescription) : r
  }))
})), t9 = () => {
  const e = "speechSynthesis" in window, { t: r, locale: t } = W(), { setOpenLibrasDescription: o, isOpenLibrasDescription: i } = C2(), [a, s] = Z(!1), c = () => {
    if (a)
      return Xr(), s(!1);
    const d = fr(r("about.project_description"));
    d && (d.onstart = () => {
      s(!0), o(!1);
    }, d.onend = () => s(!1));
  }, l = () => {
    o((d) => !d), s(!1), Xr();
  };
  return !e && t !== "pt" ? null : /* @__PURE__ */ n("div", { className: "rounded-full border-1 flex items-center p-1 dark:bg-muted", children: [
    t === "pt" && /* @__PURE__ */ n(
      mt,
      {
        onClick: l,
        className: G("size-7 rounded-full", i && "!bg-primary"),
        title: r("about.project_description_to_libras"),
        "aria-label": r("about.project_description_to_libras"),
        children: /* @__PURE__ */ n(k1, { className: G(i && "!fill-primary-foreground"), size: 20 })
      }
    ),
    e && /* @__PURE__ */ n(
      mt,
      {
        onClick: c,
        className: G("size-7 rounded-full", a && "!bg-primary"),
        title: r("about.project_description_to_speak"),
        "aria-label": r("about.project_description_to_speak"),
        children: /* @__PURE__ */ n(Uo, { className: G(a && "animate-pulse !fill-primary-foreground"), size: 18 })
      }
    )
  ] });
}, r9 = (e, r, t) => {
  if (!r || r.length === 0) return [Ke(we, {}, e)];
  const o = [...r].sort((l, d) => d.part.length - l.part.length), i = o.map((l) => o9(l.part)), a = new RegExp(`(${i.join("|")})`, "g"), s = e.split(a), c = {};
  return s.map((l, d) => {
    const p = o.find((u) => u.part === l);
    if (p) {
      const u = c[p.part] || 0, f = u === 0;
      if (c[p.part] = u + 1, f)
        return p.render(l, d);
    }
    return Ke(we, { key: `text-${d}` }, l);
  });
}, o9 = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), i9 = () => {
  const e = Me(null), { path: r } = Zt(), { t } = W(), { setOpenLibrasDescription: o, isOpenLibrasDescription: i } = C2(), a = () => {
    e.current && (e.current.currentTime = 0, e.current.play());
  };
  return /* @__PURE__ */ n("section", { className: "space-y-2 relative", children: [
    !i && /* @__PURE__ */ n("p", { children: r9(
      t("about.project_description"),
      [
        { part: "VLibras", render: (s) => /* @__PURE__ */ n("strong", { className: "font-bold", children: s }) },
        { part: "VLibras Widget+", render: (s) => /* @__PURE__ */ n("strong", { className: "font-bold", children: s }) }
      ]
    ) }),
    i && /* @__PURE__ */ n("div", { className: "w-full bg-white rounded-lg border-1 grid place-items-center relative", children: [
      /* @__PURE__ */ n("div", { className: "absolute right-2 top-2 flex items-center", children: [
        /* @__PURE__ */ n(
          Ee,
          {
            onClick: a,
            className: "group size-8 p-0 hover:bg-black/5 rounded-full",
            "aria-label": t("reset"),
            children: /* @__PURE__ */ n(Gc, { size: 18, className: "fill-black opacity-50 group-hover:opacity-100" })
          }
        ),
        /* @__PURE__ */ n(
          Ee,
          {
            onClick: () => o(!1),
            "aria-label": `${t("al.close")} video`,
            className: "group size-8 p-0 hover:bg-destructive/5 rounded-full",
            children: /* @__PURE__ */ n(Pt, { size: 18, className: "fill-black opacity-50 group-hover:opacity-100 group-hover:fill-destructive" })
          }
        )
      ] }),
      /* @__PURE__ */ n("video", { ref: e, className: "h-64", autoplay: !0, loop: !0, src: `${r}/assets/videos/project_description.mp4` })
    ] })
  ] });
}, n9 = [
  {
    name: "Site",
    link: "https://www.gov.br/governodigital/pt-br/vlibras",
    color: "#2670e8",
    icon: n8
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vlibrasoficial",
    color: "#e1306c",
    icon: l8
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vlibras",
    color: "#1877f2",
    icon: i8
  },
  {
    name: "Twitter / X",
    link: "https://x.com/VLibrasoficial",
    color: "#000",
    icon: a8
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@vlibras-lavid3180",
    color: "#ff0000",
    icon: s8
  }
], a9 = () => {
  const { t: e } = W();
  return /* @__PURE__ */ n("section", { className: "space-y-2", children: [
    /* @__PURE__ */ n("h3", { className: "font-bold", children: e("about.social_media") }),
    /* @__PURE__ */ n("div", { className: "flex items-center gap-2 w-full flex-wrap", children: n9.map((r) => {
      const t = r.icon, o = r.name.includes("Twitter");
      return /* @__PURE__ */ n(
        "a",
        {
          title: r.name,
          className: "flex text-xs sm:text-sm font-medium pl-2 pr-3 py-1 items-center gap-2 border-1 hover:bg-muted rounded-full",
          href: r.link,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ n(
              t,
              {
                style: { fill: r.color },
                className: G(
                  "size-3.5 sm:size-4 pointer-events-none fill-primary-foreground",
                  o && "dark:!fill-white"
                ),
                "aria-hidden": !0
              }
            ),
            r.name
          ]
        },
        r.name
      );
    }) })
  ] });
}, s9 = () => {
  const { t: e } = W(), { isExpanded: r } = M(), { path: t } = Zt();
  return /* @__PURE__ */ n("section", { className: "space-y-2", children: [
    /* @__PURE__ */ n("h3", { className: "font-bold", children: e("about.implementers") }),
    /* @__PURE__ */ n(
      "div",
      {
        className: G(
          "p-8 rounded-md overflow-hidden flex items-center bg-white border relative",
          r && "md:p-16"
        ),
        children: /* @__PURE__ */ n("img", { src: `${t}/assets/images/contributors.png`, alt: e("about.implementers") })
      }
    )
  ] });
}, l9 = () => {
  const { t: e, locale: r } = W(), { setContent: t } = Wt(), o = () => {
    t(void 0), Xr();
  };
  return /* @__PURE__ */ n(E1, { children: /* @__PURE__ */ n(S1, { className: "absolute inset-4 bg-background top-auto", children: [
    /* @__PURE__ */ n(T1, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ n(N1, { children: e("about_the_project") }),
      /* @__PURE__ */ n("div", { className: "flex items-center gap-2 absolute right-2.5", children: [
        r === "pt" && /* @__PURE__ */ n(t9, {}),
        /* @__PURE__ */ n(
          mt,
          {
            className: "rounded-full",
            title: e("titles.close"),
            "aria-label": e("titles.close"),
            variant: "destructive",
            onClick: o,
            children: /* @__PURE__ */ n(Pt, { size: 22 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ n(L1, { children: /* @__PURE__ */ n("div", { className: "space-y-4", children: [
      /* @__PURE__ */ n(i9, {}),
      /* @__PURE__ */ n(a9, {}),
      /* @__PURE__ */ n(s9, {})
    ] }) })
  ] }) });
}, c9 = () => {
  const { t: e } = W(), { locale: r } = W(), { theme: t } = Fo(), { setContent: o } = Wt();
  return /* @__PURE__ */ n(
    "div",
    {
      style: { boxShadow: `0 0 8px 2px rgba(0, 0, 0, ${t === "dark" ? 0.5 : 0.1})` },
      className: "absolute bottom-4 left-1/2 -translate-x-1/2 p-2 border-1 bg-background flex items-center rounded-full gap-2",
      children: [
        r === "pt" && /* @__PURE__ */ n(K6, {}),
        /* @__PURE__ */ n("div", { className: "flex h-10 ml-auto rounded-full border-1 bg-background dark:bg-popover", children: [
          /* @__PURE__ */ n(
            Zr,
            {
              arrow: { position: "bottom", className: "bg-background border-1" },
              offset: 8,
              className: "whitespace-nowrap bg-background",
              content: /* @__PURE__ */ n("span", { children: e("about_the_project") }),
              children: /* @__PURE__ */ n(
                Ee,
                {
                  onClick: () => o(/* @__PURE__ */ n(l9, {})),
                  variant: "ghost",
                  className: "size-10 p-0 group whitespace-nowrap rounded-full rounded-r-none",
                  children: /* @__PURE__ */ n(qu, { size: 22 })
                }
              )
            }
          ),
          /* @__PURE__ */ n("span", { className: "h-full w-[1px] bg-border" }),
          /* @__PURE__ */ n(
            Zr,
            {
              arrow: { position: "bottom", className: "bg-background border-1" },
              offset: 8,
              className: "whitespace-nowrap bg-background",
              content: /* @__PURE__ */ n("span", { children: [
                e("contact_and_support"),
                " ",
                /* @__PURE__ */ n("span", { className: "text-muted-foreground", children: [
                  "(",
                  e("upcoming"),
                  ")"
                ] })
              ] }),
              children: /* @__PURE__ */ n(
                Ee,
                {
                  disabled: !0,
                  onClick: () => o(/* @__PURE__ */ n(Q6, {})),
                  variant: "ghost",
                  className: "size-10 p-0 group whitespace-nowrap rounded-none",
                  children: /* @__PURE__ */ n(Gu, { size: 22 })
                }
              )
            }
          ),
          /* @__PURE__ */ n("span", { className: "h-full w-[1px] bg-border" }),
          /* @__PURE__ */ n(
            Zr,
            {
              arrow: { position: "bottom", className: "bg-background border-1" },
              offset: 8,
              className: "whitespace-nowrap bg-background",
              content: /* @__PURE__ */ n("span", { children: [
                e("version_updates"),
                " ",
                /* @__PURE__ */ n("span", { className: "text-muted-foreground", children: [
                  "(",
                  e("upcoming"),
                  ")"
                ] })
              ] }),
              children: /* @__PURE__ */ n(
                Ee,
                {
                  disabled: !0,
                  onClick: () => o(/* @__PURE__ */ n(e9, {})),
                  variant: "ghost",
                  className: "size-10 p-0 group whitespace-nowrap rounded-full rounded-l-none",
                  children: /* @__PURE__ */ n(Ju, { size: 22 })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, d9 = () => {
  const { main: e } = $o();
  return O(() => {
    du();
  }, []), /* @__PURE__ */ n(v8, { children: [
    /* @__PURE__ */ n("div", { className: G("h-full w-full flex flex-col", !e && "sr-only pointer-events-none"), children: [
      /* @__PURE__ */ n(b8, {}),
      /* @__PURE__ */ n(Y6, {}),
      /* @__PURE__ */ n(c9, {})
    ] }),
    /* @__PURE__ */ n(g8, {}),
    /* @__PURE__ */ n(m8, {})
  ] });
}, u9 = ({ children: e, root: r }) => {
  const { theme: t } = Fo();
  return O(() => {
    const o = r || document.documentElement;
    (o instanceof ShadowRoot ? o.host : o).classList.toggle("dark", t === "dark");
  }, [t, r]), e;
}, p9 = () => {
  const e = Me(null), r = Me(null), t = Me(null), o = zo(), { t: i } = W(), { height: a } = Ec(), { y: s } = Ac(), [c, l] = Z(!1);
  O(() => {
    d(s || a / 2);
  }, [s, a]), O(() => {
    o && d(a / 2);
  }, [o, a]);
  function d(p) {
    if (!r.current || !t.current || o && !c) return;
    const u = o ? 28 : 38, f = 10, m = u + f, w = u + f * 2;
    r.current.style.height = `${(p > a - m ? a - m : p) - (p < 4 ? 0 : u)}px`, t.current.style.height = `${a - (p < m ? m : p) - u}px`;
    let b = p - u / 2;
    b < w / 2 ? b = w / 2 : b > a - w - f / 2 && (b = a - w - f / 2), e.current && (e.current.style.top = `${b - u * 0.35}px`);
  }
  return /* @__PURE__ */ n("div", { className: "z-[2147483647] relative", children: [
    o && /* @__PURE__ */ n(
      Ee,
      {
        ref: e,
        onTouchMove: (p) => {
          p.preventDefault(), c || l(!0), d(p.touches[0].clientY);
        },
        className: G(
          "w-8 h-12 top-[calc(15dvh-24px)] rounded-l-none rounded-r-[8px] items-center fixed left-0 bg-primary"
        ),
        "aria-label": i("al.move_reading_mask"),
        children: /* @__PURE__ */ n(vu, { size: 24, className: "fill-white", iconTitle: i("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        ref: r,
        className: G(
          "top-0 pointer-events-none w-full fixed bg-black/40 left-0 border-b-8 border-primary",
          o && !c && "!h-[calc(15dvh-32px)]"
        )
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        ref: t,
        className: G(
          "bottom-0 pointer-events-none left-0 fixed border-t-8  w-full border-primary bg-black/20",
          o && !c && "!h-[calc(85dvh-32px)]"
        )
      }
    )
  ] });
}, sl = Ce(
  ({ children: e, className: r, ...t }, o) => /* @__PURE__ */ n(
    "div",
    {
      ref: o,
      className: G(
        "relative -z-50 grid place-items-center [&>*]:w-0 [&>*]:absolute [&>*]:h-0 [&>*]:border-l-12 [&>*]:border-r-12 [&>*]:border-b-12 [&>*]:border-transparent",
        r
      ),
      ...t,
      children: [
        /* @__PURE__ */ n("span", { className: "!border-b-white -top-3.5" }),
        /* @__PURE__ */ n("span", { className: "!border-b-primary -top-2.5" })
      ]
    }
  )
), h9 = () => {
  const e = Me(null), r = Me(null), t = Me(null), o = zo(), { t: i } = W(), { width: a, height: s } = Ec(), { x: c, y: l } = Ac();
  O(() => {
    c && l && d(c, l);
  }, [l, c]), O(() => {
    o && d(a / 2, 24);
  }, [o, a]);
  function d(p, u) {
    if (!r.current) return;
    const f = r.current.offsetWidth;
    if (o || (r.current.style.left = `${p - f / 2}px`, r.current.style.top = `${u < 30 ? 16 : u - 16}px`), e.current && t.current && o) {
      const m = p < 24 ? 4 : p > a - 40 ? a - 54 : p - 24;
      r.current.style.top = `${u < 24 ? 14 : u > s - 32 ? s - 42 : u - 10}px`, e.current.style.top = `${u < 24 ? 20 : u > s - 32 ? s - 37 : u - 5}px`, e.current.style.left = `${m}px`, t.current.style.left = `${m + 12}px`, t.current.style.top = `${u < 24 ? 6 : u > s - 36 ? s - 49 : u - 17.1}px`;
    }
  }
  return /* @__PURE__ */ n("div", { className: "z-[2147483647] relative", children: [
    o && /* @__PURE__ */ n(
      Ee,
      {
        ref: e,
        onTouchMove: (p) => {
          p.preventDefault(), d(p.touches[0].clientX, p.touches[0].clientY);
        },
        className: G(
          "w-12 h-8 z-10 left-1/2 fixed bg-primary border-2 border-white border-t-primary top-0 rounded-b-md rounded-t-none"
        ),
        "aria-label": i("al.move_reading_mask"),
        children: /* @__PURE__ */ n(Ru, { size: 22, className: "fill-white", iconTitle: i("al.move_reading_mask") })
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        ref: r,
        className: G(
          "w-xl fixed top-4 left-[calc(50dvw-36rem/2)] h-2 grid place-items-center border-2 border-white bg-primary rounded-full",
          o && "translate-none !left-0 !right-0 !w-auto rounded-none"
        ),
        children: !o && /* @__PURE__ */ n(sl, {})
      }
    ),
    /* @__PURE__ */ n(sl, { ref: t, className: G("mt-2.5 !z-0 ml-3", o ? "fixed" : "hidden") })
  ] });
}, f9 = ({
  x: e,
  y: r,
  tooltip: t
}) => {
  const o = (t == null ? void 0 : t.getBoundingClientRect()) || { width: 0 };
  let i = e, a = r - 36, s = "bottom";
  return i < 34 && (i = 34, s = "left"), i + o.width > window.innerWidth && (i = window.innerWidth - o.width + 12, s = "right"), a < 46 ? (a = 54, s = s === "right" ? "top-right" : "top-left") : s = s === "right" ? "bottom-right" : "bottom-left", { x: i, y: a, arrow: s };
}, g9 = () => {
  const e = Me(null), { t: r } = W(), { type: t, event: o, onClick: i, isActive: a, render: s } = Gt(), [c, l] = Z({ x: 0, y: 0, arrow: "bottom" });
  return O(() => {
    const d = (p) => {
      e.current && !e.current.contains(p.target) && Gt.setState({ isActive: !1 });
    };
    return a ? document.addEventListener("click", d) : document.removeEventListener("click", d), () => {
      document.removeEventListener("click", d);
    };
  }, [a]), O(() => {
    if (o) {
      const { pageX: d, pageY: p } = o;
      l(f9({ x: d, y: p, tooltip: e.current }));
      const u = e.current;
      u && (u.classList.remove("animate-scale"), u.offsetWidth, u.classList.add("animate-scale"));
    }
  }, [o]), /* @__PURE__ */ n(
    Ee,
    {
      ref: e,
      onClick: i,
      style: {
        left: c.x,
        top: c.y,
        boxShadow: "2px 2px 10px 4px rgba(0, 0, 0, .2)"
      },
      className: G(
        "group text-primary-foreground rounded-md absolute z-[2147483647] -translate-x-6 -translate-y-full px-3 h-9 animate-scale"
      ),
      children: [
        s || /* @__PURE__ */ n(we, { children: [
          t === "button" ? /* @__PURE__ */ n(Mu, { size: 20, iconTitle: r("interact") }) : /* @__PURE__ */ n(qc, { size: 20, iconTitle: r("access_link") }),
          /* @__PURE__ */ n("span", { className: "relative bottom-0.5 font-medium text-base", children: r(t === "button" ? "interact" : "access_link") })
        ] }),
        /* @__PURE__ */ n("span", { className: "absolute inset-0 bg-primary group-hover:brightness-85 rounded-md -z-[1]" }),
        /* @__PURE__ */ n(
          "span",
          {
            className: G(
              "size-4 rotate-45 absolute brightness-85 -translate-x-1/2 -z-[2] bg-primary",
              ["bottom", "bottom-left", "bottom-right"].includes(c.arrow) ? "-bottom-5" : "top-3",
              ["bottom-left", "top-left", "bottom", "top"].includes(c.arrow) ? "left-5" : "right-2"
            )
          }
        )
      ]
    }
  );
}, m9 = ["masculino", "feminino", "neutro"], Yn = async (e) => {
  var l, d, p, u, f, m;
  const r = e.trim().replace(".", "");
  if (!r) return null;
  const i = await (await fetch(((w) => `https://pt.wiktionary.org/w/api.php?action=parse&redirects=1&format=json&origin=*&utf8=1&page=${encodeURIComponent(
    w.toLowerCase().replace(".", "")
  )}&prop=text&formatversion=2`)(r))).json(), a = (l = i == null ? void 0 : i.parse) == null ? void 0 : l.text;
  if (!a) return null;
  const s = v9(a, r);
  if ((((d = s.plural) == null ? void 0 : d.toLowerCase()) !== r.toLowerCase() || ((p = s.definitions) == null ? void 0 : p.some((w) => w.toLowerCase().includes("plural de")))) && !(s.definitions && s.definitions.length > 3)) {
    if (s.plural) return await Yn(s.plural);
    let w;
    const b = (f = (u = s.definitions) == null ? void 0 : u.find((E) => E.toLowerCase().includes("plural de"))) == null ? void 0 : f.match(/plural de (.+)/i);
    if (w = (m = b == null ? void 0 : b[1]) == null ? void 0 : m.trim(), w)
      return await Yn(w);
  }
  return { ...s, title: r };
};
function v9(e, r) {
  var w, b, E, S, _, C, x;
  const o = new DOMParser().parseFromString(e, "text/html"), i = (E = (b = (w = o.querySelector("tbody")) == null ? void 0 : w.innerHTML.match(new RegExp(`title="(?<gender>${m9.join("|")})"`))) == null ? void 0 : b.groups) == null ? void 0 : E.gender, a = Array.from(o.querySelectorAll("ol > li")).map((h) => {
    var y;
    const g = h == null ? void 0 : h.querySelectorAll("span.mw-cite-backlink");
    return g == null || g.forEach((k) => k.remove()), (y = h == null ? void 0 : h.textContent) == null ? void 0 : y.trim();
  }).filter((h) => h !== r).filter((h, g, y) => y.indexOf(h) === g).filter(Boolean), s = (_ = (S = o.querySelector("h2")) == null ? void 0 : S.textContent) == null ? void 0 : _.trim(), c = Array.from(o.querySelectorAll("b")).find(
    (h) => h.innerHTML.includes("<u>") || h.innerHTML.includes(".")
  ), l = (C = c == null ? void 0 : c.textContent) == null ? void 0 : C.trim(), d = b9(o), p = {}, u = o.querySelector("table.traduções");
  u && u.querySelectorAll("tr").forEach((g) => {
    var P;
    const y = g.querySelector("td"), k = g.querySelectorAll("td ~ td a");
    if (y && k.length > 0) {
      const D = (P = y.textContent) == null ? void 0 : P.trim().toLowerCase(), j = Array.from(k).map((H) => {
        var $;
        return ($ = H.textContent) == null ? void 0 : $.trim();
      }).filter(Boolean);
      D && (p[D] = j);
    }
  });
  const f = ((x = o.querySelector("img")) == null ? void 0 : x.getAttribute("src")) || void 0, m = Object.keys(p).length > 0 ? p : void 0;
  return {
    wordClass: s,
    pronunciation: l,
    definitions: a,
    etymology: d,
    gender: i,
    imgUrl: f,
    translations: m
  };
}
function b9(e) {
  var o, i, a;
  let r;
  const t = Array.from(e.querySelectorAll("h2, h3")).find(
    (s) => {
      var c;
      return (c = s.textContent) == null ? void 0 : c.toLowerCase().includes("etimologia");
    }
  );
  if (t) {
    const s = (o = t.parentElement) == null ? void 0 : o.nextElementSibling;
    r = (a = (i = s == null ? void 0 : s.firstChild) == null ? void 0 : i.textContent) == null ? void 0 : a.trim();
  }
  return r;
}
const C9 = Ce(({ className: e, size: r = 24, ...t }, o) => /* @__PURE__ */ n(we, { children: /* @__PURE__ */ n(
  "span",
  {
    className: G("flex text-primary items-center justify-center aspect-square", e),
    ref: o,
    ...t,
    children: [
      /* @__PURE__ */ n(
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
          children: /* @__PURE__ */ n("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
        }
      ),
      /* @__PURE__ */ n("span", { className: "sr-only", children: "Loading..." })
    ]
  }
) })), y9 = () => {
  const { t: e } = W();
  return /* @__PURE__ */ n("div", { className: "flex flex-col items-center py-8 justify-center gap-2", children: [
    /* @__PURE__ */ n(C9, { size: 32, className: "relative top-0.5" }),
    /* @__PURE__ */ n("span", { className: "animate-pulse text-sm", children: e("status.searching") })
  ] });
}, w9 = {
  data: null,
  isSearchOpen: !1,
  isFetching: !1
}, Yr = Ot()(() => ({
  ...w9
})), _9 = () => {
  var t, o;
  const { data: e } = Yr();
  if (!e) return null;
  const r = (((t = e.definitions) == null ? void 0 : t.length) || 0) > 1;
  return /* @__PURE__ */ n("div", { className: "text-base space-y-4", children: [
    /* @__PURE__ */ n("p", { children: [
      /* @__PURE__ */ n("strong", { className: "italic", children: (o = e.pronunciation) == null ? void 0 : o.split(".").join("-").replace(":", "") }),
      e.gender && `, ${e.gender}`
    ] }),
    /* @__PURE__ */ n(En, { label: r ? "Definições" : "Definição", value: e.definitions }),
    /* @__PURE__ */ n(En, { label: "Classe gramatical", value: e.wordClass }),
    /* @__PURE__ */ n(En, { label: "Etimologia", value: e.etymology })
  ] });
};
function En({ label: e, value: r }) {
  return r != null && r.length ? Array.isArray(r) ? /* @__PURE__ */ n("div", { children: [
    /* @__PURE__ */ n("p", { className: "text-muted-foreground text-base font-semibold", children: e }),
    /* @__PURE__ */ n("ol", { className: G(r.length > 1 && "list-decimal ps-2 list-inside space-y-1"), children: r.slice(0, 5).map((t, o) => /* @__PURE__ */ n("li", { children: t }, o)) })
  ] }) : /* @__PURE__ */ n("div", { children: [
    /* @__PURE__ */ n("p", { className: "text-muted-foreground text-base font-semibold", children: e }),
    /* @__PURE__ */ n("span", { children: r.split(`
`).map((t, o) => /* @__PURE__ */ n("span", { children: [
      t,
      /* @__PURE__ */ n("br", {})
    ] }, o)) })
  ] }) : null;
}
const y2 = ({ size: e = 24, iconTitle: r, ...t }) => /* @__PURE__ */ n(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    "aria-hidden": r ? "false" : "true",
    children: [
      /* @__PURE__ */ n("title", { children: r }),
      /* @__PURE__ */ n("path", { d: "M9.95229 17.9046C7.75215 17.9046 5.87674 17.1292 4.32604 15.5785C2.77535 14.0278 2 12.1524 2 9.95229C2 7.75215 2.77535 5.87674 4.32604 4.32604C5.87674 2.77535 7.75215 2 9.95229 2C12.1524 2 14.0278 2.77535 15.5785 4.32604C17.1292 5.87674 17.9046 7.75215 17.9046 9.95229C17.9046 10.721 17.7919 11.4831 17.5666 12.2386C17.3413 12.994 17.0033 13.6899 16.5527 14.326L21.5626 19.336C21.8542 19.6276 22 19.9987 22 20.4493C22 20.8999 21.8542 21.271 21.5626 21.5626C21.271 21.8542 20.8999 22 20.4493 22C19.9987 22 19.6276 21.8542 19.336 21.5626L14.326 16.5527C13.6899 17.0033 12.994 17.3413 12.2386 17.5666C11.4831 17.7919 10.721 17.9046 9.95229 17.9046ZM9.95229 14.7237C11.2777 14.7237 12.4042 14.2598 13.332 13.332C14.2598 12.4042 14.7237 11.2777 14.7237 9.95229C14.7237 8.62691 14.2598 7.50033 13.332 6.57256C12.4042 5.6448 11.2777 5.18091 9.95229 5.18091C8.62691 5.18091 7.50033 5.6448 6.57256 6.57256C5.6448 7.50033 5.18091 8.62691 5.18091 9.95229C5.18091 11.2777 5.6448 12.4042 6.57256 13.332C7.50033 14.2598 8.62691 14.7237 9.95229 14.7237Z" })
    ]
  }
), x9 = () => {
  const [e, r] = Z(""), { dictionary: t } = M(), { t: o } = W(), i = () => {
    Yr.setState({ isSearchOpen: !1 });
  }, a = () => {
    M.setState({ dictionary: { ...t, isActive: !0, word: e.trim() } });
  };
  return /* @__PURE__ */ n("div", { className: "flex items-center w-full gap-4", children: [
    /* @__PURE__ */ n(
      "input",
      {
        autofocus: !0,
        onKeyDown: (c) => {
          c.key === "Enter" && e.trim().length >= 3 && a();
        },
        className: "w-full h-10 border-1 placeholder:text-sm rounded-full px-4 focus:outline-solid outline-primary outline-1 focus:border-primary",
        placeholder: o("al.dictionary.search"),
        type: "text",
        value: e,
        onInput: (c) => r(c.currentTarget.value)
      }
    ),
    /* @__PURE__ */ n(
      Ee,
      {
        disabled: e.trim().length < 3,
        onClick: a,
        title: o("al.dictionary.search"),
        "aria-label": o("al.dictionary.search"),
        className: "h-10 aspect-square bg-primary group ml-auto rounded-full",
        children: /* @__PURE__ */ n(y2, { className: "fill-primary-foreground", iconTitle: o("al.dictionary.search"), size: 20 })
      }
    ),
    /* @__PURE__ */ n(
      Ee,
      {
        onClick: i,
        title: o("al.close"),
        "aria-label": o("al.close"),
        className: "h-10 hover:bg-destructive/10 hover:[&>svg]:fill-destructive aspect-square hover:border-destructive/20 border-1 group ml-auto rounded-full",
        children: /* @__PURE__ */ n(Pt, { className: "fill-muted-foreground group-hover:fill-foreground", iconTitle: o("al.close"), size: 20 })
      }
    )
  ] });
}, k9 = () => {
  const e = "speechSynthesis" in window, { t: r } = W(), { dictionary: t } = M(), { data: o, isFetching: i, isSearchOpen: a } = Yr(), [s, c] = Z(!1);
  O(() => {
    Xr();
  }, [o]), O(() => {
    const u = hr("[vw-access-button]");
    c(!!u);
  }, []);
  const l = () => {
    Yr.setState({ isSearchOpen: !0 });
  }, d = (u) => {
    Gt.setState({
      isActive: !0,
      event: u,
      onClick: () => {
        const f = hr("[vw-access-button]");
        f ? f.click() : alert("VLibras Widget não encontrado!");
      },
      render: /* @__PURE__ */ n(we, { children: "Abrir VLibras Widget" })
    });
  }, p = ro(() => {
    var m, w, b;
    const f = `${(((m = o == null ? void 0 : o.definitions) == null ? void 0 : m.length) || 0) > 1 ? "Definições" : "Definição"} de ${o == null ? void 0 : o.title}: ${(b = (w = o == null ? void 0 : o.definitions) == null ? void 0 : w.slice(0, 5)) == null ? void 0 : b.join(". ")}`;
    fr(o ? f : r(t != null && t.word ? "dictionary.no_result" : "dictionary.select_word"));
  }, [o, r, t == null ? void 0 : t.word]);
  return /* @__PURE__ */ n("div", { className: G(i && "pointer-events-none opacity-50", "flex items-center gap-4 p-4 border-t-1"), children: [
    !a && /* @__PURE__ */ n(we, { children: [
      /* @__PURE__ */ n(
        Ee,
        {
          disabled: !s,
          "aria-label": r("al.definition_to_libras"),
          onClick: d,
          className: "bg-primary text-primary-foreground px-4 h-10 rounded-md hover:brightness-90 hidden",
          children: [
            /* @__PURE__ */ n(k1, { "aria-hidden": !0, size: 20 }),
            r("definition_to_libras")
          ]
        }
      ),
      /* @__PURE__ */ n(
        Zr,
        {
          offset: 8,
          align: "start",
          className: "w-72",
          placement: "top",
          content: e ? void 0 : r("speech_is_not_supported"),
          children: /* @__PURE__ */ n(
            Ee,
            {
              disabled: !e,
              "aria-label": r("al.read_definition"),
              onClick: p,
              className: G(
                o ? "px-4" : "aspect-square",
                "bg-primary text-primary-foreground h-10 rounded-full hover:brightness-90"
              ),
              children: [
                /* @__PURE__ */ n(Uo, { size: 18 }),
                o && r("read_definition")
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ n(
        Ee,
        {
          variant: "ghost",
          onClick: l,
          title: r("al.dictionary.search"),
          "aria-label": r("al.dictionary.search"),
          className: "h-10 px-4 group ml-auto rounded-full",
          children: [
            /* @__PURE__ */ n(
              y2,
              {
                className: "fill-muted-foreground group-hover:fill-foreground",
                iconTitle: r("al.dictionary.search"),
                size: 18
              }
            ),
            r("al.dictionary.search").split(" ")[0]
          ]
        }
      )
    ] }),
    a && /* @__PURE__ */ n(x9, {})
  ] });
}, A9 = () => {
  var p;
  const [e, r] = Z("bottom"), { toggle: t } = v2(), { dictionary: o } = M(), { t: i } = W(), { data: a, isLoading: s, error: c } = E3(
    ro(() => Yn((o == null ? void 0 : o.word) || ""), [o == null ? void 0 : o.word])
  );
  O(() => {
    Yr.setState({ data: a, isFetching: s });
  }, [a, s]);
  const l = () => {
    r(e === "top" ? "bottom" : "top");
  }, d = !!a && (o == null ? void 0 : o.word) !== (a == null ? void 0 : a.title);
  return c && console.error(c), /* @__PURE__ */ n(
    "div",
    {
      style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)" },
      className: G(
        "fixed z-[2147483647] left-2 transition-all animate-move-up bg-background border-1 rounded-xl sm:w-lg max-sm:right-2",
        e === "top" ? "top-2" : "bottom-2"
      ),
      children: [
        /* @__PURE__ */ n("div", { className: "flex justify-between gap-2 w-full border-b-1 p-4", children: [
          ((p = o == null ? void 0 : o.word) == null ? void 0 : p.trim()) && /* @__PURE__ */ n("p", { className: "text-xl font-semibold leading-none line-clamp-2 pt-2 break-all", children: [
            /* @__PURE__ */ n(Zc, { size: 24, className: "inline mr-2 relative -top-1", "aria-hidden": !0 }),
            Bc(o.word),
            " ",
            d && /* @__PURE__ */ n("span", { className: "text-muted-foreground font-medium text-sm", children: [
              "(",
              a == null ? void 0 : a.title,
              ")"
            ] })
          ] }),
          !(o != null && o.word) && /* @__PURE__ */ n("p", { className: "pt-1", children: i("dictionary.select_word") }),
          /* @__PURE__ */ n(
            Ee,
            {
              title: i(e === "top" ? "move_bottom" : "move_top"),
              "aria-label": i(e === "top" ? "move_bottom" : "move_top"),
              onClick: l,
              className: "size-9 [&>svg]:not-hover:!fill-muted-foreground ml-auto hover:bg-muted rounded-md aspect-square",
              children: e === "top" ? /* @__PURE__ */ n(Ou, { pointerEvents: "none", size: 22 }) : /* @__PURE__ */ n(Iu, { pointerEvents: "none", size: 22 })
            }
          ),
          /* @__PURE__ */ n(
            Ee,
            {
              className: "rounded-md bg-destructive fill-destructive-foreground hover:brightness-90 size-9 aspect-square",
              title: i("dictionary.close"),
              onClick: () => t(!1),
              children: /* @__PURE__ */ n(Pt, { "aria-hidden": !0, size: 22, iconTitle: i("dictionary.close") })
            }
          )
        ] }),
        (o == null ? void 0 : o.word) && /* @__PURE__ */ n("div", { className: "p-4 max-h-[32dvh] overflow-y-auto overflow-hidden", children: [
          s && /* @__PURE__ */ n(y9, {}),
          a && !s && /* @__PURE__ */ n(_9, {}),
          !a && !s && /* @__PURE__ */ n("p", { className: "text-center py-8", children: [
            i("dictionary.no_result"),
            "..."
          ] })
        ] }),
        /* @__PURE__ */ n(k9, {})
      ]
    }
  );
}, E9 = () => {
  const { brightness: e } = M();
  return e ? /* @__PURE__ */ n(
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
}, S9 = () => {
  const { nightFilter: e } = M();
  return e ? /* @__PURE__ */ n(
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
}, T9 = () => {
  const { t: e } = W(), [r, t] = Z([]);
  return O(() => {
    at("h1, h2, h3, h4, h5, h6").forEach((o, i) => {
      let a = o.id;
      const s = o.textContent;
      a || (a = `vwp_t${i}`, o.id = a), a && s && t((c) => [...c, { id: a, title: s, tag: o.tagName }]);
    });
  }, []), /* @__PURE__ */ n("ul", { className: "flex flex-col w-full p-4 pt-0 animate-move-left", children: [
    r.length === 0 && /* @__PURE__ */ n("p", { className: "text-muted-foreground text-sm", children: e("structure.no_results") }),
    r.length > 0 && r.map((o, i, a) => {
      const s = a[i - 1], c = Number((s == null ? void 0 : s.tag[1]) || 0), l = Number(o.tag[1]);
      return /* @__PURE__ */ n("li", { style: { paddingLeft: c >= l ? 0 : c * 10 }, children: /* @__PURE__ */ n(
        "a",
        {
          href: `#${o.id}`,
          className: G(
            "hover:bg-primary/10 hover:dark:bg-primary/5 relative hover:*:text-primary py-2 group px-3 rounded-md w-full flex gap-2"
          ),
          children: [
            /* @__PURE__ */ n("span", { className: "mr-1 font-bold text-sm pt-0.5 text-muted-foreground", children: o.tag }),
            /* @__PURE__ */ n("p", { className: "group-hover:underline text-base line-clamp-2 break-words", children: o.title })
          ]
        }
      ) }, o.id);
    })
  ] });
}, N9 = () => {
  const { t: e } = W(), [r, t] = Z([]);
  return O(() => {
    const o = at("main, section, nav, form, footer, header"), i = [];
    o.forEach((a, s) => {
      var f, m;
      let c = a.id;
      c || (c = `vwp_s${s}`, a.id = c);
      let l = 0, d = a.parentElement;
      for (; d; )
        ["MAIN", "SECTION", "NAV", "FORM", "FOOTER", "HEADER"].includes(d.tagName) && l++, d = d.parentElement;
      const p = Array.from(a.querySelectorAll("h1, h2, h3, h4, h5, h6")).find((w) => {
        let b = w.parentElement;
        for (; b && b !== a; ) {
          if (["MAIN", "SECTION", "NAV", "FORM", "FOOTER", "HEADER"].includes(b.tagName)) return !1;
          b = b.parentElement;
        }
        return !0;
      }), u = (m = (f = p == null ? void 0 : p.textContent) == null ? void 0 : f.trim()) == null ? void 0 : m.replace(/\s+/g, " ");
      i.push({ id: c, tag: a.tagName.toLowerCase(), depth: l, title: u });
    }), t(i);
  }, []), /* @__PURE__ */ n("ul", { className: "flex flex-col w-full p-4 pt-0 animate-move-left", children: [
    !r.length && /* @__PURE__ */ n("p", { className: "text-muted-foreground text-sm", children: e("structure.no_results") }),
    r.map((o) => /* @__PURE__ */ n("li", { style: { paddingLeft: `${o.depth * 16}px` }, children: /* @__PURE__ */ n(
      "a",
      {
        href: `#${o.id}`,
        className: G(
          "hover:bg-primary/10 hover:dark:bg-primary/5 py-2 px-3 rounded-md w-full flex gap-2 text-sm group"
        ),
        children: [
          /* @__PURE__ */ n("span", { className: "pt-1 text-muted-foreground group-hover:text-primary  text-xs font-mono font-bold", children: "</>" }),
          /* @__PURE__ */ n("p", { className: "group-hover:underline group-hover:text-primary font-semibold text-foreground line-clamp-2", children: [
            o.tag,
            " ",
            o.title && /* @__PURE__ */ n("span", { className: "text-muted-foreground group-hover:text-primary font-normal", children: [
              "- ",
              o.title
            ] })
          ] })
        ]
      }
    ) }, o.id))
  ] });
}, L9 = () => {
  const { t: e } = W(), [r, t] = Z([]);
  return O(() => {
    at("a").forEach((o) => {
      const i = o.textContent, a = o.href;
      i != null && i.trim() && t((s) => [...s, { title: i, href: a }]);
    });
  }, []), /* @__PURE__ */ n("ul", { className: "flex flex-col w-full p-4 pt-0 animate-move-left", children: [
    r.length === 0 && /* @__PURE__ */ n("p", { className: "text-muted-foreground text-sm", children: e("structure.no_results") }),
    r.length > 0 && r.map((o, i) => /* @__PURE__ */ n(
      "a",
      {
        href: o.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: G(
          "hover:bg-primary/10 hover:dark:bg-primary/5 relative hover:*:text-primary py-2 group px-3 rounded-md w-full flex gap-2"
        ),
        children: [
          /* @__PURE__ */ n(qc, { className: "size-4 min-w-4 min-h-4 fill-muted-foreground mt-1 relative group-hover:fill-primary" }),
          /* @__PURE__ */ n("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ n("p", { className: "group-hover:underline text-base line-clamp-2 break-words -mt-0.5", children: o.title }),
            /* @__PURE__ */ n("span", { className: "text-xs break-all line-clamp-1 text-muted-foreground group-hover:text-primary", children: o.href })
          ] }),
          /* @__PURE__ */ n(e8, { className: "min-w-4 w-4 size-4 ml-auto mt-1 invisible group-hover:visible" })
        ]
      },
      `vwp_l${i}`
    ))
  ] });
}, R9 = ["titles", "sections", "links"], M9 = () => {
  const e = Me(null), { t: r } = W(), { toggle: t } = b2(), [o, i] = Z("titles"), a = Bo("(max-height: 600px)");
  return O(() => {
    var s;
    return (s = e == null ? void 0 : e.current) == null ? void 0 : s.focus();
  }, []), /* @__PURE__ */ n(
    "div",
    {
      style: { boxShadow: "2px 2px 15px -5px rgba(0, 0, 0, .2)" },
      className: G(
        "fixed z-[2147483647] flex flex-col left-2 overflow-hidden transition-all animate-move-up bg-background border-1 rounded-xl sm:w-md max-sm:right-2 bottom-2",
        a && "top-2"
      ),
      children: [
        /* @__PURE__ */ n("div", { className: "flex justify-between w-full p-4 border-b-1 gap-2 items-center", children: [
          /* @__PURE__ */ n("p", { className: "font-bold text-lg", children: r("page_structure") }),
          /* @__PURE__ */ n(
            Ee,
            {
              className: "rounded-md bg-destructive fill-destructive-foreground hover:brightness-90 size-9 aspect-square",
              title: r("dictionary.close"),
              onClick: () => t(!1),
              children: /* @__PURE__ */ n(Pt, { "aria-hidden": !0, size: 22, iconTitle: r("dictionary.close") })
            }
          )
        ] }),
        /* @__PURE__ */ n("div", { className: "flex items-center w-fit m-4 p-1.5 rounded-full border-1 group", children: R9.map((s) => /* @__PURE__ */ n(
          Ee,
          {
            ref: s === "titles" ? e : void 0,
            className: G(
              "rounded-full text-sm font-medium text-foreground px-4 hover:bg-accent border-1 border-transparent h-7 w-full",
              s === o && "!bg-primary pointer-events-none !text-primary-foreground"
            ),
            onClick: () => i(s),
            children: r(`structure.${s}`)
          },
          s
        )) }),
        /* @__PURE__ */ n("div", { className: G("h-[60dvh] overflow-y-auto w-full ", a && "h-full"), children: [
          o === "titles" && /* @__PURE__ */ n(T9, {}),
          o === "sections" && /* @__PURE__ */ n(N9, {}),
          o === "links" && /* @__PURE__ */ n(L9, {})
        ] })
      ]
    }
  );
}, I9 = () => {
  const { readingMask: e, readingGuide: r, dictionary: t, pageStructure: o, brightness: i, nightFilter: a } = M(), { isActive: s } = Gt();
  return /* @__PURE__ */ n(we, { children: [
    e && /* @__PURE__ */ n(p9, {}),
    r && /* @__PURE__ */ n(h9, {}),
    s && /* @__PURE__ */ n(g9, {}),
    (t == null ? void 0 : t.isActive) && /* @__PURE__ */ n(A9, {}),
    i && /* @__PURE__ */ n(E9, {}),
    a && /* @__PURE__ */ n(S9, {}),
    o && /* @__PURE__ */ n(M9, {})
  ] });
}, O9 = `/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base--line-height: 1.5 ;--text-lg--line-height:calc(1.75/1.125);--text-xl--line-height:calc(1.75/1.25);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-normal:0em;--leading-tight:1.25;--leading-snug:1.375;--leading-normal:1.5;--leading-relaxed:1.625;--radius-2xl:1rem;--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary:var(--primary);--tw-translate-y:0;--tw-translate-x:0}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{--tw-border-style:solid;border-style:solid;border-color:var(--border);outline-offset:-1px;outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){*{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}:focus{outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--primary);--tw-outline-style:solid;outline-style:solid}:host{border-color:var(--border);fill:var(--foreground);color:var(--foreground)}:where(:root),:root:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@media (prefers-color-scheme:dark){:root{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}}:root:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=dark]:checked),[data-theme=dark]{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}.chat{--mask-chat:url("data:image/svg+xml,%3csvg width='13' height='13' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 11.5004C0 13.0004 2 13.0004 2 13.0004H12H13V0.00036329L12.5 0C12.5 0 11.977 2.09572 11.8581 2.50033C11.6075 3.35237 10.9149 4.22374 9 5.50036C6 7.50036 0 10.0004 0 11.5004Z'/%3e%3c/svg%3e")}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}.tooltip{--tt-bg:var(--color-neutral);--tt-off: calc(100% + .5rem) ;--tt-tail: calc(100% + 1px + .25rem) ;display:inline-block;position:relative}.tooltip>:where(.tooltip-content),.tooltip[data-tip]:before{border-radius:var(--radius-field);text-align:center;white-space:normal;max-width:20rem;color:var(--color-neutral-content);opacity:0;background-color:var(--tt-bg);pointer-events:none;z-index:1;--tw-content:attr(data-tip);content:var(--tw-content);width:max-content;padding-block:.25rem;padding-inline:.5rem;font-size:.875rem;line-height:1.25em;transition:opacity .2s cubic-bezier(.4,0,.2,1) 75ms,transform .2s cubic-bezier(.4,0,.2,1) 75ms;position:absolute}.tooltip:after{opacity:0;background-color:var(--tt-bg);content:"";pointer-events:none;--mask-tooltip:url("data:image/svg+xml,%3Csvg width='10' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.500009 1C3.5 1 3.00001 4 5.00001 4C7 4 6.5 1 9.5 1C10 1 10 0.499897 10 0H0C-1.99338e-08 0.5 0 1 0.500009 1Z' fill='black'/%3E%3C/svg%3E%0A");width:.625rem;height:.25rem;-webkit-mask-position:-1px 0;mask-position:-1px 0;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-image:var(--mask-tooltip);mask-image:var(--mask-tooltip);transition:opacity .2s cubic-bezier(.4,0,.2,1) 75ms,transform .2s cubic-bezier(.4,0,.2,1) 75ms;display:block;position:absolute}:is(.tooltip.tooltip-open,.tooltip[data-tip]:hover,.tooltip:hover,.tooltip:has(:focus-visible))>.tooltip-content,:is(.tooltip.tooltip-open,.tooltip[data-tip]:hover,.tooltip:hover,.tooltip:has(:focus-visible))[data-tip]:before,:is(.tooltip.tooltip-open,.tooltip[data-tip]:hover,.tooltip:hover,.tooltip:has(:focus-visible)):after{opacity:1;--tt-pos:0rem;transition:opacity .2s cubic-bezier(.4,0,.2,1),transform .2s cubic-bezier(.4,0,.2,1)}.tooltip>.tooltip-content,.tooltip[data-tip]:before{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-off)50%}.tooltip:after{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-tail)50%}.tab{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;--tab-p:1rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));flex-wrap:wrap;order:var(--tab-order);height:calc(var(--size-field,.25rem)*10);border-color:#0000;justify-content:center;align-items:center;padding-inline-start:var(--tab-p);padding-inline-end:var(--tab-p);font-size:.875rem;display:inline-flex;position:relative}@media (hover:hover){.tab:hover{color:var(--color-base-content)}}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{content:attr(aria-label)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0;position:absolute;top:0;right:0;bottom:0;left:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true]))+.tab-content{height:100%;display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg);--btn-noise:var(--fx-noise);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}:where(.btn){width:unset}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%));--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));--btn-border:var(--btn-color,var(--color-base-200));--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0);translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%);--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content);box-shadow:none}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral);--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent);--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.loading{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.\\!pointer-events-none{pointer-events:none!important}.pointer-events-none{pointer-events:none}.collapse{border-radius:var(--radius-box,1rem);isolation:isolate;grid-template-rows:max-content 0fr;width:100%;transition:grid-template-rows .2s;display:grid;position:relative;overflow:hidden}.collapse:not(td,tr,colgroup){visibility:visible}.collapse>input:is([type=checkbox],[type=radio]){-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0;z-index:1;grid-row-start:1;grid-column-start:1;width:100%;min-height:3.75rem;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out}.collapse:is([open],:focus:not(.collapse-close)),.collapse:not(.collapse-close):has(>input:is([type=checkbox],[type=radio]):checked){grid-template-rows:max-content 1fr}.collapse:is([open],:focus:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){visibility:visible;min-height:fit-content}.collapse:focus-visible,.collapse:has(>input:is([type=checkbox],[type=radio]):focus-visible){outline-color:var(--color-base-content);outline-offset:2px;outline-width:2px;outline-style:solid}.collapse:not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-close)>.collapse-title{cursor:pointer}.collapse:focus:not(.collapse-close,.collapse[open])>.collapse-title{cursor:unset}.collapse:is([open],:focus:not(.collapse-close))>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){padding-bottom:1rem;transition:padding .2s ease-out,background-color .2s ease-out}.collapse[open].collapse-arrow>.collapse-title:after,.collapse.collapse-open.collapse-arrow>.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse.collapse-open.collapse-plus>.collapse-title:after{content:"−"}.collapse.collapse-arrow:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-arrow:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse[open].collapse-plus>.collapse-title:after,.collapse.collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-plus:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{content:"−"}.collapse:is(details){width:100%}.collapse:is(details) summary{display:block;position:relative}.collapse:is(details) summary::-webkit-details-marker{display:none}.collapse:is(details) summary{outline:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);--input-color:var(--color-base-content);--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;transition:color .3s,grid-template-columns .2s;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab,red,red)){.toggle{box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset;--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000)}}.toggle>*{z-index:1;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor;background-color:currentColor;background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab,red,red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000)}}@media (forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){:is(.input :where(input):focus,.input :where(input):focus-within){outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color);outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}@supports (color:color-mix(in lab,red,red)){:is(.input:focus,.input:focus-within){box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content);box-shadow:none}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled])){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.indicator{width:max-content;display:inline-flex;position:relative}.indicator :where(.indicator-item){z-index:1;white-space:nowrap;top:var(--inidicator-t,0);bottom:var(--inidicator-b,auto);left:var(--inidicator-s,auto);right:var(--inidicator-e,0);translate:var(--inidicator-x,50%)var(--indicator-y,-50%);position:absolute}.range{-webkit-appearance:none;-moz-appearance:none;appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor;cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media (forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;-webkit-appearance:none;-moz-appearance:none;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content));cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;position:relative}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.radio{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor;animation:.2s ease-out radio}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.radio:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.\\!inset-0{inset:calc(var(--spacing)*0)!important}.inset-0{inset:calc(var(--spacing)*0)}.inset-4{inset:calc(var(--spacing)*4)}.-top-1{top:calc(var(--spacing)*-1)}.-top-2\\.5{top:calc(var(--spacing)*-2.5)}.-top-3\\.5{top:calc(var(--spacing)*-3.5)}.-top-\\[1px\\]{top:-1px}.-top-\\[3px\\]{top:-3px}.-top-\\[13\\.444px\\]{top:-13.444px}.top-0{top:calc(var(--spacing)*0)}.top-0\\.5{top:calc(var(--spacing)*.5)}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing)*2)}.top-3{top:calc(var(--spacing)*3)}.top-4{top:calc(var(--spacing)*4)}.top-\\[calc\\(15dvh-24px\\)\\]{top:calc(15dvh - 24px)}.top-auto{top:auto}.\\!right-0{right:calc(var(--spacing)*0)!important}.-right-6{right:calc(var(--spacing)*-6)}.right-0{right:calc(var(--spacing)*0)}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5{right:calc(var(--spacing)*2.5)}.right-auto{right:auto}.-bottom-5{bottom:calc(var(--spacing)*-5)}.-bottom-\\[13\\.444px\\]{bottom:-13.444px}.-bottom-\\[100dvh\\]{bottom:-100dvh}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-0\\.5{bottom:calc(var(--spacing)*.5)}.bottom-2{bottom:calc(var(--spacing)*2)}.bottom-4{bottom:calc(var(--spacing)*4)}.\\!left-0{left:calc(var(--spacing)*0)!important}.left-0{left:calc(var(--spacing)*0)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.left-5{left:calc(var(--spacing)*5)}.left-\\[calc\\(50dvw-36rem\\/2\\)\\]{left:calc(50dvw - 18rem)}.left-auto{left:auto}.modal-backdrop{color:#0000;z-index:-1;grid-row-start:1;grid-column-start:1;place-self:stretch stretch;display:grid}.modal-backdrop button{cursor:pointer}.\\!z-0{z-index:0!important}.-z-50{z-index:-50}.-z-\\[1\\]{z-index:-1}.-z-\\[2\\]{z-index:-2}.z-10{z-index:10}.z-\\[2147483640\\]{z-index:2147483640}.z-\\[2147483647\\]{z-index:2147483647}.col-auto{grid-column:auto}.col-span-full{grid-column:1/-1}.m-4{margin:calc(var(--spacing)*4)}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{content:"×"}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.-mt-0\\.5{margin-top:calc(var(--spacing)*-.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2\\.5{margin-top:calc(var(--spacing)*2.5)}.mt-3\\.5{margin-top:calc(var(--spacing)*3.5)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-3\\.5{margin-bottom:calc(var(--spacing)*3.5)}.-ml-2{margin-left:calc(var(--spacing)*-2)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-auto{margin-left:auto}.badge{border-radius:var(--radius-selector);vertical-align:middle;color:var(--badge-fg);border:var(--border)solid var(--badge-color,var(--color-base-200));width:fit-content;padding-inline:calc(.25rem*3 - var(--border));background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);background-color:var(--badge-bg);--badge-bg:var(--badge-color,var(--color-base-100));--badge-fg:var(--color-base-content);--size:calc(var(--size-selector,.25rem)*6);height:var(--size);justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;display:inline-flex}.badge.badge-outline{--badge-fg:var(--badge-color);--badge-bg:#0000;background-image:none;border-color:currentColor}.badge.badge-dash{--badge-fg:var(--badge-color);--badge-bg:#0000;background-image:none;border-style:dashed;border-color:currentColor}.badge.badge-soft{color:var(--badge-color,var(--color-base-content));background-color:var(--badge-color,var(--color-base-content));border-color:var(--badge-color,var(--color-base-content));background-image:none}@supports (color:color-mix(in lab,red,red)){.badge.badge-soft{background-color:color-mix(in oklab,var(--badge-color,var(--color-base-content))8%,var(--color-base-100));border-color:color-mix(in oklab,var(--badge-color,var(--color-base-content))10%,var(--color-base-100))}}.tabs{--tabs-height:auto;--tabs-direction:row;height:var(--tabs-height);flex-wrap:wrap;flex-direction:var(--tabs-direction);display:flex}.footer{grid-auto-flow:row;place-items:start;gap:2.5rem 1rem;width:100%;font-size:.875rem;line-height:1.25rem;display:grid}.footer>*{place-items:start;gap:.5rem;display:grid}.footer.footer-center{text-align:center;grid-auto-flow:column dense;place-items:center}.footer.footer-center>*{place-items:center}.line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.mask{vertical-align:middle;display:inline-block;-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.aspect-square{aspect-ratio:1}.size-3\\.5{width:calc(var(--spacing)*3.5);height:calc(var(--spacing)*3.5)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-7{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-9{width:calc(var(--spacing)*9);height:calc(var(--spacing)*9)}.size-10{width:calc(var(--spacing)*10);height:calc(var(--spacing)*10)}.\\!h-\\[calc\\(15dvh-32px\\)\\]{height:calc(15dvh - 32px)!important}.\\!h-\\[calc\\(85dvh-32px\\)\\]{height:calc(85dvh - 32px)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\.5{height:calc(var(--spacing)*2.5)}.h-4{height:calc(var(--spacing)*4)}.h-4\\.5{height:calc(var(--spacing)*4.5)}.h-7{height:calc(var(--spacing)*7)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-14{height:calc(var(--spacing)*14)}.h-64{height:calc(var(--spacing)*64)}.h-\\[60dvh\\]{height:60dvh}.h-\\[75dvh\\]{height:75dvh}.h-\\[400px\\]{height:400px}.h-full{height:100%}.\\!max-h-0{max-height:calc(var(--spacing)*0)!important}.max-h-2{max-height:calc(var(--spacing)*2)}.max-h-28{max-height:calc(var(--spacing)*28)}.max-h-\\[32dvh\\]{max-height:32dvh}.max-h-\\[65\\.3dvh\\]{max-height:65.3dvh}.max-h-\\[400px\\]{max-height:400px}.min-h-4{min-height:calc(var(--spacing)*4)}.min-h-6{min-height:calc(var(--spacing)*6)}.min-h-full{min-height:100%}.\\!w-\\[calc\\(100\\%\\+10px\\)\\]{width:calc(100% + 10px)!important}.\\!w-auto{width:auto!important}.w-2\\.5{width:calc(var(--spacing)*2.5)}.w-4{width:calc(var(--spacing)*4)}.w-8{width:calc(var(--spacing)*8)}.w-12{width:calc(var(--spacing)*12)}.w-72{width:calc(var(--spacing)*72)}.w-\\[1px\\]{width:1px}.w-fit{width:fit-content}.w-full{width:100%}.w-xl{width:576px}.max-w-10{max-width:calc(var(--spacing)*10)}.min-w-4{min-width:calc(var(--spacing)*4)}.min-w-6{min-width:calc(var(--spacing)*6)}.min-w-9{min-width:calc(var(--spacing)*9)}.min-w-10{min-width:calc(var(--spacing)*10)}.-translate-1\\/2{--tw-translate-x: -50% ;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-6{--tw-translate-x:calc(var(--spacing)*-6);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-1\\/2{--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-1\\/2{--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-none{translate:none}.-rotate-90{rotate:-90deg}.rotate-0{rotate:none}.rotate-45{rotate:45deg}.rotate-180{rotate:180deg}.animate-move-left{animation:.2s ease-in-out move-left}.animate-move-right{animation:.2s ease-in-out move-right}.animate-move-up{animation:.2s ease-in-out move-up}.animate-pulse{animation:var(--animate-pulse)}.animate-scale{animation:.2s ease-in-out scale}.animate-spin{animation:var(--animate-spin)}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.\\!cursor-not-allowed{cursor:not-allowed!important}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.auto-rows-min{grid-auto-rows:min-content}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-\\[repeat\\(auto-fill\\,minmax\\(120px\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.grid-cols-\\[repeat\\(auto-fill\\,minmax\\(132px\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(132px,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.place-content-center{place-content:center}.place-items-center{place-items:center}.items-baseline-last{align-items:last baseline}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing)*0)}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-2{column-gap:calc(var(--spacing)*2)}.gap-y-4{row-gap:calc(var(--spacing)*4)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:calc(var(--radius) + 4px)}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-l-none{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-\\[8px\\]{border-top-right-radius:8px;border-bottom-right-radius:8px}.rounded-r-none{border-top-right-radius:0;border-bottom-right-radius:0}.rounded-b-md{border-bottom-right-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t-1{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-8{border-top-style:var(--tw-border-style);border-top-width:8px}.border-b-1{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-8{border-bottom-style:var(--tw-border-style);border-bottom-width:8px}.border-none{--tw-border-style:none;border-style:none}.\\!border-border{border-color:var(--border)!important}.border-border{border-color:var(--border)}.border-foreground\\/20{border-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.border-foreground\\/20{border-color:color-mix(in oklab,var(--foreground)20%,transparent)}}.border-primary,.border-primary\\/50{border-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.border-primary\\/50{border-color:color-mix(in oklab,var(--primary)50%,transparent)}}.border-transparent{border-color:#0000}.border-white{border-color:var(--color-white)}.border-t-primary{border-top-color:var(--primary)}.\\!border-b-primary{border-bottom-color:var(--primary)!important}.\\!border-b-white{border-bottom-color:var(--color-white)!important}.\\!bg-black\\/20{background-color:#0003!important}@supports (color:color-mix(in lab,red,red)){.\\!bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)!important}}.\\!bg-muted\\/30{background-color:var(--muted)!important}@supports (color:color-mix(in lab,red,red)){.\\!bg-muted\\/30{background-color:color-mix(in oklab,var(--muted)30%,transparent)!important}}.\\!bg-primary,.\\!bg-primary\\/5{background-color:var(--primary)!important}@supports (color:color-mix(in lab,red,red)){.\\!bg-primary\\/5{background-color:color-mix(in oklab,var(--primary)5%,transparent)!important}}.\\!bg-transparent{background-color:#0000!important}.bg-accent{background-color:var(--accent)}.bg-background{background-color:var(--background)}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}}.bg-border{background-color:var(--border)}.bg-destructive{background-color:var(--destructive)}.bg-foreground\\/15{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.bg-foreground\\/15{background-color:color-mix(in oklab,var(--foreground)15%,transparent)}}.bg-muted{background-color:var(--muted)}.bg-popover{background-color:var(--popover)}.bg-primary,.bg-primary\\/30{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/30{background-color:color-mix(in oklab,var(--primary)30%,transparent)}}.bg-red-50{background-color:var(--color-red-50)}.bg-white{background-color:var(--color-white)}.\\!fill-primary-foreground{fill:var(--primary-foreground)!important}.fill-black{fill:var(--color-black)}.fill-destructive-foreground{fill:var(--destructive-foreground)}.fill-foreground\\/80{fill:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.fill-foreground\\/80{fill:color-mix(in oklab,var(--foreground)80%,transparent)}}.fill-muted-foreground{fill:var(--muted-foreground)}.fill-primary{fill:var(--primary)}.fill-primary-foreground{fill:var(--primary-foreground)}.fill-white{fill:var(--color-white)}.\\!p-0{padding:calc(var(--spacing)*0)!important}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-2{padding:calc(var(--spacing)*2)}.p-2\\.5{padding:calc(var(--spacing)*2.5)}.p-4{padding:calc(var(--spacing)*4)}.p-8{padding:calc(var(--spacing)*8)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-8{padding-block:calc(var(--spacing)*8)}.ps-2{padding-inline-start:calc(var(--spacing)*2)}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-0\\.5{padding-top:calc(var(--spacing)*.5)}.pt-1{padding-top:calc(var(--spacing)*1)}.pt-2{padding-top:calc(var(--spacing)*2)}.pr-1{padding-right:calc(var(--spacing)*1)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-3{padding-right:calc(var(--spacing)*3)}.pb-1{padding-bottom:calc(var(--spacing)*1)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pl-2{padding-left:calc(var(--spacing)*2)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.font-mono{font-family:var(--font-mono)}.text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:calc(var(--font-size)*1.125);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:calc(var(--font-size)*1.25);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:calc(var(--font-size)*.75);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[13\\.5px\\]{font-size:13.5px}.text-\\[13px\\]{font-size:13px}.leading-none{--tw-leading:1;line-height:1}.leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-normal{--tw-tracking:var(--tracking-normal);letter-spacing:var(--tracking-normal)}.break-words{overflow-wrap:break-word}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.\\!text-muted-foreground{color:var(--muted-foreground)!important}.\\!text-primary-foreground{color:var(--primary-foreground)!important}.text-destructive-foreground{color:var(--destructive-foreground)}.text-foreground,.text-foreground\\/80{color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.text-foreground\\/80{color:color-mix(in oklab,var(--foreground)80%,transparent)}}.text-muted-foreground{color:var(--muted-foreground)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground,.text-primary-foreground\\/80{color:var(--primary-foreground)}@supports (color:color-mix(in lab,red,red)){.text-primary-foreground\\/80{color:color-mix(in oklab,var(--primary-foreground)80%,transparent)}}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.italic{font-style:italic}.opacity-50{opacity:.5}.opacity-80{opacity:.8}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.outline-destructive-foreground{outline-color:var(--destructive-foreground)}.outline-primary{outline-color:var(--primary)}.outline-primary-foreground{outline-color:var(--primary-foreground)}.brightness-85{--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[bottom\\,width\\]{transition-property:bottom,width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.\\!outline-none{--tw-outline-style:none!important;outline-style:none!important}:is(.\\*\\:\\!pointer-events-none>*){pointer-events:none!important}:is(.\\*\\:pointer-events-none>*){pointer-events:none}@media (hover:hover){.group-hover\\:visible:is(:where(.group):hover *){visibility:visible}.group-hover\\:ml-0:is(:where(.group):hover *){margin-left:calc(var(--spacing)*0)}.group-hover\\:fill-destructive:is(:where(.group):hover *){fill:var(--destructive)}.group-hover\\:fill-foreground:is(:where(.group):hover *){fill:var(--foreground)}.group-hover\\:fill-primary:is(:where(.group):hover *){fill:var(--primary)}.group-hover\\:text-primary:is(:where(.group):hover *){color:var(--primary)}.group-hover\\:underline:is(:where(.group):hover *){text-decoration-line:underline}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\:brightness-85:is(:where(.group):hover *){--tw-brightness:brightness(85%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.group-data-\\[disabled\\=\\'true\\'\\]\\:\\!hidden:is(:where(.group)[data-disabled=true] *){display:none!important}.placeholder\\:text-sm::placeholder{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}@media (hover:hover){.hover\\:border-destructive\\/20:hover{border-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.hover\\:border-destructive\\/20:hover{border-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.hover\\:border-primary:hover{border-color:var(--primary)}.hover\\:bg-accent:hover{background-color:var(--accent)}.hover\\:bg-black\\/5:hover{background-color:#0000000d}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-black\\/5:hover{background-color:color-mix(in oklab,var(--color-black)5%,transparent)}}.hover\\:bg-destructive\\/5:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-destructive\\/5:hover{background-color:color-mix(in oklab,var(--destructive)5%,transparent)}}.hover\\:bg-destructive\\/10:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-destructive\\/10:hover{background-color:color-mix(in oklab,var(--destructive)10%,transparent)}}.hover\\:bg-foreground\\/5:hover{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-foreground\\/5:hover{background-color:color-mix(in oklab,var(--foreground)5%,transparent)}}.hover\\:bg-foreground\\/10:hover{background-color:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-foreground\\/10:hover{background-color:color-mix(in oklab,var(--foreground)10%,transparent)}}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:bg-primary\\/10:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/10:hover{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.hover\\:fill-foreground:hover{fill:var(--foreground)}.hover\\:text-foreground:hover{color:var(--foreground)}.hover\\:brightness-90:hover{--tw-brightness:brightness(90%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.hover\\:brightness-110:hover{--tw-brightness:brightness(110%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}:is(.hover\\:\\*\\:text-primary:hover>*){color:var(--primary)}}.focus\\:border-primary:focus{border-color:var(--primary)}.focus\\:outline-solid:focus{--tw-outline-style:solid;outline-style:solid}.data-\\[active\\=\\'true\\'\\]\\:bottom-2[data-active=true]{bottom:calc(var(--spacing)*2)}.data-\\[active\\=true\\]\\:\\!border-primary[data-active=true]{border-color:var(--primary)!important}.data-\\[active\\=true\\]\\:\\!bg-primary\\/10[data-active=true]{background-color:var(--primary)!important}@supports (color:color-mix(in lab,red,red)){.data-\\[active\\=true\\]\\:\\!bg-primary\\/10[data-active=true]{background-color:color-mix(in oklab,var(--primary)10%,transparent)!important}}@media not all and (min-width:40rem){.max-sm\\:right-2{right:calc(var(--spacing)*2)}.max-sm\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media not all and (min-width:30rem){.max-xs\\:left-2{left:calc(var(--spacing)*2)}}@media not all and (min-width:20rem){.max-xxs\\:hidden{display:none}}@media (min-width:30rem){.xs\\:mb-1{margin-bottom:calc(var(--spacing)*1)}.xs\\:h-\\[90dvh\\]{height:90dvh}.xs\\:max-h-\\[80dvh\\]{max-height:80dvh}.xs\\:w-md{width:448px}.xs\\:grid-cols-\\[repeat\\(auto-fill\\,minmax\\(180px\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}.xs\\:gap-x-1{column-gap:calc(var(--spacing)*1)}.xs\\:text-lg{font-size:calc(var(--font-size)*1.125);line-height:var(--tw-leading,var(--text-lg--line-height))}.xs\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}.xs\\:text-\\[13\\.5px\\]{font-size:13.5px}.xs\\:text-\\[15px\\]{font-size:15px}}@media (min-width:40rem){.sm\\:col-span-2{grid-column:span 2/span 2}.sm\\:size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.sm\\:size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.sm\\:size-10{width:calc(var(--spacing)*10);height:calc(var(--spacing)*10)}.sm\\:h-\\[22px\\]{height:22px}.sm\\:w-lg{width:512px}.sm\\:w-md{width:448px}.sm\\:text-base{font-size:calc(var(--font-size)*1);line-height:var(--tw-leading,var(--text-base--line-height))}.sm\\:text-lg{font-size:calc(var(--font-size)*1.125);line-height:var(--tw-leading,var(--text-lg--line-height))}.sm\\:text-sm{font-size:calc(var(--font-size)*.875);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (min-width:48rem){.md\\:w-2xl{width:672px}.md\\:p-16{padding:calc(var(--spacing)*16)}}.dark\\:\\!bg-black\\/50:is(:host(.dark) *){background-color:#00000080!important}@supports (color:color-mix(in lab,red,red)){.dark\\:\\!bg-black\\/50:is(:host(.dark) *){background-color:color-mix(in oklab,var(--color-black)50%,transparent)!important}}.dark\\:bg-background:is(:host(.dark) *){background-color:var(--background)}.dark\\:bg-muted:is(:host(.dark) *){background-color:var(--muted)}.dark\\:bg-popover:is(:host(.dark) *){background-color:var(--popover)}.dark\\:\\!fill-white:is(:host(.dark) *){fill:var(--color-white)!important}.dark\\:\\!shadow-none:is(:host(.dark) *){--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}@media (hover:hover){.hover\\:dark\\:bg-primary\\/5:hover:is(:host(.dark) *){background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:dark\\:bg-primary\\/5:hover:is(:host(.dark) *){background-color:color-mix(in oklab,var(--primary)5%,transparent)}}}.\\[\\&_svg\\]\\:size-8 svg{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.\\[\\&\\>\\*\\]\\:\\!pointer-events-none>*{pointer-events:none!important}.\\[\\&\\>\\*\\]\\:absolute>*{position:absolute}.\\[\\&\\>\\*\\]\\:h-0>*{height:calc(var(--spacing)*0)}.\\[\\&\\>\\*\\]\\:w-0>*{width:calc(var(--spacing)*0)}.\\[\\&\\>\\*\\]\\:border-r-12>*{border-right-style:var(--tw-border-style);border-right-width:12px}.\\[\\&\\>\\*\\]\\:border-b-12>*{border-bottom-style:var(--tw-border-style);border-bottom-width:12px}.\\[\\&\\>\\*\\]\\:border-l-12>*{border-left-style:var(--tw-border-style);border-left-width:12px}.\\[\\&\\>\\*\\]\\:border-transparent>*{border-color:#0000}.\\[\\&\\>\\*\\]\\:fill-primary>*{fill:var(--primary)}.\\[\\&\\>\\*\\]\\:text-primary>*{color:var(--primary)}.\\[\\&\\>svg\\]\\:pointer-events-none>svg{pointer-events:none}.\\[\\&\\>svg\\]\\:size-7>svg{width:calc(var(--spacing)*7);height:calc(var(--spacing)*7)}.\\[\\&\\>svg\\]\\:rounded-full>svg{border-radius:3.40282e38px}.\\[\\&\\>svg\\]\\:bg-accent>svg{background-color:var(--accent)}.\\[\\&\\>svg\\]\\:fill-foreground>svg,.\\[\\&\\>svg\\]\\:fill-foreground\\/80>svg{fill:var(--foreground)}@supports (color:color-mix(in lab,red,red)){.\\[\\&\\>svg\\]\\:fill-foreground\\/80>svg{fill:color-mix(in oklab,var(--foreground)80%,transparent)}}.\\[\\&\\>svg\\]\\:p-1>svg{padding:calc(var(--spacing)*1)}.\\[\\&\\>svg\\]\\:not-hover\\:\\!fill-muted-foreground>svg:not(:hover){fill:var(--muted-foreground)!important}@media not all and (hover:hover){.\\[\\&\\>svg\\]\\:not-hover\\:\\!fill-muted-foreground>svg{fill:var(--muted-foreground)!important}}@media (hover:hover){.hover\\:\\[\\&\\>svg\\]\\:fill-destructive:hover>svg{fill:var(--destructive)}.hover\\:\\[\\&\\>svg\\]\\:fill-foreground:hover>svg{fill:var(--foreground)}}.data-\\[active\\=true\\]\\:\\[\\&\\>svg\\]\\:bg-primary[data-active=true]>svg{background-color:var(--primary)}.data-\\[active\\=true\\]\\:\\[\\&\\>svg\\]\\:fill-primary-foreground[data-active=true]>svg{fill:var(--primary-foreground)}@media (min-width:30rem){.xs\\:\\[\\&\\>svg\\]\\:size-8>svg{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.xs\\:\\[\\&\\>svg\\]\\:p-1\\.5>svg{padding:calc(var(--spacing)*1.5)}}}:host{--background:oklch(1 0 0);--foreground:oklch(25% 0 0);--popover:oklch(1 0 0);--popover-foreground:oklch(.145 0 0);--primary:oklch(56.99% .1959 259.98);--primary-foreground:oklch(1 0 0);--secondary:oklch(.97 0 0);--secondary-foreground:oklch(.205 0 0);--muted:oklch(.97 0 0);--muted-foreground:oklch(.556 0 0);--accent:oklch(.97 0 0);--accent-foreground:oklch(.205 0 0);--destructive:oklch(.577 .245 27.325);--destructive-foreground:oklch(.985 0 0);--border:oklch(.922 0 0);--input:oklch(.922 0 0);--ring:oklch(.708 0 0);--radius:10px;--spacing:4px;--font-sans:"VLibrasWidget_Font",sans-serif;--font-size:16px}:host(.dark){--background:oklch(.16 0 0);--foreground:oklch(.985 0 0);--popover:oklch(.2 0 0);--popover-foreground:oklch(.985 0 0);--secondary:oklch(.269 0 0);--secondary-foreground:oklch(.985 0 0);--muted:oklch(.2 0 0);--muted-foreground:oklch(.708 0 0);--accent:oklch(.269 0 0);--accent-foreground:oklch(.985 0 0);--destructive:oklch(.637 .237 25.331);--destructive-foreground:oklch(.985 0 0);--border:oklch(.269 0 0);--input:oklch(.269 0 0);--ring:oklch(.439 0 0)}@keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes move-left{0%{opacity:0;transform:translate(-100%)}to{opacity:1;transform:translate(0)}}@keyframes move-right{0%{opacity:0;transform:translate(100%)}to{opacity:1;transform:translate(0)}}@keyframes move-up{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}:host{font-family:var(--font-sans)!important}:host ::-webkit-scrollbar{height:calc(var(--spacing)*2.5);width:calc(var(--spacing)*2.5)}:host ::-webkit-scrollbar-track{background-color:#0000}:host ::-webkit-scrollbar-thumb{border-style:var(--tw-border-style);--tw-border-style:solid;background-color:var(--border);background-clip:padding-box;border:1px solid #0000;border-radius:3.40282e38px}@keyframes dropdown{0%{opacity:0}}@keyframes progress{50%{background-position-x:-115%}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}`, P9 = ({ children: e, root: r }) => /* @__PURE__ */ n(u9, { root: r, children: [
  /* @__PURE__ */ n("style", { children: O9 }),
  /* @__PURE__ */ n(I9, {}),
  e
] }), D9 = () => {
  const { isActive: e } = M(), { t: r } = W();
  return /* @__PURE__ */ n(
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
      children: /* @__PURE__ */ n(
        x1,
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
}, H9 = () => (O(() => {
  var o;
  const e = (o = document.getElementById("vwp-app-wrapper")) == null ? void 0 : o.shadowRoot, r = e == null ? void 0 : e.getElementById("vwp-access-wrapper"), t = document.createElement("div");
  Je(/* @__PURE__ */ n(D9, {}), t), r == null || r.appendChild(t);
}, []), null), z9 = () => /* @__PURE__ */ n(we, { children: /* @__PURE__ */ n(H9, {}) });
var B9 = "2.0.3", Kn = 500, ll = "user-agent", gr = "", cl = "?", Mo = "function", It = "undefined", mr = "object", Jn = "string", Ue = "browser", _t = "cpu", ft = "device", it = "engine", Ye = "os", lr = "result", L = "name", A = "type", N = "vendor", R = "version", Ve = "architecture", Kr = "major", T = "model", Ur = "console", Y = "mobile", le = "tablet", Te = "smarttv", ht = "wearable", Sn = "xr", Vr = "embedded", Pr = "inapp", R1 = "brands", jt = "formFactors", M1 = "fullVersionList", cr = "platform", I1 = "platformVersion", Vo = "bitness", Dt = "sec-ch-ua", F9 = Dt + "-full-version-list", $9 = Dt + "-arch", U9 = Dt + "-" + Vo, V9 = Dt + "-form-factors", j9 = Dt + "-" + Y, G9 = Dt + "-" + T, w2 = Dt + "-" + cr, q9 = w2 + "-version", _2 = [R1, M1, Y, T, cr, I1, Ve, jt, Vo], ko = "Amazon", ir = "Apple", dl = "ASUS", ul = "BlackBerry", Ft = "Google", pl = "Huawei", hl = "Lenovo", fl = "Honor", Ao = "LG", Tn = "Microsoft", Nn = "Motorola", Ln = "Nvidia", gl = "OnePlus", Rn = "OPPO", Dr = "Samsung", ml = "Sharp", Hr = "Sony", Mn = "Xiaomi", In = "Zebra", vl = "Chrome", bl = "Chromium", Lt = "Chromecast", Z9 = "Edge", zr = "Firefox", Br = "Opera", On = "Facebook", Cl = "Sogou", nr = "Mobile ", Fr = " Browser", Qn = "Windows", W9 = typeof window !== It, je = W9 && window.navigator ? window.navigator : void 0, Rt = je && je.userAgentData ? je.userAgentData : void 0, X9 = function(e, r) {
  var t = {}, o = r;
  if (!Io(r)) {
    o = {};
    for (var i in r)
      for (var a in r[i])
        o[a] = r[i][a].concat(o[a] ? o[a] : []);
  }
  for (var s in e)
    t[s] = o[s] && o[s].length % 2 === 0 ? o[s].concat(e[s]) : e[s];
  return t;
}, jo = function(e) {
  for (var r = {}, t = 0; t < e.length; t++)
    r[e[t].toUpperCase()] = e[t];
  return r;
}, e1 = function(e, r) {
  if (typeof e === mr && e.length > 0) {
    for (var t in e)
      if (xt(e[t]) == xt(r)) return !0;
    return !1;
  }
  return wr(e) ? xt(r).indexOf(xt(e)) !== -1 : !1;
}, Io = function(e, r) {
  for (var t in e)
    return /^(browser|cpu|device|engine|os)$/.test(t) || (r ? Io(e[t]) : !1);
}, wr = function(e) {
  return typeof e === Jn;
}, Pn = function(e) {
  if (e) {
    for (var r = [], t = vr(/\\?\"/g, e).split(","), o = 0; o < t.length; o++)
      if (t[o].indexOf(";") > -1) {
        var i = Jr(t[o]).split(";v=");
        r[o] = { brand: i[0], version: i[1] };
      } else
        r[o] = Jr(t[o]);
    return r;
  }
}, xt = function(e) {
  return wr(e) ? e.toLowerCase() : e;
}, Dn = function(e) {
  return wr(e) ? vr(/[^\d\.]/g, e).split(".")[0] : void 0;
}, kt = function(e) {
  for (var r in e) {
    var t = e[r];
    typeof t == mr && t.length == 2 ? this[t[0]] = t[1] : this[t] = void 0;
  }
  return this;
}, vr = function(e, r) {
  return wr(r) ? r.replace(e, gr) : r;
}, $r = function(e) {
  return vr(/\\?\"/g, e);
}, Jr = function(e, r) {
  if (wr(e))
    return e = vr(/^\s\s*/, e), typeof r === It ? e : e.substring(0, Kn);
}, Hn = function(e, r) {
  if (!(!e || !r))
    for (var t = 0, o, i, a, s, c, l; t < r.length && !c; ) {
      var d = r[t], p = r[t + 1];
      for (o = i = 0; o < d.length && !c && d[o]; )
        if (c = d[o++].exec(e), c)
          for (a = 0; a < p.length; a++)
            l = c[++i], s = p[a], typeof s === mr && s.length > 0 ? s.length === 2 ? typeof s[1] == Mo ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : s.length === 3 ? typeof s[1] === Mo && !(s[1].exec && s[1].test) ? this[s[0]] = l ? s[1].call(this, l, s[2]) : void 0 : this[s[0]] = l ? l.replace(s[1], s[2]) : void 0 : s.length === 4 && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : void 0) : this[s] = l || void 0;
      t += 2;
    }
}, Mt = function(e, r) {
  for (var t in r)
    if (typeof r[t] === mr && r[t].length > 0) {
      for (var o = 0; o < r[t].length; o++)
        if (e1(r[t][o], e))
          return t === cl ? void 0 : t;
    } else if (e1(r[t], e))
      return t === cl ? void 0 : t;
  return r.hasOwnProperty("*") ? r["*"] : e;
}, yl = {
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
}, wl = {
  embedded: "Automotive",
  mobile: "Mobile",
  tablet: ["Tablet", "EInk"],
  smarttv: "TV",
  wearable: "Watch",
  xr: ["VR", "XR"],
  "?": ["Desktop", "Unknown"],
  "*": void 0
}, _l = {
  browser: [
    [
      // Most common regardless engine
      /\b(?:crmo|crios)\/([\w\.]+)/i
      // Chrome for Android/iOS
    ],
    [R, [L, nr + "Chrome"]],
    [
      /edg(?:e|ios|a)?\/([\w\.]+)/i
      // Microsoft Edge
    ],
    [R, [L, "Edge"]],
    [
      // Presto based
      /(opera mini)\/([-\w\.]+)/i,
      // Opera Mini
      /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
      // Opera Mobi/Tablet
      /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      // Opera
    ],
    [L, R],
    [
      /opios[\/ ]+([\w\.]+)/i
      // Opera mini on iphone >= 8.0
    ],
    [R, [L, Br + " Mini"]],
    [
      /\bop(?:rg)?x\/([\w\.]+)/i
      // Opera GX
    ],
    [R, [L, Br + " GX"]],
    [
      /\bopr\/([\w\.]+)/i
      // Opera Webkit
    ],
    [R, [L, Br]],
    [
      // Mixed
      /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      // Baidu
    ],
    [R, [L, "Baidu"]],
    [
      /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      // Maxthon
    ],
    [R, [L, "Maxthon"]],
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
    [L, R],
    [
      /quark(?:pc)?\/([-\w\.]+)/i
      // Quark
    ],
    [R, [L, "Quark"]],
    [
      /\bddg\/([\w\.]+)/i
      // DuckDuckGo
    ],
    [R, [L, "DuckDuckGo"]],
    [
      /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      // UCBrowser
    ],
    [R, [L, "UCBrowser"]],
    [
      /microm.+\bqbcore\/([\w\.]+)/i,
      // WeChat Desktop for Windows Built-in Browser
      /\bqbcore\/([\w\.]+).+microm/i,
      /micromessenger\/([\w\.]+)/i
      // WeChat
    ],
    [R, [L, "WeChat"]],
    [
      /konqueror\/([\w\.]+)/i
      // Konqueror
    ],
    [R, [L, "Konqueror"]],
    [
      /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      // IE11
    ],
    [R, [L, "IE"]],
    [
      /ya(?:search)?browser\/([\w\.]+)/i
      // Yandex
    ],
    [R, [L, "Yandex"]],
    [
      /slbrowser\/([\w\.]+)/i
      // Smart Lenovo Browser
    ],
    [R, [L, "Smart " + hl + Fr]],
    [
      /(avast|avg)\/([\w\.]+)/i
      // Avast/AVG Secure Browser
    ],
    [[L, /(.+)/, "$1 Secure" + Fr], R],
    [
      /\bfocus\/([\w\.]+)/i
      // Firefox Focus
    ],
    [R, [L, zr + " Focus"]],
    [
      /\bopt\/([\w\.]+)/i
      // Opera Touch
    ],
    [R, [L, Br + " Touch"]],
    [
      /coc_coc\w+\/([\w\.]+)/i
      // Coc Coc Browser
    ],
    [R, [L, "Coc Coc"]],
    [
      /dolfin\/([\w\.]+)/i
      // Dolphin
    ],
    [R, [L, "Dolphin"]],
    [
      /coast\/([\w\.]+)/i
      // Opera Coast
    ],
    [R, [L, Br + " Coast"]],
    [
      /miuibrowser\/([\w\.]+)/i
      // MIUI Browser
    ],
    [R, [L, "MIUI" + Fr]],
    [
      /fxios\/([\w\.-]+)/i
      // Firefox for iOS
    ],
    [R, [L, nr + zr]],
    [
      /\bqihoobrowser\/?([\w\.]*)/i
      // 360
    ],
    [R, [L, "360"]],
    [
      /\b(qq)\/([\w\.]+)/i
      // QQ
    ],
    [[L, /(.+)/, "$1Browser"], R],
    [
      /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
    ],
    [[L, /(.+)/, "$1" + Fr], R],
    [
      // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
      /samsungbrowser\/([\w\.]+)/i
      // Samsung Internet
    ],
    [R, [L, Dr + " Internet"]],
    [
      /metasr[\/ ]?([\d\.]+)/i
      // Sogou Explorer
    ],
    [R, [L, Cl + " Explorer"]],
    [
      /(sogou)mo\w+\/([\d\.]+)/i
      // Sogou Mobile
    ],
    [[L, Cl + " Mobile"], R],
    [
      /(electron)\/([\w\.]+) safari/i,
      // Electron-based App
      /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
      // Tesla
      /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      // QQ/2345
    ],
    [L, R],
    [
      /(lbbrowser|rekonq)/i
      // LieBao Browser/Rekonq
    ],
    [L],
    [
      /ome\/([\w\.]+) \w* ?(iron) saf/i,
      // Iron
      /ome\/([\w\.]+).+qihu (360)[es]e/i
      // 360
    ],
    [R, L],
    [
      // WebView
      /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      // Facebook App for iOS & Android
    ],
    [[L, On], R, [A, Pr]],
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
    [L, R, [A, Pr]],
    [
      /\bgsa\/([\w\.]+) .*safari\//i
      // Google Search Appliance on iOS
    ],
    [R, [L, "GSA"], [A, Pr]],
    [
      /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      // TikTok
    ],
    [R, [L, "TikTok"], [A, Pr]],
    [
      /\[(linkedin)app\]/i
      // LinkedIn App for iOS & Android
    ],
    [L, [A, Pr]],
    [
      /(chromium)[\/ ]([-\w\.]+)/i
      // Chromium
    ],
    [L, R],
    [
      /headlesschrome(?:\/([\w\.]+)| )/i
      // Chrome Headless
    ],
    [R, [L, vl + " Headless"]],
    [
      / wv\).+(chrome)\/([\w\.]+)/i
      // Chrome WebView
    ],
    [[L, vl + " WebView"], R],
    [
      /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      // Android Browser
    ],
    [R, [L, "Android" + Fr]],
    [
      /chrome\/([\w\.]+) mobile/i
      // Chrome Mobile
    ],
    [R, [L, nr + "Chrome"]],
    [
      /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      // Chrome/OmniWeb/Arora/Tizen/Nokia
    ],
    [L, R],
    [
      /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      // Safari Mobile
    ],
    [R, [L, nr + "Safari"]],
    [
      /iphone .*mobile(?:\/\w+ | ?)safari/i
    ],
    [[L, nr + "Safari"]],
    [
      /version\/([\w\.\,]+) .*(safari)/i
      // Safari
    ],
    [R, L],
    [
      /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      // Safari < 3.0
    ],
    [L, [R, "1"]],
    [
      /(webkit|khtml)\/([\w\.]+)/i
    ],
    [L, R],
    [
      // Gecko based
      /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      // Firefox Mobile
    ],
    [[L, nr + zr], R],
    [
      /(navigator|netscape\d?)\/([-\w\.]+)/i
      // Netscape
    ],
    [[L, "Netscape"], R],
    [
      /(wolvic|librewolf)\/([\w\.]+)/i
      // Wolvic/LibreWolf
    ],
    [L, R],
    [
      /mobile vr; rv:([\w\.]+)\).+firefox/i
      // Firefox Reality
    ],
    [R, [L, zr + " Reality"]],
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
    [L, [R, /_/g, "."]],
    [
      /(cobalt)\/([\w\.]+)/i
      // Cobalt
    ],
    [L, [R, /[^\d\.]+./, gr]]
  ],
  cpu: [
    [
      /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      // AMD64 (x64)
    ],
    [[Ve, "amd64"]],
    [
      /(ia32(?=;))/i,
      // IA32 (quicktime)
      /\b((i[346]|x)86)(pc)?\b/i
      // IA32 (x86)
    ],
    [[Ve, "ia32"]],
    [
      /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      // ARM64
    ],
    [[Ve, "arm64"]],
    [
      /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      // ARMHF
    ],
    [[Ve, "armhf"]],
    [
      // PocketPC mistakenly identified as PowerPC
      /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
    ],
    [[Ve, "arm"]],
    [
      /((ppc|powerpc)(64)?)( mac|;|\))/i
      // PowerPC
    ],
    [[Ve, /ower/, gr, xt]],
    [
      / sun4\w[;\)]/i
      // SPARC
    ],
    [[Ve, "sparc"]],
    [
      /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
      // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
    ],
    [[Ve, xt]]
  ],
  device: [
    [
      //////////////////////////
      // MOBILES & TABLETS
      /////////////////////////
      // Samsung
      /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
    ],
    [T, [N, Dr], [A, le]],
    [
      /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
      /samsung[- ]((?!sm-[lr])[-\w]+)/i,
      /sec-(sgh\w+)/i
    ],
    [T, [N, Dr], [A, Y]],
    [
      // Apple
      /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      // iPod/iPhone
    ],
    [T, [N, ir], [A, Y]],
    [
      /\((ipad);[-\w\),; ]+apple/i,
      // iPad
      /applecoremedia\/[\w\.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
    ],
    [T, [N, ir], [A, le]],
    [
      /(macintosh);/i
    ],
    [T, [N, ir]],
    [
      // Sharp
      /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
    ],
    [T, [N, ml], [A, Y]],
    [
      // Honor
      /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
    ],
    [T, [N, fl], [A, le]],
    [
      /honor([-\w ]+)[;\)]/i
    ],
    [T, [N, fl], [A, Y]],
    [
      // Huawei
      /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
    ],
    [T, [N, pl], [A, le]],
    [
      /(?:huawei)([-\w ]+)[;\)]/i,
      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
    ],
    [T, [N, pl], [A, Y]],
    [
      // Xiaomi
      /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
      /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      // Mi Pad tablets
    ],
    [[T, /_/g, " "], [N, Mn], [A, le]],
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
    [[T, /_/g, " "], [N, Mn], [A, Y]],
    [
      // OPPO
      /; (\w+) bui.+ oppo/i,
      /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
    ],
    [T, [N, Rn], [A, Y]],
    [
      /\b(opd2(\d{3}a?))(?: bui|\))/i
    ],
    [T, [N, Mt, { OnePlus: ["304", "403", "203"], "*": Rn }], [A, le]],
    [
      // BLU Vivo Series
      /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
    ],
    [T, [N, "BLU"], [A, Y]],
    [
      // Vivo
      /; vivo (\w+)(?: bui|\))/i,
      /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
    ],
    [T, [N, "Vivo"], [A, Y]],
    [
      // Realme
      /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
    ],
    [T, [N, "Realme"], [A, Y]],
    [
      // Motorola
      /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
      /\bmot(?:orola)?[- ](\w*)/i,
      /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
    ],
    [T, [N, Nn], [A, Y]],
    [
      /\b(mz60\d|xoom[2 ]{0,2}) build\//i
    ],
    [T, [N, Nn], [A, le]],
    [
      // LG
      /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
    ],
    [T, [N, Ao], [A, le]],
    [
      /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
      /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,
      /\blg-?([\d\w]+) bui/i
    ],
    [T, [N, Ao], [A, Y]],
    [
      // Lenovo
      /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
      /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
    ],
    [T, [N, hl], [A, le]],
    [
      // Nokia
      /(nokia) (t[12][01])/i
    ],
    [N, T, [A, le]],
    [
      /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
      /nokia[-_ ]?(([-\w\. ]*))/i
    ],
    [[T, /_/g, " "], [A, Y], [N, "Nokia"]],
    [
      // Google
      /(pixel (c|tablet))\b/i
      // Google Pixel C/Tablet
    ],
    [T, [N, Ft], [A, le]],
    [
      /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
      // Google Pixel
    ],
    [T, [N, Ft], [A, Y]],
    [
      // Sony
      /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
    ],
    [T, [N, Hr], [A, Y]],
    [
      /sony tablet [ps]/i,
      /\b(?:sony)?sgp\w+(?: bui|\))/i
    ],
    [[T, "Xperia Tablet"], [N, Hr], [A, le]],
    [
      // OnePlus
      / (kb2005|in20[12]5|be20[12][59])\b/i,
      /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
    ],
    [T, [N, gl], [A, Y]],
    [
      // Amazon
      /(alexa)webm/i,
      /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
      // Kindle Fire without Silk / Echo Show
      /(kf[a-z]+)( bui|\)).+silk\//i
      // Kindle Fire HD
    ],
    [T, [N, ko], [A, le]],
    [
      /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      // Fire Phone
    ],
    [[T, /(.+)/g, "Fire Phone $1"], [N, ko], [A, Y]],
    [
      // BlackBerry
      /(playbook);[-\w\),; ]+(rim)/i
      // BlackBerry PlayBook
    ],
    [T, N, [A, le]],
    [
      /\b((?:bb[a-f]|st[hv])100-\d)/i,
      /\(bb10; (\w+)/i
      // BlackBerry 10
    ],
    [T, [N, ul], [A, Y]],
    [
      // Asus
      /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
    ],
    [T, [N, dl], [A, le]],
    [
      / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
    ],
    [T, [N, dl], [A, Y]],
    [
      // HTC
      /(nexus 9)/i
      // HTC Nexus 9
    ],
    [T, [N, "HTC"], [A, le]],
    [
      /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
      // HTC
      // ZTE
      /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
      /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
    ],
    [N, [T, /_/g, " "], [A, Y]],
    [
      // TCL
      /tcl (xess p17aa)/i,
      /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [T, [N, "TCL"], [A, le]],
    [
      /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [T, [N, "TCL"], [A, Y]],
    [
      // itel
      /(itel) ((\w+))/i
    ],
    [[N, xt], T, [A, Mt, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
    [
      // Acer
      /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
    ],
    [T, [N, "Acer"], [A, le]],
    [
      // Meizu
      /droid.+; (m[1-5] note) bui/i,
      /\bmz-([-\w]{2,})/i
    ],
    [T, [N, "Meizu"], [A, Y]],
    [
      // Ulefone
      /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
    ],
    [T, [N, "Ulefone"], [A, Y]],
    [
      // Energizer
      /; (energy ?\w+)(?: bui|\))/i,
      /; energizer ([\w ]+)(?: bui|\))/i
    ],
    [T, [N, "Energizer"], [A, Y]],
    [
      // Cat
      /; cat (b35);/i,
      /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
    ],
    [T, [N, "Cat"], [A, Y]],
    [
      // Smartfren
      /((?:new )?andromax[\w- ]+)(?: bui|\))/i
    ],
    [T, [N, "Smartfren"], [A, Y]],
    [
      // Nothing
      /droid.+; (a(?:015|06[35]|142p?))/i
    ],
    [T, [N, "Nothing"], [A, Y]],
    [
      // Archos
      /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
      /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
    ],
    [T, [N, "Archos"], [A, le]],
    [
      /archos ([\w ]+)( b|\))/i,
      /; (ac[3-6]\d\w{2,8})( b|\))/i
    ],
    [T, [N, "Archos"], [A, Y]],
    [
      // MIXED
      /(imo) (tab \w+)/i,
      // IMO
      /(infinix) (x1101b?)/i
      // Infinix XPad
    ],
    [N, T, [A, le]],
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
    [N, T, [A, Y]],
    [
      /(kobo)\s(ereader|touch)/i,
      // Kobo
      /(hp).+(touchpad(?!.+tablet)|tablet)/i,
      // HP TouchPad
      /(kindle)\/([\w\.]+)/i
      // Kindle
    ],
    [N, T, [A, le]],
    [
      /(surface duo)/i
      // Surface Duo
    ],
    [T, [N, Tn], [A, le]],
    [
      /droid [\d\.]+; (fp\du?)(?: b|\))/i
      // Fairphone
    ],
    [T, [N, "Fairphone"], [A, Y]],
    [
      /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      // Nvidia Tablets
    ],
    [T, [N, Ln], [A, le]],
    [
      /(sprint) (\w+)/i
      // Sprint Phones
    ],
    [N, T, [A, Y]],
    [
      /(kin\.[onetw]{3})/i
      // Microsoft Kin
    ],
    [[T, /\./g, " "], [N, Tn], [A, Y]],
    [
      /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      // Zebra
    ],
    [T, [N, In], [A, le]],
    [
      /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
    ],
    [T, [N, In], [A, Y]],
    [
      ///////////////////
      // SMARTTVS
      ///////////////////
      /smart-tv.+(samsung)/i
      // Samsung
    ],
    [N, [A, Te]],
    [
      /hbbtv.+maple;(\d+)/i
    ],
    [[T, /^/, "SmartTV"], [N, Dr], [A, Te]],
    [
      /tcast.+(lg)e?. ([-\w]+)/i
      // LG SmartTV
    ],
    [N, T, [A, Te]],
    [
      /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
    ],
    [[N, Ao], [A, Te]],
    [
      /(apple) ?tv/i
      // Apple TV
    ],
    [N, [T, ir + " TV"], [A, Te]],
    [
      /crkey.*devicetype\/chromecast/i
      // Google Chromecast Third Generation
    ],
    [[T, Lt + " Third Generation"], [N, Ft], [A, Te]],
    [
      /crkey.*devicetype\/([^/]*)/i
      // Google Chromecast with specific device type
    ],
    [[T, /^/, "Chromecast "], [N, Ft], [A, Te]],
    [
      /fuchsia.*crkey/i
      // Google Chromecast Nest Hub
    ],
    [[T, Lt + " Nest Hub"], [N, Ft], [A, Te]],
    [
      /crkey/i
      // Google Chromecast, Linux-based or unknown
    ],
    [[T, Lt], [N, Ft], [A, Te]],
    [
      /(portaltv)/i
      // Facebook Portal TV
    ],
    [T, [N, On], [A, Te]],
    [
      /droid.+aft(\w+)( bui|\))/i
      // Fire TV
    ],
    [T, [N, ko], [A, Te]],
    [
      /(shield \w+ tv)/i
      // Nvidia Shield TV
    ],
    [T, [N, Ln], [A, Te]],
    [
      /\(dtv[\);].+(aquos)/i,
      /(aquos-tv[\w ]+)\)/i
      // Sharp
    ],
    [T, [N, ml], [A, Te]],
    [
      /(bravia[\w ]+)( bui|\))/i
      // Sony
    ],
    [T, [N, Hr], [A, Te]],
    [
      /(mi(tv|box)-?\w+) bui/i
      // Xiaomi
    ],
    [T, [N, Mn], [A, Te]],
    [
      /Hbbtv.*(technisat) (.*);/i
      // TechniSAT
    ],
    [N, T, [A, Te]],
    [
      /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
      // Roku
      /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      // HbbTV devices
    ],
    [[N, Jr], [T, Jr], [A, Te]],
    [
      // SmartTV from Unidentified Vendors
      /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
    ],
    [T, [A, Te]],
    [
      /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
    ],
    [[A, Te]],
    [
      ///////////////////
      // CONSOLES
      ///////////////////
      /(ouya)/i,
      // Ouya
      /(nintendo) (\w+)/i
      // Nintendo
    ],
    [N, T, [A, Ur]],
    [
      /droid.+; (shield)( bui|\))/i
      // Nvidia Portable
    ],
    [T, [N, Ln], [A, Ur]],
    [
      /(playstation \w+)/i
      // Playstation
    ],
    [T, [N, Hr], [A, Ur]],
    [
      /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      // Microsoft Xbox
    ],
    [T, [N, Tn], [A, Ur]],
    [
      ///////////////////
      // WEARABLES
      ///////////////////
      /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      // Samsung Galaxy Watch
    ],
    [T, [N, Dr], [A, ht]],
    [
      /((pebble))app/i,
      // Pebble
      /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      // Asus ZenWatch / LG Watch / Pixel Watch
    ],
    [N, T, [A, ht]],
    [
      /(ow(?:19|20)?we?[1-3]{1,3})/i
      // Oppo Watch
    ],
    [T, [N, Rn], [A, ht]],
    [
      /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      // Apple Watch
    ],
    [T, [N, ir], [A, ht]],
    [
      /(opwwe\d{3})/i
      // OnePlus Watch
    ],
    [T, [N, gl], [A, ht]],
    [
      /(moto 360)/i
      // Motorola 360
    ],
    [T, [N, Nn], [A, ht]],
    [
      /(smartwatch 3)/i
      // Sony SmartWatch
    ],
    [T, [N, Hr], [A, ht]],
    [
      /(g watch r)/i
      // LG G Watch R
    ],
    [T, [N, Ao], [A, ht]],
    [
      /droid.+; (wt63?0{2,3})\)/i
    ],
    [T, [N, In], [A, ht]],
    [
      ///////////////////
      // XR
      ///////////////////
      /droid.+; (glass) \d/i
      // Google Glass
    ],
    [T, [N, Ft], [A, Sn]],
    [
      /(pico) (4|neo3(?: link|pro)?)/i
      // Pico
    ],
    [N, T, [A, Sn]],
    [
      /(quest( \d| pro)?s?).+vr/i
      // Meta Quest
    ],
    [T, [N, On], [A, Sn]],
    [
      ///////////////////
      // EMBEDDED
      ///////////////////
      /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      // Tesla
    ],
    [N, [A, Vr]],
    [
      /(aeobc)\b/i
      // Echo Dot
    ],
    [T, [N, ko], [A, Vr]],
    [
      /(homepod).+mac os/i
      // Apple HomePod
    ],
    [T, [N, ir], [A, Vr]],
    [
      /windows iot/i
    ],
    [[A, Vr]],
    [
      ////////////////////
      // MIXED (GENERIC)
      ///////////////////
      /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
    ],
    [T, [A, Mt, { mobile: "Mobile", xr: "VR", "*": le }]],
    [
      /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      // Unidentifiable Tablet
    ],
    [[A, le]],
    [
      /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      // Unidentifiable Mobile
    ],
    [[A, Y]],
    [
      /droid .+?; ([\w\. -]+)( bui|\))/i
      // Generic Android Device
    ],
    [T, [N, "Generic"]]
  ],
  engine: [
    [
      /windows.+ edge\/([\w\.]+)/i
      // EdgeHTML
    ],
    [R, [L, Z9 + "HTML"]],
    [
      /(arkweb)\/([\w\.]+)/i
      // ArkWeb
    ],
    [L, R],
    [
      /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      // Blink
    ],
    [R, [L, "Blink"]],
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
    [L, R],
    [
      /ladybird\//i
    ],
    [[L, "LibWeb"]],
    [
      /rv\:([\w\.]{1,9})\b.+(gecko)/i
      // Gecko
    ],
    [R, L]
  ],
  os: [
    [
      // Windows
      /microsoft (windows) (vista|xp)/i
      // Windows (iTunes)
    ],
    [L, R],
    [
      /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i
      // Windows Phone
    ],
    [L, [R, Mt, yl]],
    [
      /windows nt 6\.2; (arm)/i,
      // Windows RT
      /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
      /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
    ],
    [[R, Mt, yl], [L, Qn]],
    [
      // iOS/macOS
      /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
      // iOS
      /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
      /cfnetwork\/.+darwin/i
    ],
    [[R, /_/g, "."], [L, "iOS"]],
    [
      /(mac os x) ?([\w\. ]*)/i,
      /(macintosh|mac_powerpc\b)(?!.+haiku)/i
      // Mac OS
    ],
    [[L, "macOS"], [R, /_/g, "."]],
    [
      // Google Chromecast
      /android ([\d\.]+).*crkey/i
      // Google Chromecast, Android-based
    ],
    [R, [L, Lt + " Android"]],
    [
      /fuchsia.*crkey\/([\d\.]+)/i
      // Google Chromecast, Fuchsia-based
    ],
    [R, [L, Lt + " Fuchsia"]],
    [
      /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      // Google Chromecast, Linux-based Smart Speaker
    ],
    [R, [L, Lt + " SmartSpeaker"]],
    [
      /linux.*crkey\/([\d\.]+)/i
      // Google Chromecast, Legacy Linux-based
    ],
    [R, [L, Lt + " Linux"]],
    [
      /crkey\/([\d\.]+)/i
      // Google Chromecast, unknown
    ],
    [R, [L, Lt]],
    [
      // Mobile OSes
      /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
      // Android-x86/HarmonyOS
    ],
    [R, L],
    [
      /(ubuntu) ([\w\.]+) like android/i
      // Ubuntu Touch
    ],
    [[L, /(.+)/, "$1 Touch"], R],
    [
      // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
      /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i
    ],
    [L, R],
    [
      /\(bb(10);/i
      // BlackBerry 10
    ],
    [R, [L, ul]],
    [
      /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      // Symbian
    ],
    [R, [L, "Symbian"]],
    [
      /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      // Firefox OS
    ],
    [R, [L, zr + " OS"]],
    [
      /web0s;.+rt(tv)/i,
      /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
      // WebOS
    ],
    [R, [L, "webOS"]],
    [
      /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      // watchOS
    ],
    [R, [L, "watchOS"]],
    [
      // Google ChromeOS
      /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      // Chromium OS
    ],
    [[L, "Chrome OS"], R],
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
    [L, R],
    [
      /(sunos) ?([\w\.\d]*)/i
      // Solaris
    ],
    [[L, "Solaris"], R],
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
    [L, R]
  ]
}, Eo = function() {
  var e = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
  return kt.call(e.init, [
    [Ue, [L, R, Kr, A]],
    [_t, [Ve]],
    [ft, [A, T, N]],
    [it, [L, R]],
    [Ye, [L, R]]
  ]), kt.call(e.isIgnore, [
    [Ue, [R, Kr]],
    [it, [R]],
    [Ye, [R]]
  ]), kt.call(e.isIgnoreRgx, [
    [Ue, / ?browser$/i],
    [Ye, / ?os$/i]
  ]), kt.call(e.toString, [
    [Ue, [L, R]],
    [_t, [Ve]],
    [ft, [N, T]],
    [it, [L, R]],
    [Ye, [L, R]]
  ]), e;
}(), Y9 = function(e, r) {
  var t = Eo.init[r], o = Eo.isIgnore[r] || 0, i = Eo.isIgnoreRgx[r] || 0, a = Eo.toString[r] || 0;
  function s() {
    kt.call(this, t);
  }
  return s.prototype.getItem = function() {
    return e;
  }, s.prototype.withClientHints = function() {
    return Rt ? Rt.getHighEntropyValues(_2).then(function(c) {
      return e.setCH(new x2(c, !1)).parseCH().get();
    }) : e.parseCH().get();
  }, s.prototype.withFeatureCheck = function() {
    return e.detectFeature().get();
  }, r != lr && (s.prototype.is = function(c) {
    var l = !1;
    for (var d in this)
      if (this.hasOwnProperty(d) && !e1(o, d) && xt(i ? vr(i, this[d]) : this[d]) == xt(i ? vr(i, c) : c)) {
        if (l = !0, c != It) break;
      } else if (c == It && l) {
        l = !l;
        break;
      }
    return l;
  }, s.prototype.toString = function() {
    var c = gr;
    for (var l in a)
      typeof this[a[l]] !== It && (c += (c ? " " : gr) + this[a[l]]);
    return c || It;
  }), Rt || (s.prototype.then = function(c) {
    var l = this, d = function() {
      for (var u in l)
        l.hasOwnProperty(u) && (this[u] = l[u]);
    };
    d.prototype = {
      is: s.prototype.is,
      toString: s.prototype.toString
    };
    var p = new d();
    return c(p), p;
  }), new s();
};
function x2(e, r) {
  if (e = e || {}, kt.call(this, _2), r)
    kt.call(this, [
      [R1, Pn(e[Dt])],
      [M1, Pn(e[F9])],
      [Y, /\?1/.test(e[j9])],
      [T, $r(e[G9])],
      [cr, $r(e[w2])],
      [I1, $r(e[q9])],
      [Ve, $r(e[$9])],
      [jt, Pn(e[V9])],
      [Vo, $r(e[U9])]
    ]);
  else
    for (var t in e)
      this.hasOwnProperty(t) && typeof e[t] !== It && (this[t] = e[t]);
}
function xl(e, r, t, o) {
  return this.get = function(i) {
    return i ? this.data.hasOwnProperty(i) ? this.data[i] : void 0 : this.data;
  }, this.set = function(i, a) {
    return this.data[i] = a, this;
  }, this.setCH = function(i) {
    return this.uaCH = i, this;
  }, this.detectFeature = function() {
    if (je && je.userAgent == this.ua)
      switch (this.itemType) {
        case Ue:
          je.brave && typeof je.brave.isBrave == Mo && this.set(L, "Brave");
          break;
        case ft:
          !this.get(A) && Rt && Rt[Y] && this.set(A, Y), this.get(T) == "Macintosh" && je && typeof je.standalone !== It && je.maxTouchPoints && je.maxTouchPoints > 2 && this.set(T, "iPad").set(A, le);
          break;
        case Ye:
          !this.get(L) && Rt && Rt[cr] && this.set(L, Rt[cr]);
          break;
        case lr:
          var i = this.data, a = function(s) {
            return i[s].getItem().detectFeature().get();
          };
          this.set(Ue, a(Ue)).set(_t, a(_t)).set(ft, a(ft)).set(it, a(it)).set(Ye, a(Ye));
      }
    return this;
  }, this.parseUA = function() {
    return this.itemType != lr && Hn.call(this.data, this.ua, this.rgxMap), this.itemType == Ue && this.set(Kr, Dn(this.get(R))), this;
  }, this.parseCH = function() {
    var i = this.uaCH, a = this.rgxMap;
    switch (this.itemType) {
      case Ue:
      case it:
        var s = i[M1] || i[R1], c;
        if (s)
          for (var l in s) {
            var d = s[l].brand || s[l], p = s[l].version;
            this.itemType == Ue && !/not.a.brand/i.test(d) && (!c || /chrom/i.test(c) && d != bl) && (d = Mt(d, {
              Chrome: "Google Chrome",
              Edge: "Microsoft Edge",
              "Chrome WebView": "Android WebView",
              "Chrome Headless": "HeadlessChrome",
              "Huawei Browser": "HuaweiBrowser",
              "MIUI Browser": "Miui Browser",
              "Opera Mobi": "OperaMobile",
              Yandex: "YaBrowser"
            }), this.set(L, d).set(R, p).set(Kr, Dn(p)), c = d), this.itemType == it && d == bl && this.set(R, p);
          }
        break;
      case _t:
        var u = i[Ve];
        u && (u && i[Vo] == "64" && (u += "64"), Hn.call(this.data, u + ";", a));
        break;
      case ft:
        if (i[Y] && this.set(A, Y), i[T] && (this.set(T, i[T]), !this.get(A) || !this.get(N))) {
          var f = {};
          Hn.call(f, "droid 9; " + i[T] + ")", a), !this.get(A) && f.type && this.set(A, f.type), !this.get(N) && f.vendor && this.set(N, f.vendor);
        }
        if (i[jt]) {
          var m;
          if (typeof i[jt] != "string")
            for (var w = 0; !m && w < i[jt].length; )
              m = Mt(i[jt][w++], wl);
          else
            m = Mt(i[jt], wl);
          this.set(A, m);
        }
        break;
      case Ye:
        var b = i[cr];
        if (b) {
          var E = i[I1];
          b == Qn && (E = parseInt(Dn(E), 10) >= 13 ? "11" : "10"), this.set(L, b).set(R, E);
        }
        this.get(L) == Qn && i[T] == "Xbox" && this.set(L, "Xbox").set(R, void 0);
        break;
      case lr:
        var S = this.data, _ = function(C) {
          return S[C].getItem().setCH(i).parseCH().get();
        };
        this.set(Ue, _(Ue)).set(_t, _(_t)).set(ft, _(ft)).set(it, _(it)).set(Ye, _(Ye));
    }
    return this;
  }, kt.call(this, [
    ["itemType", e],
    ["ua", r],
    ["uaCH", o],
    ["rgxMap", t],
    ["data", Y9(this, e)]
  ]), this;
}
function Tt(e, r, t) {
  if (typeof e === mr ? (Io(e, !0) ? (typeof r === mr && (t = r), r = e) : (t = e, r = void 0), e = void 0) : typeof e === Jn && !Io(r, !0) && (t = r, r = void 0), t && typeof t.append === Mo) {
    var o = {};
    t.forEach(function(l, d) {
      o[d] = l;
    }), t = o;
  }
  if (!(this instanceof Tt))
    return new Tt(e, r, t).getResult();
  var i = typeof e === Jn ? e : (
    // Passed user-agent string
    t && t[ll] ? t[ll] : (
      // User-Agent from passed headers
      je && je.userAgent ? je.userAgent : (
        // navigator.userAgent
        gr
      )
    )
  ), a = new x2(t, !0), s = r ? X9(_l, r) : _l, c = function(l) {
    return l == lr ? function() {
      return new xl(l, i, s, a).set("ua", i).set(Ue, this.getBrowser()).set(_t, this.getCPU()).set(ft, this.getDevice()).set(it, this.getEngine()).set(Ye, this.getOS()).get();
    } : function() {
      return new xl(l, i, s[l], a).parseUA().get();
    };
  };
  return kt.call(this, [
    ["getBrowser", c(Ue)],
    ["getCPU", c(_t)],
    ["getDevice", c(ft)],
    ["getEngine", c(it)],
    ["getOS", c(Ye)],
    ["getResult", c(lr)],
    ["getUA", function() {
      return i;
    }],
    ["setUA", function(l) {
      return wr(l) && (i = l.length > Kn ? Jr(l, Kn) : l), this;
    }]
  ]).setUA(i), this;
}
Tt.VERSION = B9;
Tt.BROWSER = jo([L, R, Kr, A]);
Tt.CPU = jo([Ve]);
Tt.DEVICE = jo([T, N, A, Ur, Y, Te, le, ht, Vr]);
Tt.ENGINE = Tt.OS = jo([L, R]);
const { root: K9, shadowRoot: t1, isRootActive: kl } = Fc();
function J9() {
  const { setIsOpenWidget: e, isLoaded: r, setIsLoaded: t } = M(), { path: o } = Zt();
  return console.log(new Tt().getResult()), O(() => {
    if ((async () => (await uu(o, t1), t(!0)))(), !r) return;
    e(kl());
    const i = new MutationObserver(
      () => e(kl())
    );
    return i.observe(K9, {
      attributes: !0,
      attributeFilter: ["data-active"]
    }), () => i.disconnect();
  }, [o, e, r, t]), /* @__PURE__ */ n(P9, { root: t1, children: [
    /* @__PURE__ */ n(d9, {}),
    /* @__PURE__ */ n(z9, {})
  ] });
}
Je(/* @__PURE__ */ n(J9, {}), t1);
