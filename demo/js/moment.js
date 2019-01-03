! function (a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function () {
    "use strict";

    function a() {
        return re.apply(null, arguments)
    }

    function b(a) {
        re = a
    }

    function c(a) {
        return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return null != a && "[object Object]" === Object.prototype.toString.call(a)
    }

    function e(a) {
        var b;
        for (b in a) return !1;
        return !0
    }

    function f(a) {
        return void 0 === a
    }

    function g(a) {
        return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a)
    }

    function h(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function i(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function j(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function k(a, b) {
        for (var c in b) j(b, c) && (a[c] = b[c]);
        return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function l(a, b, c, d) {
        return sb(a, b, c, d, !0).utc()
    }

    function m() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }

    function n(a) {
        return null == a._pf && (a._pf = m()), a._pf
    }

    function o(a) {
        if (null == a._isValid) {
            var b = n(a),
                c = te.call(b.parsedDateParts, function (a) {
                    return null != a
                }),
                d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
            if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;
            a._isValid = d
        }
        return a._isValid
    }

    function p(a) {
        var b = l(NaN);
        return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b
    }

    function q(a, b) {
        var c, d, e;
        if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), ue.length > 0)
            for (c = 0; c < ue.length; c++) d = ue[c], e = b[d], f(e) || (a[d] = e);
        return a
    }

    function r(b) {
        q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), ve === !1 && (ve = !0, a.updateOffset(this), ve = !1)
    }

    function s(a) {
        return a instanceof r || null != a && null != a._isAMomentObject
    }

    function t(a) {
        return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
    }

    function u(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = t(b)), c
    }

    function v(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
        return g + f
    }

    function w(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function x(b, c) {
        var d = !0;
        return k(function () {
            if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
                for (var e, f = [], g = 0; g < arguments.length; g++) {
                    if (e = "", "object" == typeof arguments[g]) {
                        e += "\n[" + g + "] ";
                        for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[g];
                    f.push(e)
                }
                w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack), d = !1
            }
            return c.apply(this, arguments)
        }, c)
    }

    function y(b, c) {
        null != a.deprecationHandler && a.deprecationHandler(b, c), we[b] || (w(c), we[b] = !0)
    }

    function z(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
    }

    function A(a) {
        var b, c;
        for (c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
        this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function B(a, b) {
        var c, e = k({}, a);
        for (c in b) j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
        for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
        return e
    }

    function C(a) {
        null != a && this.set(a)
    }

    function D(a, b, c) {
        var d = this._calendar[a] || this._calendar.sameElse;
        return z(d) ? d.call(b, c) : d
    }

    function E(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }

    function F() {
        return this._invalidDate
    }

    function G(a) {
        return this._ordinal.replace("%d", a)
    }

    function H(a, b, c, d) {
        var e = this._relativeTime[c];
        return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function I(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return z(c) ? c(b) : c.replace(/%s/i, b)
    }

    function J(a, b) {
        var c = a.toLowerCase();
        Ge[c] = Ge[c + "s"] = Ge[b] = a
    }

    function K(a) {
        return "string" == typeof a ? Ge[a] || Ge[a.toLowerCase()] : void 0
    }

    function L(a) {
        var b, c, d = {};
        for (c in a) j(a, c) && (b = K(c), b && (d[b] = a[c]));
        return d
    }

    function M(a, b) {
        He[a] = b
    }

    function N(a) {
        var b = [];
        for (var c in a) b.push({
            unit: c,
            priority: He[c]
        });
        return b.sort(function (a, b) {
            return a.priority - b.priority
        }), b
    }

    function O(b, c) {
        return function (d) {
            return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b)
        }
    }

    function P(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
    }

    function Q(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function R(a) {
        return a = K(a), z(this[a]) ? this[a]() : this
    }

    function S(a, b) {
        if ("object" == typeof a) {
            a = L(a);
            for (var c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit])
        } else if (a = K(a), z(this[a])) return this[a](b);
        return this
    }

    function T(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }

    function U(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function () {
            return this[d]()
        }), a && (Le[a] = e), b && (Le[b[0]] = function () {
            return T(e.apply(this, arguments), b[1], b[2])
        }), c && (Le[c] = function () {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function V(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function W(a) {
        var b, c, d = a.match(Ie);
        for (b = 0, c = d.length; b < c; b++) Le[d[b]] ? d[b] = Le[d[b]] : d[b] = V(d[b]);
        return function (b) {
            var e, f = "";
            for (e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e];
            return f
        }
    }

    function X(a, b) {
        return a.isValid() ? (b = Y(b, a.localeData()), Ke[b] = Ke[b] || W(b), Ke[b](a)) : a.localeData().invalidDate()
    }

    function Y(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Je.lastIndex = 0; d >= 0 && Je.test(a);) a = a.replace(Je, c), Je.lastIndex = 0, d -= 1;
        return a
    }

    function Z(a, b, c) {
        bf[a] = z(b) ? b : function (a, d) {
            return a && c ? c : b
        }
    }

    function $(a, b) {
        return j(bf, a) ? bf[a](b._strict, b._locale) : new RegExp(_(a))
    }

    function _(a) {
        return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
            return b || c || d || e
        }))
    }

    function aa(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function ba(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), g(b) && (d = function (a, c) {
                c[b] = u(a)
            }), c = 0; c < a.length; c++) cf[a[c]] = d
    }

    function ca(a, b) {
        ba(a, function (a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function da(a, b, c) {
        null != b && j(cf, a) && cf[a](b, c._a, c, a)
    }

    function ea(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function fa(a, b) {
        return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || of ).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone
    }

    function ga(a, b) {
        return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[ of .test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }

    function ha(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
        return c ? "MMM" === b ? (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : null))
    }

    function ia(a, b, c) {
        var d, e, f;
        if (this._monthsParseExact) return ha.call(this, a, b, c);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
            if (e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }

    function ja(a, b) {
        var c;
        if (!a.isValid()) return a;
        if ("string" == typeof b)
            if (/^\d+$/.test(b)) b = u(b);
            else if (b = a.localeData().monthsParse(b), !g(b)) return a;
        return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
    }

    function ka(b) {
        return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month")
    }

    function la() {
        return ea(this.year(), this.month())
    }

    function ma(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = rf), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function na(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = sf), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
    }

    function oa() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d = [],
            e = [],
            f = [];
        for (b = 0; b < 12; b++) c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) d[b] = aa(d[b]), e[b] = aa(e[b]);
        for (b = 0; b < 24; b++) f[b] = aa(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
    }

    function pa(a) {
        return qa(a) ? 366 : 365
    }

    function qa(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function ra() {
        return qa(this.year())
    }

    function sa(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    }

    function ta(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
    }

    function ua(a, b, c) {
        var d = 7 + b - c,
            e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1
    }

    function va(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7,
            i = ua(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;
        return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), {
            year: f,
            dayOfYear: g
        }
    }

    function wa(a, b, c) {
        var d, e, f = ua(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        }
    }

    function xa(a, b, c) {
        var d = ua(a, b, c),
            e = ua(a + 1, b, c);
        return (pa(a) - d + e) / 7
    }

    function ya(a) {
        return wa(a, this._week.dow, this._week.doy).week
    }

    function za() {
        return this._week.dow
    }

    function Aa() {
        return this._week.doy
    }

    function Ba(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Ca(a) {
        var b = wa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Da(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Ea(a, b) {
        return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
    }

    function Fa(a, b) {
        return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }

    function Ga(a) {
        return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
    }

    function Ha(a) {
        return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
    }

    function Ia(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
        return c ? "dddd" === b ? (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)))
    }

    function Ja(a, b, c) {
        var d, e, f;
        if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
            if (e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d
        }
    }

    function Ka(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function La(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function Ma(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        if (null != a) {
            var b = Ea(a, this.localeData());
            return this.day(this.day() % 7 ? b : b - 7)
        }
        return this.day() || 7
    }

    function Na(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = yf), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function Oa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = zf), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function Pa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Af), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function Qa() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d, e, f, g = [],
            h = [],
            i = [],
            j = [];
        for (b = 0; b < 7; b++) c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
        for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
        this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
    }

    function Ra() {
        return this.hours() % 12 || 12
    }

    function Sa() {
        return this.hours() || 24
    }

    function Ta(a, b) {
        U(a, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }

    function Ua(a, b) {
        return b._meridiemParse
    }

    function Va(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function Wa(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function Xa(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function Ya(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = Za(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && v(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }

    function Za(a) {
        var b = null;
        if (!Ff[a] && "undefined" != typeof module && module && module.exports) try {
            b = Bf._abbr, require("./locale/" + a), $a(b)
        } catch (a) {}
        return Ff[a]
    }

    function $a(a, b) {
        var c;
        return a && (c = f(b) ? bb(a) : _a(a, b), c && (Bf = c)), Bf._abbr
    }

    function _a(a, b) {
        if (null !== b) {
            var c = Ef;
            if (b.abbr = a, null != Ff[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Ff[a]._config;
            else if (null != b.parentLocale) {
                if (null == Ff[b.parentLocale]) return Gf[b.parentLocale] || (Gf[b.parentLocale] = []), Gf[b.parentLocale].push({
                    name: a,
                    config: b
                }), null;
                c = Ff[b.parentLocale]._config
            }
            return Ff[a] = new C(B(c, b)), Gf[a] && Gf[a].forEach(function (a) {
                _a(a.name, a.config)
            }), $a(a), Ff[a]
        }
        return delete Ff[a], null
    }

    function ab(a, b) {
        if (null != b) {
            var c, d = Ef;
            null != Ff[a] && (d = Ff[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Ff[a], Ff[a] = c, $a(a)
        } else null != Ff[a] && (null != Ff[a].parentLocale ? Ff[a] = Ff[a].parentLocale : null != Ff[a] && delete Ff[a]);
        return Ff[a]
    }

    function bb(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Bf;
        if (!c(a)) {
            if (b = Za(a)) return b;
            a = [a]
        }
        return Ya(a)
    }

    function cb() {
        return ze(Ff)
    }

    function db(a) {
        var b, c = a._a;
        return c && n(a).overflow === -2 && (b = c[ef] < 0 || c[ef] > 11 ? ef : c[ff] < 1 || c[ff] > ea(c[df], c[ef]) ? ff : c[gf] < 0 || c[gf] > 24 || 24 === c[gf] && (0 !== c[hf] || 0 !== c[jf] || 0 !== c[kf]) ? gf : c[hf] < 0 || c[hf] > 59 ? hf : c[jf] < 0 || c[jf] > 59 ? jf : c[kf] < 0 || c[kf] > 999 ? kf : -1, n(a)._overflowDayOfYear && (b < df || b > ff) && (b = ff), n(a)._overflowWeeks && b === -1 && (b = lf), n(a)._overflowWeekday && b === -1 && (b = mf), n(a).overflow = b), a
    }

    function eb(a) {
        var b, c, d, e, f, g, h = a._i,
            i = Hf.exec(h) || If.exec(h);
        if (i) {
            for (n(a).iso = !0, b = 0, c = Kf.length; b < c; b++)
                if (Kf[b][1].exec(i[1])) {
                    e = Kf[b][0], d = Kf[b][2] !== !1;
                    break
                }
            if (null == e) return void(a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Lf.length; b < c; b++)
                    if (Lf[b][1].exec(i[3])) {
                        f = (i[2] || " ") + Lf[b][0];
                        break
                    }
                if (null == f) return void(a._isValid = !1)
            }
            if (!d && null != f) return void(a._isValid = !1);
            if (i[4]) {
                if (!Jf.exec(i[4])) return void(a._isValid = !1);
                g = "Z"
            }
            a._f = e + (f || "") + (g || ""), lb(a)
        } else a._isValid = !1
    }

    function fb(a) {
        var b, c, d, e, f, g, h, i, j = {
                " GMT": " +0000",
                " EDT": " -0400",
                " EST": " -0500",
                " CDT": " -0500",
                " CST": " -0600",
                " MDT": " -0600",
                " MST": " -0700",
                " PDT": " -0700",
                " PST": " -0800"
            },
            k = "YXWVUTSRQPONZABCDEFGHIKLM";
        if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Nf.exec(b)) {
            if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
                var l = new Date(c[2]),
                    m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];
                if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void(a._isValid = !1)
            }
            switch (c[5].length) {
                case 2:
                    0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");
                    break;
                case 4:
                    h = j[c[5]];
                    break;
                default:
                    h = j[" GMT"]
            }
            c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0
        } else a._isValid = !1
    }

    function gb(b) {
        var c = Mf.exec(b._i);
        return null !== c ? void(b._d = new Date(+c[1])) : (eb(b), void(b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))))
    }

    function hb(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function ib(b) {
        var c = new Date(a.now());
        return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
    }

    function jb(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = ib(a), a._w && null == a._a[ff] && null == a._a[ef] && kb(a), null != a._dayOfYear && (e = hb(a._a[df], d[df]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[ef] = c.getUTCMonth(), a._a[ff] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (; b < 7; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[gf] && 0 === a._a[hf] && 0 === a._a[jf] && 0 === a._a[kf] && (a._nextDay = !0, a._a[gf] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[gf] = 24)
        }
    }

    function kb(a) {
        var b, c, d, e, f, g, h, i;
        if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[df], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0);
        else {
            f = a._locale._week.dow, g = a._locale._week.doy;
            var j = wa(tb(), f, g);
            c = hb(b.gg, a._a[df], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f
        }
        d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[df] = h.year, a._dayOfYear = h.dayOfYear)
    }

    function lb(b) {
        if (b._f === a.ISO_8601) return void eb(b);
        if (b._f === a.RFC_2822) return void fb(b);
        b._a = [], n(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            j = 0;
        for (e = Y(b._f, b._locale).match(Ie) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Le[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
        n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[gf] <= 12 && n(b).bigHour === !0 && b._a[gf] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[gf] = mb(b._locale, b._a[gf], b._meridiem), jb(b), db(b)
    }

    function mb(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function nb(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return n(a).invalidFormat = !0, void(a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b));
        k(a, c || b)
    }

    function ob(a) {
        if (!a._d) {
            var b = L(a._i);
            a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
                return a && parseInt(a, 10)
            }), jb(a)
        }
    }

    function pb(a) {
        var b = new r(db(qb(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function qb(a) {
        var b = a._i,
            d = a._f;
        return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a))
    }

    function rb(b) {
        var e = b._i;
        f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function (a) {
            return parseInt(a, 10)
        }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b)
    }

    function sb(a, b, f, g, h) {
        var i = {};
        return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i)
    }

    function tb(a, b, c, d) {
        return sb(a, b, c, d, !1)
    }

    function ub(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();
        for (d = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](d) || (d = b[e]);
        return d
    }

    function vb() {
        var a = [].slice.call(arguments, 0);
        return ub("isBefore", a)
    }

    function wb() {
        var a = [].slice.call(arguments, 0);
        return ub("isAfter", a)
    }

    function xb(a) {
        for (var b in a)
            if (Rf.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
        for (var c = !1, d = 0; d < Rf.length; ++d)
            if (a[Rf[d]]) {
                if (c) return !1;
                parseFloat(a[Rf[d]]) !== u(a[Rf[d]]) && (c = !0)
            }
        return !0
    }

    function yb() {
        return this._isValid
    }

    function zb() {
        return Sb(NaN)
    }

    function Ab(a) {
        var b = L(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble()
    }

    function Bb(a) {
        return a instanceof Ab
    }

    function Cb(a) {
        return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
    }

    function Db(a, b) {
        U(a, 0, 0, function () {
            var a = this.utcOffset(),
                c = "+";
            return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
        })
    }

    function Eb(a, b) {
        var c = (b || "").match(a);
        if (null === c) return null;
        var d = c[c.length - 1] || [],
            e = (d + "").match(Sf) || ["-", 0, 0],
            f = +(60 * e[1]) + u(e[2]);
        return 0 === f ? 0 : "+" === e[0] ? f : -f
    }

    function Fb(b, c) {
        var d, e;
        return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local()
    }

    function Gb(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Hb(b, c, d) {
        var e, f = this._offset || 0;
        if (!this.isValid()) return null != b ? this : NaN;
        if (null != b) {
            if ("string" == typeof b) {
                if (b = Eb($e, b), null === b) return this
            } else Math.abs(b) < 16 && !d && (b = 60 * b);
            return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? f : Gb(this)
    }

    function Ib(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Jb(a) {
        return this.utcOffset(0, a)
    }

    function Kb(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this
    }

    function Lb() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var a = Eb(Ze, this._i);
            null != a ? this.utcOffset(a) : this.utcOffset(0, !0)
        }
        return this
    }

    function Mb(a) {
        return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0)
    }

    function Nb() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ob() {
        if (!f(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (q(a, this), a = qb(a), a._a) {
            var b = a._isUTC ? l(a._a) : tb(a._a);
            this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Pb() {
        return !!this.isValid() && !this._isUTC
    }

    function Qb() {
        return !!this.isValid() && this._isUTC
    }

    function Rb() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }

    function Sb(a, b) {
        var c, d, e, f = a,
            h = null;
        return Bb(a) ? f = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Tf.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
            y: 0,
            d: u(h[ff]) * c,
            h: u(h[gf]) * c,
            m: u(h[hf]) * c,
            s: u(h[jf]) * c,
            ms: u(Cb(1e3 * h[kf])) * c
        }) : (h = Uf.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
            y: Tb(h[2], c),
            M: Tb(h[3], c),
            w: Tb(h[4], c),
            d: Tb(h[5], c),
            h: Tb(h[6], c),
            m: Tb(h[7], c),
            s: Tb(h[8], c)
        }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d
    }

    function Tb(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }

    function Ub(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function Vb(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        }
    }

    function Wb(a, b) {
        return function (c, d) {
            var e, f;
            return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this
        }
    }

    function Xb(b, c, d, e) {
        var f = c._milliseconds,
            g = Cb(c._days),
            h = Cb(c._months);
        b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h))
    }

    function Yb(a, b) {
        var c = a.diff(b, "days", !0);
        return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse"
    }

    function Zb(b, c) {
        var d = b || tb(),
            e = Fb(d, this).startOf("day"),
            f = a.calendarFormat(this, e) || "sameElse",
            g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
        return this.format(g || this.localeData().calendar(f, this, tb(d)))
    }

    function $b() {
        return new r(this)
    }

    function _b(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf())
    }

    function ac(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf())
    }

    function bc(a, b, c, d) {
        return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
    }

    function cc(a, b) {
        var c, d = s(a) ? a : tb(a);
        return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()))
    }

    function dc(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b)
    }

    function ec(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b)
    }

    function fc(a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN
    }

    function gc(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
    }

    function hc() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ic() {
        if (!this.isValid()) return null;
        var a = this.clone().utc();
        return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function jc() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var a = "moment",
            b = "";
        this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");
        var c = "[" + a + '("]',
            d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            e = "-MM-DD[T]HH:mm:ss.SSS",
            f = b + '[")]';
        return this.format(c + d + e + f)
    }

    function kc(b) {
        b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
        var c = X(this, b);
        return this.localeData().postformat(c)
    }

    function lc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function mc(a) {
        return this.from(tb(), a)
    }

    function nc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function oc(a) {
        return this.to(tb(), a)
    }

    function pc(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this)
    }

    function qc() {
        return this._locale
    }

    function rc(a) {
        switch (a = K(a)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function sc(a) {
        return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
    }

    function tc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function uc() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function vc() {
        return new Date(this.valueOf())
    }

    function wc() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function xc() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }

    function yc() {
        return this.isValid() ? this.toISOString() : null
    }

    function zc() {
        return o(this)
    }

    function Ac() {
        return k({}, n(this))
    }

    function Bc() {
        return n(this).overflow
    }

    function Cc() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function Dc(a, b) {
        U(0, [a, a.length], 0, b)
    }

    function Ec(a) {
        return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Fc(a) {
        return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Gc() {
        return xa(this.year(), 1, 4)
    }

    function Hc() {
        var a = this.localeData()._week;
        return xa(this.year(), a.dow, a.doy)
    }

    function Ic(a, b, c, d, e) {
        var f;
        return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e))
    }

    function Jc(a, b, c, d, e) {
        var f = va(a, b, c, d, e),
            g = ta(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
    }

    function Kc(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Lc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function Mc(a, b) {
        b[kf] = u(1e3 * ("0." + a))
    }

    function Nc() {
        return this._isUTC ? "UTC" : ""
    }

    function Oc() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Pc(a) {
        return tb(1e3 * a)
    }

    function Qc() {
        return tb.apply(null, arguments).parseZone()
    }

    function Rc(a) {
        return a
    }

    function Sc(a, b, c, d) {
        var e = bb(),
            f = l().set(d, b);
        return e[c](f, a)
    }

    function Tc(a, b, c) {
        if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");
        var d, e = [];
        for (d = 0; d < 12; d++) e[d] = Sc(a, d, c, "month");
        return e
    }

    function Uc(a, b, c, d) {
        "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || "");
        var e = bb(),
            f = a ? e._week.dow : 0;
        if (null != c) return Sc(b, (c + f) % 7, d, "day");
        var h, i = [];
        for (h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, "day");
        return i
    }

    function Vc(a, b) {
        return Tc(a, b, "months")
    }

    function Wc(a, b) {
        return Tc(a, b, "monthsShort")
    }

    function Xc(a, b, c) {
        return Uc(a, b, c, "weekdays")
    }

    function Yc(a, b, c) {
        return Uc(a, b, c, "weekdaysShort")
    }

    function Zc(a, b, c) {
        return Uc(a, b, c, "weekdaysMin")
    }

    function $c() {
        var a = this._data;
        return this._milliseconds = dg(this._milliseconds), this._days = dg(this._days), this._months = dg(this._months), a.milliseconds = dg(a.milliseconds), a.seconds = dg(a.seconds), a.minutes = dg(a.minutes), a.hours = dg(a.hours), a.months = dg(a.months), a.years = dg(a.years), this
    }

    function _c(a, b, c, d) {
        var e = Sb(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function ad(a, b) {
        return _c(this, a, b, 1)
    }

    function bd(a, b) {
        return _c(this, a, b, -1)
    }

    function cd(a) {
        return a < 0 ? Math.floor(a) : Math.ceil(a)
    }

    function dd() {
        var a, b, c, d, e, f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function ed(a) {
        return 4800 * a / 146097
    }

    function fd(a) {
        return 146097 * a / 4800
    }

    function gd(a) {
        if (!this.isValid()) return NaN;
        var b, c, d = this._milliseconds;
        if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(fd(this._months)), a) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }

    function hd() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN
    }

    function id(a) {
        return function () {
            return this.as(a)
        }
    }

    function jd(a) {
        return a = K(a), this.isValid() ? this[a + "s"]() : NaN
    }

    function kd(a) {
        return function () {
            return this.isValid() ? this._data[a] : NaN
        }
    }

    function ld() {
        return t(this.days() / 7)
    }

    function md(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function nd(a, b, c) {
        var d = Sb(a).abs(),
            e = tg(d.as("s")),
            f = tg(d.as("m")),
            g = tg(d.as("h")),
            h = tg(d.as("d")),
            i = tg(d.as("M")),
            j = tg(d.as("y")),
            k = e <= ug.ss && ["s", e] || e < ug.s && ["ss", e] || f <= 1 && ["m"] || f < ug.m && ["mm", f] || g <= 1 && ["h"] || g < ug.h && ["hh", g] || h <= 1 && ["d"] || h < ug.d && ["dd", h] || i <= 1 && ["M"] || i < ug.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k)
    }

    function od(a) {
        return void 0 === a ? tg : "function" == typeof a && (tg = a, !0)
    }

    function pd(a, b) {
        return void 0 !== ug[a] && (void 0 === b ? ug[a] : (ug[a] = b, "s" === a && (ug.ss = b - 1), !0))
    }

    function qd(a) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var b = this.localeData(),
            c = nd(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function rd() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a, b, c, d = vg(this._milliseconds) / 1e3,
            e = vg(this._days),
            f = vg(this._months);
        a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;
        var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();
        return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }
    //! moment.js locale configuration
    //! locale : Belarusian [be]
    //! author : Dmitry Demidov : https://github.com/demidov91
    //! author: Praleska: http://praleska.pro/
    //! Author : Menelion Elens煤le : https://github.com/Oire
    function sd(a, b) {
        var c = a.split("_");
        return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2]
    }

    function td(a, b, c) {
        var d = {
            mm: b ? "褏胁褨谢褨薪邪_褏胁褨谢褨薪褘_褏胁褨谢褨薪" : "褏胁褨谢褨薪褍_褏胁褨谢褨薪褘_褏胁褨谢褨薪",
            hh: b ? "谐邪写蟹褨薪邪_谐邪写蟹褨薪褘_谐邪写蟹褨薪" : "谐邪写蟹褨薪褍_谐邪写蟹褨薪褘_谐邪写蟹褨薪",
            dd: "写蟹械薪褜_写薪褨_写蟹褢薪",
            MM: "屑械褋褟褑_屑械褋褟褑褘_屑械褋褟褑邪褳",
            yy: "谐芯写_谐邪写褘_谐邪写芯褳"
        };
        return "m" === c ? b ? "褏胁褨谢褨薪邪" : "褏胁褨谢褨薪褍" : "h" === c ? b ? "谐邪写蟹褨薪邪" : "谐邪写蟹褨薪褍" : a + " " + sd(d[c], +a)
    }
    //! moment.js locale configuration
    //! locale : Breton [br]
    //! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
    function ud(a, b, c) {
        var d = {
            mm: "munutenn",
            MM: "miz",
            dd: "devezh"
        };
        return a + " " + xd(d[c], a)
    }

    function vd(a) {
        switch (wd(a)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return a + " bloaz";
            default:
                return a + " vloaz"
        }
    }

    function wd(a) {
        return a > 9 ? wd(a % 10) : a
    }

    function xd(a, b) {
        return 2 === b ? yd(a) : a
    }

    function yd(a) {
        var b = {
            m: "v",
            b: "v",
            d: "z"
        };
        return void 0 === b[a.charAt(0)] ? a : b[a.charAt(0)] + a.substring(1)
    }
    //! moment.js locale configuration
    //! locale : Bosnian [bs]
    //! author : Nedim Cholich : https://github.com/frontyard
    //! based on (hr) translation by Bojan Markovi膰
    function zd(a, b, c) {
        var d = a + " ";
        switch (c) {
            case "m":
                return b ? "jedna minuta" : "jedne minute";
            case "mm":
                return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
            case "h":
                return b ? "jedan sat" : "jednog sata";
            case "hh":
                return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
            case "dd":
                return d += 1 === a ? "dan" : "dana";
            case "MM":
                return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
            case "yy":
                return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
        }
    }

    function Ad(a) {
        return a > 1 && a < 5 && 1 !== ~~(a / 10)
    }

    function Bd(a, b, c, d) {
        var e = a + " ";
        switch (c) {
            case "s":
                return b || d ? "p谩r sekund" : "p谩r sekundami";
            case "m":
                return b ? "minuta" : d ? "minutu" : "minutou";
            case "mm":
                return b || d ? e + (Ad(a) ? "minuty" : "minut") : e + "minutami";
                break;
            case "h":
                return b ? "hodina" : d ? "hodinu" : "hodinou";
            case "hh":
                return b || d ? e + (Ad(a) ? "hodiny" : "hodin") : e + "hodinami";
                break;
            case "d":
                return b || d ? "den" : "dnem";
            case "dd":
                return b || d ? e + (Ad(a) ? "dny" : "dn铆") : e + "dny";
                break;
            case "M":
                return b || d ? "m臎s铆c" : "m臎s铆cem";
            case "MM":
                return b || d ? e + (Ad(a) ? "m臎s铆ce" : "m臎s铆c暖") : e + "m臎s铆ci";
                break;
            case "y":
                return b || d ? "rok" : "rokem";
            case "yy":
                return b || d ? e + (Ad(a) ? "roky" : "let") : e + "lety"
        }
    }
    //! moment.js locale configuration
    //! locale : German (Austria) [de-at]
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion Elens煤le: https://github.com/Oire
    //! author : Martin Groller : https://github.com/MadMG
    //! author : Mikolaj Dadela : https://github.com/mik01aj
    function Cd(a, b, c, d) {
        var e = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [a + " Tage", a + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [a + " Monate", a + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [a + " Jahre", a + " Jahren"]
        };
        return b ? e[c][0] : e[c][1]
    }
    //! moment.js locale configuration
    //! locale : German (Switzerland) [de-ch]
    //! author : sschueller : https://github.com/sschueller
    function Dd(a, b, c, d) {
        var e = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [a + " Tage", a + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [a + " Monate", a + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [a + " Jahre", a + " Jahren"]
        };
        return b ? e[c][0] : e[c][1]
    }
    //! moment.js locale configuration
    //! locale : German [de]
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion Elens煤le: https://github.com/Oire
    //! author : Mikolaj Dadela : https://github.com/mik01aj
    function Ed(a, b, c, d) {
        var e = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [a + " Tage", a + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [a + " Monate", a + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [a + " Jahre", a + " Jahren"]
        };
        return b ? e[c][0] : e[c][1]
    }
    //! moment.js locale configuration
    //! locale : Estonian [et]
    //! author : Henry Kehlmann : https://github.com/madhenry
    //! improvements : Illimar Tambek : https://github.com/ragulka
    function Fd(a, b, c, d) {
        var e = {
            s: ["m玫ne sekundi", "m玫ni sekund", "paar sekundit"],
            m: ["眉he minuti", "眉ks minut"],
            mm: [a + " minuti", a + " minutit"],
            h: ["眉he tunni", "tund aega", "眉ks tund"],
            hh: [a + " tunni", a + " tundi"],
            d: ["眉he p盲eva", "眉ks p盲ev"],
            M: ["kuu aja", "kuu aega", "眉ks kuu"],
            MM: [a + " kuu", a + " kuud"],
            y: ["眉he aasta", "aasta", "眉ks aasta"],
            yy: [a + " aasta", a + " aastat"]
        };
        return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1]
    }

    function Gd(a, b, c, d) {
        var e = "";
        switch (c) {
            case "s":
                return d ? "muutaman sekunnin" : "muutama sekunti";
            case "m":
                return d ? "minuutin" : "minuutti";
            case "mm":
                e = d ? "minuutin" : "minuuttia";
                break;
            case "h":
                return d ? "tunnin" : "tunti";
            case "hh":
                e = d ? "tunnin" : "tuntia";
                break;
            case "d":
                return d ? "p盲iv盲n" : "p盲iv盲";
            case "dd":
                e = d ? "p盲iv盲n" : "p盲iv盲盲";
                break;
            case "M":
                return d ? "kuukauden" : "kuukausi";
            case "MM":
                e = d ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return d ? "vuoden" : "vuosi";
            case "yy":
                e = d ? "vuoden" : "vuotta"
        }
        return e = Hd(a, d) + " " + e
    }

    function Hd(a, b) {
        return a < 10 ? b ? $g[a] : Zg[a] : a
    }
    //! moment.js locale configuration
    //! locale : Konkani Latin script [gom-latn]
    //! author : The Discoverer : https://github.com/WikiDiscoverer
    function Id(a, b, c, d) {
        var e = {
            s: ["thodde secondanim", "thodde second"],
            m: ["eka mintan", "ek minute"],
            mm: [a + " mintanim", a + " mintam"],
            h: ["eka horan", "ek hor"],
            hh: [a + " horanim", a + " hor"],
            d: ["eka disan", "ek dis"],
            dd: [a + " disanim", a + " dis"],
            M: ["eka mhoinean", "ek mhoino"],
            MM: [a + " mhoineanim", a + " mhoine"],
            y: ["eka vorsan", "ek voros"],
            yy: [a + " vorsanim", a + " vorsam"]
        };
        return b ? e[c][0] : e[c][1]
    }
    //! moment.js locale configuration
    //! locale : Croatian [hr]
    //! author : Bojan Markovi膰 : https://github.com/bmarkovic
    function Jd(a, b, c) {
        var d = a + " ";
        switch (c) {
            case "m":
                return b ? "jedna minuta" : "jedne minute";
            case "mm":
                return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
            case "h":
                return b ? "jedan sat" : "jednog sata";
            case "hh":
                return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
            case "dd":
                return d += 1 === a ? "dan" : "dana";
            case "MM":
                return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
            case "yy":
                return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
        }
    }

    function Kd(a, b, c, d) {
        var e = a;
        switch (c) {
            case "s":
                return d || b ? "n茅h谩ny m谩sodperc" : "n茅h谩ny m谩sodperce";
            case "m":
                return "egy" + (d || b ? " perc" : " perce");
            case "mm":
                return e + (d || b ? " perc" : " perce");
            case "h":
                return "egy" + (d || b ? " 贸ra" : " 贸r谩ja");
            case "hh":
                return e + (d || b ? " 贸ra" : " 贸r谩ja");
            case "d":
                return "egy" + (d || b ? " nap" : " napja");
            case "dd":
                return e + (d || b ? " nap" : " napja");
            case "M":
                return "egy" + (d || b ? " h贸nap" : " h贸napja");
            case "MM":
                return e + (d || b ? " h贸nap" : " h贸napja");
            case "y":
                return "egy" + (d || b ? " 茅v" : " 茅ve");
            case "yy":
                return e + (d || b ? " 茅v" : " 茅ve")
        }
        return ""
    }

    function Ld(a) {
        return (a ? "" : "[m煤lt] ") + "[" + ih[this.day()] + "] LT[-kor]"
    }
    //! moment.js locale configuration
    //! locale : Icelandic [is]
    //! author : Hinrik 脰rn Sigur冒sson : https://github.com/hinrik
    function Md(a) {
        return a % 100 === 11 || a % 10 !== 1
    }

    function Nd(a, b, c, d) {
        var e = a + " ";
        switch (c) {
            case "s":
                return b || d ? "nokkrar sek煤ndur" : "nokkrum sek煤ndum";
            case "m":
                return b ? "m铆n煤ta" : "m铆n煤tu";
            case "mm":
                return Md(a) ? e + (b || d ? "m铆n煤tur" : "m铆n煤tum") : b ? e + "m铆n煤ta" : e + "m铆n煤tu";
            case "hh":
                return Md(a) ? e + (b || d ? "klukkustundir" : "klukkustundum") : e + "klukkustund";
            case "d":
                return b ? "dagur" : d ? "dag" : "degi";
            case "dd":
                return Md(a) ? b ? e + "dagar" : e + (d ? "daga" : "d枚gum") : b ? e + "dagur" : e + (d ? "dag" : "degi");
            case "M":
                return b ? "m谩nu冒ur" : d ? "m谩nu冒" : "m谩nu冒i";
            case "MM":
                return Md(a) ? b ? e + "m谩nu冒ir" : e + (d ? "m谩nu冒i" : "m谩nu冒um") : b ? e + "m谩nu冒ur" : e + (d ? "m谩nu冒" : "m谩nu冒i");
            case "y":
                return b || d ? "谩r" : "谩ri";
            case "yy":
                return Md(a) ? e + (b || d ? "谩r" : "谩rum") : e + (b || d ? "谩r" : "谩ri")
        }
    }
    //! moment.js locale configuration
    //! locale : Luxembourgish [lb]
    //! author : mweimerskirch : https://github.com/mweimerskirch
    //! author : David Raison : https://github.com/kwisatz
    function Od(a, b, c, d) {
        var e = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"]
        };
        return b ? e[c][0] : e[c][1]
    }

    function Pd(a) {
        var b = a.substr(0, a.indexOf(" "));
        return Rd(b) ? "a " + a : "an " + a
    }

    function Qd(a) {
        var b = a.substr(0, a.indexOf(" "));
        return Rd(b) ? "viru " + a : "virun " + a
    }

    function Rd(a) {
        if (a = parseInt(a, 10), isNaN(a)) return !1;
        if (a < 0) return !0;
        if (a < 10) return 4 <= a && a <= 7;
        if (a < 100) {
            var b = a % 10,
                c = a / 10;
            return Rd(0 === b ? c : b)
        }
        if (a < 1e4) {
            for (; a >= 10;) a /= 10;
            return Rd(a)
        }
        return a /= 1e3, Rd(a)
    }

    function Sd(a, b, c, d) {
        return b ? "kelios sekund臈s" : d ? "keli懦 sekund啪i懦" : "kelias sekundes"
    }

    function Td(a, b, c, d) {
        return b ? Vd(c)[0] : d ? Vd(c)[1] : Vd(c)[2]
    }

    function Ud(a) {
        return a % 10 === 0 || a > 10 && a < 20
    }

    function Vd(a) {
        return nh[a].split("_")
    }

    function Wd(a, b, c, d) {
        var e = a + " ";
        return 1 === a ? e + Td(a, b, c[0], d) : b ? e + (Ud(a) ? Vd(c)[1] : Vd(c)[0]) : d ? e + Vd(c)[1] : e + (Ud(a) ? Vd(c)[1] : Vd(c)[2])
    }

    function Xd(a, b, c) {
        return c ? b % 10 === 1 && b % 100 !== 11 ? a[2] : a[3] : b % 10 === 1 && b % 100 !== 11 ? a[0] : a[1]
    }

    function Yd(a, b, c) {
        return a + " " + Xd(oh[c], a, b)
    }

    function Zd(a, b, c) {
        return Xd(oh[c], a, b)
    }

    function $d(a, b) {
        return b ? "da啪as sekundes" : "da啪膩m sekund膿m"
    }

    function _d(a, b, c, d) {
        var e = "";
        if (b) switch (c) {
            case "s":
                e = "啶曕ぞ啶灌 啶膏啶曕啶�";
                break;
            case "m":
                e = "啶忇 啶た啶ㄠた啶�";
                break;
            case "mm":
                e = "%d 啶た啶ㄠた啶熰";
                break;
            case "h":
                e = "啶忇 啶むぞ啶�";
                break;
            case "hh":
                e = "%d 啶むぞ啶�";
                break;
            case "d":
                e = "啶忇 啶︵た啶掂じ";
                break;
            case "dd":
                e = "%d 啶︵た啶掂じ";
                break;
            case "M":
                e = "啶忇 啶す啶苦え啶�";
                break;
            case "MM":
                e = "%d 啶す啶苦え啷�";
                break;
            case "y":
                e = "啶忇 啶掂ぐ啷嵿し";
                break;
            case "yy":
                e = "%d 啶掂ぐ啷嵿し啷�"
        } else switch (c) {
            case "s":
                e = "啶曕ぞ啶灌 啶膏啶曕啶︵ぞ啶�";
                break;
            case "m":
                e = "啶忇啶� 啶た啶ㄠた啶熰ぞ";
                break;
            case "mm":
                e = "%d 啶た啶ㄠた啶熰ぞ啶�";
                break;
            case "h":
                e = "啶忇啶� 啶むぞ啶膏ぞ";
                break;
            case "hh":
                e = "%d 啶むぞ啶膏ぞ啶�";
                break;
            case "d":
                e = "啶忇啶� 啶︵た啶掂じ啶�";
                break;
            case "dd":
                e = "%d 啶︵た啶掂じ啶距";
                break;
            case "M":
                e = "啶忇啶� 啶す啶苦え啷嵿く啶�";
                break;
            case "MM":
                e = "%d 啶す啶苦え啷嵿く啶距";
                break;
            case "y":
                e = "啶忇啶� 啶掂ぐ啷嵿し啶�";
                break;
            case "yy":
                e = "%d 啶掂ぐ啷嵿し啶距"
        }
        return e.replace(/%d/i, a)
    }

    function ae(a) {
        return a % 10 < 5 && a % 10 > 1 && ~~(a / 10) % 10 !== 1
    }

    function be(a, b, c) {
        var d = a + " ";
        switch (c) {
            case "m":
                return b ? "minuta" : "minut臋";
            case "mm":
                return d + (ae(a) ? "minuty" : "minut");
            case "h":
                return b ? "godzina" : "godzin臋";
            case "hh":
                return d + (ae(a) ? "godziny" : "godzin");
            case "MM":
                return d + (ae(a) ? "miesi膮ce" : "miesi臋cy");
            case "yy":
                return d + (ae(a) ? "lata" : "lat")
        }
    }
    //! moment.js locale configuration
    //! locale : Romanian [ro]
    //! author : Vlad Gurdiga : https://github.com/gurdiga
    //! author : Valentin Agachi : https://github.com/avaly
    function ce(a, b, c) {
        var d = {
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            },
            e = " ";
        return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c]
    }
    //! moment.js locale configuration
    //! locale : Russian [ru]
    //! author : Viktorminator : https://github.com/Viktorminator
    //! Author : Menelion Elens煤le : https://github.com/Oire
    //! author : 袣芯褉械薪斜械褉谐 袦邪褉泻 : https://github.com/socketpair
    function de(a, b) {
        var c = a.split("_");
        return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2]
    }

    function ee(a, b, c) {
        var d = {
            mm: b ? "屑懈薪褍褌邪_屑懈薪褍褌褘_屑懈薪褍褌" : "屑懈薪褍褌褍_屑懈薪褍褌褘_屑懈薪褍褌",
            hh: "褔邪褋_褔邪褋邪_褔邪褋芯胁",
            dd: "写械薪褜_写薪褟_写薪械泄",
            MM: "屑械褋褟褑_屑械褋褟褑邪_屑械褋褟褑械胁",
            yy: "谐芯写_谐芯写邪_谢械褌"
        };
        return "m" === c ? b ? "屑懈薪褍褌邪" : "屑懈薪褍褌褍" : a + " " + de(d[c], +a)
    }

    function fe(a) {
        return a > 1 && a < 5
    }

    function ge(a, b, c, d) {
        var e = a + " ";
        switch (c) {
            case "s":
                return b || d ? "p谩r sek煤nd" : "p谩r sekundami";
            case "m":
                return b ? "min煤ta" : d ? "min煤tu" : "min煤tou";
            case "mm":
                return b || d ? e + (fe(a) ? "min煤ty" : "min煤t") : e + "min煤tami";
                break;
            case "h":
                return b ? "hodina" : d ? "hodinu" : "hodinou";
            case "hh":
                return b || d ? e + (fe(a) ? "hodiny" : "hod铆n") : e + "hodinami";
                break;
            case "d":
                return b || d ? "de艌" : "d艌om";
            case "dd":
                return b || d ? e + (fe(a) ? "dni" : "dn铆") : e + "d艌ami";
                break;
            case "M":
                return b || d ? "mesiac" : "mesiacom";
            case "MM":
                return b || d ? e + (fe(a) ? "mesiace" : "mesiacov") : e + "mesiacmi";
                break;
            case "y":
                return b || d ? "rok" : "rokom";
            case "yy":
                return b || d ? e + (fe(a) ? "roky" : "rokov") : e + "rokmi"
        }
    }
    //! moment.js locale configuration
    //! locale : Slovenian [sl]
    //! author : Robert Sedov拧ek : https://github.com/sedovsek
    function he(a, b, c, d) {
        var e = a + " ";
        switch (c) {
            case "s":
                return b || d ? "nekaj sekund" : "nekaj sekundami";
            case "m":
                return b ? "ena minuta" : "eno minuto";
            case "mm":
                return e += 1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || d ? "minuti" : "minutama" : a < 5 ? b || d ? "minute" : "minutami" : b || d ? "minut" : "minutami";
            case "h":
                return b ? "ena ura" : "eno uro";
            case "hh":
                return e += 1 === a ? b ? "ura" : "uro" : 2 === a ? b || d ? "uri" : "urama" : a < 5 ? b || d ? "ure" : "urami" : b || d ? "ur" : "urami";
            case "d":
                return b || d ? "en dan" : "enim dnem";
            case "dd":
                return e += 1 === a ? b || d ? "dan" : "dnem" : 2 === a ? b || d ? "dni" : "dnevoma" : b || d ? "dni" : "dnevi";
            case "M":
                return b || d ? "en mesec" : "enim mesecem";
            case "MM":
                return e += 1 === a ? b || d ? "mesec" : "mesecem" : 2 === a ? b || d ? "meseca" : "mesecema" : a < 5 ? b || d ? "mesece" : "meseci" : b || d ? "mesecev" : "meseci";
            case "y":
                return b || d ? "eno leto" : "enim letom";
            case "yy":
                return e += 1 === a ? b || d ? "leto" : "letom" : 2 === a ? b || d ? "leti" : "letoma" : a < 5 ? b || d ? "leta" : "leti" : b || d ? "let" : "leti"
        }
    }

    function ie(a) {
        var b = a;
        return b = a.indexOf("jaj") !== -1 ? b.slice(0, -3) + "leS" : a.indexOf("jar") !== -1 ? b.slice(0, -3) + "waQ" : a.indexOf("DIS") !== -1 ? b.slice(0, -3) + "nem" : b + " pIq"
    }

    function je(a) {
        var b = a;
        return b = a.indexOf("jaj") !== -1 ? b.slice(0, -3) + "Hu鈥�" : a.indexOf("jar") !== -1 ? b.slice(0, -3) + "wen" : a.indexOf("DIS") !== -1 ? b.slice(0, -3) + "ben" : b + " ret"
    }

    function ke(a, b, c, d) {
        var e = le(a);
        switch (c) {
            case "mm":
                return e + " tup";
            case "hh":
                return e + " rep";
            case "dd":
                return e + " jaj";
            case "MM":
                return e + " jar";
            case "yy":
                return e + " DIS"
        }
    }

    function le(a) {
        var b = Math.floor(a % 1e3 / 100),
            c = Math.floor(a % 100 / 10),
            d = a % 10,
            e = "";
        return b > 0 && (e += Rh[b] + "vatlh"), c > 0 && (e += ("" !== e ? " " : "") + Rh[c] + "maH"), d > 0 && (e += ("" !== e ? " " : "") + Rh[d]), "" === e ? "pagh" : e
    }

    function me(a, b, c, d) {
        var e = {
            s: ["viensas secunds", "'iensas secunds"],
            m: ["'n m铆ut", "'iens m铆ut"],
            mm: [a + " m铆uts", "" + a + " m铆uts"],
            h: ["'n 镁ora", "'iensa 镁ora"],
            hh: [a + " 镁oras", "" + a + " 镁oras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [a + " ziuas", "" + a + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [a + " mesen", "" + a + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [a + " ars", "" + a + " ars"]
        };
        return d ? e[c][0] : b ? e[c][0] : e[c][1]
    }
    //! moment.js locale configuration
    //! locale : Ukrainian [uk]
    //! author : zemlanin : https://github.com/zemlanin
    //! Author : Menelion Elens煤le : https://github.com/Oire
    function ne(a, b) {
        var c = a.split("_");
        return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2]
    }

    function oe(a, b, c) {
        var d = {
            mm: b ? "褏胁懈谢懈薪邪_褏胁懈谢懈薪懈_褏胁懈谢懈薪" : "褏胁懈谢懈薪褍_褏胁懈谢懈薪懈_褏胁懈谢懈薪",
            hh: b ? "谐芯写懈薪邪_谐芯写懈薪懈_谐芯写懈薪" : "谐芯写懈薪褍_谐芯写懈薪懈_谐芯写懈薪",
            dd: "写械薪褜_写薪褨_写薪褨胁",
            MM: "屑褨褋褟褑褜_屑褨褋褟褑褨_屑褨褋褟褑褨胁",
            yy: "褉褨泻_褉芯泻懈_褉芯泻褨胁"
        };
        return "m" === c ? b ? "褏胁懈谢懈薪邪" : "褏胁懈谢懈薪褍" : "h" === c ? b ? "谐芯写懈薪邪" : "谐芯写懈薪褍" : a + " " + ne(d[c], +a)
    }

    function pe(a, b) {
        var c = {
            nominative: "薪械写褨谢褟_锌芯薪械写褨谢芯泻_胁褨胁褌芯褉芯泻_褋械褉械写邪_褔械褌胁械褉_锌鈥櫻徰傂叫秆喲廮褋褍斜芯褌邪".split("_"),
            accusative: "薪械写褨谢褞_锌芯薪械写褨谢芯泻_胁褨胁褌芯褉芯泻_褋械褉械写褍_褔械褌胁械褉_锌鈥櫻徰傂叫秆喲巁褋褍斜芯褌褍".split("_"),
            genitive: "薪械写褨谢褨_锌芯薪械写褨谢泻邪_胁褨胁褌芯褉泻邪_褋械褉械写懈_褔械褌胁械褉谐邪_锌鈥櫻徰傂叫秆喲朹褋褍斜芯褌懈".split("_")
        };
        if (!a) return c.nominative;
        var d = /(\[[袙胁校褍]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:屑懈薪褍谢芯褩|薪邪褋褌褍锌薪芯褩)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";
        return c[d][a.day()]
    }

    function qe(a) {
        return function () {
            return a + "芯" + (11 === this.hours() ? "斜" : "") + "] LT"
        }
    }
    var re, se;
    se = Array.prototype.some ? Array.prototype.some : function (a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
            if (d in b && a.call(this, b[d], d, b)) return !0;
        return !1
    };
    var te = se,
        ue = a.momentProperties = [],
        ve = !1,
        we = {};
    a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
    var xe;
    xe = Object.keys ? Object.keys : function (a) {
        var b, c = [];
        for (b in a) j(a, b) && c.push(b);
        return c
    };
    var ye, ze = xe,
        Ae = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        Be = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        Ce = "Invalid date",
        De = "%d",
        Ee = /\d{1,2}/,
        Fe = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Ge = {},
        He = {},
        Ie = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Je = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Ke = {},
        Le = {},
        Me = /\d/,
        Ne = /\d\d/,
        Oe = /\d{3}/,
        Pe = /\d{4}/,
        Qe = /[+-]?\d{6}/,
        Re = /\d\d?/,
        Se = /\d\d\d\d?/,
        Te = /\d\d\d\d\d\d?/,
        Ue = /\d{1,3}/,
        Ve = /\d{1,4}/,
        We = /[+-]?\d{1,6}/,
        Xe = /\d+/,
        Ye = /[+-]?\d+/,
        Ze = /Z|[+-]\d\d:?\d\d/gi,
        $e = /Z|[+-]\d\d(?::?\d\d)?/gi,
        _e = /[+-]?\d+(\.\d{1,3})?/,
        af = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        bf = {},
        cf = {},
        df = 0,
        ef = 1,
        ff = 2,
        gf = 3,
        hf = 4,
        jf = 5,
        kf = 6,
        lf = 7,
        mf = 8;
    ye = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
        var b;
        for (b = 0; b < this.length; ++b)
            if (this[b] === a) return b;
        return -1
    };
    var nf = ye;
    U("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), U("MMM", 0, 0, function (a) {
        return this.localeData().monthsShort(this, a)
    }), U("MMMM", 0, 0, function (a) {
        return this.localeData().months(this, a)
    }), J("month", "M"), M("month", 8), Z("M", Re), Z("MM", Re, Ne), Z("MMM", function (a, b) {
        return b.monthsShortRegex(a)
    }), Z("MMMM", function (a, b) {
        return b.monthsRegex(a)
    }), ba(["M", "MM"], function (a, b) {
        b[ef] = u(a) - 1
    }), ba(["MMM", "MMMM"], function (a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[ef] = e : n(c).invalidMonth = a
    });
    var of = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, pf = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), qf = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), rf = af, sf = af;
    U("Y", 0, 0, function () {
        var a = this.year();
        return a <= 9999 ? "" + a : "+" + a
    }), U(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Ye), Z("YY", Re, Ne), Z("YYYY", Ve, Pe), Z("YYYYY", We, Qe), Z("YYYYYY", We, Qe), ba(["YYYYY", "YYYYYY"], df), ba("YYYY", function (b, c) {
        c[df] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b)
    }), ba("YY", function (b, c) {
        c[df] = a.parseTwoDigitYear(b)
    }), ba("Y", function (a, b) {
        b[df] = parseInt(a, 10)
    }), a.parseTwoDigitYear = function (a) {
        return u(a) + (u(a) > 68 ? 1900 : 2e3)
    };
    var tf = O("FullYear", !0);
    U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Re), Z("ww", Re, Ne), Z("W", Re), Z("WW", Re, Ne), ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
        b[d.substr(0, 1)] = u(a)
    });
    var uf = {
        dow: 0,
        doy: 6
    };
    U("d", 0, "do", "day"), U("dd", 0, 0, function (a) {
        return this.localeData().weekdaysMin(this, a)
    }), U("ddd", 0, 0, function (a) {
        return this.localeData().weekdaysShort(this, a)
    }), U("dddd", 0, 0, function (a) {
        return this.localeData().weekdays(this, a)
    }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Re), Z("e", Re), Z("E", Re), Z("dd", function (a, b) {
        return b.weekdaysMinRegex(a)
    }), Z("ddd", function (a, b) {
        return b.weekdaysShortRegex(a)
    }), Z("dddd", function (a, b) {
        return b.weekdaysRegex(a)
    }), ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? b.d = e : n(c).invalidWeekday = a
    }), ca(["d", "e", "E"], function (a, b, c, d) {
        b[d] = u(a)
    });
    var vf = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        wf = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        xf = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        yf = af,
        zf = af,
        Af = af;
    U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function () {
        return "" + Ra.apply(this) + T(this.minutes(), 2)
    }), U("hmmss", 0, 0, function () {
        return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
    }), U("Hmm", 0, 0, function () {
        return "" + this.hours() + T(this.minutes(), 2)
    }), U("Hmmss", 0, 0, function () {
        return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
    }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Re), Z("h", Re), Z("k", Re), Z("HH", Re, Ne), Z("hh", Re, Ne), Z("kk", Re, Ne), Z("hmm", Se), Z("hmmss", Te), Z("Hmm", Se), Z("Hmmss", Te), ba(["H", "HH"], gf), ba(["k", "kk"], function (a, b, c) {
        var d = u(a);
        b[gf] = 24 === d ? 0 : d
    }), ba(["a", "A"], function (a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a
    }), ba(["h", "hh"], function (a, b, c) {
        b[gf] = u(a), n(c).bigHour = !0
    }), ba("hmm", function (a, b, c) {
        var d = a.length - 2;
        b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d)), n(c).bigHour = !0
    }), ba("hmmss", function (a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d, 2)), b[jf] = u(a.substr(e)), n(c).bigHour = !0
    }), ba("Hmm", function (a, b, c) {
        var d = a.length - 2;
        b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d))
    }), ba("Hmmss", function (a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d, 2)), b[jf] = u(a.substr(e))
    });
    var Bf, Cf = /[ap]\.?m?\.?/i,
        Df = O("Hours", !0),
        Ef = {
            calendar: Ae,
            longDateFormat: Be,
            invalidDate: Ce,
            ordinal: De,
            dayOfMonthOrdinalParse: Ee,
            relativeTime: Fe,
            months: pf,
            monthsShort: qf,
            week: uf,
            weekdays: vf,
            weekdaysMin: xf,
            weekdaysShort: wf,
            meridiemParse: Cf
        },
        Ff = {},
        Gf = {},
        Hf = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        If = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Jf = /Z|[+-]\d\d(?::?\d\d)?/,
        Kf = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Lf = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Mf = /^\/?Date\((\-?\d+)/i,
        Nf = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
    a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), a.ISO_8601 = function () {}, a.RFC_2822 = function () {};
    var Of = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var a = tb.apply(null, arguments);
            return this.isValid() && a.isValid() ? a < this ? this : a : p()
        }),
        Pf = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var a = tb.apply(null, arguments);
            return this.isValid() && a.isValid() ? a > this ? this : a : p()
        }),
        Qf = function () {
            return Date.now ? Date.now() : +new Date
        },
        Rf = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Db("Z", ":"), Db("ZZ", ""), Z("Z", $e), Z("ZZ", $e), ba(["Z", "ZZ"], function (a, b, c) {
        c._useUTC = !0, c._tzm = Eb($e, a)
    });
    var Sf = /([\+\-]|\d\d)/gi;
    a.updateOffset = function () {};
    var Tf = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Uf = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Sb.fn = Ab.prototype, Sb.invalid = zb;
    var Vf = Wb(1, "add"),
        Wf = Wb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xf = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    U(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), U(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Ye), Z("g", Ye), Z("GG", Re, Ne), Z("gg", Re, Ne), Z("GGGG", Ve, Pe), Z("gggg", Ve, Pe), Z("GGGGG", We, Qe), Z("ggggg", We, Qe), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
        b[d.substr(0, 2)] = u(a)
    }), ca(["gg", "GG"], function (b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Me), ba("Q", function (a, b) {
        b[ef] = 3 * (u(a) - 1)
    }), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Re), Z("DD", Re, Ne), Z("Do", function (a, b) {
        return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient
    }), ba(["D", "DD"], ff), ba("Do", function (a, b) {
        b[ff] = u(a.match(Re)[0], 10)
    });
    var Yf = O("Date", !0);
    U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Ue), Z("DDDD", Oe), ba(["DDD", "DDDD"], function (a, b, c) {
        c._dayOfYear = u(a)
    }), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Re), Z("mm", Re, Ne), ba(["m", "mm"], hf);
    var Zf = O("Minutes", !1);
    U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Re), Z("ss", Re, Ne), ba(["s", "ss"], jf);
    var $f = O("Seconds", !1);
    U("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), U(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), U(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), U(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), U(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), U(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), U(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Ue, Me), Z("SS", Ue, Ne), Z("SSS", Ue, Oe);
    var _f;
    for (_f = "SSSS"; _f.length <= 9; _f += "S") Z(_f, Xe);
    for (_f = "S"; _f.length <= 9; _f += "S") ba(_f, Mc);
    var ag = O("Milliseconds", !1);
    U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
    var bg = r.prototype;
    bg.add = Vf, bg.calendar = Zb, bg.clone = $b, bg.diff = fc, bg.endOf = sc, bg.format = kc, bg.from = lc, bg.fromNow = mc, bg.to = nc, bg.toNow = oc, bg.get = R, bg.invalidAt = Bc, bg.isAfter = _b, bg.isBefore = ac, bg.isBetween = bc, bg.isSame = cc, bg.isSameOrAfter = dc, bg.isSameOrBefore = ec, bg.isValid = zc, bg.lang = Xf, bg.locale = pc, bg.localeData = qc, bg.max = Pf, bg.min = Of, bg.parsingFlags = Ac, bg.set = S, bg.startOf = rc, bg.subtract = Wf, bg.toArray = wc, bg.toObject = xc, bg.toDate = vc, bg.toISOString = ic, bg.inspect = jc, bg.toJSON = yc, bg.toString = hc, bg.unix = uc, bg.valueOf = tc, bg.creationData = Cc, bg.year = tf, bg.isLeapYear = ra, bg.weekYear = Ec, bg.isoWeekYear = Fc, bg.quarter = bg.quarters = Kc, bg.month = ka, bg.daysInMonth = la, bg.week = bg.weeks = Ba, bg.isoWeek = bg.isoWeeks = Ca, bg.weeksInYear = Hc, bg.isoWeeksInYear = Gc, bg.date = Yf, bg.day = bg.days = Ka, bg.weekday = La, bg.isoWeekday = Ma, bg.dayOfYear = Lc, bg.hour = bg.hours = Df, bg.minute = bg.minutes = Zf, bg.second = bg.seconds = $f, bg.millisecond = bg.milliseconds = ag, bg.utcOffset = Hb, bg.utc = Jb, bg.local = Kb, bg.parseZone = Lb, bg.hasAlignedHourOffset = Mb, bg.isDST = Nb, bg.isLocal = Pb, bg.isUtcOffset = Qb, bg.isUtc = Rb, bg.isUTC = Rb, bg.zoneAbbr = Nc, bg.zoneName = Oc, bg.dates = x("dates accessor is deprecated. Use date instead.", Yf), bg.months = x("months accessor is deprecated. Use month instead", ka), bg.years = x("years accessor is deprecated. Use year instead", tf), bg.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bg.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);
    var cg = C.prototype;
    cg.calendar = D, cg.longDateFormat = E, cg.invalidDate = F, cg.ordinal = G, cg.preparse = Rc, cg.postformat = Rc, cg.relativeTime = H, cg.pastFuture = I, cg.set = A, cg.months = fa, cg.monthsShort = ga, cg.monthsParse = ia, cg.monthsRegex = na, cg.monthsShortRegex = ma, cg.week = ya, cg.firstDayOfYear = Aa, cg.firstDayOfWeek = za, cg.weekdays = Fa, cg.weekdaysMin = Ha, cg.weekdaysShort = Ga, cg.weekdaysParse = Ja, cg.weekdaysRegex = Na, cg.weekdaysShortRegex = Oa, cg.weekdaysMinRegex = Pa, cg.isPM = Va, cg.meridiem = Wa, $a("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (a) {
            var b = a % 10,
                c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
    var dg = Math.abs,
        eg = id("ms"),
        fg = id("s"),
        gg = id("m"),
        hg = id("h"),
        ig = id("d"),
        jg = id("w"),
        kg = id("M"),
        lg = id("y"),
        mg = kd("milliseconds"),
        ng = kd("seconds"),
        og = kd("minutes"),
        pg = kd("hours"),
        qg = kd("days"),
        rg = kd("months"),
        sg = kd("years"),
        tg = Math.round,
        ug = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        vg = Math.abs,
        wg = Ab.prototype;
    wg.isValid = yb, wg.abs = $c, wg.add = ad, wg.subtract = bd, wg.as = gd, wg.asMilliseconds = eg, wg.asSeconds = fg, wg.asMinutes = gg, wg.asHours = hg, wg.asDays = ig, wg.asWeeks = jg, wg.asMonths = kg, wg.asYears = lg, wg.valueOf = hd, wg._bubble = dd, wg.get = jd, wg.milliseconds = mg, wg.seconds = ng, wg.minutes = og, wg.hours = pg, wg.days = qg, wg.weeks = ld, wg.months = rg, wg.years = sg, wg.humanize = qd, wg.toISOString = rd, wg.toString = rd, wg.toJSON = rd, wg.locale = pc, wg.localeData = qc, wg.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), wg.lang = Xf, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Ye), Z("X", _e), ba("X", function (a, b, c) {
            c._d = new Date(1e3 * parseFloat(a, 10))
        }), ba("x", function (a, b, c) {
            c._d = new Date(u(a))
        }),
        //! moment.js
        //! version : 2.18.1
        //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
        //! license : MIT
        //! momentjs.com
        a.version = "2.18.1", b(tb), a.fn = bg, a.min = vb, a.max = wb, a.now = Qf, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bg,
        //! moment.js locale configuration
        //! locale : Afrikaans [af]
        //! author : Werner Mollentze : https://github.com/wernerm
        a.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (a) {
                return /^nm$/i.test(a)
            },
            meridiem: function (a, b, c) {
                return a < 12 ? c ? "vm" : "VM" : c ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[M么re om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (a) {
                return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Arabic (Algeria) [ar-dz]
        //! author : Noureddine LOUAHEDJ : https://github.com/noureddineme
        a.defineLocale("ar-dz", {
            months: "噩丕賳賮賷_賮賷賮乇賷_賲丕乇爻_兀賮乇賷賱_賲丕賷_噩賵丕賳_噩賵賷賱賷丞_兀賵鬲_爻亘鬲賲亘乇_兀賰鬲賵亘乇_賳賵賮賲亘乇_丿賷爻賲亘乇".split("_"),
            monthsShort: "噩丕賳賮賷_賮賷賮乇賷_賲丕乇爻_兀賮乇賷賱_賲丕賷_噩賵丕賳_噩賵賷賱賷丞_兀賵鬲_爻亘鬲賲亘乇_兀賰鬲賵亘乇_賳賵賮賲亘乇_丿賷爻賲亘乇".split("_"),
            weekdays: "丕賱兀丨丿_丕賱廿孬賳賷賳_丕賱孬賱丕孬丕亍_丕賱兀乇亘毓丕亍_丕賱禺賲賷爻_丕賱噩賲毓丞_丕賱爻亘鬲".split("_"),
            weekdaysShort: "丕丨丿_丕孬賳賷賳_孬賱丕孬丕亍_丕乇亘毓丕亍_禺賲賷爻_噩賲毓丞_爻亘鬲".split("_"),
            weekdaysMin: "兀丨_廿孬_孬賱丕_兀乇_禺賲_噩賲_爻亘".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[丕賱賷賵賲 毓賱賶 丕賱爻丕毓丞] LT",
                nextDay: "[睾丿丕 毓賱賶 丕賱爻丕毓丞] LT",
                nextWeek: "dddd [毓賱賶 丕賱爻丕毓丞] LT",
                lastDay: "[兀賲爻 毓賱賶 丕賱爻丕毓丞] LT",
                lastWeek: "dddd [毓賱賶 丕賱爻丕毓丞] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "賮賷 %s",
                past: "賲賳匕 %s",
                s: "孬賵丕賳",
                m: "丿賯賷賯丞",
                mm: "%d 丿賯丕卅賯",
                h: "爻丕毓丞",
                hh: "%d 爻丕毓丕鬲",
                d: "賷賵賲",
                dd: "%d 兀賷丕賲",
                M: "卮賴乇",
                MM: "%d 兀卮賴乇",
                y: "爻賳丞",
                yy: "%d 爻賳賵丕鬲"
            },
            week: {
                dow: 0,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Arabic (Kuwait) [ar-kw]
        //! author : Nusret Parlak: https://github.com/nusretparlak
        a.defineLocale("ar-kw", {
            months: "賷賳丕賷乇_賮亘乇丕賷乇_賲丕乇爻_兀亘乇賷賱_賲丕賷_賷賵賳賷賵_賷賵賱賷賵夭_睾卮鬲_卮鬲賳亘乇_兀賰鬲賵亘乇_賳賵賳亘乇_丿噩賳亘乇".split("_"),
            monthsShort: "賷賳丕賷乇_賮亘乇丕賷乇_賲丕乇爻_兀亘乇賷賱_賲丕賷_賷賵賳賷賵_賷賵賱賷賵夭_睾卮鬲_卮鬲賳亘乇_兀賰鬲賵亘乇_賳賵賳亘乇_丿噩賳亘乇".split("_"),
            weekdays: "丕賱兀丨丿_丕賱廿鬲賳賷賳_丕賱孬賱丕孬丕亍_丕賱兀乇亘毓丕亍_丕賱禺賲賷爻_丕賱噩賲毓丞_丕賱爻亘鬲".split("_"),
            weekdaysShort: "丕丨丿_丕鬲賳賷賳_孬賱丕孬丕亍_丕乇亘毓丕亍_禺賲賷爻_噩賲毓丞_爻亘鬲".split("_"),
            weekdaysMin: "丨_賳_孬_乇_禺_噩_爻".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[丕賱賷賵賲 毓賱賶 丕賱爻丕毓丞] LT",
                nextDay: "[睾丿丕 毓賱賶 丕賱爻丕毓丞] LT",
                nextWeek: "dddd [毓賱賶 丕賱爻丕毓丞] LT",
                lastDay: "[兀賲爻 毓賱賶 丕賱爻丕毓丞] LT",
                lastWeek: "dddd [毓賱賶 丕賱爻丕毓丞] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "賮賷 %s",
                past: "賲賳匕 %s",
                s: "孬賵丕賳",
                m: "丿賯賷賯丞",
                mm: "%d 丿賯丕卅賯",
                h: "爻丕毓丞",
                hh: "%d 爻丕毓丕鬲",
                d: "賷賵賲",
                dd: "%d 兀賷丕賲",
                M: "卮賴乇",
                MM: "%d 兀卮賴乇",
                y: "爻賳丞",
                yy: "%d 爻賳賵丕鬲"
            },
            week: {
                dow: 0,
                doy: 12
            }
        });
    //! moment.js locale configuration
    //! locale : Arabic (Lybia) [ar-ly]
    //! author : Ali Hmer: https://github.com/kikoanis
    var xg = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
        },
        yg = function (a) {
            return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5
        },
        zg = {
            s: ["兀賯賱 賲賳 孬丕賳賷丞", "孬丕賳賷丞 賵丕丨丿丞", ["孬丕賳賷鬲丕賳", "孬丕賳賷鬲賷賳"], "%d 孬賵丕賳", "%d 孬丕賳賷丞", "%d 孬丕賳賷丞"],
            m: ["兀賯賱 賲賳 丿賯賷賯丞", "丿賯賷賯丞 賵丕丨丿丞", ["丿賯賷賯鬲丕賳", "丿賯賷賯鬲賷賳"], "%d 丿賯丕卅賯", "%d 丿賯賷賯丞", "%d 丿賯賷賯丞"],
            h: ["兀賯賱 賲賳 爻丕毓丞", "爻丕毓丞 賵丕丨丿丞", ["爻丕毓鬲丕賳", "爻丕毓鬲賷賳"], "%d 爻丕毓丕鬲", "%d 爻丕毓丞", "%d 爻丕毓丞"],
            d: ["兀賯賱 賲賳 賷賵賲", "賷賵賲 賵丕丨丿", ["賷賵賲丕賳", "賷賵賲賷賳"], "%d 兀賷丕賲", "%d 賷賵賲賸丕", "%d 賷賵賲"],
            M: ["兀賯賱 賲賳 卮賴乇", "卮賴乇 賵丕丨丿", ["卮賴乇丕賳", "卮賴乇賷賳"], "%d 兀卮賴乇", "%d 卮賴乇丕", "%d 卮賴乇"],
            y: ["兀賯賱 賲賳 毓丕賲", "毓丕賲 賵丕丨丿", ["毓丕賲丕賳", "毓丕賲賷賳"], "%d 兀毓賵丕賲", "%d 毓丕賲賸丕", "%d 毓丕賲"]
        },
        Ag = function (a) {
            return function (b, c, d, e) {
                var f = yg(b),
                    g = zg[a][yg(b)];
                return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b)
            }
        },
        Bg = ["賷賳丕賷乇", "賮亘乇丕賷乇", "賲丕乇爻", "兀亘乇賷賱", "賲丕賷賵", "賷賵賳賷賵", "賷賵賱賷賵", "兀睾爻胤爻", "爻亘鬲賲亘乇", "兀賰鬲賵亘乇", "賳賵賮賲亘乇", "丿賷爻賲亘乇"];
    a.defineLocale("ar-ly", {
            months: Bg,
            monthsShort: Bg,
            weekdays: "丕賱兀丨丿_丕賱廿孬賳賷賳_丕賱孬賱丕孬丕亍_丕賱兀乇亘毓丕亍_丕賱禺賲賷爻_丕賱噩賲毓丞_丕賱爻亘鬲".split("_"),
            weekdaysShort: "兀丨丿_廿孬賳賷賳_孬賱丕孬丕亍_兀乇亘毓丕亍_禺賲賷爻_噩賲毓丞_爻亘鬲".split("_"),
            weekdaysMin: "丨_賳_孬_乇_禺_噩_爻".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/鈥廙/鈥廦YYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /氐|賲/,
            isPM: function (a) {
                return "賲" === a
            },
            meridiem: function (a, b, c) {
                return a < 12 ? "氐" : "賲"
            },
            calendar: {
                sameDay: "[丕賱賷賵賲 毓賳丿 丕賱爻丕毓丞] LT",
                nextDay: "[睾丿賸丕 毓賳丿 丕賱爻丕毓丞] LT",
                nextWeek: "dddd [毓賳丿 丕賱爻丕毓丞] LT",
                lastDay: "[兀賲爻 毓賳丿 丕賱爻丕毓丞] LT",
                lastWeek: "dddd [毓賳丿 丕賱爻丕毓丞] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "亘毓丿 %s",
                past: "賲賳匕 %s",
                s: Ag("s"),
                m: Ag("m"),
                mm: Ag("m"),
                h: Ag("h"),
                hh: Ag("h"),
                d: Ag("d"),
                dd: Ag("d"),
                M: Ag("M"),
                MM: Ag("M"),
                y: Ag("y"),
                yy: Ag("y")
            },
            preparse: function (a) {
                return a.replace(/\u200f/g, "").replace(/貙/g, ",")
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return xg[a]
                }).replace(/,/g, "貙")
            },
            week: {
                dow: 6,
                doy: 12
            }
        }),
        //! moment.js locale configuration
        //! locale : Arabic (Morocco) [ar-ma]
        //! author : ElFadili Yassine : https://github.com/ElFadiliY
        //! author : Abdel Said : https://github.com/abdelsaid
        a.defineLocale("ar-ma", {
            months: "賷賳丕賷乇_賮亘乇丕賷乇_賲丕乇爻_兀亘乇賷賱_賲丕賷_賷賵賳賷賵_賷賵賱賷賵夭_睾卮鬲_卮鬲賳亘乇_兀賰鬲賵亘乇_賳賵賳亘乇_丿噩賳亘乇".split("_"),
            monthsShort: "賷賳丕賷乇_賮亘乇丕賷乇_賲丕乇爻_兀亘乇賷賱_賲丕賷_賷賵賳賷賵_賷賵賱賷賵夭_睾卮鬲_卮鬲賳亘乇_兀賰鬲賵亘乇_賳賵賳亘乇_丿噩賳亘乇".split("_"),
            weekdays: "丕賱兀丨丿_丕賱廿鬲賳賷賳_丕賱孬賱丕孬丕亍_丕賱兀乇亘毓丕亍_丕賱禺賲賷爻_丕賱噩賲毓丞_丕賱爻亘鬲".split("_"),
            weekdaysShort: "丕丨丿_丕鬲賳賷賳_孬賱丕孬丕亍_丕乇亘毓丕亍_禺賲賷爻_噩賲毓丞_爻亘鬲".split("_"),
            weekdaysMin: "丨_賳_孬_乇_禺_噩_爻".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[丕賱賷賵賲 毓賱賶 丕賱爻丕毓丞] LT",
                nextDay: "[睾丿丕 毓賱賶 丕賱爻丕毓丞] LT",
                nextWeek: "dddd [毓賱賶 丕賱爻丕毓丞] LT",
                lastDay: "[兀賲爻 毓賱賶 丕賱爻丕毓丞] LT",
                lastWeek: "dddd [毓賱賶 丕賱爻丕毓丞] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "賮賷 %s",
                past: "賲賳匕 %s",
                s: "孬賵丕賳",
                m: "丿賯賷賯丞",
                mm: "%d 丿賯丕卅賯",
                h: "爻丕毓丞",
                hh: "%d 爻丕毓丕鬲",
                d: "賷賵賲",
                dd: "%d 兀賷丕賲",
                M: "卮賴乇",
                MM: "%d 兀卮賴乇",
                y: "爻賳丞",
                yy: "%d 爻賳賵丕鬲"
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
    //! moment.js locale configuration
    //! locale : Arabic (Saudi Arabia) [ar-sa]
    //! author : Suhail Alkowaileet : https://github.com/xsoh
    var Cg = {
            1: "佟",
            2: "佗",
            3: "伲",
            4: "伽",
            5: "佶",
            6: "佴",
            7: "侑",
            8: "侉",
            9: "侃",
            0: "贍"
        },
        Dg = {
            "佟": "1",
            "佗": "2",
            "伲": "3",
            "伽": "4",
            "佶": "5",
            "佴": "6",
            "侑": "7",
            "侉": "8",
            "侃": "9",
            "贍": "0"
        };
    a.defineLocale("ar-sa", {
            months: "賷賳丕賷乇_賮亘乇丕賷乇_賲丕乇爻_兀亘乇賷賱_賲丕賷賵_賷賵賳賷賵_賷賵賱賷賵_兀睾爻胤爻_爻亘鬲賲亘乇_兀賰鬲賵亘乇_賳賵賮賲亘乇_丿賷爻賲亘乇".split("_"),
            monthsShort: "賷賳丕賷乇_賮亘乇丕賷乇_賲丕乇爻_兀亘乇賷賱_賲丕賷賵_賷賵賳賷賵_賷賵賱賷賵_兀睾爻胤爻_爻亘鬲賲亘乇_兀賰鬲賵亘乇_賳賵賮賲亘乇_丿賷爻賲亘乇".split("_"),
            weekdays: "丕賱兀丨丿_丕賱廿孬賳賷賳_丕賱孬賱丕孬丕亍_丕賱兀乇亘毓丕亍_丕賱禺賲賷爻_丕賱噩賲毓丞_丕賱爻亘鬲".split("_"),
            weekdaysShort: "兀丨丿_廿孬賳賷賳_孬賱丕孬丕亍_兀乇亘毓丕亍_禺賲賷爻_噩賲毓丞_爻亘鬲".split("_"),
            weekdaysMin: "丨_賳_孬_乇_禺_噩_爻".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /氐|賲/,
            isPM: function (a) {
                return "賲" === a
            },
            meridiem: function (a, b, c) {
                return a < 12 ? "氐" : "賲"
            },
            calendar: {
                sameDay: "[丕賱賷賵賲 毓賱賶 丕賱爻丕毓丞] LT",
                nextDay: "[睾丿丕 毓賱賶 丕賱爻丕毓丞] LT",
                nextWeek: "dddd [毓賱賶 丕賱爻丕毓丞] LT",
                lastDay: "[兀賲爻 毓賱賶 丕賱爻丕毓丞] LT",
                lastWeek: "dddd [毓賱賶 丕賱爻丕毓丞] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "賮賷 %s",
                past: "賲賳匕 %s",
                s: "孬賵丕賳",
                m: "丿賯賷賯丞",
                mm: "%d 丿賯丕卅賯",
                h: "爻丕毓丞",
                hh: "%d 爻丕毓丕鬲",
                d: "賷賵賲",
                dd: "%d 兀賷丕賲",
                M: "卮賴乇",
                MM: "%d 兀卮賴乇",
                y: "爻賳丞",
                yy: "%d 爻賳賵丕鬲"
            },
            preparse: function (a) {
                return a.replace(/[佟佗伲伽佶佴侑侉侃贍]/g, function (a) {
                    return Dg[a]
                }).replace(/貙/g, ",")
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return Cg[a]
                }).replace(/,/g, "貙")
            },
            week: {
                dow: 0,
                doy: 6
            }
        }),
        //! moment.js locale configuration
        //! locale  :  Arabic (Tunisia) [ar-tn]
        //! author : Nader Toukabri : https://github.com/naderio
        a.defineLocale("ar-tn", {
            months: "噩丕賳賮賷_賮賷賮乇賷_賲丕乇爻_兀賮乇賷賱_賲丕賷_噩賵丕賳_噩賵賷賱賷丞_兀賵鬲_爻亘鬲賲亘乇_兀賰鬲賵亘乇_賳賵賮賲亘乇_丿賷爻賲亘乇".split("_"),
            monthsShort: "噩丕賳賮賷_賮賷賮乇賷_賲丕乇爻_兀賮乇賷賱_賲丕賷_噩賵丕賳_噩賵賷賱賷丞_兀賵鬲_爻亘鬲賲亘乇_兀賰鬲賵亘乇_賳賵賮賲亘乇_丿賷爻賲亘乇".split("_"),
            weekdays: "丕賱兀丨丿_丕賱廿孬賳賷賳_丕賱孬賱丕孬丕亍_丕賱兀乇亘毓丕亍_丕賱禺賲賷爻_丕賱噩賲毓丞_丕賱爻亘鬲".split("_"),
            weekdaysShort: "兀丨丿_廿孬賳賷賳_孬賱丕孬丕亍_兀乇亘毓丕亍_禺賲賷爻_噩賲毓丞_爻亘鬲".split("_"),
            weekdaysMin: "丨_賳_孬_乇_禺_噩_爻".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[丕賱賷賵賲 毓賱賶 丕賱爻丕毓丞] LT",
                nextDay: "[睾丿丕 毓賱賶 丕賱爻丕毓丞] LT",
                nextWeek: "dddd [毓賱賶 丕賱爻丕毓丞] LT",
                lastDay: "[兀賲爻 毓賱賶 丕賱爻丕毓丞] LT",
                lastWeek: "dddd [毓賱賶 丕賱爻丕毓丞] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "賮賷 %s",
                past: "賲賳匕 %s",
                s: "孬賵丕賳",
                m: "丿賯賷賯丞",
                mm: "%d 丿賯丕卅賯",
                h: "爻丕毓丞",
                hh: "%d 爻丕毓丕鬲",
                d: "賷賵賲",
                dd: "%d 兀賷丕賲",
                M: "卮賴乇",
                MM: "%d 兀卮賴乇",
                y: "爻賳丞",
                yy: "%d 爻賳賵丕鬲"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    //! moment.js locale configuration
    //! locale : Arabic [ar]
    //! author : Abdel Said: https://github.com/abdelsaid
    //! author : Ahmed Elkhatib
    //! author : forabi https://github.com/forabi
    var Eg = {
            1: "佟",
            2: "佗",
            3: "伲",
            4: "伽",
            5: "佶",
            6: "佴",
            7: "侑",
            8: "侉",
            9: "侃",
            0: "贍"
        },
        Fg = {
            "佟": "1",
            "佗": "2",
            "伲": "3",
            "伽": "4",
            "佶": "5",
            "佴": "6",
            "侑": "7",
            "侉": "8",
            "侃": "9",
            "贍": "0"
        },
        Gg = function (a) {
            return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5
        },
        Hg = {
            s: ["兀賯賱 賲賳 孬丕賳賷丞", "孬丕賳賷丞 賵丕丨丿丞", ["孬丕賳賷鬲丕賳", "孬丕賳賷鬲賷賳"], "%d 孬賵丕賳", "%d 孬丕賳賷丞", "%d 孬丕賳賷丞"],
            m: ["兀賯賱 賲賳 丿賯賷賯丞", "丿賯賷賯丞 賵丕丨丿丞", ["丿賯賷賯鬲丕賳", "丿賯賷賯鬲賷賳"], "%d 丿賯丕卅賯", "%d 丿賯賷賯丞", "%d 丿賯賷賯丞"],
            h: ["兀賯賱 賲賳 爻丕毓丞", "爻丕毓丞 賵丕丨丿丞", ["爻丕毓鬲丕賳", "爻丕毓鬲賷賳"], "%d 爻丕毓丕鬲", "%d 爻丕毓丞", "%d 爻丕毓丞"],
            d: ["兀賯賱 賲賳 賷賵賲", "賷賵賲 賵丕丨丿", ["賷賵賲丕賳", "賷賵賲賷賳"], "%d 兀賷丕賲", "%d 賷賵賲賸丕", "%d 賷賵賲"],
            M: ["兀賯賱 賲賳 卮賴乇", "卮賴乇 賵丕丨丿", ["卮賴乇丕賳", "卮賴乇賷賳"], "%d 兀卮賴乇", "%d 卮賴乇丕", "%d 卮賴乇"],
            y: ["兀賯賱 賲賳 毓丕賲", "毓丕賲 賵丕丨丿", ["毓丕賲丕賳", "毓丕賲賷賳"], "%d 兀毓賵丕賲", "%d 毓丕賲賸丕", "%d 毓丕賲"]
        },
        Ig = function (a) {
            return function (b, c, d, e) {
                var f = Gg(b),
                    g = Hg[a][Gg(b)];
                return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b)
            }
        },
        Jg = ["賰丕賳賵賳 丕賱孬丕賳賷 賷賳丕賷乇", "卮亘丕胤 賮亘乇丕賷乇", "丌匕丕乇 賲丕乇爻", "賳賷爻丕賳 兀亘乇賷賱", "兀賷丕乇 賲丕賷賵", "丨夭賷乇丕賳 賷賵賳賷賵", "鬲賲賵夭 賷賵賱賷賵", "丌亘 兀睾爻胤爻", "兀賷賱賵賱 爻亘鬲賲亘乇", "鬲卮乇賷賳 丕賱兀賵賱 兀賰鬲賵亘乇", "鬲卮乇賷賳 丕賱孬丕賳賷 賳賵賮賲亘乇", "賰丕賳賵賳 丕賱兀賵賱 丿賷爻賲亘乇"];
    a.defineLocale("ar", {
        months: Jg,
        monthsShort: Jg,
        weekdays: "丕賱兀丨丿_丕賱廿孬賳賷賳_丕賱孬賱丕孬丕亍_丕賱兀乇亘毓丕亍_丕賱禺賲賷爻_丕賱噩賲毓丞_丕賱爻亘鬲".split("_"),
        weekdaysShort: "兀丨丿_廿孬賳賷賳_孬賱丕孬丕亍_兀乇亘毓丕亍_禺賲賷爻_噩賲毓丞_爻亘鬲".split("_"),
        weekdaysMin: "丨_賳_孬_乇_禺_噩_爻".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/鈥廙/鈥廦YYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /氐|賲/,
        isPM: function (a) {
            return "賲" === a
        },
        meridiem: function (a, b, c) {
            return a < 12 ? "氐" : "賲"
        },
        calendar: {
            sameDay: "[丕賱賷賵賲 毓賳丿 丕賱爻丕毓丞] LT",
            nextDay: "[睾丿賸丕 毓賳丿 丕賱爻丕毓丞] LT",
            nextWeek: "dddd [毓賳丿 丕賱爻丕毓丞] LT",
            lastDay: "[兀賲爻 毓賳丿 丕賱爻丕毓丞] LT",
            lastWeek: "dddd [毓賳丿 丕賱爻丕毓丞] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "亘毓丿 %s",
            past: "賲賳匕 %s",
            s: Ig("s"),
            m: Ig("m"),
            mm: Ig("m"),
            h: Ig("h"),
            hh: Ig("h"),
            d: Ig("d"),
            dd: Ig("d"),
            M: Ig("M"),
            MM: Ig("M"),
            y: Ig("y"),
            yy: Ig("y")
        },
        preparse: function (a) {
            return a.replace(/\u200f/g, "").replace(/[佟佗伲伽佶佴侑侉侃贍]/g, function (a) {
                return Fg[a]
            }).replace(/貙/g, ",")
        },
        postformat: function (a) {
            return a.replace(/\d/g, function (a) {
                return Eg[a]
            }).replace(/,/g, "貙")
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    //! moment.js locale configuration
    //! locale : Azerbaijani [az]
    //! author : topchiyev : https://github.com/topchiyev
    var Kg = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-眉nc眉",
        4: "-眉nc眉",
        100: "-眉nc眉",
        6: "-nc谋",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-谋nc谋",
        90: "-谋nc谋"
    };
    a.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ert蓹si_脟蓹r艧蓹nb蓹 ax艧am谋_脟蓹r艧蓹nb蓹_C眉m蓹 ax艧am谋_C眉m蓹_艦蓹nb蓹".split("_"),
            weekdaysShort: "Baz_BzE_脟Ax_脟蓹r_CAx_C眉m_艦蓹n".split("_"),
            weekdaysMin: "Bz_BE_脟A_脟蓹_CA_C眉_艦蓹".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bug眉n saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[g蓹l蓹n h蓹ft蓹] dddd [saat] LT",
                lastDay: "[d眉n蓹n] LT",
                lastWeek: "[ke莽蓹n h蓹ft蓹] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s 蓹vv蓹l",
                s: "birne莽蓹 saniyy蓹",
                m: "bir d蓹qiq蓹",
                mm: "%d d蓹qiq蓹",
                h: "bir saat",
                hh: "%d saat",
                d: "bir g眉n",
                dd: "%d g眉n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gec蓹|s蓹h蓹r|g眉nd眉z|ax艧am/,
            isPM: function (a) {
                return /^(g眉nd眉z|ax艧am)$/.test(a)
            },
            meridiem: function (a, b, c) {
                return a < 4 ? "gec蓹" : a < 12 ? "s蓹h蓹r" : a < 17 ? "g眉nd眉z" : "ax艧am"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(谋nc谋|inci|nci|眉nc眉|nc谋|uncu)/,
            ordinal: function (a) {
                if (0 === a) return a + "-谋nc谋";
                var b = a % 10,
                    c = a % 100 - b,
                    d = a >= 100 ? 100 : null;
                return a + (Kg[b] || Kg[c] || Kg[d])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), a.defineLocale("be", {
            months: {
                format: "褋褌褍写蟹械薪褟_谢褞褌邪谐邪_褋邪泻邪胁褨泻邪_泻褉邪褋邪胁褨泻邪_褌褉邪褳薪褟_褔褝褉胁械薪褟_谢褨锌械薪褟_卸薪褨褳薪褟_胁械褉邪褋薪褟_泻邪褋褌褉褘褔薪褨泻邪_谢褨褋褌邪锌邪写邪_褋薪械卸薪褟".split("_"),
                standalone: "褋褌褍写蟹械薪褜_谢褞褌褘_褋邪泻邪胁褨泻_泻褉邪褋邪胁褨泻_褌褉邪胁械薪褜_褔褝褉胁械薪褜_谢褨锌械薪褜_卸薪褨胁械薪褜_胁械褉邪褋械薪褜_泻邪褋褌褉褘褔薪褨泻_谢褨褋褌邪锌邪写_褋薪械卸邪薪褜".split("_")
            },
            monthsShort: "褋褌褍写_谢褞褌_褋邪泻_泻褉邪褋_褌褉邪胁_褔褝褉胁_谢褨锌_卸薪褨胁_胁械褉_泻邪褋褌_谢褨褋褌_褋薪械卸".split("_"),
            weekdays: {
                format: "薪褟写蟹械谢褞_锌邪薪褟写蟹械谢邪泻_邪褳褌芯褉邪泻_褋械褉邪写褍_褔邪褑胁械褉_锌褟褌薪褨褑褍_褋褍斜芯褌褍".split("_"),
                standalone: "薪褟写蟹械谢褟_锌邪薪褟写蟹械谢邪泻_邪褳褌芯褉邪泻_褋械褉邪写邪_褔邪褑胁械褉_锌褟褌薪褨褑邪_褋褍斜芯褌邪".split("_"),
                isFormat: /\[ ?[袙胁] ?(?:屑褨薪褍谢褍褞|薪邪褋褌褍锌薪褍褞)? ?\] ?dddd/
            },
            weekdaysShort: "薪写_锌薪_邪褌_褋褉_褔褑_锌褌_褋斜".split("_"),
            weekdaysMin: "薪写_锌薪_邪褌_褋褉_褔褑_锌褌_褋斜".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY 谐.",
                LLL: "D MMMM YYYY 谐., HH:mm",
                LLLL: "dddd, D MMMM YYYY 谐., HH:mm"
            },
            calendar: {
                sameDay: "[小褢薪薪褟 褳] LT",
                nextDay: "[袟邪褳褌褉邪 褳] LT",
                lastDay: "[校褔芯褉邪 褳] LT",
                nextWeek: function () {
                    return "[校] dddd [褳] LT"
                },
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[校 屑褨薪褍谢褍褞] dddd [褳] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[校 屑褨薪褍谢褘] dddd [褳] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "锌褉邪蟹 %s",
                past: "%s 褌邪屑褍",
                s: "薪械泻邪谢褜泻褨 褋械泻褍薪写",
                m: td,
                mm: td,
                h: td,
                hh: td,
                d: "写蟹械薪褜",
                dd: td,
                M: "屑械褋褟褑",
                MM: td,
                y: "谐芯写",
                yy: td
            },
            meridiemParse: /薪芯褔褘|褉邪薪褨褑褘|写薪褟|胁械褔邪褉邪/,
            isPM: function (a) {
                return /^(写薪褟|胁械褔邪褉邪)$/.test(a)
            },
            meridiem: function (a, b, c) {
                return a < 4 ? "薪芯褔褘" : a < 12 ? "褉邪薪褨褑褘" : a < 17 ? "写薪褟" : "胁械褔邪褉邪"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(褨|褘|谐邪)/,
            ordinal: function (a, b) {
                switch (b) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return a % 10 !== 2 && a % 10 !== 3 || a % 100 === 12 || a % 100 === 13 ? a + "-褘" : a + "-褨";
                    case "D":
                        return a + "-谐邪";
                    default:
                        return a
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : Bulgarian [bg]
        //! author : Krasen Borisov : https://github.com/kraz
        a.defineLocale("bg", {
            months: "褟薪褍邪褉懈_褎械胁褉褍邪褉懈_屑邪褉褌_邪锌褉懈谢_屑邪泄_褞薪懈_褞谢懈_邪胁谐褍褋褌_褋械锌褌械屑胁褉懈_芯泻褌芯屑胁褉懈_薪芯械屑胁褉懈_写械泻械屑胁褉懈".split("_"),
            monthsShort: "褟薪褉_褎械胁_屑邪褉_邪锌褉_屑邪泄_褞薪懈_褞谢懈_邪胁谐_褋械锌_芯泻褌_薪芯械_写械泻".split("_"),
            weekdays: "薪械写械谢褟_锌芯薪械写械谢薪懈泻_胁褌芯褉薪懈泻_褋褉褟写邪_褔械褌胁褗褉褌褗泻_锌械褌褗泻_褋褗斜芯褌邪".split("_"),
            weekdaysShort: "薪械写_锌芯薪_胁褌芯_褋褉褟_褔械褌_锌械褌_褋褗斜".split("_"),
            weekdaysMin: "薪写_锌薪_胁褌_褋褉_褔褌_锌褌_褋斜".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[袛薪械褋 胁] LT",
                nextDay: "[校褌褉械 胁] LT",
                nextWeek: "dddd [胁] LT",
                lastDay: "[袙褔械褉邪 胁] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[袙 懈蟹屑懈薪邪谢邪褌邪] dddd [胁] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[袙 懈蟹屑懈薪邪谢懈褟] dddd [胁] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "褋谢械写 %s",
                past: "锌褉械写懈 %s",
                s: "薪褟泻芯谢泻芯 褋械泻褍薪写懈",
                m: "屑懈薪褍褌邪",
                mm: "%d 屑懈薪褍褌懈",
                h: "褔邪褋",
                hh: "%d 褔邪褋邪",
                d: "写械薪",
                dd: "%d 写薪懈",
                M: "屑械褋械褑",
                MM: "%d 屑械褋械褑邪",
                y: "谐芯写懈薪邪",
                yy: "%d 谐芯写懈薪懈"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(械胁|械薪|褌懈|胁懈|褉懈|屑懈)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = a % 100;
                return 0 === a ? a + "-械胁" : 0 === c ? a + "-械薪" : c > 10 && c < 20 ? a + "-褌懈" : 1 === b ? a + "-胁懈" : 2 === b ? a + "-褉懈" : 7 === b || 8 === b ? a + "-屑懈" : a + "-褌懈"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    //! moment.js locale configuration
    //! locale : Bengali [bn]
    //! author : Kaushik Gandhi : https://github.com/kaushikgandhi
    var Lg = {
            1: "唰�",
            2: "唰�",
            3: "唰�",
            4: "唰�",
            5: "唰�",
            6: "唰�",
            7: "唰�",
            8: "唰�",
            9: "唰�",
            0: "唰�"
        },
        Mg = {
            "唰�": "1",
            "唰�": "2",
            "唰�": "3",
            "唰�": "4",
            "唰�": "5",
            "唰�": "6",
            "唰�": "7",
            "唰�": "8",
            "唰�": "9",
            "唰�": "0"
        };
    a.defineLocale("bn", {
        months: "唳溹唳ㄠ唰熰唳班_唳唳唳班唰熰唳班_唳唳班唳歘唳忇Κ唰嵿Π唳苦Σ_唳_唳溹唳╛唳溹唳侧唳嘷唳嗋唳膏唳焈唳膏唳唳熰唳唳Π_唳呧唰嵿唰嬥Μ唳癬唳ㄠΝ唰囙Ξ唰嵿Μ唳癬唳∴唳膏唳唳Π".split("_"),
        monthsShort: "唳溹唳ㄠ_唳唳琠唳唳班唳歘唳忇Κ唰嵿Π_唳_唳溹唳╛唳溹唳瞋唳嗋_唳膏唳唳焈唳呧唰嵿唰媉唳ㄠΝ唰嘷唳∴唳膏".split("_"),
        weekdays: "唳班Μ唳苦Μ唳距Π_唳膏唳Μ唳距Π_唳唰嵿唳侧Μ唳距Π_唳唳оΜ唳距Π_唳唳灌Ω唰嵿Κ唳む唳唳癬唳多唳曕唳班Μ唳距Π_唳多Θ唳苦Μ唳距Π".split("_"),
        weekdaysShort: "唳班Μ唳縚唳膏唳甠唳唰嵿唳瞋唳唳唳唳灌Ω唰嵿Κ唳む_唳多唳曕唳癬唳多Θ唳�".split("_"),
        weekdaysMin: "唳班Μ唳縚唳膏唳甠唳唰嵿_唳唳唳唳灌_唳多唳曕唳癬唳多Θ唳�".split("_"),
        longDateFormat: {
            LT: "A h:mm 唳膏Ξ唰�",
            LTS: "A h:mm:ss 唳膏Ξ唰�",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm 唳膏Ξ唰�",
            LLLL: "dddd, D MMMM YYYY, A h:mm 唳膏Ξ唰�"
        },
        calendar: {
            sameDay: "[唳嗋] LT",
            nextDay: "[唳嗋唳距Ξ唰€唳曕唳瞉 LT",
            nextWeek: "dddd, LT",
            lastDay: "[唳椸Δ唳曕唳瞉 LT",
            lastWeek: "[唳椸Δ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s 唳Π唰�",
            past: "%s 唳嗋唰�",
            s: "唳曕唰囙 唳膏唳曕唳ㄠ唳�",
            m: "唳忇 唳唳ㄠ唳�",
            mm: "%d 唳唳ㄠ唳�",
            h: "唳忇 唳樴Θ唰嵿唳�",
            hh: "%d 唳樴Θ唰嵿唳�",
            d: "唳忇 唳︵唳�",
            dd: "%d 唳︵唳�",
            M: "唳忇 唳唳�",
            MM: "%d 唳唳�",
            y: "唳忇 唳唳�",
            yy: "%d 唳唳�"
        },
        preparse: function (a) {
            return a.replace(/[唰оЖ唰┼И唰К唰М唰Е]/g, function (a) {
                return Mg[a]
            })
        },
        postformat: function (a) {
            return a.replace(/\d/g, function (a) {
                return Lg[a]
            })
        },
        meridiemParse: /唳班唳唳膏唳距Σ|唳︵唳唳皘唳唳曕唳瞸唳班唳�/,
        meridiemHour: function (a, b) {
            return 12 === a && (a = 0), "唳班唳�" === b && a >= 4 || "唳︵唳唳�" === b && a < 5 || "唳唳曕唳�" === b ? a + 12 : a
        },
        meridiem: function (a, b, c) {
            return a < 4 ? "唳班唳�" : a < 10 ? "唳膏唳距Σ" : a < 17 ? "唳︵唳唳�" : a < 20 ? "唳唳曕唳�" : "唳班唳�"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    //! moment.js locale configuration
    //! locale : Tibetan [bo]
    //! author : Thupten N. Chakrishar : https://github.com/vajradog
    var Ng = {
            1: "嗉�",
            2: "嗉�",
            3: "嗉�",
            4: "嗉�",
            5: "嗉�",
            6: "嗉�",
            7: "嗉�",
            8: "嗉�",
            9: "嗉�",
            0: "嗉�"
        },
        Og = {
            "嗉�": "1",
            "嗉�": "2",
            "嗉�": "3",
            "嗉�": "4",
            "嗉�": "5",
            "嗉�": "6",
            "嗉�": "7",
            "嗉�": "8",
            "嗉�": "9",
            "嗉�": "0"
        };
    a.defineLocale("bo", {
            months: "嘟熰境嗉嬥綎嗉嬥綉嘟勦紜嘟斷郊_嘟熰境嗉嬥綎嗉嬥絺嘟夃讲嘟︵紜嘟擾嘟熰境嗉嬥綎嗉嬥絺嘟︵酱嘟樴紜嘟擾嘟熰境嗉嬥綎嗉嬥綎嘟炧讲嗉嬥綌_嘟熰境嗉嬥綎嗉嬥剑嗑斷紜嘟擾嘟熰境嗉嬥綎嗉嬥綉嗑侧酱嘟傕紜嘟擾嘟熰境嗉嬥綎嗉嬥綎嘟戉酱嘟撪紜嘟擾嘟熰境嗉嬥綎嗉嬥綎嘟⑧緬嗑编綉嗉嬥綌_嘟熰境嗉嬥綎嗉嬥綉嘟傕酱嗉嬥綌_嘟熰境嗉嬥綎嗉嬥綎嘟呧酱嗉嬥綌_嘟熰境嗉嬥綎嗉嬥綎嘟呧酱嗉嬥絺嘟呧讲嘟傕紜嘟擾嘟熰境嗉嬥綎嗉嬥綎嘟呧酱嗉嬥絺嘟夃讲嘟︵紜嘟�".split("_"),
            monthsShort: "嘟熰境嗉嬥綎嗉嬥綉嘟勦紜嘟斷郊_嘟熰境嗉嬥綎嗉嬥絺嘟夃讲嘟︵紜嘟擾嘟熰境嗉嬥綎嗉嬥絺嘟︵酱嘟樴紜嘟擾嘟熰境嗉嬥綎嗉嬥綎嘟炧讲嗉嬥綌_嘟熰境嗉嬥綎嗉嬥剑嗑斷紜嘟擾嘟熰境嗉嬥綎嗉嬥綉嗑侧酱嘟傕紜嘟擾嘟熰境嗉嬥綎嗉嬥綎嘟戉酱嘟撪紜嘟擾嘟熰境嗉嬥綎嗉嬥綎嘟⑧緬嗑编綉嗉嬥綌_嘟熰境嗉嬥綎嗉嬥綉嘟傕酱嗉嬥綌_嘟熰境嗉嬥綎嗉嬥綎嘟呧酱嗉嬥綌_嘟熰境嗉嬥綎嗉嬥綎嘟呧酱嗉嬥絺嘟呧讲嘟傕紜嘟擾嘟熰境嗉嬥綎嗉嬥綎嘟呧酱嗉嬥絺嘟夃讲嘟︵紜嘟�".split("_"),
            weekdays: "嘟傕綗嘟犩紜嘟夃讲嗉嬥綐嗉媉嘟傕綗嘟犩紜嘟熰境嗉嬥綎嗉媉嘟傕綗嘟犩紜嘟樴讲嘟傕紜嘟戉綐嘟⑧紜_嘟傕綗嘟犩紜嘟｀痉嘟傕紜嘟斷紜_嘟傕綗嘟犩紜嘟曕酱嘟⑧紜嘟栢酱_嘟傕綗嘟犩紜嘟斷紜嘟︵絼嘟︵紜_嘟傕綗嘟犩紜嘟︵兢嘟亨綋嗉嬥綌嗉�".split("_"),
            weekdaysShort: "嘟夃讲嗉嬥綐嗉媉嘟熰境嗉嬥綎嗉媉嘟樴讲嘟傕紜嘟戉綐嘟⑧紜_嘟｀痉嘟傕紜嘟斷紜_嘟曕酱嘟⑧紜嘟栢酱_嘟斷紜嘟︵絼嘟︵紜_嘟︵兢嘟亨綋嗉嬥綌嗉�".split("_"),
            weekdaysMin: "嘟夃讲嗉嬥綐嗉媉嘟熰境嗉嬥綎嗉媉嘟樴讲嘟傕紜嘟戉綐嘟⑧紜_嘟｀痉嘟傕紜嘟斷紜_嘟曕酱嘟⑧紜嘟栢酱_嘟斷紜嘟︵絼嘟︵紜_嘟︵兢嘟亨綋嗉嬥綌嗉�".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[嘟戉讲嗉嬥舰嘟侧絼] LT",
                nextDay: "[嘟︵絼嗉嬥綁嘟侧綋] LT",
                nextWeek: "[嘟栢綉嘟脆綋嗉嬥綍嗑侧絺嗉嬥舰嗑椸胶嘟︵紜嘟榏, LT",
                lastDay: "[嘟佮紜嘟︵絼] LT",
                lastWeek: "[嘟栢綉嘟脆綋嗉嬥綍嗑侧絺嗉嬥綐嘟愢綘嗉嬥綐] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 嘟｀紜",
                past: "%s 嘟︵緮嘟撪紜嘟�",
                s: "嘟｀綐嗉嬥溅嘟�",
                m: "嘟︵緪嘟⑧紜嘟樴紜嘟傕絽嘟侧絺",
                mm: "%d 嘟︵緪嘟⑧紜嘟�",
                h: "嘟嗋酱嗉嬥綒嘟监綉嗉嬥絺嘟呧讲嘟�",
                hh: "%d 嘟嗋酱嗉嬥綒嘟监綉",
                d: "嘟夃讲嘟撪紜嘟傕絽嘟侧絺",
                dd: "%d 嘟夃讲嘟撪紜",
                M: "嘟熰境嗉嬥綎嗉嬥絺嘟呧讲嘟�",
                MM: "%d 嘟熰境嗉嬥綎",
                y: "嘟｀郊嗉嬥絺嘟呧讲嘟�",
                yy: "%d 嘟｀郊"
            },
            preparse: function (a) {
                return a.replace(/[嗉∴饥嗉｀激嗉ム鸡嗉о绩嗉┼紶]/g, function (a) {
                    return Og[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return Ng[a]
                })
            },
            meridiemParse: /嘟樴綒嘟撪紜嘟樴郊|嘟炧郊嘟傕溅嗉嬥絸嘟嘟夃讲嘟撪紜嘟傕酱嘟剕嘟戉絺嘟监絼嗉嬥綉嘟倈嘟樴綒嘟撪紜嘟樴郊/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "嘟樴綒嘟撪紜嘟樴郊" === b && a >= 4 || "嘟夃讲嘟撪紜嘟傕酱嘟�" === b && a < 5 || "嘟戉絺嘟监絼嗉嬥綉嘟�" === b ? a + 12 : a
            },
            meridiem: function (a, b, c) {
                return a < 4 ? "嘟樴綒嘟撪紜嘟樴郊" : a < 10 ? "嘟炧郊嘟傕溅嗉嬥絸嘟�" : a < 17 ? "嘟夃讲嘟撪紜嘟傕酱嘟�" : a < 20 ? "嘟戉絺嘟监絼嗉嬥綉嘟�" : "嘟樴綒嘟撪紜嘟樴郊"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), a.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondenno霉",
                m: "ur vunutenn",
                mm: ud,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: ud,
                M: "ur miz",
                MM: ud,
                y: "ur bloaz",
                yy: vd
            },
            dayOfMonthOrdinalParse: /\d{1,2}(a帽|vet)/,
            ordinal: function (a) {
                var b = 1 === a ? "a帽" : "vet";
                return a + b
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), a.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_膷etvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._膷et._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_膷e_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[ju膷er u] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[pro拧lu] dddd [u] LT";
                        case 6:
                            return "[pro拧le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[pro拧li] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: zd,
                mm: zd,
                h: zd,
                hh: zd,
                d: "dan",
                dd: zd,
                M: "mjesec",
                MM: zd,
                y: "godinu",
                yy: zd
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : Catalan [ca]
        //! author : Juan G. Hurtado : https://github.com/juanghurtado
        a.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_mar莽_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de mar莽_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._mar莽_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "[el] D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "[el] D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "[el] dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function () {
                    return "[dem脿 a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function () {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aqu铆 %s",
                past: "fa %s",
                s: "uns segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|猫|a)/,
            ordinal: function (a, b) {
                var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "猫";
                return "w" !== b && "W" !== b || (c = "a"), a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    //! moment.js locale configuration
    //! locale : Czech [cs]
    //! author : petrbela : https://github.com/petrbela
    var Pg = "leden_煤nor_b艡ezen_duben_kv臎ten_膷erven_膷ervenec_srpen_z谩艡铆_艡铆jen_listopad_prosinec".split("_"),
        Qg = "led_煤no_b艡e_dub_kv臎_膷vn_膷vc_srp_z谩艡_艡铆j_lis_pro".split("_");
    a.defineLocale("cs", {
            months: Pg,
            monthsShort: Qg,
            monthsParse: function (a, b) {
                var c, d = [];
                for (c = 0; c < 12; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
                return d
            }(Pg, Qg),
            shortMonthsParse: function (a) {
                var b, c = [];
                for (b = 0; b < 12; b++) c[b] = new RegExp("^" + a[b] + "$", "i");
                return c
            }(Qg),
            longMonthsParse: function (a) {
                var b, c = [];
                for (b = 0; b < 12; b++) c[b] = new RegExp("^" + a[b] + "$", "i");
                return c
            }(Pg),
            weekdays: "ned臎le_pond臎l铆_煤ter媒_st艡eda_膷tvrtek_p谩tek_sobota".split("_"),
            weekdaysShort: "ne_po_煤t_st_膷t_p谩_so".split("_"),
            weekdaysMin: "ne_po_煤t_st_膷t_p谩_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[z铆tra v] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v ned臎li v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve st艡edu v] LT";
                        case 4:
                            return "[ve 膷tvrtek v] LT";
                        case 5:
                            return "[v p谩tek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[v膷era v] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou ned臎li v] LT";
                        case 1:
                        case 2:
                            return "[minul茅] dddd [v] LT";
                        case 3:
                            return "[minulou st艡edu v] LT";
                        case 4:
                        case 5:
                            return "[minul媒] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "p艡ed %s",
                s: Bd,
                m: Bd,
                mm: Bd,
                h: Bd,
                hh: Bd,
                d: Bd,
                dd: Bd,
                M: Bd,
                MM: Bd,
                y: Bd,
                yy: Bd
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Chuvash [cv]
        //! author : Anatoly Mironov : https://github.com/mirontoli
        a.defineLocale("cv", {
            months: "泻討褉谢邪褔_薪邪褉討褋_锌褍褕_邪泻邪_屑邪泄_耀訔褉褌屑械_褍褌討_耀褍褉谢邪_邪胁討薪_褞锌邪_褔映泻_褉邪褕褌邪胁".split("_"),
            monthsShort: "泻討褉_薪邪褉_锌褍褕_邪泻邪_屑邪泄_耀訔褉_褍褌討_耀褍褉_邪胁薪_褞锌邪_褔映泻_褉邪褕".split("_"),
            weekdays: "胁褘褉褋邪褉薪懈泻褍薪_褌褍薪褌懈泻褍薪_褘褌谢邪褉懈泻褍薪_褞薪泻褍薪_泻訔耀薪械褉薪懈泻褍薪_褝褉薪械泻褍薪_褕討屑邪褌泻褍薪".split("_"),
            weekdaysShort: "胁褘褉_褌褍薪_褘褌谢_褞薪_泻訔耀_褝褉薪_褕討屑".split("_"),
            weekdaysMin: "胁褉_褌薪_褘褌_褞薪_泻耀_褝褉_褕屑".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [耀褍谢褏懈] MMMM [褍泄討褏訔薪] D[-屑訔褕訔]",
                LLL: "YYYY [耀褍谢褏懈] MMMM [褍泄討褏訔薪] D[-屑訔褕訔], HH:mm",
                LLLL: "dddd, YYYY [耀褍谢褏懈] MMMM [褍泄討褏訔薪] D[-屑訔褕訔], HH:mm"
            },
            calendar: {
                sameDay: "[袩邪褟薪] LT [褋械褏械褌褉械]",
                nextDay: "[蝎褉邪薪] LT [褋械褏械褌褉械]",
                lastDay: "[訓薪械褉] LT [褋械褏械褌褉械]",
                nextWeek: "[要懈褌械褋] dddd LT [褋械褏械褌褉械]",
                lastWeek: "[袠褉褌薪訔] dddd LT [褋械褏械褌褉械]",
                sameElse: "L"
            },
            relativeTime: {
                future: function (a) {
                    var b = /褋械褏械褌$/i.exec(a) ? "褉械薪" : /耀褍谢$/i.exec(a) ? "褌邪薪" : "褉邪薪";
                    return a + b
                },
                past: "%s 泻邪褟谢谢邪",
                s: "锌訔褉-懈泻 耀械泻泻褍薪褌",
                m: "锌訔褉 屑懈薪褍褌",
                mm: "%d 屑懈薪褍褌",
                h: "锌訔褉 褋械褏械褌",
                hh: "%d 褋械褏械褌",
                d: "锌訔褉 泻褍薪",
                dd: "%d 泻褍薪",
                M: "锌訔褉 褍泄討褏",
                MM: "%d 褍泄討褏",
                y: "锌訔褉 耀褍谢",
                yy: "%d 耀褍谢"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-屑訔褕/,
            ordinal: "%d-屑訔褕",
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : Welsh [cy]
        //! author : Robert Allen : https://github.com/robgallen
        //! author : https://github.com/ryangreaves
        a.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn 么l",
                s: "ychydig eiliadau",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (a) {
                var b = a,
                    c = "",
                    d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Danish [da]
        //! author : Ulrik Nielsen : https://github.com/mrbase
        a.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "s酶ndag_mandag_tirsdag_onsdag_torsdag_fredag_l酶rdag".split("_"),
            weekdaysShort: "s酶n_man_tir_ons_tor_fre_l酶r".split("_"),
            weekdaysMin: "s酶_ma_ti_on_to_fr_l酶".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "p氓 dddd [kl.] LT",
                lastDay: "[i g氓r kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "f氓 sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en m氓ned",
                MM: "%d m氓neder",
                y: "et 氓r",
                yy: "%d 氓r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), a.defineLocale("de-at", {
            months: "J盲nner_Februar_M盲rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "J盲n._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: Cd,
                mm: "%d Minuten",
                h: Cd,
                hh: "%d Stunden",
                d: Cd,
                dd: Cd,
                M: Cd,
                MM: Cd,
                y: Cd,
                yy: Cd
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), a.defineLocale("de-ch", {
            months: "Januar_Februar_M盲rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._M盲rz_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH.mm",
                LLLL: "dddd, D. MMMM YYYY HH.mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: Dd,
                mm: "%d Minuten",
                h: Dd,
                hh: "%d Stunden",
                d: Dd,
                dd: Dd,
                M: Dd,
                MM: Dd,
                y: Dd,
                yy: Dd
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), a.defineLocale("de", {
            months: "Januar_Februar_M盲rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: Ed,
                mm: "%d Minuten",
                h: Ed,
                hh: "%d Stunden",
                d: Ed,
                dd: Ed,
                M: Ed,
                MM: Ed,
                y: Ed,
                yy: Ed
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    //! moment.js locale configuration
    //! locale : Maldivian [dv]
    //! author : Jawish Hameed : https://github.com/jawish
    var Rg = ["迻蕃迋蕺迖蕈迌蕞", "迠蕃迍薨迌蕺迖蕈迌蕞", "迚蕨迌蕤迼蕺", "迖蕲迺薨迌蕞迧蕺", "迚蕲", "迻瞢迋薨", "迻蕺迧蕈迖蕤", "迖薤迬蕈迱薨迵蕺", "迱蕃迺薨迵蕃迚薨迍蕈迌蕺", "迖蕻迒薨迵薤迍蕈迌蕺", "迋蕻迗蕃迚薨迍蕈迌蕺", "迲蕤迱蕃迚薨迍蕈迌蕺"],
        Sg = ["迖蕨迡蕤迖薨迣蕈", "迉薤迚蕈", "迖蕈迋薨迬蕨迌蕈", "迍蕺迡蕈", "迍蕺迌蕨迱薨迠蕈迣蕤", "迉蕺迒蕺迌蕺", "迉蕻迋蕤迉蕤迌蕺"];
    a.defineLocale("dv", {
            months: Rg,
            monthsShort: Rg,
            weekdays: Sg,
            weekdaysShort: Sg,
            weekdaysMin: "迖蕨迡蕤_迉薤迚蕈_迖蕈迋薨_迍蕺迡蕈_迍蕺迌蕨_迉蕺迒蕺_迉蕻迋蕤".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /迚迒|迚迠/,
            isPM: function (a) {
                return "迚迠" === a
            },
            meridiem: function (a, b, c) {
                return a < 12 ? "迚迒" : "迚迠"
            },
            calendar: {
                sameDay: "[迚蕤迖蕈迡蕺] LT",
                nextDay: "[迚蕨迡蕈迚蕨] LT",
                nextWeek: "dddd LT",
                lastDay: "[迖蕤迖薨迶蕃] LT",
                lastWeek: "[迠蕨迖蕤迣蕺迗蕤] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "迣蕃迌蕲迬蕈迖蕤 %s",
                past: "迒蕺迌蕤迋薨 %s",
                s: "迱蕤迒蕺迋薨迣蕺迒蕻迏蕃迖薨",
                m: "迚蕤迋蕤迵蕃迖薨",
                mm: "迚蕤迋蕤迵蕺 %d",
                h: "迬蕈迲蕤迖蕤迌蕃迖薨",
                hh: "迬蕈迲蕤迖蕤迌蕺 %d",
                d: "迡蕺迗蕈迉蕃迖薨",
                dd: "迡蕺迗蕈迱薨 %d",
                M: "迚蕈迉蕃迖薨",
                MM: "迚蕈迱薨 %d",
                y: "迖蕈迉蕈迌蕃迖薨",
                yy: "迖蕈迉蕈迌蕺 %d"
            },
            preparse: function (a) {
                return a.replace(/貙/g, ",")
            },
            postformat: function (a) {
                return a.replace(/,/g, "貙")
            },
            week: {
                dow: 7,
                doy: 12
            }
        }),
        //! moment.js locale configuration
        //! locale : Greek [el]
        //! author : Aggelos Karalias : https://github.com/mehiel
        a.defineLocale("el", {
            monthsNominativeEl: "螜伪谓慰蠀维蟻喂慰蟼_桅蔚尾蟻慰蠀维蟻喂慰蟼_螠维蟻蟿喂慰蟼_螒蟺蟻委位喂慰蟼_螠维喂慰蟼_螜慰蠉谓喂慰蟼_螜慰蠉位喂慰蟼_螒蠉纬慰蠀蟽蟿慰蟼_危蔚蟺蟿苇渭尾蟻喂慰蟼_螣魏蟿蠋尾蟻喂慰蟼_螡慰苇渭尾蟻喂慰蟼_螖蔚魏苇渭尾蟻喂慰蟼".split("_"),
            monthsGenitiveEl: "螜伪谓慰蠀伪蟻委慰蠀_桅蔚尾蟻慰蠀伪蟻委慰蠀_螠伪蟻蟿委慰蠀_螒蟺蟻喂位委慰蠀_螠伪螑慰蠀_螜慰蠀谓委慰蠀_螜慰蠀位委慰蠀_螒蠀纬慰蠉蟽蟿慰蠀_危蔚蟺蟿蔚渭尾蟻委慰蠀_螣魏蟿蠅尾蟻委慰蠀_螡慰蔚渭尾蟻委慰蠀_螖蔚魏蔚渭尾蟻委慰蠀".split("_"),
            months: function (a, b) {
                return a ? /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()] : this._monthsNominativeEl
            },
            monthsShort: "螜伪谓_桅蔚尾_螠伪蟻_螒蟺蟻_螠伪蠆_螜慰蠀谓_螜慰蠀位_螒蠀纬_危蔚蟺_螣魏蟿_螡慰蔚_螖蔚魏".split("_"),
            weekdays: "螝蠀蟻喂伪魏萎_螖蔚蠀蟿苇蟻伪_韦蟻委蟿畏_韦蔚蟿维蟻蟿畏_螤苇渭蟺蟿畏_螤伪蟻伪蟽魏蔚蠀萎_危维尾尾伪蟿慰".split("_"),
            weekdaysShort: "螝蠀蟻_螖蔚蠀_韦蟻喂_韦蔚蟿_螤蔚渭_螤伪蟻_危伪尾".split("_"),
            weekdaysMin: "螝蠀_螖蔚_韦蟻_韦蔚_螤蔚_螤伪_危伪".split("_"),
            meridiem: function (a, b, c) {
                return a > 11 ? c ? "渭渭" : "螠螠" : c ? "蟺渭" : "螤螠"
            },
            isPM: function (a) {
                return "渭" === (a + "").toLowerCase()[0]
            },
            meridiemParse: /[螤螠]\.?螠?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[危萎渭蔚蟻伪 {}] LT",
                nextDay: "[螒蠉蟻喂慰 {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[围胃蔚蟼 {}] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 6:
                            return "[蟿慰 蟺蟻慰畏纬慰蠉渭蔚谓慰] dddd [{}] LT";
                        default:
                            return "[蟿畏谓 蟺蟻慰畏纬慰蠉渭蔚谓畏] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function (a, b) {
                var c = this._calendarEl[a],
                    d = b && b.hours();
                return z(c) && (c = c.apply(b)), c.replace("{}", d % 12 === 1 ? "蟽蟿畏" : "蟽蟿喂蟼")
            },
            relativeTime: {
                future: "蟽蔚 %s",
                past: "%s 蟺蟻喂谓",
                s: "位委纬伪 未蔚蠀蟿蔚蟻蠈位蔚蟺蟿伪",
                m: "苇谓伪 位蔚蟺蟿蠈",
                mm: "%d 位蔚蟺蟿维",
                h: "渭委伪 蠋蟻伪",
                hh: "%d 蠋蟻蔚蟼",
                d: "渭委伪 渭苇蟻伪",
                dd: "%d 渭苇蟻蔚蟼",
                M: "苇谓伪蟼 渭萎谓伪蟼",
                MM: "%d 渭萎谓蔚蟼",
                y: "苇谓伪蟼 蠂蟻蠈谓慰蟼",
                yy: "%d 蠂蟻蠈谓喂伪"
            },
            dayOfMonthOrdinalParse: /\d{1,2}畏/,
            ordinal: "%d畏",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : English (Australia) [en-au]
        //! author : Jared Morse : https://github.com/jarcoal
        a.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : English (Canada) [en-ca]
        //! author : Jonathan Abourbih : https://github.com/jonbca
        a.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        }),
        //! moment.js locale configuration
        //! locale : English (United Kingdom) [en-gb]
        //! author : Chris Gedrim : https://github.com/chrisgedrim
        a.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : English (Ireland) [en-ie]
        //! author : Chris Cartlidge : https://github.com/chriscartlidge
        a.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : English (New Zealand) [en-nz]
        //! author : Luke McGregor : https://github.com/lukemcgregor
        a.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Esperanto [eo]
        //! author : Colin Dean : https://github.com/colindean
        //! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
        //! comment : miestasmia corrected the translation by colindean
        a.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_a怒gusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_a怒g_sep_okt_nov_dec".split("_"),
            weekdays: "diman膲o_lundo_mardo_merkredo_牡a怒do_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_牡a怒_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_牡a_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (a) {
                return "p" === a.charAt(0).toLowerCase()
            },
            meridiem: function (a, b, c) {
                return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodia怒 je] LT",
                nextDay: "[Morga怒 je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hiera怒 je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "anta怒 %s",
                s: "sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        });
    //! moment.js locale configuration
    //! locale : Spanish (Dominican Republic) [es-do]
    var Tg = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        Ug = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    a.defineLocale("es-do", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function (a, b) {
            return a ? /-MMM-/.test(b) ? Ug[a.month()] : Tg[a.month()] : Tg
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_mi茅rcoles_jueves_viernes_s谩bado".split("_"),
        weekdaysShort: "dom._lun._mar._mi茅._jue._vie._s谩b.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_s谩".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
            sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function () {
                return "[ma帽ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function () {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d铆a",
            dd: "%d d铆as",
            M: "un mes",
            MM: "%d meses",
            y: "un a帽o",
            yy: "%d a帽os"
        },
        dayOfMonthOrdinalParse: /\d{1,2}潞/,
        ordinal: "%d潞",
        week: {
            dow: 1,
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Spanish [es]
    //! author : Julio Napur铆 : https://github.com/julionc
    var Vg = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        Wg = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    a.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (a, b) {
                return a ? /-MMM-/.test(b) ? Wg[a.month()] : Vg[a.month()] : Vg
            },
            monthsParseExact: !0,
            weekdays: "domingo_lunes_martes_mi茅rcoles_jueves_viernes_s谩bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi茅._jue._vie._s谩b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s谩".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function () {
                    return "[ma帽ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d铆a",
                dd: "%d d铆as",
                M: "un mes",
                MM: "%d meses",
                y: "un a帽o",
                yy: "%d a帽os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}潞/,
            ordinal: "%d潞",
            week: {
                dow: 1,
                doy: 4
            }
        }), a.defineLocale("et", {
            months: "jaanuar_veebruar_m盲rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_m盲rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "p眉hap盲ev_esmasp盲ev_teisip盲ev_kolmap盲ev_neljap盲ev_reede_laup盲ev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[T盲na,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[J盲rgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p盲rast",
                past: "%s tagasi",
                s: Fd,
                m: Fd,
                mm: Fd,
                h: Fd,
                hh: Fd,
                d: Fd,
                dd: "%d p盲eva",
                M: Fd,
                MM: Fd,
                y: Fd,
                yy: Fd
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Basque [eu]
        //! author : Eneko Illarramendi : https://github.com/eillarra
        a.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
    //! moment.js locale configuration
    //! locale : Persian [fa]
    //! author : Ebrahim Byagowi : https://github.com/ebraminio
    var Xg = {
            1: "郾",
            2: "鄄",
            3: "鄢",
            4: "鄞",
            5: "鄣",
            6: "鄱",
            7: "鄯",
            8: "鄹",
            9: "酃",
            0: "郯"
        },
        Yg = {
            "郾": "1",
            "鄄": "2",
            "鄢": "3",
            "鄞": "4",
            "鄣": "5",
            "鄱": "6",
            "鄯": "7",
            "鄹": "8",
            "酃": "9",
            "郯": "0"
        };
    a.defineLocale("fa", {
        months: "跇丕賳賵蹖賴_賮賵乇蹖賴_賲丕乇爻_丌賵乇蹖賱_賲賴_跇賵卅賳_跇賵卅蹖賴_丕賵鬲_爻倬鬲丕賲亘乇_丕讴鬲亘乇_賳賵丕賲亘乇_丿爻丕賲亘乇".split("_"),
        monthsShort: "跇丕賳賵蹖賴_賮賵乇蹖賴_賲丕乇爻_丌賵乇蹖賱_賲賴_跇賵卅賳_跇賵卅蹖賴_丕賵鬲_爻倬鬲丕賲亘乇_丕讴鬲亘乇_賳賵丕賲亘乇_丿爻丕賲亘乇".split("_"),
        weekdays: "蹖讴鈥屫促嗀ㄙ嘷丿賵卮賳亘賴_爻賴鈥屫促嗀ㄙ嘷趩賴丕乇卮賳亘賴_倬賳噩鈥屫促嗀ㄙ嘷噩賲毓賴_卮賳亘賴".split("_"),
        weekdaysShort: "蹖讴鈥屫促嗀ㄙ嘷丿賵卮賳亘賴_爻賴鈥屫促嗀ㄙ嘷趩賴丕乇卮賳亘賴_倬賳噩鈥屫促嗀ㄙ嘷噩賲毓賴_卮賳亘賴".split("_"),
        weekdaysMin: "蹖_丿_爻_趩_倬_噩_卮".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /賯亘賱 丕夭 馗賴乇|亘毓丿 丕夭 馗賴乇/,
        isPM: function (a) {
            return /亘毓丿 丕夭 馗賴乇/.test(a)
        },
        meridiem: function (a, b, c) {
            return a < 12 ? "賯亘賱 丕夭 馗賴乇" : "亘毓丿 丕夭 馗賴乇"
        },
        calendar: {
            sameDay: "[丕賲乇賵夭 爻丕毓鬲] LT",
            nextDay: "[賮乇丿丕 爻丕毓鬲] LT",
            nextWeek: "dddd [爻丕毓鬲] LT",
            lastDay: "[丿蹖乇賵夭 爻丕毓鬲] LT",
            lastWeek: "dddd [倬蹖卮] [爻丕毓鬲] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "丿乇 %s",
            past: "%s 倬蹖卮",
            s: "趩賳丿 孬丕賳蹖賴",
            m: "蹖讴 丿賯蹖賯賴",
            mm: "%d 丿賯蹖賯賴",
            h: "蹖讴 爻丕毓鬲",
            hh: "%d 爻丕毓鬲",
            d: "蹖讴 乇賵夭",
            dd: "%d 乇賵夭",
            M: "蹖讴 賲丕賴",
            MM: "%d 賲丕賴",
            y: "蹖讴 爻丕賱",
            yy: "%d 爻丕賱"
        },
        preparse: function (a) {
            return a.replace(/[郯-酃]/g, function (a) {
                return Yg[a]
            }).replace(/貙/g, ",")
        },
        postformat: function (a) {
            return a.replace(/\d/g, function (a) {
                return Xg[a]
            }).replace(/,/g, "貙")
        },
        dayOfMonthOrdinalParse: /\d{1,2}賲/,
        ordinal: "%d賲",
        week: {
            dow: 6,
            doy: 12
        }
    });
    //! moment.js locale configuration
    //! locale : Finnish [fi]
    //! author : Tarmo Aidantausta : https://github.com/bleadof
    var Zg = "nolla yksi kaksi kolme nelj盲 viisi kuusi seitsem盲n kahdeksan yhdeks盲n".split(" "),
        $g = ["nolla", "yhden", "kahden", "kolmen", "nelj盲n", "viiden", "kuuden", Zg[7], Zg[8], Zg[9]];
    a.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes盲kuu_hein盲kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kes盲_hein盲_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[t盲n盲盲n] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p盲盲st盲",
                past: "%s sitten",
                s: Gd,
                m: Gd,
                mm: Gd,
                h: Gd,
                hh: Gd,
                d: Gd,
                dd: Gd,
                M: Gd,
                MM: Gd,
                y: Gd,
                yy: Gd
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Faroese [fo]
        //! author : Ragnar Johannesen : https://github.com/ragnar123
        a.defineLocale("fo", {
            months: "januar_februar_mars_apr铆l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_m谩nadagur_t媒sdagur_mikudagur_h贸sdagur_fr铆ggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_m谩n_t媒s_mik_h贸s_fr铆_ley".split("_"),
            weekdaysMin: "su_m谩_t媒_mi_h贸_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[脥 dag kl.] LT",
                nextDay: "[脥 morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[脥 gj谩r kl.] LT",
                lastWeek: "[s铆冒stu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s s铆冒ani",
                s: "f谩 sekund",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein t铆mi",
                hh: "%d t铆mar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein m谩na冒i",
                MM: "%d m谩na冒ir",
                y: "eitt 谩r",
                yy: "%d 谩r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : French (Canada) [fr-ca]
        //! author : Jonathan Abourbih : https://github.com/jonbca
        a.defineLocale("fr-ca", {
            months: "janvier_f茅vrier_mars_avril_mai_juin_juillet_ao没t_septembre_octobre_novembre_d茅cembre".split("_"),
            monthsShort: "janv._f茅vr._mars_avr._mai_juin_juil._ao没t_sept._oct._nov._d茅c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd鈥檋ui 脿] LT",
                nextDay: "[Demain 脿] LT",
                nextWeek: "dddd [脿] LT",
                lastDay: "[Hier 脿] LT",
                lastWeek: "dddd [dernier 脿] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (a, b) {
                switch (b) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return a + (1 === a ? "er" : "e");
                    case "w":
                            case "W":
                            return a + (1 === a ? "re" : "e")
                }
            }
        }),
        //! moment.js locale configuration
        //! locale : French (Switzerland) [fr-ch]
        //! author : Gaspard Bucher : https://github.com/gaspard
        a.defineLocale("fr-ch", {
            months: "janvier_f茅vrier_mars_avril_mai_juin_juillet_ao没t_septembre_octobre_novembre_d茅cembre".split("_"),
            monthsShort: "janv._f茅vr._mars_avr._mai_juin_juil._ao没t_sept._oct._nov._d茅c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd鈥檋ui 脿] LT",
                nextDay: "[Demain 脿] LT",
                nextWeek: "dddd [脿] LT",
                lastDay: "[Hier 脿] LT",
                lastWeek: "dddd [dernier 脿] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (a, b) {
                switch (b) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return a + (1 === a ? "er" : "e");
                    case "w":
                            case "W":
                            return a + (1 === a ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : French [fr]
        //! author : John Fischer : https://github.com/jfroffice
        a.defineLocale("fr", {
            months: "janvier_f茅vrier_mars_avril_mai_juin_juillet_ao没t_septembre_octobre_novembre_d茅cembre".split("_"),
            monthsShort: "janv._f茅vr._mars_avr._mai_juin_juil._ao没t_sept._oct._nov._d茅c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd鈥檋ui 脿] LT",
                nextDay: "[Demain 脿] LT",
                nextWeek: "dddd [脿] LT",
                lastDay: "[Hier 脿] LT",
                lastWeek: "dddd [dernier 脿] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (a, b) {
                switch (b) {
                    case "D":
                        return a + (1 === a ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return a + (1 === a ? "er" : "e");
                    case "w":
                    case "W":
                        return a + (1 === a ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    //! moment.js locale configuration
    //! locale : Frisian [fy]
    //! author : Robin van der Vliet : https://github.com/robin0van0der0v
    var _g = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
        ah = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
    a.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
        monthsShort: function (a, b) {
            return a ? /-MMM-/.test(b) ? ah[a.month()] : _g[a.month()] : _g
        },
        monthsParseExact: !0,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[么fr没ne] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            m: "ien min煤t",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (a) {
            return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Scottish Gaelic [gd]
    //! author : Jon Ashdown : https://github.com/jonashdown
    var bh = ["Am Faoilleach", "An Gearran", "Am M脿rt", "An Giblean", "An C猫itean", "An t-脪gmhios", "An t-Iuchar", "An L霉nastal", "An t-Sultain", "An D脿mhair", "An t-Samhain", "An D霉bhlachd"],
        ch = ["Faoi", "Gear", "M脿rt", "Gibl", "C猫it", "脪gmh", "Iuch", "L霉n", "Sult", "D脿mh", "Samh", "D霉bh"],
        dh = ["Did貌mhnaich", "Diluain", "Dim脿irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
        eh = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
        fh = ["D貌", "Lu", "M脿", "Ci", "Ar", "Ha", "Sa"];
    a.defineLocale("gd", {
            months: bh,
            monthsShort: ch,
            monthsParseExact: !0,
            weekdays: dh,
            weekdaysShort: eh,
            weekdaysMin: fh,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-m脿ireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-d猫 aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "m矛os",
                MM: "%d m矛osan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (a) {
                var b = 1 === a ? "d" : a % 10 === 2 ? "na" : "mh";
                return a + b
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Galician [gl]
        //! author : Juan G. Hurtado : https://github.com/juanghurtado
        a.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xu帽o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xu帽._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_m茅rcores_xoves_venres_s谩bado".split("_"),
            weekdaysShort: "dom._lun._mar._m茅r._xov._ven._s谩b.".split("_"),
            weekdaysMin: "do_lu_ma_m茅_xo_ve_s谩".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoxe " + (1 !== this.hours() ? "谩s" : "谩") + "] LT"
                },
                nextDay: function () {
                    return "[ma帽谩 " + (1 !== this.hours() ? "谩s" : "谩") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [" + (1 !== this.hours() ? "谩s" : "a") + "] LT"
                },
                lastDay: function () {
                    return "[onte " + (1 !== this.hours() ? "谩" : "a") + "] LT"
                },
                lastWeek: function () {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "谩s" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (a) {
                    return 0 === a.indexOf("un") ? "n" + a : "en " + a
                },
                past: "hai %s",
                s: "uns segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un d铆a",
                dd: "%d d铆as",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}潞/,
            ordinal: "%d潞",
            week: {
                dow: 1,
                doy: 4
            }
        }), a.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: Id,
                m: Id,
                mm: Id,
                h: Id,
                hh: Id,
                d: Id,
                dd: Id,
                M: Id,
                MM: Id,
                y: Id,
                yy: Id
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (a, b) {
                switch (b) {
                    case "D":
                        return a + "er";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return a
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "rati" === b ? a < 4 ? a : a + 12 : "sokalli" === b ? a : "donparam" === b ? a > 12 ? a : a + 12 : "sanje" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return a < 4 ? "rati" : a < 12 ? "sokalli" : a < 16 ? "donparam" : a < 20 ? "sanje" : "rati"
            }
        }),
        //! moment.js locale configuration
        //! locale : Hebrew [he]
        //! author : Tomer Cohen : https://github.com/tomer
        //! author : Moshe Simantov : https://github.com/DevelopmentIL
        //! author : Tal Ater : https://github.com/TalAter
        a.defineLocale("he", {
            months: "讬谞讜讗专_驻讘专讜讗专_诪专抓_讗驻专讬诇_诪讗讬_讬讜谞讬_讬讜诇讬_讗讜讙讜住讟_住驻讟诪讘专_讗讜拽讟讜讘专_谞讜讘诪讘专_讚爪诪讘专".split("_"),
            monthsShort: "讬谞讜壮_驻讘专壮_诪专抓_讗驻专壮_诪讗讬_讬讜谞讬_讬讜诇讬_讗讜讙壮_住驻讟壮_讗讜拽壮_谞讜讘壮_讚爪诪壮".split("_"),
            weekdays: "专讗砖讜谉_砖谞讬_砖诇讬砖讬_专讘讬注讬_讞诪讬砖讬_砖讬砖讬_砖讘转".split("_"),
            weekdaysShort: "讗壮_讘壮_讙壮_讚壮_讛壮_讜壮_砖壮".split("_"),
            weekdaysMin: "讗_讘_讙_讚_讛_讜_砖".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [讘]MMMM YYYY",
                LLL: "D [讘]MMMM YYYY HH:mm",
                LLLL: "dddd, D [讘]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[讛讬讜诐 讘志]LT",
                nextDay: "[诪讞专 讘志]LT",
                nextWeek: "dddd [讘砖注讛] LT",
                lastDay: "[讗转诪讜诇 讘志]LT",
                lastWeek: "[讘讬讜诐] dddd [讛讗讞专讜谉 讘砖注讛] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "讘注讜讚 %s",
                past: "诇驻谞讬 %s",
                s: "诪住驻专 砖谞讬讜转",
                m: "讚拽讛",
                mm: "%d 讚拽讜转",
                h: "砖注讛",
                hh: function (a) {
                    return 2 === a ? "砖注转讬讬诐" : a + " 砖注讜转"
                },
                d: "讬讜诐",
                dd: function (a) {
                    return 2 === a ? "讬讜诪讬讬诐" : a + " 讬诪讬诐"
                },
                M: "讞讜讚砖",
                MM: function (a) {
                    return 2 === a ? "讞讜讚砖讬讬诐" : a + " 讞讜讚砖讬诐"
                },
                y: "砖谞讛",
                yy: function (a) {
                    return 2 === a ? "砖谞转讬讬诐" : a % 10 === 0 && 10 !== a ? a + " 砖谞讛" : a + " 砖谞讬诐"
                }
            },
            meridiemParse: /讗讞讛"爪|诇驻谞讛"爪|讗讞专讬 讛爪讛专讬讬诐|诇驻谞讬 讛爪讛专讬讬诐|诇驻谞讜转 讘讜拽专|讘讘讜拽专|讘注专讘/i,
            isPM: function (a) {
                return /^(讗讞讛"爪|讗讞专讬 讛爪讛专讬讬诐|讘注专讘)$/.test(a)
            },
            meridiem: function (a, b, c) {
                return a < 5 ? "诇驻谞讜转 讘讜拽专" : a < 10 ? "讘讘讜拽专" : a < 12 ? c ? '诇驻谞讛"爪' : "诇驻谞讬 讛爪讛专讬讬诐" : a < 18 ? c ? '讗讞讛"爪' : "讗讞专讬 讛爪讛专讬讬诐" : "讘注专讘"
            }
        });
    //! moment.js locale configuration
    //! locale : Hindi [hi]
    //! author : Mayank Singhal : https://github.com/mayanksinghal
    var gh = {
            1: "啷�",
            2: "啷�",
            3: "啷�",
            4: "啷�",
            5: "啷�",
            6: "啷�",
            7: "啷�",
            8: "啷�",
            9: "啷�",
            0: "啷�"
        },
        hh = {
            "啷�": "1",
            "啷�": "2",
            "啷�": "3",
            "啷�": "4",
            "啷�": "5",
            "啷�": "6",
            "啷�": "7",
            "啷�": "8",
            "啷�": "9",
            "啷�": "0"
        };
    a.defineLocale("hi", {
        months: "啶溹え啶掂ぐ啷€_啶ぜ啶班さ啶班_啶ぞ啶班啶歘啶呧お啷嵿ぐ啷堗げ_啶_啶溹啶╛啶溹啶侧ぞ啶坃啶呧啶膏啶啶膏た啶むぎ啷嵿が啶癬啶呧啷嵿啷傕が啶癬啶ㄠさ啶啶ぐ_啶︵た啶膏ぎ啷嵿が啶�".split("_"),
        monthsShort: "啶溹え._啶ぜ啶�._啶ぞ啶班啶歘啶呧お啷嵿ぐ啷�._啶_啶溹啶╛啶溹啶�._啶呧._啶膏た啶�._啶呧啷嵿啷�._啶ㄠさ._啶︵た啶�.".split("_"),
        monthsParseExact: !0,
        weekdays: "啶班さ啶苦さ啶距ぐ_啶膏啶さ啶距ぐ_啶啶椸げ啶掂ぞ啶癬啶啶оさ啶距ぐ_啶椸啶班啶掂ぞ啶癬啶多啶曕啶班さ啶距ぐ_啶多え啶苦さ啶距ぐ".split("_"),
        weekdaysShort: "啶班さ啶縚啶膏啶甠啶啶椸げ_啶啶啶椸啶班_啶多啶曕啶癬啶多え啶�".split("_"),
        weekdaysMin: "啶癬啶膏_啶_啶_啶椸_啶多_啶�".split("_"),
        longDateFormat: {
            LT: "A h:mm 啶啷�",
            LTS: "A h:mm:ss 啶啷�",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm 啶啷�",
            LLLL: "dddd, D MMMM YYYY, A h:mm 啶啷�"
        },
        calendar: {
            sameDay: "[啶嗋] LT",
            nextDay: "[啶曕げ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[啶曕げ] LT",
            lastWeek: "[啶た啶涏げ啷嘳 dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s 啶啶�",
            past: "%s 啶す啶侧",
            s: "啶曕啶� 啶灌 啶曕啶粪ぃ",
            m: "啶忇 啶た啶ㄠ",
            mm: "%d 啶た啶ㄠ",
            h: "啶忇 啶樴啶熰ぞ",
            hh: "%d 啶樴啶熰",
            d: "啶忇 啶︵た啶�",
            dd: "%d 啶︵た啶�",
            M: "啶忇 啶す啷€啶ㄠ",
            MM: "%d 啶す啷€啶ㄠ",
            y: "啶忇 啶掂ぐ啷嵿し",
            yy: "%d 啶掂ぐ啷嵿し"
        },
        preparse: function (a) {
            return a.replace(/[啷оエ啷┼オ啷ガ啷ギ啷ウ]/g, function (a) {
                return hh[a]
            })
        },
        postformat: function (a) {
            return a.replace(/\d/g, function (a) {
                return gh[a]
            })
        },
        meridiemParse: /啶班ぞ啶啶膏啶す|啶︵啶す啶皘啶多ぞ啶�/,
        meridiemHour: function (a, b) {
            return 12 === a && (a = 0), "啶班ぞ啶�" === b ? a < 4 ? a : a + 12 : "啶膏啶す" === b ? a : "啶︵啶す啶�" === b ? a >= 10 ? a : a + 12 : "啶多ぞ啶�" === b ? a + 12 : void 0
        },
        meridiem: function (a, b, c) {
            return a < 4 ? "啶班ぞ啶�" : a < 10 ? "啶膏啶す" : a < 17 ? "啶︵啶す啶�" : a < 20 ? "啶多ぞ啶�" : "啶班ぞ啶�"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), a.defineLocale("hr", {
        months: {
            format: "sije膷nja_velja膷e_o啪ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
            standalone: "sije膷anj_velja膷a_o啪ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
        },
        monthsShort: "sij._velj._o啪u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_膷etvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._膷et._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_膷e_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju膷er u] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[pro拧lu] dddd [u] LT";
                    case 6:
                        return "[pro拧le] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[pro拧li] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            m: Jd,
            mm: Jd,
            h: Jd,
            hh: Jd,
            d: "dan",
            dd: Jd,
            M: "mjesec",
            MM: Jd,
            y: "godinu",
            yy: Jd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    //! moment.js locale configuration
    //! locale : Hungarian [hu]
    //! author : Adam Brunner : https://github.com/adambrunner
    var ih = "vas谩rnap h茅tf艖n kedden szerd谩n cs眉t枚rt枚k枚n p茅nteken szombaton".split(" ");
    a.defineLocale("hu", {
            months: "janu谩r_febru谩r_m谩rcius_谩prilis_m谩jus_j煤nius_j煤lius_augusztus_szeptember_okt贸ber_november_december".split("_"),
            monthsShort: "jan_feb_m谩rc_谩pr_m谩j_j煤n_j煤l_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vas谩rnap_h茅tf艖_kedd_szerda_cs眉t枚rt枚k_p茅ntek_szombat".split("_"),
            weekdaysShort: "vas_h茅t_kedd_sze_cs眉t_p茅n_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function (a) {
                return "u" === a.charAt(1).toLowerCase()
            },
            meridiem: function (a, b, c) {
                return a < 12 ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function () {
                    return Ld.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function () {
                    return Ld.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s m煤lva",
                past: "%s",
                s: Kd,
                m: Kd,
                mm: Kd,
                h: Kd,
                hh: Kd,
                d: Kd,
                dd: Kd,
                M: Kd,
                MM: Kd,
                y: Kd,
                yy: Kd
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Armenian [hy-am]
        //! author : Armendarabyan : https://github.com/armendarabyan
        a.defineLocale("hy-am", {
            months: {
                format: "瞻崭謧斩站铡謤斋_謨榨湛謤站铡謤斋_沾铡謤湛斋_铡蘸謤斋宅斋_沾铡盏斋战斋_瞻崭謧斩斋战斋_瞻崭謧宅斋战斋_謪眨崭战湛崭战斋_战榨蘸湛榨沾闸榨謤斋_瞻崭寨湛榨沾闸榨謤斋_斩崭盏榨沾闸榨謤斋_栅榨寨湛榨沾闸榨謤斋".split("_"),
                standalone: "瞻崭謧斩站铡謤_謨榨湛謤站铡謤_沾铡謤湛_铡蘸謤斋宅_沾铡盏斋战_瞻崭謧斩斋战_瞻崭謧宅斋战_謪眨崭战湛崭战_战榨蘸湛榨沾闸榨謤_瞻崭寨湛榨沾闸榨謤_斩崭盏榨沾闸榨謤_栅榨寨湛榨沾闸榨謤".split("_")
            },
            monthsShort: "瞻斩站_謨湛謤_沾謤湛_铡蘸謤_沾盏战_瞻斩战_瞻宅战_謪眨战_战蘸湛_瞻寨湛_斩沾闸_栅寨湛".split("_"),
            weekdays: "寨斋謤铡寨斋_榨謤寨崭謧辗铡闸诈斋_榨謤榨謩辗铡闸诈斋_展崭謤榨謩辗铡闸诈斋_瞻斋斩眨辗铡闸诈斋_崭謧謤闸铡诈_辗铡闸铡诈".split("_"),
            weekdaysShort: "寨謤寨_榨謤寨_榨謤謩_展謤謩_瞻斩眨_崭謧謤闸_辗闸诈".split("_"),
            weekdaysMin: "寨謤寨_榨謤寨_榨謤謩_展謤謩_瞻斩眨_崭謧謤闸_辗闸诈".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY 诈.",
                LLL: "D MMMM YYYY 诈., HH:mm",
                LLLL: "dddd, D MMMM YYYY 诈., HH:mm"
            },
            calendar: {
                sameDay: "[铡盏战謪謤] LT",
                nextDay: "[站铡詹炸] LT",
                lastDay: "[榨謤榨寨] LT",
                nextWeek: function () {
                    return "dddd [謪謤炸 摘铡沾炸] LT"
                },
                lastWeek: function () {
                    return "[铡斩謥铡债] dddd [謪謤炸 摘铡沾炸] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 瞻榨湛崭",
                past: "%s 铡占铡栈",
                s: "沾斋 謩铡斩斋 站铡盏謤寨盏铡斩",
                m: "謤崭蘸榨",
                mm: "%d 謤崭蘸榨",
                h: "摘铡沾",
                hh: "%d 摘铡沾",
                d: "謪謤",
                dd: "%d 謪謤",
                M: "铡沾斋战",
                MM: "%d 铡沾斋战",
                y: "湛铡謤斋",
                yy: "%d 湛铡謤斋"
            },
            meridiemParse: /眨斋辗榨謤站铡|铡占铡站崭湛站铡|謥榨謤榨寨站铡|榨謤榨寨崭盏铡斩/,
            isPM: function (a) {
                return /^(謥榨謤榨寨站铡|榨謤榨寨崭盏铡斩)$/.test(a)
            },
            meridiem: function (a) {
                return a < 4 ? "眨斋辗榨謤站铡" : a < 12 ? "铡占铡站崭湛站铡" : a < 17 ? "謥榨謤榨寨站铡" : "榨謤榨寨崭盏铡斩"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(斋斩|謤栅)/,
            ordinal: function (a, b) {
                switch (b) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === a ? a + "-斋斩" : a + "-謤栅";
                    default:
                        return a
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : Indonesian [id]
        //! author : Mohammad Satrio Utomo : https://github.com/tyok
        //! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan
        a.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return a < 11 ? "pagi" : a < 15 ? "siang" : a < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), a.defineLocale("is", {
            months: "jan煤ar_febr煤ar_mars_apr铆l_ma铆_j煤n铆_j煤l铆_谩g煤st_september_okt贸ber_n贸vember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_ma铆_j煤n_j煤l_谩g煤_sep_okt_n贸v_des".split("_"),
            weekdays: "sunnudagur_m谩nudagur_镁ri冒judagur_mi冒vikudagur_fimmtudagur_f枚studagur_laugardagur".split("_"),
            weekdaysShort: "sun_m谩n_镁ri_mi冒_fim_f枚s_lau".split("_"),
            weekdaysMin: "Su_M谩_脼r_Mi_Fi_F枚_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[铆 dag kl.] LT",
                nextDay: "[谩 morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[铆 g忙r kl.] LT",
                lastWeek: "[s铆冒asta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s s铆冒an",
                s: Nd,
                m: Nd,
                mm: Nd,
                h: "klukkustund",
                hh: Nd,
                d: Nd,
                dd: Nd,
                M: Nd,
                MM: Nd,
                y: Nd,
                yy: Nd
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Italian [it]
        //! author : Lorenzo : https://github.com/aliem
        //! author: Mattia Larentis: https://github.com/nostalgiaz
        a.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_luned矛_marted矛_mercoled矛_gioved矛_venerd矛_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (a) {
                    return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a
                },
                past: "%s fa",
                s: "alcuni secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}潞/,
            ordinal: "%d潞",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Japanese [ja]
        //! author : LI Long : https://github.com/baryon
        a.defineLocale("ja", {
            months: "1鏈坃2鏈坃3鏈坃4鏈坃5鏈坃6鏈坃7鏈坃8鏈坃9鏈坃10鏈坃11鏈坃12鏈�".split("_"),
            monthsShort: "1鏈坃2鏈坃3鏈坃4鏈坃5鏈坃6鏈坃7鏈坃8鏈坃9鏈坃10鏈坃11鏈坃12鏈�".split("_"),
            weekdays: "鏃ユ洔鏃鏈堟洔鏃鐏洔鏃姘存洔鏃鏈ㄦ洔鏃閲戞洔鏃鍦熸洔鏃�".split("_"),
            weekdaysShort: "鏃鏈坃鐏玙姘確鏈╛閲慱鍦�".split("_"),
            weekdaysMin: "鏃鏈坃鐏玙姘確鏈╛閲慱鍦�".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY骞碝鏈圖鏃�",
                LLL: "YYYY骞碝鏈圖鏃� HH:mm",
                LLLL: "YYYY骞碝鏈圖鏃� HH:mm dddd",
                l: "YYYY/MM/DD",
                ll: "YYYY骞碝鏈圖鏃�",
                lll: "YYYY骞碝鏈圖鏃� HH:mm",
                llll: "YYYY骞碝鏈圖鏃� HH:mm dddd"
            },
            meridiemParse: /鍗堝墠|鍗堝緦/i,
            isPM: function (a) {
                return "鍗堝緦" === a
            },
            meridiem: function (a, b, c) {
                return a < 12 ? "鍗堝墠" : "鍗堝緦"
            },
            calendar: {
                sameDay: "[浠婃棩] LT",
                nextDay: "[鏄庢棩] LT",
                nextWeek: "[鏉ラ€盷dddd LT",
                lastDay: "[鏄ㄦ棩] LT",
                lastWeek: "[鍓嶉€盷dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}鏃�/,
            ordinal: function (a, b) {
                switch (b) {
                    case "d":
                    case "D":
                    case "DDD":
                        return a + "鏃�";
                    default:
                        return a
                }
            },
            relativeTime: {
                future: "%s寰�",
                past: "%s鍓�",
                s: "鏁扮",
                m: "1鍒�",
                mm: "%d鍒�",
                h: "1鏅傞枔",
                hh: "%d鏅傞枔",
                d: "1鏃�",
                dd: "%d鏃�",
                M: "1銉舵湀",
                MM: "%d銉舵湀",
                y: "1骞�",
                yy: "%d骞�"
            }
        }),
        //! moment.js locale configuration
        //! locale : Javanese [jv]
        //! author : Rony Lantip : https://github.com/lantip
        //! reference: http://jv.wikipedia.org/wiki/Basa_Jawa
        a.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "enjing" === b ? a : "siyang" === b ? a >= 11 ? a : a + 12 : "sonten" === b || "ndalu" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return a < 11 ? "enjing" : a < 15 ? "siyang" : a < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : Georgian [ka]
        //! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
        a.defineLocale("ka", {
            months: {
                standalone: "醿樶儛醿溼儠醿愥儬醿榑醿椺償醿戓償醿犪儠醿愥儦醿榑醿涐儛醿犪儮醿榑醿愥優醿犪儤醿氠儤_醿涐儛醿樶儭醿榑醿樶儠醿溼儤醿♂儤_醿樶儠醿氠儤醿♂儤_醿愥儝醿曖儤醿♂儮醿漘醿♂償醿メ儮醿斸儧醿戓償醿犪儤_醿濁儱醿⑨儩醿涐儜醿斸儬醿榑醿溼儩醿斸儧醿戓償醿犪儤_醿撫償醿欋償醿涐儜醿斸儬醿�".split("_"),
                format: "醿樶儛醿溼儠醿愥儬醿醿椺償醿戓償醿犪儠醿愥儦醿醿涐儛醿犪儮醿醿愥優醿犪儤醿氠儤醿醿涐儛醿樶儭醿醿樶儠醿溼儤醿♂儭_醿樶儠醿氠儤醿♂儭_醿愥儝醿曖儤醿♂儮醿醿♂償醿メ儮醿斸儧醿戓償醿犪儭_醿濁儱醿⑨儩醿涐儜醿斸儬醿醿溼儩醿斸儧醿戓償醿犪儭_醿撫償醿欋償醿涐儜醿斸儬醿�".split("_")
            },
            monthsShort: "醿樶儛醿淿醿椺償醿慱醿涐儛醿燺醿愥優醿燺醿涐儛醿榑醿樶儠醿淿醿樶儠醿歘醿愥儝醿昣醿♂償醿醿濁儱醿醿溼儩醿擾醿撫償醿�".split("_"),
            weekdays: {
                standalone: "醿欋儠醿樶儬醿恄醿濁儬醿ㄡ儛醿戓儛醿椺儤_醿♂儛醿涐儴醿愥儜醿愥儣醿榑醿濁儣醿儴醿愥儜醿愥儣醿榑醿儯醿椺儴醿愥儜醿愥儣醿榑醿炨儛醿犪儛醿♂儥醿斸儠醿榑醿ㄡ儛醿戓儛醿椺儤".split("_"),
                format: "醿欋儠醿樶儬醿愥儭_醿濁儬醿ㄡ儛醿戓儛醿椺儭_醿♂儛醿涐儴醿愥儜醿愥儣醿醿濁儣醿儴醿愥儜醿愥儣醿醿儯醿椺儴醿愥儜醿愥儣醿醿炨儛醿犪儛醿♂儥醿斸儠醿醿ㄡ儛醿戓儛醿椺儭".split("_"),
                isFormat: /(醿儤醿溼儛|醿ㄡ償醿涐儞醿斸儝)/
            },
            weekdaysShort: "醿欋儠醿榑醿濁儬醿╛醿♂儛醿沖醿濁儣醿甠醿儯醿梍醿炨儛醿燺醿ㄡ儛醿�".split("_"),
            weekdaysMin: "醿欋儠_醿濁儬_醿♂儛_醿濁儣_醿儯_醿炨儛_醿ㄡ儛".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[醿撫儲醿斸儭] LT[-醿栣償]",
                nextDay: "[醿儠醿愥儦] LT[-醿栣償]",
                lastDay: "[醿掅儯醿ㄡ儤醿淽 LT[-醿栣償]",
                nextWeek: "[醿ㄡ償醿涐儞醿斸儝] dddd LT[-醿栣償]",
                lastWeek: "[醿儤醿溼儛] dddd LT-醿栣償",
                sameElse: "L"
            },
            relativeTime: {
                future: function (a) {
                    return /(醿儛醿涐儤|醿儯醿椺儤|醿♂儛醿愥儣醿榺醿償醿氠儤)/.test(a) ? a.replace(/醿�$/, "醿ㄡ儤") : a + "醿ㄡ儤"
                },
                past: function (a) {
                    return /(醿儛醿涐儤|醿儯醿椺儤|醿♂儛醿愥儣醿榺醿撫儲醿攟醿椺儠醿�)/.test(a) ? a.replace(/(醿榺醿�)$/, "醿樶儭 醿ａ儥醿愥儨") : /醿償醿氠儤/.test(a) ? a.replace(/醿償醿氠儤$/, "醿儦醿樶儭 醿ａ儥醿愥儨") : void 0
                },
                s: "醿犪儛醿涐儞醿斸儨醿樶儧醿� 醿儛醿涐儤",
                m: "醿儯醿椺儤",
                mm: "%d 醿儯醿椺儤",
                h: "醿♂儛醿愥儣醿�",
                hh: "%d 醿♂儛醿愥儣醿�",
                d: "醿撫儲醿�",
                dd: "%d 醿撫儲醿�",
                M: "醿椺儠醿�",
                MM: "%d 醿椺儠醿�",
                y: "醿償醿氠儤",
                yy: "%d 醿償醿氠儤"
            },
            dayOfMonthOrdinalParse: /0|1-醿氠儤|醿涐償-\d{1,2}|\d{1,2}-醿�/,
            ordinal: function (a) {
                return 0 === a ? a : 1 === a ? a + "-醿氠儤" : a < 20 || a <= 100 && a % 20 === 0 || a % 100 === 0 ? "醿涐償-" + a : a + "-醿�"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    //! moment.js locale configuration
    //! locale : Kazakh [kk]
    //! authors : Nurlan Rakhimzhanov : https://github.com/nurlan
    var jh = {
        0: "-褕褨",
        1: "-褕褨",
        2: "-褕褨",
        3: "-褕褨",
        4: "-褕褨",
        5: "-褕褨",
        6: "-褕褘",
        7: "-褕褨",
        8: "-褕褨",
        9: "-褕褘",
        10: "-褕褘",
        20: "-褕褘",
        30: "-褕褘",
        40: "-褕褘",
        50: "-褕褨",
        60: "-褕褘",
        70: "-褕褨",
        80: "-褕褨",
        90: "-褕褘",
        100: "-褕褨"
    };
    a.defineLocale("kk", {
            months: "覜邪遥褌邪褉_邪覜锌邪薪_薪邪褍褉褘蟹_褋訖褍褨褉_屑邪屑褘褉_屑邪褍褋褘屑_褕褨谢写械_褌邪屑褘蟹_覜褘褉泻爷泄械泻_覜邪蟹邪薪_覜邪褉邪褕邪_卸械谢褌芯覜褋邪薪".split("_"),
            monthsShort: "覜邪遥_邪覜锌_薪邪褍_褋訖褍_屑邪屑_屑邪褍_褕褨谢_褌邪屑_覜褘褉_覜邪蟹_覜邪褉_卸械谢".split("_"),
            weekdays: "卸械泻褋械薪斜褨_写爷泄褋械薪斜褨_褋械泄褋械薪斜褨_褋訖褉褋械薪斜褨_斜械泄褋械薪斜褨_卸冶屑邪_褋械薪斜褨".split("_"),
            weekdaysShort: "卸械泻_写爷泄_褋械泄_褋訖褉_斜械泄_卸冶屑_褋械薪".split("_"),
            weekdaysMin: "卸泻_写泄_褋泄_褋褉_斜泄_卸屑_褋薪".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[袘爷谐褨薪 褋邪覔邪褌] LT",
                nextDay: "[袝褉褌械遥 褋邪覔邪褌] LT",
                nextWeek: "dddd [褋邪覔邪褌] LT",
                lastDay: "[袣械褕械 褋邪覔邪褌] LT",
                lastWeek: "[莹褌泻械薪 邪锌褌邪薪褘遥] dddd [褋邪覔邪褌] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 褨褕褨薪写械",
                past: "%s 斜冶褉褘薪",
                s: "斜褨褉薪械褕械 褋械泻褍薪写",
                m: "斜褨褉 屑懈薪褍褌",
                mm: "%d 屑懈薪褍褌",
                h: "斜褨褉 褋邪覔邪褌",
                hh: "%d 褋邪覔邪褌",
                d: "斜褨褉 泻爷薪",
                dd: "%d 泻爷薪",
                M: "斜褨褉 邪泄",
                MM: "%d 邪泄",
                y: "斜褨褉 卸褘谢",
                yy: "%d 卸褘谢"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(褕褨|褕褘)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = a >= 100 ? 100 : null;
                return a + (jh[a] || jh[b] || jh[c])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : Cambodian [km]
        //! author : Kruy Vanna : https://github.com/kruyvanna
        a.defineLocale("km", {
            months: "釣樶瀫釣氠灦_釣€釣会灅釤掅灄釤坃釣樶灨釣撫灦_釣樶焷釣熱灦_釣п灍釣椺灦_釣樶灧釣愥灮釣撫灦_釣€釣€釤掅瀫釣娽灦_釣熱灨釣犪灦_釣€釣夅煉釣夅灦_釣忈灮釣涐灦_釣溼灧釣呩煉釣嗎灧釣€釣禵釣掅煉釣撫灱".split("_"),
            monthsShort: "釣樶瀫釣氠灦_釣€釣会灅釤掅灄釤坃釣樶灨釣撫灦_釣樶焷釣熱灦_釣п灍釣椺灦_釣樶灧釣愥灮釣撫灦_釣€釣€釤掅瀫釣娽灦_釣熱灨釣犪灦_釣€釣夅煉釣夅灦_釣忈灮釣涐灦_釣溼灧釣呩煉釣嗎灧釣€釣禵釣掅煉釣撫灱".split("_"),
            weekdays: "釣⑨灦釣戓灧釣忈煉釣檁釣呩煇釣撫煉釣慱釣⑨瀯釤掅瀭釣夺灇_釣栣灮釣抇釣栣煉釣氠灎釣熱煉釣斸瀼釣丰煃_釣熱灮釣€釤掅灇_釣熱焻釣氠煃".split("_"),
            weekdaysShort: "釣⑨灦釣戓灧釣忈煉釣檁釣呩煇釣撫煉釣慱釣⑨瀯釤掅瀭釣夺灇_釣栣灮釣抇釣栣煉釣氠灎釣熱煉釣斸瀼釣丰煃_釣熱灮釣€釤掅灇_釣熱焻釣氠煃".split("_"),
            weekdaysMin: "釣⑨灦釣戓灧釣忈煉釣檁釣呩煇釣撫煉釣慱釣⑨瀯釤掅瀭釣夺灇_釣栣灮釣抇釣栣煉釣氠灎釣熱煉釣斸瀼釣丰煃_釣熱灮釣€釤掅灇_釣熱焻釣氠煃".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[釣愥煉釣勧焹釣撫焷釤� 釣樶焿釤勧瀯] LT",
                nextDay: "[釣熱煉釣⑨焸釣€ 釣樶焿釤勧瀯] LT",
                nextWeek: "dddd [釣樶焿釤勧瀯] LT",
                lastDay: "[釣樶煉釣熱灧釣涐灅釣丰瀴 釣樶焿釤勧瀯] LT",
                lastWeek: "dddd [釣熱灁釤掅瀼釣夺灎釤嶀灅釣会灀] [釣樶焿釤勧瀯] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s釣戓焵釣�",
                past: "%s釣樶灮釣�",
                s: "釣斸焿釣会灀釤掅灅釣夺灀釣溼灧釣撫灦釣戓灨",
                m: "釣樶灲釣欋灀釣夺瀾釣�",
                mm: "%d 釣撫灦釣戓灨",
                h: "釣樶灲釣欋灅釤夅焺釣�",
                hh: "%d 釣樶焿釤勧瀯",
                d: "釣樶灲釣欋瀽釤掅瀯釤�",
                dd: "%d 釣愥煉釣勧焹",
                M: "釣樶灲釣欋瀬釤�",
                MM: "%d 釣佱焸",
                y: "釣樶灲釣欋瀱釤掅灀釣夺焼",
                yy: "%d 釣嗎煉釣撫灦釤�"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    //! moment.js locale configuration
    //! locale : Kannada [kn]
    //! author : Rajeev Naik : https://github.com/rajeevnaikte
    var kh = {
            1: "喑�",
            2: "喑�",
            3: "喑�",
            4: "喑�",
            5: "喑�",
            6: "喑�",
            7: "喑�",
            8: "喑�",
            9: "喑�",
            0: "喑�"
        },
        lh = {
            "喑�": "1",
            "喑�": "2",
            "喑�": "3",
            "喑�": "4",
            "喑�": "5",
            "喑�": "6",
            "喑�": "7",
            "喑�": "8",
            "喑�": "9",
            "喑�": "0"
        };
    a.defineLocale("kn", {
            months: "嗖溹波嗖掂舶嗖縚嗖硢嗖硩嗖班驳嗖班部_嗖簿嗖班硩嗖氞硩_嗖忇勃喑嵿舶嗖苦膊喑峗嗖硢喑昣嗖溹硞嗖ㄠ硩_嗖溹硜嗖侧硢喑朹嗖嗋矖嗖膏硩嗖熰硩_嗖膏硢嗖硩嗖熰硢嗖傕铂嗖班硩_嗖呧矔喑嵿矡喑嗋硞喑曕铂嗖班硩_嗖ㄠ驳喑嗋矀嗖舶喑峗嗖∴部嗖膏硢嗖傕铂嗖班硩".split("_"),
            monthsShort: "嗖溹波_嗖硢嗖硩嗖癬嗖簿嗖班硩嗖氞硩_嗖忇勃喑嵿舶嗖苦膊喑峗嗖硢喑昣嗖溹硞嗖ㄠ硩_嗖溹硜嗖侧硢喑朹嗖嗋矖嗖膏硩嗖熰硩_嗖膏硢嗖硩嗖熰硢嗖傕铂_嗖呧矔喑嵿矡喑嗋硞喑曕铂_嗖ㄠ驳喑嗋矀嗖琠嗖∴部嗖膏硢嗖傕铂".split("_"),
            monthsParseExact: !0,
            weekdays: "嗖簿嗖ㄠ硜嗖掂簿嗖癬嗖膏硢喑傕硶嗖驳嗖距舶_嗖矀嗖椸渤嗖掂簿嗖癬嗖硜嗖о驳嗖距舶_嗖椸硜嗖班硜嗖掂簿嗖癬嗖多硜嗖曕硩嗖班驳嗖距舶_嗖多波嗖苦驳嗖距舶".split("_"),
            weekdaysShort: "嗖簿嗖ㄠ硜_嗖膏硢喑傕硶嗖甠嗖矀嗖椸渤_嗖硜嗖嗖椸硜嗖班硜_嗖多硜嗖曕硩嗖癬嗖多波嗖�".split("_"),
            weekdaysMin: "嗖簿_嗖膏硢喑傕硶_嗖矀_嗖硜_嗖椸硜_嗖多硜_嗖�".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[嗖囙矀嗖︵硜] LT",
                nextDay: "[嗖ㄠ簿嗖赤硢] LT",
                nextWeek: "dddd, LT",
                lastDay: "[嗖ㄠ部嗖ㄠ硩嗖ㄠ硢] LT",
                lastWeek: "[嗖曕硢喑傕波喑嗋帛] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 嗖ㄠ矀嗖む舶",
                past: "%s 嗖灌部嗖傕拨喑�",
                s: "嗖曕硢嗖侧驳喑� 嗖曕硩嗖粪玻嗖椸渤喑�",
                m: "嗖掄矀嗖︵硜 嗖ㄠ部嗖部嗖�",
                mm: "%d 嗖ㄠ部嗖部嗖�",
                h: "嗖掄矀嗖︵硜 嗖椸矀嗖熰硢",
                hh: "%d 嗖椸矀嗖熰硢",
                d: "嗖掄矀嗖︵硜 嗖︵部嗖�",
                dd: "%d 嗖︵部嗖�",
                M: "嗖掄矀嗖︵硜 嗖む部嗖傕矖嗖赤硜",
                MM: "%d 嗖む部嗖傕矖嗖赤硜",
                y: "嗖掄矀嗖︵硜 嗖掂舶喑嵿卜",
                yy: "%d 嗖掂舶喑嵿卜"
            },
            preparse: function (a) {
                return a.replace(/[喑о敞喑┼唱喑超喑钞喑肠]/g, function (a) {
                    return lh[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return kh[a]
                })
            },
            meridiemParse: /嗖班簿嗖む硩嗖班部|嗖硢嗖赤部嗖椸硩嗖椸硢|嗖钵喑嵿帛嗖距补喑嵿波|嗖膏矀嗖溹硢/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "嗖班簿嗖む硩嗖班部" === b ? a < 4 ? a : a + 12 : "嗖硢嗖赤部嗖椸硩嗖椸硢" === b ? a : "嗖钵喑嵿帛嗖距补喑嵿波" === b ? a >= 10 ? a : a + 12 : "嗖膏矀嗖溹硢" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return a < 4 ? "嗖班簿嗖む硩嗖班部" : a < 10 ? "嗖硢嗖赤部嗖椸硩嗖椸硢" : a < 17 ? "嗖钵喑嵿帛嗖距补喑嵿波" : a < 20 ? "嗖膏矀嗖溹硢" : "嗖班簿嗖む硩嗖班部"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(嗖ㄠ硢喑�)/,
            ordinal: function (a) {
                return a + "嗖ㄠ硢喑�"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }),
        //! moment.js locale configuration
        //! locale : Korean [ko]
        //! author : Kyungwook, Park : https://github.com/kyungw00k
        //! author : Jeeeyul Lee <jeeeyul@gmail.com>
        a.defineLocale("ko", {
            months: "1鞗擾2鞗擾3鞗擾4鞗擾5鞗擾6鞗擾7鞗擾8鞗擾9鞗擾10鞗擾11鞗擾12鞗�".split("_"),
            monthsShort: "1鞗擾2鞗擾3鞗擾4鞗擾5鞗擾6鞗擾7鞗擾8鞗擾9鞗擾10鞗擾11鞗擾12鞗�".split("_"),
            weekdays: "鞚检殧鞚糭鞗旍殧鞚糭頇旍殧鞚糭靾橃殧鞚糭氇╈殧鞚糭旮堨殧鞚糭韱犾殧鞚�".split("_"),
            weekdaysShort: "鞚糭鞗擾頇擾靾榑氇旮坃韱�".split("_"),
            weekdaysMin: "鞚糭鞗擾頇擾靾榑氇旮坃韱�".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD",
                LL: "YYYY雲� MMMM D鞚�",
                LLL: "YYYY雲� MMMM D鞚� A h:mm",
                LLLL: "YYYY雲� MMMM D鞚� dddd A h:mm",
                l: "YYYY.MM.DD",
                ll: "YYYY雲� MMMM D鞚�",
                lll: "YYYY雲� MMMM D鞚� A h:mm",
                llll: "YYYY雲� MMMM D鞚� dddd A h:mm"
            },
            calendar: {
                sameDay: "鞓る姌 LT",
                nextDay: "雮挫澕 LT",
                nextWeek: "dddd LT",
                lastDay: "鞏挫牅 LT",
                lastWeek: "歆€雮滌＜ dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 頉�",
                past: "%s 鞝�",
                s: "氇� 齑�",
                ss: "%d齑�",
                m: "1攵�",
                mm: "%d攵�",
                h: "頃� 鞁滉皠",
                hh: "%d鞁滉皠",
                d: "頃橂（",
                dd: "%d鞚�",
                M: "頃� 雼�",
                MM: "%d雼�",
                y: "鞚� 雲�",
                yy: "%d雲�"
            },
            dayOfMonthOrdinalParse: /\d{1,2}鞚�/,
            ordinal: "%d鞚�",
            meridiemParse: /鞓れ爠|鞓ろ泟/,
            isPM: function (a) {
                return "鞓ろ泟" === a
            },
            meridiem: function (a, b, c) {
                return a < 12 ? "鞓れ爠" : "鞓ろ泟"
            }
        });
    //! moment.js locale configuration
    //! locale : Kyrgyz [ky]
    //! author : Chyngyz Arystan uulu : https://github.com/chyngyz
    var mh = {
        0: "-褔爷",
        1: "-褔懈",
        2: "-褔懈",
        3: "-褔爷",
        4: "-褔爷",
        5: "-褔懈",
        6: "-褔褘",
        7: "-褔懈",
        8: "-褔懈",
        9: "-褔褍",
        10: "-褔褍",
        20: "-褔褘",
        30: "-褔褍",
        40: "-褔褘",
        50: "-褔爷",
        60: "-褔褘",
        70: "-褔懈",
        80: "-褔懈",
        90: "-褔褍",
        100: "-褔爷"
    };
    a.defineLocale("ky", {
            months: "褟薪胁邪褉褜_褎械胁褉邪谢褜_屑邪褉褌_邪锌褉械谢褜_屑邪泄_懈褞薪褜_懈褞谢褜_邪胁谐褍褋褌_褋械薪褌褟斜褉褜_芯泻褌褟斜褉褜_薪芯褟斜褉褜_写械泻邪斜褉褜".split("_"),
            monthsShort: "褟薪胁_褎械胁_屑邪褉褌_邪锌褉_屑邪泄_懈褞薪褜_懈褞谢褜_邪胁谐_褋械薪_芯泻褌_薪芯褟_写械泻".split("_"),
            weekdays: "袞械泻褕械屑斜懈_袛爷泄褕萤屑斜爷_楔械泄褕械屑斜懈_楔邪褉褕械屑斜懈_袘械泄褕械屑斜懈_袞褍屑邪_袠褕械屑斜懈".split("_"),
            weekdaysShort: "袞械泻_袛爷泄_楔械泄_楔邪褉_袘械泄_袞褍屑_袠褕械".split("_"),
            weekdaysMin: "袞泻_袛泄_楔泄_楔褉_袘泄_袞屑_袠褕".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[袘爷谐爷薪 褋邪邪褌] LT",
                nextDay: "[协褉褌械遥 褋邪邪褌] LT",
                nextWeek: "dddd [褋邪邪褌] LT",
                lastDay: "[袣械褔械 褋邪邪褌] LT",
                lastWeek: "[莹褌泻械薪 邪锌褌邪薪褘薪] dddd [泻爷薪爷] [褋邪邪褌] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 懈褔懈薪写械",
                past: "%s 屑褍褉褍薪",
                s: "斜懈褉薪械褔械 褋械泻褍薪写",
                m: "斜懈褉 屑爷薪萤褌",
                mm: "%d 屑爷薪萤褌",
                h: "斜懈褉 褋邪邪褌",
                hh: "%d 褋邪邪褌",
                d: "斜懈褉 泻爷薪",
                dd: "%d 泻爷薪",
                M: "斜懈褉 邪泄",
                MM: "%d 邪泄",
                y: "斜懈褉 卸褘谢",
                yy: "%d 卸褘谢"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(褔懈|褔褘|褔爷|褔褍)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = a >= 100 ? 100 : null;
                return a + (mh[a] || mh[b] || mh[c])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), a.defineLocale("lb", {
            months: "Januar_Februar_M盲erz_Abr毛ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_M茅indeg_D毛nschdeg_M毛ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._M茅._D毛._M毛._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_M茅_D毛_M毛_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[G毛schter um] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: Pd,
                past: Qd,
                s: "e puer Sekonnen",
                m: Od,
                mm: "%d Minutten",
                h: Od,
                hh: "%d Stonnen",
                d: Od,
                dd: "%d Deeg",
                M: Od,
                MM: "%d M茅int",
                y: Od,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Lao [lo]
        //! author : Ryan Hart : https://github.com/ryanhart2
        a.defineLocale("lo", {
            months: "嗪∴罕嗪囙簛嗪簷_嗪佮焊嗪∴簽嗪瞋嗪∴旱嗪權翰_嗷€嗪∴邯嗪瞋嗪炧憾嗪斷邯嗪班簽嗪瞋嗪∴捍嗪栢焊嗪權翰_嗪佮粛嗪ム喊嗪佮夯嗪擾嗪捍嗪囙韩嗪瞋嗪佮罕嗪權簫嗪瞋嗪曕焊嗪ム翰_嗪炧喊嗪堗捍嗪乢嗪椸罕嗪權骇嗪�".split("_"),
            monthsShort: "嗪∴罕嗪囙簛嗪簷_嗪佮焊嗪∴簽嗪瞋嗪∴旱嗪權翰_嗷€嗪∴邯嗪瞋嗪炧憾嗪斷邯嗪班簽嗪瞋嗪∴捍嗪栢焊嗪權翰_嗪佮粛嗪ム喊嗪佮夯嗪擾嗪捍嗪囙韩嗪瞋嗪佮罕嗪權簫嗪瞋嗪曕焊嗪ム翰_嗪炧喊嗪堗捍嗪乢嗪椸罕嗪權骇嗪�".split("_"),
            weekdays: "嗪翰嗪椸捍嗪擾嗪堗罕嗪檁嗪罕嗪囙簞嗪侧簷_嗪炧焊嗪擾嗪炧喊嗪罕嗪擾嗪焊嗪乢嗷€嗪夯嗪�".split("_"),
            weekdaysShort: "嗪椸捍嗪擾嗪堗罕嗪檁嗪罕嗪囙簞嗪侧簷_嗪炧焊嗪擾嗪炧喊嗪罕嗪擾嗪焊嗪乢嗷€嗪夯嗪�".split("_"),
            weekdaysMin: "嗪梍嗪坃嗪簞_嗪瀇嗪炧韩_嗪簛_嗪�".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "嗪о罕嗪檇ddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /嗪曕涵嗪權粈嗪娻夯嗷夃翰|嗪曕涵嗪權粊嗪ム簢/,
            isPM: function (a) {
                return "嗪曕涵嗪權粊嗪ム簢" === a
            },
            meridiem: function (a, b, c) {
                return a < 12 ? "嗪曕涵嗪權粈嗪娻夯嗷夃翰" : "嗪曕涵嗪權粊嗪ム簢"
            },
            calendar: {
                sameDay: "[嗪∴悍嗷夃簷嗪掂粔嗷€嗪о亥嗪瞉 LT",
                nextDay: "[嗪∴悍嗷夃涵嗪粪粓嗪權粈嗪о亥嗪瞉 LT",
                nextWeek: "[嗪о罕嗪橾dddd[嗷溹粔嗪侧粈嗪о亥嗪瞉 LT",
                lastDay: "[嗪∴悍嗷夃骇嗪侧簷嗪權旱嗷夃粈嗪о亥嗪瞉 LT",
                lastWeek: "[嗪о罕嗪橾dddd[嗷佮亥嗷夃骇嗪權旱嗷夃粈嗪о亥嗪瞉 LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "嗪旱嗪� %s",
                past: "%s嗪溹粓嗪侧簷嗪∴翰",
                s: "嗪氞粛嗷堗粈嗪椸夯嗷堗翰嗷冟簲嗪о捍嗪權翰嗪椸旱",
                m: "1 嗪權翰嗪椸旱",
                mm: "%d 嗪權翰嗪椸旱",
                h: "1 嗪娻夯嗷堗骇嗷傕骸嗪�",
                hh: "%d 嗪娻夯嗷堗骇嗷傕骸嗪�",
                d: "1 嗪∴悍嗷�",
                dd: "%d 嗪∴悍嗷�",
                M: "1 嗷€嗪斷悍嗪簷",
                MM: "%d 嗷€嗪斷悍嗪簷",
                y: "1 嗪涏旱",
                yy: "%d 嗪涏旱"
            },
            dayOfMonthOrdinalParse: /(嗪椸旱嗷�)\d{1,2}/,
            ordinal: function (a) {
                return "嗪椸旱嗷�" + a
            }
        });
    //! moment.js locale configuration
    //! locale : Lithuanian [lt]
    //! author : Mindaugas Moz奴ras : https://github.com/mmozuras
    var nh = {
        m: "minut臈_minut臈s_minut臋",
        mm: "minut臈s_minu膷i懦_minutes",
        h: "valanda_valandos_valand膮",
        hh: "valandos_valand懦_valandas",
        d: "diena_dienos_dien膮",
        dd: "dienos_dien懦_dienas",
        M: "m臈nuo_m臈nesio_m臈nes寞",
        MM: "m臈nesiai_m臈nesi懦_m臈nesius",
        y: "metai_met懦_metus",
        yy: "metai_met懦_metus"
    };
    a.defineLocale("lt", {
        months: {
            format: "sausio_vasario_kovo_baland啪io_gegu啪臈s_bir啪elio_liepos_rugpj奴膷io_rugs臈jo_spalio_lapkri膷io_gruod啪io".split("_"),
            standalone: "sausis_vasaris_kovas_balandis_gegu啪臈_bir啪elis_liepa_rugpj奴tis_rugs臈jis_spalis_lapkritis_gruodis".split("_"),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
            format: "sekmadien寞_pirmadien寞_antradien寞_tre膷iadien寞_ketvirtadien寞_penktadien寞_拧e拧tadien寞".split("_"),
            standalone: "sekmadienis_pirmadienis_antradienis_tre膷iadienis_ketvirtadienis_penktadienis_拧e拧tadienis".split("_"),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_艩e拧".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_艩".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
            sameDay: "[艩iandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Pra臈jus寞] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "po %s",
            past: "prie拧 %s",
            s: Sd,
            m: Td,
            mm: Wd,
            h: Td,
            hh: Wd,
            d: Td,
            dd: Wd,
            M: Td,
            MM: Wd,
            y: Td,
            yy: Wd
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function (a) {
            return a + "-oji"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Latvian [lv]
    //! author : Kristaps Karlsons : https://github.com/skakri
    //! author : J膩nis Elmeris : https://github.com/JanisE
    var oh = {
        m: "min奴tes_min奴t膿m_min奴te_min奴tes".split("_"),
        mm: "min奴tes_min奴t膿m_min奴te_min奴tes".split("_"),
        h: "stundas_stund膩m_stunda_stundas".split("_"),
        hh: "stundas_stund膩m_stunda_stundas".split("_"),
        d: "dienas_dien膩m_diena_dienas".split("_"),
        dd: "dienas_dien膩m_diena_dienas".split("_"),
        M: "m膿ne拧a_m膿ne拧iem_m膿nesis_m膿ne拧i".split("_"),
        MM: "m膿ne拧a_m膿ne拧iem_m膿nesis_m膿ne拧i".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_")
    };
    a.defineLocale("lv", {
        months: "janv膩ris_febru膩ris_marts_apr墨lis_maijs_j奴nijs_j奴lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_j奴n_j奴l_aug_sep_okt_nov_dec".split("_"),
        weekdays: "sv膿tdiena_pirmdiena_otrdiena_tre拧diena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
            sameDay: "[艩odien pulksten] LT",
            nextDay: "[R墨t pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pag膩ju拧膩] dddd [pulksten] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "p膿c %s",
            past: "pirms %s",
            s: $d,
            m: Zd,
            mm: Yd,
            h: Zd,
            hh: Yd,
            d: Zd,
            dd: Yd,
            M: Zd,
            MM: Yd,
            y: Zd,
            yy: Yd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Montenegrin [me]
    //! author : Miodrag Nika膷 <miodrag@restartit.me> : https://github.com/miodragnikac
    var ph = {
        words: {
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mjesec", "mjeseca", "mjeseci"],
            yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function (a, b) {
            return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2]
        },
        translate: function (a, b, c) {
            var d = ph.words[c];
            return 1 === c.length ? b ? d[0] : d[1] : a + " " + ph.correctGrammaticalCase(a, d)
        }
    };
    a.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_膷etvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._膷et._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_膷e_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[ju膷e u] LT",
                lastWeek: function () {
                    var a = ["[pro拧le] [nedjelje] [u] LT", "[pro拧log] [ponedjeljka] [u] LT", "[pro拧log] [utorka] [u] LT", "[pro拧le] [srijede] [u] LT", "[pro拧log] [膷etvrtka] [u] LT", "[pro拧log] [petka] [u] LT", "[pro拧le] [subote] [u] LT"];
                    return a[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                m: ph.translate,
                mm: ph.translate,
                h: ph.translate,
                hh: ph.translate,
                d: "dan",
                dd: ph.translate,
                M: "mjesec",
                MM: ph.translate,
                y: "godinu",
                yy: ph.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : Maori [mi]
        //! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal
        a.defineLocale("mi", {
            months: "Kohi-t膩te_Hui-tanguru_Pout奴-te-rangi_Paenga-wh膩wh膩_Haratua_Pipiri_H艒ngoingoi_Here-turi-k艒k膩_Mahuru_Whiringa-膩-nuku_Whiringa-膩-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H艒ngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "R膩tapu_Mane_T奴rei_Wenerei_T膩ite_Paraire_H膩tarei".split("_"),
            weekdaysShort: "Ta_Ma_T奴_We_T膩i_Pa_H膩".split("_"),
            weekdaysMin: "Ta_Ma_T奴_We_T膩i_Pa_H膩".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te h膿kona ruarua",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}潞/,
            ordinal: "%d潞",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Macedonian [mk]
        //! author : Borislav Mickov : https://github.com/B0k0
        a.defineLocale("mk", {
            months: "褬邪薪褍邪褉懈_褎械胁褉褍邪褉懈_屑邪褉褌_邪锌褉懈谢_屑邪褬_褬褍薪懈_褬褍谢懈_邪胁谐褍褋褌_褋械锌褌械屑胁褉懈_芯泻褌芯屑胁褉懈_薪芯械屑胁褉懈_写械泻械屑胁褉懈".split("_"),
            monthsShort: "褬邪薪_褎械胁_屑邪褉_邪锌褉_屑邪褬_褬褍薪_褬褍谢_邪胁谐_褋械锌_芯泻褌_薪芯械_写械泻".split("_"),
            weekdays: "薪械写械谢邪_锌芯薪械写械谢薪懈泻_胁褌芯褉薪懈泻_褋褉械写邪_褔械褌胁褉褌芯泻_锌械褌芯泻_褋邪斜芯褌邪".split("_"),
            weekdaysShort: "薪械写_锌芯薪_胁褌芯_褋褉械_褔械褌_锌械褌_褋邪斜".split("_"),
            weekdaysMin: "薪e_锌o_胁褌_褋褉_褔械_锌械_褋a".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[袛械薪械褋 胁芯] LT",
                nextDay: "[校褌褉械 胁芯] LT",
                nextWeek: "[袙芯] dddd [胁芯] LT",
                lastDay: "[袙褔械褉邪 胁芯] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[袠蟹屑懈薪邪褌邪褌邪] dddd [胁芯] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[袠蟹屑懈薪邪褌懈芯褌] dddd [胁芯] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "锌芯褋谢械 %s",
                past: "锌褉械写 %s",
                s: "薪械泻芯谢泻褍 褋械泻褍薪写懈",
                m: "屑懈薪褍褌邪",
                mm: "%d 屑懈薪褍褌懈",
                h: "褔邪褋",
                hh: "%d 褔邪褋邪",
                d: "写械薪",
                dd: "%d 写械薪邪",
                M: "屑械褋械褑",
                MM: "%d 屑械褋械褑懈",
                y: "谐芯写懈薪邪",
                yy: "%d 谐芯写懈薪懈"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(械胁|械薪|褌懈|胁懈|褉懈|屑懈)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = a % 100;
                return 0 === a ? a + "-械胁" : 0 === c ? a + "-械薪" : c > 10 && c < 20 ? a + "-褌懈" : 1 === b ? a + "-胁懈" : 2 === b ? a + "-褉懈" : 7 === b || 8 === b ? a + "-屑懈" : a + "-褌懈"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : Malayalam [ml]
        //! author : Floyd Pink : https://github.com/floydpink
        a.defineLocale("ml", {
            months: "啻溹川嗟佮吹啻班纯_啻祮啻祶啻班祦啻掂窗啻縚啻淳嗟监礆嗟嵿礆嗟峗啻忇椽嗟嵿窗啻苦到_啻祰啻祶_啻溹祩嗟篲啻溹祩啻侧祱_啻撪礂啻膏祶啻编祶啻编祶_啻膏祮啻祶啻编祶啻编磦啻导_啻掄磿嗟嵿礋嗟嬥船嗟糭啻ㄠ吹啻傕船嗟糭啻∴纯啻膏磦啻导".split("_"),
            monthsShort: "啻溹川嗟�._啻祮啻祶啻班祦._啻淳嗟�._啻忇椽嗟嵿窗啻�._啻祰啻祶_啻溹祩嗟篲啻溹祩啻侧祱._啻撪礂._啻膏祮啻祶啻编祶啻�._啻掄磿嗟嵿礋嗟�._啻ㄠ吹啻�._啻∴纯啻膏磦.".split("_"),
            monthsParseExact: !0,
            weekdays: "啻炧淳啻幢啻距创嗟嵿礆_啻む纯啻權祶啻曕闯啻距创嗟嵿礆_啻氞祳啻掂祶啻掂淳啻脆祶啻歘啻祦啻о川啻距创嗟嵿礆_啻掂祶啻淳啻脆淳啻脆祶啻歘啻掂祮啻赤祶啻赤纯啻淳啻脆祶啻歘啻多川啻苦疮啻距创嗟嵿礆".split("_"),
            weekdaysShort: "啻炧淳啻导_啻む纯啻權祶啻曕稻_啻氞祳啻掂祶啻礯啻祦啻о祷_啻掂祶啻淳啻脆磦_啻掂祮啻赤祶啻赤纯_啻多川啻�".split("_"),
            weekdaysMin: "啻炧淳_啻む纯_啻氞祳_啻祦_啻掂祶啻淳_啻掂祮_啻�".split("_"),
            longDateFormat: {
                LT: "A h:mm -啻ㄠ祦",
                LTS: "A h:mm:ss -啻ㄠ祦",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -啻ㄠ祦",
                LLLL: "dddd, D MMMM YYYY, A h:mm -啻ㄠ祦"
            },
            calendar: {
                sameDay: "[啻囙川嗟嵿川嗟峕 LT",
                nextDay: "[啻ㄠ淳啻赤祮] LT",
                nextWeek: "dddd, LT",
                lastDay: "[啻囙川嗟嵿川啻侧祮] LT",
                lastWeek: "[啻曕创啻苦礊嗟嵿礊] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 啻曕创啻苦礊嗟嵿礊嗟�",
                past: "%s 啻祦嗟秽椽嗟�",
                s: "啻呧到啻� 啻ㄠ纯啻纯啻粪礄嗟嵿礄嗟�",
                m: "啻掄窗嗟� 啻纯啻ㄠ纯啻编祶啻编祶",
                mm: "%d 啻纯啻ㄠ纯啻编祶啻编祶",
                h: "啻掄窗嗟� 啻矗啻苦磿嗟嵿磿嗟傕导",
                hh: "%d 啻矗啻苦磿嗟嵿磿嗟傕导",
                d: "啻掄窗嗟� 啻︵纯啻掂锤啻�",
                dd: "%d 啻︵纯啻掂锤啻�",
                M: "啻掄窗嗟� 啻淳啻膏磦",
                MM: "%d 啻淳啻膏磦",
                y: "啻掄窗嗟� 啻掂导啻粪磦",
                yy: "%d 啻掂导啻粪磦"
            },
            meridiemParse: /啻班淳啻む祶啻班纯|啻班淳啻掂纯啻侧祮|啻夃礆嗟嵿礆 啻曕创啻苦礊嗟嵿礊嗟峾啻掂祱啻曕祦啻ㄠ祶啻ㄠ祰啻班磦|啻班淳啻む祶啻班纯/i,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "啻班淳啻む祶啻班纯" === b && a >= 4 || "啻夃礆嗟嵿礆 啻曕创啻苦礊嗟嵿礊嗟�" === b || "啻掂祱啻曕祦啻ㄠ祶啻ㄠ祰啻班磦" === b ? a + 12 : a
            },
            meridiem: function (a, b, c) {
                return a < 4 ? "啻班淳啻む祶啻班纯" : a < 12 ? "啻班淳啻掂纯啻侧祮" : a < 17 ? "啻夃礆嗟嵿礆 啻曕创啻苦礊嗟嵿礊嗟�" : a < 20 ? "啻掂祱啻曕祦啻ㄠ祶啻ㄠ祰啻班磦" : "啻班淳啻む祶啻班纯"
            }
        });
    //! moment.js locale configuration
    //! locale : Marathi [mr]
    //! author : Harshad Kale : https://github.com/kalehv
    //! author : Vivek Athalye : https://github.com/vnathalye
    var qh = {
            1: "啷�",
            2: "啷�",
            3: "啷�",
            4: "啷�",
            5: "啷�",
            6: "啷�",
            7: "啷�",
            8: "啷�",
            9: "啷�",
            0: "啷�"
        },
        rh = {
            "啷�": "1",
            "啷�": "2",
            "啷�": "3",
            "啷�": "4",
            "啷�": "5",
            "啷�": "6",
            "啷�": "7",
            "啷�": "8",
            "啷�": "9",
            "啷�": "0"
        };
    a.defineLocale("mr", {
            months: "啶溹ぞ啶ㄠ啶掂ぞ啶班_啶啶啶班啶掂ぞ啶班_啶ぞ啶班啶歘啶忇お啷嵿ぐ啶苦げ_啶_啶溹啶╛啶溹啶侧_啶戉啶膏啶焈啶膏お啷嵿啷囙啶ぐ_啶戉啷嵿啷嬥が啶癬啶ㄠ啶掂啶灌啶傕が啶癬啶∴た啶膏啶傕が啶�".split("_"),
            monthsShort: "啶溹ぞ啶ㄠ._啶啶啶班._啶ぞ啶班啶�._啶忇お啷嵿ぐ啶�._啶._啶溹啶�._啶溹啶侧._啶戉._啶膏お啷嵿啷囙._啶戉啷嵿啷�._啶ㄠ啶掂啶灌啶�._啶∴た啶膏啶�.".split("_"),
            monthsParseExact: !0,
            weekdays: "啶班さ啶苦さ啶距ぐ_啶膏啶さ啶距ぐ_啶啶椸こ啶掂ぞ啶癬啶啶оさ啶距ぐ_啶椸啶班啶掂ぞ啶癬啶多啶曕啶班さ啶距ぐ_啶多え啶苦さ啶距ぐ".split("_"),
            weekdaysShort: "啶班さ啶縚啶膏啶甠啶啶椸こ_啶啶啶椸啶班_啶多啶曕啶癬啶多え啶�".split("_"),
            weekdaysMin: "啶癬啶膏_啶_啶_啶椸_啶多_啶�".split("_"),
            longDateFormat: {
                LT: "A h:mm 啶掂ぞ啶溹い啶�",
                LTS: "A h:mm:ss 啶掂ぞ啶溹い啶�",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm 啶掂ぞ啶溹い啶�",
                LLLL: "dddd, D MMMM YYYY, A h:mm 啶掂ぞ啶溹い啶�"
            },
            calendar: {
                sameDay: "[啶嗋] LT",
                nextDay: "[啶夃う啷嵿く啶綸 LT",
                nextWeek: "dddd, LT",
                lastDay: "[啶曕ぞ啶瞉 LT",
                lastWeek: "[啶ぞ啶椸啶瞉 dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s啶ぇ啷嵿く啷�",
                past: "%s啶啶班啶掂",
                s: _d,
                m: _d,
                mm: _d,
                h: _d,
                hh: _d,
                d: _d,
                dd: _d,
                M: _d,
                MM: _d,
                y: _d,
                yy: _d
            },
            preparse: function (a) {
                return a.replace(/[啷оエ啷┼オ啷ガ啷ギ啷ウ]/g, function (a) {
                    return rh[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return qh[a]
                })
            },
            meridiemParse: /啶班ぞ啶む啶班|啶膏啶距こ啷€|啶︵啶ぞ啶班|啶膏ぞ啶啶曕ぞ啶赤/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "啶班ぞ啶む啶班" === b ? a < 4 ? a : a + 12 : "啶膏啶距こ啷€" === b ? a : "啶︵啶ぞ啶班" === b ? a >= 10 ? a : a + 12 : "啶膏ぞ啶啶曕ぞ啶赤" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return a < 4 ? "啶班ぞ啶む啶班" : a < 10 ? "啶膏啶距こ啷€" : a < 17 ? "啶︵啶ぞ啶班" : a < 20 ? "啶膏ぞ啶啶曕ぞ啶赤" : "啶班ぞ啶む啶班"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }),
        //! moment.js locale configuration
        //! locale : Malay [ms-my]
        //! note : DEPRECATED, the correct one is [ms]
        //! author : Weldan Jamili : https://github.com/weldan
        a.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : Malay [ms]
        //! author : Weldan Jamili : https://github.com/weldan
        a.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    //! moment.js locale configuration
    //! locale : Burmese [my]
    //! author : Squar team, mysquar.com
    //! author : David Rossellat : https://github.com/gholadr
    //! author : Tin Aung Lin : https://github.com/thanyawzinmin
    var sh = {
            1: "醽�",
            2: "醽�",
            3: "醽�",
            4: "醽�",
            5: "醽�",
            6: "醽�",
            7: "醽�",
            8: "醽�",
            9: "醽�",
            0: "醽€"
        },
        th = {
            "醽�": "1",
            "醽�": "2",
            "醽�": "3",
            "醽�": "4",
            "醽�": "5",
            "醽�": "6",
            "醽�": "7",
            "醽�": "8",
            "醽�": "9",
            "醽€": "0"
        };
    a.defineLocale("my", {
            months: "醼囜€斸€横€斸€濁€€涐€甠醼栣€贬€栣€贬€€横€濁€€涐€甠醼欋€愥€篲醼п€曖€坚€甠醼欋€盻醼囜€结€斸€篲醼囜€搬€溼€€€勧€篲醼炨€坚€傖€€愥€篲醼呩€€醼横€愥€勧€横€樶€琠醼♂€贬€€€醼横€愥€€€樶€琠醼斸€€€濁€勧€横€樶€琠醼掅€€囜€勧€横€樶€�".split("_"),
            monthsShort: "醼囜€斸€篲醼栣€盻醼欋€愥€篲醼曖€坚€甠醼欋€盻醼囜€结€斸€篲醼溼€€€勧€篲醼炨€糭醼呩€€醼篲醼♂€贬€€€醼篲醼斸€€痏醼掅€�".split("_"),
            weekdays: "醼愥€斸€勧€横€贯€傖€斸€结€盻醼愥€斸€勧€横€贯€溼€琠醼♂€勧€横€贯€傖€玙醼椺€€掅€贯€撫€熱€搬€竉醼€醼坚€€炨€曖€愥€贬€竉醼炨€贬€€€醼坚€琠醼呩€斸€�".split("_"),
            weekdaysShort: "醼斸€结€盻醼溼€琠醼傖€玙醼熱€搬€竉醼€醼坚€琠醼炨€贬€琠醼斸€�".split("_"),
            weekdaysMin: "醼斸€结€盻醼溼€琠醼傖€玙醼熱€搬€竉醼€醼坚€琠醼炨€贬€琠醼斸€�".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[醼氠€斸€�.] LT [醼欋€踞€琞",
                nextDay: "[醼欋€斸€€醼横€栣€坚€斸€篯 LT [醼欋€踞€琞",
                nextWeek: "dddd LT [醼欋€踞€琞",
                lastDay: "[醼欋€斸€�.醼€] LT [醼欋€踞€琞",
                lastWeek: "[醼曖€坚€€羔€佱€册€丰€炨€贬€琞 dddd LT [醼欋€踞€琞",
                sameElse: "L"
            },
            relativeTime: {
                future: "醼溼€€欋€娽€横€� %s 醼欋€踞€�",
                past: "醼溼€结€斸€横€佱€册€丰€炨€贬€� %s 醼€",
                s: "醼呩€€醼贯€€醼斸€�.醼♂€斸€娽€横€羔€勧€氠€�",
                m: "醼愥€呩€横€欋€€斸€呩€�",
                mm: "%d 醼欋€€斸€呩€�",
                h: "醼愥€呩€横€斸€€涐€�",
                hh: "%d 醼斸€€涐€�",
                d: "醼愥€呩€横€涐€€醼�",
                dd: "%d 醼涐€€醼�",
                M: "醼愥€呩€横€�",
                MM: "%d 醼�",
                y: "醼愥€呩€横€斸€踞€呩€�",
                yy: "%d 醼斸€踞€呩€�"
            },
            preparse: function (a) {
                return a.replace(/[醽佱亗醽冡亜醽呩亞醽囜亪醽夅亐]/g, function (a) {
                    return th[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return sh[a]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Norwegian Bokm氓l [nb]
        //! authors : Espen Hovlandsdal : https://github.com/rexxars
        //!           Sigurd Gartmann : https://github.com/sigurdga
        a.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "s酶ndag_mandag_tirsdag_onsdag_torsdag_fredag_l酶rdag".split("_"),
            weekdaysShort: "s酶._ma._ti._on._to._fr._l酶.".split("_"),
            weekdaysMin: "s酶_ma_ti_on_to_fr_l酶".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i g氓r kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en m氓ned",
                MM: "%d m氓neder",
                y: "ett 氓r",
                yy: "%d 氓r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    //! moment.js locale configuration
    //! locale : Nepalese [ne]
    //! author : suvash : https://github.com/suvash
    var uh = {
            1: "啷�",
            2: "啷�",
            3: "啷�",
            4: "啷�",
            5: "啷�",
            6: "啷�",
            7: "啷�",
            8: "啷�",
            9: "啷�",
            0: "啷�"
        },
        vh = {
            "啷�": "1",
            "啷�": "2",
            "啷�": "3",
            "啷�": "4",
            "啷�": "5",
            "啷�": "6",
            "啷�": "7",
            "啷�": "8",
            "啷�": "9",
            "啷�": "0"
        };
    a.defineLocale("ne", {
        months: "啶溹え啶掂ぐ啷€_啶啶啶班啶掂ぐ啷€_啶ぞ啶班啶歘啶呧お啷嵿ぐ啶苦げ_啶_啶溹啶╛啶溹啶侧ぞ啶坃啶呧啶粪啶焈啶膏啶啶熰啶啶ぐ_啶呧啷嵿啷嬥が啶癬啶ㄠ啶啶啶ぐ_啶∴た啶膏啶啶ぐ".split("_"),
        monthsShort: "啶溹え._啶啶啶班._啶ぞ啶班啶歘啶呧お啷嵿ぐ啶�._啶_啶溹啶╛啶溹啶侧ぞ啶�._啶呧._啶膏啶啶�._啶呧啷嵿啷�._啶ㄠ啶._啶∴た啶膏.".split("_"),
        monthsParseExact: !0,
        weekdays: "啶嗋啶むが啶距ぐ_啶膏啶が啶距ぐ_啶啷嵿啶侧が啶距ぐ_啶啶оが啶距ぐ_啶た啶灌た啶ぞ啶癬啶多啶曕啶班が啶距ぐ_啶多え啶苦が啶距ぐ".split("_"),
        weekdaysShort: "啶嗋啶�._啶膏啶�._啶啷嵿啶�._啶啶�._啶た啶灌た._啶多啶曕啶�._啶多え啶�.".split("_"),
        weekdaysMin: "啶�._啶膏._啶._啶._啶た._啶多._啶�.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "A啶曕 h:mm 啶啷�",
            LTS: "A啶曕 h:mm:ss 啶啷�",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A啶曕 h:mm 啶啷�",
            LLLL: "dddd, D MMMM YYYY, A啶曕 h:mm 啶啷�"
        },
        preparse: function (a) {
            return a.replace(/[啷оエ啷┼オ啷ガ啷ギ啷ウ]/g, function (a) {
                return vh[a]
            })
        },
        postformat: function (a) {
            return a.replace(/\d/g, function (a) {
                return uh[a]
            })
        },
        meridiemParse: /啶班ぞ啶むた|啶た啶灌ぞ啶▅啶︵た啶夃啶膏|啶膏ぞ啶佮/,
        meridiemHour: function (a, b) {
            return 12 === a && (a = 0), "啶班ぞ啶むた" === b ? a < 4 ? a : a + 12 : "啶た啶灌ぞ啶�" === b ? a : "啶︵た啶夃啶膏" === b ? a >= 10 ? a : a + 12 : "啶膏ぞ啶佮" === b ? a + 12 : void 0
        },
        meridiem: function (a, b, c) {
            return a < 3 ? "啶班ぞ啶むた" : a < 12 ? "啶た啶灌ぞ啶�" : a < 16 ? "啶︵た啶夃啶膏" : a < 20 ? "啶膏ぞ啶佮" : "啶班ぞ啶むた"
        },
        calendar: {
            sameDay: "[啶嗋] LT",
            nextDay: "[啶啶侧た] LT",
            nextWeek: "[啶嗋啶佮う啷媇 dddd[,] LT",
            lastDay: "[啶灌た啶溹] LT",
            lastWeek: "[啶椸啶曕] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s啶ぞ",
            past: "%s 啶呧啶距ぁ啶�",
            s: "啶曕啶灌 啶曕啶粪ぃ",
            m: "啶忇 啶た啶ㄠ啶�",
            mm: "%d 啶た啶ㄠ啶�",
            h: "啶忇 啶樴ぃ啷嵿啶�",
            hh: "%d 啶樴ぃ啷嵿啶�",
            d: "啶忇 啶︵た啶�",
            dd: "%d 啶︵た啶�",
            M: "啶忇 啶す啶苦え啶�",
            MM: "%d 啶す啶苦え啶�",
            y: "啶忇 啶ぐ啷嵿し",
            yy: "%d 啶ぐ啷嵿し"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    //! moment.js locale configuration
    //! locale : Dutch (Belgium) [nl-be]
    //! author : Joris R枚ling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    var wh = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        xh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        yh = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        zh = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    a.defineLocale("nl-be", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function (a, b) {
            return a ? /-MMM-/.test(b) ? xh[a.month()] : wh[a.month()] : wh
        },
        monthsRegex: zh,
        monthsShortRegex: zh,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: yh,
        longMonthsParse: yh,
        shortMonthsParse: yh,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            m: "茅茅n minuut",
            mm: "%d minuten",
            h: "茅茅n uur",
            hh: "%d uur",
            d: "茅茅n dag",
            dd: "%d dagen",
            M: "茅茅n maand",
            MM: "%d maanden",
            y: "茅茅n jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (a) {
            return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Dutch [nl]
    //! author : Joris R枚ling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    var Ah = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        Bh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        Ch = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        Dh = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    a.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (a, b) {
                return a ? /-MMM-/.test(b) ? Bh[a.month()] : Ah[a.month()] : Ah
            },
            monthsRegex: Dh,
            monthsShortRegex: Dh,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: Ch,
            longMonthsParse: Ch,
            shortMonthsParse: Ch,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "茅茅n minuut",
                mm: "%d minuten",
                h: "茅茅n uur",
                hh: "%d uur",
                d: "茅茅n dag",
                dd: "%d dagen",
                M: "茅茅n maand",
                MM: "%d maanden",
                y: "茅茅n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (a) {
                return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Nynorsk [nn]
        //! author : https://github.com/mechuwind
        a.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_m氓ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_m氓n_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_m氓_ty_on_to_fr_l酶".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I g氓r klokka] LT",
                lastWeek: "[F酶reg氓ande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein m氓nad",
                MM: "%d m氓nader",
                y: "eit 氓r",
                yy: "%d 氓r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    //! moment.js locale configuration
    //! locale : Punjabi (India) [pa-in]
    //! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit
    var Eh = {
            1: "喋�",
            2: "喋�",
            3: "喋�",
            4: "喋�",
            5: "喋�",
            6: "喋�",
            7: "喋�",
            8: "喋�",
            9: "喋�",
            0: "喋�"
        },
        Fh = {
            "喋�": "1",
            "喋�": "2",
            "喋�": "3",
            "喋�": "4",
            "喋�": "5",
            "喋�": "6",
            "喋�": "7",
            "喋�": "8",
            "喋�": "9",
            "喋�": "0"
        };
    a.defineLocale("pa-in", {
        months: "啜溹è啜掂ò喋€_啜啜班ǖ啜班﹢_啜ň啜班_啜呧í喋嵿ò喋堗ú_啜▓_啜溹﹤啜╛啜溹﹣啜侧ň啜坃啜呧啜膏à_啜膏à喋班ì啜癬啜呧〞啜む﹤啜ò_啜ㄠǖ喋班ì啜癬啜︵ǜ喋班ì啜�".split("_"),
        monthsShort: "啜溹è啜掂ò喋€_啜啜班ǖ啜班﹢_啜ň啜班_啜呧í喋嵿ò喋堗ú_啜▓_啜溹﹤啜╛啜溹﹣啜侧ň啜坃啜呧啜膏à_啜膏à喋班ì啜癬啜呧〞啜む﹤啜ò_啜ㄠǖ喋班ì啜癬啜︵ǜ喋班ì啜�".split("_"),
        weekdays: "啜愢à啜掂ň啜癬啜膏啜ǖ啜距ò_啜┌啜椸ú啜掂ň啜癬啜﹣啜оǖ啜距ò_啜掂﹢啜班ǖ啜距ò_啜膏喋佮┍啜曕ò啜掂ň啜癬啜膏啜ㄠ﹢啜氞ò啜掂ň啜�".split("_"),
        weekdaysShort: "啜愢à_啜膏啜甠啜┌啜椸ú_啜﹣啜啜掂﹢啜癬啜膏喋佮〞啜癬啜膏啜ㄠ﹢".split("_"),
        weekdaysMin: "啜愢à_啜膏啜甠啜┌啜椸ú_啜﹣啜啜掂﹢啜癬啜膏喋佮〞啜癬啜膏啜ㄠ﹢".split("_"),
        longDateFormat: {
            LT: "A h:mm 啜掂喋�",
            LTS: "A h:mm:ss 啜掂喋�",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm 啜掂喋�",
            LLLL: "dddd, D MMMM YYYY, A h:mm 啜掂喋�"
        },
        calendar: {
            sameDay: "[啜呧] LT",
            nextDay: "[啜曕ú] LT",
            nextWeek: "dddd, LT",
            lastDay: "[啜曕ú] LT",
            lastWeek: "[啜ǹ啜涏ú喋嘳 dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s 啜掂ǹ喋编",
            past: "%s 啜ǹ啜涏ú喋�",
            s: "啜曕﹣啜� 啜膏〞啜苦┌啜�",
            m: "啜囙〞 啜ǹ喋班",
            mm: "%d 啜ǹ喋班",
            h: "啜囙┍啜� 啜樴┌啜熰ň",
            hh: "%d 啜樴┌啜熰﹪",
            d: "啜囙┍啜� 啜︵ǹ啜�",
            dd: "%d 啜︵ǹ啜�",
            M: "啜囙┍啜� 啜ü喋€啜ㄠň",
            MM: "%d 啜ü喋€啜ㄠ﹪",
            y: "啜囙┍啜� 啜膏ň啜�",
            yy: "%d 啜膏ň啜�"
        },
        preparse: function (a) {
            return a.replace(/[喋о┄喋┼┆喋┈喋┊喋│]/g, function (a) {
                return Fh[a]
            })
        },
        postformat: function (a) {
            return a.replace(/\d/g, function (a) {
                return Eh[a]
            })
        },
        meridiemParse: /啜班ň啜啜膏ǖ喋囙ò|啜︵﹣啜ü啜苦ò|啜膏啜距ó/,
        meridiemHour: function (a, b) {
            return 12 === a && (a = 0), "啜班ň啜�" === b ? a < 4 ? a : a + 12 : "啜膏ǖ喋囙ò" === b ? a : "啜︵﹣啜ü啜苦ò" === b ? a >= 10 ? a : a + 12 : "啜膏啜距ó" === b ? a + 12 : void 0
        },
        meridiem: function (a, b, c) {
            return a < 4 ? "啜班ň啜�" : a < 10 ? "啜膏ǖ喋囙ò" : a < 17 ? "啜︵﹣啜ü啜苦ò" : a < 20 ? "啜膏啜距ó" : "啜班ň啜�"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    //! moment.js locale configuration
    //! locale : Polish [pl]
    //! author : Rafal Hirsz : https://github.com/evoL
    var Gh = "stycze艅_luty_marzec_kwiecie艅_maj_czerwiec_lipiec_sierpie艅_wrzesie艅_pa藕dziernik_listopad_grudzie艅".split("_"),
        Hh = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze艣nia_pa藕dziernika_listopada_grudnia".split("_");
    a.defineLocale("pl", {
            months: function (a, b) {
                return a ? "" === b ? "(" + Hh[a.month()] + "|" + Gh[a.month()] + ")" : /D MMMM/.test(b) ? Hh[a.month()] : Gh[a.month()] : Gh
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa藕_lis_gru".split("_"),
            weekdays: "niedziela_poniedzia艂ek_wtorek_艣roda_czwartek_pi膮tek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_艣r_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_艢r_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dzi艣 o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: "[W] dddd [o] LT",
                lastDay: "[Wczoraj o] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zesz艂膮 niedziel臋 o] LT";
                        case 3:
                            return "[W zesz艂膮 艣rod臋 o] LT";
                        case 6:
                            return "[W zesz艂膮 sobot臋 o] LT";
                        default:
                            return "[W zesz艂y] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                m: be,
                mm: be,
                h: be,
                hh: be,
                d: "1 dzie艅",
                dd: "%d dni",
                M: "miesi膮c",
                MM: be,
                y: "rok",
                yy: be
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Portuguese (Brazil) [pt-br]
        //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
        a.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Mar莽o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Ter莽a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S谩bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S谩b".split("_"),
            weekdaysMin: "Do_2陋_3陋_4陋_5陋_6陋_S谩".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [脿s] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [脿s] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje 脿s] LT",
                nextDay: "[Amanh茫 脿s] LT",
                nextWeek: "dddd [脿s] LT",
                lastDay: "[Ontem 脿s] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[脷ltimo] dddd [脿s] LT" : "[脷ltima] dddd [脿s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atr谩s",
                s: "poucos segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um m锚s",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}潞/,
            ordinal: "%d潞"
        }),
        //! moment.js locale configuration
        //! locale : Portuguese [pt]
        //! author : Jefferson : https://github.com/jalex79
        a.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Mar莽o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-Feira_Ter莽a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_S谩bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S谩b".split("_"),
            weekdaysMin: "Do_2陋_3陋_4陋_5陋_6陋_S谩".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje 脿s] LT",
                nextDay: "[Amanh茫 脿s] LT",
                nextWeek: "dddd [脿s] LT",
                lastDay: "[Ontem 脿s] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[脷ltimo] dddd [脿s] LT" : "[脷ltima] dddd [脿s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "h谩 %s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um m锚s",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}潞/,
            ordinal: "%d潞",
            week: {
                dow: 1,
                doy: 4
            }
        }), a.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminic膬_luni_mar葲i_miercuri_joi_vineri_s芒mb膬t膬".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S芒m".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S芒".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[m芒ine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s 卯n urm膬",
                s: "c芒teva secunde",
                m: "un minut",
                mm: ce,
                h: "o or膬",
                hh: ce,
                d: "o zi",
                dd: ce,
                M: "o lun膬",
                MM: ce,
                y: "un an",
                yy: ce
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    var Ih = [/^褟薪胁/i, /^褎械胁/i, /^屑邪褉/i, /^邪锌褉/i, /^屑邪[泄褟]/i, /^懈褞薪/i, /^懈褞谢/i, /^邪胁谐/i, /^褋械薪/i, /^芯泻褌/i, /^薪芯褟/i, /^写械泻/i];
    a.defineLocale("ru", {
        months: {
            format: "褟薪胁邪褉褟_褎械胁褉邪谢褟_屑邪褉褌邪_邪锌褉械谢褟_屑邪褟_懈褞薪褟_懈褞谢褟_邪胁谐褍褋褌邪_褋械薪褌褟斜褉褟_芯泻褌褟斜褉褟_薪芯褟斜褉褟_写械泻邪斜褉褟".split("_"),
            standalone: "褟薪胁邪褉褜_褎械胁褉邪谢褜_屑邪褉褌_邪锌褉械谢褜_屑邪泄_懈褞薪褜_懈褞谢褜_邪胁谐褍褋褌_褋械薪褌褟斜褉褜_芯泻褌褟斜褉褜_薪芯褟斜褉褜_写械泻邪斜褉褜".split("_")
        },
        monthsShort: {
            format: "褟薪胁._褎械胁褉._屑邪褉._邪锌褉._屑邪褟_懈褞薪褟_懈褞谢褟_邪胁谐._褋械薪褌._芯泻褌._薪芯褟斜._写械泻.".split("_"),
            standalone: "褟薪胁._褎械胁褉._屑邪褉褌_邪锌褉._屑邪泄_懈褞薪褜_懈褞谢褜_邪胁谐._褋械薪褌._芯泻褌._薪芯褟斜._写械泻.".split("_")
        },
        weekdays: {
            standalone: "胁芯褋泻褉械褋械薪褜械_锌芯薪械写械谢褜薪懈泻_胁褌芯褉薪懈泻_褋褉械写邪_褔械褌胁械褉谐_锌褟褌薪懈褑邪_褋褍斜斜芯褌邪".split("_"),
            format: "胁芯褋泻褉械褋械薪褜械_锌芯薪械写械谢褜薪懈泻_胁褌芯褉薪懈泻_褋褉械写褍_褔械褌胁械褉谐_锌褟褌薪懈褑褍_褋褍斜斜芯褌褍".split("_"),
            isFormat: /\[ ?[袙胁] ?(?:锌褉芯褕谢褍褞|褋谢械写褍褞褖褍褞|褝褌褍)? ?\] ?dddd/
        },
        weekdaysShort: "胁褋_锌薪_胁褌_褋褉_褔褌_锌褌_褋斜".split("_"),
        weekdaysMin: "胁褋_锌薪_胁褌_褋褉_褔褌_锌褌_褋斜".split("_"),
        monthsParse: Ih,
        longMonthsParse: Ih,
        shortMonthsParse: Ih,
        monthsRegex: /^(褟薪胁邪褉[褜褟]|褟薪胁\.?|褎械胁褉邪谢[褜褟]|褎械胁褉?\.?|屑邪褉褌邪?|屑邪褉\.?|邪锌褉械谢[褜褟]|邪锌褉\.?|屑邪[泄褟]|懈褞薪[褜褟]|懈褞薪\.?|懈褞谢[褜褟]|懈褞谢\.?|邪胁谐褍褋褌邪?|邪胁谐\.?|褋械薪褌褟斜褉[褜褟]|褋械薪褌?\.?|芯泻褌褟斜褉[褜褟]|芯泻褌\.?|薪芯褟斜褉[褜褟]|薪芯褟斜?\.?|写械泻邪斜褉[褜褟]|写械泻\.?)/i,
        monthsShortRegex: /^(褟薪胁邪褉[褜褟]|褟薪胁\.?|褎械胁褉邪谢[褜褟]|褎械胁褉?\.?|屑邪褉褌邪?|屑邪褉\.?|邪锌褉械谢[褜褟]|邪锌褉\.?|屑邪[泄褟]|懈褞薪[褜褟]|懈褞薪\.?|懈褞谢[褜褟]|懈褞谢\.?|邪胁谐褍褋褌邪?|邪胁谐\.?|褋械薪褌褟斜褉[褜褟]|褋械薪褌?\.?|芯泻褌褟斜褉[褜褟]|芯泻褌\.?|薪芯褟斜褉[褜褟]|薪芯褟斜?\.?|写械泻邪斜褉[褜褟]|写械泻\.?)/i,
        monthsStrictRegex: /^(褟薪胁邪褉[褟褜]|褎械胁褉邪谢[褟褜]|屑邪褉褌邪?|邪锌褉械谢[褟褜]|屑邪[褟泄]|懈褞薪[褟褜]|懈褞谢[褟褜]|邪胁谐褍褋褌邪?|褋械薪褌褟斜褉[褟褜]|芯泻褌褟斜褉[褟褜]|薪芯褟斜褉[褟褜]|写械泻邪斜褉[褟褜])/i,
        monthsShortStrictRegex: /^(褟薪胁\.|褎械胁褉?\.|屑邪褉[褌.]|邪锌褉\.|屑邪[褟泄]|懈褞薪[褜褟.]|懈褞谢[褜褟.]|邪胁谐\.|褋械薪褌?\.|芯泻褌\.|薪芯褟斜?\.|写械泻\.)/i,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY 谐.",
            LLL: "D MMMM YYYY 谐., HH:mm",
            LLLL: "dddd, D MMMM YYYY 谐., HH:mm"
        },
        calendar: {
            sameDay: "[小械谐芯写薪褟 胁] LT",
            nextDay: "[袟邪胁褌褉邪 胁] LT",
            lastDay: "[袙褔械褉邪 胁] LT",
            nextWeek: function (a) {
                if (a.week() === this.week()) return 2 === this.day() ? "[袙芯] dddd [胁] LT" : "[袙] dddd [胁] LT";
                switch (this.day()) {
                    case 0:
                        return "[袙 褋谢械写褍褞褖械械] dddd [胁] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[袙 褋谢械写褍褞褖懈泄] dddd [胁] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[袙 褋谢械写褍褞褖褍褞] dddd [胁] LT"
                }
            },
            lastWeek: function (a) {
                if (a.week() === this.week()) return 2 === this.day() ? "[袙芯] dddd [胁] LT" : "[袙] dddd [胁] LT";
                switch (this.day()) {
                    case 0:
                        return "[袙 锌褉芯褕谢芯械] dddd [胁] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[袙 锌褉芯褕谢褘泄] dddd [胁] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[袙 锌褉芯褕谢褍褞] dddd [胁] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "褔械褉械蟹 %s",
            past: "%s 薪邪蟹邪写",
            s: "薪械褋泻芯谢褜泻芯 褋械泻褍薪写",
            m: ee,
            mm: ee,
            h: "褔邪褋",
            hh: ee,
            d: "写械薪褜",
            dd: ee,
            M: "屑械褋褟褑",
            MM: ee,
            y: "谐芯写",
            yy: ee
        },
        meridiemParse: /薪芯褔懈|褍褌褉邪|写薪褟|胁械褔械褉邪/i,
        isPM: function (a) {
            return /^(写薪褟|胁械褔械褉邪)$/.test(a)
        },
        meridiem: function (a, b, c) {
            return a < 4 ? "薪芯褔懈" : a < 12 ? "褍褌褉邪" : a < 17 ? "写薪褟" : "胁械褔械褉邪"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(泄|谐芯|褟)/,
        ordinal: function (a, b) {
            switch (b) {
                case "M":
                case "d":
                case "DDD":
                    return a + "-泄";
                case "D":
                    return a + "-谐芯";
                case "w":
                case "W":
                    return a + "-褟";
                default:
                    return a
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    //! moment.js locale configuration
    //! locale : Sindhi [sd]
    //! author : Narain Sagar : https://github.com/narainsagar
    var Jh = ["噩賳賵乇賷", "賮賷亘乇賵乇賷", "賲丕乇趩", "丕倬乇賷賱", "賲卅賷", "噩賵賳", "噩賵賱丕亍賽", "丌诏爻俳", "爻賷倬俳賲亘乇", "丌讵俳賵亘乇", "賳賵賲亘乇", "趭爻賲亘乇"],
        Kh = ["丌趩乇", "爻賵賲乇", "丕诒丕乇賵", "丕乇亘毓", "禺賲賷爻", "噩賲毓", "趪賳趪乇"];
    a.defineLocale("sd", {
            months: Jh,
            monthsShort: Jh,
            weekdays: Kh,
            weekdaysShort: Kh,
            weekdaysMin: Kh,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd貙 D MMMM YYYY HH:mm"
            },
            meridiemParse: /氐亘丨|卮丕賲/,
            isPM: function (a) {
                return "卮丕賲" === a
            },
            meridiem: function (a, b, c) {
                return a < 12 ? "氐亘丨" : "卮丕賲"
            },
            calendar: {
                sameDay: "[丕趧] LT",
                nextDay: "[爻趢丕诨賷] LT",
                nextWeek: "dddd [丕诔賷賳 賴賮鬲賷 鬲賷] LT",
                lastDay: "[讵丕賱賴賴] LT",
                lastWeek: "[诏夭乇賷賱 賴賮鬲賷] dddd [鬲賷] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 倬賵亍",
                past: "%s 丕诔",
                s: "趩賳丿 爻賷讵賳趭",
                m: "賴讵 賲賳俳",
                mm: "%d 賲賳俳",
                h: "賴讵 讵賱丕讵",
                hh: "%d 讵賱丕讵",
                d: "賴讵 趶賷賳賴賳",
                dd: "%d 趶賷賳賴賳",
                M: "賴讵 賲賴賷賳賵",
                MM: "%d 賲賴賷賳丕",
                y: "賴讵 爻丕賱",
                yy: "%d 爻丕賱"
            },
            preparse: function (a) {
                return a.replace(/貙/g, ",")
            },
            postformat: function (a) {
                return a.replace(/,/g, "貙")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Northern Sami [se]
        //! authors : B氓rd Rolstad Henriksen : https://github.com/karamell
        a.defineLocale("se", {
            months: "o膽膽ajagem谩nnu_guovvam谩nnu_njuk膷am谩nnu_cuo艐om谩nnu_miessem谩nnu_geassem谩nnu_suoidnem谩nnu_borgem谩nnu_膷ak膷am谩nnu_golggotm谩nnu_sk谩bmam谩nnu_juovlam谩nnu".split("_"),
            monthsShort: "o膽膽j_guov_njuk_cuo_mies_geas_suoi_borg_膷ak膷_golg_sk谩b_juov".split("_"),
            weekdays: "sotnabeaivi_vuoss谩rga_ma艐艐eb谩rga_gaskavahkku_duorastat_bearjadat_l谩vvardat".split("_"),
            weekdaysShort: "sotn_vuos_ma艐_gask_duor_bear_l谩v".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s gea啪es",
                past: "ma艐it %s",
                s: "moadde sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta m谩nnu",
                MM: "%d m谩nut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Sinhalese [si]
        //! author : Sampath Sitinamaluwa : https://github.com/sampathsris
        a.defineLocale("si", {
            months: "喽⑧侗喾€喾忇痘喾抇喽脆窓喽多痘喾€喾忇痘喾抇喽膏窂喽秽穵喽窋_喽呧洞喾娾€嵿痘喾氞督喾奯喽膏窅喽亨窉_喽⑧窎喽编窉_喽⑧窎喽洁窉_喽呧稖喾澿穬喾娻董喾擾喾冟窅喽脆穵喽窅喽膏穵喽多痘喾奯喽斷稓喾娻董喾澿抖喽秽穵_喽编窚喾€喾愢陡喾娻抖喽秽穵_喽窓喾冟窅喽膏穵喽多痘喾�".split("_"),
            monthsShort: "喽⑧侗_喽脆窓喽禵喽膏窂喽秽穵_喽呧洞喾奯喽膏窅喽亨窉_喽⑧窎喽编窉_喽⑧窎喽洁窉_喽呧稖喾漘喾冟窅喽脆穵_喽斷稓喾奯喽编窚喾€喾恄喽窓喾冟窅".split("_"),
            weekdays: "喽夃痘喾掄动喾廮喾冟冻喾斷动喾廮喽呧稛喾勦痘喾斷穩喾忇动喾廮喽多动喾忇动喾廮喽多穵鈥嵿痘喾勦穬喾娻洞喽窉喽编穵喽窂_喾冟窉喽氞窋喽秽窂喽窂_喾冟窓喽编穬喾斷痘喾忇动喾�".split("_"),
            weekdaysShort: "喽夃痘喾抇喾冟冻喾擾喽呧稛_喽多动喾廮喽多穵鈥嵿痘喾刜喾冟窉喽氞窋_喾冟窓喽�".split("_"),
            weekdaysMin: "喽塤喾僟喽卂喽禵喽多穵鈥嵿痘_喾冟窉_喾冟窓".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [喾€喾愢侗喾抅 dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[喽呧动] LT[喽",
                nextDay: "[喾勦窓喽 LT[喽",
                nextWeek: "dddd LT[喽",
                lastDay: "[喽娻逗喾歖 LT[喽",
                lastWeek: "[喽脆穬喾斷稖喾掄逗] dddd LT[喽",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s喽氞窉喽编穵",
                past: "%s喽氞锭 喽脆窓喽�",
                s: "喽董喾娻洞喽� 喽氞窉喾勦窉喽脆逗",
                m: "喽膏窉喽编窉喽穵喽窋喾€",
                mm: "喽膏窉喽编窉喽穵喽窋 %d",
                h: "喽脆窅喽�",
                hh: "喽脆窅喽� %d",
                d: "喽窉喽编逗",
                dd: "喽窉喽� %d",
                M: "喽膏窂喾冟逗",
                MM: "喽膏窂喾� %d",
                y: "喾€喾冟痘",
                yy: "喾€喾冟痘 %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} 喾€喾愢侗喾�/,
            ordinal: function (a) {
                return a + " 喾€喾愢侗喾�"
            },
            meridiemParse: /喽脆窓喽� 喾€喽秽窋|喽脆穬喾� 喾€喽秽窋|喽脆窓.喾€|喽�.喾€./,
            isPM: function (a) {
                return "喽�.喾€." === a || "喽脆穬喾� 喾€喽秽窋" === a
            },
            meridiem: function (a, b, c) {
                return a > 11 ? c ? "喽�.喾€." : "喽脆穬喾� 喾€喽秽窋" : c ? "喽脆窓.喾€." : "喽脆窓喽� 喾€喽秽窋"
            }
        });
    //! moment.js locale configuration
    //! locale : Slovak [sk]
    //! author : Martin Minka : https://github.com/k2s
    //! based on work of petrbela : https://github.com/petrbela
    var Lh = "janu谩r_febru谩r_marec_apr铆l_m谩j_j煤n_j煤l_august_september_okt贸ber_november_december".split("_"),
        Mh = "jan_feb_mar_apr_m谩j_j煤n_j煤l_aug_sep_okt_nov_dec".split("_");
    a.defineLocale("sk", {
            months: Lh,
            monthsShort: Mh,
            weekdays: "nede木a_pondelok_utorok_streda_拧tvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_拧t_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_拧t_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nede木u o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo 拧tvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[v膷era o] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minul煤 nede木u o] LT";
                        case 1:
                        case 2:
                            return "[minul媒] dddd [o] LT";
                        case 3:
                            return "[minul煤 stredu o] LT";
                        case 4:
                        case 5:
                            return "[minul媒] dddd [o] LT";
                        case 6:
                            return "[minul煤 sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: ge,
                m: ge,
                mm: ge,
                h: ge,
                hh: ge,
                d: ge,
                dd: ge,
                M: ge,
                MM: ge,
                y: ge,
                yy: ge
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), a.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_膷etrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._膷et._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_膷e_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[v膷eraj ob] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prej拧njo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prej拧njo] [sredo] [ob] LT";
                        case 6:
                            return "[prej拧njo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prej拧nji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "膷ez %s",
                past: "pred %s",
                s: he,
                m: he,
                mm: he,
                h: he,
                hh: he,
                d: he,
                dd: he,
                M: he,
                MM: he,
                y: he,
                yy: he
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : Albanian [sq]
        //! author : Flak毛rim Ismani : https://github.com/flakerimi
        //! author : Menelion Elens煤le : https://github.com/Oire
        //! author : Oerd Cukalla : https://github.com/oerd
        a.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N毛ntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N毛n_Dhj".split("_"),
            weekdays: "E Diel_E H毛n毛_E Mart毛_E M毛rkur毛_E Enjte_E Premte_E Shtun毛".split("_"),
            weekdaysShort: "Die_H毛n_Mar_M毛r_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_M毛_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (a) {
                return "M" === a.charAt(0)
            },
            meridiem: function (a, b, c) {
                return a < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot n毛] LT",
                nextDay: "[Nes毛r n毛] LT",
                nextWeek: "dddd [n毛] LT",
                lastDay: "[Dje n毛] LT",
                lastWeek: "dddd [e kaluar n毛] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "n毛 %s",
                past: "%s m毛 par毛",
                s: "disa sekonda",
                m: "nj毛 minut毛",
                mm: "%d minuta",
                h: "nj毛 or毛",
                hh: "%d or毛",
                d: "nj毛 dit毛",
                dd: "%d dit毛",
                M: "nj毛 muaj",
                MM: "%d muaj",
                y: "nj毛 vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    //! moment.js locale configuration
    //! locale : Serbian Cyrillic [sr-cyrl]
    //! author : Milan Jana膷kovi膰<milanjanackovic@gmail.com> : https://github.com/milan-j
    var Nh = {
        words: {
            m: ["褬械写邪薪 屑懈薪褍褌", "褬械写薪械 屑懈薪褍褌械"],
            mm: ["屑懈薪褍褌", "屑懈薪褍褌械", "屑懈薪褍褌邪"],
            h: ["褬械写邪薪 褋邪褌", "褬械写薪芯谐 褋邪褌邪"],
            hh: ["褋邪褌", "褋邪褌邪", "褋邪褌懈"],
            dd: ["写邪薪", "写邪薪邪", "写邪薪邪"],
            MM: ["屑械褋械褑", "屑械褋械褑邪", "屑械褋械褑懈"],
            yy: ["谐芯写懈薪邪", "谐芯写懈薪械", "谐芯写懈薪邪"]
        },
        correctGrammaticalCase: function (a, b) {
            return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2]
        },
        translate: function (a, b, c) {
            var d = Nh.words[c];
            return 1 === c.length ? b ? d[0] : d[1] : a + " " + Nh.correctGrammaticalCase(a, d)
        }
    };
    a.defineLocale("sr-cyrl", {
        months: "褬邪薪褍邪褉_褎械斜褉褍邪褉_屑邪褉褌_邪锌褉懈谢_屑邪褬_褬褍薪_褬褍谢_邪胁谐褍褋褌_褋械锌褌械屑斜邪褉_芯泻褌芯斜邪褉_薪芯胁械屑斜邪褉_写械褑械屑斜邪褉".split("_"),
        monthsShort: "褬邪薪._褎械斜._屑邪褉._邪锌褉._屑邪褬_褬褍薪_褬褍谢_邪胁谐._褋械锌._芯泻褌._薪芯胁._写械褑.".split("_"),
        monthsParseExact: !0,
        weekdays: "薪械写械褭邪_锌芯薪械写械褭邪泻_褍褌芯褉邪泻_褋褉械写邪_褔械褌胁褉褌邪泻_锌械褌邪泻_褋褍斜芯褌邪".split("_"),
        weekdaysShort: "薪械写._锌芯薪._褍褌芯._褋褉械._褔械褌._锌械褌._褋褍斜.".split("_"),
        weekdaysMin: "薪械_锌芯_褍褌_褋褉_褔械_锌械_褋褍".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[写邪薪邪褋 褍] LT",
            nextDay: "[褋褍褌褉邪 褍] LT",
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[褍] [薪械写械褭褍] [褍] LT";
                    case 3:
                        return "[褍] [褋褉械写褍] [褍] LT";
                    case 6:
                        return "[褍] [褋褍斜芯褌褍] [褍] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[褍] dddd [褍] LT"
                }
            },
            lastDay: "[褬褍褔械 褍] LT",
            lastWeek: function () {
                var a = ["[锌褉芯褕谢械] [薪械写械褭械] [褍] LT", "[锌褉芯褕谢芯谐] [锌芯薪械写械褭泻邪] [褍] LT", "[锌褉芯褕谢芯谐] [褍褌芯褉泻邪] [褍] LT", "[锌褉芯褕谢械] [褋褉械写械] [褍] LT", "[锌褉芯褕谢芯谐] [褔械褌胁褉褌泻邪] [褍] LT", "[锌褉芯褕谢芯谐] [锌械褌泻邪] [褍] LT", "[锌褉芯褕谢械] [褋褍斜芯褌械] [褍] LT"];
                return a[this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "蟹邪 %s",
            past: "锌褉械 %s",
            s: "薪械泻芯谢懈泻芯 褋械泻褍薪写懈",
            m: Nh.translate,
            mm: Nh.translate,
            h: Nh.translate,
            hh: Nh.translate,
            d: "写邪薪",
            dd: Nh.translate,
            M: "屑械褋械褑",
            MM: Nh.translate,
            y: "谐芯写懈薪褍",
            yy: Nh.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    //! moment.js locale configuration
    //! locale : Serbian [sr]
    //! author : Milan Jana膷kovi膰<milanjanackovic@gmail.com> : https://github.com/milan-j
    var Oh = {
        words: {
            m: ["jedan minut", "jedne minute"],
            mm: ["minut", "minute", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mesec", "meseca", "meseci"],
            yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function (a, b) {
            return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2]
        },
        translate: function (a, b, c) {
            var d = Oh.words[c];
            return 1 === c.length ? b ? d[0] : d[1] : a + " " + Oh.correctGrammaticalCase(a, d)
        }
    };
    a.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_膷etvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._膷et._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_膷e_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[ju膷e u] LT",
                lastWeek: function () {
                    var a = ["[pro拧le] [nedelje] [u] LT", "[pro拧log] [ponedeljka] [u] LT", "[pro拧log] [utorka] [u] LT", "[pro拧le] [srede] [u] LT", "[pro拧log] [膷etvrtka] [u] LT", "[pro拧log] [petka] [u] LT", "[pro拧le] [subote] [u] LT"];
                    return a[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                m: Oh.translate,
                mm: Oh.translate,
                h: Oh.translate,
                hh: Oh.translate,
                d: "dan",
                dd: Oh.translate,
                M: "mesec",
                MM: Oh.translate,
                y: "godinu",
                yy: Oh.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : siSwati [ss]
        //! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies
        a.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (a, b, c) {
                return a < 11 ? "ekuseni" : a < 15 ? "emini" : a < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "ekuseni" === b ? a : "emini" === b ? a >= 11 ? a : a + 12 : "entsambama" === b || "ebusuku" === b ? 0 === a ? 0 : a + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Swedish [sv]
        //! author : Jens Alm : https://github.com/ulmus
        a.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "s枚ndag_m氓ndag_tisdag_onsdag_torsdag_fredag_l枚rdag".split("_"),
            weekdaysShort: "s枚n_m氓n_tis_ons_tor_fre_l枚r".split("_"),
            weekdaysMin: "s枚_m氓_ti_on_to_fr_l枚".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Ig氓r] LT",
                nextWeek: "[P氓] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "f枚r %s sedan",
                s: "n氓gra sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en m氓nad",
                MM: "%d m氓nader",
                y: "ett 氓r",
                yy: "%d 氓r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Swahili [sw]
        //! author : Fahad Kassim : https://github.com/fadsel
        a.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    //! moment.js locale configuration
    //! locale : Tamil [ta]
    //! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404
    var Ph = {
            1: "喁�",
            2: "喁�",
            3: "喁�",
            4: "喁�",
            5: "喁�",
            6: "喁�",
            7: "喁�",
            8: "喁�",
            9: "喁�",
            0: "喁�"
        },
        Qh = {
            "喁�": "1",
            "喁�": "2",
            "喁�": "3",
            "喁�": "4",
            "喁�": "5",
            "喁�": "6",
            "喁�": "7",
            "喁�": "8",
            "喁�": "9",
            "喁�": "0"
        };
    a.defineLocale("ta", {
            months: "喈溹喈掂喈縚喈喈瘝喈班喈班_喈喈班瘝喈氞瘝_喈忇喁嵿喈侧瘝_喈瘒_喈溹瘋喈┼瘝_喈溹瘋喈侧瘓_喈嗋畷喈膏瘝喈熰瘝_喈氞瘑喈瘝喈熰瘑喈瘝喈喁峗喈呧畷喁嵿疅喁囙喈喁峗喈ㄠ喈瘝喈喁峗喈熰喈氞喁嵿喈班瘝".split("_"),
            monthsShort: "喈溹喈掂喈縚喈喈瘝喈班喈班_喈喈班瘝喈氞瘝_喈忇喁嵿喈侧瘝_喈瘒_喈溹瘋喈┼瘝_喈溹瘋喈侧瘓_喈嗋畷喈膏瘝喈熰瘝_喈氞瘑喈瘝喈熰瘑喈瘝喈喁峗喈呧畷喁嵿疅喁囙喈喁峗喈ㄠ喈瘝喈喁峗喈熰喈氞喁嵿喈班瘝".split("_"),
            weekdays: "喈炧喈喈编瘝喈编瘉喈曕瘝喈曕喈脆喁坃喈む喈權瘝喈曕疅喁嵿畷喈苦喈瘓_喈氞瘑喈掂瘝喈掂喈瘝喈曕喈脆喁坃喈瘉喈む喁嵿畷喈苦喈瘓_喈掂喈喈脆畷喁嵿畷喈苦喈瘓_喈掂瘑喈赤瘝喈赤喈曕瘝喈曕喈脆喁坃喈氞喈苦畷喁嵿畷喈苦喈瘓".split("_"),
            weekdaysShort: "喈炧喈喈编瘉_喈む喈權瘝喈曕喁峗喈氞瘑喈掂瘝喈掂喈瘝_喈瘉喈む喁峗喈掂喈喈脆喁峗喈掂瘑喈赤瘝喈赤_喈氞喈�".split("_"),
            weekdaysMin: "喈炧_喈む_喈氞瘑_喈瘉_喈掂_喈掂瘑_喈�".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[喈囙喁嵿喁乚 LT",
                nextDay: "[喈ㄠ喈赤瘓] LT",
                nextWeek: "dddd, LT",
                lastDay: "[喈ㄠ瘒喈编瘝喈编瘉] LT",
                lastWeek: "[喈曕疅喈ㄠ瘝喈� 喈掂喈班喁峕 dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 喈囙喁�",
                past: "%s 喈瘉喈┼瘝",
                s: "喈掄喁� 喈氞喈� 喈掂喈ㄠ喈熰喈曕喁�",
                m: "喈掄喁� 喈ㄠ喈喈熰喁�",
                mm: "%d 喈ㄠ喈喈熰畽喁嵿畷喈赤瘝",
                h: "喈掄喁� 喈喈� 喈ㄠ瘒喈班喁�",
                hh: "%d 喈喈� 喈ㄠ瘒喈班喁�",
                d: "喈掄喁� 喈ㄠ喈赤瘝",
                dd: "%d 喈ㄠ喈熰瘝喈曕喁�",
                M: "喈掄喁� 喈喈む喁�",
                MM: "%d 喈喈む畽喁嵿畷喈赤瘝",
                y: "喈掄喁� 喈掂喁佮疅喈瘝",
                yy: "%d 喈嗋喁嵿疅喁佮畷喈赤瘝"
            },
            dayOfMonthOrdinalParse: /\d{1,2}喈掂喁�/,
            ordinal: function (a) {
                return a + "喈掂喁�"
            },
            preparse: function (a) {
                return a.replace(/[喁о喁┼喁喁喁]/g, function (a) {
                    return Qh[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return Ph[a]
                })
            },
            meridiemParse: /喈喈喁峾喈掂瘓喈曕喁坾喈曕喈侧瘓|喈ㄠ喁嵿喈曕喁峾喈庎喁嵿喈距疅喁亅喈喈侧瘓/,
            meridiem: function (a, b, c) {
                return a < 2 ? " 喈喈喁�" : a < 6 ? " 喈掂瘓喈曕喁�" : a < 10 ? " 喈曕喈侧瘓" : a < 14 ? " 喈ㄠ喁嵿喈曕喁�" : a < 18 ? " 喈庎喁嵿喈距疅喁�" : a < 22 ? " 喈喈侧瘓" : " 喈喈喁�"
            },
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "喈喈喁�" === b ? a < 2 ? a : a + 12 : "喈掂瘓喈曕喁�" === b || "喈曕喈侧瘓" === b ? a : "喈ㄠ喁嵿喈曕喁�" === b && a >= 10 ? a : a + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        }),
        //! moment.js locale configuration
        //! locale : Telugu [te]
        //! author : Krishna Chaitanya Thota : https://github.com/kcthota
        a.defineLocale("te", {
            months: "喟溹皑喟掂鞍喟縚喟翱喟睄喟班暗喟班翱_喟熬喟班睄喟氞翱_喟忇蔼啾嵿鞍喟苦安啾峗喟眹_喟溹眰喟ㄠ睄_喟溹眰喟侧眴啾朹喟嗋皸喟膏睄喟熰眮_喟膏眴喟睄喟熰眴喟傕艾喟班睄_喟呧皶啾嵿盁啾嬥艾喟班睄_喟ㄠ暗喟傕艾喟班睄_喟∴翱喟膏眴喟傕艾喟班睄".split("_"),
            monthsShort: "喟溹皑._喟翱喟睄喟�._喟熬喟班睄喟氞翱_喟忇蔼啾嵿鞍喟�._喟眹_喟溹眰喟ㄠ睄_喟溹眰喟侧眴啾朹喟嗋皸._喟膏眴喟睄._喟呧皶啾嵿盁啾�._喟ㄠ暗._喟∴翱喟膏眴.".split("_"),
            monthsParseExact: !0,
            weekdays: "喟嗋唉喟苦暗喟距鞍喟俖喟膏眿喟暗喟距鞍喟俖喟皞喟椸俺喟掂熬喟班皞_喟眮喟о暗喟距鞍喟俖喟椸眮喟班眮喟掂熬喟班皞_喟多眮喟曕睄喟班暗喟距鞍喟俖喟多皑喟苦暗喟距鞍喟�".split("_"),
            weekdaysShort: "喟嗋唉喟縚喟膏眿喟甠喟皞喟椸俺_喟眮喟喟椸眮喟班眮_喟多眮喟曕睄喟癬喟多皑喟�".split("_"),
            weekdaysMin: "喟哶喟膏眿_喟皞_喟眮_喟椸眮_喟多眮_喟�".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[喟ㄠ眹喟∴眮] LT",
                nextDay: "[喟班眹喟眮] LT",
                nextWeek: "dddd, LT",
                lastDay: "[喟ㄠ翱喟ㄠ睄喟╙ LT",
                lastWeek: "[喟椸挨] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 喟侧眿",
                past: "%s 喟曕睄喟班翱喟む皞",
                s: "喟曕眾喟ㄠ睄喟ㄠ翱 喟曕睄喟粪埃喟距安啾�",
                m: "喟掄皶 喟ㄠ翱喟翱喟粪皞",
                mm: "%d 喟ㄠ翱喟翱喟粪熬喟侧眮",
                h: "喟掄皶 喟椸皞喟�",
                hh: "%d 喟椸皞喟熰安啾�",
                d: "喟掄皶 喟班眿喟溹眮",
                dd: "%d 喟班眿喟溹眮喟侧眮",
                M: "喟掄皶 喟ㄠ眴喟�",
                MM: "%d 喟ㄠ眴喟侧安啾�",
                y: "喟掄皶 喟膏皞喟掂挨啾嵿案喟班皞",
                yy: "%d 喟膏皞喟掂挨啾嵿案喟班熬喟侧眮"
            },
            dayOfMonthOrdinalParse: /\d{1,2}喟�/,
            ordinal: "%d喟�",
            meridiemParse: /喟班熬喟む睄喟班翱|喟夃唉喟皞|喟哀啾嵿隘喟距肮啾嵿皑喟倈喟膏熬喟皞喟む睄喟班皞/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "喟班熬喟む睄喟班翱" === b ? a < 4 ? a : a + 12 : "喟夃唉喟皞" === b ? a : "喟哀啾嵿隘喟距肮啾嵿皑喟�" === b ? a >= 10 ? a : a + 12 : "喟膏熬喟皞喟む睄喟班皞" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return a < 4 ? "喟班熬喟む睄喟班翱" : a < 10 ? "喟夃唉喟皞" : a < 17 ? "喟哀啾嵿隘喟距肮啾嵿皑喟�" : a < 20 ? "喟膏熬喟皞喟む睄喟班皞" : "喟班熬喟む睄喟班翱"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }),
        //! moment.js locale configuration
        //! locale : Tetun Dili (East Timor) [tet]
        //! author : Joshua Brooks : https://github.com/joshbrooks
        //! author : Onorio De J. Afonso : https://github.com/marobo
        a.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                m: "minutu ida",
                mm: "minutus %d",
                h: "horas ida",
                hh: "horas %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Thai [th]
        //! author : Kridsada Thanabulpong : https://github.com/sirn
        a.defineLocale("th", {
            months: "喔∴竵喔｀覆喔勦浮_喔佮父喔∴笭喔侧笧喔编笝喔樴箤_喔∴傅喔權覆喔勦浮_喙€喔∴俯喔侧涪喔檁喔炧袱喔┼笭喔侧竸喔喔∴复喔栢父喔權覆喔⑧笝_喔佮福喔佮笌喔侧竸喔喔复喔囙斧喔侧竸喔喔佮副喔權涪喔侧涪喔檁喔曕父喔ム覆喔勦浮_喔炧袱喔ㄠ笀喔脆竵喔侧涪喔檁喔樴副喔權抚喔侧竸喔�".split("_"),
            monthsShort: "喔�.喔�._喔�.喔�._喔∴傅.喔�._喙€喔�.喔�._喔�.喔�._喔∴复.喔�._喔�.喔�._喔�.喔�._喔�.喔�._喔�.喔�._喔�.喔�._喔�.喔�.".split("_"),
            monthsParseExact: !0,
            weekdays: "喔覆喔椸复喔曕涪喙宊喔堗副喔權笚喔｀箤_喔副喔囙竸喔侧福_喔炧父喔榑喔炧袱喔副喔笟喔斷傅_喔ㄠ父喔佮福喙宊喙€喔覆喔｀箤".split("_"),
            weekdaysShort: "喔覆喔椸复喔曕涪喙宊喔堗副喔權笚喔｀箤_喔副喔囙竸喔侧福_喔炧父喔榑喔炧袱喔副喔猒喔ㄠ父喔佮福喙宊喙€喔覆喔｀箤".split("_"),
            weekdaysMin: "喔覆._喔�._喔�._喔�._喔炧袱._喔�._喔�.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY 喙€喔о弗喔� H:mm",
                LLLL: "喔о副喔檇ddd喔椸傅喙� D MMMM YYYY 喙€喔о弗喔� H:mm"
            },
            meridiemParse: /喔佮箞喔笝喙€喔椸傅喙堗涪喔噟喔弗喔编竾喙€喔椸傅喙堗涪喔�/,
            isPM: function (a) {
                return "喔弗喔编竾喙€喔椸傅喙堗涪喔�" === a
            },
            meridiem: function (a, b, c) {
                return a < 12 ? "喔佮箞喔笝喙€喔椸傅喙堗涪喔�" : "喔弗喔编竾喙€喔椸傅喙堗涪喔�"
            },
            calendar: {
                sameDay: "[喔о副喔權笝喔掂箟 喙€喔о弗喔瞉 LT",
                nextDay: "[喔炧福喔膏箞喔囙笝喔掂箟 喙€喔о弗喔瞉 LT",
                nextWeek: "dddd[喔笝喙夃覆 喙€喔о弗喔瞉 LT",
                lastDay: "[喙€喔∴阜喙堗腑喔о覆喔權笝喔掂箟 喙€喔о弗喔瞉 LT",
                lastWeek: "[喔о副喔橾dddd[喔椸傅喙堗箒喔ム箟喔� 喙€喔о弗喔瞉 LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "喔傅喔� %s",
                past: "%s喔椸傅喙堗箒喔ム箟喔�",
                s: "喙勦浮喙堗竵喔掂箞喔о复喔權覆喔椸傅",
                m: "1 喔權覆喔椸傅",
                mm: "%d 喔權覆喔椸傅",
                h: "1 喔娻副喙堗抚喙傕浮喔�",
                hh: "%d 喔娻副喙堗抚喙傕浮喔�",
                d: "1 喔о副喔�",
                dd: "%d 喔о副喔�",
                M: "1 喙€喔斷阜喔笝",
                MM: "%d 喙€喔斷阜喔笝",
                y: "1 喔涏傅",
                yy: "%d 喔涏傅"
            }
        }),
        //! moment.js locale configuration
        //! locale : Tagalog (Philippines) [tl-ph]
        //! author : Dan Hagman : https://github.com/hagmandan
        a.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (a) {
                return a
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    //! moment.js locale configuration
    //! locale : Klingon [tlh]
    //! author : Dominika Kruk : https://github.com/amaranthrose
    var Rh = "pagh_wa鈥檁cha鈥檁wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
    a.defineLocale("tlh", {
        months: "tera鈥� jar wa鈥檁tera鈥� jar cha鈥檁tera鈥� jar wej_tera鈥� jar loS_tera鈥� jar vagh_tera鈥� jar jav_tera鈥� jar Soch_tera鈥� jar chorgh_tera鈥� jar Hut_tera鈥� jar wa鈥檓aH_tera鈥� jar wa鈥檓aH wa鈥檁tera鈥� jar wa鈥檓aH cha鈥�".split("_"),
        monthsShort: "jar wa鈥檁jar cha鈥檁jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa鈥檓aH_jar wa鈥檓aH wa鈥檁jar wa鈥檓aH cha鈥�".split("_"),
        monthsParseExact: !0,
        weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa鈥檒eS] LT",
            nextWeek: "LLL",
            lastDay: "[wa鈥橦u鈥橾 LT",
            lastWeek: "LLL",
            sameElse: "L"
        },
        relativeTime: {
            future: ie,
            past: je,
            s: "puS lup",
            m: "wa鈥� tup",
            mm: ke,
            h: "wa鈥� rep",
            hh: ke,
            d: "wa鈥� jaj",
            dd: ke,
            M: "wa鈥� jar",
            MM: ke,
            y: "wa鈥� DIS",
            yy: ke
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    //! moment.js locale configuration
    //! locale : Turkish [tr]
    //! authors : Erhan Gundogan : https://github.com/erhangundogan,
    //!           Burak Yi臒it Kaya: https://github.com/BYK
    var Sh = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'眉nc眉",
        4: "'眉nc眉",
        100: "'眉nc眉",
        6: "'nc谋",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'谋nc谋",
        90: "'谋nc谋"
    };
    a.defineLocale("tr", {
            months: "Ocak_艦ubat_Mart_Nisan_May谋s_Haziran_Temmuz_A臒ustos_Eyl眉l_Ekim_Kas谋m_Aral谋k".split("_"),
            monthsShort: "Oca_艦ub_Mar_Nis_May_Haz_Tem_A臒u_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Sal谋_脟ar艧amba_Per艧embe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_脟ar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_脟a_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bug眉n saat] LT",
                nextDay: "[yar谋n saat] LT",
                nextWeek: "[haftaya] dddd [saat] LT",
                lastDay: "[d眉n] LT",
                lastWeek: "[ge莽en hafta] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s 枚nce",
                s: "birka莽 saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir g眉n",
                dd: "%d g眉n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir y谋l",
                yy: "%d y谋l"
            },
            dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|眉nc眉|nc谋|uncu|谋nc谋)/,
            ordinal: function (a) {
                if (0 === a) return a + "'谋nc谋";
                var b = a % 10,
                    c = a % 100 - b,
                    d = a >= 100 ? 100 : null;
                return a + (Sh[b] || Sh[c] || Sh[d])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }),
        //! moment.js locale configuration
        //! locale : Talossan [tzl]
        //! author : Robin van der Vliet : https://github.com/robin0van0der0v
        //! author : Iust矛 Canun
        a.defineLocale("tzl", {
            months: "Januar_Fevraglh_Mar莽_Avr茂u_Mai_G眉n_Julia_Guscht_Setemvar_Listop盲ts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_G眉n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "S煤ladi_L煤ne莽i_Maitzi_M谩rcuri_Xh煤adi_Vi茅ner莽i_S谩turi".split("_"),
            weekdaysShort: "S煤l_L煤n_Mai_M谩r_Xh煤_Vi茅_S谩t".split("_"),
            weekdaysMin: "S煤_L煤_Ma_M谩_Xh_Vi_S谩".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (a) {
                return "d'o" === a.toLowerCase()
            },
            meridiem: function (a, b, c) {
                return a > 11 ? c ? "d'o" : "D'O" : c ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi 脿] LT",
                nextDay: "[dem脿 脿] LT",
                nextWeek: "dddd [脿] LT",
                lastDay: "[ieiri 脿] LT",
                lastWeek: "[s眉r el] dddd [lasteu 脿] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: me,
                m: me,
                mm: me,
                h: me,
                hh: me,
                d: me,
                dd: me,
                M: me,
                MM: me,
                y: me,
                yy: me
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }),
        //! moment.js locale configuration
        //! locale : Central Atlas Tamazight Latin [tzm-latn]
        //! author : Abdel Said : https://github.com/abdelsaid
        a.defineLocale("tzm-latn", {
            months: "innayr_br摔ayr摔_mar摔s摔_ibrir_mayyw_ywnyw_ywlywz_桑w拧t_拧wtanbir_kt摔wbr摔_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_br摔ayr摔_mar摔s摔_ibrir_mayyw_ywnyw_ywlywz_桑w拧t_拧wtanbir_kt摔wbr摔_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi岣峺as".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi岣峺as".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi岣峺as".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                m: "minu岣�",
                mm: "%d minu岣�",
                h: "sa蓻a",
                hh: "%d tassa蓻in",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        }),
        //! moment.js locale configuration
        //! locale : Central Atlas Tamazight [tzm]
        //! author : Abdel Said : https://github.com/abdelsaid
        a.defineLocale("tzm", {
            months: "獾夆祻獾忊窗獾⑩禂_獯扁禃獯扳耽獾昣獾庘窗獾曗禋_獾夆幢獾斺祲獾擾獾庘窗獾⑩耽獾揰獾⑩祿獾忊耽獾揰獾⑩祿獾嶁耽獾撯担_獾栤祿獾涒禍_獾涒祿獾溾窗獾忊幢獾夆禂_獯解禑獾撯幢獾昣獾忊祿獾♀窗獾忊幢獾夆禂_獯封祿獾娾祻獯扁祲獾�".split("_"),
            monthsShort: "獾夆祻獾忊窗獾⑩禂_獯扁禃獯扳耽獾昣獾庘窗獾曗禋_獾夆幢獾斺祲獾擾獾庘窗獾⑩耽獾揰獾⑩祿獾忊耽獾揰獾⑩祿獾嶁耽獾撯担_獾栤祿獾涒禍_獾涒祿獾溾窗獾忊幢獾夆禂_獯解禑獾撯幢獾昣獾忊祿獾♀窗獾忊幢獾夆禂_獯封祿獾娾祻獯扁祲獾�".split("_"),
            weekdays: "獯扳禉獯扳祹獯扳禉_獯扳耽獾忊窗獾檁獯扳禉獾夆祻獯扳禉_獯扳唇獾斺窗獾檁獯扳唇獾♀窗獾檁獯扳禉獾夆祹獾♀窗獾檁獯扳禉獾夆垂獾⑩窗獾�".split("_"),
            weekdaysShort: "獯扳禉獯扳祹獯扳禉_獯扳耽獾忊窗獾檁獯扳禉獾夆祻獯扳禉_獯扳唇獾斺窗獾檁獯扳唇獾♀窗獾檁獯扳禉獾夆祹獾♀窗獾檁獯扳禉獾夆垂獾⑩窗獾�".split("_"),
            weekdaysMin: "獯扳禉獯扳祹獯扳禉_獯扳耽獾忊窗獾檁獯扳禉獾夆祻獯扳禉_獯扳唇獾斺窗獾檁獯扳唇獾♀窗獾檁獯扳禉獾夆祹獾♀窗獾檁獯扳禉獾夆垂獾⑩窗獾�".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[獯扳禉獯封祬 獯碷 LT",
                nextDay: "[獯扳禉獯解窗 獯碷 LT",
                nextWeek: "dddd [獯碷 LT",
                lastDay: "[獯扳禋獯扳祻獾� 獯碷 LT",
                lastWeek: "dddd [獯碷 LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "獯封窗獯封祬 獾� 獾⑩窗獾� %s",
                past: "獾⑩窗獾� %s",
                s: "獾夆祹獾夆唇",
                m: "獾庘祲獾忊祿獯�",
                mm: "%d 獾庘祲獾忊祿獯�",
                h: "獾欌窗獾勨窗",
                hh: "%d 獾溾窗獾欌禉獯扳祫獾夆祻",
                d: "獯扳禉獾�",
                dd: "%d o獾欌禉獯扳祻",
                M: "獯扳耽o獾撯禂",
                MM: "%d 獾夆耽獾⑩祲獾斺祻",
                y: "獯扳禉獯斥窗獾�",
                yy: "%d 獾夆禉獯斥窗獾欌祻"
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), a.defineLocale("uk", {
            months: {
                format: "褋褨褔薪褟_谢褞褌芯谐芯_斜械褉械蟹薪褟_泻胁褨褌薪褟_褌褉邪胁薪褟_褔械褉胁薪褟_谢懈锌薪褟_褋械褉锌薪褟_胁械褉械褋薪褟_卸芯胁褌薪褟_谢懈褋褌芯锌邪写邪_谐褉褍写薪褟".split("_"),
                standalone: "褋褨褔械薪褜_谢褞褌懈泄_斜械褉械蟹械薪褜_泻胁褨褌械薪褜_褌褉邪胁械薪褜_褔械褉胁械薪褜_谢懈锌械薪褜_褋械褉锌械薪褜_胁械褉械褋械薪褜_卸芯胁褌械薪褜_谢懈褋褌芯锌邪写_谐褉褍写械薪褜".split("_")
            },
            monthsShort: "褋褨褔_谢褞褌_斜械褉_泻胁褨褌_褌褉邪胁_褔械褉胁_谢懈锌_褋械褉锌_胁械褉_卸芯胁褌_谢懈褋褌_谐褉褍写".split("_"),
            weekdays: pe,
            weekdaysShort: "薪写_锌薪_胁褌_褋褉_褔褌_锌褌_褋斜".split("_"),
            weekdaysMin: "薪写_锌薪_胁褌_褋褉_褔褌_锌褌_褋斜".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY 褉.",
                LLL: "D MMMM YYYY 褉., HH:mm",
                LLLL: "dddd, D MMMM YYYY 褉., HH:mm"
            },
            calendar: {
                sameDay: qe("[小褜芯谐芯写薪褨 "),
                nextDay: qe("[袟邪胁褌褉邪 "),
                lastDay: qe("[袙褔芯褉邪 "),
                nextWeek: qe("[校] dddd ["),
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return qe("[袦懈薪褍谢芯褩] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return qe("[袦懈薪褍谢芯谐芯] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "蟹邪 %s",
                past: "%s 褌芯屑褍",
                s: "写械泻褨谢褜泻邪 褋械泻褍薪写",
                m: oe,
                mm: oe,
                h: "谐芯写懈薪褍",
                hh: oe,
                d: "写械薪褜",
                dd: oe,
                M: "屑褨褋褟褑褜",
                MM: oe,
                y: "褉褨泻",
                yy: oe
            },
            meridiemParse: /薪芯褔褨|褉邪薪泻褍|写薪褟|胁械褔芯褉邪/,
            isPM: function (a) {
                return /^(写薪褟|胁械褔芯褉邪)$/.test(a)
            },
            meridiem: function (a, b, c) {
                return a < 4 ? "薪芯褔褨" : a < 12 ? "褉邪薪泻褍" : a < 17 ? "写薪褟" : "胁械褔芯褉邪"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(泄|谐芯)/,
            ordinal: function (a, b) {
                switch (b) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return a + "-泄";
                    case "D":
                        return a + "-谐芯";
                    default:
                        return a
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    //! moment.js locale configuration
    //! locale : Urdu [ur]
    //! author : Sawood Alam : https://github.com/ibnesayeed
    //! author : Zack : https://github.com/ZackVision
    var Th = ["噩賳賵乇蹖", "賮乇賵乇蹖", "賲丕乇趩", "丕倬乇蹖賱", "賲卅蹖", "噩賵賳", "噩賵賱丕卅蹖", "丕诏爻鬲", "爻鬲賲亘乇", "丕讴鬲賵亘乇", "賳賵賲亘乇", "丿爻賲亘乇"],
        Uh = ["丕鬲賵丕乇", "倬蹖乇", "賲賳诏賱", "亘丿诰", "噩賲毓乇丕鬲", "噩賲毓蹃", "蹃賮鬲蹃"];
    //! moment.js locale configuration
    //! locale : Uzbek Latin [uz-latn]
    //! author : Rasulbek Mirzayev : github.com/Rasulbeeek
    //! moment.js locale configuration
    //! locale : Uzbek [uz]
    //! author : Sardor Muminov : https://github.com/muminoff
    //! moment.js locale configuration
    //! locale : Vietnamese [vi]
    //! author : Bang Nguyen : https://github.com/bangnk
    //! moment.js locale configuration
    //! locale : Pseudo [x-pseudo]
    //! author : Andrew Hood : https://github.com/andrewhood125
    //! moment.js locale configuration
    //! locale : Yoruba Nigeria [yo]
    //! author : Atolagbe Abisoye : https://github.com/andela-batolagbe
    //! moment.js locale configuration
    //! locale : Chinese (China) [zh-cn]
    //! author : suupic : https://github.com/suupic
    //! author : Zeno Zeng : https://github.com/zenozeng
    //! moment.js locale configuration
    //! locale : Chinese (Hong Kong) [zh-hk]
    //! author : Ben : https://github.com/ben-lin
    //! author : Chris Lam : https://github.com/hehachris
    //! author : Konstantin : https://github.com/skfd
    //! moment.js locale configuration
    //! locale : Chinese (Taiwan) [zh-tw]
    //! author : Ben : https://github.com/ben-lin
    //! author : Chris Lam : https://github.com/hehachris
    return a.defineLocale("ur", {
        months: Th,
        monthsShort: Th,
        weekdays: Uh,
        weekdaysShort: Uh,
        weekdaysMin: Uh,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd貙 D MMMM YYYY HH:mm"
        },
        meridiemParse: /氐亘丨|卮丕賲/,
        isPM: function (a) {
            return "卮丕賲" === a
        },
        meridiem: function (a, b, c) {
            return a < 12 ? "氐亘丨" : "卮丕賲"
        },
        calendar: {
            sameDay: "[丌噩 亘賵賯鬲] LT",
            nextDay: "[讴賱 亘賵賯鬲] LT",
            nextWeek: "dddd [亘賵賯鬲] LT",
            lastDay: "[诏匕卮鬲蹃 乇賵夭 亘賵賯鬲] LT",
            lastWeek: "[诏匕卮鬲蹃] dddd [亘賵賯鬲] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s 亘毓丿",
            past: "%s 賯亘賱",
            s: "趩賳丿 爻蹖讴賳趫",
            m: "丕蹖讴 賲賳俟",
            mm: "%d 賲賳俟",
            h: "丕蹖讴 诏诰賳俟蹃",
            hh: "%d 诏诰賳俟蹝",
            d: "丕蹖讴 丿賳",
            dd: "%d 丿賳",
            M: "丕蹖讴 賲丕蹃",
            MM: "%d 賲丕蹃",
            y: "丕蹖讴 爻丕賱",
            yy: "%d 爻丕賱"
        },
        preparse: function (a) {
            return a.replace(/貙/g, ",")
        },
        postformat: function (a) {
            return a.replace(/,/g, "貙")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("uz-latn", {
        months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
        monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
        weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
        weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
        weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[Bugun soat] LT [da]",
            nextDay: "[Ertaga] LT [da]",
            nextWeek: "dddd [kuni soat] LT [da]",
            lastDay: "[Kecha soat] LT [da]",
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: "L"
        },
        relativeTime: {
            future: "Yaqin %s ichida",
            past: "Bir necha %s oldin",
            s: "soniya",
            m: "bir daqiqa",
            mm: "%d daqiqa",
            h: "bir soat",
            hh: "%d soat",
            d: "bir kun",
            dd: "%d kun",
            M: "bir oy",
            MM: "%d oy",
            y: "bir yil",
            yy: "%d yil"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("uz", {
        months: "褟薪胁邪褉_褎械胁褉邪谢_屑邪褉褌_邪锌褉械谢_屑邪泄_懈褞薪_懈褞谢_邪胁谐褍褋褌_褋械薪褌褟斜褉_芯泻褌褟斜褉_薪芯褟斜褉_写械泻邪斜褉".split("_"),
        monthsShort: "褟薪胁_褎械胁_屑邪褉_邪锌褉_屑邪泄_懈褞薪_懈褞谢_邪胁谐_褋械薪_芯泻褌_薪芯褟_写械泻".split("_"),
        weekdays: "携泻褕邪薪斜邪_袛褍褕邪薪斜邪_小械褕邪薪斜邪_效芯褉褕邪薪斜邪_袩邪泄褕邪薪斜邪_袞褍屑邪_楔邪薪斜邪".split("_"),
        weekdaysShort: "携泻褕_袛褍褕_小械褕_效芯褉_袩邪泄_袞褍屑_楔邪薪".split("_"),
        weekdaysMin: "携泻_袛褍_小械_效芯_袩邪_袞褍_楔邪".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[袘褍谐褍薪 褋芯邪褌] LT [写邪]",
            nextDay: "[协褉褌邪谐邪] LT [写邪]",
            nextWeek: "dddd [泻褍薪懈 褋芯邪褌] LT [写邪]",
            lastDay: "[袣械褔邪 褋芯邪褌] LT [写邪]",
            lastWeek: "[校褌谐邪薪] dddd [泻褍薪懈 褋芯邪褌] LT [写邪]",
            sameElse: "L"
        },
        relativeTime: {
            future: "携泻懈薪 %s 懈褔懈写邪",
            past: "袘懈褉 薪械褔邪 %s 芯谢写懈薪",
            s: "褎褍褉褋邪褌",
            m: "斜懈褉 写邪泻懈泻邪",
            mm: "%d 写邪泻懈泻邪",
            h: "斜懈褉 褋芯邪褌",
            hh: "%d 褋芯邪褌",
            d: "斜懈褉 泻褍薪",
            dd: "%d 泻褍薪",
            M: "斜懈褉 芯泄",
            MM: "%d 芯泄",
            y: "斜懈褉 泄懈谢",
            yy: "%d 泄懈谢"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("vi", {
        months: "th谩ng 1_th谩ng 2_th谩ng 3_th谩ng 4_th谩ng 5_th谩ng 6_th谩ng 7_th谩ng 8_th谩ng 9_th谩ng 10_th谩ng 11_th谩ng 12".split("_"),
        monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
        monthsParseExact: !0,
        weekdays: "ch峄� nh岷璽_th峄� hai_th峄� ba_th峄� t瓢_th峄� n膬m_th峄� s谩u_th峄� b岷".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function (a) {
            return /^ch$/i.test(a)
        },
        meridiem: function (a, b, c) {
            return a < 12 ? c ? "sa" : "SA" : c ? "ch" : "CH"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [n膬m] YYYY",
            LLL: "D MMMM [n膬m] YYYY HH:mm",
            LLLL: "dddd, D MMMM [n膬m] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[H么m nay l煤c] LT",
            nextDay: "[Ng脿y mai l煤c] LT",
            nextWeek: "dddd [tu岷 t峄沬 l煤c] LT",
            lastDay: "[H么m qua l煤c] LT",
            lastWeek: "dddd [tu岷 r峄搃 l煤c] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s t峄沬",
            past: "%s tr瓢峄沜",
            s: "v脿i gi芒y",
            m: "m峄檛 ph煤t",
            mm: "%d ph煤t",
            h: "m峄檛 gi峄�",
            hh: "%d gi峄�",
            d: "m峄檛 ng脿y",
            dd: "%d ng脿y",
            M: "m峄檛 th谩ng",
            MM: "%d th谩ng",
            y: "m峄檛 n膬m",
            yy: "%d n膬m"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (a) {
            return a
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("x-pseudo", {
        months: "J~谩帽煤谩~r媒_F~茅br煤~谩r媒_~M谩rc~h_脕p~r铆l_~M谩媒_~J煤帽茅~_J煤l~媒_脕煤~g煤st~_S茅p~t茅mb~茅r_脫~ct贸b~茅r_脩~贸v茅m~b茅r_~D茅c茅~mb茅r".split("_"),
        monthsShort: "J~谩帽_~F茅b_~M谩r_~脕pr_~M谩媒_~J煤帽_~J煤l_~脕煤g_~S茅p_~脫ct_~脩贸v_~D茅c".split("_"),
        monthsParseExact: !0,
        weekdays: "S~煤帽d谩~媒_M贸~帽d谩媒~_T煤茅~sd谩媒~_W茅d~帽茅sd~谩媒_T~h煤rs~d谩媒_~Fr铆d~谩媒_S~谩t煤r~d谩媒".split("_"),
        weekdaysShort: "S~煤帽_~M贸帽_~T煤茅_~W茅d_~Th煤_~Fr铆_~S谩t".split("_"),
        weekdaysMin: "S~煤_M贸~_T煤_~W茅_T~h_Fr~_S谩".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[T~贸d谩~媒 谩t] LT",
            nextDay: "[T~贸m贸~rr贸~w 谩t] LT",
            nextWeek: "dddd [谩t] LT",
            lastDay: "[脻~茅st~茅rd谩~媒 谩t] LT",
            lastWeek: "[L~谩st] dddd [谩t] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "铆~帽 %s",
            past: "%s 谩~g贸",
            s: "谩 ~f茅w ~s茅c贸~帽ds",
            m: "谩 ~m铆帽~煤t茅",
            mm: "%d m~铆帽煤~t茅s",
            h: "谩~帽 h贸~煤r",
            hh: "%d h~贸煤rs",
            d: "谩 ~d谩媒",
            dd: "%d d~谩媒s",
            M: "谩 ~m贸帽~th",
            MM: "%d m~贸帽t~hs",
            y: "谩 ~媒茅谩r",
            yy: "%d 媒~茅谩rs"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (a) {
            var b = a % 10,
                c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("yo", {
        months: "S岷固乺岷固乢E虁re虁le虁_岷竢岷固€na虁_I虁gbe虂_E虁bibi_O虁ku虁du_Ag岷筸o_O虁gu虂n_Owewe_峄屘€wa虁ra虁_Be虂lu虂_峄屘€p岷固€虁".split("_"),
        monthsShort: "S岷固乺_E虁rl_岷竢n_I虁gb_E虁bi_O虁ku虁_Ag岷筥O虁gu虂_Owe_峄屘€wa虁_Be虂l_峄屘€p岷固€虁".split("_"),
        weekdays: "A虁i虁ku虂_Aje虂_I虁s岷固乬un_峄宩峄嵦乺u虂_峄宩峄嵦乥峄峗岷竧i虁_A虁ba虂m岷固乼a".split("_"),
        weekdaysShort: "A虁i虁k_Aje虂_I虁s岷固乢峄宩r_峄宩b_岷竧i虁_A虁ba虂".split("_"),
        weekdaysMin: "A虁i虁_Aj_I虁s_峄宺_峄宐_岷竧_A虁b".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[O虁ni虁 ni] LT",
            nextDay: "[峄屘€la ni] LT",
            nextWeek: "dddd [峄宻岷固€ to虂n'b峄峕 [ni] LT",
            lastDay: "[A虁na ni] LT",
            lastWeek: "dddd [峄宻岷固€ to虂l峄嵦乚 [ni] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ni虂 %s",
            past: "%s k峄峧a虂",
            s: "i虁s岷筳u虂 aaya虂 die",
            m: "i虁s岷筳u虂 kan",
            mm: "i虁s岷筳u虂 %d",
            h: "wa虂kati kan",
            hh: "wa虂kati %d",
            d: "峄峧峄嵦� kan",
            dd: "峄峧峄嵦� %d",
            M: "osu虁 kan",
            MM: "osu虁 %d",
            y: "峄峝u虂n kan",
            yy: "峄峝u虂n %d"
        },
        dayOfMonthOrdinalParse: /峄峧峄嵦乗s\d{1,2}/,
        ordinal: "峄峧峄嵦� %d",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("zh-cn", {
        months: "涓€鏈坃浜屾湀_涓夋湀_鍥涙湀_浜旀湀_鍏湀_涓冩湀_鍏湀_涔濇湀_鍗佹湀_鍗佷竴鏈坃鍗佷簩鏈�".split("_"),
        monthsShort: "1鏈坃2鏈坃3鏈坃4鏈坃5鏈坃6鏈坃7鏈坃8鏈坃9鏈坃10鏈坃11鏈坃12鏈�".split("_"),
        weekdays: "鏄熸湡鏃鏄熸湡涓€_鏄熸湡浜宊鏄熸湡涓塤鏄熸湡鍥沖鏄熸湡浜擾鏄熸湡鍏�".split("_"),
        weekdaysShort: "鍛ㄦ棩_鍛ㄤ竴_鍛ㄤ簩_鍛ㄤ笁_鍛ㄥ洓_鍛ㄤ簲_鍛ㄥ叚".split("_"),
        weekdaysMin: "鏃涓€_浜宊涓塤鍥沖浜擾鍏�".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY骞碝MMD鏃�",
            LL: "YYYY骞碝MMD鏃�",
            LLL: "YYYY骞碝MMD鏃h鐐筸m鍒�",
            LLLL: "YYYY骞碝MMD鏃dddAh鐐筸m鍒�",
            l: "YYYY骞碝MMD鏃�",
            ll: "YYYY骞碝MMD鏃�",
            lll: "YYYY骞碝MMD鏃� HH:mm",
            llll: "YYYY骞碝MMD鏃ddd HH:mm"
        },
        meridiemParse: /鍑屾櫒|鏃╀笂|涓婂崍|涓崍|涓嬪崍|鏅氫笂/,
        meridiemHour: function (a, b) {
            return 12 === a && (a = 0), "鍑屾櫒" === b || "鏃╀笂" === b || "涓婂崍" === b ? a : "涓嬪崍" === b || "鏅氫笂" === b ? a + 12 : a >= 11 ? a : a + 12
        },
        meridiem: function (a, b, c) {
            var d = 100 * a + b;
            return d < 600 ? "鍑屾櫒" : d < 900 ? "鏃╀笂" : d < 1130 ? "涓婂崍" : d < 1230 ? "涓崍" : d < 1800 ? "涓嬪崍" : "鏅氫笂"
        },
        calendar: {
            sameDay: "[浠婂ぉ]LT",
            nextDay: "[鏄庡ぉ]LT",
            nextWeek: "[涓媇ddddLT",
            lastDay: "[鏄ㄥぉ]LT",
            lastWeek: "[涓奭ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(鏃鏈坾鍛�)/,
        ordinal: function (a, b) {
            switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + "鏃�";
                case "M":
                    return a + "鏈�";
                case "w":
                case "W":
                    return a + "鍛�";
                default:
                    return a
            }
        },
        relativeTime: {
            future: "%s鍐�",
            past: "%s鍓�",
            s: "鍑犵",
            m: "1 鍒嗛挓",
            mm: "%d 鍒嗛挓",
            h: "1 灏忔椂",
            hh: "%d 灏忔椂",
            d: "1 澶�",
            dd: "%d 澶�",
            M: "1 涓湀",
            MM: "%d 涓湀",
            y: "1 骞�",
            yy: "%d 骞�"
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("zh-hk", {
        months: "涓€鏈坃浜屾湀_涓夋湀_鍥涙湀_浜旀湀_鍏湀_涓冩湀_鍏湀_涔濇湀_鍗佹湀_鍗佷竴鏈坃鍗佷簩鏈�".split("_"),
        monthsShort: "1鏈坃2鏈坃3鏈坃4鏈坃5鏈坃6鏈坃7鏈坃8鏈坃9鏈坃10鏈坃11鏈坃12鏈�".split("_"),
        weekdays: "鏄熸湡鏃鏄熸湡涓€_鏄熸湡浜宊鏄熸湡涓塤鏄熸湡鍥沖鏄熸湡浜擾鏄熸湡鍏�".split("_"),
        weekdaysShort: "閫辨棩_閫变竴_閫变簩_閫变笁_閫卞洓_閫变簲_閫卞叚".split("_"),
        weekdaysMin: "鏃涓€_浜宊涓塤鍥沖浜擾鍏�".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY骞碝MMD鏃�",
            LL: "YYYY骞碝MMD鏃�",
            LLL: "YYYY骞碝MMD鏃� HH:mm",
            LLLL: "YYYY骞碝MMD鏃ddd HH:mm",
            l: "YYYY骞碝MMD鏃�",
            ll: "YYYY骞碝MMD鏃�",
            lll: "YYYY骞碝MMD鏃� HH:mm",
            llll: "YYYY骞碝MMD鏃ddd HH:mm"
        },
        meridiemParse: /鍑屾櫒|鏃╀笂|涓婂崍|涓崍|涓嬪崍|鏅氫笂/,
        meridiemHour: function (a, b) {
            return 12 === a && (a = 0), "鍑屾櫒" === b || "鏃╀笂" === b || "涓婂崍" === b ? a : "涓崍" === b ? a >= 11 ? a : a + 12 : "涓嬪崍" === b || "鏅氫笂" === b ? a + 12 : void 0
        },
        meridiem: function (a, b, c) {
            var d = 100 * a + b;
            return d < 600 ? "鍑屾櫒" : d < 900 ? "鏃╀笂" : d < 1130 ? "涓婂崍" : d < 1230 ? "涓崍" : d < 1800 ? "涓嬪崍" : "鏅氫笂"
        },
        calendar: {
            sameDay: "[浠婂ぉ]LT",
            nextDay: "[鏄庡ぉ]LT",
            nextWeek: "[涓媇ddddLT",
            lastDay: "[鏄ㄥぉ]LT",
            lastWeek: "[涓奭ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(鏃鏈坾閫�)/,
        ordinal: function (a, b) {
            switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + "鏃�";
                case "M":
                    return a + "鏈�";
                case "w":
                case "W":
                    return a + "閫�";
                default:
                    return a
            }
        },
        relativeTime: {
            future: "%s鍏�",
            past: "%s鍓�",
            s: "骞剧",
            m: "1 鍒嗛悩",
            mm: "%d 鍒嗛悩",
            h: "1 灏忔檪",
            hh: "%d 灏忔檪",
            d: "1 澶�",
            dd: "%d 澶�",
            M: "1 鍊嬫湀",
            MM: "%d 鍊嬫湀",
            y: "1 骞�",
            yy: "%d 骞�"
        }
    }), a.defineLocale("zh-tw", {
        months: "涓€鏈坃浜屾湀_涓夋湀_鍥涙湀_浜旀湀_鍏湀_涓冩湀_鍏湀_涔濇湀_鍗佹湀_鍗佷竴鏈坃鍗佷簩鏈�".split("_"),
        monthsShort: "1鏈坃2鏈坃3鏈坃4鏈坃5鏈坃6鏈坃7鏈坃8鏈坃9鏈坃10鏈坃11鏈坃12鏈�".split("_"),
        weekdays: "鏄熸湡鏃鏄熸湡涓€_鏄熸湡浜宊鏄熸湡涓塤鏄熸湡鍥沖鏄熸湡浜擾鏄熸湡鍏�".split("_"),
        weekdaysShort: "閫辨棩_閫变竴_閫变簩_閫变笁_閫卞洓_閫变簲_閫卞叚".split("_"),
        weekdaysMin: "鏃涓€_浜宊涓塤鍥沖浜擾鍏�".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY骞碝MMD鏃�",
            LL: "YYYY骞碝MMD鏃�",
            LLL: "YYYY骞碝MMD鏃� HH:mm",
            LLLL: "YYYY骞碝MMD鏃ddd HH:mm",
            l: "YYYY骞碝MMD鏃�",
            ll: "YYYY骞碝MMD鏃�",
            lll: "YYYY骞碝MMD鏃� HH:mm",
            llll: "YYYY骞碝MMD鏃ddd HH:mm"
        },
        meridiemParse: /鍑屾櫒|鏃╀笂|涓婂崍|涓崍|涓嬪崍|鏅氫笂/,
        meridiemHour: function (a, b) {
            return 12 === a && (a = 0), "鍑屾櫒" === b || "鏃╀笂" === b || "涓婂崍" === b ? a : "涓崍" === b ? a >= 11 ? a : a + 12 : "涓嬪崍" === b || "鏅氫笂" === b ? a + 12 : void 0
        },
        meridiem: function (a, b, c) {
            var d = 100 * a + b;
            return d < 600 ? "鍑屾櫒" : d < 900 ? "鏃╀笂" : d < 1130 ? "涓婂崍" : d < 1230 ? "涓崍" : d < 1800 ? "涓嬪崍" : "鏅氫笂"
        },
        calendar: {
            sameDay: "[浠婂ぉ]LT",
            nextDay: "[鏄庡ぉ]LT",
            nextWeek: "[涓媇ddddLT",
            lastDay: "[鏄ㄥぉ]LT",
            lastWeek: "[涓奭ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(鏃鏈坾閫�)/,
        ordinal: function (a, b) {
            switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + "鏃�";
                case "M":
                    return a + "鏈�";
                case "w":
                case "W":
                    return a + "閫�";
                default:
                    return a
            }
        },
        relativeTime: {
            future: "%s鍏�",
            past: "%s鍓�",
            s: "骞剧",
            m: "1 鍒嗛悩",
            mm: "%d 鍒嗛悩",
            h: "1 灏忔檪",
            hh: "%d 灏忔檪",
            d: "1 澶�",
            dd: "%d 澶�",
            M: "1 鍊嬫湀",
            MM: "%d 鍊嬫湀",
            y: "1 骞�",
            yy: "%d 骞�"
        }
    }), a.locale("en"), a
});