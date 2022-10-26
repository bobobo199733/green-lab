(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [31891], {
        560392: e => {
            e.exports = {
                options: "options-_sydcf90",
                option: "option-_sydcf90",
                input: "input-_sydcf90",
                optionSelected: "optionSelected-_sydcf90"
            }
        },
        451608: (e, t, s) => {
            "use strict";
            s.d(t, {
                SwitchGroup: () => n.SwitchGroup,
                makeSwitchGroupItem: () => r
            });
            var n = s(367254),
                i = s(559496),
                o = s(719036);

            function r(e) {
                var t;
                return t = class extends i.PureComponent {
                    constructor() {
                        super(...arguments), this._onChange = e => {
                            this.context.switchGroupContext.getOnChange()(e)
                        }, this._onUpdate = e => {
                            e.includes(this.props.value) && this.forceUpdate()
                        }
                    }
                    componentDidMount() {
                        this.context.switchGroupContext.subscribe(this._onUpdate)
                    }
                    render() {
                        return i.createElement(e, { ...this.props,
                            name: this._getName(),
                            onChange: this._onChange,
                            checked: this._isChecked()
                        })
                    }
                    componentWillUnmount() {
                        this.context.switchGroupContext.unsubscribe(this._onUpdate)
                    }
                    _getName() {
                        return this.context.switchGroupContext.getName()
                    }
                    _isChecked() {
                        return this.context.switchGroupContext.getValues().includes(this.props.value)
                    }
                }, t.contextTypes = {
                    switchGroupContext: o.any.isRequired
                }, t
            }
        },
        367254: (e, t, s) => {
            "use strict";
            s.d(t, {
                SwitchGroup: () => o
            });
            var n = s(559496),
                i = s(719036);
            class o extends n.PureComponent {
                constructor() {
                    super(...arguments), this._subscriptions = new Set, this._getName = () => this.props.name, this._getValues = () => this.props.values, this._getOnChange = () => this.props.onChange, this._subscribe = e => {
                        this._subscriptions.add(e)
                    }, this._unsubscribe = e => {
                        this._subscriptions.delete(e)
                    }
                }
                getChildContext() {
                    return {
                        switchGroupContext: {
                            getName: this._getName,
                            getValues: this._getValues,
                            getOnChange: this._getOnChange,
                            subscribe: this._subscribe,
                            unsubscribe: this._unsubscribe
                        }
                    }
                }
                render() {
                    return this.props.children
                }
                componentDidUpdate(e) {
                    this._notify(this._getUpdates(this.props.values, e.values))
                }
                _notify(e) {
                    this._subscriptions.forEach((t => t(e)))
                }
                _getUpdates(e, t) {
                    return [...t, ...e].filter((s => t.includes(s) ? !e.includes(s) : e.includes(s)))
                }
            }
            o.childContextTypes = {
                switchGroupContext: i.any.isRequired
            }
        },
        334294: (e, t, s) => {
            "use strict";
            s.d(t, {
                DEFAULT_TIME_FRAME_ITEM_THEME: () => a,
                TimeFrameItem: () => c
            });
            var n = s(559496),
                i = s(497754),
                o = s(451608),
                r = s(560392);
            const a = r,
                c = (0, o.makeSwitchGroupItem)(class extends n.PureComponent {
                    constructor() {
                        super(...arguments), this._onChange = () => {
                            this.props.onChange && this.props.onChange(this.props.value || "")
                        }
                    }
                    render() {
                        const {
                            option: e,
                            checked: t,
                            name: s,
                            value: o,
                            theme: a = r
                        } = this.props;
                        return n.createElement("label", {
                            title: e.description,
                            className: i("apply-common-tooltip", a.option, {
                                [a.optionSelected]: t
                            })
                        }, n.createElement("input", {
                            tabIndex: 0,
                            className: a.input,
                            type: "radio",
                            name: s,
                            onChange: this._onChange,
                            checked: t,
                            value: o
                        }), e.text)
                    }
                })
        },
        358450: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                TimeFrameViewRenderer: () => r
            });
            var n = s(559496),
                i = s(587995),
                o = s(687507);
            class r {
                constructor(e, t) {
                    this._container = e, this._props = t, this.update()
                }
                update(e = {}) {
                    this._props = { ...this._props,
                        ...e
                    };
                    const t = n.createElement(o.TimeFrameView, { ...this._props
                    });
                    i.render(t, this._container)
                }
                destroy() {
                    i.unmountComponentAtNode(this._container)
                }
            }
        },
        687507: (e, t, s) => {
            "use strict";
            s.d(t, {
                TimeFrameView: () => c
            });
            var n = s(559496),
                i = s(497754),
                o = s(451608),
                r = s(334294),
                a = s(560392);
            class c extends n.PureComponent {
                render() {
                    const {
                        name: e,
                        className: t,
                        ranges: s,
                        activeRange: c,
                        onSelectRange: p,
                        theme: h
                    } = this.props;
                    return n.createElement("div", {
                        className: i(a.options, t)
                    }, n.createElement(o.SwitchGroup, {
                        values: c ? [c] : [],
                        onChange: p,
                        name: e
                    }, s.map((e => n.createElement(r.TimeFrameItem, {
                        key: e.value,
                        value: e.value,
                        option: e,
                        theme: h
                    })))))
                }
            }
            c.defaultProps = {
                name: "timeframe"
            }
        }
    }
]);