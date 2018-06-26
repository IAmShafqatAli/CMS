/*!
 * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
var bootstrap = function (t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = function () {
        function t(t) {
            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        function n() {
            return {
                bindType: r.end, delegateType: r.end, handle: function (t) {
                    if (e(t.target).is(this))return t.handleObj.handler.apply(this, arguments)
                }
            }
        }

        function i() {
            if (window.QUnit)return !1;
            var t = document.createElement("bootstrap");
            for (var e in o)if ("undefined" != typeof t.style[e])return {end: o[e]};
            return !1
        }

        function s(t) {
            var n = this, i = !1;
            return e(this).one(a.TRANSITION_END, function () {
                i = !0
            }), setTimeout(function () {
                i || a.triggerTransitionEnd(n)
            }, t), this
        }

        var r = !1, o = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, a = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }, getSelectorFromElement: function (t) {
                var n = t.getAttribute("data-target");
                n && "#" !== n || (n = t.getAttribute("href") || "");
                try {
                    return e(document).find(n).length > 0 ? n : null
                } catch (t) {
                    return null
                }
            }, reflow: function (t) {
                return t.offsetHeight
            }, triggerTransitionEnd: function (t) {
                e(t).trigger(r.end)
            }, supportsTransitionEnd: function () {
                return Boolean(r)
            }, isElement: function (t) {
                return (t[0] || t).nodeType
            }, typeCheckConfig: function (e, n, i) {
                for (var s in i)if (Object.prototype.hasOwnProperty.call(i, s)) {
                    var r = i[s], o = n[s], l = o && a.isElement(o) ? "element" : t(o);
                    if (!new RegExp(r).test(l))throw new Error(e.toUpperCase() + ': Option "' + s + '" provided type "' + l + '" but expected type "' + r + '".')
                }
            }
        };
        return r = i(), e.fn.emulateTransitionEnd = s, a.supportsTransitionEnd() && (e.event.special[a.TRANSITION_END] = n()), a
    }(), r = function (t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }, o = function (t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }, a = function () {
        var t = "alert", n = e.fn[t], i = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api"
        }, o = {ALERT: "alert", FADE: "fade", SHOW: "show"}, a = function () {
            function t(t) {
                this._element = t
            }

            var n = t.prototype;
            return n.close = function (t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, n.dispose = function () {
                e.removeData(this._element, "bs.alert"), this._element = null
            }, n._getRootElement = function (t) {
                var n = s.getSelectorFromElement(t), i = !1;
                return n && (i = e(n)[0]), i || (i = e(t).closest("." + o.ALERT)[0]), i
            }, n._triggerCloseEvent = function (t) {
                var n = e.Event(i.CLOSE);
                return e(t).trigger(n), n
            }, n._removeElement = function (t) {
                var n = this;
                e(t).removeClass(o.SHOW), s.supportsTransitionEnd() && e(t).hasClass(o.FADE) ? e(t).one(s.TRANSITION_END, function (e) {
                    return n._destroyElement(t, e)
                }).emulateTransitionEnd(150) : this._destroyElement(t)
            }, n._destroyElement = function (t) {
                e(t).detach().trigger(i.CLOSED).remove()
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this), s = i.data("bs.alert");
                    s || (s = new t(this), i.data("bs.alert", s)), "close" === n && s[n](this)
                })
            }, t._handleDismiss = function (t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, r(t, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-beta.2"
                }
            }]), t
        }();
        return e(document).on(i.CLICK_DATA_API, {DISMISS: '[data-dismiss="alert"]'}.DISMISS, a._handleDismiss(new a)), e.fn[t] = a._jQueryInterface, e.fn[t].Constructor = a, e.fn[t].noConflict = function () {
            return e.fn[t] = n, a._jQueryInterface
        }, a
    }(), l = function () {
        var t = "button", n = e.fn[t], i = {
            ACTIVE: "active",
            BUTTON: "btn",
            FOCUS: "focus"
        }, s = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: "input",
            ACTIVE: ".active",
            BUTTON: ".btn"
        }, o = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        }, a = function () {
            function t(t) {
                this._element = t
            }

            var n = t.prototype;
            return n.toggle = function () {
                var t = !0, n = !0, r = e(this._element).closest(s.DATA_TOGGLE)[0];
                if (r) {
                    var o = e(this._element).find(s.INPUT)[0];
                    if (o) {
                        if ("radio" === o.type)if (o.checked && e(this._element).hasClass(i.ACTIVE))t = !1; else {
                            var a = e(r).find(s.ACTIVE)[0];
                            a && e(a).removeClass(i.ACTIVE)
                        }
                        if (t) {
                            if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled"))return;
                            o.checked = !e(this._element).hasClass(i.ACTIVE), e(o).trigger("change")
                        }
                        o.focus(), n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i.ACTIVE)), t && e(this._element).toggleClass(i.ACTIVE)
            }, n.dispose = function () {
                e.removeData(this._element, "bs.button"), this._element = null
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this).data("bs.button");
                    i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
                })
            }, r(t, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-beta.2"
                }
            }]), t
        }();
        return e(document).on(o.CLICK_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
            t.preventDefault();
            var n = t.target;
            e(n).hasClass(i.BUTTON) || (n = e(n).closest(s.BUTTON)), a._jQueryInterface.call(e(n), "toggle")
        }).on(o.FOCUS_BLUR_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
            var n = e(t.target).closest(s.BUTTON)[0];
            e(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(t.type))
        }), e.fn[t] = a._jQueryInterface, e.fn[t].Constructor = a, e.fn[t].noConflict = function () {
            return e.fn[t] = n, a._jQueryInterface
        }, a
    }(), h = function () {
        var t = "carousel", n = "bs.carousel", i = "." + n, o = e.fn[t], a = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, h = {NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right"}, c = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            TOUCHEND: "touchend" + i,
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
        }, u = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "carousel-item-right",
            LEFT: "carousel-item-left",
            NEXT: "carousel-item-next",
            PREV: "carousel-item-prev",
            ITEM: "carousel-item"
        }, d = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, f = function () {
            function o(t, n) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(d.INDICATORS)[0], this._addEventListeners()
            }

            var f = o.prototype;
            return f.next = function () {
                this._isSliding || this._slide(h.NEXT)
            }, f.nextWhenVisible = function () {
                !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
            }, f.prev = function () {
                this._isSliding || this._slide(h.PREV)
            }, f.pause = function (t) {
                t || (this._isPaused = !0), e(this._element).find(d.NEXT_PREV)[0] && s.supportsTransitionEnd() && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, f.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, f.to = function (t) {
                var n = this;
                this._activeElement = e(this._element).find(d.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))if (this._isSliding)e(this._element).one(c.SLID, function () {
                    return n.to(t)
                }); else {
                    if (i === t)return this.pause(), void this.cycle();
                    var s = t > i ? h.NEXT : h.PREV;
                    this._slide(s, this._items[t])
                }
            }, f.dispose = function () {
                e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, f._getConfig = function (n) {
                return n = e.extend({}, a, n), s.typeCheckConfig(t, n, l), n
            }, f._addEventListeners = function () {
                var t = this;
                this._config.keyboard && e(this._element).on(c.KEYDOWN, function (e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && (e(this._element).on(c.MOUSEENTER, function (e) {
                    return t.pause(e)
                }).on(c.MOUSELEAVE, function (e) {
                    return t.cycle(e)
                }), "ontouchstart" in document.documentElement && e(this._element).on(c.TOUCHEND, function () {
                    t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                        return t.cycle(e)
                    }, 500 + t._config.interval)
                }))
            }, f._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName))switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next();
                        break;
                    default:
                        return
                }
            }, f._getItemIndex = function (t) {
                return this._items = e.makeArray(e(t).parent().find(d.ITEM)), this._items.indexOf(t)
            }, f._getItemByDirection = function (t, e) {
                var n = t === h.NEXT, i = t === h.PREV, s = this._getItemIndex(e), r = this._items.length - 1;
                if ((i && 0 === s || n && s === r) && !this._config.wrap)return e;
                var o = (s + (t === h.PREV ? -1 : 1)) % this._items.length;
                return -1 === o ? this._items[this._items.length - 1] : this._items[o]
            }, f._triggerSlideEvent = function (t, n) {
                var i = this._getItemIndex(t), s = this._getItemIndex(e(this._element).find(d.ACTIVE_ITEM)[0]), r = e.Event(c.SLIDE, {
                    relatedTarget: t,
                    direction: n,
                    from: s,
                    to: i
                });
                return e(this._element).trigger(r), r
            }, f._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    e(this._indicatorsElement).find(d.ACTIVE).removeClass(u.ACTIVE);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && e(n).addClass(u.ACTIVE)
                }
            }, f._slide = function (t, n) {
                var i, r, o, a = this, l = e(this._element).find(d.ACTIVE_ITEM)[0], f = this._getItemIndex(l), _ = n || l && this._getItemByDirection(t, l), g = this._getItemIndex(_), m = Boolean(this._interval);
                if (t === h.NEXT ? (i = u.LEFT, r = u.NEXT, o = h.LEFT) : (i = u.RIGHT, r = u.PREV, o = h.RIGHT), _ && e(_).hasClass(u.ACTIVE))this._isSliding = !1; else if (!this._triggerSlideEvent(_, o).isDefaultPrevented() && l && _) {
                    this._isSliding = !0, m && this.pause(), this._setActiveIndicatorElement(_);
                    var p = e.Event(c.SLID, {relatedTarget: _, direction: o, from: f, to: g});
                    s.supportsTransitionEnd() && e(this._element).hasClass(u.SLIDE) ? (e(_).addClass(r), s.reflow(_), e(l).addClass(i), e(_).addClass(i), e(l).one(s.TRANSITION_END, function () {
                        e(_).removeClass(i + " " + r).addClass(u.ACTIVE), e(l).removeClass(u.ACTIVE + " " + r + " " + i), a._isSliding = !1, setTimeout(function () {
                            return e(a._element).trigger(p)
                        }, 0)
                    }).emulateTransitionEnd(600)) : (e(l).removeClass(u.ACTIVE), e(_).addClass(u.ACTIVE), this._isSliding = !1, e(this._element).trigger(p)), m && this.cycle()
                }
            }, o._jQueryInterface = function (t) {
                return this.each(function () {
                    var i = e(this).data(n), s = e.extend({}, a, e(this).data());
                    "object" == typeof t && e.extend(s, t);
                    var r = "string" == typeof t ? t : s.slide;
                    if (i || (i = new o(this, s), e(this).data(n, i)), "number" == typeof t)i.to(t); else if ("string" == typeof r) {
                        if ("undefined" == typeof i[r])throw new Error('No method named "' + r + '"');
                        i[r]()
                    } else s.interval && (i.pause(), i.cycle())
                })
            }, o._dataApiClickHandler = function (t) {
                var i = s.getSelectorFromElement(this);
                if (i) {
                    var r = e(i)[0];
                    if (r && e(r).hasClass(u.CAROUSEL)) {
                        var a = e.extend({}, e(r).data(), e(this).data()), l = this.getAttribute("data-slide-to");
                        l && (a.interval = !1), o._jQueryInterface.call(e(r), a), l && e(r).data(n).to(l), t.preventDefault()
                    }
                }
            }, r(o, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-beta.2"
                }
            }, {
                key: "Default", get: function () {
                    return a
                }
            }]), o
        }();
        return e(document).on(c.CLICK_DATA_API, d.DATA_SLIDE, f._dataApiClickHandler), e(window).on(c.LOAD_DATA_API, function () {
            e(d.DATA_RIDE).each(function () {
                var t = e(this);
                f._jQueryInterface.call(t, t.data())
            })
        }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
            return e.fn[t] = o, f._jQueryInterface
        }, f
    }(), c = function () {
        var t = "collapse", n = "bs.collapse", i = e.fn[t], o = {toggle: !0, parent: ""}, a = {
            toggle: "boolean",
            parent: "(string|element)"
        }, l = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
        }, h = {
            SHOW: "show",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
        }, c = {WIDTH: "width", HEIGHT: "height"}, u = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, d = function () {
            function i(t, n) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var i = e(u.DATA_TOGGLE), r = 0; r < i.length; r++) {
                    var o = i[r], a = s.getSelectorFromElement(o);
                    null !== a && e(a).filter(t).length > 0 && this._triggerArray.push(o)
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            var d = i.prototype;
            return d.toggle = function () {
                e(this._element).hasClass(h.SHOW) ? this.hide() : this.show()
            }, d.show = function () {
                var t = this;
                if (!this._isTransitioning && !e(this._element).hasClass(h.SHOW)) {
                    var r, o;
                    if (this._parent && ((r = e.makeArray(e(this._parent).children().children(u.ACTIVES))).length || (r = null)), !(r && (o = e(r).data(n)) && o._isTransitioning)) {
                        var a = e.Event(l.SHOW);
                        if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                            r && (i._jQueryInterface.call(e(r), "hide"), o || e(r).data(n, null));
                            var c = this._getDimension();
                            e(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING), this._element.style[c] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var d = function () {
                                e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.SHOW), t._element.style[c] = "", t.setTransitioning(!1), e(t._element).trigger(l.SHOWN)
                            };
                            if (s.supportsTransitionEnd()) {
                                var f = "scroll" + (c[0].toUpperCase() + c.slice(1));
                                e(this._element).one(s.TRANSITION_END, d).emulateTransitionEnd(600), this._element.style[c] = this._element[f] + "px"
                            } else d()
                        }
                    }
                }
            }, d.hide = function () {
                var t = this;
                if (!this._isTransitioning && e(this._element).hasClass(h.SHOW)) {
                    var n = e.Event(l.HIDE);
                    if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", s.reflow(this._element), e(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.SHOW), this._triggerArray.length)for (var r = 0; r < this._triggerArray.length; r++) {
                            var o = this._triggerArray[r], a = s.getSelectorFromElement(o);
                            null !== a && (e(a).hasClass(h.SHOW) || e(o).addClass(h.COLLAPSED).attr("aria-expanded", !1))
                        }
                        this.setTransitioning(!0);
                        var c = function () {
                            t.setTransitioning(!1), e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(l.HIDDEN)
                        };
                        this._element.style[i] = "", s.supportsTransitionEnd() ? e(this._element).one(s.TRANSITION_END, c).emulateTransitionEnd(600) : c()
                    }
                }
            }, d.setTransitioning = function (t) {
                this._isTransitioning = t
            }, d.dispose = function () {
                e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, d._getConfig = function (n) {
                return n = e.extend({}, o, n), n.toggle = Boolean(n.toggle), s.typeCheckConfig(t, n, a), n
            }, d._getDimension = function () {
                return e(this._element).hasClass(c.WIDTH) ? c.WIDTH : c.HEIGHT
            }, d._getParent = function () {
                var t = this, n = null;
                s.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return e(n).find(r).each(function (e, n) {
                    t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                }), n
            }, d._addAriaAndCollapsedClass = function (t, n) {
                if (t) {
                    var i = e(t).hasClass(h.SHOW);
                    n.length && e(n).toggleClass(h.COLLAPSED, !i).attr("aria-expanded", i)
                }
            }, i._getTargetFromElement = function (t) {
                var n = s.getSelectorFromElement(t);
                return n ? e(n)[0] : null
            }, i._jQueryInterface = function (t) {
                return this.each(function () {
                    var s = e(this), r = s.data(n), a = e.extend({}, o, s.data(), "object" == typeof t && t);
                    if (!r && a.toggle && /show|hide/.test(t) && (a.toggle = !1), r || (r = new i(this, a), s.data(n, r)), "string" == typeof t) {
                        if ("undefined" == typeof r[t])throw new Error('No method named "' + t + '"');
                        r[t]()
                    }
                })
            }, r(i, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-beta.2"
                }
            }, {
                key: "Default", get: function () {
                    return o
                }
            }]), i
        }();
        return e(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var i = e(this), r = s.getSelectorFromElement(this);
            e(r).each(function () {
                var t = e(this), s = t.data(n) ? "toggle" : i.data();
                d._jQueryInterface.call(t, s)
            })
        }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
            return e.fn[t] = i, d._jQueryInterface
        }, d
    }(), u = function () {
        if ("undefined" == typeof n)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
        var t = "dropdown", i = "bs.dropdown", o = "." + i, a = e.fn[t], l = new RegExp("38|40|27"), h = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            CLICK: "click" + o,
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
        }, c = {
            DISABLED: "disabled",
            SHOW: "show",
            DROPUP: "dropup",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left"
        }, u = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            MENU: ".dropdown-menu",
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
        }, d = {TOP: "top-start", TOPEND: "top-end", BOTTOM: "bottom-start", BOTTOMEND: "bottom-end"}, f = {
            offset: 0,
            flip: !0
        }, _ = {offset: "(number|string|function)", flip: "boolean"}, g = function () {
            function a(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var g = a.prototype;
            return g.toggle = function () {
                if (!this._element.disabled && !e(this._element).hasClass(c.DISABLED)) {
                    var t = a._getParentFromElement(this._element), i = e(this._menu).hasClass(c.SHOW);
                    if (a._clearMenus(), !i) {
                        var s = {relatedTarget: this._element}, r = e.Event(h.SHOW, s);
                        if (e(t).trigger(r), !r.isDefaultPrevented()) {
                            var o = this._element;
                            e(t).hasClass(c.DROPUP) && (e(this._menu).hasClass(c.MENULEFT) || e(this._menu).hasClass(c.MENURIGHT)) && (o = t), this._popper = new n(o, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !e(t).closest(u.NAVBAR_NAV).length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(c.SHOW), e(t).toggleClass(c.SHOW).trigger(e.Event(h.SHOWN, s))
                        }
                    }
                }
            }, g.dispose = function () {
                e.removeData(this._element, i), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null
            }, g.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, g._addEventListeners = function () {
                var t = this;
                e(this._element).on(h.CLICK, function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, g._getConfig = function (n) {
                return n = e.extend({}, this.constructor.Default, e(this._element).data(), n), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
            }, g._getMenuElement = function () {
                if (!this._menu) {
                    var t = a._getParentFromElement(this._element);
                    this._menu = e(t).find(u.MENU)[0]
                }
                return this._menu
            }, g._getPlacement = function () {
                var t = e(this._element).parent(), n = d.BOTTOM;
                return t.hasClass(c.DROPUP) ? (n = d.TOP, e(this._menu).hasClass(c.MENURIGHT) && (n = d.TOPEND)) : e(this._menu).hasClass(c.MENURIGHT) && (n = d.BOTTOMEND), n
            }, g._detectNavbar = function () {
                return e(this._element).closest(".navbar").length > 0
            }, g._getPopperConfig = function () {
                var t = this, n = {};
                "function" == typeof this._config.offset ? n.fn = function (n) {
                    return n.offsets = e.extend({}, n.offsets, t._config.offset(n.offsets) || {}), n
                } : n.offset = this._config.offset;
                var i = {placement: this._getPlacement(), modifiers: {offset: n, flip: {enabled: this._config.flip}}};
                return this._inNavbar && (i.modifiers.applyStyle = {enabled: !this._inNavbar}), i
            }, a._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = e(this).data(i), s = "object" == typeof t ? t : null;
                    if (n || (n = new a(this, s), e(this).data(i, n)), "string" == typeof t) {
                        if ("undefined" == typeof n[t])throw new Error('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, a._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))for (var n = e.makeArray(e(u.DATA_TOGGLE)), s = 0; s < n.length; s++) {
                    var r = a._getParentFromElement(n[s]), o = e(n[s]).data(i), l = {relatedTarget: n[s]};
                    if (o) {
                        var d = o._menu;
                        if (e(r).hasClass(c.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(r, t.target))) {
                            var f = e.Event(h.HIDE, l);
                            e(r).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), n[s].setAttribute("aria-expanded", "false"), e(d).removeClass(c.SHOW), e(r).removeClass(c.SHOW).trigger(e.Event(h.HIDDEN, l)))
                        }
                    }
                }
            }, a._getParentFromElement = function (t) {
                var n, i = s.getSelectorFromElement(t);
                return i && (n = e(i)[0]), n || t.parentNode
            }, a._dataApiKeydownHandler = function (t) {
                if (!(!l.test(t.which) || /button/i.test(t.target.tagName) && 32 === t.which || /input|textarea/i.test(t.target.tagName) || (t.preventDefault(), t.stopPropagation(), this.disabled || e(this).hasClass(c.DISABLED)))) {
                    var n = a._getParentFromElement(this), i = e(n).hasClass(c.SHOW);
                    if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                        var s = e(n).find(u.VISIBLE_ITEMS).get();
                        if (s.length) {
                            var r = s.indexOf(t.target);
                            38 === t.which && r > 0 && r--, 40 === t.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var o = e(n).find(u.DATA_TOGGLE)[0];
                            e(o).trigger("focus")
                        }
                        e(this).trigger("click")
                    }
                }
            }, r(a, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-beta.2"
                }
            }, {
                key: "Default", get: function () {
                    return f
                }
            }, {
                key: "DefaultType", get: function () {
                    return _
                }
            }]), a
        }();
        return e(document).on(h.KEYDOWN_DATA_API, u.DATA_TOGGLE, g._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, u.MENU, g._dataApiKeydownHandler).on(h.CLICK_DATA_API + " " + h.KEYUP_DATA_API, g._clearMenus).on(h.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
            t.preventDefault(), t.stopPropagation(), g._jQueryInterface.call(e(this), "toggle")
        }).on(h.CLICK_DATA_API, u.FORM_CHILD, function (t) {
            t.stopPropagation()
        }), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
            return e.fn[t] = a, g._jQueryInterface
        }, g
    }(), d = function () {
        var t = "modal", n = ".bs.modal", i = e.fn[t], o = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, a = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, l = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
        }, h = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            SHOW: "show"
        }, c = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, u = function () {
            function i(t, n) {
                this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(c.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
            }

            var u = i.prototype;
            return u.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, u.show = function (t) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                    s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE) && (this._isTransitioning = !0);
                    var i = e.Event(l.SHOW, {relatedTarget: t});
                    e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(h.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(l.CLICK_DISMISS, c.DATA_DISMISS, function (t) {
                        return n.hide(t)
                    }), e(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                        e(n._element).one(l.MOUSEUP_DISMISS, function (t) {
                            e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return n._showElement(t)
                    }))
                }
            }, u.hide = function (t) {
                var n = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var i = e.Event(l.HIDE);
                    if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE);
                        r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(l.FOCUSIN), e(this._element).removeClass(h.SHOW), e(this._element).off(l.CLICK_DISMISS), e(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? e(this._element).one(s.TRANSITION_END, function (t) {
                            return n._hideModal(t)
                        }).emulateTransitionEnd(300) : this._hideModal()
                    }
                }
            }, u.dispose = function () {
                e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, u.handleUpdate = function () {
                this._adjustDialog()
            }, u._getConfig = function (n) {
                return n = e.extend({}, o, n), s.typeCheckConfig(t, n, a), n
            }, u._showElement = function (t) {
                var n = this, i = s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && s.reflow(this._element), e(this._element).addClass(h.SHOW), this._config.focus && this._enforceFocus();
                var r = e.Event(l.SHOWN, {relatedTarget: t}), o = function () {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
                };
                i ? e(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(300) : o()
            }, u._enforceFocus = function () {
                var t = this;
                e(document).off(l.FOCUSIN).on(l.FOCUSIN, function (n) {
                    document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
                })
            }, u._setEscapeEvent = function () {
                var t = this;
                this._isShown && this._config.keyboard ? e(this._element).on(l.KEYDOWN_DISMISS, function (e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS)
            }, u._setResizeEvent = function () {
                var t = this;
                this._isShown ? e(window).on(l.RESIZE, function (e) {
                    return t.handleUpdate(e)
                }) : e(window).off(l.RESIZE)
            }, u._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    e(document.body).removeClass(h.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(l.HIDDEN)
                })
            }, u._removeBackdrop = function () {
                this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
            }, u._showBackdrop = function (t) {
                var n = this, i = e(this._element).hasClass(h.FADE) ? h.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    var r = s.supportsTransitionEnd() && i;
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = h.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(l.CLICK_DISMISS, function (t) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                        }), r && s.reflow(this._backdrop), e(this._backdrop).addClass(h.SHOW), !t)return;
                    if (!r)return void t();
                    e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(h.SHOW);
                    var o = function () {
                        n._removeBackdrop(), t && t()
                    };
                    s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE) ? e(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                } else t && t()
            }, u._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, u._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, u._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, u._setScrollbar = function () {
                var t = this;
                if (this._isBodyOverflowing) {
                    e(c.FIXED_CONTENT).each(function (n, i) {
                        var s = e(i)[0].style.paddingRight, r = e(i).css("padding-right");
                        e(i).data("padding-right", s).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                    }), e(c.STICKY_CONTENT).each(function (n, i) {
                        var s = e(i)[0].style.marginRight, r = e(i).css("margin-right");
                        e(i).data("margin-right", s).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                    }), e(c.NAVBAR_TOGGLER).each(function (n, i) {
                        var s = e(i)[0].style.marginRight, r = e(i).css("margin-right");
                        e(i).data("margin-right", s).css("margin-right", parseFloat(r) + t._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight, i = e("body").css("padding-right");
                    e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }, u._resetScrollbar = function () {
                e(c.FIXED_CONTENT).each(function (t, n) {
                    var i = e(n).data("padding-right");
                    "undefined" != typeof i && e(n).css("padding-right", i).removeData("padding-right")
                }), e(c.STICKY_CONTENT + ", " + c.NAVBAR_TOGGLER).each(function (t, n) {
                    var i = e(n).data("margin-right");
                    "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right")
                });
                var t = e("body").data("padding-right");
                "undefined" != typeof t && e("body").css("padding-right", t).removeData("padding-right")
            }, u._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = h.SCROLLBAR_MEASURER, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, i._jQueryInterface = function (t, n) {
                return this.each(function () {
                    var s = e(this).data("bs.modal"), r = e.extend({}, i.Default, e(this).data(), "object" == typeof t && t);
                    if (s || (s = new i(this, r), e(this).data("bs.modal", s)), "string" == typeof t) {
                        if ("undefined" == typeof s[t])throw new Error('No method named "' + t + '"');
                        s[t](n)
                    } else r.show && s.show(n)
                })
            }, r(i, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-beta.2"
                }
            }, {
                key: "Default", get: function () {
                    return o
                }
            }]), i
        }();
        return e(document).on(l.CLICK_DATA_API, c.DATA_TOGGLE, function (t) {
            var n, i = this, r = s.getSelectorFromElement(this);
            r && (n = e(r)[0]);
            var o = e(n).data("bs.modal") ? "toggle" : e.extend({}, e(n).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var a = e(n).one(l.SHOW, function (t) {
                t.isDefaultPrevented() || a.one(l.HIDDEN, function () {
                    e(i).is(":visible") && i.focus()
                })
            });
            u._jQueryInterface.call(e(n), o, this)
        }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function () {
            return e.fn[t] = i, u._jQueryInterface
        }, u
    }(), f = function () {
        if ("undefined" == typeof n)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        var t = "tooltip", i = ".bs.tooltip", o = e.fn[t], a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), l = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)"
        }, h = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, c = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip"
        }, u = {SHOW: "show", OUT: "out"}, d = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i
        }, f = {FADE: "fade", SHOW: "show"}, _ = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner",
            ARROW: ".arrow"
        }, g = {HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual"}, m = function () {
            function o(t, e) {
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }

            var m = o.prototype;
            return m.enable = function () {
                this._isEnabled = !0
            }, m.disable = function () {
                this._isEnabled = !1
            }, m.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, m.toggle = function (t) {
                if (this._isEnabled)if (t) {
                    var n = this.constructor.DATA_KEY, i = e(t.currentTarget).data(n);
                    i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (e(this.getTipElement()).hasClass(f.SHOW))return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, m.dispose = function () {
                clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, m.show = function () {
                var t = this;
                if ("none" === e(this.element).css("display"))throw new Error("Please use show on visible elements");
                var i = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(i);
                    var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r)return;
                    var a = this.getTipElement(), l = s.getUID(this.constructor.NAME);
                    a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(a).addClass(f.FADE);
                    var h = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement, c = this._getAttachment(h);
                    this.addAttachmentClass(c);
                    var d = !1 === this.config.container ? document.body : e(this.config.container);
                    e(a).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(d), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, {
                        placement: c,
                        modifiers: {
                            offset: {offset: this.config.offset},
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: _.ARROW}
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            t._handlePopperPlacementChange(e)
                        }
                    }), e(a).addClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                    var g = function () {
                        t.config.animation && t._fixTransition();
                        var n = t._hoverState;
                        t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === u.OUT && t._leave(null, t)
                    };
                    s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(this.tip).one(s.TRANSITION_END, g).emulateTransitionEnd(o._TRANSITION_DURATION) : g()
                }
            }, m.hide = function (t) {
                var n = this, i = this.getTipElement(), r = e.Event(this.constructor.Event.HIDE), o = function () {
                    n._hoverState !== u.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                };
                e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(i).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
            }, m.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, m.isWithContent = function () {
                return Boolean(this.getTitle())
            }, m.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-tooltip-" + t)
            }, m.getTipElement = function () {
                return this.tip = this.tip || e(this.config.template)[0], this.tip
            }, m.setContent = function () {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(_.TOOLTIP_INNER), this.getTitle()), t.removeClass(f.FADE + " " + f.SHOW)
            }, m.setElementContent = function (t, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
            }, m.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, m._getAttachment = function (t) {
                return h[t.toUpperCase()]
            }, m._setListeners = function () {
                var t = this;
                this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n)e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                        return t.toggle(e)
                    }); else if (n !== g.MANUAL) {
                        var i = n === g.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN, s = n === g.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        e(t.element).on(i, t.config.selector, function (e) {
                            return t._enter(e)
                        }).on(s, t.config.selector, function (e) {
                            return t._leave(e)
                        })
                    }
                    e(t.element).closest(".modal").on("hide.bs.modal", function () {
                        return t.hide()
                    })
                }), this.config.selector ? this.config = e.extend({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, m._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, m._enter = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? g.FOCUS : g.HOVER] = !0), e(n.getTipElement()).hasClass(f.SHOW) || n._hoverState === u.SHOW ? n._hoverState = u.SHOW : (clearTimeout(n._timeout), n._hoverState = u.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                    n._hoverState === u.SHOW && n.show()
                }, n.config.delay.show) : n.show())
            }, m._leave = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? g.FOCUS : g.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = u.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                    n._hoverState === u.OUT && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, m._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger)if (this._activeTrigger[t])return !0;
                return !1
            }, m._getConfig = function (n) {
                return "number" == typeof(n = e.extend({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = {
                    show: n.delay,
                    hide: n.delay
                }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
            }, m._getDelegateConfig = function () {
                var t = {};
                if (this.config)for (var e in this.config)this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, m._cleanTipClass = function () {
                var t = e(this.getTipElement()), n = t.attr("class").match(a);
                null !== n && n.length > 0 && t.removeClass(n.join(""))
            }, m._handlePopperPlacementChange = function (t) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, m._fixTransition = function () {
                var t = this.getTipElement(), n = this.config.animation;
                null === t.getAttribute("x-placement") && (e(t).removeClass(f.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, o._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = e(this).data("bs.tooltip"), i = "object" == typeof t && t;
                    if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                        if ("undefined" == typeof n[t])throw new Error('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, r(o, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-beta.2"
                }
            }, {
                key: "Default", get: function () {
                    return c
                }
            }, {
                key: "NAME", get: function () {
                    return t
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.tooltip"
                }
            }, {
                key: "Event", get: function () {
                    return d
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return i
                }
            }, {
                key: "DefaultType", get: function () {
                    return l
                }
            }]), o
        }();
        return e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
            return e.fn[t] = o, m._jQueryInterface
        }, m
    }(), _ = function () {
        var t = "popover", n = ".bs.popover", i = e.fn[t], s = new RegExp("(^|\\s)bs-popover\\S+", "g"), a = e.extend({}, f.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), l = e.extend({}, f.DefaultType, {content: "(string|element|function)"}), h = {
            FADE: "fade",
            SHOW: "show"
        }, c = {TITLE: ".popover-header", CONTENT: ".popover-body"}, u = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            INSERTED: "inserted" + n,
            CLICK: "click" + n,
            FOCUSIN: "focusin" + n,
            FOCUSOUT: "focusout" + n,
            MOUSEENTER: "mouseenter" + n,
            MOUSELEAVE: "mouseleave" + n
        }, d = function (i) {
            function d() {
                return i.apply(this, arguments) || this
            }

            o(d, i);
            var f = d.prototype;
            return f.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, f.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-popover-" + t)
            }, f.getTipElement = function () {
                return this.tip = this.tip || e(this.config.template)[0], this.tip
            }, f.setContent = function () {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(c.TITLE), this.getTitle()), this.setElementContent(t.find(c.CONTENT), this._getContent()), t.removeClass(h.FADE + " " + h.SHOW)
            }, f._getContent = function () {
                return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
            }, f._cleanTipClass = function () {
                var t = e(this.getTipElement()), n = t.attr("class").match(s);
                null !== n && n.length > 0 && t.removeClass(n.join(""))
            }, d._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = e(this).data("bs.popover"), i = "object" == typeof t ? t : null;
                    if ((n || !/destroy|hide/.test(t)) && (n || (n = new d(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                        if ("undefined" == typeof n[t])throw new Error('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, r(d, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-beta.2"
                }
            }, {
                key: "Default", get: function () {
                    return a
                }
            }, {
                key: "NAME", get: function () {
                    return t
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.popover"
                }
            }, {
                key: "Event", get: function () {
                    return u
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return n
                }
            }, {
                key: "DefaultType", get: function () {
                    return l
                }
            }]), d
        }(f);
        return e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
            return e.fn[t] = i, d._jQueryInterface
        }, d
    }(), g = function () {
        var t = "scrollspy", n = e.fn[t], i = {offset: 10, method: "auto", target: ""}, o = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, a = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
        }, l = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active"
        }, h = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, c = {OFFSET: "offset", POSITION: "position"}, u = function () {
            function n(t, n) {
                var i = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + h.NAV_LINKS + "," + this._config.target + " " + h.LIST_ITEMS + "," + this._config.target + " " + h.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(a.SCROLL, function (t) {
                    return i._process(t)
                }), this.refresh(), this._process()
            }

            var u = n.prototype;
            return u.refresh = function () {
                var t = this, n = this._scrollElement !== this._scrollElement.window ? c.POSITION : c.OFFSET, i = "auto" === this._config.method ? n : this._config.method, r = i === c.POSITION ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
                    var n, o = s.getSelectorFromElement(t);
                    if (o && (n = e(o)[0]), n) {
                        var a = n.getBoundingClientRect();
                        if (a.width || a.height)return [e(n)[i]().top + r, o]
                    }
                    return null
                }).filter(function (t) {
                    return t
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).forEach(function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, u.dispose = function () {
                e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, u._getConfig = function (n) {
                if ("string" != typeof(n = e.extend({}, i, n)).target) {
                    var r = e(n.target).attr("id");
                    r || (r = s.getUID(t), e(n.target).attr("id", r)), n.target = "#" + r
                }
                return s.typeCheckConfig(t, n, o), n
            }, u._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, u._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, u._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, u._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)return this._activeTarget = null, void this._clear();
                    for (var s = this._offsets.length; s--;)this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                }
            }, u._activate = function (t) {
                this._activeTarget = t, this._clear();
                var n = this._selector.split(",");
                n = n.map(function (e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                });
                var i = e(n.join(","));
                i.hasClass(l.DROPDOWN_ITEM) ? (i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(l.ACTIVE), i.addClass(l.ACTIVE)) : (i.addClass(l.ACTIVE), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_LINKS + ", " + h.LIST_ITEMS).addClass(l.ACTIVE), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_ITEMS).children(h.NAV_LINKS).addClass(l.ACTIVE)), e(this._scrollElement).trigger(a.ACTIVATE, {relatedTarget: t})
            }, u._clear = function () {
                e(this._selector).filter(h.ACTIVE).removeClass(l.ACTIVE)
            }, n._jQueryInterface = function (t) {
                return this.each(function () {
                    var i = e(this).data("bs.scrollspy"), s = "object" == typeof t && t;
                    if (i || (i = new n(this, s), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
                        if ("undefined" == typeof i[t])throw new Error('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, r(n, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-beta.2"
                }
            }, {
                key: "Default", get: function () {
                    return i
                }
            }]), n
        }();
        return e(window).on(a.LOAD_DATA_API, function () {
            for (var t = e.makeArray(e(h.DATA_SPY)), n = t.length; n--;) {
                var i = e(t[n]);
                u._jQueryInterface.call(i, i.data())
            }
        }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function () {
            return e.fn[t] = n, u._jQueryInterface
        }, u
    }(), m = function () {
        var t = e.fn.tab, n = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
        }, i = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            DISABLED: "disabled",
            FADE: "fade",
            SHOW: "show"
        }, o = {
            DROPDOWN: ".dropdown",
            NAV_LIST_GROUP: ".nav, .list-group",
            ACTIVE: ".active",
            ACTIVE_UL: "> li > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        }, a = function () {
            function t(t) {
                this._element = t
            }

            var a = t.prototype;
            return a.show = function () {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(i.ACTIVE) || e(this._element).hasClass(i.DISABLED))) {
                    var r, a, l = e(this._element).closest(o.NAV_LIST_GROUP)[0], h = s.getSelectorFromElement(this._element);
                    if (l) {
                        var c = "UL" === l.nodeName ? o.ACTIVE_UL : o.ACTIVE;
                        a = e.makeArray(e(l).find(c)), a = a[a.length - 1]
                    }
                    var u = e.Event(n.HIDE, {relatedTarget: this._element}), d = e.Event(n.SHOW, {relatedTarget: a});
                    if (a && e(a).trigger(u), e(this._element).trigger(d), !d.isDefaultPrevented() && !u.isDefaultPrevented()) {
                        h && (r = e(h)[0]), this._activate(this._element, l);
                        var f = function () {
                            var i = e.Event(n.HIDDEN, {relatedTarget: t._element}), s = e.Event(n.SHOWN, {relatedTarget: a});
                            e(a).trigger(i), e(t._element).trigger(s)
                        };
                        r ? this._activate(r, r.parentNode, f) : f()
                    }
                }
            }, a.dispose = function () {
                e.removeData(this._element, "bs.tab"), this._element = null
            }, a._activate = function (t, n, r) {
                var a, l = this, h = (a = "UL" === n.nodeName ? e(n).find(o.ACTIVE_UL) : e(n).children(o.ACTIVE))[0], c = r && s.supportsTransitionEnd() && h && e(h).hasClass(i.FADE), u = function () {
                    return l._transitionComplete(t, h, c, r)
                };
                h && c ? e(h).one(s.TRANSITION_END, u).emulateTransitionEnd(150) : u(), h && e(h).removeClass(i.SHOW)
            }, a._transitionComplete = function (t, n, r, a) {
                if (n) {
                    e(n).removeClass(i.ACTIVE);
                    var l = e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];
                    l && e(l).removeClass(i.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (e(t).addClass(i.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), r ? (s.reflow(t), e(t).addClass(i.SHOW)) : e(t).removeClass(i.FADE), t.parentNode && e(t.parentNode).hasClass(i.DROPDOWN_MENU)) {
                    var h = e(t).closest(o.DROPDOWN)[0];
                    h && e(h).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE), t.setAttribute("aria-expanded", !0)
                }
                a && a()
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this), s = i.data("bs.tab");
                    if (s || (s = new t(this), i.data("bs.tab", s)), "string" == typeof n) {
                        if ("undefined" == typeof s[n])throw new Error('No method named "' + n + '"');
                        s[n]()
                    }
                })
            }, r(t, null, [{
                key: "VERSION", get: function () {
                    return "4.0.0-beta.2"
                }
            }]), t
        }();
        return e(document).on(n.CLICK_DATA_API, o.DATA_TOGGLE, function (t) {
            t.preventDefault(), a._jQueryInterface.call(e(this), "show")
        }), e.fn.tab = a._jQueryInterface, e.fn.tab.Constructor = a, e.fn.tab.noConflict = function () {
            return e.fn.tab = t, a._jQueryInterface
        }, a
    }();
    return function () {
        if ("undefined" == typeof e)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(), t.Util = s, t.Alert = a, t.Button = l, t.Carousel = h, t.Collapse = c, t.Dropdown = u, t.Modal = d, t.Popover = _, t.Scrollspy = g, t.Tab = m, t.Tooltip = f, t
}({}, $, Popper);
