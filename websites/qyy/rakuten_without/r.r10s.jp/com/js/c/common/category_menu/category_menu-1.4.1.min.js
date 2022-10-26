/*
 category_menu-1.4.1.js
 Copyright (c) 2018 Rakuten.Inc
 Date : 2018-03-27 21:16:04
*/
(function(f, d) {
    if ("function" === typeof d) {
        var g = /iPad|(?!Android.*Mobile)Android/.test(f.navigator.userAgent),
            e = function(a) {
                this.$menu = d(a);
                this.itemSelector = this.$menu.attr("data-item") || this.defaults.selectors.item;
                this.submenuSelector = this.$menu.attr("data-submenu") || this.defaults.selectors.submenu;
                this.submenuDirection = this.$menu.attr("data-submenuDirection") || this.defaults.submenuDirection;
                this.activeMenuClassName = this.$menu.attr("data-activeMenuClassName") || this.defaults.activeMenuClassName;
                this.$submenus = this.$items = this.$window = void 0;
                this.degreesBegin = "right" === this.submenuDirection ? -80 : 0;
                this.currentY = this.currentX = this.prevY = this.prevX = 0;
                this.menuIsLocked = this.cursorIsOnMenu = !1;
                this.currentIndex = -1
            };
        e.prototype = {
            defaults: {
                selectors: {
                    item: ".category-menu__item",
                    submenu: ".category-menu__sub-menu"
                },
                activeMenuClassName: "is-active",
                submenuDirection: "right-bottom"
            },
            getElements: function() {
                this.$items = this.$menu.find(this.itemSelector);
                this.$submenus = this.$items.find(this.submenuSelector);
                g ? this.bindTouchEvent() : this.bindMouseEvents()
            },
            bindMouseEvents: function() {
                var a = this;
                this.$menu.bind("mouseenter.menu", function() {
                    if (!a.cursorIsOnMenu) {
                        a.cursorIsOnMenu = !0;
                        a.prevX = a.currentX;
                        a.prevY = a.currentY;
                        var b, c;
                        a.menuMouseEnterID = setInterval(function() {
                            b = a.currentX - a.prevX;
                            c = a.currentY - a.prevY;
                            3 > Math.abs(b) + Math.abs(c) || a.checkDirection(a.degreesBegin, 60, b, c) ? a.menuIsLocked = !0 : a.menuIsLocked = !1;
                            a.prevX = a.currentX;
                            a.prevY = a.currentY
                        }, 20)
                    }
                }).bind("mouseleave.menu", function() {
                    a.cursorIsOnMenu = !1;
                    a.menuIsLocked = !1;
                    clearInterval(a.menuMouseEnterID);
                    a.hideSubMenu()
                }).bind("mousemove.menu", function(b) {
                    a.currentX = b.pageX;
                    a.currentY = b.pageY
                });
                this.$items.each(function(b) {
                    a.$items.eq(b).bind("mousemove.item", function() {
                        a.menuIsLocked || a.showSubMenu(b)
                    })
                })
            },
            bindTouchEvent: function() {
                var a = this;
                this.$items.each(function(b) {
                    var c = a.$items.eq(b),
                        d = a.$submenus.eq(b);
                    c.bind("click", function() {
                        d.is(":visible") ? (a.$items.removeClass(a.activeMenuClassName), a.$submenus.hide()) : (a.$items.removeClass(a.activeMenuClassName),
                            c.addClass(a.activeMenuClassName), a.$submenus.hide(), d.show())
                    })
                });
                d("body").bind("touchstart", function() {
                    a.$items.removeClass(a.activeMenuClassName);
                    a.$submenus.hide()
                });
                this.$menu.bind("touchstart", function(a) {
                    a.stopPropagation()
                })
            },
            checkDirection: function(a, b, c, d) {
                c = 180 * Math.atan2(d, c) / Math.PI;
                return a <= c && c <= b ? !0 : !1
            },
            showSubMenu: function(a) {
                this.currentIndex !== a && (this.currentIndex = a, this.$items.removeClass(this.activeMenuClassName).eq(a).addClass(this.activeMenuClassName), this.$submenus.hide().eq(a).show(),
                    this.menuIsLocked = !0)
            },
            hideSubMenu: function() {
                this.$items.removeClass(this.activeMenuClassName);
                this.$submenus.hide();
                this.currentIndex = -1
            }
        };
        d(".RJSCategoryMenu, .js-category-menu").each(function(a, b) {
            (new e(b)).getElements()
        })
    }
})(window, window.jQuery);