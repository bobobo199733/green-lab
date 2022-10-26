(self.webpackChunk_badoo_dw_badoo_site = self.webpackChunk_badoo_dw_badoo_site || []).push([
    [9176], {
        87734: function(t, e, i) {
            e.Z = i.p + "assets/images/blank.1ec4297ca89c2600185f.png"
        },
        5437: function(t, e, i) {
            var n = i(41537);
            e.Z = $class({
                StatControllerType: null,
                _observer: null,
                _statController: null,
                constructor: function() {
                    this._observer = new n.Z, this.StatControllerType && (this._statController = new this.StatControllerType)
                },
                destroy: function() {
                    this._observer && (this._observer.destroy(), this._observer = null), this._statController && (this._statController.destroy(), this._statController = null)
                },
                on: function() {
                    return this._observer.on.apply(this._observer, arguments), this
                },
                un: function() {
                    return this._observer.un.apply(this._observer, arguments), this
                },
                fire: function() {
                    return this._observer.fire.apply(this._observer, arguments), this
                },
                getStatController: function() {
                    return this._statController
                },
                getView: function() {},
                renderComplete: function(t) {}
            })
        },
        48820: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return f
                }
            });
            i(40561), i(74916), i(23123), i(41539), i(54747), i(57327);
            var n = i(38844),
                s = i(99480),
                o = i(41537),
                r = i(51973),
                a = i(35998),
                l = $class({
                    _container: null,
                    _events: null,
                    _tokenCounter: 0,
                    CONTAINER_MARK_CLASS: "js-core-events-container",
                    constructor: function(t) {
                        this._container = t, this._events = {}
                    },
                    destroy: function() {
                        this._container = null
                    },
                    subscribe: function(t) {
                        return this._addContainerMarker(t.getContainer()), this._attachEventListener(t.getType()), this._addEventToList(t)
                    },
                    unsubscribe: function(t) {
                        var e = this._removeEventFromList(t);
                        this._removeContainerMarker(e.getContainer()), this._removeEventListener(e.getType())
                    },
                    _generateToken: function() {
                        return String(++this._tokenCounter)
                    },
                    _addEventToList: function(t) {
                        var e = this._generateToken();
                        return this._events[e] = t, e
                    },
                    _removeEventFromList: function(t) {
                        var e = this._events[t];
                        return delete this._events[t], e
                    },
                    _getEvents: function(t, e) {
                        var i, n = [];
                        for (var s in this._events)(i = this._events[s]).getContainer() === t && i.getType() === e && n.push(i);
                        return n
                    },
                    _hasEventsByType: function(t) {
                        var e = !1;
                        for (var i in this._events)
                            if (this._events[i].getType() === t) {
                                e = !0;
                                break
                            }
                        return e
                    },
                    _hasEventsByContainer: function(t) {
                        var e = !1;
                        for (var i in this._events)
                            if (this._events[i].getContainer() === t) {
                                e = !0;
                                break
                            }
                        return e
                    },
                    _addContainerMarker: function(t) {
                        s.ZP.has(t, this.CONTAINER_MARK_CLASS) || s.ZP.add(t, this.CONTAINER_MARK_CLASS)
                    },
                    _removeContainerMarker: function(t) {
                        this._hasEventsByContainer(t) || s.ZP.del(t, this.CONTAINER_MARK_CLASS)
                    },
                    _attachEventListener: function(t) {
                        this._hasEventsByType(t) || n.Z.add(this._container, t, this._manageEvents, this)
                    },
                    _removeEventListener: function(t) {
                        this._hasEventsByType(t) || n.Z.del(this._container, t, this._manageEvents, this)
                    },
                    _manageEvents: function(t) {
                        var e = !0,
                            i = this._findContainer(t);
                        if (i) {
                            var s = this._getEvents(i, n.Z.e.type);
                            if (s.length)
                                for (var o, r, a = 0; a < s.length; a++) o = s[a], (r = this._findTarget(t, o)) && (e = o.processEvent(r))
                        }
                        return e
                    },
                    _findContainer: function(t) {
                        var e, i;
                        if ((e = a.Z.body_wrapper.contains(t) ? a.Z.tooltip_parent : t).closest) i = e.closest("." + this.CONTAINER_MARK_CLASS);
                        else {
                            var n = r.ZP.newError("Debug", "Element does not support closest method: " + e);
                            r.ZP.error_log(n, {
                                origin: "Events.Manager<this._findContainer>"
                            })
                        }
                        return i
                    },
                    _findTarget: function(t, e) {
                        var i = null,
                            n = e.getSelector();
                        if (e.getIsBubbling()) {
                            var s = t.closest(n);
                            e.getContainer().contains(s) && (i = s)
                        } else t.matches(n) && (i = t);
                        return i
                    }
                }),
                h = $class({
                    _container: null,
                    _selector: null,
                    _isBubbling: null,
                    _callback: null,
                    _type: null,
                    constructor: function(t, e, i, n, s) {
                        this._container = t, this._selector = e, this._isBubbling = i, this._type = n, this._callback = s
                    },
                    getContainer: function() {
                        return this._container
                    },
                    getSelector: function() {
                        return this._selector
                    },
                    getIsBubbling: function() {
                        return this._isBubbling
                    },
                    getType: function() {
                        return this._type
                    },
                    processEvent: function(t) {
                        return this._callback.invoke(t)
                    }
                }),
                _ = h,
                u = $class({
                    handler: null,
                    context: null,
                    constructor: function(t, e) {
                        this.handler = t, this.context = e
                    },
                    invoke: function() {
                        return this.handler.apply(this.context, arguments)
                    }
                }),
                c = u,
                d = new l(document),
                p = $class({
                    container: null,
                    __events: null,
                    _observer: null,
                    _eventTokens: null,
                    DEFAULT_EVENT_TYPE: "click",
                    constructor: function(t) {
                        if (this.container = t, "function" == typeof this.getEvents) {
                            if (void 0 === this.container) throw new Error("Can not use EventManager without container");
                            var e = this._convertRawEventData(this.getEvents());
                            this._eventTokens = [];
                            for (var i = 0; i < e.length; i++) this._eventTokens.push(this._getEventManager().subscribe(e[i]))
                        } else this.getClickHandlers && (this.__events = n.Z.on(this.getClickHandlers(), this));
                        this._observer = new o.Z
                    },
                    destroy: function() {
                        if (this._destroyIntersectionObserver(), this.unbindClickHandlers(), this._observer.destroy(), this._observer = null, this._eventTokens) {
                            for (var t = 0; t < this._eventTokens.length; t++) this._getEventManager().unsubscribe(this._eventTokens[t]);
                            this._eventTokens = null
                        }
                        this.container = null
                    },
                    unbindClickHandlers: function() {
                        this.__events && (n.Z.un(this.__events), this.__events = null)
                    },
                    on: function() {
                        return this._observer.on.apply(this._observer, arguments), this
                    },
                    un: function() {
                        return this._observer.un.apply(this._observer, arguments), this
                    },
                    fire: function() {
                        return this._observer.fire.apply(this._observer, arguments), this
                    },
                    getElement: function(t) {
                        return s.ZP.down(this.container, t)
                    },
                    getContainer: function() {
                        return this.container
                    },
                    isHidden: function(t) {
                        return s.ZP.isHidden(t)
                    },
                    isVisibleOnScreen: function() {
                        return s.ZP.isVisibleOnScreen(this.container)
                    },
                    isRtl: function() {
                        return "rtl" === s.ZP.dir()
                    },
                    _convertRawEventData: function(t) {
                        for (var e, i, n, s = [], o = 0; t.length > 0;) {
                            if ("function" != typeof t[o]) o += 1;
                            else {
                                var r = t.splice(0, o + 1);
                                switch (o = 0, r.length) {
                                    case 2:
                                        i = r[0], e = this.DEFAULT_EVENT_TYPE, n = r[1];
                                        break;
                                    case 3:
                                        i = r[0], e = r[1], n = r[2];
                                        break;
                                    default:
                                        throw new Error("Can not find subscribe value")
                                }
                                s.push(this._createEventEntry(i, e, n))
                            }
                        }
                        return s
                    },
                    _createEventEntry: function(t, e, i) {
                        var n, s, o = t.split(" ");
                        if (1 === o.length) n = o[0], s = !1;
                        else {
                            if ("*" !== o[0]) throw new Error("Unknown selector modifier", o[0]);
                            n = o[1], s = !0
                        }
                        return new _(this.container, n, s, e, new c(i, this))
                    },
                    _getEventManager: function() {
                        return d
                    },
                    observe: function(t) {
                        var e = t;
                        t instanceof Array || (e = [t]);
                        for (var i = 0; i < e.length; i++) {
                            var n = this.getHPObservedNode(e[i]);
                            n.length && n.forEach((function(t) {
                                this.getIntersectionObserver().observe(t)
                            }), this)
                        }
                        return this
                    },
                    getHPObservedNode: function(t) {
                        return s.ZP.select(this.container, ".js-hp-view-element").filter((function(e) {
                            return e.dataset.elementName === t
                        }))
                    },
                    getIntersectionObserver: function() {
                        return this._intersectionObserver || this._createIntersectionObserver(), this._intersectionObserver
                    },
                    _createIntersectionObserver: function() {
                        this._intersectionObserver = new IntersectionObserver(this._onIntersectionChange.bind(this))
                    },
                    _destroyIntersectionObserver: function() {
                        this._intersectionObserver && (this._intersectionObserver.disconnect(), this._intersectionObserver = null)
                    },
                    _onIntersectionChange: function(t, e) {
                        t.forEach((function(t) {
                            t.intersectionRatio && (this.onElementVisible(t.target.dataset.elementName), e.unobserve(t.target))
                        }), this)
                    },
                    onElementVisible: function(t) {
                        this.fire("element-visible", t)
                    }
                }),
                f = p
        },
        64557: function(t, e, i) {
            var n = i(79136),
                s = i(41537),
                o = i(11648),
                r = new $class(s.Z, {
                    name: "CurrentUser",
                    constructor: function() {
                        $super(this, arguments)
                    },
                    remove_photo: function(t) {
                        var e = (new o.UyY).setPhotoId(t);
                        new n.Z(117, e).on(87, this._remove_photo_ready.bind(this, t), this).request()
                    },
                    _remove_photo_ready: function(t, e, i) {
                        e ? this.fire("photo_removing_error", e, t) : this.fire("photo_removed", t, i)
                    }
                });
            e.Z = r
        },
        87874: function(t, e, i) {
            var n = i(99480),
                s = i(34183),
                o = new $class({
                    buildStaticUrl: function(t) {
                        return s.ZP.getFlexibleImagesRoot() + t
                    },
                    addCssDirection: function(t) {
                        return t[n.ZP.dir()]
                    }
                });
            e.Z = o
        },
        831: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return S
                }
            });
            i(41539), i(54747), i(21249), i(57327), i(82772), i(47941), i(74916), i(15306);
            var n, s = i(61461),
                o = i(89812),
                r = i(79136),
                a = i(79091),
                l = i(11648),
                h = i(74424),
                _ = i(64557),
                u = i(72477),
                c = (i(23123), i(66992), i(39575), i(82472), i(92990), i(18927), i(33105), i(35035), i(74345), i(7174), i(32846), i(44731), i(77209), i(96319), i(58867), i(37789), i(33739), i(29368), i(14483), i(12056), i(3462), i(30678), i(27462), i(33824), i(55021), i(12974), i(15016), i(68309), i(22778)),
                d = i(26505),
                p = i(41537),
                f = (i(69600), i(78783), i(33948), i(41637), i(24603), i(39714), i(38844)),
                g = i(99480),
                m = i(68986),
                v = i(60300),
                b = "image.png",
                R = new $class({
                    resize: function(t, e, i) {
                        var n = document.createElement("canvas"),
                            s = n.getContext("2d");
                        s.drawImage(t, 0, 0);
                        var o = this.getScaledSizes(t, e, i);
                        return n.width = o.width, n.height = o.height, s.drawImage(t, 0, 0, o.width, o.height), {
                            file: this._dataUriToBlob(n.toDataURL("image/png")),
                            width: o.width,
                            height: o.height
                        }
                    },
                    getScaledSizes: function(t, e, i) {
                        var n = t.width,
                            s = t.height;
                        return n > s ? n > i && (s *= i / n, n = i) : s > e && (n *= e / s, s = e), {
                            width: Math.round(n),
                            height: Math.round(s)
                        }
                    },
                    _dataUriToBlob: function(t) {
                        var e;
                        e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : unescape(t.split(",")[1]);
                        for (var i = t.split(",")[0].split(":")[1].split(";")[0], n = new Uint8Array(e.length), s = 0; s < e.length; s++) n[s] = e.charCodeAt(s);
                        if ("edge" === c.ZP.ua || "ie" === c.ZP.ua || "wk" === c.ZP.ua) {
                            var o = new Blob([n], {
                                type: i
                            });
                            return o.name = b, o
                        }
                        return new File([n.buffer], b, {
                            type: i
                        })
                    }
                }),
                w = $class(p.Z, {
                    name: "Upload.Uploader",
                    upload_url: null,
                    max_count: 1 / 0,
                    max_threads: 2,
                    max_file_size: 1 / 0,
                    mime_types: null,
                    extensions: null,
                    xhr_timeout: 18e5,
                    extra_data: null,
                    scope: null,
                    _files: null,
                    _xhrs: null,
                    _queue: null,
                    _last_id: 0,
                    _active_threads: 0,
                    _completed: !1,
                    _allowed_mime_types: null,
                    _allowed_extensions_re: null,
                    _queue_ready_files: [],
                    constructor: function(t) {
                        $super(this, arguments), $config(this, t), this._files = {}, this._xhrs = {}, this._queue = [], this._extra_params = {}, this.mime_types && (this.extensions = this._get_extensions_from_mime_types(this.mime_types), this._allowed_mime_types = this.mime_types.join(",")), this.extensions && (this._allowed_extensions_re = this._get_allowed_extensions_regexp(this.extensions)), this._recreate_input()
                    },
                    destroy: function() {
                        $super(this, arguments), f.Z.del(this._upload_input, "change", this._on_input_change, this), g.ZP.remove(this._upload_input), this._upload_input = null, this._queue = null, this._xhrs = null, this._files = null, this._allowed_extensions_re = null, this._allowed_mime_types = null
                    },
                    choose: function() {
                        this._upload_input && (this._upload_input.value = "", this._upload_input.click())
                    },
                    set_upload_url: function(t) {
                        this.upload_url = t, this._queue.length && this._upload_next()
                    },
                    cancel_one: function(t) {
                        for (var e = !1, i = 0; i < this._queue.length; i++)
                            if (this._queue[i] === t) {
                                this._files[t]._canceled = !0, delete this._queue[i], e = !0;
                                break
                            }
                        this._xhrs[t] && (this._active_threads--, this._xhrs[t].abort(), delete this._xhrs[t], e = !0, this._upload_next()), e && this.fire("cancel_one", t)
                    },
                    cancel_all: function() {
                        var t = this._xhrs;
                        for (var e in t) t[e].abort();
                        this._xhrs = {}, this._queue = [], this._active_threads = 0
                    },
                    add_photos: function(t) {
                        if (t.length) {
                            this._completed = !1;
                            for (var e = 0; e < t.length; e++) {
                                var i = t[e],
                                    n = this._generate_id();
                                i._id = n, this._files[n] = i, this._files[n].percent = 0, this.fire("registered", n, this._files[n]), this._validate(i, n)
                            }
                        }
                    },
                    retry: function(t) {
                        delete this._files[t]._is_upload_error, delete this._files[t]._upload_error_code, delete this._files[t]._upload_error_text, this._queue.push(t), this._upload_next()
                    },
                    get_totals_percent: function() {
                        var t, e = 0,
                            i = 0;
                        for (var n in this._files)(t = this._files[n])._is_upload_error || t._canceled || (i += t.percent, e++);
                        return 0 == e ? 100 : Math.round(i / e)
                    },
                    _recreate_input: function() {
                        this._upload_input && (f.Z.del(this._upload_input, "change", this._on_input_change, this), g.ZP.remove(this._upload_input));
                        var t = g.ZP.create("input", {
                            className: "uploader_input",
                            type: "file",
                            multiple: 1 !== this.max_count,
                            accept: this._allowed_mime_types
                        });
                        t.setAttribute("data-selenium-groupname", this.scope.group_name), document.body.appendChild(t), this._upload_input = t, f.Z.add(this._upload_input, "change", this._on_input_change, this)
                    },
                    _on_input_change: function() {
                        this.add_photos(this._upload_input.files), this._recreate_input()
                    },
                    _validate: function(t, e) {
                        if (this._allowed_extensions_re.test(t.name)) {
                            var n = new Image;
                            n.src = i.g.URL.createObjectURL(t), n.onload = this._validate_async.bind(this, n, t, e)
                        } else this._error(e, v.Z.ERROR_BAD_FORMAT)
                    },
                    _validate_async: function(t, e, i) {
                        var n, s = t.naturalWidth,
                            o = t.naturalHeight,
                            r = s,
                            a = o,
                            l = e.size,
                            h = !1;
                        if (o < this.min_height || s < this.min_width) h = v.Z.ERROR_PHOTO_UPLOAD_SMALL;
                        else if (e.size > this.max_file_size) h = v.Z.ERROR_TOO_LARGE;
                        else if (t.naturalHeight > this.max_height || t.naturalWidth > this.max_width) {
                            var _ = R.getScaledSizes(t, this.max_height, this.max_width);
                            _.height > this.min_height && _.width > this.min_width && (n = R.resize(t, this.max_height, this.max_width), this._files[i] = n.file, r = _.width, a = _.height)
                        }
                        this.fire("verified", i, {
                            type: this._files[i].type,
                            originalSize: l,
                            originalWidth: s,
                            originalHeight: o,
                            uploadedSize: this._files[i].size,
                            uploadedWidth: r,
                            uploadedHeight: a
                        }), h ? this._error(i, h) : (this._queue.push(i), this._upload_next())
                    },
                    _upload_next: function() {
                        this._queue.length ? this.upload_url && this._upload_photo(this._queue.shift()) : this._active_threads || this._completed || (this._completed = !0, this.fire("queue_completed", this._queue_ready_files), this._queue_ready_files = [])
                    },
                    _upload_photo: function(t) {
                        var e = this._files[t];
                        if (e) {
                            var i = new FormData;
                            if (i.append("file", e), this.extra_data)
                                for (var n in this.extra_data) i.append(n, this.extra_data[n]);
                            var s = this.upload_url;
                            this._xhrs[t] = new m.Z(s, {
                                method: "post",
                                cors: !0,
                                timeout: this.xhr_timeout,
                                data: i,
                                upload_progress: this._upload_progress.bind(this, t),
                                ready: this._upload_ready.bind(this, t),
                                error: this._upload_error.bind(this, t)
                            }), this._active_threads++, this.fire("started", t)
                        } else this._upload_next()
                    },
                    _upload_ready: function(t, e) {
                        this._active_threads--, delete this._xhrs[t], e.errno ? (this._files[t]._upload_error_text = e.errmsg, this._error(t, v.Z.ERROR_UPLOAD_ERROR)) : e.error_code ? this._upload_error(t, null, e) : (this._files[t].percent = 100, this._queue_ready_files.push(t), this.fire("ready", t, e)), this._upload_next()
                    },
                    _upload_error: function(t, e, i) {
                        i && i.error_code ? (this._files[t]._upload_error_text = i.error_message, this._error(t, this._get_uploader_error(i.error_code))) : this._error(t, v.Z.ERROR_TRANSPORT_ERROR, e), this._active_threads--, this._upload_next()
                    },
                    _upload_progress: function(t, e) {
                        this._files[t].percent = e, this.fire("progress", t, e)
                    },
                    _error: function(t, e, i) {
                        var n = this._files[t];
                        delete this._xhrs[t], n.percent = 0, n._is_upload_error = !0, n._upload_error_code = e, this.fire("error", t, e, i)
                    },
                    _get_uploader_error: function(t) {
                        switch (t) {
                            case 6:
                                return v.Z.ERROR_BAD_FORMAT;
                            case 8:
                                return v.Z.ERROR_TOO_LARGE;
                            case 9:
                                return v.Z.ERROR_PHOTO_UPLOAD_SMALL;
                            default:
                                return v.Z.ERROR_TRANSPORT_ERROR
                        }
                    },
                    _generate_id: function() {
                        return ++this._last_id
                    },
                    _get_extensions_from_mime_types: function(t) {
                        for (var e = [], i = 0; i < t.length; i++) e.push(t[i].replace(/^\w+\//, ""));
                        return e
                    },
                    _get_allowed_extensions_regexp: function(t) {
                        return new RegExp("\\.(" + t.join("|").replace(/\*/g, "\\*") + ")$", "i")
                    }
                }),
                E = w,
                O = $class(p.Z, {
                    name: "Filereader",
                    constructor: function() {
                        $super(this, arguments), this.index = 0, this.map = {}
                    },
                    destroy: function() {
                        this._clear_all(), $super(this, arguments)
                    },
                    read: function(t) {
                        var e = new FileReader;
                        e.onload = this._onload.bind(this, this.index), e.onabort = this._onabort.bind(this, this.index), e.onerror = this._onerror.bind(this, this.index), this.map[this.index] = {
                            file: t,
                            reader: e
                        }, this.index++, e.readAsDataURL(t)
                    },
                    _onerror: function(t) {
                        this._remove(t), this.fire("error")
                    },
                    _onabort: function(t) {
                        this._remove(t), this.fire("abort")
                    },
                    _onload: function(t) {
                        var e = this.map[t];
                        this._remove(t), this.fire("ready", e.file, e.reader.result)
                    },
                    _remove: function(t) {
                        var e = this.map[t].reader;
                        e.onload = null, e.onabort = null, e.onerror = null, e.readyState == FileReader.LOADING && e.abort(), delete this.map[t]
                    },
                    _clear_all: function() {
                        for (var t in this.map) this._remove(t);
                        this.index = 0
                    }
                }),
                y = O,
                T = $class(p.Z, {
                    DEFAULT_FILE_NAME: "image.png",
                    name: "Upload.FileGroup",
                    state: "not_inited",
                    constructor: function(t, e) {
                        $super(this, arguments), this.group_name = t, this.cfg = e, this._files = {}, "not_inited" == this.state && this._init()
                    },
                    destroy: function() {
                        this._uploader && (this._uploader.un(this.e_uploader), this._uploader.destroy(), this._uploader = null, this.e_uploader = null), this._filereader && (this._filereader.un(this.e_filereader), this._filereader.destroy(), this._filereader = null, this.e_filereader = null), $super(this, arguments)
                    },
                    update_cfg: function(t) {
                        $config(this.cfg, t)
                    },
                    get_info: function() {
                        var t = {
                            title: this.cfg.title,
                            allowed_filesize: this.cfg.allowed_filesize,
                            allow_video: this.cfg.allow_video,
                            files_left: this.cfg.files_left,
                            cfg: this.cfg
                        };
                        return this.cfg.allow_add_more && (t.allow_add_more = !0), this.cfg.allow_remove && (t.allow_remove = !0), this.cfg.allow_make_private && (t.allow_make_private = !0), t
                    },
                    add: function(t) {
                        this._uploader.add_photos(t)
                    },
                    addDataUri: function(t) {
                        this.add([this._dataUriToBlob(t)])
                    },
                    choose: function() {
                        this._uploader.choose()
                    },
                    retry: function(t) {
                        this._uploader.retry(t)
                    },
                    remove: function(t) {
                        var e = this._files[t];
                        e._upload_data && e._upload_data.photo_id ? this._remove_photo(t) : 0 === e.file.percent && this._uploader.cancel_one(t)
                    },
                    read: function(t) {
                        this._filereader || (this._filereader = new y, this.e_filereader = this._filereader.on({
                            ready: this._on_file_readed
                        }, this)), this._files[t].data_uri ? this.fire("readed", t) : this._filereader.read(this._files[t].file)
                    },
                    get_file: function(t) {
                        return this._files[t]
                    },
                    get_files: function() {
                        return this._files
                    },
                    get_totals_percent: function() {
                        return this._uploader.get_totals_percent()
                    },
                    get_error_text: function(t, e) {
                        var i = this._files[t];
                        return i && i.file._upload_data && i.file._upload_data.errorCode === v.Z.ERROR_UPLOAD_ERROR ? i.file._upload_error_text : this._getErrorByCode(e)
                    },
                    _init: function() {
                        this.state = "loading", this.create_uploader(), this._load_endpoint(this.set_endpoint, this)
                    },
                    _getErrorByCode: function(t) {
                        var e, i = Math.round(this.cfg.allowed_filesize / 1024 / 1024);
                        switch (t) {
                            case v.Z.ERROR_BAD_FORMAT:
                                e = a.default.get("uploader.er_photo_upload.er_photo_upload_format");
                                break;
                            case v.Z.ERROR_TOO_LARGE:
                                e = a.default.get("uploader.er_photo_upload.er_photo_upload_large", {
                                    max_size: i
                                });
                                break;
                            case v.Z.ERROR_TRANSPORT_ERROR:
                                e = a.default.get("uploader.er_photo_upload.er_photo_internal");
                                break;
                            case v.Z.ERROR_UPLOAD_ERROR:
                                e = a.default.get("uploader.er_photo_upload.er_photo_upload");
                                break;
                            case v.Z.ERROR_PHOTO_UPLOAD_SMALL:
                                e = a.default.get("uploader.er_photo_upload.er_photo_upload_min_dimensions", {
                                    width: this.cfg.min_width,
                                    height: this.cfg.min_height
                                });
                                break;
                            case v.Z.ERROR_INVALID:
                            default:
                                e = a.default.get("uploader.er_photo_upload.er_photo_internal")
                        }
                        return e
                    },
                    _load_endpoint: function(t, e) {
                        throw new Error("Call abstract _load_endpoint")
                    },
                    set_endpoint: function(t) {
                        this._uploader.set_upload_url(t), this.state = "inited", this.fire("inited")
                    },
                    _compress_data_uri: function(t, e) {
                        return t
                    },
                    create_uploader: function() {
                        var t = {};
                        t[d.Z.getSessionName()] = d.Z.getSessionId(), $config(t, this.cfg.extra_params);
                        var e = {
                            min_width: this.cfg.min_width,
                            min_height: this.cfg.min_height,
                            max_width: this.cfg.max_width,
                            max_height: this.cfg.max_height,
                            max_file_size: this.cfg.allowed_filesize,
                            mime_types: this.cfg.allowed_image_types,
                            extra_data: t,
                            scope: this
                        };
                        "max_choose_count" in this.cfg && (e.max_count = this.cfg.max_choose_count), this._uploader = new E(e), this.e_uploader = this._uploader.on({
                            registered: this._on_registered,
                            started: this._on_started,
                            verified: this._on_verified,
                            cancel_one: this._on_cancel_one,
                            progress: this._on_progress,
                            error: this._on_error,
                            ready: this._on_ready,
                            queue_completed: this._on_queue_completed
                        }, this)
                    },
                    _dataUriToBlob: function(t) {
                        var e;
                        e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : unescape(t.split(",")[1]);
                        for (var i = t.split(",")[0].split(":")[1].split(";")[0], n = new Uint8Array(e.length), s = 0; s < e.length; s++) n[s] = e.charCodeAt(s);
                        if ("edge" === c.ZP.ua || "ie" === c.ZP.ua) {
                            var o = new Blob([n], {
                                type: i
                            });
                            return o.name = this.DEFAULT_FILE_NAME, o
                        }
                        return new File([n], this.DEFAULT_FILE_NAME, {
                            type: i
                        })
                    },
                    _on_file_readed: function(t, e) {
                        var i = /[^.]+$/.exec(t.name)[0];
                        this._files[t._id].data_uri = this._compress_data_uri(e, i), this.fire("readed", t._id)
                    },
                    _on_registered: function(t, e) {
                        this._files[t] = {
                            file: e
                        }, this.fire("registered", t)
                    },
                    _on_started: function(t) {
                        this.fire("started", t)
                    },
                    _on_verified: function(t, e) {
                        this._files[t]._upload_data = e
                    },
                    _on_cancel_one: function(t) {
                        this.fire("cancel_one", t)
                    },
                    _on_progress: function(t, e) {
                        this.fire("progress", t, e)
                    },
                    _on_error: function(t, e, i) {
                        this.fire("error", t, e, i)
                    },
                    _on_ready: function(t, e) {
                        this.fire("ready", t, e)
                    },
                    _on_queue_completed: function(t) {
                        this.fire("queue_completed", t)
                    },
                    _remove_photo: function(t) {
                        throw new Error("Call abstract _remove_photo")
                    }
                }),
                x = T;
            ! function(t) {
                t[t.ERROR_OK = 0] = "ERROR_OK", t[t.ERROR_EMPTY_PHOTO_DATA = 1] = "ERROR_EMPTY_PHOTO_DATA", t[t.ERROR_EMPTY_USER_ID = 2] = "ERROR_EMPTY_USER_ID", t[t.ERROR_EMPTY_SESSION_ID = 3] = "ERROR_EMPTY_SESSION_ID", t[t.ERROR_USER_UNAUTHORIZED = 5] = "ERROR_USER_UNAUTHORIZED", t[t.ERROR_PHOTO_FORMAT = 6] = "ERROR_PHOTO_FORMAT", t[t.ERROR_PHOTO_ONLY_ALLOWED = 7] = "ERROR_PHOTO_ONLY_ALLOWED", t[t.ERROR_PHOTO_IS_TOO_BIG = 8] = "ERROR_PHOTO_IS_TOO_BIG", t[t.ERROR_PHOTO_IS_TOO_SMALL = 9] = "ERROR_PHOTO_IS_TOO_SMALL", t[t.ERROR_PHOTO_NOT_ALLOWED_MORE = 10] = "ERROR_PHOTO_NOT_ALLOWED_MORE", t[t.ERROR_DETERMINE_ALBUM = 11] = "ERROR_DETERMINE_ALBUM", t[t.ERROR_TEMPORARY = 12] = "ERROR_TEMPORARY", t[t.ERROR_INTERNAL = 13] = "ERROR_INTERNAL", t[t.ERROR_EMPTY_SPACE_ID = 14] = "ERROR_EMPTY_SPACE_ID", t[t.ERROR_WRONG_PLATFORM = 15] = "ERROR_WRONG_PLATFORM", t[t.ERROR_PRIVATE_NOT_SUPPORTED = 16] = "ERROR_PRIVATE_NOT_SUPPORTED", t[t.ERROR_UPLOAD_PHOTO_FROM_SHOT = 17] = "ERROR_UPLOAD_PHOTO_FROM_SHOT", t[t.ERROR_ATTACHE_VERIFY_SERVICE = 18] = "ERROR_ATTACHE_VERIFY_SERVICE", t[t.ERROR_WRONG_HOST = 19] = "ERROR_WRONG_HOST"
            }(n || (n = {}));
            var Z = n,
                P = $class({
                    sendReadyStats: function(t) {
                        this.sendUploadStats(t, 1)
                    },
                    sendErrorStats: function(t) {
                        t.errorCode === v.Z.ERROR_TRANSPORT_ERROR ? this.sendUploadStats(t, 3) : this.sendUploadStats(t, 2)
                    },
                    sendCancelStats: function(t) {
                        this.sendUploadStats(t, 4)
                    },
                    sendUploadStats: function(t, e) {
                        var i, n = (new l.T5O).setResult(e).setConnectionType(0).setEndpointType(4).setMediaType(1).setOriginalResolution((new l.bli).setWidth(t.originalWidth).setHeight(t.originalHeight)).setUploadedResulution((new l.bli).setWidth(t.uploadedWidth).setHeight(t.uploadedHeight)).setOriginalSize(t.originalSize).setUploadedSize(t.uploadedSize).setHttpCode(200);
                        switch (t.startTime && n.setUploadTimeMs((new Date).getTime() - t.startTime), t.photo_id && n.setPhotoId(t.photo_id), t.errorCode ? n.setErrorCode(t.errorCode) : n.setErrorCode(0), t.type) {
                            case "image/jpg":
                            case "image/jpeg":
                                i = 3;
                                break;
                            case "image/png":
                                i = 1;
                                break;
                            default:
                                i = 0
                        }
                        n.setImageFormat(i), new r.Z(278, (new l.fZg).setPhotoUploadStats(n)).request()
                    }
                }),
                A = $class(x, {
                    source: null,
                    _photos_to_replace: null,
                    constructor: function() {
                        if ($super(this, arguments), this._statController = new P, "photos_of_me" === this.group_name) _.Z.on({
                            photo_removed: this._on_photo_removed,
                            photo_removing_error: this._on_photo_removing_error
                        }, this), this.cfg.title = a.default.get("uploader.photoset_personal_name_for_me")
                    },
                    removeUploadedPhoto: function(t) {
                        if ("photos_of_me" !== this.group_name) throw new Error('We can remove only "photos_of_me" group photos');
                        _.Z.remove_photo(t)
                    },
                    choose: function(t) {
                        this.source = null, t && (this.source = t), $super(this, arguments)
                    },
                    _load_endpoint: function(t, e) {
                        this._on_load_callback = t, this._on_load_ctx = e, h.Z.fetch(this._ready_server_get_common_settings, this)
                    },
                    _ready_server_get_common_settings: function(t) {
                        var e, i = t.getSettings().getExternalEndpoints();
                        if (i) {
                            for (var n = 0; n < i.length; n++)
                                if (i[n].getType() == this.cfg.external_endpoint_type) {
                                    e = i[n].getUrl(), this._on_load_callback.call(this._on_load_ctx, e);
                                    break
                                }
                            this._on_load_ctx = null, this._on_load_callback = null
                        }
                    },
                    _get_id_in_group: function(t) {
                        var e, i;
                        for (var n in this._files)
                            if ((i = this._files[n])._upload_data && i._upload_data.photo_id == t) {
                                e = n;
                                break
                            }
                        return e
                    },
                    _remove_photo: function(t) {
                        if ("photos_of_me" !== this.group_name) throw new Error("Uknown group.");
                        this._files[t]._removing || (this._files[t]._removing = !0, _.Z.remove_photo(this._files[t]._upload_data.photo_id))
                    },
                    _on_photo_removing_error: function(t, e) {
                        var i = this._get_id_in_group(e);
                        this._files[i] && delete this._files[i]._removing
                    },
                    _on_photo_removed: function(t) {
                        var e = this._get_id_in_group(t);
                        this.fire("photo_removed", e, t)
                    },
                    _on_cancel_one: function(t) {
                        this._statController.sendCancelStats(this._files[t]._upload_data), $super(this, arguments)
                    },
                    _on_error: function(t, e) {
                        var i = this._files[t]._upload_data;
                        i && (i.errorCode = e, this._statController.sendErrorStats(i)), $super(this, arguments)
                    },
                    _on_ready: function(t, e) {
                        switch (this._files[t]._upload_data.photo_id = e.photo_id, this.cfg.action_after_upload) {
                            case "SERVER_MULTI_UPLOAD_PHOTO":
                                break;
                            case "FINALIZE_VERIFICATION":
                                this._finalize_verification(t, e);
                                break;
                            default:
                                $super(this, arguments)
                        }
                        this._statController.sendReadyStats(this._files[t]._upload_data)
                    },
                    _on_started: function(t) {
                        this._files[t]._upload_data.startTime = (new Date).getTime(), $super(this, arguments)
                    },
                    _finalize_verification: function(t, e) {
                        (e || {}).error_code === Z.ERROR_OK ? this.fire("success") : this.fire("error", t, this._uploader.ERROR_TRANSPORT_ERROR)
                    },
                    set_photos_to_replace: function(t) {
                        this._photos_to_replace = t
                    },
                    clear_photos_to_replace: function() {
                        this._photos_to_replace = null
                    },
                    _server_multi_upload_photo: function(t, e) {
                        var i = (new l.kpx).setAlbumType(e).setContext(u.Z.getSourceForState()),
                            n = [],
                            s = {};
                        t.forEach((function(t) {
                            var e = (new l.YDy).setPhotoId(this._files[t]._upload_data.photo_id).setPhotoSource(2);
                            n.push(e), s[e.getPhotoId()] = t
                        }), this), i.setPhotos(n), this._photos_to_replace && (i.setPhotosToReplace(this._photos_to_replace), this._photos_to_replace = null), this._multiuploadRequest = new r.Z(495, i).on(496, this._onMultiuploadReady.bind(this, i, s)).request()
                    },
                    _onMultiuploadReady: function(t, e, i, n) {
                        if (this._multiuploadRequest = null, !i) {
                            var r = n.getAlbum(),
                                a = t.getPhotos().map((function(t) {
                                    return t.getPhotoId()
                                })),
                                h = r.getPhotos().filter((function(t) {
                                    return -1 !== a.indexOf(t.getId())
                                })),
                                _ = r.getPhotos().filter((function(t) {
                                    return -1 === a.indexOf(t.getId())
                                }));
                            h.forEach((function(t) {
                                _.push(t);
                                var i = s.Z.clone(r);
                                i.setPhotos(_), i.setCountOfPhotos(_.length);
                                var n = (new l.kqe).setAlbum(i).setPhoto(t);
                                this._client_upload_photo_success(e[t.getId()], null, n, !0)
                            }), this), o.Z.fire("multiupload:finish", n.getAlbum(), t);
                            var u = Object.keys(e).map((function(t) {
                                return e[t]
                            }));
                            this.fire("completed", u, h, r)
                        }
                    },
                    _client_upload_photo_success: function(t, e, i, n) {
                        if (void 0 === n && (n = !1), !e) {
                            this.fire("success");
                            var s = i.getPhoto();
                            if (s) {
                                var o = i.getAlbum();
                                if (this.cfg.photo_size) {
                                    var r = this.cfg.photo_size.width + "x" + this.cfg.photo_size.height;
                                    o.getPhotos().forEach((function(t) {
                                        var e = t.getLargeUrl();
                                        e = e.replace("__size__", r), t.setPreviewUrl(e)
                                    }))
                                }
                                var a = s.getLargePhotoSize(),
                                    l = {
                                        height: a.getHeight(),
                                        width: a.getWidth()
                                    };
                                l.height > 160 && (l.width /= l.height / 160, l.height = 160), this.fire("ready", t, {
                                    photo_id: s.getId(),
                                    large_url: s.getLargeUrl(),
                                    size: l,
                                    coach_status: 0
                                }, s, o), n || this.fire("completed", [t], [s], o)
                            }
                        }
                    },
                    _client_upload_photo_failed: function(t, e) {
                        e || this.fire("error", t, this._uploader.ERROR_TRANSPORT_ERROR)
                    },
                    _on_queue_completed: function(t) {
                        $super(this, arguments), 0 !== t.length && ("SERVER_MULTI_UPLOAD_PHOTO" === this.cfg.action_after_upload && this._server_multi_upload_photo(t, this.cfg.extra_params.album_type), new r.Z(398).request())
                    }
                }),
                S = A
        },
        60300: function(t, e) {
            e.Z = {
                ERROR_TOO_LARGE: 1,
                ERROR_BAD_FORMAT: 2,
                ERROR_INVALID: 3,
                ERROR_TRANSPORT_ERROR: 4,
                ERROR_UPLOAD_ERROR: 5,
                ERROR_PHOTO_UPLOAD_SMALL: 6
            }
        },
        16763: function(t, e, i) {
            i(41539), i(54747), i(47941), i(74916), i(23123);
            var n = i(41537),
                s = i(831),
                o = new $class(n.Z, {
                    name: "upload-controller",
                    default_group_config: {
                        files_left: 500,
                        min_width: null,
                        min_height: null,
                        max_width: null,
                        max_height: null,
                        allowed_filesize: 134217728,
                        allowed_image_types: ["image/jpg", "image/jpeg", "image/jpe", "image/jfif", "image/jfi", "image/jp2", "image/jpc", "image/wdp", "image/hdp", "image/png", "image/bmp", "image/tiff", "image/tif"],
                        allow_video: !1,
                        allowed_video_types: ""
                    },
                    group_config: null,
                    constructor: function() {
                        $super(this, arguments), this._groups = {}
                    },
                    setCommonSettings: function(t) {
                        var e = t.getPhotoUploadSettings(),
                            i = e.getMinPhotoSize(),
                            n = e.getMaxSizeFast();
                        this.default_group_config.min_height = i.getHeight(), this.default_group_config.min_width = i.getWidth(), this.default_group_config.max_height = n.getHeight(), this.default_group_config.max_width = n.getWidth(), Object.keys(this._groups).forEach((function(t) {
                            this._groups[t].update_cfg(this.default_group_config)
                        }), this)
                    },
                    _get_config: function(t) {
                        var e, i, n = t.split("#")[0];
                        return n in this.group_config && (i = $clone(this.group_config[n]), e = $clone(this.default_group_config), i = $config(e, i)), i
                    },
                    set_groups_config: function(t) {
                        this.group_config = t
                    },
                    get_group: function(t, e) {
                        var i, n;
                        return (i = this._groups[t]) || (n = this._get_config(t), $config(n, e), i = new s.Z(t, n), this._groups[t] = i), i
                    },
                    add_files: function(t, e) {
                        this._groups[e].add(t)
                    }
                });
            o.set_groups_config({
                photos_of_me: {
                    title: "",
                    external_endpoint_type: 4,
                    action_after_upload: "SERVER_MULTI_UPLOAD_PHOTO",
                    allow_add_more: !0,
                    allow_remove: !0,
                    allow_make_private: !0,
                    photo_size: {
                        width: 180,
                        height: 180
                    },
                    extra_params: {
                        album_type: 2
                    }
                },
                messanger: {
                    title: "",
                    external_endpoint_type: 5,
                    max_choose_count: 1
                },
                messenger_selfie: {
                    title: "",
                    external_endpoint_type: 5,
                    max_choose_count: 1
                },
                verify: {
                    title: "",
                    external_endpoint_type: 34,
                    action_after_upload: "FINALIZE_VERIFICATION",
                    max_choose_count: 1,
                    min_height: 100,
                    min_width: 100
                }
            }), e.Z = o
        },
        1192: function(t, e, i) {
            var n = i(91718),
                s = i(56725),
                o = new $class({
                    name: "upload2.UploaderOverlayController",
                    _config: {},
                    storageKey: "uploadRulesShow",
                    set_config: function(t) {
                        this._config = t
                    },
                    open: function(t, e, i) {
                        this.getDontShowRules() ? this.show(t, e, i) : n.Z.open({
                            type: "hon_upload_rules",
                            ovlCfg: {
                                type: t,
                                cfg: e,
                                source: i
                            }
                        })
                    },
                    show: function(t, e, i, s) {
                        var o = this._get_config(t);
                        e && $config(o, e), o.cfg.source = i, o.cfg.activationPlace = o.activationPlace, n.Z.open(o, s)
                    },
                    _get_config: function(t) {
                        return t in this._config ? this._config[t] : null
                    },
                    setDontShowRules: function(t) {
                        s.Z.setItem(this.storageKey, t ? 1 : 0)
                    },
                    getDontShowRules: function() {
                        return 1 == s.Z.getItem(this.storageKey)
                    }
                });
            e.Z = o
        },
        49416: function(t, e, i) {
            i(74916), i(64765);
            var n = i(38844),
                s = i(99480),
                o = i(22778),
                r = i(58844),
                a = i(26001),
                l = i(57176),
                h = $class(a.Z, {
                    input_el: null,
                    expand_if_empty: !0,
                    init: function() {
                        this.input_el = this.get_element(this.wrap_el, "input"), $super(this, arguments), this.options.on({
                            updated: this.options_updated,
                            "empty-list": this._onEmptyList
                        }, this), this.toggle_default(!this.value), n.Z.add(this.input_el, "input", this.input_change, this)
                    },
                    destroy: function() {
                        n.Z.del(this.input_el, "input", this.input_change, this), this.input_el = null, $super(this, arguments)
                    },
                    reset: function() {
                        $super(this, arguments), this.toggle_empty(!1), this.toggle_default(!0), this.toggle_can_reset(!1)
                    },
                    toggle_disabled: function(t) {
                        $super(this, arguments), this.input_el.disabled = t
                    },
                    get_element: function(t, e) {
                        switch (e) {
                            case "input":
                            case "focus":
                            case "label":
                                return s.ZP.down(t, ".text-field__input");
                            case "options":
                                return s.ZP.down(t, ".dropdown");
                            case "value":
                                for (var i = s.ZP.select(t, "input"), n = 0; n < i.length; n++)
                                    if ("hidden" == i[n].type) return i[n];
                                break;
                            case "hint":
                                return s.ZP.down(t, ".dropdown__hint")
                        }
                        return $super(this, arguments)
                    },
                    create_options: function(t) {
                        return new l.Z({
                            wrap_el: t,
                            url: this.wrap_el.getAttribute("data-url")
                        })
                    },
                    set_label: function(t) {
                        this.input_el.value = this.make_label(t)
                    },
                    autowidth: function() {},
                    on_keydown: function() {
                        var t = n.Z.key(n.Z.e);
                        switch (t) {
                            case 32:
                                return !0;
                            case 38:
                            case 40:
                                return this.expanded ? $super(this, arguments) : (this.expand(), !1)
                        }
                        return $super(this, arguments)
                    },
                    on_keypress: function() {
                        return !0
                    },
                    search: function() {
                        $super(this, arguments), this.toggle_can_reset(Boolean(this.input_el.value))
                    },
                    input_change: function(t) {
                        this.isWaiting || (this.search(t.value), this.value && (this.set_value(""), this.fire("change", null, -1)))
                    },
                    setWaiting: function(t) {
                        return this.isWaiting = t, this
                    },
                    expand: function() {
                        if (this.isWaiting) return !1;
                        $super(this, arguments)
                    },
                    options_updated: function(t, e) {
                        this.after_search(Boolean(t)), this.toggle_empty(!t), this.toggle_default(e), this.fire("options_updated", t)
                    },
                    after_search: function(t) {
                        this.expand_if_empty ? this.expanded || this.expand() : this.expanded ? t || this.collapse() : t && this.expand()
                    },
                    toggle_empty: function(t) {
                        s.ZP.tgl(this.wrap_el, "empty", t)
                    },
                    _onEmptyList: function() {
                        this.toggle_empty(!0)
                    },
                    toggle_default: function(t) {
                        s.ZP.tgl(this.wrap_el, "default", t)
                    },
                    toggle_can_reset: function(t) {
                        s.ZP.tgl(this.wrap_el, "reset", t)
                    }
                });
            "ie11" === o.ZP.ua && (h = $class(h, {
                _skip_input_change: !1,
                _blur_t: 0,
                init: function() {
                    this._skip_input_change = !0, $super(this, arguments), setTimeout(this._input_event_hack.bind(this), 250)
                },
                destroy: function() {
                    this._reset_blur_t(), $super(this, arguments)
                },
                focus: function() {
                    $super(this, arguments), this.input_el.placeholder && (this._skip_input_change = !0)
                },
                blur: function() {
                    $super(this, arguments), this._reset_blur_t()
                },
                input_change: function() {
                    this._skip_input_change ? this._skip_input_change = !1 : (this._reset_blur_t(), this._blur_t = setTimeout(function(t, e) {
                        t(this, e), this._reset_blur_t()
                    }.bind(this, $super, arguments), 50))
                },
                _reset_blur_t: function() {
                    this._blur_t && clearTimeout(this._blur_t), this._blur_t = 0
                },
                _input_event_hack: function() {
                    this._skip_input_change = !1
                }
            })), r.Z.register_control("data-list", h), e.Z = h
        },
        57176: function(t, e, i) {
            var n = i(91972),
                s = i(68986),
                o = i(91509),
                r = $class(o.Z, {
                    name: "Controls.DataListOptions",
                    url: "",
                    transport: null,
                    request_timer: null,
                    cache: null,
                    constructor: function() {
                        $super(this, arguments), this.request_timer = new n.Z(this.try_request, this, 250), this.cache = {
                            "": {
                                q: "",
                                locations: this.options_el.innerHTML,
                                default_item: !0
                            }
                        }
                    },
                    removeCache: function(t) {
                        delete this.cache[t]
                    },
                    destroy: function() {
                        this.destroy_transport(), this.request_timer.clear(), this.request_timer = null, this.cache = null, $super(this, arguments)
                    },
                    destroy_transport: function() {
                        this.transport && (this.transport.abort(), this.transport = null)
                    },
                    get_option_text: function(t) {
                        return t.innerText || t.textContent
                    },
                    reset: function() {
                        this.ready(this.cache[""], !0)
                    },
                    set_options: function(t) {
                        this.cache[""].locations = t, $super(this, arguments), this.reset()
                    },
                    select: function(t) {},
                    search: function(t) {
                        t.length < 2 ? this.cache[""] && this.ready(this.cache[""]) : (this.search_str = t, this.request_timer.set())
                    },
                    move_and_change: function(t, e) {
                        this.move(t, e)
                    },
                    try_request: function() {
                        var t = this.cache[this.search_str];
                        t ? this.ready(t) : (this.destroy_transport(), this.request(this.search_str))
                    },
                    request: function(t) {
                        this.transport = new s.Z(this.url, {
                            auto: !1,
                            ready: this.ready,
                            error: this.error
                        }, this), this.transport.request({
                            q: t
                        })
                    },
                    ready: function(t, e) {
                        this.cache[t.q] = t;
                        var i = !1;
                        this.expanded && (this.collapse(), i = !0), this.options_el.innerHTML = t.locations, this.options = this.get_options(), i && this.expand(), e || this.fire("updated", this.options.length, t.default_item), e && !this.options.length && this.fire("empty-list")
                    },
                    error: function() {}
                });
            e.Z = r
        },
        20140: function(t, e, i) {
            i(9653), i(74916), i(64765);
            var n = i(89812),
                s = i(38844),
                o = i(99480),
                r = i(49416),
                a = $class(r.Z, {
                    name: "Controls.LocationList",
                    global_collapse_time: 0,
                    local_collpase_time: 0,
                    hint_el: null,
                    supress_expand: !1,
                    init: function() {
                        this.hint_el = this.get_element(this.wrap_el, "hint"), $super(this, arguments), n.Z.on("hack:loc-ovl:done", this.on_ovl_done, this), n.Z.on("hack:loc-ovl:closed", this.on_ovl_closed, this), this.hint_el && this.hint_el.getAttribute("data-value") && s.Z.add(this.hint_el, "click", this.hint_click, this)
                    },
                    destroy: function() {
                        this.hint_el && (this.hint_el.getAttribute("data-value") && s.Z.del(this.hint_el, "click", this.hint_click, this), this.hint_el = null), n.Z.un("hack:loc-ovl:done", this.on_ovl_done, this), n.Z.un("hack:loc-ovl:closed", this.on_ovl_closed, this), $super(this, arguments)
                    },
                    set_options: function(t) {
                        this.options.set_options(t)
                    },
                    set_hint: function(t) {
                        this.hint_el.innerHTML = t
                    },
                    get_element: function(t, e) {
                        var i = null;
                        switch (e) {
                            case "hint":
                                if (i = o.ZP.down(t, ".js-location-list-hint")) return i;
                                break;
                            case "hint-wrapper":
                                if (i = o.ZP.down(t, ".js-location-list-hint-wrapper")) return i
                        }
                        return $super(this, arguments)
                    },
                    focus: function() {
                        $super(this, arguments), o.ZP.select_all(this.input_el)
                    },
                    collapse: function() {
                        var t = Number(new Date);
                        a.global_collapse_time = t, this.local_collpase_time = t, this.supress_expand = !1, $super(this, arguments)
                    },
                    on_ovl_done: function(t, e) {
                        this.local_collpase_time == a.global_collapse_time && (this.input_el.focus(), this.change({
                            value: t,
                            text: e,
                            label: e
                        }), this.search(e), this.supress_expand = !0)
                    },
                    on_ovl_closed: function() {
                        this.local_collpase_time == a.global_collapse_time && this.input_el.focus()
                    },
                    after_search: function() {
                        this.supress_expand ? this.supress_expand = !1 : $super(this, arguments)
                    },
                    hint_click: function(t) {
                        this.change({
                            value: t.getAttribute("data-value"),
                            label: t.getAttribute("data-label")
                        }), this.fire("suggest-location-click")
                    },
                    _initHintValue: function(t) {
                        var e = this.get_element(this.wrap_el, "hint"),
                            i = this.get_element(this.wrap_el, "hint-wrapper");
                        o.ZP.del(i, "is-pending"), e.setAttribute("data-value", t.locationId), e.setAttribute("data-label", t.locationName), e.innerText = t.location
                    }
                });
            e.Z = a
        },
        26001: function(t, e, i) {
            i(73210), i(74916), i(64765), i(19601), i(91058);
            var n = i(38844),
                s = i(99480),
                o = i(58844),
                r = i(34255),
                a = i(91509),
                l = 150,
                h = $class(r.Z, {
                    name: "Controls.Select",
                    label_el: null,
                    value_el: null,
                    reset_el: null,
                    expanded: !1,
                    disabled: !1,
                    options: null,
                    value: "",
                    placeholder: "",
                    click_in_progress: !1,
                    init: function() {
                        $super(this, arguments), this.prepareElements(), this.value_el && (this.value = this.value_el.value, this.toggle_value()), "" === this.value && this.insertLabel(this.placeholder), s.ZP.has(this.wrap_el, "autowidth") && this.autowidth(), n.Z.add(this.focus_el, "click", this.on_click, this), n.Z.add(this.focus_el, "keydown", this.on_keydown, this), n.Z.add(this.focus_el, "keypress", this.on_keypress, this), this.reset_el && n.Z.add(this.reset_el, "click", this.reset, this), this.init_options(), this.is_disabled() && this.disable(), this.is_active() && this.expand()
                    },
                    prepareElements: function() {
                        this.label_el = this.get_element(this.wrap_el, "label"), this.value_el = this.get_element(this.wrap_el, "value"), this.options_el = this.get_element(this.wrap_el, "options"), this.reset_el = this.get_element(this.wrap_el, "reset"), this.dropdown_preferred_direction = this.options_el.getAttribute("data-direction") || "bottom", this.placeholder = this.get_placeholder()
                    },
                    getLabelValue: function() {
                        var t = this.label_el.innerText;
                        return t === this.get_placeholder() && (t = ""), t
                    },
                    get_placeholder: function() {
                        var t = "";
                        return this.wrap_el.hasAttribute("data-placeholder") && (t = this.wrap_el.getAttribute("data-placeholder")), t
                    },
                    destroy: function() {
                        this.collapse(), this.destroy_options(), this.focus_el && (n.Z.del(this.focus_el, "click", this.on_click, this), n.Z.del(this.focus_el, "keydown", this.on_keydown, this), n.Z.del(this.focus_el, "keypress", this.on_keypress, this)), this.reset_el && n.Z.del(this.reset_el, "click", this.reset, this), this.label_el = null, this.value_el = null, this.options_el = null, this.reset_el = null, $super(this, arguments)
                    },
                    get_element: function(t, e) {
                        var i;
                        switch (e) {
                            case "focus":
                                i = s.ZP.down(t, ".select-field__label");
                                break;
                            case "label":
                                i = s.ZP.down(t, ".select-field__label-text");
                                break;
                            case "text":
                                i = s.ZP.down(t, ".text-field__input");
                                break;
                            case "options":
                                i = s.ZP.down(t, ".dropdown");
                                break;
                            case "value":
                                i = s.ZP.down(t, ".select-field__value");
                                break;
                            case "reset":
                                i = s.ZP.down(t, ".js-control-reset")
                        }
                        return i
                    },
                    create_options: function(t) {
                        return new a.Z({
                            wrap_el: t
                        })
                    },
                    init_options: function() {
                        this.options = this.create_options(this.options_el), this.options.on({
                            change: this.change,
                            click: this.options_click,
                            mousedown: this.options_mousedown,
                            mouseup: this.options_mouseup,
                            updated: this.correct_options_position,
                            "raw-search": this.options_raw_search
                        }, this)
                    },
                    destroy_options: function() {
                        this.options && (this.options.destroy(), this.options = null)
                    },
                    enable: function() {
                        this.disabled && (this.disabled = !1, this.toggle_disabled(!1))
                    },
                    disable: function() {
                        this.disabled || (this.expanded && this.collapse(), this.disabled = !0, this.toggle_disabled(!0), this.toggle_focus(!1))
                    },
                    is_disabled: function() {
                        return s.ZP.has(this.wrap_el, "disabled")
                    },
                    is_active: function() {
                        return s.ZP.has(this.wrap_el, "active")
                    },
                    focus: function() {
                        this.disabled || this.click_in_progress || (this.focus_el && this.focus_el.focus(), $super(this, arguments))
                    },
                    blur: function() {
                        this.click_in_progress || ($super(this, arguments), this.expanded && this.collapse())
                    },
                    expand: function() {
                        this.expanded || this.disabled || (this.correct_options_position(), this.toggle_active(!0), this.options.expand(this.value), this.expanded = !0, this.fire("expand"))
                    },
                    collapse: function() {
                        this.expanded && (this.options.collapse(), this.toggle_active(!1), this.expanded = !1)
                    },
                    set_selected_by_index: function(t) {
                        var e = this.options.options[t];
                        this.set_label(e.label || e.text), this.set_value(e.value)
                    },
                    change: function(t) {
                        this.fire("select", t.value, t.el), this.value !== t.value && (this.set_label(t.label), this.set_value(t.value), this.fire("change", t.value, this.options.index_by_option(t)))
                    },
                    set_value: function(t) {
                        this.value != t && (this.value = t, this.value_el && (this.value_el.value = t, n.Z.fire(this.value_el, "change")), this.toggle_value())
                    },
                    make_label: function(t) {
                        return null == t ? this.placeholder : t.trim()
                    },
                    set_label: function(t) {
                        this.insertLabel(this.make_label(t)), s.ZP.tgl(this.wrap_el, "has-placeholder", !t)
                    },
                    insertLabel: function(t) {
                        this.text_el ? this.text_el.value = t : this.label_el && (this.label_el.innerHTML = t)
                    },
                    reset: function() {
                        this.disabled || (this.set_value(""), this.set_label(), this.options.reset(), this.fire("reset"))
                    },
                    search: function(t) {
                        this.options.search(t)
                    },
                    autowidth: function() {
                        this.toggle_active(!0);
                        var t = this.wrap_el.cloneNode(!0),
                            e = s.ZP.create("div", {
                                className: "hidden_container"
                            });
                        document.body.appendChild(e), e.appendChild(t);
                        var i = s.ZP.down(t, ".dropdown").offsetWidth;
                        document.body.removeChild(e), this.wrap_el.style.width = i + "px", this.toggle_active(!1)
                    },
                    correct_options_position: function() {
                        this.toggle_active(!1);
                        var t = this.choose_direction(),
                            e = this.calculate_max_height(t),
                            i = this.get_corrected_options_height(e) - 20;
                        this.options_el.setAttribute("data-direction", t), this.options.scroll_el.style.maxHeight = i + "px", this.expanded && this.toggle_active(!0)
                    },
                    available_viewport_space: function(t) {
                        return "bottom" === t ? document.documentElement.clientHeight - this.wrap_el.getBoundingClientRect().bottom - 13 - 10 : this.wrap_el.getBoundingClientRect().top - 13 - 10
                    },
                    available_page_space: function(t) {
                        return "bottom" === t ? document.documentElement.scrollHeight - window.pageYOffset - this.wrap_el.getBoundingClientRect().bottom - 13 - 10 : this.wrap_el.getBoundingClientRect().top + window.pageYOffset - 13 - 10
                    },
                    potentially_available_viewport_space: function() {
                        return document.documentElement.clientHeight - this.wrap_el.clientHeight - 13 - 10
                    },
                    choose_direction: function() {
                        var t = this.dropdown_preferred_direction,
                            e = "bottom" === t ? "top" : "bottom";
                        return !!this.options_el.getAttribute("data-direction-lock") || this.available_viewport_space(t) >= l ? t : this.available_viewport_space(e) >= l || this.available_page_space(t) < l && this.available_page_space(e) >= l ? e : t
                    },
                    calculate_max_height: function(t) {
                        return this.available_viewport_space(t) >= l ? Math.min(this.available_viewport_space(t), 340) : Math.min(Math.max(l, this.potentially_available_viewport_space()), Math.min(340, this.available_page_space(t)))
                    },
                    get_corrected_options_height: function(t) {
                        var e = this.options_el.cloneNode(!0);
                        e.style = Object.assign({}, e.style, {
                            height: t + "px",
                            width: this.options_el.offsetWidth + "px",
                            position: "absolute",
                            top: "-10000px",
                            left: "-10000px"
                        }), document.body.appendChild(e);
                        for (var i = e.children, n = 0, s = 0; s < i.length; s++)
                            if (i[s].classList.contains("dropdown__hint")) {
                                var o = window.getComputedStyle(i[s]),
                                    r = parseInt(o.getPropertyValue("margin-top"), 10);
                                n += i[s].offsetHeight + r
                            }
                        return document.body.removeChild(e), t - n
                    },
                    toggle_active: function(t) {
                        s.ZP.tgl(this.wrap_el, "active", t)
                    },
                    toggle_disabled: function(t) {
                        s.ZP.tgl(this.wrap_el, "disabled", t)
                    },
                    toggle_value: function() {
                        s.ZP.tgl(this.wrap_el, "value", Boolean(this.value))
                    },
                    options_click: function(t) {
                        this.fire("select-option", t), this.collapse()
                    },
                    options_mousedown: function() {
                        this.click_in_progress = !0
                    },
                    options_mouseup: function() {
                        this.click_in_progress = !1, this.focus()
                    },
                    options_raw_search: function() {
                        this.fire("raw-search")
                    },
                    on_keydown: function() {
                        switch (n.Z.key(n.Z.e)) {
                            case 13:
                                if (this.expanded) return this.options.enter(), this.collapse(), !1;
                                break;
                            case 27:
                                if (this.expanded) return this.collapse(), !1;
                                break;
                            case 32:
                                return this.expanded || this.expand(), !0;
                            case 38:
                                return this.options.up(this.value, this.expanded), !1;
                            case 40:
                                return this.options.down(this.value, this.expanded), !1
                        }
                        return !0
                    },
                    on_keypress: function() {
                        var t = n.Z.key(n.Z.e);
                        return !(0 !== n.Z.e.charCode || 32 == t) || (this.search(String.fromCharCode(t)), !1)
                    },
                    on_click: function() {
                        this.disabled || (this.expanded ? this.collapse() : this.expand())
                    }
                });
            o.Z.register_control("select", h), e.Z = h
        },
        91509: function(t, e, i) {
            i(82772), i(92222), i(47042);
            var n = i(38844),
                s = i(99480),
                o = i(22778),
                r = i(52713),
                a = i(41537),
                l = i(91972),
                h = i(56640),
                _ = $class(a.Z, {
                    wrap_el: null,
                    scroll_el: null,
                    options_el: null,
                    options: null,
                    hovered_option: null,
                    selected_option: null,
                    selected_index: -1,
                    letter_mode: null,
                    expanded: !1,
                    search_reset_t: null,
                    search_str: "",
                    scrollbar: null,
                    constructor: function(t) {
                        $super(this, arguments), $config(this, t), this.init()
                    },
                    init: function() {
                        this.options_el = s.ZP.down(this.wrap_el, ".options"), s.ZP.down(this.wrap_el, ".scroll") || h.Z.wrap_block(this.options_el, {
                            scrollPosition: "dynamic"
                        }), this.scroll_el = s.ZP.down(this.wrap_el, ".scroll"), this.options = this.get_options(), this.search_reset_t = new l.Z(this.search_reset, this, 1200)
                    },
                    destroy: function() {
                        n.Z.del(this.wrap_el, "mouseover", this.on_mousemove, this), n.Z.del(this.wrap_el, "mousedown", this.on_mousedown, this), n.Z.del(document.body, "mouseup", this.on_mouseup, this), this.search_reset_t.clear(), this.wrap_el = null, this.scroll_el = null, this.options = null, this.search_reset_t = null, this.options_el = null, $super(this, arguments)
                    },
                    get_option_text: function(t) {
                        var e = s.ZP.down(t, ".option__txt").innerHTML;
                        return o.ZP.unescapeHTML(e)
                    },
                    get_options: function() {
                        for (var t, e, i, n = [], o = s.ZP.select(this.options_el, ".option"), r = 0; r < o.length; r++) t = o[r], i = this.get_option_text(t), e = {
                            el: t,
                            value: t.getAttribute("data-value"),
                            text: i,
                            text_lower: i.toLowerCase(),
                            label: t.getAttribute("data-label") || i,
                            disabled: s.ZP.has(t, "disabled"),
                            index: r
                        }, n.push(e);
                        return n
                    },
                    set_options: function(t) {
                        this.options_el.innerHTML = t, this.options = this.get_options()
                    },
                    expand: function(t) {
                        var e;
                        this.collapse_transition && (this.collapse_transition.clear(), this.collapse_cleanup()), this.expanded = !0, this.scrollbar = new h.Z(this.scroll_el), n.Z.add(this.wrap_el, "mouseover", this.on_mousemove, this), n.Z.add(this.wrap_el, "mousedown", this.on_mousedown, this), (e = t ? this.option_by_value(t) : this.option_by_class("hover")) && (this.hover(e), this.select(e), this.scroll_to(e)), this.render()
                    },
                    collapse: function() {
                        this.hovered_option = null, this.selected_option = null, this.render(), n.Z.del(this.wrap_el, "mouseover", this.on_mousemove, this), n.Z.del(this.wrap_el, "mousedown", this.on_mousedown, this), this.collapse_transition = r.Z.wait(this.wrap_el, this.collapse_cleanup, this), this.expanded = !1
                    },
                    collapse_cleanup: function() {
                        this.scrollbar && (this.scrollbar.destroy(), this.scrollbar = null, this.collapse_transition = null)
                    },
                    reset: function() {
                        this.hovered_option = null, this.selected_option = null, this.render()
                    },
                    search: function(t) {
                        var e, i, n = t.toLowerCase();
                        this.search_str += n, null === this.letter_mode || this.letter_mode && this.search_str[0] == n ? this.letter_mode = !0 : this.letter_mode = !1;
                        var s = this.options,
                            o = s.length;
                        this.letter_mode ? (e = (e = this.selected_index + 1) < o ? e : 0, i = function(t, e) {
                            return t[0] == e[0]
                        }) : (e = this.selected_index, i = function(t, e) {
                            return 0 === e.indexOf(t)
                        }), e && (s = s.slice(e).concat(s.slice(0, e))), this.search_reset_t.set();
                        for (var r = 0; r < o; r++)
                            if (i(this.search_str, s[r].text_lower)) {
                                this.search_done((e + r) % o);
                                break
                            }
                    },
                    search_done: function(t) {
                        var e = this.options[t];
                        this.selected_index = t, this.hover(e), this.select(e), this.render(), this.scroll_to(e)
                    },
                    search_reset: function() {
                        this.letter_mode = null, this.search_str = ""
                    },
                    enter: function() {
                        this.hovered_option ? this.change(this.hovered_option) : this.fire("raw-search")
                    },
                    up: function(t, e) {
                        this[e ? "move" : "move_and_change"](t, -1)
                    },
                    down: function(t, e) {
                        this[e ? "move" : "move_and_change"](t, 1)
                    },
                    shift_index: function(t, e) {
                        var i = t + e;
                        return i < 0 && (i = 0), i >= this.options.length && (i = this.options.length - 1), i
                    },
                    find_next_option: function(t, e) {
                        var i;
                        if (1 == this.options.length) return (i = this.options[0]).disabled ? null : i;
                        for (var n = this.shift_index(t, e), s = e > 0 ? this.options.length - 1 : 0;;) {
                            if (!(i = this.options[n]).disabled) return i;
                            if (n = this.shift_index(n, e), e > 0) {
                                if (n > s) break
                            } else if (n < s) break
                        }
                        return null
                    },
                    move: function(t, e) {
                        if (!this.options.length) return null;
                        var i;
                        i = this.hovered_option ? this.index_by_option(this.hovered_option) : t ? this.index_by_option(this.option_by_value(t)) : -1;
                        var n = this.find_next_option(i, e);
                        return n && (this.hover(n), this.select(n), this.render(), this.scroll_to(n)), n
                    },
                    move_and_change: function(t, e) {
                        var i = this.move(t, e);
                        i && this.change(i)
                    },
                    scroll_to: function(t) {
                        var e = s.ZP.down(this.wrap_el, ".scroll__inner"),
                            i = e.scrollTop,
                            n = i + e.offsetHeight,
                            o = t.el.offsetTop,
                            r = o + t.el.offsetHeight;
                        o < i ? e.scrollTop = o : r > n && (e.scrollTop += r - n)
                    },
                    option_by_value: function(t) {
                        for (var e, i = 0; i < this.options.length; i++)
                            if ((e = this.options[i]).value == t) return e;
                        return null
                    },
                    option_by_el: function(t) {
                        var e, i = t;
                        s.ZP.has(t, "option") || (i = s.ZP.up(t, ".option"));
                        for (var n = 0; n < this.options.length; n++)
                            if ((e = this.options[n]).el == i) return e;
                        return null
                    },
                    option_by_class: function(t) {
                        for (var e, i = 0; i < this.options.length; i++)
                            if (e = this.options[i], s.ZP.has(e.el, t)) return e;
                        return null
                    },
                    index_by_option: function(t) {
                        for (var e = 0; e < this.options.length; e++)
                            if (this.options[e] == t) return e;
                        return -1
                    },
                    hover: function(t) {
                        t && !t.disabled && (this.hovered_option = t)
                    },
                    select: function(t) {
                        this.selected_option = t
                    },
                    click: function(t) {
                        this.fire("click", t)
                    },
                    change: function(t) {
                        this.fire("change", t)
                    },
                    render: function() {
                        for (var t, e = 0; e < this.options.length; e++) t = this.options[e], s.ZP.tgl(t.el, "is-hovered", t == this.hovered_option), s.ZP.tgl(t.el, "is-selected", t == this.selected_option), s.ZP.tgl(t.el, "is-disabled", t.disabled), s.ZP.tgl(t.el, "is-hidden", t.hidden)
                    },
                    on_mousedown: function() {
                        return n.Z.add(document.body, "mouseup", this.on_mouseup, this), this.fire("mousedown"), !0
                    },
                    on_mouseup: function(t) {
                        n.Z.del(document.body, "mouseup", this.on_mouseup, this), this.fire("mouseup");
                        var e = this.option_by_el(t);
                        return e && (e.disabled || (this.click(e), this.change(e))), !0
                    },
                    on_mousemove: function(t) {
                        this.hover(this.option_by_el(t)), this.render()
                    }
                });
            "ie11" === o.ZP.ua && (_ = $class(_, {
                destroy: function() {
                    n.Z.del(this.wrap_el, "selectstart", this.on_selectstart, this), $super(this, arguments)
                },
                expand: function() {
                    $super(this, arguments), n.Z.add(this.wrap_el, "selectstart", this.on_selectstart, this)
                },
                collapse: function() {
                    n.Z.del(this.wrap_el, "selectstart", this.on_selectstart, this), $super(this, arguments)
                },
                on_selectstart: function() {
                    return !1
                }
            })), e.Z = _
        },
        24129: function(t, e, i) {
            var n = i(15519),
                s = i(41537),
                o = new $class({
                    name: "Push",
                    _observer: !1,
                    _enabled: !1,
                    _pending: null,
                    constructor: function() {
                        this._pending = [], this._observer = new s.Z
                    },
                    init: function(t) {
                        for (var e in t) n.Z.on(t[e], this._send, this, [t[e]])
                    },
                    on: function(t, e, i) {
                        return this._observer.on(t, e, i)
                    },
                    un: function(t, e, i) {
                        this._observer.un(t, e, i)
                    },
                    enable: function() {
                        this._enabled = !0, this._flush()
                    },
                    disable: function() {
                        this._enabled = !1
                    },
                    dispatch: function(t, e) {
                        return !!this._allowed(t) && (this._send(t, !1, e), !0)
                    },
                    _send: function(t, e, i) {
                        this._enabled ? this._observer.fire(t, i) : this._save(t, i)
                    },
                    _save: function(t, e) {
                        t !== o.Type.SESSION_FAILED && this._pending.push({
                            type: t,
                            message: e
                        })
                    },
                    _flush: function() {
                        if (this._enabled) {
                            var t = this._pending;
                            if (t.length) {
                                for (var e = 0; e < t.length; e++) {
                                    var i = t[e];
                                    this._send(i.type, !1, i.message)
                                }
                                this._pending = []
                            }
                        }
                    },
                    _allowed: function(t) {
                        for (var e in o.Type)
                            if (o.Type[e] === t) return !0;
                        return !1
                    }
                });
            o.Type = {
                NOTIFICATION: 158,
                SYSTEM_NOTIFCATION: 361,
                PERSON_NOTICE: 138,
                USER_DATA_INCOMPLETE: 176,
                CLIENT_BALANCE: 574,
                CHAT_MESSAGE: 105,
                CHAT_SETTINGS: 360,
                CHAT_MESSAGES_READ: 108,
                CHAT_IS_WRITING: 110,
                SERVER_ERROR: 1,
                SESSION_FAILED: 124,
                COMET_CONFIG: 383,
                APP_FEATURE: 148,
                CHANGE_HOST: 136,
                SPOTLIGHT_META_DATA: 300,
                INAPP_NOTIFICATION: 440,
                COMMON_SETTINGS_CHANGED: 455,
                CHAT_MESSAGE_RECEIVED: 151
            }, o.init(o.Type), e.Z = o
        },
        69504: function(t, e) {
            var i;
            try {
                Boolean(window.localStorage) && Boolean(window.sessionStorage) && (window.sessionStorage.setItem("__private_mode_test", !0), window.sessionStorage.removeItem("__private_mode_test"), i = window.sessionStorage)
            } catch (t) {}
            if (!i) {
                var n = {};
                i = {
                    getItem: function(t) {
                        return t in n ? n[t] : null
                    },
                    setItem: function(t, e) {
                        n[t] = e
                    },
                    removeItem: function(t) {
                        delete n[t]
                    }
                }
            }
            e.Z = i
        },
        74424: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return l
                }
            });
            var n = i(26078),
                s = i(26930),
                o = $class(s.Z, {
                    fetchMessages: [398, 379],
                    getSettings: function() {
                        return this.fetchData
                    },
                    setFetchedData: function(t) {
                        return this.fetchData = t, this
                    }
                }),
                r = i(24129),
                a = new $class(n.Z, {
                    CACHE_EXPIRATION_TIME: 36e5,
                    constructor: function() {
                        $super(this, arguments), r.Z.on(r.Z.Type.COMMON_SETTINGS_CHANGED, this._onCommonSettingsChange, this)
                    },
                    _onCommonSettingsChange: function() {
                        this.invalidate()
                    },
                    createModel: function() {
                        return new o
                    }
                }),
                l = a
        },
        69537: function(t, e, i) {
            i(74916), i(23123);
            var n = i(38844),
                s = i(99480),
                o = i(34183),
                r = i(74036),
                a = i(86719),
                l = new $class(a.Z, {
                    name: "Captcha",
                    init: function() {
                        n.Z.on(".js-reset-captcha,* .js-reset-captcha", this.reload_capcha, this)
                    },
                    reload_capcha: function() {
                        var t, e = s.ZP.$("check_code_img");
                        if (!e) return !0;
                        var n = s.ZP.$("checkcode");
                        e.hasAttribute("data-src") ? (t = e.getAttribute("data-src"), e.removeAttribute("data-src")) : t = e.src;
                        var a = (t = t.split("?"))[1] ? r.ZP.fromQueryString(t[1]) : {};
                        return e.src = o.ZP.getFlexibleImagesRoot() + i(87734).Z, a.reload = 1, a.rand = Math.random(), e.src = t[0] + "?" + r.ZP.toQueryString(a), n.value = "", n.focus(), !1
                    },
                    enable: function() {
                        var t = s.ZP.up(s.ZP.$("check_code_img"), ".js-captcha-code");
                        s.ZP.down(t, ".js-captcha-input").disabled = !1
                    }
                });
            e.Z = l
        },
        68553: function(t, e, i) {
            i(91058), i(9653), i(56977), i(65069);
            var n = i(38844),
                s = i(99480),
                o = i(22778),
                r = $class({
                    gradientPattern_: null,
                    gradientImage_: null,
                    pixelRatio_: 1,
                    animStartTime_: null,
                    animLabelBar_: null,
                    animLabelDisplay_: null,
                    canvas_: null,
                    context_: null,
                    labelContainer_: null,
                    currentFrameCount_: null,
                    idleTime_: 0,
                    GAP_ANGLE_: .4,
                    canvasSupported_: o.ZP.is_canvas_supported(),
                    options: {
                        size: 100,
                        reverse: !1,
                        counterclockwise: !1,
                        gradientImage: "",
                        lineWidth: 14,
                        elementClassName: "",
                        label: 0,
                        showLabel: !0,
                        animationLength: 0,
                        percentComplete: 0,
                        barAnimation: !1,
                        labelIncrement: !1,
                        labelIncrementFrameSkip: 3,
                        labelEffectClass: null,
                        labelEffectDelay: 1,
                        parentElement: null,
                        style: null
                    },
                    constructor: function(t) {
                        this.options = $config({}, r.prototype.options), this.update(t)
                    },
                    init: function() {
                        this.checkOptions_(), this._paused = null, this.currentFrameCount_ = 0, this.pixelRatio_ = window.devicePixelRatio ? window.devicePixelRatio : 1, this.canvasSupported_ && ("#" == this.options.gradientImage[0] ? (this.gradientPattern_ = this.options.gradientImage, this.render(), this.options.autorun && this.beginAnimation()) : (this.onReady = function() {
                            this.options.autorun && (this.render(), this.beginAnimation())
                        }, this.gradientImage_ = new Image, n.Z.add(this.gradientImage_, "load", this.onGradientLoaded_, this), this.gradientImage_.src = this.options.gradientImage))
                    },
                    destroy: function() {
                        this.gradientImage_ && n.Z.del(this.gradientImage_, "load", this.onGradientLoaded_, this), this.gradientPattern_ = null, this.gradientImage_ = null, this.animStartTime_ = null, this.canvas_ = null, this.context_ = null, this.labelContainer_ = null, this.options = null
                    },
                    _setDefaults: function() {
                        this.gradientPattern_ = null, this.gradientImage_ = null, this.pixelRatio_ = 1, this.animStartTime_ = null, this.animLabelBar_ = 0, this.animLabelDisplay_ = 0, this.canvas_ = null, this.context_ = null, this.labelContainer_ = null, this.currentFrameCount_ = 0
                    },
                    checkOptions_: function() {
                        "string" == typeof this.options.parentElement && (this.options.parentElement = s.ZP.down(document, this.options.parentElement)), null === this.options.style && (this.options.style = r.STYLES.LIGHT)
                    },
                    render: function() {
                        if (!this.options.parentElement) throw new Error("Attempt to render when no parent defined");
                        this.canvas_ = s.ZP.create("canvas", {
                            width: this.options.size * this.pixelRatio_,
                            height: this.options.size * this.pixelRatio_,
                            className: "scale-display " + this.options.elementClassName,
                            style: "width: " + this.options.size + "px; height: " + this.options.size + "px;"
                        }), this.options.parentElement.appendChild(this.canvas_), this.labelContainer_ = s.ZP.create("b", {
                            className: "scale-value"
                        }), this.options.parentElement.appendChild(this.labelContainer_), this.context_ = this.canvas_.getContext("2d"), 0 === this.options.animationLength && this.setUpStatic_()
                    },
                    update: function(t) {
                        this.options = $config(this.options, t), t && this.checkOptions_()
                    },
                    setAnimationTimeLeft: function(t) {
                        var e = parseInt(this.options.animationLength, 10),
                            i = this.animationTimeLeft_ + this.animStartTime_;
                        this.options.animationLength = Math.round(e + t - i - this.idleTime_), this._paused || window.requestAnimationFrame(this.setUpNextFrame_.bind(this))
                    },
                    beginAnimation: function() {
                        this.animLabelBar_ = 0, this.animLabelDisplay_ = 0, this.animStartTime_ = null, this.draw_(0), window.requestAnimationFrame(this.setUpNextFrame_.bind(this))
                    },
                    start: function() {
                        !0 !== this._paused && (this.idleTime_ += Number(new Date) - this.animStopTime_, this._paused = !1, window.requestAnimationFrame(this.setUpNextFrame_.bind(this)))
                    },
                    stop: function() {
                        this._paused || (this.animStopTime_ = Number(new Date), this._paused = !0)
                    },
                    getStep_: function(t, e, i, n) {
                        return this.options.barAnimation(t, e, i, n)
                    },
                    getLabelStep_: function(t) {
                        return this.options.labelAnimation(t)
                    },
                    getGradient_: function() {
                        if (!this.gradientPattern_) {
                            var t = this.gradientImage_,
                                e = s.ZP.create("canvas", {
                                    width: this.options.size * this.pixelRatio_,
                                    height: this.options.size * this.pixelRatio_
                                });
                            e.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, this.options.size * this.pixelRatio_, this.options.size * this.pixelRatio_), this.gradientPattern_ = this.context_.createPattern(e, "no-repeat")
                        }
                        return this.gradientPattern_
                    },
                    setUpStatic_: function() {
                        this.animLabelBar_ = 0, this.animLabelDisplay_ = 0;
                        var t = this.options.staticValue || this.options.label.toFixed(2);
                        t !== this.options.label.toFixed(2) ? s.ZP.add(this.labelContainer_, "no-dps") : s.ZP.del(this.labelContainer_, "no-dps"), this.labelContainer_.innerHTML = o.ZP.escapeHTML(this.options.showLabel ? t : ""), this.draw_(this.options.label)
                    },
                    draw_: function(t) {
                        var e = this.options,
                            i = this.context_,
                            n = e.size * this.pixelRatio_,
                            s = e.size / 2 * this.pixelRatio_,
                            o = s,
                            r = e.noGap ? 0 : this.GAP_ANGLE_,
                            a = (e.size / 2 - e.lineWidth / 2) * this.pixelRatio_,
                            l = Math.PI + Math.PI / 2 - r,
                            h = -Math.PI / 2 + r,
                            _ = t / 100 * (l - h),
                            u = e.counterclockwise ? l - _ : h + _;
                        i.clearRect(0, 0, n, n), i.beginPath(), i.arc(s, o, a, h, l, !1), i.strokeStyle = this.options.style, i.lineWidth = e.lineWidth * this.pixelRatio_, i.lineCap = "round", i.stroke(), i.beginPath(), e.counterclockwise ? i.arc(s, o, a, u, l, !1) : i.arc(s, o, a, h, u, !1), i.strokeStyle = this.getGradient_(), i.stroke()
                    },
                    setUpNextFrame_: function(t) {
                        var e = this.options;
                        if (e) {
                            null === this.animStartTime_ && (this.animStartTime_ = t);
                            var i = t - this.animStartTime_ - this.idleTime_,
                                n = this.getStep_(i, e.percentComplete, e.label, e.animationLength),
                                r = this.getLabelStep_(n);
                            this.options.reverse && (n = 100 - n), this.animationTimeLeft_ = e.animationLength - t, i < e.animationLength && (!e.percentComplete || i / e.animationLength < 1 - e.percentComplete / 100) ? (e.showLabel && 1 === this.currentFrameCount_ && (this.labelContainer_.innerHTML = o.ZP.escapeHTML(r)), this.currentFrameCount_ = this.currentFrameCount_ >= e.labelIncrementFrameSkip ? 1 : ++this.currentFrameCount_, this.draw_(n), this._paused || window.requestAnimationFrame(this.setUpNextFrame_.bind(this))) : (this.setUpStatic_(), e.onAnimationReady && e.onAnimationReady(this)), i > e.animationLength * e.labelEffectDelay && "string" == typeof e.labelEffectClass && s.ZP.add(this.labelContainer_, e.labelEffectClass)
                        }
                    },
                    onGradientLoaded_: function() {
                        this.gradientPattern_ = null, this.onReady && this.onReady()
                    },
                    defaultTiming: function(t, e, i, n) {
                        var s = t / n;
                        return s < 1 / 2.75 ? i * (7.5625 * s * s) + e : s < 2 / 2.75 ? i * (7.5625 * (s -= 1.5 / 2.75) * s + .75) + e : s < 2.5 / 2.75 ? i * (7.5625 * (s -= 2.25 / 2.75) * s + .9375) + e : i * (7.5625 * (s -= 2.625 / 2.75) * s + .984375) + e
                    },
                    defaultLabelTiming: function(t, e, i, n) {
                        return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
                    },
                    linearTiming: function(t, e, i, n) {
                        return e + i * (t / n)
                    }
                });
            r.STYLES = {
                LIGHT: "#ebebeb",
                DARK: "#171A1F",
                TRANSPARENT: "transparent"
            }, r.ANIMATION_TIMINGS = {
                NONE: !1,
                LINEAR: r.prototype.linearTiming,
                BOUNCE: r.prototype.defaultTiming,
                EXPONENTIAL: r.prototype.defaultLabelTiming
            }, e.Z = r
        },
        84: function(t, e, i) {
            i(41539), i(88674), i(69826);
            var n = i(22778),
                s = i(91993),
                o = i(51973),
                r = $class({
                    mediaRequestAllowedCallback: null,
                    mediaRequestRejectedCallback: null,
                    mediaRequestContext: null,
                    MEDIA_SETTINGS: {
                        video: {
                            mandatory: {
                                maxHeight: 330,
                                maxWidth: 600
                            }
                        }
                    },
                    constructor: function() {
                        this.navigatorMethod = this.getNavigatorMethod(), this.devicesMethod = this.getMediaDevicesMethod(), this.navigatorMethod ? this.getUserMedia = this.getNavigatorMedia : this.devicesMethod && (this.getUserMedia = this.getDevicesMedia)
                    },
                    getNavigatorMethod: function() {
                        var t = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                        if (t) return t.bind(navigator)
                    },
                    getMediaDevicesMethod: function() {
                        var t = navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
                        if (t) return t.bind(navigator.mediaDevices)
                    },
                    getNavigatorMedia: function(t, e, i) {
                        this.navigatorMethod(t, e, i)
                    },
                    getDevicesMedia: function(t, e, i) {
                        this.devicesMethod(t).then((function(t) {
                            e(t)
                        })).catch((function(t) {
                            i(t)
                        }))
                    },
                    destroy: function() {
                        this.clearMediaRequestCallbacks(), this.destroyed = !0
                    },
                    isWebcamAvailable: function(t, e, i) {
                        if (this.getUserMedia && this.enumerateFunctionSupported()) {
                            var n = this.enumerateDevices();
                            if ("function" != typeof n.then) return o.ZP.error_log(o.ZP.newError("Debug", "enumerateDevices does not have a then function"), {
                                origin: "Webcam",
                                debug_info: JSON.stringify({
                                    device_id: String(s.Z.get()),
                                    type: String(n)
                                })
                            }), void e.call(i);
                            n.then(this.checkUserHasWebcam.bind(this)).then(function(n) {
                                if (!this.destroyed) try {
                                    n ? t.call(i) : e.call(i)
                                } catch (t) {
                                    0,
                                    o.ZP.error_log(o.ZP.newError("Debug", "Error inside of camera api callback"), {
                                        debug_info: JSON.stringify({
                                            device_id: String(s.Z.get()),
                                            type: String(t)
                                        })
                                    })
                                }
                            }.bind(this)).catch((function(t) {
                                o.ZP.error_log(o.ZP.newError("Debug", "isWebcamAvailable failed unexpectedly"), {
                                    origin: "Webcam",
                                    debug_info: JSON.stringify({
                                        device_id: String(s.Z.get()),
                                        type: String(t)
                                    })
                                }), e.call(i)
                            }))
                        } else e.call(i)
                    },
                    enumerateFunctionSupported: function() {
                        return Boolean(navigator.mediaDevices || window.MediaStreamTrack && window.MediaStreamTrack.getSources)
                    },
                    enumerateDevices: function() {
                        return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices() : this.legacyEnumerateDevices()
                    },
                    legacyEnumerateDevices: function() {
                        return new Promise((function(t) {
                            window.MediaStreamTrack.getSources((function(e) {
                                t(e)
                            }))
                        }))
                    },
                    isVideoInput: function(t) {
                        return "videoinput" === t.kind || "video" === t.kind
                    },
                    checkUserHasWebcam: function(t) {
                        return Boolean(t.find(this.isVideoInput))
                    },
                    getWebcamMediaStream: function(t, e, i) {
                        this.mediaRequestAllowedCallback = t, this.mediaRequestRejectedCallback = e, this.mediaRequestContext = i, this.getUserMedia(this.MEDIA_SETTINGS, this.onMediaAllowed.bind(this), this.onMediaRejected.bind(this))
                    },
                    onMediaAllowed: function(t) {
                        this.mediaRequestAllowedCallback ? (this.mediaRequestAllowedCallback.call(this.mediaRequestContext, t), this.clearMediaRequestCallbacks()) : t.getVideoTracks()[0].stop()
                    },
                    onMediaRejected: function() {
                        this.mediaRequestRejectedCallback && (this.mediaRequestRejectedCallback.call(this.mediaRequestContext), this.clearMediaRequestCallbacks())
                    },
                    clearMediaRequestCallbacks: function() {
                        this.mediaRequestAllowedCallback = null, this.mediaRequestRejectedCallback = null, this.mediaRequestContext = null
                    },
                    prepareCanvas: function(t) {
                        var e = document.createElement("canvas"),
                            i = t.videoWidth,
                            s = t.videoHeight;
                        "ff" === n.ZP.ua && isNaN(s) && (s = i / (4 / 3)), e.width = i, e.height = s;
                        var o = e.getContext("2d");
                        return o.drawImage(t, 0, 0, i, s), [e, o]
                    },
                    takeSnapshotAsImageData: function(t) {
                        var e = this.prepareCanvas(t),
                            i = e[0];
                        return e[1].getImageData(0, 0, i.width, i.height)
                    },
                    takeSnapshotAsDataURL: function(t) {
                        return this.prepareCanvas(t)[0].toDataURL("image/png")
                    }
                });
            e.Z = r
        }
    }
]);