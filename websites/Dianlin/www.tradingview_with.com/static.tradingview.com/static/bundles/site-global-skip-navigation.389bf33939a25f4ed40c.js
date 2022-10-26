"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [47158], {
        30487: (t, e, i) => {
            i.d(e, {
                getSkipNavigationModel: () => c
            });
            var n = i(685459),
                s = i.n(n);
            const r = "update";
            class o {
                constructor(t) {
                    this._entries = [], this._eventEmitter = new(s()), this.id = t.id, this.label = t.label, t.entries && t.entries.length > 0 && (this._entries = [...t.entries])
                }
                getEntries() {
                    return [...this._entries]
                }
                addEntries(t) {
                    const e = t.filter((t => !this._entries.some((e => e.id === t.id))));
                    if (0 === e.length) return;
                    const i = e.map(this._cloneEntry);
                    this._entries = [...this._entries, ...i], this._eventEmitter.emit(r)
                }
                addEntry(t) {
                    this.addEntries([t])
                }
                removeEntry(t) {
                    const e = this._entries.findIndex((e => e.id === t));
                    e >= 0 && (this._entries = this._entries.slice().splice(e, 1), this._eventEmitter.emit(r))
                }
                reset() {
                    this._eventEmitter.removeAllListeners(), delete this.label, this._entries = []
                }
                subscribe(t) {
                    this._eventEmitter.on(r, t)
                }
                unsubscribe(t) {
                    this._eventEmitter.off(r, t)
                }
                _cloneEntry(t) {
                    return { ...t
                    }
                }
            }
            class a {
                constructor() {
                    this._sections = [], this._renderedData = [], this._eventEmitter = new(s()), this._init()
                }
                getData() {
                    return this._renderedData
                }
                addSection(t) {
                    const e = this._findSection(t.id);
                    if (e) return t.label && (e.label = t.label), void(t.entries && e.addEntries(t.entries));
                    const i = new o(t);
                    i.subscribe((() => this._notifyListeners())), this._sections.push(i), this._notifyListeners()
                }
                removeSection(t) {
                    const e = this._sections.findIndex((e => e.id === t));
                    e >= 0 && (this._sections.splice(e, 1), this._notifyListeners())
                }
                addEntries(t, e) {
                    this._getSection(e).addEntries(t)
                }
                addEntry(t, e) {
                    this.addEntries([t], e)
                }
                removeEntry(t, e) {
                    this._getSection(e).removeEntry(t)
                }
                reset() {
                    this._eventEmitter.removeAllListeners(), this._sections.forEach((t => t.reset())), this._sections = [], this._renderedData = [], this._init()
                }
                subscribe(t) {
                    this._eventEmitter.on(r, t)
                }
                unsubscribe(t) {
                    this._eventEmitter.off(r, t)
                }
                _init() {
                    this.addSection({
                        id: "primary-section"
                    })
                }
                _notifyListeners() {
                    this._updateData(), this._eventEmitter.emit(r)
                }
                _updateData() {
                    this._renderedData = this._sections.map((t => ({
                        id: t.id,
                        label: t.label,
                        entries: t.getEntries()
                    })))
                }
                _findSection(t) {
                    return this._sections.find((e => e.id === t))
                }
                _getSection(t) {
                    var e;
                    return t && null !== (e = this._findSection(t)) && void 0 !== e ? e : this._sections[0]
                }
            }
            let d = null;

            function c(t = !1) {
                return t ? new a : (d || (d = new a), d)
            }
        },
        584570: (t, e, i) => {
            i.r(e), i.d(e, {
                initSiteGlobalSkipNavigation: () => o
            });
            var n = i(575932),
                s = i(918293),
                r = i(30487);

            function o() {
                const t = (0, r.getSkipNavigationModel)();
                return t.addEntry({
                    id: "main-content-skip-link",
                    label: (0, n.t)("Main content"),
                    anchor: "tv-content",
                    focusOptions: {
                        preventScroll: !0
                    }
                }), (0, s.renderSkipNavigation)(t, s.SkipNavigationPosition.Social), t
            }
        },
        918293: (t, e, i) => {
            i.d(e, {
                SkipNavigationPosition: () => n.SkipNavigationPosition,
                renderSkipNavigation: () => s
            });
            var n = i(427616);
            async function s(...t) {
                (await Promise.all([i.e(90519), i.e(8348), i.e(37135), i.e(80624), i.e(29331), i.e(91488), i.e(7201), i.e(28846), i.e(4823)]).then(i.bind(i, 482447))).renderSkipNavigationImpl(...t)
            }
        },
        427616: (t, e, i) => {
            var n;
            i.d(e, {
                    SkipNavigationPosition: () => n
                }),
                function(t) {
                    t[t.Social = 0] = "Social", t[t.Platform = 1] = "Platform"
                }(n || (n = {}))
        }
    }
]);