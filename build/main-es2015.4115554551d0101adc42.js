(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    '+rOU': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      }),
        n.d(e, 'b', function () {
          return h;
        }),
        n.d(e, 'c', function () {
          return d;
        }),
        n.d(e, 'd', function () {
          return o;
        }),
        n.d(e, 'e', function () {
          return l;
        }),
        n.d(e, 'f', function () {
          return f;
        }),
        n.d(e, 'g', function () {
          return m;
        }),
        n.d(e, 'h', function () {
          return a;
        });
      var r = n('fXoL'),
        s = n('ofXK');
      class i {
        attach(t) {
          return (this._attachedHost = t), t.attach(this);
        }
        detach() {
          let t = this._attachedHost;
          null != t && ((this._attachedHost = null), t.detach());
        }
        get isAttached() {
          return null != this._attachedHost;
        }
        setAttachedHost(t) {
          this._attachedHost = t;
        }
      }
      class o extends i {
        constructor(t, e, n, r) {
          super(),
            (this.component = t),
            (this.viewContainerRef = e),
            (this.injector = n),
            (this.componentFactoryResolver = r);
        }
      }
      class a extends i {
        constructor(t, e, n) {
          super(),
            (this.templateRef = t),
            (this.viewContainerRef = e),
            (this.context = n);
        }
        get origin() {
          return this.templateRef.elementRef;
        }
        attach(t, e = this.context) {
          return (this.context = e), super.attach(t);
        }
        detach() {
          return (this.context = void 0), super.detach();
        }
      }
      class u extends i {
        constructor(t) {
          super(), (this.element = t instanceof r.l ? t.nativeElement : t);
        }
      }
      class c {
        constructor() {
          (this._isDisposed = !1), (this.attachDomPortal = null);
        }
        hasAttached() {
          return !!this._attachedPortal;
        }
        attach(t) {
          return t instanceof o
            ? ((this._attachedPortal = t), this.attachComponentPortal(t))
            : t instanceof a
            ? ((this._attachedPortal = t), this.attachTemplatePortal(t))
            : this.attachDomPortal && t instanceof u
            ? ((this._attachedPortal = t), this.attachDomPortal(t))
            : void 0;
        }
        detach() {
          this._attachedPortal &&
            (this._attachedPortal.setAttachedHost(null),
            (this._attachedPortal = null)),
            this._invokeDisposeFn();
        }
        dispose() {
          this.hasAttached() && this.detach(),
            this._invokeDisposeFn(),
            (this._isDisposed = !0);
        }
        setDisposeFn(t) {
          this._disposeFn = t;
        }
        _invokeDisposeFn() {
          this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
        }
      }
      class l extends c {
        constructor(t, e, n, r, s) {
          super(),
            (this.outletElement = t),
            (this._componentFactoryResolver = e),
            (this._appRef = n),
            (this._defaultInjector = r),
            (this.attachDomPortal = (t) => {
              const e = t.element,
                n = this._document.createComment('dom-portal');
              e.parentNode.insertBefore(n, e),
                this.outletElement.appendChild(e),
                super.setDisposeFn(() => {
                  n.parentNode && n.parentNode.replaceChild(e, n);
                });
            }),
            (this._document = s);
        }
        attachComponentPortal(t) {
          const e = (
            t.componentFactoryResolver || this._componentFactoryResolver
          ).resolveComponentFactory(t.component);
          let n;
          return (
            t.viewContainerRef
              ? ((n = t.viewContainerRef.createComponent(
                  e,
                  t.viewContainerRef.length,
                  t.injector || t.viewContainerRef.injector
                )),
                this.setDisposeFn(() => n.destroy()))
              : ((n = e.create(t.injector || this._defaultInjector)),
                this._appRef.attachView(n.hostView),
                this.setDisposeFn(() => {
                  this._appRef.detachView(n.hostView), n.destroy();
                })),
            this.outletElement.appendChild(this._getComponentRootNode(n)),
            n
          );
        }
        attachTemplatePortal(t) {
          let e = t.viewContainerRef,
            n = e.createEmbeddedView(t.templateRef, t.context);
          return (
            n.rootNodes.forEach((t) => this.outletElement.appendChild(t)),
            n.detectChanges(),
            this.setDisposeFn(() => {
              let t = e.indexOf(n);
              -1 !== t && e.remove(t);
            }),
            n
          );
        }
        dispose() {
          super.dispose(),
            null != this.outletElement.parentNode &&
              this.outletElement.parentNode.removeChild(this.outletElement);
        }
        _getComponentRootNode(t) {
          return t.hostView.rootNodes[0];
        }
      }
      let h = (() => {
          class t extends a {
            constructor(t, e) {
              super(t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(r.L), r.Kb(r.P));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [['', 'cdkPortal', '']],
              exportAs: ['cdkPortal'],
              features: [r.wb]
            })),
            t
          );
        })(),
        d = (() => {
          class t extends c {
            constructor(t, e, n) {
              super(),
                (this._componentFactoryResolver = t),
                (this._viewContainerRef = e),
                (this._isInitialized = !1),
                (this.attached = new r.n()),
                (this.attachDomPortal = (t) => {
                  const e = t.element,
                    n = this._document.createComment('dom-portal');
                  t.setAttachedHost(this),
                    e.parentNode.insertBefore(n, e),
                    this._getRootNode().appendChild(e),
                    super.setDisposeFn(() => {
                      n.parentNode && n.parentNode.replaceChild(e, n);
                    });
                }),
                (this._document = n);
            }
            get portal() {
              return this._attachedPortal;
            }
            set portal(t) {
              (!this.hasAttached() || t || this._isInitialized) &&
                (this.hasAttached() && super.detach(),
                t && super.attach(t),
                (this._attachedPortal = t));
            }
            get attachedRef() {
              return this._attachedRef;
            }
            ngOnInit() {
              this._isInitialized = !0;
            }
            ngOnDestroy() {
              super.dispose(),
                (this._attachedPortal = null),
                (this._attachedRef = null);
            }
            attachComponentPortal(t) {
              t.setAttachedHost(this);
              const e =
                  null != t.viewContainerRef
                    ? t.viewContainerRef
                    : this._viewContainerRef,
                n = (
                  t.componentFactoryResolver || this._componentFactoryResolver
                ).resolveComponentFactory(t.component),
                r = e.createComponent(n, e.length, t.injector || e.injector);
              return (
                e !== this._viewContainerRef &&
                  this._getRootNode().appendChild(r.hostView.rootNodes[0]),
                super.setDisposeFn(() => r.destroy()),
                (this._attachedPortal = t),
                (this._attachedRef = r),
                this.attached.emit(r),
                r
              );
            }
            attachTemplatePortal(t) {
              t.setAttachedHost(this);
              const e = this._viewContainerRef.createEmbeddedView(
                t.templateRef,
                t.context
              );
              return (
                super.setDisposeFn(() => this._viewContainerRef.clear()),
                (this._attachedPortal = t),
                (this._attachedRef = e),
                this.attached.emit(e),
                e
              );
            }
            _getRootNode() {
              const t = this._viewContainerRef.element.nativeElement;
              return t.nodeType === t.ELEMENT_NODE ? t : t.parentNode;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(r.j), r.Kb(r.P), r.Kb(s.d));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [['', 'cdkPortalOutlet', '']],
              inputs: { portal: ['cdkPortalOutlet', 'portal'] },
              outputs: { attached: 'attached' },
              exportAs: ['cdkPortalOutlet'],
              features: [r.wb]
            })),
            t
          );
        })(),
        f = (() => {
          class t extends d {}
          return (
            (t.ɵfac = function (e) {
              return p(e || t);
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['', 'cdkPortalHost', ''],
                ['', 'portalHost', '']
              ],
              inputs: { portal: ['cdkPortalHost', 'portal'] },
              exportAs: ['cdkPortalHost'],
              features: [r.yb([{ provide: d, useExisting: t }]), r.wb]
            })),
            t
          );
        })();
      const p = r.Sb(f);
      let m = (() => {
        class t {}
        return (
          (t.ɵmod = r.Ib({ type: t })),
          (t.ɵinj = r.Hb({
            factory: function (e) {
              return new (e || t)();
            }
          })),
          t
        );
      })();
    },
    '/uUt': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('7o/Q');
      function s(t, e) {
        return (n) => n.lift(new i(t, e));
      }
      class i {
        constructor(t, e) {
          (this.compare = t), (this.keySelector = e);
        }
        call(t, e) {
          return e.subscribe(new o(t, this.compare, this.keySelector));
        }
      }
      class o extends r.a {
        constructor(t, e, n) {
          super(t),
            (this.keySelector = n),
            (this.hasKey = !1),
            'function' == typeof e && (this.compare = e);
        }
        compare(t, e) {
          return t === e;
        }
        _next(t) {
          let e;
          try {
            const { keySelector: n } = this;
            e = n ? n(t) : t;
          } catch (r) {
            return this.destination.error(r);
          }
          let n = !1;
          if (this.hasKey)
            try {
              const { compare: t } = this;
              n = t(this.key, e);
            } catch (r) {
              return this.destination.error(r);
            }
          else this.hasKey = !0;
          n || ((this.key = e), this.destination.next(t));
        }
      }
    },
    0: function (t, e, n) {
      t.exports = n('zUnb');
    },
    '0EQZ': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      }),
        n.d(e, 'b', function () {
          return a;
        }),
        n.d(e, 'c', function () {
          return h;
        }),
        n.d(e, 'd', function () {
          return l;
        }),
        n.d(e, 'e', function () {
          return d;
        }),
        n.d(e, 'f', function () {
          return u;
        });
      var r = n('7+OI'),
        s = n('LRne'),
        i = n('XNiG'),
        o = n('fXoL');
      class a {}
      function u(t) {
        return t && 'function' == typeof t.connect;
      }
      class c extends a {
        constructor(t) {
          super(), (this._data = t);
        }
        connect() {
          return Object(r.a)(this._data) ? this._data : Object(s.a)(this._data);
        }
        disconnect() {}
      }
      class l {
        constructor() {
          (this.viewCacheSize = 20), (this._viewCache = []);
        }
        applyChanges(t, e, n, r, s) {
          t.forEachOperation((t, i, o) => {
            let a, u;
            null == t.previousIndex
              ? ((a = this._insertView(() => n(t, i, o), o, e, r(t))),
                (u = a ? 1 : 0))
              : null == o
              ? (this._detachAndCacheView(i, e), (u = 3))
              : ((a = this._moveView(i, o, e, r(t))), (u = 2)),
              s &&
                s({
                  context: null == a ? void 0 : a.context,
                  operation: u,
                  record: t
                });
          });
        }
        detach() {
          for (const t of this._viewCache) t.destroy();
        }
        _insertView(t, e, n, r) {
          let s = this._insertViewFromCache(e, n);
          if (s) return void (s.context.$implicit = r);
          const i = t();
          return n.createEmbeddedView(i.templateRef, i.context, i.index);
        }
        _detachAndCacheView(t, e) {
          const n = this._detachView(t, e);
          this._maybeCacheView(n, e);
        }
        _moveView(t, e, n, r) {
          const s = n.get(t);
          return n.move(s, e), (s.context.$implicit = r), s;
        }
        _maybeCacheView(t, e) {
          if (this._viewCache.length < this.viewCacheSize)
            this._viewCache.push(t);
          else {
            const n = e.indexOf(t);
            -1 === n ? t.destroy() : e.remove(n);
          }
        }
        _insertViewFromCache(t, e) {
          const n = this._viewCache.pop();
          return n && e.insert(n, t), n || null;
        }
        _detachView(t, e) {
          return e.detach(t);
        }
      }
      class h {
        constructor(t = !1, e, n = !0) {
          (this._multiple = t),
            (this._emitChanges = n),
            (this._selection = new Set()),
            (this._deselectedToEmit = []),
            (this._selectedToEmit = []),
            (this.changed = new i.a()),
            e &&
              e.length &&
              (t
                ? e.forEach((t) => this._markSelected(t))
                : this._markSelected(e[0]),
              (this._selectedToEmit.length = 0));
        }
        get selected() {
          return (
            this._selected ||
              (this._selected = Array.from(this._selection.values())),
            this._selected
          );
        }
        select(...t) {
          this._verifyValueAssignment(t),
            t.forEach((t) => this._markSelected(t)),
            this._emitChangeEvent();
        }
        deselect(...t) {
          this._verifyValueAssignment(t),
            t.forEach((t) => this._unmarkSelected(t)),
            this._emitChangeEvent();
        }
        toggle(t) {
          this.isSelected(t) ? this.deselect(t) : this.select(t);
        }
        clear() {
          this._unmarkAll(), this._emitChangeEvent();
        }
        isSelected(t) {
          return this._selection.has(t);
        }
        isEmpty() {
          return 0 === this._selection.size;
        }
        hasValue() {
          return !this.isEmpty();
        }
        sort(t) {
          this._multiple && this.selected && this._selected.sort(t);
        }
        isMultipleSelection() {
          return this._multiple;
        }
        _emitChangeEvent() {
          (this._selected = null),
            (this._selectedToEmit.length || this._deselectedToEmit.length) &&
              (this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
              }),
              (this._deselectedToEmit = []),
              (this._selectedToEmit = []));
        }
        _markSelected(t) {
          this.isSelected(t) ||
            (this._multiple || this._unmarkAll(),
            this._selection.add(t),
            this._emitChanges && this._selectedToEmit.push(t));
        }
        _unmarkSelected(t) {
          this.isSelected(t) &&
            (this._selection.delete(t),
            this._emitChanges && this._deselectedToEmit.push(t));
        }
        _unmarkAll() {
          this.isEmpty() ||
            this._selection.forEach((t) => this._unmarkSelected(t));
        }
        _verifyValueAssignment(t) {}
      }
      const d = new o.q('_ViewRepeater');
    },
    '1G5W': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('zx2A');
      function s(t) {
        return (e) => e.lift(new i(t));
      }
      class i {
        constructor(t) {
          this.notifier = t;
        }
        call(t, e) {
          const n = new o(t),
            s = Object(r.c)(this.notifier, new r.a(n));
          return s && !n.seenValue ? (n.add(s), e.subscribe(n)) : n;
        }
      }
      class o extends r.b {
        constructor(t) {
          super(t), (this.seenValue = !1);
        }
        notifyNext() {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
    },
    '2QA8': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() =>
        'function' == typeof Symbol
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random())();
    },
    '2Vo4': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('XNiG'),
        s = n('9ppp');
      class i extends r.a {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new s.a();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
    },
    '2fFW': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      let r = !1;
      const s = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                t.stack
            );
          } else
            r &&
              console.log(
                'RxJS: Back to a better error behavior. Thank you. <3'
              );
          r = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        }
      };
    },
    '3E0/': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('D0XW'),
        s = n('7o/Q'),
        i = n('WMd4');
      function o(t, e = r.a) {
        var n;
        const s =
          (n = t) instanceof Date && !isNaN(+n) ? +t - e.now() : Math.abs(t);
        return (t) => t.lift(new a(s, e));
      }
      class a {
        constructor(t, e) {
          (this.delay = t), (this.scheduler = e);
        }
        call(t, e) {
          return e.subscribe(new u(t, this.delay, this.scheduler));
        }
      }
      class u extends s.a {
        constructor(t, e, n) {
          super(t),
            (this.delay = e),
            (this.scheduler = n),
            (this.queue = []),
            (this.active = !1),
            (this.errored = !1);
        }
        static dispatch(t) {
          const e = t.source,
            n = e.queue,
            r = t.scheduler,
            s = t.destination;
          for (; n.length > 0 && n[0].time - r.now() <= 0; )
            n.shift().notification.observe(s);
          if (n.length > 0) {
            const e = Math.max(0, n[0].time - r.now());
            this.schedule(t, e);
          } else this.unsubscribe(), (e.active = !1);
        }
        _schedule(t) {
          (this.active = !0),
            this.destination.add(
              t.schedule(u.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: t
              })
            );
        }
        scheduleNotification(t) {
          if (!0 === this.errored) return;
          const e = this.scheduler,
            n = new c(e.now() + this.delay, t);
          this.queue.push(n), !1 === this.active && this._schedule(e);
        }
        _next(t) {
          this.scheduleNotification(i.a.createNext(t));
        }
        _error(t) {
          (this.errored = !0),
            (this.queue = []),
            this.destination.error(t),
            this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(i.a.createComplete()), this.unsubscribe();
        }
      }
      class c {
        constructor(t, e) {
          (this.time = t), (this.notification = e);
        }
      }
    },
    '3N8a': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('quSY');
      class s extends r.a {
        constructor(t, e) {
          super();
        }
        schedule(t, e = 0) {
          return this;
        }
      }
      class i extends s {
        constructor(t, e) {
          super(t, e),
            (this.scheduler = t),
            (this.work = e),
            (this.pending = !1);
        }
        schedule(t, e = 0) {
          if (this.closed) return this;
          this.state = t;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id = this.id || this.requestAsyncId(r, this.id, e)),
            this
          );
        }
        requestAsyncId(t, e, n = 0) {
          return setInterval(t.flush.bind(t, this), n);
        }
        recycleAsyncId(t, e, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return e;
          clearInterval(e);
        }
        execute(t, e) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const n = this._execute(t, e);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(t, e) {
          let n = !1,
            r = void 0;
          try {
            this.work(t);
          } catch (s) {
            (n = !0), (r = (!!s && s) || new Error(s));
          }
          if (n) return this.unsubscribe(), r;
        }
        _unsubscribe() {
          const t = this.id,
            e = this.scheduler,
            n = e.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != t && (this.id = this.recycleAsyncId(e, t, null)),
            (this.delay = null);
        }
      }
    },
    '3Pt+': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return St;
      }),
        n.d(e, 'b', function () {
          return f;
        }),
        n.d(e, 'c', function () {
          return ct;
        }),
        n.d(e, 'd', function () {
          return vt;
        }),
        n.d(e, 'e', function () {
          return lt;
        }),
        n.d(e, 'f', function () {
          return _t;
        }),
        n.d(e, 'g', function () {
          return Ot;
        }),
        n.d(e, 'h', function () {
          return g;
        }),
        n.d(e, 'i', function () {
          return u;
        }),
        n.d(e, 'j', function () {
          return I;
        }),
        n.d(e, 'k', function () {
          return P;
        }),
        n.d(e, 'l', function () {
          return N;
        }),
        n.d(e, 'm', function () {
          return pt;
        }),
        n.d(e, 'n', function () {
          return kt;
        }),
        n.d(e, 'o', function () {
          return y;
        }),
        n.d(e, 'p', function () {
          return mt;
        });
      var r = n('fXoL'),
        s = n('ofXK'),
        i = n('cp0P'),
        o = n('Cfvw'),
        a = n('lJxs');
      const u = new r.q('NgValueAccessor'),
        c = { provide: u, useExisting: Object(r.T)(() => l), multi: !0 };
      let l = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'checked',
              t
            );
          }
          registerOnChange(t) {
            this.onChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['input', 'type', 'checkbox', 'formControlName', ''],
              ['input', 'type', 'checkbox', 'formControl', ''],
              ['input', 'type', 'checkbox', 'ngModel', '']
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Xb('change', function (t) {
                  return e.onChange(t.target.checked);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            features: [r.yb([c])]
          })),
          t
        );
      })();
      const h = { provide: u, useExisting: Object(r.T)(() => f), multi: !0 },
        d = new r.q('CompositionEventMode');
      let f = (() => {
        class t {
          constructor(t, e, n) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._compositionMode = n),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function () {
                  const t = Object(s.z)() ? Object(s.z)().getUserAgent() : '';
                  return /android (\d+)/.test(t.toLowerCase());
                })());
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              null == t ? '' : t
            );
          }
          registerOnChange(t) {
            this.onChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
          _handleInput(t) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(t);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(t) {
            (this._composing = !1), this._compositionMode && this.onChange(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l), r.Kb(d, 8));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', '']
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Xb('input', function (t) {
                  return e._handleInput(t.target.value);
                })('blur', function () {
                  return e.onTouched();
                })('compositionstart', function () {
                  return e._compositionStart();
                })('compositionend', function (t) {
                  return e._compositionEnd(t.target.value);
                });
            },
            features: [r.yb([h])]
          })),
          t
        );
      })();
      function p(t) {
        return null == t || 0 === t.length;
      }
      function m(t) {
        return null != t && 'number' == typeof t.length;
      }
      const g = new r.q('NgValidators'),
        b = new r.q('NgAsyncValidators'),
        _ = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class y {
        static min(t) {
          return (e) => {
            if (p(e.value) || p(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n < t
              ? { min: { min: t, actual: e.value } }
              : null;
          };
        }
        static max(t) {
          return (e) => {
            if (p(e.value) || p(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n > t
              ? { max: { max: t, actual: e.value } }
              : null;
          };
        }
        static required(t) {
          return p(t.value) ? { required: !0 } : null;
        }
        static requiredTrue(t) {
          return !0 === t.value ? null : { required: !0 };
        }
        static email(t) {
          return p(t.value) || _.test(t.value) ? null : { email: !0 };
        }
        static minLength(t) {
          return (e) =>
            p(e.value) || !m(e.value)
              ? null
              : e.value.length < t
              ? {
                  minlength: { requiredLength: t, actualLength: e.value.length }
                }
              : null;
        }
        static maxLength(t) {
          return (e) =>
            m(e.value) && e.value.length > t
              ? {
                  maxlength: { requiredLength: t, actualLength: e.value.length }
                }
              : null;
        }
        static pattern(t) {
          if (!t) return y.nullValidator;
          let e, n;
          return (
            'string' == typeof t
              ? ((n = ''),
                '^' !== t.charAt(0) && (n += '^'),
                (n += t),
                '$' !== t.charAt(t.length - 1) && (n += '$'),
                (e = new RegExp(n)))
              : ((n = t.toString()), (e = t)),
            (t) => {
              if (p(t.value)) return null;
              const r = t.value;
              return e.test(r)
                ? null
                : { pattern: { requiredPattern: n, actualValue: r } };
            }
          );
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          if (!t) return null;
          const e = t.filter(v);
          return 0 == e.length
            ? null
            : function (t) {
                return C(E(t, e));
              };
        }
        static composeAsync(t) {
          if (!t) return null;
          const e = t.filter(v);
          return 0 == e.length
            ? null
            : function (t) {
                const n = E(t, e).map(w);
                return Object(i.a)(n).pipe(Object(a.a)(C));
              };
        }
      }
      function v(t) {
        return null != t;
      }
      function w(t) {
        const e = Object(r.rb)(t) ? Object(o.a)(t) : t;
        return Object(r.qb)(e), e;
      }
      function C(t) {
        let e = {};
        return (
          t.forEach((t) => {
            e = null != t ? Object.assign(Object.assign({}, e), t) : e;
          }),
          0 === Object.keys(e).length ? null : e
        );
      }
      function E(t, e) {
        return e.map((e) => e(t));
      }
      function S(t) {
        return t.map((t) =>
          (function (t) {
            return !t.validate;
          })(t)
            ? t
            : (e) => t.validate(e)
        );
      }
      function D(t) {
        return null != t ? y.compose(S(t)) : null;
      }
      function A(t) {
        return null != t ? y.composeAsync(S(t)) : null;
      }
      function x(t, e) {
        return null === t ? [e] : Array.isArray(t) ? [...t, e] : [t, e];
      }
      function O(t) {
        return t._rawValidators;
      }
      function k(t) {
        return t._rawAsyncValidators;
      }
      let T = (() => {
          class t {
            constructor() {
              (this._rawValidators = []),
                (this._rawAsyncValidators = []),
                (this._onDestroyCallbacks = []);
            }
            get value() {
              return this.control ? this.control.value : null;
            }
            get valid() {
              return this.control ? this.control.valid : null;
            }
            get invalid() {
              return this.control ? this.control.invalid : null;
            }
            get pending() {
              return this.control ? this.control.pending : null;
            }
            get disabled() {
              return this.control ? this.control.disabled : null;
            }
            get enabled() {
              return this.control ? this.control.enabled : null;
            }
            get errors() {
              return this.control ? this.control.errors : null;
            }
            get pristine() {
              return this.control ? this.control.pristine : null;
            }
            get dirty() {
              return this.control ? this.control.dirty : null;
            }
            get touched() {
              return this.control ? this.control.touched : null;
            }
            get status() {
              return this.control ? this.control.status : null;
            }
            get untouched() {
              return this.control ? this.control.untouched : null;
            }
            get statusChanges() {
              return this.control ? this.control.statusChanges : null;
            }
            get valueChanges() {
              return this.control ? this.control.valueChanges : null;
            }
            get path() {
              return null;
            }
            _setValidators(t) {
              (this._rawValidators = t || []),
                (this._composedValidatorFn = D(this._rawValidators));
            }
            _setAsyncValidators(t) {
              (this._rawAsyncValidators = t || []),
                (this._composedAsyncValidatorFn = A(this._rawAsyncValidators));
            }
            get validator() {
              return this._composedValidatorFn || null;
            }
            get asyncValidator() {
              return this._composedAsyncValidatorFn || null;
            }
            _registerOnDestroy(t) {
              this._onDestroyCallbacks.push(t);
            }
            _invokeOnDestroyCallbacks() {
              this._onDestroyCallbacks.forEach((t) => t()),
                (this._onDestroyCallbacks = []);
            }
            reset(t) {
              this.control && this.control.reset(t);
            }
            hasError(t, e) {
              return !!this.control && this.control.hasError(t, e);
            }
            getError(t, e) {
              return this.control ? this.control.getError(t, e) : null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Fb({ type: t })),
            t
          );
        })(),
        F = (() => {
          class t extends T {
            get formDirective() {
              return null;
            }
            get path() {
              return null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return j(e || t);
            }),
            (t.ɵdir = r.Fb({ type: t, features: [r.wb] })),
            t
          );
        })();
      const j = r.Sb(F);
      class I extends T {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class R {
        constructor(t) {
          this._cd = t;
        }
        get ngClassUntouched() {
          var t, e, n;
          return (
            null !==
              (n =
                null ===
                  (e =
                    null === (t = this._cd) || void 0 === t
                      ? void 0
                      : t.control) || void 0 === e
                  ? void 0
                  : e.untouched) &&
            void 0 !== n &&
            n
          );
        }
        get ngClassTouched() {
          var t, e, n;
          return (
            null !==
              (n =
                null ===
                  (e =
                    null === (t = this._cd) || void 0 === t
                      ? void 0
                      : t.control) || void 0 === e
                  ? void 0
                  : e.touched) &&
            void 0 !== n &&
            n
          );
        }
        get ngClassPristine() {
          var t, e, n;
          return (
            null !==
              (n =
                null ===
                  (e =
                    null === (t = this._cd) || void 0 === t
                      ? void 0
                      : t.control) || void 0 === e
                  ? void 0
                  : e.pristine) &&
            void 0 !== n &&
            n
          );
        }
        get ngClassDirty() {
          var t, e, n;
          return (
            null !==
              (n =
                null ===
                  (e =
                    null === (t = this._cd) || void 0 === t
                      ? void 0
                      : t.control) || void 0 === e
                  ? void 0
                  : e.dirty) &&
            void 0 !== n &&
            n
          );
        }
        get ngClassValid() {
          var t, e, n;
          return (
            null !==
              (n =
                null ===
                  (e =
                    null === (t = this._cd) || void 0 === t
                      ? void 0
                      : t.control) || void 0 === e
                  ? void 0
                  : e.valid) &&
            void 0 !== n &&
            n
          );
        }
        get ngClassInvalid() {
          var t, e, n;
          return (
            null !==
              (n =
                null ===
                  (e =
                    null === (t = this._cd) || void 0 === t
                      ? void 0
                      : t.control) || void 0 === e
                  ? void 0
                  : e.invalid) &&
            void 0 !== n &&
            n
          );
        }
        get ngClassPending() {
          var t, e, n;
          return (
            null !==
              (n =
                null ===
                  (e =
                    null === (t = this._cd) || void 0 === t
                      ? void 0
                      : t.control) || void 0 === e
                  ? void 0
                  : e.pending) &&
            void 0 !== n &&
            n
          );
        }
      }
      let P = (() => {
          class t extends R {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(I, 2));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', '']
              ],
              hostVars: 14,
              hostBindings: function (t, e) {
                2 & t &&
                  r.Cb('ng-untouched', e.ngClassUntouched)(
                    'ng-touched',
                    e.ngClassTouched
                  )('ng-pristine', e.ngClassPristine)(
                    'ng-dirty',
                    e.ngClassDirty
                  )('ng-valid', e.ngClassValid)('ng-invalid', e.ngClassInvalid)(
                    'ng-pending',
                    e.ngClassPending
                  );
              },
              features: [r.wb]
            })),
            t
          );
        })(),
        N = (() => {
          class t extends R {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(F, 10));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', '']
              ],
              hostVars: 14,
              hostBindings: function (t, e) {
                2 & t &&
                  r.Cb('ng-untouched', e.ngClassUntouched)(
                    'ng-touched',
                    e.ngClassTouched
                  )('ng-pristine', e.ngClassPristine)(
                    'ng-dirty',
                    e.ngClassDirty
                  )('ng-valid', e.ngClassValid)('ng-invalid', e.ngClassInvalid)(
                    'ng-pending',
                    e.ngClassPending
                  );
              },
              features: [r.wb]
            })),
            t
          );
        })();
      const L = { provide: u, useExisting: Object(r.T)(() => M), multi: !0 };
      let M = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              null == t ? '' : t
            );
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['input', 'type', 'number', 'formControlName', ''],
              ['input', 'type', 'number', 'formControl', ''],
              ['input', 'type', 'number', 'ngModel', '']
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Xb('input', function (t) {
                  return e.onChange(t.target.value);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            features: [r.yb([L])]
          })),
          t
        );
      })();
      const V = { provide: u, useExisting: Object(r.T)(() => U), multi: !0 };
      let B = (() => {
          class t {
            constructor() {
              this._accessors = [];
            }
            add(t, e) {
              this._accessors.push([t, e]);
            }
            remove(t) {
              for (let e = this._accessors.length - 1; e >= 0; --e)
                if (this._accessors[e][1] === t)
                  return void this._accessors.splice(e, 1);
            }
            select(t) {
              this._accessors.forEach((e) => {
                this._isSameGroup(e, t) &&
                  e[1] !== t &&
                  e[1].fireUncheck(t.value);
              });
            }
            _isSameGroup(t, e) {
              return (
                !!t[0].control &&
                t[0]._parent === e._control._parent &&
                t[1].name === e.name
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        U = (() => {
          class t {
            constructor(t, e, n, r) {
              (this._renderer = t),
                (this._elementRef = e),
                (this._registry = n),
                (this._injector = r),
                (this.onChange = () => {}),
                (this.onTouched = () => {});
            }
            ngOnInit() {
              (this._control = this._injector.get(I)),
                this._checkName(),
                this._registry.add(this._control, this);
            }
            ngOnDestroy() {
              this._registry.remove(this);
            }
            writeValue(t) {
              (this._state = t === this.value),
                this._renderer.setProperty(
                  this._elementRef.nativeElement,
                  'checked',
                  this._state
                );
            }
            registerOnChange(t) {
              (this._fn = t),
                (this.onChange = () => {
                  t(this.value), this._registry.select(this);
                });
            }
            fireUncheck(t) {
              this.writeValue(t);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            setDisabledState(t) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'disabled',
                t
              );
            }
            _checkName() {
              !this.name &&
                this.formControlName &&
                (this.name = this.formControlName);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(r.E), r.Kb(r.l), r.Kb(B), r.Kb(r.r));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['input', 'type', 'radio', 'formControlName', ''],
                ['input', 'type', 'radio', 'formControl', ''],
                ['input', 'type', 'radio', 'ngModel', '']
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  r.Xb('change', function () {
                    return e.onChange();
                  })('blur', function () {
                    return e.onTouched();
                  });
              },
              inputs: {
                name: 'name',
                formControlName: 'formControlName',
                value: 'value'
              },
              features: [r.yb([V])]
            })),
            t
          );
        })();
      const z = { provide: u, useExisting: Object(r.T)(() => H), multi: !0 };
      let H = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              parseFloat(t)
            );
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['input', 'type', 'range', 'formControlName', ''],
              ['input', 'type', 'range', 'formControl', ''],
              ['input', 'type', 'range', 'ngModel', '']
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Xb('change', function (t) {
                  return e.onChange(t.target.value);
                })('input', function (t) {
                  return e.onChange(t.target.value);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            features: [r.yb([z])]
          })),
          t
        );
      })();
      const q = { provide: u, useExisting: Object(r.T)(() => K), multi: !0 };
      let K = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Object.is);
          }
          set compareWith(t) {
            this._compareWith = t;
          }
          writeValue(t) {
            this.value = t;
            const e = this._getOptionId(t);
            null == e &&
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'selectedIndex',
                -1
              );
            const n = (function (t, e) {
              return null == t
                ? '' + e
                : (e && 'object' == typeof e && (e = 'Object'),
                  `${t}: ${e}`.slice(0, 50));
            })(e, t);
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              n
            );
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              (this.value = this._getOptionValue(e)), t(this.value);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
          _registerOption() {
            return (this._idCounter++).toString();
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e), t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function (t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e) : t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['select', 'formControlName', '', 3, 'multiple', ''],
              ['select', 'formControl', '', 3, 'multiple', ''],
              ['select', 'ngModel', '', 3, 'multiple', '']
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Xb('change', function (t) {
                  return e.onChange(t.target.value);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: 'compareWith' },
            features: [r.yb([q])]
          })),
          t
        );
      })();
      const $ = { provide: u, useExisting: Object(r.T)(() => G), multi: !0 };
      let G = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Object.is);
          }
          set compareWith(t) {
            this._compareWith = t;
          }
          writeValue(t) {
            let e;
            if (((this.value = t), Array.isArray(t))) {
              const n = t.map((t) => this._getOptionId(t));
              e = (t, e) => {
                t._setSelected(n.indexOf(e.toString()) > -1);
              };
            } else
              e = (t, e) => {
                t._setSelected(!1);
              };
            this._optionMap.forEach(e);
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              const n = [];
              if (void 0 !== e.selectedOptions) {
                const t = e.selectedOptions;
                for (let e = 0; e < t.length; e++) {
                  const r = t.item(e),
                    s = this._getOptionValue(r.value);
                  n.push(s);
                }
              } else {
                const t = e.options;
                for (let e = 0; e < t.length; e++) {
                  const r = t.item(e);
                  if (r.selected) {
                    const t = this._getOptionValue(r.value);
                    n.push(t);
                  }
                }
              }
              (this.value = n), t(n);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
          _registerOption(t) {
            const e = (this._idCounter++).toString();
            return this._optionMap.set(e, t), e;
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e)._value, t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function (t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e)._value : t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['select', 'multiple', '', 'formControlName', ''],
              ['select', 'multiple', '', 'formControl', ''],
              ['select', 'multiple', '', 'ngModel', '']
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Xb('change', function (t) {
                  return e.onChange(t.target);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: 'compareWith' },
            features: [r.yb([$])]
          })),
          t
        );
      })();
      function W(t, e) {
        Z(t, e, !0),
          e.valueAccessor.writeValue(t.value),
          (function (t, e) {
            e.valueAccessor.registerOnChange((n) => {
              (t._pendingValue = n),
                (t._pendingChange = !0),
                (t._pendingDirty = !0),
                'change' === t.updateOn && Y(t, e);
            });
          })(t, e),
          (function (t, e) {
            const n = (t, n) => {
              e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
            };
            t.registerOnChange(n),
              e._registerOnDestroy(() => {
                t._unregisterOnChange(n);
              });
          })(t, e),
          (function (t, e) {
            e.valueAccessor.registerOnTouched(() => {
              (t._pendingTouched = !0),
                'blur' === t.updateOn && t._pendingChange && Y(t, e),
                'submit' !== t.updateOn && t.markAsTouched();
            });
          })(t, e),
          (function (t, e) {
            if (e.valueAccessor.setDisabledState) {
              const n = (t) => {
                e.valueAccessor.setDisabledState(t);
              };
              t.registerOnDisabledChange(n),
                e._registerOnDestroy(() => {
                  t._unregisterOnDisabledChange(n);
                });
            }
          })(t, e);
      }
      function Q(t, e) {
        t.forEach((t) => {
          t.registerOnValidatorChange && t.registerOnValidatorChange(e);
        });
      }
      function Z(t, e, n) {
        const r = O(t);
        null !== e.validator
          ? t.setValidators(x(r, e.validator))
          : 'function' == typeof r && t.setValidators([r]);
        const s = k(t);
        if (
          (null !== e.asyncValidator
            ? t.setAsyncValidators(x(s, e.asyncValidator))
            : 'function' == typeof s && t.setAsyncValidators([s]),
          n)
        ) {
          const n = () => t.updateValueAndValidity();
          Q(e._rawValidators, n), Q(e._rawAsyncValidators, n);
        }
      }
      function X(t, e, n) {
        if (null !== t) {
          if (null !== e.validator) {
            const n = O(t);
            Array.isArray(n) &&
              n.length > 0 &&
              t.setValidators(n.filter((t) => t !== e.validator));
          }
          if (null !== e.asyncValidator) {
            const n = k(t);
            Array.isArray(n) &&
              n.length > 0 &&
              t.setAsyncValidators(n.filter((t) => t !== e.asyncValidator));
          }
        }
        if (n) {
          const t = () => {};
          Q(e._rawValidators, t), Q(e._rawAsyncValidators, t);
        }
      }
      function Y(t, e) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function J(t, e) {
        Z(t, e, !1);
      }
      const tt = [l, H, M, K, G, U];
      function et(t, e) {
        t._syncPendingControls(),
          e.forEach((t) => {
            const e = t.control;
            'submit' === e.updateOn &&
              e._pendingChange &&
              (t.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
          });
      }
      function nt(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      function rt(t) {
        return (at(t) ? t.validators : t) || null;
      }
      function st(t) {
        return Array.isArray(t) ? D(t) : t || null;
      }
      function it(t, e) {
        return (at(e) ? e.asyncValidators : t) || null;
      }
      function ot(t) {
        return Array.isArray(t) ? A(t) : t || null;
      }
      function at(t) {
        return null != t && !Array.isArray(t) && 'object' == typeof t;
      }
      class ut {
        constructor(t, e) {
          (this._hasOwnPendingAsyncValidator = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = t),
            (this._rawAsyncValidators = e),
            (this._composedValidatorFn = st(this._rawValidators)),
            (this._composedAsyncValidatorFn = ot(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(t) {
          this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return 'VALID' === this.status;
        }
        get invalid() {
          return 'INVALID' === this.status;
        }
        get pending() {
          return 'PENDING' == this.status;
        }
        get disabled() {
          return 'DISABLED' === this.status;
        }
        get enabled() {
          return 'DISABLED' !== this.status;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : 'change';
        }
        setValidators(t) {
          (this._rawValidators = t), (this._composedValidatorFn = st(t));
        }
        setAsyncValidators(t) {
          (this._rawAsyncValidators = t),
            (this._composedAsyncValidatorFn = ot(t));
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0),
            this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((t) => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1),
            this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = 'PENDING'),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'DISABLED'),
            (this.errors = null),
            this._forEachChild((e) => {
              e.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'VALID'),
            this._forEachChild((e) => {
              e.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent
            }),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              ('VALID' !== this.status && 'PENDING' !== this.status) ||
                this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild((e) => e._updateTreeValidity(t)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            (this.status = 'PENDING'), (this._hasOwnPendingAsyncValidator = !0);
            const e = w(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe((e) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(e, { emitEvent: t });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function (t, e, n) {
            if (null == e) return null;
            if (
              (Array.isArray(e) || (e = e.split('.')),
              Array.isArray(e) && 0 === e.length)
            )
              return null;
            let r = t;
            return (
              e.forEach((t) => {
                r =
                  r instanceof lt
                    ? r.controls.hasOwnProperty(t)
                      ? r.controls[t]
                      : null
                    : (r instanceof ht && r.at(t)) || null;
              }),
              r
            );
          })(this, t);
        }
        getError(t, e) {
          const n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new r.n()), (this.statusChanges = new r.n());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? 'DISABLED'
            : this.errors
            ? 'INVALID'
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus('PENDING')
            ? 'PENDING'
            : this._anyControlsHaveStatus('INVALID')
            ? 'INVALID'
            : 'VALID';
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls((e) => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((t) => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return (
            'object' == typeof t &&
            null !== t &&
            2 === Object.keys(t).length &&
            'value' in t &&
            'disabled' in t
          );
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          at(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return (
            !t &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class ct extends ut {
        constructor(t = null, e, n) {
          super(rt(e), it(n, e)),
            (this._onChange = []),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this._initObservables(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!n });
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach((t) =>
                t(this.value, !1 !== e.emitViewToModelChange)
              ),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = null, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _unregisterOnChange(t) {
          nt(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          nt(this._onDisabledChange, t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1
            }),
            0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class lt extends ut {
        constructor(t, e, n) {
          super(rt(e), it(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!n });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e),
              e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange),
              e);
        }
        addControl(t, e) {
          this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        removeControl(t) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(t, e) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            Object.keys(t).forEach((n) => {
              this._throwIfControlMissing(n),
                this.controls[n].setValue(t[n], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          Object.keys(t).forEach((n) => {
            this.controls[n] &&
              this.controls[n].patchValue(t[n], {
                onlySelf: !0,
                emitEvent: e.emitEvent
              });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = {}, e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => (
              (t[n] = e instanceof ct ? e.value : e.getRawValue()), t
            )
          );
        }
        _syncPendingControls() {
          let t = this._reduceChildren(
            !1,
            (t, e) => !!e._syncPendingControls() || t
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[t])
            throw new Error(`Cannot find form control with name: ${t}.`);
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach((e) => t(this.controls[e], e));
        }
        _setUpControls() {
          this._forEachChild((t) => {
            t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          for (const e of Object.keys(this.controls)) {
            const n = this.controls[e];
            if (this.contains(e) && t(n)) return !0;
          }
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t)
          );
        }
        _reduceChildren(t, e) {
          let n = t;
          return (
            this._forEachChild((t, r) => {
              n = e(n, t, r);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls))
            if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control with name: '${n}'.`
              );
          });
        }
      }
      class ht extends ut {
        constructor(t, e, n) {
          super(rt(e), it(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!n });
        }
        at(t) {
          return this.controls[t];
        }
        push(t) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        insert(t, e) {
          this.controls.splice(t, 0, e),
            this._registerControl(e),
            this.updateValueAndValidity();
        }
        removeAt(t) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity();
        }
        setControl(t, e) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            t.forEach((t, n) => {
              this._throwIfControlMissing(n),
                this.at(n).setValue(t, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          t.forEach((t, n) => {
            this.at(n) &&
              this.at(n).patchValue(t, {
                onlySelf: !0,
                emitEvent: e.emitEvent
              });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = [], e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map((t) =>
            t instanceof ct ? t.value : t.getRawValue()
          );
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let t = this.controls.reduce(
            (t, e) => !!e._syncPendingControls() || t,
            !1
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(t))
            throw new Error('Cannot find form control at index ' + t);
        }
        _forEachChild(t) {
          this.controls.forEach((e, n) => {
            t(e, n);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((t) => t.enabled || this.disabled)
            .map((t) => t.value);
        }
        _anyControls(t) {
          return this.controls.some((e) => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild((t) => this._registerControl(t));
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control at index: ${n}.`
              );
          });
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const dt = { provide: F, useExisting: Object(r.T)(() => pt) },
        ft = (() => Promise.resolve(null))();
      let pt = (() => {
          class t extends F {
            constructor(t, e) {
              super(),
                (this.submitted = !1),
                (this._directives = []),
                (this.ngSubmit = new r.n()),
                (this.form = new lt({}, D(t), A(e)));
            }
            ngAfterViewInit() {
              this._setUpdateStrategy();
            }
            get formDirective() {
              return this;
            }
            get control() {
              return this.form;
            }
            get path() {
              return [];
            }
            get controls() {
              return this.form.controls;
            }
            addControl(t) {
              ft.then(() => {
                const e = this._findContainer(t.path);
                (t.control = e.registerControl(t.name, t.control)),
                  W(t.control, t),
                  t.control.updateValueAndValidity({ emitEvent: !1 }),
                  this._directives.push(t);
              });
            }
            getControl(t) {
              return this.form.get(t.path);
            }
            removeControl(t) {
              ft.then(() => {
                const e = this._findContainer(t.path);
                e && e.removeControl(t.name), nt(this._directives, t);
              });
            }
            addFormGroup(t) {
              ft.then(() => {
                const e = this._findContainer(t.path),
                  n = new lt({});
                J(n, t),
                  e.registerControl(t.name, n),
                  n.updateValueAndValidity({ emitEvent: !1 });
              });
            }
            removeFormGroup(t) {
              ft.then(() => {
                const e = this._findContainer(t.path);
                e && e.removeControl(t.name);
              });
            }
            getFormGroup(t) {
              return this.form.get(t.path);
            }
            updateModel(t, e) {
              ft.then(() => {
                this.form.get(t.path).setValue(e);
              });
            }
            setValue(t) {
              this.control.setValue(t);
            }
            onSubmit(t) {
              return (
                (this.submitted = !0),
                et(this.form, this._directives),
                this.ngSubmit.emit(t),
                !1
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(t) {
              this.form.reset(t), (this.submitted = !1);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.form._updateOn = this.options.updateOn);
            }
            _findContainer(t) {
              return t.pop(), t.length ? this.form.get(t) : this.form;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(g, 10), r.Kb(b, 10));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['form', 3, 'ngNoForm', '', 3, 'formGroup', ''],
                ['ng-form'],
                ['', 'ngForm', '']
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  r.Xb('submit', function (t) {
                    return e.onSubmit(t);
                  })('reset', function () {
                    return e.onReset();
                  });
              },
              inputs: { options: ['ngFormOptions', 'options'] },
              outputs: { ngSubmit: 'ngSubmit' },
              exportAs: ['ngForm'],
              features: [r.yb([dt]), r.wb]
            })),
            t
          );
        })(),
        mt = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']
              ],
              hostAttrs: ['novalidate', '']
            })),
            t
          );
        })();
      const gt = new r.q('NgModelWithFormControlWarning'),
        bt = { provide: F, useExisting: Object(r.T)(() => _t) };
      let _t = (() => {
        class t extends F {
          constructor(t, e) {
            super(),
              (this.validators = t),
              (this.asyncValidators = e),
              (this.submitted = !1),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new r.n()),
              this._setValidators(t),
              this._setAsyncValidators(e);
          }
          ngOnChanges(t) {
            this._checkFormPresent(),
              t.hasOwnProperty('form') &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(t) {
            const e = this.form.get(t.path);
            return (
              W(e, t),
              e.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(t),
              e
            );
          }
          getControl(t) {
            return this.form.get(t.path);
          }
          removeControl(t) {
            nt(this.directives, t);
          }
          addFormGroup(t) {
            const e = this.form.get(t.path);
            J(e, t), e.updateValueAndValidity({ emitEvent: !1 });
          }
          removeFormGroup(t) {}
          getFormGroup(t) {
            return this.form.get(t.path);
          }
          addFormArray(t) {
            const e = this.form.get(t.path);
            J(e, t), e.updateValueAndValidity({ emitEvent: !1 });
          }
          removeFormArray(t) {}
          getFormArray(t) {
            return this.form.get(t.path);
          }
          updateModel(t, e) {
            this.form.get(t.path).setValue(e);
          }
          onSubmit(t) {
            return (
              (this.submitted = !0),
              et(this.form, this.directives),
              this.ngSubmit.emit(t),
              !1
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(t) {
            this.form.reset(t), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((t) => {
              const e = this.form.get(t.path);
              t.control !== e &&
                ((function (t, e) {
                  const n = () => {};
                  e.valueAccessor.registerOnChange(n),
                    e.valueAccessor.registerOnTouched(n),
                    X(t, e, !0),
                    t &&
                      (e._invokeOnDestroyCallbacks(),
                      t._registerOnCollectionChange(() => {}));
                })(t.control || null, t),
                e && W(e, t),
                (t.control = e));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(() => this._updateDomValue()),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            Z(this.form, this, !1), this._oldForm && X(this._oldForm, this, !1);
          }
          _checkFormPresent() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(g, 10), r.Kb(b, 10));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (t, e) {
              1 & t &&
                r.Xb('submit', function (t) {
                  return e.onSubmit(t);
                })('reset', function () {
                  return e.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [r.yb([bt]), r.wb, r.xb]
          })),
          t
        );
      })();
      const yt = { provide: I, useExisting: Object(r.T)(() => vt) };
      let vt = (() => {
        class t extends I {
          constructor(t, e, n, s, i) {
            super(),
              (this._ngModelWarningConfig = i),
              (this._added = !1),
              (this.update = new r.n()),
              (this._ngModelWarningSent = !1),
              (this._parent = t),
              this._setValidators(e),
              this._setAsyncValidators(n),
              (this.valueAccessor = (function (t, e) {
                if (!e) return null;
                Array.isArray(e);
                let n = void 0,
                  r = void 0,
                  s = void 0;
                return (
                  e.forEach((t) => {
                    var e;
                    t.constructor === f
                      ? (n = t)
                      : ((e = t),
                        tt.some((t) => e.constructor === t)
                          ? (r = t)
                          : (s = t));
                  }),
                  s || r || n || null
                );
              })(0, s));
          }
          set isDisabled(t) {}
          ngOnChanges(t) {
            this._added || this._setUpControl(),
              (function (t, e) {
                if (!t.hasOwnProperty('model')) return !1;
                const n = t.model;
                return !!n.isFirstChange() || !Object.is(e, n.currentValue);
              })(t, this.viewModel) &&
                ((this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(t) {
            (this.viewModel = t), this.update.emit(t);
          }
          get path() {
            return (
              (t = null == this.name ? this.name : this.name.toString()),
              [...this._parent.path, t]
            );
            var t;
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          _checkParentType() {}
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              this.control.disabled &&
                this.valueAccessor.setDisabledState &&
                this.valueAccessor.setDisabledState(!0),
              (this._added = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              r.Kb(F, 13),
              r.Kb(g, 10),
              r.Kb(b, 10),
              r.Kb(u, 10),
              r.Kb(gt, 8)
            );
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [['', 'formControlName', '']],
            inputs: {
              isDisabled: ['disabled', 'isDisabled'],
              name: ['formControlName', 'name'],
              model: ['ngModel', 'model']
            },
            outputs: { update: 'ngModelChange' },
            features: [r.yb([yt]), r.wb, r.xb]
          })),
          (t._ngModelWarningSentOnce = !1),
          t
        );
      })();
      const wt = { provide: g, useExisting: Object(r.T)(() => Et), multi: !0 },
        Ct = { provide: g, useExisting: Object(r.T)(() => St), multi: !0 };
      let Et = (() => {
          class t {
            constructor() {
              this._required = !1;
            }
            get required() {
              return this._required;
            }
            set required(t) {
              (this._required = null != t && !1 !== t && '' + t != 'false'),
                this._onChange && this._onChange();
            }
            validate(t) {
              return this.required ? y.required(t) : null;
            }
            registerOnValidatorChange(t) {
              this._onChange = t;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                [
                  '',
                  'required',
                  '',
                  'formControlName',
                  '',
                  3,
                  'type',
                  'checkbox'
                ],
                ['', 'required', '', 'formControl', '', 3, 'type', 'checkbox'],
                ['', 'required', '', 'ngModel', '', 3, 'type', 'checkbox']
              ],
              hostVars: 1,
              hostBindings: function (t, e) {
                2 & t && r.Ab('required', e.required ? '' : null);
              },
              inputs: { required: 'required' },
              features: [r.yb([wt])]
            })),
            t
          );
        })(),
        St = (() => {
          class t extends Et {
            validate(t) {
              return this.required ? y.requiredTrue(t) : null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return Dt(e || t);
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                [
                  'input',
                  'type',
                  'checkbox',
                  'required',
                  '',
                  'formControlName',
                  ''
                ],
                [
                  'input',
                  'type',
                  'checkbox',
                  'required',
                  '',
                  'formControl',
                  ''
                ],
                ['input', 'type', 'checkbox', 'required', '', 'ngModel', '']
              ],
              hostVars: 1,
              hostBindings: function (t, e) {
                2 & t && r.Ab('required', e.required ? '' : null);
              },
              features: [r.yb([Ct]), r.wb]
            })),
            t
          );
        })();
      const Dt = r.Sb(St);
      let At = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              }
            })),
            t
          );
        })(),
        xt = (() => {
          class t {
            group(t, e = null) {
              const n = this._reduceControls(t);
              let r = null,
                s = null,
                i = void 0;
              return (
                null != e &&
                  ((function (t) {
                    return (
                      void 0 !== t.asyncValidators ||
                      void 0 !== t.validators ||
                      void 0 !== t.updateOn
                    );
                  })(e)
                    ? ((r = null != e.validators ? e.validators : null),
                      (s =
                        null != e.asyncValidators ? e.asyncValidators : null),
                      (i = null != e.updateOn ? e.updateOn : void 0))
                    : ((r = null != e.validator ? e.validator : null),
                      (s =
                        null != e.asyncValidator ? e.asyncValidator : null))),
                new lt(n, { asyncValidators: s, updateOn: i, validators: r })
              );
            }
            control(t, e, n) {
              return new ct(t, e, n);
            }
            array(t, e, n) {
              const r = t.map((t) => this._createControl(t));
              return new ht(r, e, n);
            }
            _reduceControls(t) {
              const e = {};
              return (
                Object.keys(t).forEach((n) => {
                  e[n] = this._createControl(t[n]);
                }),
                e
              );
            }
            _createControl(t) {
              return t instanceof ct || t instanceof lt || t instanceof ht
                ? t
                : Array.isArray(t)
                ? this.control(
                    t[0],
                    t.length > 1 ? t[1] : null,
                    t.length > 2 ? t[2] : null
                  )
                : this.control(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Ot = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [B],
              imports: [At]
            })),
            t
          );
        })(),
        kt = (() => {
          class t {
            static withConfig(e) {
              return {
                ngModule: t,
                providers: [
                  { provide: gt, useValue: e.warnOnNgModelWithFormControl }
                ]
              };
            }
          }
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [xt, B],
              imports: [At]
            })),
            t
          );
        })();
    },
    '3UWI': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var r = n('D0XW'),
        s = n('zx2A');
      class i {
        constructor(t) {
          this.durationSelector = t;
        }
        call(t, e) {
          return e.subscribe(new o(t, this.durationSelector));
        }
      }
      class o extends s.b {
        constructor(t, e) {
          super(t), (this.durationSelector = e), (this.hasValue = !1);
        }
        _next(t) {
          if (((this.value = t), (this.hasValue = !0), !this.throttled)) {
            let n;
            try {
              const { durationSelector: e } = this;
              n = e(t);
            } catch (e) {
              return this.destination.error(e);
            }
            const r = Object(s.c)(n, new s.a(this));
            !r || r.closed
              ? this.clearThrottle()
              : this.add((this.throttled = r));
          }
        }
        clearThrottle() {
          const { value: t, hasValue: e, throttled: n } = this;
          n && (this.remove(n), (this.throttled = void 0), n.unsubscribe()),
            e &&
              ((this.value = void 0),
              (this.hasValue = !1),
              this.destination.next(t));
        }
        notifyNext() {
          this.clearThrottle();
        }
        notifyComplete() {
          this.clearThrottle();
        }
      }
      var a = n('PqYM');
      function u(t, e = r.a) {
        return (
          (n = () => Object(a.a)(t, e)),
          function (t) {
            return t.lift(new i(n));
          }
        );
        var n;
      }
    },
    '4I5i': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = 'argument out of range'),
            (this.name = 'ArgumentOutOfRangeError'),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    '5+tZ': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('lJxs'),
        s = n('Cfvw'),
        i = n('zx2A');
      function o(t, e, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof e
          ? (i) =>
              i.pipe(
                o(
                  (n, i) =>
                    Object(s.a)(t(n, i)).pipe(
                      Object(r.a)((t, r) => e(n, t, i, r))
                    ),
                  n
                )
              )
          : ('number' == typeof e && (n = e), (e) => e.lift(new a(t, n)));
      }
      class a {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new u(t, this.project, this.concurrent));
        }
      }
      class u extends i.b {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent
            ? this._tryNext(t)
            : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e);
        }
        _innerSub(t) {
          const e = new i.a(this),
            n = this.destination;
          n.add(e);
          const r = Object(i.c)(t, e);
          r !== e && n.add(r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyComplete() {
          const t = this.buffer;
          this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
    },
    '7+OI': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('HDdC');
      function s(t) {
        return (
          !!t &&
          (t instanceof r.a ||
            ('function' == typeof t.lift && 'function' == typeof t.subscribe))
        );
      }
    },
    '7Hc7': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return d;
      });
      let r = 1;
      const s = (() => Promise.resolve())(),
        i = {};
      function o(t) {
        return t in i && (delete i[t], !0);
      }
      const a = {
        setImmediate(t) {
          const e = r++;
          return (i[e] = !0), s.then(() => o(e) && t()), e;
        },
        clearImmediate(t) {
          o(t);
        }
      };
      var u = n('3N8a');
      class c extends u.a {
        constructor(t, e) {
          super(t, e), (this.scheduler = t), (this.work = e);
        }
        requestAsyncId(t, e, n = 0) {
          return null !== n && n > 0
            ? super.requestAsyncId(t, e, n)
            : (t.actions.push(this),
              t.scheduled ||
                (t.scheduled = a.setImmediate(t.flush.bind(t, null))));
        }
        recycleAsyncId(t, e, n = 0) {
          if ((null !== n && n > 0) || (null === n && this.delay > 0))
            return super.recycleAsyncId(t, e, n);
          0 === t.actions.length &&
            (a.clearImmediate(e), (t.scheduled = void 0));
        }
      }
      var l = n('IjjT');
      class h extends l.a {
        flush(t) {
          (this.active = !0), (this.scheduled = void 0);
          const { actions: e } = this;
          let n,
            r = -1,
            s = e.length;
          t = t || e.shift();
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while (++r < s && (t = e.shift()));
          if (((this.active = !1), n)) {
            for (; ++r < s && (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }
      const d = new h(c);
    },
    '7o/Q': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var r = n('n6bG'),
        s = n('gRHU'),
        i = n('quSY'),
        o = n('2QA8'),
        a = n('2fFW'),
        u = n('NJ4a');
      class c extends i.a {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = s.a;
              break;
            case 1:
              if (!t) {
                this.destination = s.a;
                break;
              }
              if ('object' == typeof t) {
                t instanceof c
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new l(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new l(this, t, e, n));
          }
        }
        [o.a]() {
          return this;
        }
        static create(t, e, n) {
          const r = new c(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class l extends c {
        constructor(t, e, n, i) {
          let o;
          super(), (this._parentSubscriber = t);
          let a = this;
          Object(r.a)(e)
            ? (o = e)
            : e &&
              ((o = e.next),
              (n = e.error),
              (i = e.complete),
              e !== s.a &&
                ((a = Object.create(e)),
                Object(r.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)),
                (a.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = a),
            (this._next = o),
            (this._error = n),
            (this._complete = i);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = a.a;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n
                ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                : Object(u.a)(t),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              Object(u.a)(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling))
              throw n;
            Object(u.a)(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!a.a.useDeprecatedSynchronousErrorHandling)
            throw new Error('bad call');
          try {
            e.call(this._context, n);
          } catch (r) {
            return a.a.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (Object(u.a)(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            t.unsubscribe();
        }
      }
    },
    '8LU1': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      }),
        n.d(e, 'b', function () {
          return s;
        }),
        n.d(e, 'c', function () {
          return a;
        }),
        n.d(e, 'd', function () {
          return u;
        }),
        n.d(e, 'e', function () {
          return i;
        }),
        n.d(e, 'f', function () {
          return c;
        });
      var r = n('fXoL');
      function s(t) {
        return null != t && '' + t != 'false';
      }
      function i(t, e = 0) {
        return (function (t) {
          return !isNaN(parseFloat(t)) && !isNaN(Number(t));
        })(t)
          ? Number(t)
          : e;
      }
      function o(t) {
        return Array.isArray(t) ? t : [t];
      }
      function a(t) {
        return null == t ? '' : 'string' == typeof t ? t : t + 'px';
      }
      function u(t) {
        return t instanceof r.l ? t.nativeElement : t;
      }
      function c(t, e = /\s+/) {
        const n = [];
        if (null != t) {
          const r = Array.isArray(t) ? t : ('' + t).split(e);
          for (const t of r) {
            const e = ('' + t).trim();
            e && n.push(e);
          }
        }
        return n;
      }
    },
    '9Xeq': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('ofXK'),
        s = n('fXoL');
      let i = (() => {
        class t {}
        return (
          (t.ɵmod = s.Ib({ type: t })),
          (t.ɵinj = s.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[r.c]]
          })),
          t
        );
      })();
    },
    '9ppp': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = 'object unsubscribed'),
            (this.name = 'ObjectUnsubscribedError'),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    Cfvw: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return h;
      });
      var r = n('HDdC'),
        s = n('SeVD'),
        i = n('quSY'),
        o = n('kJWO'),
        a = n('jZKg'),
        u = n('Lhse'),
        c = n('c2HN'),
        l = n('I55L');
      function h(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && 'function' == typeof t[o.a];
                  })(t)
                )
                  return (function (t, e) {
                    return new r.a((n) => {
                      const r = new i.a();
                      return (
                        r.add(
                          e.schedule(() => {
                            const s = t[o.a]();
                            r.add(
                              s.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                }
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (Object(c.a)(t))
                  return (function (t, e) {
                    return new r.a((n) => {
                      const r = new i.a();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t),
                                      r.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (t) => {
                                r.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (Object(l.a)(t)) return Object(a.a)(t, e);
                if (
                  (function (t) {
                    return t && 'function' == typeof t[u.a];
                  })(t) ||
                  'string' == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error('Iterable cannot be null');
                    return new r.a((n) => {
                      const r = new i.a();
                      let s;
                      return (
                        r.add(() => {
                          s && 'function' == typeof s.return && s.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (s = t[u.a]()),
                              r.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = s.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e
                                    ? n.complete()
                                    : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + ' is not observable'
              );
            })(t, e)
          : t instanceof r.a
          ? t
          : new r.a(Object(s.a)(t));
      }
    },
    D0XW: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('3N8a');
      const s = new (n('IjjT').a)(r.a);
    },
    DH7j: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() =>
        Array.isArray || ((t) => t && 'number' == typeof t.length))();
    },
    EY2u: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      }),
        n.d(e, 'b', function () {
          return i;
        });
      var r = n('HDdC');
      const s = new r.a((t) => t.complete());
      function i(t) {
        return t
          ? (function (t) {
              return new r.a((e) => t.schedule(() => e.complete()));
            })(t)
          : s;
      }
    },
    FKr1: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return D;
      }),
        n.d(e, 'b', function () {
          return $;
        }),
        n.d(e, 'c', function () {
          return Q;
        }),
        n.d(e, 'd', function () {
          return N;
        }),
        n.d(e, 'e', function () {
          return y;
        }),
        n.d(e, 'f', function () {
          return A;
        }),
        n.d(e, 'g', function () {
          return k;
        }),
        n.d(e, 'h', function () {
          return X;
        }),
        n.d(e, 'i', function () {
          return tt;
        }),
        n.d(e, 'j', function () {
          return W;
        }),
        n.d(e, 'k', function () {
          return V;
        }),
        n.d(e, 'l', function () {
          return B;
        }),
        n.d(e, 'm', function () {
          return L;
        }),
        n.d(e, 'n', function () {
          return M;
        }),
        n.d(e, 'o', function () {
          return P;
        }),
        n.d(e, 'p', function () {
          return Y;
        }),
        n.d(e, 'q', function () {
          return J;
        }),
        n.d(e, 'r', function () {
          return w;
        }),
        n.d(e, 's', function () {
          return C;
        }),
        n.d(e, 't', function () {
          return v;
        }),
        n.d(e, 'u', function () {
          return S;
        }),
        n.d(e, 'v', function () {
          return E;
        }),
        n.d(e, 'w', function () {
          return x;
        });
      var r = n('fXoL'),
        s = n('u47x'),
        i = n('cH1L');
      const o = new r.O('11.0.4');
      var a = n('ofXK'),
        u = n('8LU1'),
        c = n('XNiG'),
        l = (n('HDdC'), n('nLfN')),
        h = n('JX91'),
        d = n('R1ws'),
        f = n('FtGj');
      function p(t, e) {
        if ((1 & t && r.Lb(0, 'mat-pseudo-checkbox', 3), 2 & t)) {
          const t = r.bc();
          r.ic('state', t.selected ? 'checked' : 'unchecked')(
            'disabled',
            t.disabled
          );
        }
      }
      const m = ['*'],
        g = new r.O('11.0.4'),
        b = new r.q('mat-sanity-checks', {
          providedIn: 'root',
          factory: function () {
            return !0;
          }
        });
      let _,
        y = (() => {
          class t {
            constructor(t, e, n) {
              (this._hasDoneGlobalChecks = !1),
                (this._document = n),
                t._applyBodyHighContrastModeCssClasses(),
                (this._sanityChecks = e),
                this._hasDoneGlobalChecks ||
                  (this._checkDoctypeIsDefined(),
                  this._checkThemeIsPresent(),
                  this._checkCdkVersionMatch(),
                  (this._hasDoneGlobalChecks = !0));
            }
            _getWindow() {
              const t = this._document.defaultView || window;
              return 'object' == typeof t && t ? t : null;
            }
            _checksAreEnabled() {
              return Object(r.V)() && !this._isTestEnv();
            }
            _isTestEnv() {
              const t = this._getWindow();
              return t && (t.__karma__ || t.jasmine);
            }
            _checkDoctypeIsDefined() {
              this._checksAreEnabled() &&
                (!0 === this._sanityChecks || this._sanityChecks.doctype) &&
                !this._document.doctype &&
                console.warn(
                  'Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.'
                );
            }
            _checkThemeIsPresent() {
              if (
                !this._checksAreEnabled() ||
                !1 === this._sanityChecks ||
                !this._sanityChecks.theme ||
                !this._document.body ||
                'function' != typeof getComputedStyle
              )
                return;
              const t = this._document.createElement('div');
              t.classList.add('mat-theme-loaded-marker'),
                this._document.body.appendChild(t);
              const e = getComputedStyle(t);
              e &&
                'none' !== e.display &&
                console.warn(
                  'Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming'
                ),
                this._document.body.removeChild(t);
            }
            _checkCdkVersionMatch() {
              this._checksAreEnabled() &&
                (!0 === this._sanityChecks || this._sanityChecks.version) &&
                g.full !== o.full &&
                console.warn(
                  'The Angular Material version (' +
                    g.full +
                    ') does not match the Angular CDK version (' +
                    o.full +
                    ').\nPlease ensure the versions of these two packages exactly match.'
                );
            }
          }
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)(r.Ub(s.g), r.Ub(b, 8), r.Ub(a.d));
              },
              imports: [[i.a], i.a]
            })),
            t
          );
        })();
      function v(t) {
        return class extends t {
          constructor(...t) {
            super(...t), (this._disabled = !1);
          }
          get disabled() {
            return this._disabled;
          }
          set disabled(t) {
            this._disabled = Object(u.b)(t);
          }
        };
      }
      function w(t, e) {
        return class extends t {
          constructor(...t) {
            super(...t), (this.defaultColor = e), (this.color = e);
          }
          get color() {
            return this._color;
          }
          set color(t) {
            const e = t || this.defaultColor;
            e !== this._color &&
              (this._color &&
                this._elementRef.nativeElement.classList.remove(
                  'mat-' + this._color
                ),
              e && this._elementRef.nativeElement.classList.add('mat-' + e),
              (this._color = e));
          }
        };
      }
      function C(t) {
        return class extends t {
          constructor(...t) {
            super(...t), (this._disableRipple = !1);
          }
          get disableRipple() {
            return this._disableRipple;
          }
          set disableRipple(t) {
            this._disableRipple = Object(u.b)(t);
          }
        };
      }
      function E(t, e = 0) {
        return class extends t {
          constructor(...t) {
            super(...t), (this._tabIndex = e), (this.defaultTabIndex = e);
          }
          get tabIndex() {
            return this.disabled ? -1 : this._tabIndex;
          }
          set tabIndex(t) {
            this._tabIndex = null != t ? Object(u.e)(t) : this.defaultTabIndex;
          }
        };
      }
      function S(t) {
        return class extends t {
          constructor(...t) {
            super(...t),
              (this.errorState = !1),
              (this.stateChanges = new c.a());
          }
          updateErrorState() {
            const t = this.errorState,
              e = (
                this.errorStateMatcher || this._defaultErrorStateMatcher
              ).isErrorState(
                this.ngControl ? this.ngControl.control : null,
                this._parentFormGroup || this._parentForm
              );
            e !== t && ((this.errorState = e), this.stateChanges.next());
          }
        };
      }
      try {
        _ = 'undefined' != typeof Intl;
      } catch (et) {
        _ = !1;
      }
      let D = (() => {
          class t {
            isErrorState(t, e) {
              return !!(t && t.invalid && (t.touched || (e && e.submitted)));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(r.Gb)({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        A = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['', 'mat-line', ''],
                ['', 'matLine', '']
              ],
              hostAttrs: [1, 'mat-line']
            })),
            t
          );
        })();
      function x(t, e, n = 'mat') {
        t.changes.pipe(Object(h.a)(t)).subscribe(({ length: t }) => {
          O(e, n + '-2-line', !1),
            O(e, n + '-3-line', !1),
            O(e, n + '-multi-line', !1),
            2 === t || 3 === t
              ? O(e, `${n}-${t}-line`, !0)
              : t > 3 && O(e, n + '-multi-line', !0);
        });
      }
      function O(t, e, n) {
        const r = t.nativeElement.classList;
        n ? r.add(e) : r.remove(e);
      }
      let k = (() => {
        class t {}
        return (
          (t.ɵmod = r.Ib({ type: t })),
          (t.ɵinj = r.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[y], y]
          })),
          t
        );
      })();
      class T {
        constructor(t, e, n) {
          (this._renderer = t),
            (this.element = e),
            (this.config = n),
            (this.state = 3);
        }
        fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }
      const F = { enterDuration: 450, exitDuration: 400 },
        j = Object(l.f)({ passive: !0 }),
        I = ['mousedown', 'touchstart'],
        R = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
      class P {
        constructor(t, e, n, r) {
          (this._target = t),
            (this._ngZone = e),
            (this._isPointerDown = !1),
            (this._activeRipples = new Set()),
            (this._pointerUpEventsRegistered = !1),
            r.isBrowser && (this._containerElement = Object(u.d)(n));
        }
        fadeInRipple(t, e, n = {}) {
          const r = (this._containerRect =
              this._containerRect ||
              this._containerElement.getBoundingClientRect()),
            s = Object.assign(Object.assign({}, F), n.animation);
          n.centered &&
            ((t = r.left + r.width / 2), (e = r.top + r.height / 2));
          const i =
              n.radius ||
              (function (t, e, n) {
                const r = Math.max(Math.abs(t - n.left), Math.abs(t - n.right)),
                  s = Math.max(Math.abs(e - n.top), Math.abs(e - n.bottom));
                return Math.sqrt(r * r + s * s);
              })(t, e, r),
            o = t - r.left,
            a = e - r.top,
            u = s.enterDuration,
            c = document.createElement('div');
          c.classList.add('mat-ripple-element'),
            (c.style.left = o - i + 'px'),
            (c.style.top = a - i + 'px'),
            (c.style.height = 2 * i + 'px'),
            (c.style.width = 2 * i + 'px'),
            null != n.color && (c.style.backgroundColor = n.color),
            (c.style.transitionDuration = u + 'ms'),
            this._containerElement.appendChild(c),
            window.getComputedStyle(c).getPropertyValue('opacity'),
            (c.style.transform = 'scale(1)');
          const l = new T(this, c, n);
          return (
            (l.state = 0),
            this._activeRipples.add(l),
            n.persistent || (this._mostRecentTransientRipple = l),
            this._runTimeoutOutsideZone(() => {
              const t = l === this._mostRecentTransientRipple;
              (l.state = 1),
                n.persistent || (t && this._isPointerDown) || l.fadeOut();
            }, u),
            l
          );
        }
        fadeOutRipple(t) {
          const e = this._activeRipples.delete(t);
          if (
            (t === this._mostRecentTransientRipple &&
              (this._mostRecentTransientRipple = null),
            this._activeRipples.size || (this._containerRect = null),
            !e)
          )
            return;
          const n = t.element,
            r = Object.assign(Object.assign({}, F), t.config.animation);
          (n.style.transitionDuration = r.exitDuration + 'ms'),
            (n.style.opacity = '0'),
            (t.state = 2),
            this._runTimeoutOutsideZone(() => {
              (t.state = 3), n.parentNode.removeChild(n);
            }, r.exitDuration);
        }
        fadeOutAll() {
          this._activeRipples.forEach((t) => t.fadeOut());
        }
        setupTriggerEvents(t) {
          const e = Object(u.d)(t);
          e &&
            e !== this._triggerElement &&
            (this._removeTriggerEvents(),
            (this._triggerElement = e),
            this._registerEvents(I));
        }
        handleEvent(t) {
          'mousedown' === t.type
            ? this._onMousedown(t)
            : 'touchstart' === t.type
            ? this._onTouchStart(t)
            : this._onPointerUp(),
            this._pointerUpEventsRegistered ||
              (this._registerEvents(R), (this._pointerUpEventsRegistered = !0));
        }
        _onMousedown(t) {
          const e = Object(s.i)(t),
            n =
              this._lastTouchStartEvent &&
              Date.now() < this._lastTouchStartEvent + 800;
          this._target.rippleDisabled ||
            e ||
            n ||
            ((this._isPointerDown = !0),
            this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
        }
        _onTouchStart(t) {
          if (!this._target.rippleDisabled) {
            (this._lastTouchStartEvent = Date.now()),
              (this._isPointerDown = !0);
            const e = t.changedTouches;
            for (let t = 0; t < e.length; t++)
              this.fadeInRipple(
                e[t].clientX,
                e[t].clientY,
                this._target.rippleConfig
              );
          }
        }
        _onPointerUp() {
          this._isPointerDown &&
            ((this._isPointerDown = !1),
            this._activeRipples.forEach((t) => {
              !t.config.persistent &&
                (1 === t.state ||
                  (t.config.terminateOnPointerUp && 0 === t.state)) &&
                t.fadeOut();
            }));
        }
        _runTimeoutOutsideZone(t, e = 0) {
          this._ngZone.runOutsideAngular(() => setTimeout(t, e));
        }
        _registerEvents(t) {
          this._ngZone.runOutsideAngular(() => {
            t.forEach((t) => {
              this._triggerElement.addEventListener(t, this, j);
            });
          });
        }
        _removeTriggerEvents() {
          this._triggerElement &&
            (I.forEach((t) => {
              this._triggerElement.removeEventListener(t, this, j);
            }),
            this._pointerUpEventsRegistered &&
              R.forEach((t) => {
                this._triggerElement.removeEventListener(t, this, j);
              }));
        }
      }
      const N = new r.q('mat-ripple-global-options');
      let L = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this._elementRef = t),
                (this._animationMode = s),
                (this.radius = 0),
                (this._disabled = !1),
                (this._isInitialized = !1),
                (this._globalOptions = r || {}),
                (this._rippleRenderer = new P(this, e, t, n));
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(t) {
              (this._disabled = t), this._setupTriggerEventsIfEnabled();
            }
            get trigger() {
              return this._trigger || this._elementRef.nativeElement;
            }
            set trigger(t) {
              (this._trigger = t), this._setupTriggerEventsIfEnabled();
            }
            ngOnInit() {
              (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
            }
            ngOnDestroy() {
              this._rippleRenderer._removeTriggerEvents();
            }
            fadeOutAll() {
              this._rippleRenderer.fadeOutAll();
            }
            get rippleConfig() {
              return {
                centered: this.centered,
                radius: this.radius,
                color: this.color,
                animation: Object.assign(
                  Object.assign(
                    Object.assign({}, this._globalOptions.animation),
                    'NoopAnimations' === this._animationMode
                      ? { enterDuration: 0, exitDuration: 0 }
                      : {}
                  ),
                  this.animation
                ),
                terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
              };
            }
            get rippleDisabled() {
              return this.disabled || !!this._globalOptions.disabled;
            }
            _setupTriggerEventsIfEnabled() {
              !this.disabled &&
                this._isInitialized &&
                this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
            launch(t, e = 0, n) {
              return 'number' == typeof t
                ? this._rippleRenderer.fadeInRipple(
                    t,
                    e,
                    Object.assign(Object.assign({}, this.rippleConfig), n)
                  )
                : this._rippleRenderer.fadeInRipple(
                    0,
                    0,
                    Object.assign(Object.assign({}, this.rippleConfig), t)
                  );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(r.l),
                r.Kb(r.z),
                r.Kb(l.a),
                r.Kb(N, 8),
                r.Kb(d.a, 8)
              );
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['', 'mat-ripple', ''],
                ['', 'matRipple', '']
              ],
              hostAttrs: [1, 'mat-ripple'],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && r.Cb('mat-ripple-unbounded', e.unbounded);
              },
              inputs: {
                radius: ['matRippleRadius', 'radius'],
                disabled: ['matRippleDisabled', 'disabled'],
                trigger: ['matRippleTrigger', 'trigger'],
                color: ['matRippleColor', 'color'],
                unbounded: ['matRippleUnbounded', 'unbounded'],
                centered: ['matRippleCentered', 'centered'],
                animation: ['matRippleAnimation', 'animation']
              },
              exportAs: ['matRipple']
            })),
            t
          );
        })(),
        M = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[y, l.b], y]
            })),
            t
          );
        })(),
        V = (() => {
          class t {
            constructor(t) {
              (this._animationMode = t),
                (this.state = 'unchecked'),
                (this.disabled = !1);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(d.a, 8));
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['mat-pseudo-checkbox']],
              hostAttrs: [1, 'mat-pseudo-checkbox'],
              hostVars: 8,
              hostBindings: function (t, e) {
                2 & t &&
                  r.Cb(
                    'mat-pseudo-checkbox-indeterminate',
                    'indeterminate' === e.state
                  )('mat-pseudo-checkbox-checked', 'checked' === e.state)(
                    'mat-pseudo-checkbox-disabled',
                    e.disabled
                  )(
                    '_mat-animation-noopable',
                    'NoopAnimations' === e._animationMode
                  );
              },
              inputs: { state: 'state', disabled: 'disabled' },
              decls: 0,
              vars: 0,
              template: function (t, e) {},
              styles: [
                '.mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            t
          );
        })(),
        B = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[y]]
            })),
            t
          );
        })();
      class U {}
      const z = v(U);
      let H = 0,
        q = (() => {
          class t extends z {
            constructor() {
              super(...arguments),
                (this._labelId = 'mat-optgroup-label-' + H++);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return K(e || t);
            }),
            (t.ɵdir = r.Fb({
              type: t,
              inputs: { label: 'label' },
              features: [r.wb]
            })),
            t
          );
        })();
      const K = r.Sb(q),
        $ = new r.q('MatOptgroup');
      let G = 0;
      class W {
        constructor(t, e = !1) {
          (this.source = t), (this.isUserInput = e);
        }
      }
      const Q = new r.q('MAT_OPTION_PARENT_COMPONENT');
      let Z = (() => {
          class t {
            constructor(t, e, n, s) {
              (this._element = t),
                (this._changeDetectorRef = e),
                (this._parent = n),
                (this.group = s),
                (this._selected = !1),
                (this._active = !1),
                (this._disabled = !1),
                (this._mostRecentViewValue = ''),
                (this.id = 'mat-option-' + G++),
                (this.onSelectionChange = new r.n()),
                (this._stateChanges = new c.a());
            }
            get multiple() {
              return this._parent && this._parent.multiple;
            }
            get selected() {
              return this._selected;
            }
            get disabled() {
              return (this.group && this.group.disabled) || this._disabled;
            }
            set disabled(t) {
              this._disabled = Object(u.b)(t);
            }
            get disableRipple() {
              return this._parent && this._parent.disableRipple;
            }
            get active() {
              return this._active;
            }
            get viewValue() {
              return (this._getHostElement().textContent || '').trim();
            }
            select() {
              this._selected ||
                ((this._selected = !0),
                this._changeDetectorRef.markForCheck(),
                this._emitSelectionChangeEvent());
            }
            deselect() {
              this._selected &&
                ((this._selected = !1),
                this._changeDetectorRef.markForCheck(),
                this._emitSelectionChangeEvent());
            }
            focus(t, e) {
              const n = this._getHostElement();
              'function' == typeof n.focus && n.focus(e);
            }
            setActiveStyles() {
              this._active ||
                ((this._active = !0), this._changeDetectorRef.markForCheck());
            }
            setInactiveStyles() {
              this._active &&
                ((this._active = !1), this._changeDetectorRef.markForCheck());
            }
            getLabel() {
              return this.viewValue;
            }
            _handleKeydown(t) {
              (t.keyCode !== f.d && t.keyCode !== f.j) ||
                Object(f.o)(t) ||
                (this._selectViaInteraction(), t.preventDefault());
            }
            _selectViaInteraction() {
              this.disabled ||
                ((this._selected = !this.multiple || !this._selected),
                this._changeDetectorRef.markForCheck(),
                this._emitSelectionChangeEvent(!0));
            }
            _getAriaSelected() {
              return this.selected || (!this.multiple && null);
            }
            _getTabIndex() {
              return this.disabled ? '-1' : '0';
            }
            _getHostElement() {
              return this._element.nativeElement;
            }
            ngAfterViewChecked() {
              if (this._selected) {
                const t = this.viewValue;
                t !== this._mostRecentViewValue &&
                  ((this._mostRecentViewValue = t), this._stateChanges.next());
              }
            }
            ngOnDestroy() {
              this._stateChanges.complete();
            }
            _emitSelectionChangeEvent(t = !1) {
              this.onSelectionChange.emit(new W(this, t));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(r.l), r.Kb(r.h), r.Kb(void 0), r.Kb(q));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              inputs: { id: 'id', disabled: 'disabled', value: 'value' },
              outputs: { onSelectionChange: 'onSelectionChange' }
            })),
            t
          );
        })(),
        X = (() => {
          class t extends Z {
            constructor(t, e, n, r) {
              super(t, e, n, r);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(r.l), r.Kb(r.h), r.Kb(Q, 8), r.Kb($, 8));
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['mat-option']],
              hostAttrs: [
                'role',
                'option',
                1,
                'mat-option',
                'mat-focus-indicator'
              ],
              hostVars: 12,
              hostBindings: function (t, e) {
                1 & t &&
                  r.Xb('click', function () {
                    return e._selectViaInteraction();
                  })('keydown', function (t) {
                    return e._handleKeydown(t);
                  }),
                  2 & t &&
                    (r.Tb('id', e.id),
                    r.Ab('tabindex', e._getTabIndex())(
                      'aria-selected',
                      e._getAriaSelected()
                    )('aria-disabled', e.disabled.toString()),
                    r.Cb('mat-selected', e.selected)(
                      'mat-option-multiple',
                      e.multiple
                    )('mat-active', e.active)(
                      'mat-option-disabled',
                      e.disabled
                    ));
              },
              exportAs: ['matOption'],
              features: [r.wb],
              ngContentSelectors: m,
              decls: 4,
              vars: 3,
              consts: [
                [
                  'class',
                  'mat-option-pseudo-checkbox',
                  3,
                  'state',
                  'disabled',
                  4,
                  'ngIf'
                ],
                [1, 'mat-option-text'],
                [
                  'mat-ripple',
                  '',
                  1,
                  'mat-option-ripple',
                  3,
                  'matRippleTrigger',
                  'matRippleDisabled'
                ],
                [1, 'mat-option-pseudo-checkbox', 3, 'state', 'disabled']
              ],
              template: function (t, e) {
                1 & t &&
                  (r.hc(),
                  r.zc(0, p, 1, 2, 'mat-pseudo-checkbox', 0),
                  r.Qb(1, 'span', 1),
                  r.gc(2),
                  r.Pb(),
                  r.Lb(3, 'div', 2)),
                  2 & t &&
                    (r.ic('ngIf', e.multiple),
                    r.zb(3),
                    r.ic('matRippleTrigger', e._getHostElement())(
                      'matRippleDisabled',
                      e.disabled || e.disableRipple
                    ));
              },
              directives: [a.m, L, V],
              styles: [
                '.mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            t
          );
        })();
      function Y(t, e, n) {
        if (n.length) {
          let r = e.toArray(),
            s = n.toArray(),
            i = 0;
          for (let e = 0; e < t + 1; e++)
            r[e].group && r[e].group === s[i] && i++;
          return i;
        }
        return 0;
      }
      function J(t, e, n, r) {
        return t < n ? t : t + e > n + r ? Math.max(0, t - r + e) : n;
      }
      let tt = (() => {
        class t {}
        return (
          (t.ɵmod = r.Ib({ type: t })),
          (t.ɵinj = r.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[M, a.c, y, B]]
          })),
          t
        );
      })();
    },
    FtGj: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return m;
      }),
        n.d(e, 'b', function () {
          return d;
        }),
        n.d(e, 'c', function () {
          return a;
        }),
        n.d(e, 'd', function () {
          return s;
        }),
        n.d(e, 'e', function () {
          return i;
        }),
        n.d(e, 'f', function () {
          return u;
        }),
        n.d(e, 'g', function () {
          return c;
        }),
        n.d(e, 'h', function () {
          return p;
        }),
        n.d(e, 'i', function () {
          return h;
        }),
        n.d(e, 'j', function () {
          return o;
        }),
        n.d(e, 'k', function () {
          return r;
        }),
        n.d(e, 'l', function () {
          return l;
        }),
        n.d(e, 'm', function () {
          return g;
        }),
        n.d(e, 'n', function () {
          return f;
        }),
        n.d(e, 'o', function () {
          return b;
        });
      const r = 9,
        s = 13,
        i = 27,
        o = 32,
        a = 35,
        u = 36,
        c = 37,
        l = 38,
        h = 39,
        d = 40,
        f = 48,
        p = 57,
        m = 65,
        g = 90;
      function b(t, ...e) {
        return e.length
          ? e.some((e) => t[e])
          : t.altKey || t.shiftKey || t.ctrlKey || t.metaKey;
      }
    },
    GU7r: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return l;
      }),
        n.d(e, 'b', function () {
          return c;
        }),
        n.d(e, 'c', function () {
          return h;
        });
      var r = n('8LU1'),
        s = n('fXoL'),
        i = n('HDdC'),
        o = n('XNiG'),
        a = n('Kj3r');
      let u = (() => {
          class t {
            create(t) {
              return 'undefined' == typeof MutationObserver
                ? null
                : new MutationObserver(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        c = (() => {
          class t {
            constructor(t) {
              (this._mutationObserverFactory = t),
                (this._observedElements = new Map());
            }
            ngOnDestroy() {
              this._observedElements.forEach((t, e) =>
                this._cleanupObserver(e)
              );
            }
            observe(t) {
              const e = Object(r.d)(t);
              return new i.a((t) => {
                const n = this._observeElement(e).subscribe(t);
                return () => {
                  n.unsubscribe(), this._unobserveElement(e);
                };
              });
            }
            _observeElement(t) {
              if (this._observedElements.has(t))
                this._observedElements.get(t).count++;
              else {
                const e = new o.a(),
                  n = this._mutationObserverFactory.create((t) => e.next(t));
                n &&
                  n.observe(t, {
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                  }),
                  this._observedElements.set(t, {
                    observer: n,
                    stream: e,
                    count: 1
                  });
              }
              return this._observedElements.get(t).stream;
            }
            _unobserveElement(t) {
              this._observedElements.has(t) &&
                (this._observedElements.get(t).count--,
                this._observedElements.get(t).count ||
                  this._cleanupObserver(t));
            }
            _cleanupObserver(t) {
              if (this._observedElements.has(t)) {
                const { observer: e, stream: n } = this._observedElements.get(
                  t
                );
                e && e.disconnect(),
                  n.complete(),
                  this._observedElements.delete(t);
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Ub(u));
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return new t(Object(s.Ub)(u));
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        l = (() => {
          class t {
            constructor(t, e, n) {
              (this._contentObserver = t),
                (this._elementRef = e),
                (this._ngZone = n),
                (this.event = new s.n()),
                (this._disabled = !1),
                (this._currentSubscription = null);
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(t) {
              (this._disabled = Object(r.b)(t)),
                this._disabled ? this._unsubscribe() : this._subscribe();
            }
            get debounce() {
              return this._debounce;
            }
            set debounce(t) {
              (this._debounce = Object(r.e)(t)), this._subscribe();
            }
            ngAfterContentInit() {
              this._currentSubscription || this.disabled || this._subscribe();
            }
            ngOnDestroy() {
              this._unsubscribe();
            }
            _subscribe() {
              this._unsubscribe();
              const t = this._contentObserver.observe(this._elementRef);
              this._ngZone.runOutsideAngular(() => {
                this._currentSubscription = (this.debounce
                  ? t.pipe(Object(a.a)(this.debounce))
                  : t
                ).subscribe(this.event);
              });
            }
            _unsubscribe() {
              var t;
              null === (t = this._currentSubscription) ||
                void 0 === t ||
                t.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Kb(c), s.Kb(s.l), s.Kb(s.z));
            }),
            (t.ɵdir = s.Fb({
              type: t,
              selectors: [['', 'cdkObserveContent', '']],
              inputs: {
                disabled: ['cdkObserveContentDisabled', 'disabled'],
                debounce: 'debounce'
              },
              outputs: { event: 'cdkObserveContent' },
              exportAs: ['cdkObserveContent']
            })),
            t
          );
        })(),
        h = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [u]
            })),
            t
          );
        })();
    },
    GyhO: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('LRne'),
        s = n('bHdf');
      function i(...t) {
        return Object(s.a)(1)(Object(r.a)(...t));
      }
    },
    HDdC: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var r = n('7o/Q'),
        s = n('2QA8'),
        i = n('gRHU'),
        o = n('kJWO'),
        a = n('SpAZ'),
        u = n('2fFW');
      let c = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: o } = this,
              a = (function (t, e, n) {
                if (t) {
                  if (t instanceof r.a) return t;
                  if (t[s.a]) return t[s.a]();
                }
                return t || e || n ? new r.a(t, e, n) : new r.a(i.a);
              })(t, e, n);
            if (
              (a.add(
                o
                  ? o.call(a, this.source)
                  : this.source ||
                    (u.a.useDeprecatedSynchronousErrorHandling &&
                      !a.syncErrorThrowable)
                  ? this._subscribe(a)
                  : this._trySubscribe(a)
              ),
              u.a.useDeprecatedSynchronousErrorHandling &&
                a.syncErrorThrowable &&
                ((a.syncErrorThrowable = !1), a.syncErrorThrown))
            )
              throw a.syncErrorValue;
            return a;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              u.a.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: s } = t;
                    if (e || s) return !1;
                    t = n && n instanceof r.a ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = l(e))((e, n) => {
              let r;
              r = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [o.a]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length
              ? this
              : (0 === (e = t).length
                  ? a.a
                  : 1 === e.length
                  ? e[0]
                  : function (t) {
                      return e.reduce((t, e) => e(t), t);
                    })(this);
            var e;
          }
          toPromise(t) {
            return new (t = l(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function l(t) {
        if ((t || (t = u.a.Promise || Promise), !t))
          throw new Error('no Promise impl found');
        return t;
      }
    },
    I55L: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (t) =>
        t && 'number' == typeof t.length && 'function' != typeof t;
    },
    IjjT: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      let r = (() => {
        class t {
          constructor(e, n = t.now) {
            (this.SchedulerAction = e), (this.now = n);
          }
          schedule(t, e = 0, n) {
            return new this.SchedulerAction(this, t).schedule(n, e);
          }
        }
        return (t.now = () => Date.now()), t;
      })();
      class s extends r {
        constructor(t, e = r.now) {
          super(t, () =>
            s.delegate && s.delegate !== this ? s.delegate.now() : e()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(t, e = 0, n) {
          return s.delegate && s.delegate !== this
            ? s.delegate.schedule(t, e, n)
            : super.schedule(t, e, n);
        }
        flush(t) {
          const { actions: e } = this;
          if (this.active) return void e.push(t);
          let n;
          this.active = !0;
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while ((t = e.shift()));
          if (((this.active = !1), n)) {
            for (; (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }
    },
    IzEk: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('7o/Q'),
        s = n('4I5i'),
        i = n('EY2u');
      function o(t) {
        return (e) => (0 === t ? Object(i.b)() : e.lift(new a(t)));
      }
      class a {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new s.a();
        }
        call(t, e) {
          return e.subscribe(new u(t, this.total));
        }
      }
      class u extends r.a {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e &&
            (this.destination.next(t),
            n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
    },
    JIr8: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('zx2A');
      function s(t) {
        return function (e) {
          const n = new i(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class i {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new o(t, this.selector, this.caught));
        }
      }
      class o extends r.b {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const s = new r.a(this);
            this.add(s);
            const i = Object(r.c)(n, s);
            i !== s && this.add(i);
          }
        }
      }
    },
    JX91: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('GyhO'),
        s = n('z+Ro');
      function i(...t) {
        const e = t[t.length - 1];
        return Object(s.a)(e)
          ? (t.pop(), (n) => Object(r.a)(t, n, e))
          : (e) => Object(r.a)(t, e);
      }
    },
    Kj3r: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('7o/Q'),
        s = n('D0XW');
      function i(t, e = s.a) {
        return (n) => n.lift(new o(t, e));
      }
      class o {
        constructor(t, e) {
          (this.dueTime = t), (this.scheduler = e);
        }
        call(t, e) {
          return e.subscribe(new a(t, this.dueTime, this.scheduler));
        }
      }
      class a extends r.a {
        constructor(t, e, n) {
          super(t),
            (this.dueTime = e),
            (this.scheduler = n),
            (this.debouncedSubscription = null),
            (this.lastValue = null),
            (this.hasValue = !1);
        }
        _next(t) {
          this.clearDebounce(),
            (this.lastValue = t),
            (this.hasValue = !0),
            this.add(
              (this.debouncedSubscription = this.scheduler.schedule(
                u,
                this.dueTime,
                this
              ))
            );
        }
        _complete() {
          this.debouncedNext(), this.destination.complete();
        }
        debouncedNext() {
          if ((this.clearDebounce(), this.hasValue)) {
            const { lastValue: t } = this;
            (this.lastValue = null),
              (this.hasValue = !1),
              this.destination.next(t);
          }
        }
        clearDebounce() {
          const t = this.debouncedSubscription;
          null !== t &&
            (this.remove(t),
            t.unsubscribe(),
            (this.debouncedSubscription = null));
        }
      }
      function u(t) {
        t.debouncedNext();
      }
    },
    KqfI: function (t, e, n) {
      'use strict';
      function r() {}
      n.d(e, 'a', function () {
        return r;
      });
    },
    LRne: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('z+Ro'),
        s = n('yCtX'),
        i = n('jZKg');
      function o(...t) {
        let e = t[t.length - 1];
        return Object(r.a)(e) ? (t.pop(), Object(i.a)(t, e)) : Object(s.a)(t);
      }
    },
    Lhse: function (t, e, n) {
      'use strict';
      function r() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      }
      n.d(e, 'a', function () {
        return s;
      });
      const s = r();
    },
    NFeN: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return G;
      }),
        n.d(e, 'b', function () {
          return W;
        });
      var r = n('fXoL'),
        s = n('FKr1'),
        i = n('8LU1'),
        o = n('ofXK'),
        a = n('LRne'),
        u = n('z6cu'),
        c = n('cp0P'),
        l = n('quSY'),
        h = n('vkgz'),
        d = n('lJxs'),
        f = n('JIr8'),
        p = n('nYR2'),
        m = n('w1tV'),
        g = n('IzEk'),
        b = (n('HDdC'), n('bOdf')),
        _ = n('pLZG');
      class y {}
      class v {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  'string' == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split('\n').forEach((t) => {
                            const e = t.indexOf(':');
                            if (e > 0) {
                              const n = t.slice(0, e),
                                r = n.toLowerCase(),
                                s = t.slice(e + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r)
                                  ? this.headers.get(r).push(s)
                                  : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach((e) => {
                            let n = t[e];
                            const r = e.toLowerCase();
                            'string' == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(e, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: 'a' });
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: 's' });
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: 'd' });
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof v
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
              (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((e) => {
              this.headers.set(e, t.headers.get(e)),
                this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new v();
          return (
            (e.lazyInit =
              this.lazyInit && this.lazyInit instanceof v
                ? this.lazyInit
                : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case 'a':
            case 's':
              let n = t.value;
              if (('string' == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const r = ('a' === t.op ? this.headers.get(e) : void 0) || [];
              r.push(...n), this.headers.set(e, r);
              break;
            case 'd':
              const s = t.value;
              if (s) {
                let t = this.headers.get(e);
                if (!t) return;
                (t = t.filter((t) => -1 === s.indexOf(t))),
                  0 === t.length
                    ? (this.headers.delete(e), this.normalizedNames.delete(e))
                    : this.headers.set(e, t);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((e) =>
              t(this.normalizedNames.get(e), this.headers.get(e))
            );
        }
      }
      class w {
        encodeKey(t) {
          return C(t);
        }
        encodeValue(t) {
          return C(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      function C(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/');
      }
      class E {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new w()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function (t, e) {
              const n = new Map();
              return (
                t.length > 0 &&
                  t.split('&').forEach((t) => {
                    const r = t.indexOf('='),
                      [s, i] =
                        -1 == r
                          ? [e.decodeKey(t), '']
                          : [
                              e.decodeKey(t.slice(0, r)),
                              e.decodeValue(t.slice(r + 1))
                            ],
                      o = n.get(s) || [];
                    o.push(i), n.set(s, o);
                  }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((e) => {
                  const n = t.fromObject[e];
                  this.map.set(e, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: 'a' });
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: 's' });
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map((t) => e + '=' + this.encoder.encodeValue(t))
                  .join('&');
              })
              .filter((t) => '' !== t)
              .join('&')
          );
        }
        clone(t) {
          const e = new E({ encoder: this.encoder });
          return (
            (e.cloneFrom = this.cloneFrom || this),
            (e.updates = (this.updates || []).concat([t])),
            e
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case 'a':
                  case 's':
                    const e =
                      ('a' === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(t.value), this.map.set(t.param, e);
                    break;
                  case 'd':
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let e = this.map.get(t.param) || [];
                      const n = e.indexOf(t.value);
                      -1 !== n && e.splice(n, 1),
                        e.length > 0
                          ? this.map.set(t.param, e)
                          : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function S(t) {
        return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer;
      }
      function D(t) {
        return 'undefined' != typeof Blob && t instanceof Blob;
      }
      function A(t) {
        return 'undefined' != typeof FormData && t instanceof FormData;
      }
      class x {
        constructor(t, e, n, r) {
          let s;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = t.toUpperCase()),
            (function (t) {
              switch (t) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new v()),
            this.params)
          ) {
            const t = this.params.toString();
            if (0 === t.length) this.urlWithParams = e;
            else {
              const n = e.indexOf('?');
              this.urlWithParams =
                e + (-1 === n ? '?' : n < e.length - 1 ? '&' : '') + t;
            }
          } else (this.params = new E()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : S(this.body) ||
              D(this.body) ||
              A(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof E
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || A(this.body)
            ? null
            : D(this.body)
            ? this.body.type || null
            : S(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof E
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              Array.isArray(this.body)
            ? 'application/json'
            : null;
        }
        clone(t = {}) {
          const e = t.method || this.method,
            n = t.url || this.url,
            r = t.responseType || this.responseType,
            s = void 0 !== t.body ? t.body : this.body,
            i =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            o =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress;
          let a = t.headers || this.headers,
            u = t.params || this.params;
          return (
            void 0 !== t.setHeaders &&
              (a = Object.keys(t.setHeaders).reduce(
                (e, n) => e.set(n, t.setHeaders[n]),
                a
              )),
            t.setParams &&
              (u = Object.keys(t.setParams).reduce(
                (e, n) => e.set(n, t.setParams[n]),
                u
              )),
            new x(e, n, s, {
              params: u,
              headers: a,
              reportProgress: o,
              responseType: r,
              withCredentials: i
            })
          );
        }
      }
      var O = (function (t) {
        return (
          (t[(t.Sent = 0)] = 'Sent'),
          (t[(t.UploadProgress = 1)] = 'UploadProgress'),
          (t[(t.ResponseHeader = 2)] = 'ResponseHeader'),
          (t[(t.DownloadProgress = 3)] = 'DownloadProgress'),
          (t[(t.Response = 4)] = 'Response'),
          (t[(t.User = 5)] = 'User'),
          t
        );
      })({});
      class k extends class {
        constructor(t, e = 200, n = 'OK') {
          (this.headers = t.headers || new v()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      } {
        constructor(t = {}) {
          super(t),
            (this.type = O.Response),
            (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new k({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0
          });
        }
      }
      function T(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials
        };
      }
      let F = (() => {
        class t {
          constructor(t) {
            this.handler = t;
          }
          request(t, e, n = {}) {
            let r;
            if (t instanceof x) r = t;
            else {
              let s = void 0;
              s = n.headers instanceof v ? n.headers : new v(n.headers);
              let i = void 0;
              n.params &&
                (i =
                  n.params instanceof E
                    ? n.params
                    : new E({ fromObject: n.params })),
                (r = new x(t, e, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || 'json',
                  withCredentials: n.withCredentials
                }));
            }
            const s = Object(a.a)(r).pipe(
              Object(b.a)((t) => this.handler.handle(t))
            );
            if (t instanceof x || 'events' === n.observe) return s;
            const i = s.pipe(Object(_.a)((t) => t instanceof k));
            switch (n.observe || 'body') {
              case 'body':
                switch (r.responseType) {
                  case 'arraybuffer':
                    return i.pipe(
                      Object(d.a)((t) => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return t.body;
                      })
                    );
                  case 'blob':
                    return i.pipe(
                      Object(d.a)((t) => {
                        if (null !== t.body && !(t.body instanceof Blob))
                          throw new Error('Response is not a Blob.');
                        return t.body;
                      })
                    );
                  case 'text':
                    return i.pipe(
                      Object(d.a)((t) => {
                        if (null !== t.body && 'string' != typeof t.body)
                          throw new Error('Response is not a string.');
                        return t.body;
                      })
                    );
                  case 'json':
                  default:
                    return i.pipe(Object(d.a)((t) => t.body));
                }
              case 'response':
                return i;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${n.observe}}`
                );
            }
          }
          delete(t, e = {}) {
            return this.request('DELETE', t, e);
          }
          get(t, e = {}) {
            return this.request('GET', t, e);
          }
          head(t, e = {}) {
            return this.request('HEAD', t, e);
          }
          jsonp(t, e) {
            return this.request('JSONP', t, {
              params: new E().append(e, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json'
            });
          }
          options(t, e = {}) {
            return this.request('OPTIONS', t, e);
          }
          patch(t, e, n = {}) {
            return this.request('PATCH', t, T(n, e));
          }
          post(t, e, n = {}) {
            return this.request('POST', t, T(n, e));
          }
          put(t, e, n = {}) {
            return this.request('PUT', t, T(n, e));
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Ub(y));
          }),
          (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      var j = n('jhN1');
      const I = ['*'];
      function R(t) {
        return Error(`Unable to find icon with the name "${t}"`);
      }
      function P(t) {
        return Error(
          `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`
        );
      }
      function N(t) {
        return Error(
          `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`
        );
      }
      class L {
        constructor(t, e, n) {
          (this.url = t), (this.svgText = e), (this.options = n);
        }
      }
      let M = (() => {
        class t {
          constructor(t, e, n, r) {
            (this._httpClient = t),
              (this._sanitizer = e),
              (this._errorHandler = r),
              (this._svgIconConfigs = new Map()),
              (this._iconSetConfigs = new Map()),
              (this._cachedIconsByUrl = new Map()),
              (this._inProgressUrlFetches = new Map()),
              (this._fontCssClassesByAlias = new Map()),
              (this._defaultFontSetClass = 'material-icons'),
              (this._document = n);
          }
          addSvgIcon(t, e, n) {
            return this.addSvgIconInNamespace('', t, e, n);
          }
          addSvgIconLiteral(t, e, n) {
            return this.addSvgIconLiteralInNamespace('', t, e, n);
          }
          addSvgIconInNamespace(t, e, n, r) {
            return this._addSvgIconConfig(t, e, new L(n, null, r));
          }
          addSvgIconLiteralInNamespace(t, e, n, s) {
            const i = this._sanitizer.sanitize(r.I.HTML, n);
            if (!i) throw N(n);
            return this._addSvgIconConfig(t, e, new L('', i, s));
          }
          addSvgIconSet(t, e) {
            return this.addSvgIconSetInNamespace('', t, e);
          }
          addSvgIconSetLiteral(t, e) {
            return this.addSvgIconSetLiteralInNamespace('', t, e);
          }
          addSvgIconSetInNamespace(t, e, n) {
            return this._addSvgIconSetConfig(t, new L(e, null, n));
          }
          addSvgIconSetLiteralInNamespace(t, e, n) {
            const s = this._sanitizer.sanitize(r.I.HTML, e);
            if (!s) throw N(e);
            return this._addSvgIconSetConfig(t, new L('', s, n));
          }
          registerFontClassAlias(t, e = t) {
            return this._fontCssClassesByAlias.set(t, e), this;
          }
          classNameForFontAlias(t) {
            return this._fontCssClassesByAlias.get(t) || t;
          }
          setDefaultFontSetClass(t) {
            return (this._defaultFontSetClass = t), this;
          }
          getDefaultFontSetClass() {
            return this._defaultFontSetClass;
          }
          getSvgIconFromUrl(t) {
            const e = this._sanitizer.sanitize(r.I.RESOURCE_URL, t);
            if (!e) throw P(t);
            const n = this._cachedIconsByUrl.get(e);
            return n
              ? Object(a.a)(V(n))
              : this._loadSvgIconFromConfig(new L(t, null)).pipe(
                  Object(h.a)((t) => this._cachedIconsByUrl.set(e, t)),
                  Object(d.a)((t) => V(t))
                );
          }
          getNamedSvgIcon(t, e = '') {
            const n = B(e, t),
              r = this._svgIconConfigs.get(n);
            if (r) return this._getSvgFromConfig(r);
            const s = this._iconSetConfigs.get(e);
            return s ? this._getSvgFromIconSetConfigs(t, s) : Object(u.a)(R(n));
          }
          ngOnDestroy() {
            this._svgIconConfigs.clear(),
              this._iconSetConfigs.clear(),
              this._cachedIconsByUrl.clear();
          }
          _getSvgFromConfig(t) {
            return t.svgText
              ? Object(a.a)(V(this._svgElementFromConfig(t)))
              : this._loadSvgIconFromConfig(t).pipe(Object(d.a)((t) => V(t)));
          }
          _getSvgFromIconSetConfigs(t, e) {
            const n = this._extractIconWithNameFromAnySet(t, e);
            if (n) return Object(a.a)(n);
            const s = e
              .filter((t) => !t.svgText)
              .map((t) =>
                this._loadSvgIconSetFromConfig(t).pipe(
                  Object(f.a)((e) => {
                    const n = this._sanitizer.sanitize(r.I.RESOURCE_URL, t.url);
                    return (
                      this._errorHandler.handleError(
                        new Error(
                          `Loading icon set URL: ${n} failed: ${e.message}`
                        )
                      ),
                      Object(a.a)(null)
                    );
                  })
                )
              );
            return Object(c.a)(s).pipe(
              Object(d.a)(() => {
                const n = this._extractIconWithNameFromAnySet(t, e);
                if (!n) throw R(t);
                return n;
              })
            );
          }
          _extractIconWithNameFromAnySet(t, e) {
            for (let n = e.length - 1; n >= 0; n--) {
              const r = e[n];
              if (r.svgText && r.svgText.indexOf(t) > -1) {
                const e = this._svgElementFromConfig(r),
                  n = this._extractSvgIconFromSet(e, t, r.options);
                if (n) return n;
              }
            }
            return null;
          }
          _loadSvgIconFromConfig(t) {
            return this._fetchIcon(t).pipe(
              Object(h.a)((e) => (t.svgText = e)),
              Object(d.a)(() => this._svgElementFromConfig(t))
            );
          }
          _loadSvgIconSetFromConfig(t) {
            return t.svgText
              ? Object(a.a)(null)
              : this._fetchIcon(t).pipe(Object(h.a)((e) => (t.svgText = e)));
          }
          _extractSvgIconFromSet(t, e, n) {
            const r = t.querySelector(`[id="${e}"]`);
            if (!r) return null;
            const s = r.cloneNode(!0);
            if ((s.removeAttribute('id'), 'svg' === s.nodeName.toLowerCase()))
              return this._setSvgAttributes(s, n);
            if ('symbol' === s.nodeName.toLowerCase())
              return this._setSvgAttributes(this._toSvgElement(s), n);
            const i = this._svgElementFromString('<svg></svg>');
            return i.appendChild(s), this._setSvgAttributes(i, n);
          }
          _svgElementFromString(t) {
            const e = this._document.createElement('DIV');
            e.innerHTML = t;
            const n = e.querySelector('svg');
            if (!n) throw Error('<svg> tag not found');
            return n;
          }
          _toSvgElement(t) {
            const e = this._svgElementFromString('<svg></svg>'),
              n = t.attributes;
            for (let r = 0; r < n.length; r++) {
              const { name: t, value: s } = n[r];
              'id' !== t && e.setAttribute(t, s);
            }
            for (let r = 0; r < t.childNodes.length; r++)
              t.childNodes[r].nodeType === this._document.ELEMENT_NODE &&
                e.appendChild(t.childNodes[r].cloneNode(!0));
            return e;
          }
          _setSvgAttributes(t, e) {
            return (
              t.setAttribute('fit', ''),
              t.setAttribute('height', '100%'),
              t.setAttribute('width', '100%'),
              t.setAttribute('preserveAspectRatio', 'xMidYMid meet'),
              t.setAttribute('focusable', 'false'),
              e && e.viewBox && t.setAttribute('viewBox', e.viewBox),
              t
            );
          }
          _fetchIcon(t) {
            var e;
            const { url: n, options: s } = t,
              i =
                null !== (e = null == s ? void 0 : s.withCredentials) &&
                void 0 !== e &&
                e;
            if (!this._httpClient)
              throw Error(
                'Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.'
              );
            if (null == n) throw Error(`Cannot fetch icon from URL "${n}".`);
            const o = this._sanitizer.sanitize(r.I.RESOURCE_URL, n);
            if (!o) throw P(n);
            const a = this._inProgressUrlFetches.get(o);
            if (a) return a;
            const u = this._httpClient
              .get(o, { responseType: 'text', withCredentials: i })
              .pipe(
                Object(p.a)(() => this._inProgressUrlFetches.delete(o)),
                Object(m.a)()
              );
            return this._inProgressUrlFetches.set(o, u), u;
          }
          _addSvgIconConfig(t, e, n) {
            return this._svgIconConfigs.set(B(t, e), n), this;
          }
          _addSvgIconSetConfig(t, e) {
            const n = this._iconSetConfigs.get(t);
            return n ? n.push(e) : this._iconSetConfigs.set(t, [e]), this;
          }
          _svgElementFromConfig(t) {
            if (!t.svgElement) {
              const e = this._svgElementFromString(t.svgText);
              this._setSvgAttributes(e, t.options), (t.svgElement = e);
            }
            return t.svgElement;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Ub(F, 8), r.Ub(j.b), r.Ub(o.d, 8), r.Ub(r.m));
          }),
          (t.ɵprov = Object(r.Gb)({
            factory: function () {
              return new t(
                Object(r.Ub)(F, 8),
                Object(r.Ub)(j.b),
                Object(r.Ub)(o.d, 8),
                Object(r.Ub)(r.m)
              );
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      function V(t) {
        return t.cloneNode(!0);
      }
      function B(t, e) {
        return t + ':' + e;
      }
      class U {
        constructor(t) {
          this._elementRef = t;
        }
      }
      const z = Object(s.r)(U),
        H = new r.q('mat-icon-location', {
          providedIn: 'root',
          factory: function () {
            const t = Object(r.U)(o.d),
              e = t ? t.location : null;
            return { getPathname: () => (e ? e.pathname + e.search : '') };
          }
        }),
        q = [
          'clip-path',
          'color-profile',
          'src',
          'cursor',
          'fill',
          'filter',
          'marker',
          'marker-start',
          'marker-mid',
          'marker-end',
          'mask',
          'stroke'
        ],
        K = q.map((t) => `[${t}]`).join(', '),
        $ = /^url\(['"]?#(.*?)['"]?\)$/;
      let G = (() => {
          class t extends z {
            constructor(t, e, n, r, s) {
              super(t),
                (this._iconRegistry = e),
                (this._location = r),
                (this._errorHandler = s),
                (this._inline = !1),
                (this._currentIconFetch = l.a.EMPTY),
                n || t.nativeElement.setAttribute('aria-hidden', 'true');
            }
            get inline() {
              return this._inline;
            }
            set inline(t) {
              this._inline = Object(i.b)(t);
            }
            get svgIcon() {
              return this._svgIcon;
            }
            set svgIcon(t) {
              t !== this._svgIcon &&
                (t
                  ? this._updateSvgIcon(t)
                  : this._svgIcon && this._clearSvgElement(),
                (this._svgIcon = t));
            }
            get fontSet() {
              return this._fontSet;
            }
            set fontSet(t) {
              const e = this._cleanupFontValue(t);
              e !== this._fontSet &&
                ((this._fontSet = e), this._updateFontIconClasses());
            }
            get fontIcon() {
              return this._fontIcon;
            }
            set fontIcon(t) {
              const e = this._cleanupFontValue(t);
              e !== this._fontIcon &&
                ((this._fontIcon = e), this._updateFontIconClasses());
            }
            _splitIconName(t) {
              if (!t) return ['', ''];
              const e = t.split(':');
              switch (e.length) {
                case 1:
                  return ['', e[0]];
                case 2:
                  return e;
                default:
                  throw Error(`Invalid icon name: "${t}"`);
              }
            }
            ngOnInit() {
              this._updateFontIconClasses();
            }
            ngAfterViewChecked() {
              const t = this._elementsWithExternalReferences;
              if (t && t.size) {
                const t = this._location.getPathname();
                t !== this._previousPath &&
                  ((this._previousPath = t), this._prependPathToReferences(t));
              }
            }
            ngOnDestroy() {
              this._currentIconFetch.unsubscribe(),
                this._elementsWithExternalReferences &&
                  this._elementsWithExternalReferences.clear();
            }
            _usingFontIcon() {
              return !this.svgIcon;
            }
            _setSvgElement(t) {
              this._clearSvgElement();
              const e = t.querySelectorAll('style');
              for (let r = 0; r < e.length; r++) e[r].textContent += ' ';
              const n = this._location.getPathname();
              (this._previousPath = n),
                this._cacheChildrenWithExternalReferences(t),
                this._prependPathToReferences(n),
                this._elementRef.nativeElement.appendChild(t);
            }
            _clearSvgElement() {
              const t = this._elementRef.nativeElement;
              let e = t.childNodes.length;
              for (
                this._elementsWithExternalReferences &&
                this._elementsWithExternalReferences.clear();
                e--;

              ) {
                const n = t.childNodes[e];
                (1 === n.nodeType && 'svg' !== n.nodeName.toLowerCase()) ||
                  t.removeChild(n);
              }
            }
            _updateFontIconClasses() {
              if (!this._usingFontIcon()) return;
              const t = this._elementRef.nativeElement,
                e = this.fontSet
                  ? this._iconRegistry.classNameForFontAlias(this.fontSet)
                  : this._iconRegistry.getDefaultFontSetClass();
              e != this._previousFontSetClass &&
                (this._previousFontSetClass &&
                  t.classList.remove(this._previousFontSetClass),
                e && t.classList.add(e),
                (this._previousFontSetClass = e)),
                this.fontIcon != this._previousFontIconClass &&
                  (this._previousFontIconClass &&
                    t.classList.remove(this._previousFontIconClass),
                  this.fontIcon && t.classList.add(this.fontIcon),
                  (this._previousFontIconClass = this.fontIcon));
            }
            _cleanupFontValue(t) {
              return 'string' == typeof t ? t.trim().split(' ')[0] : t;
            }
            _prependPathToReferences(t) {
              const e = this._elementsWithExternalReferences;
              e &&
                e.forEach((e, n) => {
                  e.forEach((e) => {
                    n.setAttribute(e.name, `url('${t}#${e.value}')`);
                  });
                });
            }
            _cacheChildrenWithExternalReferences(t) {
              const e = t.querySelectorAll(K),
                n = (this._elementsWithExternalReferences =
                  this._elementsWithExternalReferences || new Map());
              for (let r = 0; r < e.length; r++)
                q.forEach((t) => {
                  const s = e[r],
                    i = s.getAttribute(t),
                    o = i ? i.match($) : null;
                  if (o) {
                    let e = n.get(s);
                    e || ((e = []), n.set(s, e)),
                      e.push({ name: t, value: o[1] });
                  }
                });
            }
            _updateSvgIcon(t) {
              if (
                ((this._svgNamespace = null),
                (this._svgName = null),
                this._currentIconFetch.unsubscribe(),
                t)
              ) {
                const [e, n] = this._splitIconName(t);
                e && (this._svgNamespace = e),
                  n && (this._svgName = n),
                  (this._currentIconFetch = this._iconRegistry
                    .getNamedSvgIcon(n, e)
                    .pipe(Object(g.a)(1))
                    .subscribe(
                      (t) => this._setSvgElement(t),
                      (t) => {
                        this._errorHandler.handleError(
                          new Error(
                            `Error retrieving icon ${e}:${n}! ${t.message}`
                          )
                        );
                      }
                    ));
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(r.l),
                r.Kb(M),
                r.Vb('aria-hidden'),
                r.Kb(H),
                r.Kb(r.m)
              );
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['mat-icon']],
              hostAttrs: ['role', 'img', 1, 'mat-icon', 'notranslate'],
              hostVars: 7,
              hostBindings: function (t, e) {
                2 & t &&
                  (r.Ab(
                    'data-mat-icon-type',
                    e._usingFontIcon() ? 'font' : 'svg'
                  )('data-mat-icon-name', e._svgName || e.fontIcon)(
                    'data-mat-icon-namespace',
                    e._svgNamespace || e.fontSet
                  ),
                  r.Cb('mat-icon-inline', e.inline)(
                    'mat-icon-no-color',
                    'primary' !== e.color &&
                      'accent' !== e.color &&
                      'warn' !== e.color
                  ));
              },
              inputs: {
                color: 'color',
                inline: 'inline',
                svgIcon: 'svgIcon',
                fontSet: 'fontSet',
                fontIcon: 'fontIcon'
              },
              exportAs: ['matIcon'],
              features: [r.wb],
              ngContentSelectors: I,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (r.hc(), r.gc(0));
              },
              styles: [
                '.mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            t
          );
        })(),
        W = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[s.e], s.e]
            })),
            t
          );
        })();
    },
    NJ4a: function (t, e, n) {
      'use strict';
      function r(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    NXyV: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('HDdC'),
        s = n('Cfvw'),
        i = n('EY2u');
      function o(t) {
        return new r.a((e) => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? Object(s.a)(n) : Object(i.b)()).subscribe(e);
        });
      }
    },
    PqYM: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('HDdC'),
        s = n('D0XW'),
        i = n('Y7HM'),
        o = n('z+Ro');
      function a(t = 0, e, n) {
        let a = -1;
        return (
          Object(i.a)(e)
            ? (a = Number(e) < 1 ? 1 : Number(e))
            : Object(o.a)(e) && (n = e),
          Object(o.a)(n) || (n = s.a),
          new r.a((e) => {
            const r = Object(i.a)(t) ? t : +t - n.now();
            return n.schedule(u, r, { index: 0, period: a, subscriber: e });
          })
        );
      }
      function u(t) {
        const { index: e, period: n, subscriber: r } = t;
        if ((r.next(e), !r.closed)) {
          if (-1 === n) return r.complete();
          (t.index = e + 1), this.schedule(t, n);
        }
      }
    },
    R0Ic: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      }),
        n.d(e, 'b', function () {
          return r;
        }),
        n.d(e, 'c', function () {
          return s;
        }),
        n.d(e, 'd', function () {
          return m;
        }),
        n.d(e, 'e', function () {
          return a;
        }),
        n.d(e, 'f', function () {
          return d;
        }),
        n.d(e, 'g', function () {
          return f;
        }),
        n.d(e, 'h', function () {
          return u;
        }),
        n.d(e, 'i', function () {
          return l;
        }),
        n.d(e, 'j', function () {
          return c;
        }),
        n.d(e, 'k', function () {
          return h;
        }),
        n.d(e, 'l', function () {
          return o;
        }),
        n.d(e, 'm', function () {
          return g;
        }),
        n.d(e, 'n', function () {
          return b;
        });
      class r {}
      class s {}
      const i = '*';
      function o(t, e) {
        return { type: 7, name: t, definitions: e, options: {} };
      }
      function a(t, e = null) {
        return { type: 4, styles: e, timings: t };
      }
      function u(t, e = null) {
        return { type: 2, steps: t, options: e };
      }
      function c(t) {
        return { type: 6, styles: t, offset: null };
      }
      function l(t, e, n) {
        return { type: 0, name: t, styles: e, options: n };
      }
      function h(t, e, n = null) {
        return { type: 1, expr: t, animation: e, options: n };
      }
      function d(t = null) {
        return { type: 9, options: t };
      }
      function f(t, e, n = null) {
        return { type: 11, selector: t, animation: e, options: n };
      }
      function p(t) {
        Promise.resolve(null).then(t);
      }
      class m {
        constructor(t = 0, e = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = t + e);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          p(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {}
        setPosition(t) {
          this._position = this.totalTime ? t * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class g {
        constructor(t) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = t);
          let e = 0,
            n = 0,
            r = 0;
          const s = this.players.length;
          0 == s
            ? p(() => this._onFinish())
            : this.players.forEach((t) => {
                t.onDone(() => {
                  ++e == s && this._onFinish();
                }),
                  t.onDestroy(() => {
                    ++n == s && this._onDestroy();
                  }),
                  t.onStart(() => {
                    ++r == s && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (t, e) => Math.max(t, e.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((t) => t.init());
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((t) => t()),
            (this._onStartFns = []));
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((t) => t.play());
        }
        pause() {
          this.players.forEach((t) => t.pause());
        }
        restart() {
          this.players.forEach((t) => t.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((t) => t.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((t) => t.destroy()),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((t) => t.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(t) {
          const e = t * this.totalTime;
          this.players.forEach((t) => {
            const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
            t.setPosition(n);
          });
        }
        getPosition() {
          const t = this.players.reduce(
            (t, e) => (null === t || e.totalTime > t.totalTime ? e : t),
            null
          );
          return null != t ? t.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach((t) => {
            t.beforeDestroy && t.beforeDestroy();
          });
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      const b = '!';
    },
    R1ws: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return ge;
      }),
        n.d(e, 'b', function () {
          return _e;
        });
      var r = n('fXoL'),
        s = n('jhN1'),
        i = n('R0Ic');
      function o() {
        return (
          'undefined' != typeof process &&
          '[object process]' === {}.toString.call(process)
        );
      }
      function a(t) {
        switch (t.length) {
          case 0:
            return new i.d();
          case 1:
            return t[0];
          default:
            return new i.m(t);
        }
      }
      function u(t, e, n, r, s = {}, o = {}) {
        const a = [],
          u = [];
        let c = -1,
          l = null;
        if (
          (r.forEach((t) => {
            const n = t.offset,
              r = n == c,
              h = (r && l) || {};
            Object.keys(t).forEach((n) => {
              let r = n,
                u = t[n];
              if ('offset' !== n)
                switch (((r = e.normalizePropertyName(r, a)), u)) {
                  case i.n:
                    u = s[n];
                    break;
                  case i.a:
                    u = o[n];
                    break;
                  default:
                    u = e.normalizeStyleValue(n, r, u, a);
                }
              h[r] = u;
            }),
              r || u.push(h),
              (l = h),
              (c = n);
          }),
          a.length)
        ) {
          const t = '\n - ';
          throw new Error(
            `Unable to animate due to the following errors:${t}${a.join(t)}`
          );
        }
        return u;
      }
      function c(t, e, n, r) {
        switch (e) {
          case 'start':
            t.onStart(() => r(n && l(n, 'start', t)));
            break;
          case 'done':
            t.onDone(() => r(n && l(n, 'done', t)));
            break;
          case 'destroy':
            t.onDestroy(() => r(n && l(n, 'destroy', t)));
        }
      }
      function l(t, e, n) {
        const r = n.totalTime,
          s = h(
            t.element,
            t.triggerName,
            t.fromState,
            t.toState,
            e || t.phaseName,
            null == r ? t.totalTime : r,
            !!n.disabled
          ),
          i = t._data;
        return null != i && (s._data = i), s;
      }
      function h(t, e, n, r, s = '', i = 0, o) {
        return {
          element: t,
          triggerName: e,
          fromState: n,
          toState: r,
          phaseName: s,
          totalTime: i,
          disabled: !!o
        };
      }
      function d(t, e, n) {
        let r;
        return (
          t instanceof Map
            ? ((r = t.get(e)), r || t.set(e, (r = n)))
            : ((r = t[e]), r || (r = t[e] = n)),
          r
        );
      }
      function f(t) {
        const e = t.indexOf(':');
        return [t.substring(1, e), t.substr(e + 1)];
      }
      let p = (t, e) => !1,
        m = (t, e) => !1,
        g = (t, e, n) => [];
      const b = o();
      (b || 'undefined' != typeof Element) &&
        ((p = (t, e) => t.contains(e)),
        (m = (() => {
          if (b || Element.prototype.matches) return (t, e) => t.matches(e);
          {
            const t = Element.prototype,
              e =
                t.matchesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector ||
                t.webkitMatchesSelector;
            return e ? (t, n) => e.apply(t, [n]) : m;
          }
        })()),
        (g = (t, e, n) => {
          let r = [];
          if (n) {
            const n = t.querySelectorAll(e);
            for (let t = 0; t < n.length; t++) r.push(n[t]);
          } else {
            const n = t.querySelector(e);
            n && r.push(n);
          }
          return r;
        }));
      let _ = null,
        y = !1;
      function v(t) {
        _ ||
          ((_ = ('undefined' != typeof document ? document.body : null) || {}),
          (y = !!_.style && 'WebkitAppearance' in _.style));
        let e = !0;
        return (
          _.style &&
            !(function (t) {
              return 'ebkit' == t.substring(1, 6);
            })(t) &&
            ((e = t in _.style), !e && y) &&
            (e = 'Webkit' + t.charAt(0).toUpperCase() + t.substr(1) in _.style),
          e
        );
      }
      const w = m,
        C = p,
        E = g;
      function S(t) {
        const e = {};
        return (
          Object.keys(t).forEach((n) => {
            const r = n.replace(/([a-z])([A-Z])/g, '$1-$2');
            e[r] = t[n];
          }),
          e
        );
      }
      let D = (() => {
          class t {
            validateStyleProperty(t) {
              return v(t);
            }
            matchesElement(t, e) {
              return w(t, e);
            }
            containsElement(t, e) {
              return C(t, e);
            }
            query(t, e, n) {
              return E(t, e, n);
            }
            computeStyle(t, e, n) {
              return n || '';
            }
            animate(t, e, n, r, s, o = [], a) {
              return new i.d(n, r);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        A = (() => {
          class t {}
          return (t.NOOP = new D()), t;
        })();
      function x(t) {
        if ('number' == typeof t) return t;
        const e = t.match(/^(-?[\.\d]+)(m?s)/);
        return !e || e.length < 2 ? 0 : O(parseFloat(e[1]), e[2]);
      }
      function O(t, e) {
        switch (e) {
          case 's':
            return 1e3 * t;
          default:
            return t;
        }
      }
      function k(t, e, n) {
        return t.hasOwnProperty('duration')
          ? t
          : (function (t, e, n) {
              let r,
                s = 0,
                i = '';
              if ('string' == typeof t) {
                const n = t.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === n)
                  return (
                    e.push(`The provided timing value "${t}" is invalid.`),
                    { duration: 0, delay: 0, easing: '' }
                  );
                r = O(parseFloat(n[1]), n[2]);
                const o = n[3];
                null != o && (s = O(parseFloat(o), n[4]));
                const a = n[5];
                a && (i = a);
              } else r = t;
              if (!n) {
                let n = !1,
                  i = e.length;
                r < 0 &&
                  (e.push(
                    'Duration values below 0 are not allowed for this animation step.'
                  ),
                  (n = !0)),
                  s < 0 &&
                    (e.push(
                      'Delay values below 0 are not allowed for this animation step.'
                    ),
                    (n = !0)),
                  n &&
                    e.splice(
                      i,
                      0,
                      `The provided timing value "${t}" is invalid.`
                    );
              }
              return { duration: r, delay: s, easing: i };
            })(t, e, n);
      }
      function T(t, e = {}) {
        return (
          Object.keys(t).forEach((n) => {
            e[n] = t[n];
          }),
          e
        );
      }
      function F(t, e, n = {}) {
        if (e) for (let r in t) n[r] = t[r];
        else T(t, n);
        return n;
      }
      function j(t, e, n) {
        return n ? e + ':' + n + ';' : '';
      }
      function I(t) {
        let e = '';
        for (let n = 0; n < t.style.length; n++) {
          const r = t.style.item(n);
          e += j(0, r, t.style.getPropertyValue(r));
        }
        for (const n in t.style)
          t.style.hasOwnProperty(n) &&
            !n.startsWith('_') &&
            (e += j(
              0,
              n.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
              t.style[n]
            ));
        t.setAttribute('style', e);
      }
      function R(t, e, n) {
        t.style &&
          (Object.keys(e).forEach((r) => {
            const s = z(r);
            n && !n.hasOwnProperty(r) && (n[r] = t.style[s]),
              (t.style[s] = e[r]);
          }),
          o() && I(t));
      }
      function P(t, e) {
        t.style &&
          (Object.keys(e).forEach((e) => {
            const n = z(e);
            t.style[n] = '';
          }),
          o() && I(t));
      }
      function N(t) {
        return Array.isArray(t) ? (1 == t.length ? t[0] : Object(i.h)(t)) : t;
      }
      const L = new RegExp('{{\\s*(.+?)\\s*}}', 'g');
      function M(t) {
        let e = [];
        if ('string' == typeof t) {
          let n;
          for (; (n = L.exec(t)); ) e.push(n[1]);
          L.lastIndex = 0;
        }
        return e;
      }
      function V(t, e, n) {
        const r = t.toString(),
          s = r.replace(L, (t, r) => {
            let s = e[r];
            return (
              e.hasOwnProperty(r) ||
                (n.push('Please provide a value for the animation param ' + r),
                (s = '')),
              s.toString()
            );
          });
        return s == r ? t : s;
      }
      function B(t) {
        const e = [];
        let n = t.next();
        for (; !n.done; ) e.push(n.value), (n = t.next());
        return e;
      }
      const U = /-+([a-z0-9])/g;
      function z(t) {
        return t.replace(U, (...t) => t[1].toUpperCase());
      }
      function H(t, e) {
        return 0 === t || 0 === e;
      }
      function q(t, e, n) {
        const r = Object.keys(n);
        if (r.length && e.length) {
          let i = e[0],
            o = [];
          if (
            (r.forEach((t) => {
              i.hasOwnProperty(t) || o.push(t), (i[t] = n[t]);
            }),
            o.length)
          )
            for (var s = 1; s < e.length; s++) {
              let n = e[s];
              o.forEach(function (e) {
                n[e] = $(t, e);
              });
            }
        }
        return e;
      }
      function K(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n);
          case 0:
            return t.visitState(e, n);
          case 1:
            return t.visitTransition(e, n);
          case 2:
            return t.visitSequence(e, n);
          case 3:
            return t.visitGroup(e, n);
          case 4:
            return t.visitAnimate(e, n);
          case 5:
            return t.visitKeyframes(e, n);
          case 6:
            return t.visitStyle(e, n);
          case 8:
            return t.visitReference(e, n);
          case 9:
            return t.visitAnimateChild(e, n);
          case 10:
            return t.visitAnimateRef(e, n);
          case 11:
            return t.visitQuery(e, n);
          case 12:
            return t.visitStagger(e, n);
          default:
            throw new Error(
              'Unable to resolve animation metadata node #' + e.type
            );
        }
      }
      function $(t, e) {
        return window.getComputedStyle(t)[e];
      }
      function G(t, e) {
        const n = [];
        return (
          'string' == typeof t
            ? t.split(/\s*,\s*/).forEach((t) =>
                (function (t, e, n) {
                  if (':' == t[0]) {
                    const r = (function (t, e) {
                      switch (t) {
                        case ':enter':
                          return 'void => *';
                        case ':leave':
                          return '* => void';
                        case ':increment':
                          return (t, e) => parseFloat(e) > parseFloat(t);
                        case ':decrement':
                          return (t, e) => parseFloat(e) < parseFloat(t);
                        default:
                          return (
                            e.push(
                              `The transition alias value "${t}" is not supported`
                            ),
                            '* => *'
                          );
                      }
                    })(t, n);
                    if ('function' == typeof r) return void e.push(r);
                    t = r;
                  }
                  const r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == r || r.length < 4)
                    return (
                      n.push(
                        `The provided transition expression "${t}" is not supported`
                      ),
                      e
                    );
                  const s = r[1],
                    i = r[2],
                    o = r[3];
                  e.push(Z(s, o)),
                    '<' != i[0] || ('*' == s && '*' == o) || e.push(Z(o, s));
                })(t, n, e)
              )
            : n.push(t),
          n
        );
      }
      const W = new Set(['true', '1']),
        Q = new Set(['false', '0']);
      function Z(t, e) {
        const n = W.has(t) || Q.has(t),
          r = W.has(e) || Q.has(e);
        return (s, i) => {
          let o = '*' == t || t == s,
            a = '*' == e || e == i;
          return (
            !o && n && 'boolean' == typeof s && (o = s ? W.has(t) : Q.has(t)),
            !a && r && 'boolean' == typeof i && (a = i ? W.has(e) : Q.has(e)),
            o && a
          );
        };
      }
      const X = new RegExp('s*:selfs*,?', 'g');
      function Y(t, e, n) {
        return new J(t).build(e, n);
      }
      class J {
        constructor(t) {
          this._driver = t;
        }
        build(t, e) {
          const n = new tt(e);
          return this._resetContextStyleTimingState(n), K(this, N(t), n);
        }
        _resetContextStyleTimingState(t) {
          (t.currentQuerySelector = ''),
            (t.collectedStyles = {}),
            (t.collectedStyles[''] = {}),
            (t.currentTime = 0);
        }
        visitTrigger(t, e) {
          let n = (e.queryCount = 0),
            r = (e.depCount = 0);
          const s = [],
            i = [];
          return (
            '@' == t.name.charAt(0) &&
              e.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            t.definitions.forEach((t) => {
              if ((this._resetContextStyleTimingState(e), 0 == t.type)) {
                const n = t,
                  r = n.name;
                r
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((t) => {
                    (n.name = t), s.push(this.visitState(n, e));
                  }),
                  (n.name = r);
              } else if (1 == t.type) {
                const s = this.visitTransition(t, e);
                (n += s.queryCount), (r += s.depCount), i.push(s);
              } else
                e.errors.push(
                  'only state() and transition() definitions can sit inside of a trigger()'
                );
            }),
            {
              type: 7,
              name: t.name,
              states: s,
              transitions: i,
              queryCount: n,
              depCount: r,
              options: null
            }
          );
        }
        visitState(t, e) {
          const n = this.visitStyle(t.styles, e),
            r = (t.options && t.options.params) || null;
          if (n.containsDynamicStyles) {
            const s = new Set(),
              i = r || {};
            if (
              (n.styles.forEach((t) => {
                if (et(t)) {
                  const e = t;
                  Object.keys(e).forEach((t) => {
                    M(e[t]).forEach((t) => {
                      i.hasOwnProperty(t) || s.add(t);
                    });
                  });
                }
              }),
              s.size)
            ) {
              const n = B(s.values());
              e.errors.push(
                `state("${
                  t.name
                }", ...) must define default values for all the following style substitutions: ${n.join(
                  ', '
                )}`
              );
            }
          }
          return {
            type: 0,
            name: t.name,
            style: n,
            options: r ? { params: r } : null
          };
        }
        visitTransition(t, e) {
          (e.queryCount = 0), (e.depCount = 0);
          const n = K(this, N(t.animation), e);
          return {
            type: 1,
            matchers: G(t.expr, e.errors),
            animation: n,
            queryCount: e.queryCount,
            depCount: e.depCount,
            options: nt(t.options)
          };
        }
        visitSequence(t, e) {
          return {
            type: 2,
            steps: t.steps.map((t) => K(this, t, e)),
            options: nt(t.options)
          };
        }
        visitGroup(t, e) {
          const n = e.currentTime;
          let r = 0;
          const s = t.steps.map((t) => {
            e.currentTime = n;
            const s = K(this, t, e);
            return (r = Math.max(r, e.currentTime)), s;
          });
          return (
            (e.currentTime = r), { type: 3, steps: s, options: nt(t.options) }
          );
        }
        visitAnimate(t, e) {
          const n = (function (t, e) {
            let n = null;
            if (t.hasOwnProperty('duration')) n = t;
            else if ('number' == typeof t) return rt(k(t, e).duration, 0, '');
            const r = t;
            if (
              r
                .split(/\s+/)
                .some((t) => '{' == t.charAt(0) && '{' == t.charAt(1))
            ) {
              const t = rt(0, 0, '');
              return (t.dynamic = !0), (t.strValue = r), t;
            }
            return (n = n || k(r, e)), rt(n.duration, n.delay, n.easing);
          })(t.timings, e.errors);
          let r;
          e.currentAnimateTimings = n;
          let s = t.styles ? t.styles : Object(i.j)({});
          if (5 == s.type) r = this.visitKeyframes(s, e);
          else {
            let s = t.styles,
              o = !1;
            if (!s) {
              o = !0;
              const t = {};
              n.easing && (t.easing = n.easing), (s = Object(i.j)(t));
            }
            e.currentTime += n.duration + n.delay;
            const a = this.visitStyle(s, e);
            (a.isEmptyStep = o), (r = a);
          }
          return (
            (e.currentAnimateTimings = null),
            { type: 4, timings: n, style: r, options: null }
          );
        }
        visitStyle(t, e) {
          const n = this._makeStyleAst(t, e);
          return this._validateStyleAst(n, e), n;
        }
        _makeStyleAst(t, e) {
          const n = [];
          Array.isArray(t.styles)
            ? t.styles.forEach((t) => {
                'string' == typeof t
                  ? t == i.a
                    ? n.push(t)
                    : e.errors.push(
                        `The provided style string value ${t} is not allowed.`
                      )
                  : n.push(t);
              })
            : n.push(t.styles);
          let r = !1,
            s = null;
          return (
            n.forEach((t) => {
              if (et(t)) {
                const e = t,
                  n = e.easing;
                if ((n && ((s = n), delete e.easing), !r))
                  for (let t in e)
                    if (e[t].toString().indexOf('{{') >= 0) {
                      r = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: n,
              easing: s,
              offset: t.offset,
              containsDynamicStyles: r,
              options: null
            }
          );
        }
        _validateStyleAst(t, e) {
          const n = e.currentAnimateTimings;
          let r = e.currentTime,
            s = e.currentTime;
          n && s > 0 && (s -= n.duration + n.delay),
            t.styles.forEach((t) => {
              'string' != typeof t &&
                Object.keys(t).forEach((n) => {
                  if (!this._driver.validateStyleProperty(n))
                    return void e.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    );
                  const i = e.collectedStyles[e.currentQuerySelector],
                    o = i[n];
                  let a = !0;
                  o &&
                    (s != r &&
                      s >= o.startTime &&
                      r <= o.endTime &&
                      (e.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${s}ms" and "${r}ms"`
                      ),
                      (a = !1)),
                    (s = o.startTime)),
                    a && (i[n] = { startTime: s, endTime: r }),
                    e.options &&
                      (function (t, e, n) {
                        const r = e.params || {},
                          s = M(t);
                        s.length &&
                          s.forEach((t) => {
                            r.hasOwnProperty(t) ||
                              n.push(
                                `Unable to resolve the local animation param ${t} in the given list of values`
                              );
                          });
                      })(t[n], e.options, e.errors);
                });
            });
        }
        visitKeyframes(t, e) {
          const n = { type: 5, styles: [], options: null };
          if (!e.currentAnimateTimings)
            return (
              e.errors.push(
                'keyframes() must be placed inside of a call to animate()'
              ),
              n
            );
          let r = 0;
          const s = [];
          let i = !1,
            o = !1,
            a = 0;
          const u = t.steps.map((t) => {
            const n = this._makeStyleAst(t, e);
            let u =
                null != n.offset
                  ? n.offset
                  : (function (t) {
                      if ('string' == typeof t) return null;
                      let e = null;
                      if (Array.isArray(t))
                        t.forEach((t) => {
                          if (et(t) && t.hasOwnProperty('offset')) {
                            const n = t;
                            (e = parseFloat(n.offset)), delete n.offset;
                          }
                        });
                      else if (et(t) && t.hasOwnProperty('offset')) {
                        const n = t;
                        (e = parseFloat(n.offset)), delete n.offset;
                      }
                      return e;
                    })(n.styles),
              c = 0;
            return (
              null != u && (r++, (c = n.offset = u)),
              (o = o || c < 0 || c > 1),
              (i = i || c < a),
              (a = c),
              s.push(c),
              n
            );
          });
          o &&
            e.errors.push(
              'Please ensure that all keyframe offsets are between 0 and 1'
            ),
            i &&
              e.errors.push(
                'Please ensure that all keyframe offsets are in order'
              );
          const c = t.steps.length;
          let l = 0;
          r > 0 && r < c
            ? e.errors.push(
                'Not all style() steps within the declared keyframes() contain offsets'
              )
            : 0 == r && (l = 1 / (c - 1));
          const h = c - 1,
            d = e.currentTime,
            f = e.currentAnimateTimings,
            p = f.duration;
          return (
            u.forEach((t, r) => {
              const i = l > 0 ? (r == h ? 1 : l * r) : s[r],
                o = i * p;
              (e.currentTime = d + f.delay + o),
                (f.duration = o),
                this._validateStyleAst(t, e),
                (t.offset = i),
                n.styles.push(t);
            }),
            n
          );
        }
        visitReference(t, e) {
          return {
            type: 8,
            animation: K(this, N(t.animation), e),
            options: nt(t.options)
          };
        }
        visitAnimateChild(t, e) {
          return e.depCount++, { type: 9, options: nt(t.options) };
        }
        visitAnimateRef(t, e) {
          return {
            type: 10,
            animation: this.visitReference(t.animation, e),
            options: nt(t.options)
          };
        }
        visitQuery(t, e) {
          const n = e.currentQuerySelector,
            r = t.options || {};
          e.queryCount++, (e.currentQuery = t);
          const [s, i] = (function (t) {
            const e = !!t.split(/\s*,\s*/).find((t) => ':self' == t);
            return (
              e && (t = t.replace(X, '')),
              [
                (t = t
                  .replace(/@\*/g, '.ng-trigger')
                  .replace(/@\w+/g, (t) => '.ng-trigger-' + t.substr(1))
                  .replace(/:animating/g, '.ng-animating')),
                e
              ]
            );
          })(t.selector);
          (e.currentQuerySelector = n.length ? n + ' ' + s : s),
            d(e.collectedStyles, e.currentQuerySelector, {});
          const o = K(this, N(t.animation), e);
          return (
            (e.currentQuery = null),
            (e.currentQuerySelector = n),
            {
              type: 11,
              selector: s,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: i,
              animation: o,
              originalSelector: t.selector,
              options: nt(t.options)
            }
          );
        }
        visitStagger(t, e) {
          e.currentQuery ||
            e.errors.push('stagger() can only be used inside of query()');
          const n =
            'full' === t.timings
              ? { duration: 0, delay: 0, easing: 'full' }
              : k(t.timings, e.errors, !0);
          return {
            type: 12,
            animation: K(this, N(t.animation), e),
            timings: n,
            options: null
          };
        }
      }
      class tt {
        constructor(t) {
          (this.errors = t),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function et(t) {
        return !Array.isArray(t) && 'object' == typeof t;
      }
      function nt(t) {
        var e;
        return (
          t
            ? (t = T(t)).params && (t.params = (e = t.params) ? T(e) : null)
            : (t = {}),
          t
        );
      }
      function rt(t, e, n) {
        return { duration: t, delay: e, easing: n };
      }
      function st(t, e, n, r, s, i, o = null, a = !1) {
        return {
          type: 1,
          element: t,
          keyframes: e,
          preStyleProps: n,
          postStyleProps: r,
          duration: s,
          delay: i,
          totalTime: s + i,
          easing: o,
          subTimeline: a
        };
      }
      class it {
        constructor() {
          this._map = new Map();
        }
        consume(t) {
          let e = this._map.get(t);
          return e ? this._map.delete(t) : (e = []), e;
        }
        append(t, e) {
          let n = this._map.get(t);
          n || this._map.set(t, (n = [])), n.push(...e);
        }
        has(t) {
          return this._map.has(t);
        }
        clear() {
          this._map.clear();
        }
      }
      const ot = new RegExp(':enter', 'g'),
        at = new RegExp(':leave', 'g');
      function ut(t, e, n, r, s, i = {}, o = {}, a, u, c = []) {
        return new ct().buildKeyframes(t, e, n, r, s, i, o, a, u, c);
      }
      class ct {
        buildKeyframes(t, e, n, r, s, i, o, a, u, c = []) {
          u = u || new it();
          const l = new ht(t, e, u, r, s, c, []);
          (l.options = a),
            l.currentTimeline.setStyles([i], null, l.errors, a),
            K(this, n, l);
          const h = l.timelines.filter((t) => t.containsAnimation());
          if (h.length && Object.keys(o).length) {
            const t = h[h.length - 1];
            t.allowOnlyTimelineStyles() || t.setStyles([o], null, l.errors, a);
          }
          return h.length
            ? h.map((t) => t.buildKeyframes())
            : [st(e, [], [], [], 0, 0, '', !1)];
        }
        visitTrigger(t, e) {}
        visitState(t, e) {}
        visitTransition(t, e) {}
        visitAnimateChild(t, e) {
          const n = e.subInstructions.consume(e.element);
          if (n) {
            const r = e.createSubContext(t.options),
              s = e.currentTimeline.currentTime,
              i = this._visitSubInstructions(n, r, r.options);
            s != i && e.transformIntoNewTimeline(i);
          }
          e.previousNode = t;
        }
        visitAnimateRef(t, e) {
          const n = e.createSubContext(t.options);
          n.transformIntoNewTimeline(),
            this.visitReference(t.animation, n),
            e.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (e.previousNode = t);
        }
        _visitSubInstructions(t, e, n) {
          let r = e.currentTimeline.currentTime;
          const s = null != n.duration ? x(n.duration) : null,
            i = null != n.delay ? x(n.delay) : null;
          return (
            0 !== s &&
              t.forEach((t) => {
                const n = e.appendInstructionToTimeline(t, s, i);
                r = Math.max(r, n.duration + n.delay);
              }),
            r
          );
        }
        visitReference(t, e) {
          e.updateOptions(t.options, !0),
            K(this, t.animation, e),
            (e.previousNode = t);
        }
        visitSequence(t, e) {
          const n = e.subContextCount;
          let r = e;
          const s = t.options;
          if (
            s &&
            (s.params || s.delay) &&
            ((r = e.createSubContext(s)),
            r.transformIntoNewTimeline(),
            null != s.delay)
          ) {
            6 == r.previousNode.type &&
              (r.currentTimeline.snapshotCurrentStyles(),
              (r.previousNode = lt));
            const t = x(s.delay);
            r.delayNextStep(t);
          }
          t.steps.length &&
            (t.steps.forEach((t) => K(this, t, r)),
            r.currentTimeline.applyStylesToKeyframe(),
            r.subContextCount > n && r.transformIntoNewTimeline()),
            (e.previousNode = t);
        }
        visitGroup(t, e) {
          const n = [];
          let r = e.currentTimeline.currentTime;
          const s = t.options && t.options.delay ? x(t.options.delay) : 0;
          t.steps.forEach((i) => {
            const o = e.createSubContext(t.options);
            s && o.delayNextStep(s),
              K(this, i, o),
              (r = Math.max(r, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline);
          }),
            n.forEach((t) => e.currentTimeline.mergeTimelineCollectedStyles(t)),
            e.transformIntoNewTimeline(r),
            (e.previousNode = t);
        }
        _visitTiming(t, e) {
          if (t.dynamic) {
            const n = t.strValue;
            return k(e.params ? V(n, e.params, e.errors) : n, e.errors);
          }
          return { duration: t.duration, delay: t.delay, easing: t.easing };
        }
        visitAnimate(t, e) {
          const n = (e.currentAnimateTimings = this._visitTiming(t.timings, e)),
            r = e.currentTimeline;
          n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
          const s = t.style;
          5 == s.type
            ? this.visitKeyframes(s, e)
            : (e.incrementTime(n.duration),
              this.visitStyle(s, e),
              r.applyStylesToKeyframe()),
            (e.currentAnimateTimings = null),
            (e.previousNode = t);
        }
        visitStyle(t, e) {
          const n = e.currentTimeline,
            r = e.currentAnimateTimings;
          !r && n.getCurrentStyleProperties().length && n.forwardFrame();
          const s = (r && r.easing) || t.easing;
          t.isEmptyStep
            ? n.applyEmptyStep(s)
            : n.setStyles(t.styles, s, e.errors, e.options),
            (e.previousNode = t);
        }
        visitKeyframes(t, e) {
          const n = e.currentAnimateTimings,
            r = e.currentTimeline.duration,
            s = n.duration,
            i = e.createSubContext().currentTimeline;
          (i.easing = n.easing),
            t.styles.forEach((t) => {
              i.forwardTime((t.offset || 0) * s),
                i.setStyles(t.styles, t.easing, e.errors, e.options),
                i.applyStylesToKeyframe();
            }),
            e.currentTimeline.mergeTimelineCollectedStyles(i),
            e.transformIntoNewTimeline(r + s),
            (e.previousNode = t);
        }
        visitQuery(t, e) {
          const n = e.currentTimeline.currentTime,
            r = t.options || {},
            s = r.delay ? x(r.delay) : 0;
          s &&
            (6 === e.previousNode.type ||
              (0 == n &&
                e.currentTimeline.getCurrentStyleProperties().length)) &&
            (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = lt));
          let i = n;
          const o = e.invokeQuery(
            t.selector,
            t.originalSelector,
            t.limit,
            t.includeSelf,
            !!r.optional,
            e.errors
          );
          e.currentQueryTotal = o.length;
          let a = null;
          o.forEach((n, r) => {
            e.currentQueryIndex = r;
            const o = e.createSubContext(t.options, n);
            s && o.delayNextStep(s),
              n === e.element && (a = o.currentTimeline),
              K(this, t.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (i = Math.max(i, o.currentTimeline.currentTime));
          }),
            (e.currentQueryIndex = 0),
            (e.currentQueryTotal = 0),
            e.transformIntoNewTimeline(i),
            a &&
              (e.currentTimeline.mergeTimelineCollectedStyles(a),
              e.currentTimeline.snapshotCurrentStyles()),
            (e.previousNode = t);
        }
        visitStagger(t, e) {
          const n = e.parentContext,
            r = e.currentTimeline,
            s = t.timings,
            i = Math.abs(s.duration),
            o = i * (e.currentQueryTotal - 1);
          let a = i * e.currentQueryIndex;
          switch (s.duration < 0 ? 'reverse' : s.easing) {
            case 'reverse':
              a = o - a;
              break;
            case 'full':
              a = n.currentStaggerTime;
          }
          const u = e.currentTimeline;
          a && u.delayNextStep(a);
          const c = u.currentTime;
          K(this, t.animation, e),
            (e.previousNode = t),
            (n.currentStaggerTime =
              r.currentTime - c + (r.startTime - n.currentTimeline.startTime));
        }
      }
      const lt = {};
      class ht {
        constructor(t, e, n, r, s, i, o, a) {
          (this._driver = t),
            (this.element = e),
            (this.subInstructions = n),
            (this._enterClassName = r),
            (this._leaveClassName = s),
            (this.errors = i),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = lt),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = a || new dt(this._driver, e, 0)),
            o.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(t, e) {
          if (!t) return;
          const n = t;
          let r = this.options;
          null != n.duration && (r.duration = x(n.duration)),
            null != n.delay && (r.delay = x(n.delay));
          const s = n.params;
          if (s) {
            let t = r.params;
            t || (t = this.options.params = {}),
              Object.keys(s).forEach((n) => {
                (e && t.hasOwnProperty(n)) || (t[n] = V(s[n], t, this.errors));
              });
          }
        }
        _copyOptions() {
          const t = {};
          if (this.options) {
            const e = this.options.params;
            if (e) {
              const n = (t.params = {});
              Object.keys(e).forEach((t) => {
                n[t] = e[t];
              });
            }
          }
          return t;
        }
        createSubContext(t = null, e, n) {
          const r = e || this.element,
            s = new ht(
              this._driver,
              r,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(r, n || 0)
            );
          return (
            (s.previousNode = this.previousNode),
            (s.currentAnimateTimings = this.currentAnimateTimings),
            (s.options = this._copyOptions()),
            s.updateOptions(t),
            (s.currentQueryIndex = this.currentQueryIndex),
            (s.currentQueryTotal = this.currentQueryTotal),
            (s.parentContext = this),
            this.subContextCount++,
            s
          );
        }
        transformIntoNewTimeline(t) {
          return (
            (this.previousNode = lt),
            (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(t, e, n) {
          const r = {
              duration: null != e ? e : t.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != n ? n : 0) +
                t.delay,
              easing: ''
            },
            s = new ft(
              this._driver,
              t.element,
              t.keyframes,
              t.preStyleProps,
              t.postStyleProps,
              r,
              t.stretchStartingKeyframe
            );
          return this.timelines.push(s), r;
        }
        incrementTime(t) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
        }
        delayNextStep(t) {
          t > 0 && this.currentTimeline.delayNextStep(t);
        }
        invokeQuery(t, e, n, r, s, i) {
          let o = [];
          if ((r && o.push(this.element), t.length > 0)) {
            t = (t = t.replace(ot, '.' + this._enterClassName)).replace(
              at,
              '.' + this._leaveClassName
            );
            let e = this._driver.query(this.element, t, 1 != n);
            0 !== n &&
              (e = n < 0 ? e.slice(e.length + n, e.length) : e.slice(0, n)),
              o.push(...e);
          }
          return (
            s ||
              0 != o.length ||
              i.push(
                `\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          );
        }
      }
      class dt {
        constructor(t, e, n, r) {
          (this._driver = t),
            (this.element = e),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = r),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(
              e
            )),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                e,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(t) {
          const e =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || e
            ? (this.forwardTime(this.currentTime + t),
              e && this.snapshotCurrentStyles())
            : (this.startTime += t);
        }
        fork(t, e) {
          return (
            this.applyStylesToKeyframe(),
            new dt(
              this._driver,
              t,
              e || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(t) {
          this.applyStylesToKeyframe(),
            (this.duration = t),
            this._loadKeyframe();
        }
        _updateStyle(t, e) {
          (this._localTimelineStyles[t] = e),
            (this._globalTimelineStyles[t] = e),
            (this._styleSummary[t] = { time: this.currentTime, value: e });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(t) {
          t && (this._previousKeyframe.easing = t),
            Object.keys(this._globalTimelineStyles).forEach((t) => {
              (this._backFill[t] = this._globalTimelineStyles[t] || i.a),
                (this._currentKeyframe[t] = i.a);
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(t, e, n, r) {
          e && (this._previousKeyframe.easing = e);
          const s = (r && r.params) || {},
            o = (function (t, e) {
              const n = {};
              let r;
              return (
                t.forEach((t) => {
                  '*' === t
                    ? ((r = r || Object.keys(e)),
                      r.forEach((t) => {
                        n[t] = i.a;
                      }))
                    : F(t, !1, n);
                }),
                n
              );
            })(t, this._globalTimelineStyles);
          Object.keys(o).forEach((t) => {
            const e = V(o[t], s, n);
            (this._pendingStyles[t] = e),
              this._localTimelineStyles.hasOwnProperty(t) ||
                (this._backFill[t] = this._globalTimelineStyles.hasOwnProperty(
                  t
                )
                  ? this._globalTimelineStyles[t]
                  : i.a),
              this._updateStyle(t, e);
          });
        }
        applyStylesToKeyframe() {
          const t = this._pendingStyles,
            e = Object.keys(t);
          0 != e.length &&
            ((this._pendingStyles = {}),
            e.forEach((e) => {
              this._currentKeyframe[e] = t[e];
            }),
            Object.keys(this._localTimelineStyles).forEach((t) => {
              this._currentKeyframe.hasOwnProperty(t) ||
                (this._currentKeyframe[t] = this._localTimelineStyles[t]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((t) => {
            const e = this._localTimelineStyles[t];
            (this._pendingStyles[t] = e), this._updateStyle(t, e);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const t = [];
          for (let e in this._currentKeyframe) t.push(e);
          return t;
        }
        mergeTimelineCollectedStyles(t) {
          Object.keys(t._styleSummary).forEach((e) => {
            const n = this._styleSummary[e],
              r = t._styleSummary[e];
            (!n || r.time > n.time) && this._updateStyle(e, r.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const t = new Set(),
            e = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration;
          let r = [];
          this._keyframes.forEach((s, o) => {
            const a = F(s, !0);
            Object.keys(a).forEach((n) => {
              const r = a[n];
              r == i.n ? t.add(n) : r == i.a && e.add(n);
            }),
              n || (a.offset = o / this.duration),
              r.push(a);
          });
          const s = t.size ? B(t.values()) : [],
            o = e.size ? B(e.values()) : [];
          if (n) {
            const t = r[0],
              e = T(t);
            (t.offset = 0), (e.offset = 1), (r = [t, e]);
          }
          return st(
            this.element,
            r,
            s,
            o,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class ft extends dt {
        constructor(t, e, n, r, s, i, o = !1) {
          super(t, e, i.delay),
            (this.element = e),
            (this.keyframes = n),
            (this.preStyleProps = r),
            (this.postStyleProps = s),
            (this._stretchStartingKeyframe = o),
            (this.timings = {
              duration: i.duration,
              delay: i.delay,
              easing: i.easing
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let t = this.keyframes,
            { delay: e, duration: n, easing: r } = this.timings;
          if (this._stretchStartingKeyframe && e) {
            const s = [],
              i = n + e,
              o = e / i,
              a = F(t[0], !1);
            (a.offset = 0), s.push(a);
            const u = F(t[0], !1);
            (u.offset = pt(o)), s.push(u);
            const c = t.length - 1;
            for (let r = 1; r <= c; r++) {
              let o = F(t[r], !1);
              (o.offset = pt((e + o.offset * n) / i)), s.push(o);
            }
            (n = i), (e = 0), (r = ''), (t = s);
          }
          return st(
            this.element,
            t,
            this.preStyleProps,
            this.postStyleProps,
            n,
            e,
            r,
            !0
          );
        }
      }
      function pt(t, e = 3) {
        const n = Math.pow(10, e - 1);
        return Math.round(t * n) / n;
      }
      class mt {}
      class gt extends mt {
        normalizePropertyName(t, e) {
          return z(t);
        }
        normalizeStyleValue(t, e, n, r) {
          let s = '';
          const i = n.toString().trim();
          if (bt[e] && 0 !== n && '0' !== n)
            if ('number' == typeof n) s = 'px';
            else {
              const e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              e &&
                0 == e[1].length &&
                r.push(`Please provide a CSS unit value for ${t}:${n}`);
            }
          return i + s;
        }
      }
      const bt = (() =>
        (function (t) {
          const e = {};
          return t.forEach((t) => (e[t] = !0)), e;
        })(
          'width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(
            ','
          )
        ))();
      function _t(t, e, n, r, s, i, o, a, u, c, l, h, d) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: s,
          fromState: n,
          fromStyles: i,
          toState: r,
          toStyles: o,
          timelines: a,
          queriedElements: u,
          preStyleProps: c,
          postStyleProps: l,
          totalTime: h,
          errors: d
        };
      }
      const yt = {};
      class vt {
        constructor(t, e, n) {
          (this._triggerName = t), (this.ast = e), (this._stateStyles = n);
        }
        match(t, e, n, r) {
          return (function (t, e, n, r, s) {
            return t.some((t) => t(e, n, r, s));
          })(this.ast.matchers, t, e, n, r);
        }
        buildStyles(t, e, n) {
          const r = this._stateStyles['*'],
            s = this._stateStyles[t],
            i = r ? r.buildStyles(e, n) : {};
          return s ? s.buildStyles(e, n) : i;
        }
        build(t, e, n, r, s, i, o, a, u, c) {
          const l = [],
            h = (this.ast.options && this.ast.options.params) || yt,
            f = this.buildStyles(n, (o && o.params) || yt, l),
            p = (a && a.params) || yt,
            m = this.buildStyles(r, p, l),
            g = new Set(),
            b = new Map(),
            _ = new Map(),
            y = 'void' === r,
            v = { params: Object.assign(Object.assign({}, h), p) },
            w = c ? [] : ut(t, e, this.ast.animation, s, i, f, m, v, u, l);
          let C = 0;
          if (
            (w.forEach((t) => {
              C = Math.max(t.duration + t.delay, C);
            }),
            l.length)
          )
            return _t(e, this._triggerName, n, r, y, f, m, [], [], b, _, C, l);
          w.forEach((t) => {
            const n = t.element,
              r = d(b, n, {});
            t.preStyleProps.forEach((t) => (r[t] = !0));
            const s = d(_, n, {});
            t.postStyleProps.forEach((t) => (s[t] = !0)), n !== e && g.add(n);
          });
          const E = B(g.values());
          return _t(e, this._triggerName, n, r, y, f, m, w, E, b, _, C);
        }
      }
      class wt {
        constructor(t, e) {
          (this.styles = t), (this.defaultParams = e);
        }
        buildStyles(t, e) {
          const n = {},
            r = T(this.defaultParams);
          return (
            Object.keys(t).forEach((e) => {
              const n = t[e];
              null != n && (r[e] = n);
            }),
            this.styles.styles.forEach((t) => {
              if ('string' != typeof t) {
                const s = t;
                Object.keys(s).forEach((t) => {
                  let i = s[t];
                  i.length > 1 && (i = V(i, r, e)), (n[t] = i);
                });
              }
            }),
            n
          );
        }
      }
      class Ct {
        constructor(t, e) {
          (this.name = t),
            (this.ast = e),
            (this.transitionFactories = []),
            (this.states = {}),
            e.states.forEach((t) => {
              this.states[t.name] = new wt(
                t.style,
                (t.options && t.options.params) || {}
              );
            }),
            Et(this.states, 'true', '1'),
            Et(this.states, 'false', '0'),
            e.transitions.forEach((e) => {
              this.transitionFactories.push(new vt(t, e, this.states));
            }),
            (this.fallbackTransition = new vt(
              t,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(t, e) => !0],
                options: null,
                queryCount: 0,
                depCount: 0
              },
              this.states
            ));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(t, e, n, r) {
          return (
            this.transitionFactories.find((s) => s.match(t, e, n, r)) || null
          );
        }
        matchStyles(t, e, n) {
          return this.fallbackTransition.buildStyles(t, e, n);
        }
      }
      function Et(t, e, n) {
        t.hasOwnProperty(e)
          ? t.hasOwnProperty(n) || (t[n] = t[e])
          : t.hasOwnProperty(n) && (t[e] = t[n]);
      }
      const St = new it();
      class Dt {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(t, e) {
          const n = [],
            r = Y(this._driver, e, n);
          if (n.length)
            throw new Error(
              'Unable to build the animation due to the following errors: ' +
                n.join('\n')
            );
          this._animations[t] = r;
        }
        _buildPlayer(t, e, n) {
          const r = t.element,
            s = u(0, this._normalizer, 0, t.keyframes, e, n);
          return this._driver.animate(
            r,
            s,
            t.duration,
            t.delay,
            t.easing,
            [],
            !0
          );
        }
        create(t, e, n = {}) {
          const r = [],
            s = this._animations[t];
          let o;
          const u = new Map();
          if (
            (s
              ? ((o = ut(
                  this._driver,
                  e,
                  s,
                  'ng-enter',
                  'ng-leave',
                  {},
                  {},
                  n,
                  St,
                  r
                )),
                o.forEach((t) => {
                  const e = d(u, t.element, {});
                  t.postStyleProps.forEach((t) => (e[t] = null));
                }))
              : (r.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (o = [])),
            r.length)
          )
            throw new Error(
              'Unable to create the animation due to the following errors: ' +
                r.join('\n')
            );
          u.forEach((t, e) => {
            Object.keys(t).forEach((n) => {
              t[n] = this._driver.computeStyle(e, n, i.a);
            });
          });
          const c = a(
            o.map((t) => {
              const e = u.get(t.element);
              return this._buildPlayer(t, {}, e);
            })
          );
          return (
            (this._playersById[t] = c),
            c.onDestroy(() => this.destroy(t)),
            this.players.push(c),
            c
          );
        }
        destroy(t) {
          const e = this._getPlayer(t);
          e.destroy(), delete this._playersById[t];
          const n = this.players.indexOf(e);
          n >= 0 && this.players.splice(n, 1);
        }
        _getPlayer(t) {
          const e = this._playersById[t];
          if (!e)
            throw new Error(
              'Unable to find the timeline player referenced by ' + t
            );
          return e;
        }
        listen(t, e, n, r) {
          const s = h(e, '', '', '');
          return c(this._getPlayer(t), n, s, r), () => {};
        }
        command(t, e, n, r) {
          if ('register' == n) return void this.register(t, r[0]);
          if ('create' == n) return void this.create(t, e, r[0] || {});
          const s = this._getPlayer(t);
          switch (n) {
            case 'play':
              s.play();
              break;
            case 'pause':
              s.pause();
              break;
            case 'reset':
              s.reset();
              break;
            case 'restart':
              s.restart();
              break;
            case 'finish':
              s.finish();
              break;
            case 'init':
              s.init();
              break;
            case 'setPosition':
              s.setPosition(parseFloat(r[0]));
              break;
            case 'destroy':
              this.destroy(t);
          }
        }
      }
      const At = [],
        xt = {
          namespaceId: '',
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1
        },
        Ot = {
          namespaceId: '',
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0
        };
      class kt {
        constructor(t, e = '') {
          this.namespaceId = e;
          const n = t && t.hasOwnProperty('value');
          if (((this.value = null != (r = n ? t.value : t) ? r : null), n)) {
            const e = T(t);
            delete e.value, (this.options = e);
          } else this.options = {};
          var r;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(t) {
          const e = t.params;
          if (e) {
            const t = this.options.params;
            Object.keys(e).forEach((n) => {
              null == t[n] && (t[n] = e[n]);
            });
          }
        }
      }
      const Tt = new kt('void');
      class Ft {
        constructor(t, e, n) {
          (this.id = t),
            (this.hostElement = e),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = 'ng-tns-' + t),
            Mt(e, this._hostClassName);
        }
        listen(t, e, n, r) {
          if (!this._triggers.hasOwnProperty(e))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`
            );
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${e}" because the provided event is undefined!`
            );
          if ('start' != (s = n) && 'done' != s)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`
            );
          var s;
          const i = d(this._elementListeners, t, []),
            o = { name: e, phase: n, callback: r };
          i.push(o);
          const a = d(this._engine.statesByElement, t, {});
          return (
            a.hasOwnProperty(e) ||
              (Mt(t, 'ng-trigger'), Mt(t, 'ng-trigger-' + e), (a[e] = Tt)),
            () => {
              this._engine.afterFlush(() => {
                const t = i.indexOf(o);
                t >= 0 && i.splice(t, 1), this._triggers[e] || delete a[e];
              });
            }
          );
        }
        register(t, e) {
          return !this._triggers[t] && ((this._triggers[t] = e), !0);
        }
        _getTrigger(t) {
          const e = this._triggers[t];
          if (!e)
            throw new Error(
              `The provided animation trigger "${t}" has not been registered!`
            );
          return e;
        }
        trigger(t, e, n, r = !0) {
          const s = this._getTrigger(e),
            i = new It(this.id, e, t);
          let o = this._engine.statesByElement.get(t);
          o ||
            (Mt(t, 'ng-trigger'),
            Mt(t, 'ng-trigger-' + e),
            this._engine.statesByElement.set(t, (o = {})));
          let a = o[e];
          const u = new kt(n, this.id);
          if (
            (!(n && n.hasOwnProperty('value')) &&
              a &&
              u.absorbOptions(a.options),
            (o[e] = u),
            a || (a = Tt),
            'void' !== u.value && a.value === u.value)
          ) {
            if (
              !(function (t, e) {
                const n = Object.keys(t),
                  r = Object.keys(e);
                if (n.length != r.length) return !1;
                for (let s = 0; s < n.length; s++) {
                  const r = n[s];
                  if (!e.hasOwnProperty(r) || t[r] !== e[r]) return !1;
                }
                return !0;
              })(a.params, u.params)
            ) {
              const e = [],
                n = s.matchStyles(a.value, a.params, e),
                r = s.matchStyles(u.value, u.params, e);
              e.length
                ? this._engine.reportError(e)
                : this._engine.afterFlush(() => {
                    P(t, n), R(t, r);
                  });
            }
            return;
          }
          const c = d(this._engine.playersByElement, t, []);
          c.forEach((t) => {
            t.namespaceId == this.id &&
              t.triggerName == e &&
              t.queued &&
              t.destroy();
          });
          let l = s.matchTransition(a.value, u.value, t, u.params),
            h = !1;
          if (!l) {
            if (!r) return;
            (l = s.fallbackTransition), (h = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: e,
              transition: l,
              fromState: a,
              toState: u,
              player: i,
              isFallbackTransition: h
            }),
            h ||
              (Mt(t, 'ng-animate-queued'),
              i.onStart(() => {
                Vt(t, 'ng-animate-queued');
              })),
            i.onDone(() => {
              let e = this.players.indexOf(i);
              e >= 0 && this.players.splice(e, 1);
              const n = this._engine.playersByElement.get(t);
              if (n) {
                let t = n.indexOf(i);
                t >= 0 && n.splice(t, 1);
              }
            }),
            this.players.push(i),
            c.push(i),
            i
          );
        }
        deregister(t) {
          delete this._triggers[t],
            this._engine.statesByElement.forEach((e, n) => {
              delete e[t];
            }),
            this._elementListeners.forEach((e, n) => {
              this._elementListeners.set(
                n,
                e.filter((e) => e.name != t)
              );
            });
        }
        clearElementCache(t) {
          this._engine.statesByElement.delete(t),
            this._elementListeners.delete(t);
          const e = this._engine.playersByElement.get(t);
          e &&
            (e.forEach((t) => t.destroy()),
            this._engine.playersByElement.delete(t));
        }
        _signalRemovalForInnerTriggers(t, e) {
          const n = this._engine.driver.query(t, '.ng-trigger', !0);
          n.forEach((t) => {
            if (t.__ng_removed) return;
            const n = this._engine.fetchNamespacesByElement(t);
            n.size
              ? n.forEach((n) => n.triggerLeaveAnimation(t, e, !1, !0))
              : this.clearElementCache(t);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              n.forEach((t) => this.clearElementCache(t))
            );
        }
        triggerLeaveAnimation(t, e, n, r) {
          const s = this._engine.statesByElement.get(t);
          if (s) {
            const i = [];
            if (
              (Object.keys(s).forEach((e) => {
                if (this._triggers[e]) {
                  const n = this.trigger(t, e, 'void', r);
                  n && i.push(n);
                }
              }),
              i.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, t, !0, e),
                n && a(i).onDone(() => this._engine.processLeaveNode(t)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(t) {
          const e = this._elementListeners.get(t);
          if (e) {
            const n = new Set();
            e.forEach((e) => {
              const r = e.name;
              if (n.has(r)) return;
              n.add(r);
              const s = this._triggers[r].fallbackTransition,
                i = this._engine.statesByElement.get(t)[r] || Tt,
                o = new kt('void'),
                a = new It(this.id, r, t);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: t,
                  triggerName: r,
                  transition: s,
                  fromState: i,
                  toState: o,
                  player: a,
                  isFallbackTransition: !0
                });
            });
          }
        }
        removeNode(t, e) {
          const n = this._engine;
          if (
            (t.childElementCount && this._signalRemovalForInnerTriggers(t, e),
            this.triggerLeaveAnimation(t, e, !0))
          )
            return;
          let r = !1;
          if (n.totalAnimations) {
            const e = n.players.length ? n.playersByQueriedElement.get(t) : [];
            if (e && e.length) r = !0;
            else {
              let e = t;
              for (; (e = e.parentNode); )
                if (n.statesByElement.get(e)) {
                  r = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(t), r))
            n.markElementAsRemoved(this.id, t, !1, e);
          else {
            const r = t.__ng_removed;
            (r && r !== xt) ||
              (n.afterFlush(() => this.clearElementCache(t)),
              n.destroyInnerAnimations(t),
              n._onRemovalComplete(t, e));
          }
        }
        insertNode(t, e) {
          Mt(t, this._hostClassName);
        }
        drainQueuedTransitions(t) {
          const e = [];
          return (
            this._queue.forEach((n) => {
              const r = n.player;
              if (r.destroyed) return;
              const s = n.element,
                i = this._elementListeners.get(s);
              i &&
                i.forEach((e) => {
                  if (e.name == n.triggerName) {
                    const r = h(
                      s,
                      n.triggerName,
                      n.fromState.value,
                      n.toState.value
                    );
                    (r._data = t), c(n.player, e.phase, r, e.callback);
                  }
                }),
                r.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      r.destroy();
                    })
                  : e.push(n);
            }),
            (this._queue = []),
            e.sort((t, e) => {
              const n = t.transition.ast.depCount,
                r = e.transition.ast.depCount;
              return 0 == n || 0 == r
                ? n - r
                : this._engine.driver.containsElement(t.element, e.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(t) {
          this.players.forEach((t) => t.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, t);
        }
        elementContainsData(t) {
          let e = !1;
          return (
            this._elementListeners.has(t) && (e = !0),
            (e = !!this._queue.find((e) => e.element === t) || e),
            e
          );
        }
      }
      class jt {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this.driver = e),
            (this._normalizer = n),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (t, e) => {});
        }
        _onRemovalComplete(t, e) {
          this.onRemovalComplete(t, e);
        }
        get queuedPlayers() {
          const t = [];
          return (
            this._namespaceList.forEach((e) => {
              e.players.forEach((e) => {
                e.queued && t.push(e);
              });
            }),
            t
          );
        }
        createNamespace(t, e) {
          const n = new Ft(t, e, this);
          return (
            e.parentNode
              ? this._balanceNamespaceList(n, e)
              : (this.newHostElements.set(e, n), this.collectEnterElement(e)),
            (this._namespaceLookup[t] = n)
          );
        }
        _balanceNamespaceList(t, e) {
          const n = this._namespaceList.length - 1;
          if (n >= 0) {
            let r = !1;
            for (let s = n; s >= 0; s--)
              if (
                this.driver.containsElement(
                  this._namespaceList[s].hostElement,
                  e
                )
              ) {
                this._namespaceList.splice(s + 1, 0, t), (r = !0);
                break;
              }
            r || this._namespaceList.splice(0, 0, t);
          } else this._namespaceList.push(t);
          return this.namespacesByHostElement.set(e, t), t;
        }
        register(t, e) {
          let n = this._namespaceLookup[t];
          return n || (n = this.createNamespace(t, e)), n;
        }
        registerTrigger(t, e, n) {
          let r = this._namespaceLookup[t];
          r && r.register(e, n) && this.totalAnimations++;
        }
        destroy(t, e) {
          if (!t) return;
          const n = this._fetchNamespace(t);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement),
              delete this._namespaceLookup[t];
            const e = this._namespaceList.indexOf(n);
            e >= 0 && this._namespaceList.splice(e, 1);
          }),
            this.afterFlushAnimationsDone(() => n.destroy(e));
        }
        _fetchNamespace(t) {
          return this._namespaceLookup[t];
        }
        fetchNamespacesByElement(t) {
          const e = new Set(),
            n = this.statesByElement.get(t);
          if (n) {
            const t = Object.keys(n);
            for (let r = 0; r < t.length; r++) {
              const s = n[t[r]].namespaceId;
              if (s) {
                const t = this._fetchNamespace(s);
                t && e.add(t);
              }
            }
          }
          return e;
        }
        trigger(t, e, n, r) {
          if (Rt(e)) {
            const s = this._fetchNamespace(t);
            if (s) return s.trigger(e, n, r), !0;
          }
          return !1;
        }
        insertNode(t, e, n, r) {
          if (!Rt(e)) return;
          const s = e.__ng_removed;
          if (s && s.setForRemoval) {
            (s.setForRemoval = !1), (s.setForMove = !0);
            const t = this.collectedLeaveElements.indexOf(e);
            t >= 0 && this.collectedLeaveElements.splice(t, 1);
          }
          if (t) {
            const r = this._fetchNamespace(t);
            r && r.insertNode(e, n);
          }
          r && this.collectEnterElement(e);
        }
        collectEnterElement(t) {
          this.collectedEnterElements.push(t);
        }
        markElementAsDisabled(t, e) {
          e
            ? this.disabledNodes.has(t) ||
              (this.disabledNodes.add(t), Mt(t, 'ng-animate-disabled'))
            : this.disabledNodes.has(t) &&
              (this.disabledNodes.delete(t), Vt(t, 'ng-animate-disabled'));
        }
        removeNode(t, e, n, r) {
          if (Rt(e)) {
            const s = t ? this._fetchNamespace(t) : null;
            if (
              (s ? s.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r),
              n)
            ) {
              const n = this.namespacesByHostElement.get(e);
              n && n.id !== t && n.removeNode(e, r);
            }
          } else this._onRemovalComplete(e, r);
        }
        markElementAsRemoved(t, e, n, r) {
          this.collectedLeaveElements.push(e),
            (e.__ng_removed = {
              namespaceId: t,
              setForRemoval: r,
              hasAnimation: n,
              removedBeforeQueried: !1
            });
        }
        listen(t, e, n, r, s) {
          return Rt(e) ? this._fetchNamespace(t).listen(e, n, r, s) : () => {};
        }
        _buildInstruction(t, e, n, r, s) {
          return t.transition.build(
            this.driver,
            t.element,
            t.fromState.value,
            t.toState.value,
            n,
            r,
            t.fromState.options,
            t.toState.options,
            e,
            s
          );
        }
        destroyInnerAnimations(t) {
          let e = this.driver.query(t, '.ng-trigger', !0);
          e.forEach((t) => this.destroyActiveAnimationsForElement(t)),
            0 != this.playersByQueriedElement.size &&
              ((e = this.driver.query(t, '.ng-animating', !0)),
              e.forEach((t) => this.finishActiveQueriedAnimationOnElement(t)));
        }
        destroyActiveAnimationsForElement(t) {
          const e = this.playersByElement.get(t);
          e &&
            e.forEach((t) => {
              t.queued ? (t.markedForDestroy = !0) : t.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(t) {
          const e = this.playersByQueriedElement.get(t);
          e && e.forEach((t) => t.finish());
        }
        whenRenderingDone() {
          return new Promise((t) => {
            if (this.players.length) return a(this.players).onDone(() => t());
            t();
          });
        }
        processLeaveNode(t) {
          const e = t.__ng_removed;
          if (e && e.setForRemoval) {
            if (((t.__ng_removed = xt), e.namespaceId)) {
              this.destroyInnerAnimations(t);
              const n = this._fetchNamespace(e.namespaceId);
              n && n.clearElementCache(t);
            }
            this._onRemovalComplete(t, e.setForRemoval);
          }
          this.driver.matchesElement(t, '.ng-animate-disabled') &&
            this.markElementAsDisabled(t, !1),
            this.driver.query(t, '.ng-animate-disabled', !0).forEach((t) => {
              this.markElementAsDisabled(t, !1);
            });
        }
        flush(t = -1) {
          let e = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((t, e) =>
                this._balanceNamespaceList(t, e)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              Mt(this.collectedEnterElements[n], 'ng-star-inserted');
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const n = [];
            try {
              e = this._flushAnimations(n, t);
            } finally {
              for (let t = 0; t < n.length; t++) n[t]();
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((t) => t()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const t = this._whenQuietFns;
            (this._whenQuietFns = []),
              e.length
                ? a(e).onDone(() => {
                    t.forEach((t) => t());
                  })
                : t.forEach((t) => t());
          }
        }
        reportError(t) {
          throw new Error(
            'Unable to process animations due to the following failed trigger transitions\n ' +
              t.join('\n')
          );
        }
        _flushAnimations(t, e) {
          const n = new it(),
            r = [],
            s = new Map(),
            o = [],
            u = new Map(),
            c = new Map(),
            l = new Map(),
            h = new Set();
          this.disabledNodes.forEach((t) => {
            h.add(t);
            const e = this.driver.query(t, '.ng-animate-queued', !0);
            for (let n = 0; n < e.length; n++) h.add(e[n]);
          });
          const f = this.bodyNode,
            p = Array.from(this.statesByElement.keys()),
            m = Lt(p, this.collectedEnterElements),
            g = new Map();
          let b = 0;
          m.forEach((t, e) => {
            const n = 'ng-enter' + b++;
            g.set(e, n), t.forEach((t) => Mt(t, n));
          });
          const _ = [],
            y = new Set(),
            v = new Set();
          for (let i = 0; i < this.collectedLeaveElements.length; i++) {
            const t = this.collectedLeaveElements[i],
              e = t.__ng_removed;
            e &&
              e.setForRemoval &&
              (_.push(t),
              y.add(t),
              e.hasAnimation
                ? this.driver
                    .query(t, '.ng-star-inserted', !0)
                    .forEach((t) => y.add(t))
                : v.add(t));
          }
          const w = new Map(),
            C = Lt(p, Array.from(y));
          C.forEach((t, e) => {
            const n = 'ng-leave' + b++;
            w.set(e, n), t.forEach((t) => Mt(t, n));
          }),
            t.push(() => {
              m.forEach((t, e) => {
                const n = g.get(e);
                t.forEach((t) => Vt(t, n));
              }),
                C.forEach((t, e) => {
                  const n = w.get(e);
                  t.forEach((t) => Vt(t, n));
                }),
                _.forEach((t) => {
                  this.processLeaveNode(t);
                });
            });
          const E = [],
            S = [];
          for (let i = this._namespaceList.length - 1; i >= 0; i--)
            this._namespaceList[i].drainQueuedTransitions(e).forEach((t) => {
              const e = t.player,
                s = t.element;
              if ((E.push(e), this.collectedEnterElements.length)) {
                const t = s.__ng_removed;
                if (t && t.setForMove) return void e.destroy();
              }
              const i = !f || !this.driver.containsElement(f, s),
                a = w.get(s),
                h = g.get(s),
                p = this._buildInstruction(t, n, h, a, i);
              if (p.errors && p.errors.length) S.push(p);
              else {
                if (i)
                  return (
                    e.onStart(() => P(s, p.fromStyles)),
                    e.onDestroy(() => R(s, p.toStyles)),
                    void r.push(e)
                  );
                if (t.isFallbackTransition)
                  return (
                    e.onStart(() => P(s, p.fromStyles)),
                    e.onDestroy(() => R(s, p.toStyles)),
                    void r.push(e)
                  );
                p.timelines.forEach((t) => (t.stretchStartingKeyframe = !0)),
                  n.append(s, p.timelines),
                  o.push({ instruction: p, player: e, element: s }),
                  p.queriedElements.forEach((t) => d(u, t, []).push(e)),
                  p.preStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    if (n.length) {
                      let t = c.get(e);
                      t || c.set(e, (t = new Set())),
                        n.forEach((e) => t.add(e));
                    }
                  }),
                  p.postStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    let r = l.get(e);
                    r || l.set(e, (r = new Set())), n.forEach((t) => r.add(t));
                  });
              }
            });
          if (S.length) {
            const t = [];
            S.forEach((e) => {
              t.push(`@${e.triggerName} has failed due to:\n`),
                e.errors.forEach((e) => t.push(`- ${e}\n`));
            }),
              E.forEach((t) => t.destroy()),
              this.reportError(t);
          }
          const D = new Map(),
            A = new Map();
          o.forEach((t) => {
            const e = t.element;
            n.has(e) &&
              (A.set(e, e),
              this._beforeAnimationBuild(
                t.player.namespaceId,
                t.instruction,
                D
              ));
          }),
            r.forEach((t) => {
              const e = t.element;
              this._getPreviousPlayers(
                e,
                !1,
                t.namespaceId,
                t.triggerName,
                null
              ).forEach((t) => {
                d(D, e, []).push(t), t.destroy();
              });
            });
          const x = _.filter((t) => zt(t, c, l)),
            O = new Map();
          Nt(O, this.driver, v, l, i.a).forEach((t) => {
            zt(t, c, l) && x.push(t);
          });
          const k = new Map();
          m.forEach((t, e) => {
            Nt(k, this.driver, new Set(t), c, i.n);
          }),
            x.forEach((t) => {
              const e = O.get(t),
                n = k.get(t);
              O.set(t, Object.assign(Object.assign({}, e), n));
            });
          const T = [],
            F = [],
            j = {};
          o.forEach((t) => {
            const { element: e, player: i, instruction: o } = t;
            if (n.has(e)) {
              if (h.has(e))
                return (
                  i.onDestroy(() => R(e, o.toStyles)),
                  (i.disabled = !0),
                  i.overrideTotalTime(o.totalTime),
                  void r.push(i)
                );
              let t = j;
              if (A.size > 1) {
                let n = e;
                const r = [];
                for (; (n = n.parentNode); ) {
                  const e = A.get(n);
                  if (e) {
                    t = e;
                    break;
                  }
                  r.push(n);
                }
                r.forEach((e) => A.set(e, t));
              }
              const n = this._buildAnimation(i.namespaceId, o, D, s, k, O);
              if ((i.setRealPlayer(n), t === j)) T.push(i);
              else {
                const e = this.playersByElement.get(t);
                e && e.length && (i.parentPlayer = a(e)), r.push(i);
              }
            } else
              P(e, o.fromStyles),
                i.onDestroy(() => R(e, o.toStyles)),
                F.push(i),
                h.has(e) && r.push(i);
          }),
            F.forEach((t) => {
              const e = s.get(t.element);
              if (e && e.length) {
                const n = a(e);
                t.setRealPlayer(n);
              }
            }),
            r.forEach((t) => {
              t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy();
            });
          for (let i = 0; i < _.length; i++) {
            const t = _[i],
              e = t.__ng_removed;
            if ((Vt(t, 'ng-leave'), e && e.hasAnimation)) continue;
            let n = [];
            if (u.size) {
              let e = u.get(t);
              e && e.length && n.push(...e);
              let r = this.driver.query(t, '.ng-animating', !0);
              for (let t = 0; t < r.length; t++) {
                let e = u.get(r[t]);
                e && e.length && n.push(...e);
              }
            }
            const r = n.filter((t) => !t.destroyed);
            r.length ? Bt(this, t, r) : this.processLeaveNode(t);
          }
          return (
            (_.length = 0),
            T.forEach((t) => {
              this.players.push(t),
                t.onDone(() => {
                  t.destroy();
                  const e = this.players.indexOf(t);
                  this.players.splice(e, 1);
                }),
                t.play();
            }),
            T
          );
        }
        elementContainsData(t, e) {
          let n = !1;
          const r = e.__ng_removed;
          return (
            r && r.setForRemoval && (n = !0),
            this.playersByElement.has(e) && (n = !0),
            this.playersByQueriedElement.has(e) && (n = !0),
            this.statesByElement.has(e) && (n = !0),
            this._fetchNamespace(t).elementContainsData(e) || n
          );
        }
        afterFlush(t) {
          this._flushFns.push(t);
        }
        afterFlushAnimationsDone(t) {
          this._whenQuietFns.push(t);
        }
        _getPreviousPlayers(t, e, n, r, s) {
          let i = [];
          if (e) {
            const e = this.playersByQueriedElement.get(t);
            e && (i = e);
          } else {
            const e = this.playersByElement.get(t);
            if (e) {
              const t = !s || 'void' == s;
              e.forEach((e) => {
                e.queued || ((t || e.triggerName == r) && i.push(e));
              });
            }
          }
          return (
            (n || r) &&
              (i = i.filter(
                (t) => !((n && n != t.namespaceId) || (r && r != t.triggerName))
              )),
            i
          );
        }
        _beforeAnimationBuild(t, e, n) {
          const r = e.element,
            s = e.isRemovalTransition ? void 0 : t,
            i = e.isRemovalTransition ? void 0 : e.triggerName;
          for (const o of e.timelines) {
            const t = o.element,
              a = t !== r,
              u = d(n, t, []);
            this._getPreviousPlayers(t, a, s, i, e.toState).forEach((t) => {
              const e = t.getRealPlayer();
              e.beforeDestroy && e.beforeDestroy(), t.destroy(), u.push(t);
            });
          }
          P(r, e.fromStyles);
        }
        _buildAnimation(t, e, n, r, s, o) {
          const c = e.triggerName,
            l = e.element,
            h = [],
            f = new Set(),
            p = new Set(),
            m = e.timelines.map((e) => {
              const a = e.element;
              f.add(a);
              const d = a.__ng_removed;
              if (d && d.removedBeforeQueried)
                return new i.d(e.duration, e.delay);
              const m = a !== l,
                g = (function (t) {
                  const e = [];
                  return Ut(t, e), e;
                })((n.get(a) || At).map((t) => t.getRealPlayer())).filter(
                  (t) => !!t.element && t.element === a
                ),
                b = s.get(a),
                _ = o.get(a),
                y = u(0, this._normalizer, 0, e.keyframes, b, _),
                v = this._buildPlayer(e, y, g);
              if ((e.subTimeline && r && p.add(a), m)) {
                const e = new It(t, c, a);
                e.setRealPlayer(v), h.push(e);
              }
              return v;
            });
          h.forEach((t) => {
            d(this.playersByQueriedElement, t.element, []).push(t),
              t.onDone(() =>
                (function (t, e, n) {
                  let r;
                  if (t instanceof Map) {
                    if (((r = t.get(e)), r)) {
                      if (r.length) {
                        const t = r.indexOf(n);
                        r.splice(t, 1);
                      }
                      0 == r.length && t.delete(e);
                    }
                  } else if (((r = t[e]), r)) {
                    if (r.length) {
                      const t = r.indexOf(n);
                      r.splice(t, 1);
                    }
                    0 == r.length && delete t[e];
                  }
                  return r;
                })(this.playersByQueriedElement, t.element, t)
              );
          }),
            f.forEach((t) => Mt(t, 'ng-animating'));
          const g = a(m);
          return (
            g.onDestroy(() => {
              f.forEach((t) => Vt(t, 'ng-animating')), R(l, e.toStyles);
            }),
            p.forEach((t) => {
              d(r, t, []).push(g);
            }),
            g
          );
        }
        _buildPlayer(t, e, n) {
          return e.length > 0
            ? this.driver.animate(
                t.element,
                e,
                t.duration,
                t.delay,
                t.easing,
                n
              )
            : new i.d(t.duration, t.delay);
        }
      }
      class It {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.triggerName = e),
            (this.element = n),
            (this._player = new i.d()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(t) {
          this._containsRealPlayer ||
            ((this._player = t),
            Object.keys(this._queuedCallbacks).forEach((e) => {
              this._queuedCallbacks[e].forEach((n) => c(t, e, void 0, n));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(t.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(t) {
          this.totalTime = t;
        }
        syncPlayerEvents(t) {
          const e = this._player;
          e.triggerCallback && t.onStart(() => e.triggerCallback('start')),
            t.onDone(() => this.finish()),
            t.onDestroy(() => this.destroy());
        }
        _queueEvent(t, e) {
          d(this._queuedCallbacks, t, []).push(e);
        }
        onDone(t) {
          this.queued && this._queueEvent('done', t), this._player.onDone(t);
        }
        onStart(t) {
          this.queued && this._queueEvent('start', t), this._player.onStart(t);
        }
        onDestroy(t) {
          this.queued && this._queueEvent('destroy', t),
            this._player.onDestroy(t);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(t) {
          this.queued || this._player.setPosition(t);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(t) {
          const e = this._player;
          e.triggerCallback && e.triggerCallback(t);
        }
      }
      function Rt(t) {
        return t && 1 === t.nodeType;
      }
      function Pt(t, e) {
        const n = t.style.display;
        return (t.style.display = null != e ? e : 'none'), n;
      }
      function Nt(t, e, n, r, s) {
        const i = [];
        n.forEach((t) => i.push(Pt(t)));
        const o = [];
        r.forEach((n, r) => {
          const i = {};
          n.forEach((t) => {
            const n = (i[t] = e.computeStyle(r, t, s));
            (n && 0 != n.length) || ((r.__ng_removed = Ot), o.push(r));
          }),
            t.set(r, i);
        });
        let a = 0;
        return n.forEach((t) => Pt(t, i[a++])), o;
      }
      function Lt(t, e) {
        const n = new Map();
        if ((t.forEach((t) => n.set(t, [])), 0 == e.length)) return n;
        const r = new Set(e),
          s = new Map();
        function i(t) {
          if (!t) return 1;
          let e = s.get(t);
          if (e) return e;
          const o = t.parentNode;
          return (e = n.has(o) ? o : r.has(o) ? 1 : i(o)), s.set(t, e), e;
        }
        return (
          e.forEach((t) => {
            const e = i(t);
            1 !== e && n.get(e).push(t);
          }),
          n
        );
      }
      function Mt(t, e) {
        if (t.classList) t.classList.add(e);
        else {
          let n = t.$$classes;
          n || (n = t.$$classes = {}), (n[e] = !0);
        }
      }
      function Vt(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
          let n = t.$$classes;
          n && delete n[e];
        }
      }
      function Bt(t, e, n) {
        a(n).onDone(() => t.processLeaveNode(e));
      }
      function Ut(t, e) {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          r instanceof i.m ? Ut(r.players, e) : e.push(r);
        }
      }
      function zt(t, e, n) {
        const r = n.get(t);
        if (!r) return !1;
        let s = e.get(t);
        return s ? r.forEach((t) => s.add(t)) : e.set(t, r), n.delete(t), !0;
      }
      class Ht {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (t, e) => {}),
            (this._transitionEngine = new jt(t, e, n)),
            (this._timelineEngine = new Dt(t, e, n)),
            (this._transitionEngine.onRemovalComplete = (t, e) =>
              this.onRemovalComplete(t, e));
        }
        registerTrigger(t, e, n, r, s) {
          const i = t + '-' + r;
          let o = this._triggerCache[i];
          if (!o) {
            const t = [],
              e = Y(this._driver, s, t);
            if (t.length)
              throw new Error(
                `The animation trigger "${r}" has failed to build due to the following errors:\n - ${t.join(
                  '\n - '
                )}`
              );
            (o = (function (t, e) {
              return new Ct(t, e);
            })(r, e)),
              (this._triggerCache[i] = o);
          }
          this._transitionEngine.registerTrigger(e, r, o);
        }
        register(t, e) {
          this._transitionEngine.register(t, e);
        }
        destroy(t, e) {
          this._transitionEngine.destroy(t, e);
        }
        onInsert(t, e, n, r) {
          this._transitionEngine.insertNode(t, e, n, r);
        }
        onRemove(t, e, n, r) {
          this._transitionEngine.removeNode(t, e, r || !1, n);
        }
        disableAnimations(t, e) {
          this._transitionEngine.markElementAsDisabled(t, e);
        }
        process(t, e, n, r) {
          if ('@' == n.charAt(0)) {
            const [t, s] = f(n);
            this._timelineEngine.command(t, e, s, r);
          } else this._transitionEngine.trigger(t, e, n, r);
        }
        listen(t, e, n, r, s) {
          if ('@' == n.charAt(0)) {
            const [t, r] = f(n);
            return this._timelineEngine.listen(t, e, r, s);
          }
          return this._transitionEngine.listen(t, e, n, r, s);
        }
        flush(t = -1) {
          this._transitionEngine.flush(t);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function qt(t, e) {
        let n = null,
          r = null;
        return (
          Array.isArray(e) && e.length
            ? ((n = $t(e[0])), e.length > 1 && (r = $t(e[e.length - 1])))
            : e && (n = $t(e)),
          n || r ? new Kt(t, n, r) : null
        );
      }
      let Kt = (() => {
        class t {
          constructor(e, n, r) {
            (this._element = e),
              (this._startStyles = n),
              (this._endStyles = r),
              (this._state = 0);
            let s = t.initialStylesByElement.get(e);
            s || t.initialStylesByElement.set(e, (s = {})),
              (this._initialStyles = s);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                R(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (R(this._element, this._initialStyles),
                this._endStyles &&
                  (R(this._element, this._endStyles), (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (t.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (P(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (P(this._element, this._endStyles), (this._endStyles = null)),
                R(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (t.initialStylesByElement = new WeakMap()), t;
      })();
      function $t(t) {
        let e = null;
        const n = Object.keys(t);
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          Gt(s) && ((e = e || {}), (e[s] = t[s]));
        }
        return e;
      }
      function Gt(t) {
        return 'display' === t || 'position' === t;
      }
      class Wt {
        constructor(t, e, n, r, s, i, o) {
          (this._element = t),
            (this._name = e),
            (this._duration = n),
            (this._delay = r),
            (this._easing = s),
            (this._fillMode = i),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = (t) => this._handleCallback(t));
        }
        apply() {
          !(function (t, e) {
            const n = te(t, '').trim();
            n.length &&
              ((function (t, e) {
                let n = 0;
                for (let r = 0; r < t.length; r++) ',' === t.charAt(r) && n++;
              })(n),
              (e = `${n}, ${e}`)),
              Jt(t, '', e);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            Yt(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          Qt(this._element, this._name, 'paused');
        }
        resume() {
          Qt(this._element, this._name, 'running');
        }
        setPosition(t) {
          const e = Zt(this._element, this._name);
          (this._position = t * this._duration),
            Jt(this._element, 'Delay', `-${this._position}ms`, e);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(t) {
          const e = t._ngTestManualTimestamp || Date.now(),
            n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
          t.animationName == this._name &&
            Math.max(e - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            Yt(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (t, e) {
              const n = te(t, '').split(','),
                r = Xt(n, e);
              r >= 0 && (n.splice(r, 1), Jt(t, '', n.join(',')));
            })(this._element, this._name));
        }
      }
      function Qt(t, e, n) {
        Jt(t, 'PlayState', n, Zt(t, e));
      }
      function Zt(t, e) {
        const n = te(t, '');
        return n.indexOf(',') > 0 ? Xt(n.split(','), e) : Xt([n], e);
      }
      function Xt(t, e) {
        for (let n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
        return -1;
      }
      function Yt(t, e, n) {
        n
          ? t.removeEventListener('animationend', e)
          : t.addEventListener('animationend', e);
      }
      function Jt(t, e, n, r) {
        const s = 'animation' + e;
        if (null != r) {
          const e = t.style[s];
          if (e.length) {
            const t = e.split(',');
            (t[r] = n), (n = t.join(','));
          }
        }
        t.style[s] = n;
      }
      function te(t, e) {
        return t.style['animation' + e] || '';
      }
      class ee {
        constructor(t, e, n, r, s, i, o, a) {
          (this.element = t),
            (this.keyframes = e),
            (this.animationName = n),
            (this._duration = r),
            (this._delay = s),
            (this._finalStyles = o),
            (this._specialStyles = a),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = i || 'linear'),
            (this.totalTime = r + s),
            this._buildStyler();
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach((t) => t()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach((t) => t()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(t) {
          this._styler.setPosition(t);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          this._styler.destroy(), this._buildStyler(), this._styler.apply();
        }
        _buildStyler() {
          this._styler = new Wt(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            'forwards',
            () => this.finish()
          );
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
        beforeDestroy() {
          this.init();
          const t = {};
          if (this.hasStarted()) {
            const e = this._state >= 3;
            Object.keys(this._finalStyles).forEach((n) => {
              'offset' != n &&
                (t[n] = e ? this._finalStyles[n] : $(this.element, n));
            });
          }
          this.currentSnapshot = t;
        }
      }
      class ne extends i.d {
        constructor(t, e) {
          super(),
            (this.element = t),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = S(e));
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach((t) => {
              this._startingStyles[t] = this.element.style[t];
            }),
            super.init());
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach((t) =>
              this.element.style.setProperty(t, this._styles[t])
            ),
            super.play());
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach((t) => {
              const e = this._startingStyles[t];
              e
                ? this.element.style.setProperty(t, e)
                : this.element.style.removeProperty(t);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      class re {
        constructor() {
          (this._count = 0), (this._head = document.querySelector('head'));
        }
        validateStyleProperty(t) {
          return v(t);
        }
        matchesElement(t, e) {
          return w(t, e);
        }
        containsElement(t, e) {
          return C(t, e);
        }
        query(t, e, n) {
          return E(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        buildKeyframeElement(t, e, n) {
          n = n.map((t) => S(t));
          let r = `@keyframes ${e} {\n`,
            s = '';
          n.forEach((t) => {
            s = ' ';
            const e = parseFloat(t.offset);
            (r += `${s}${100 * e}% {\n`),
              (s += ' '),
              Object.keys(t).forEach((e) => {
                const n = t[e];
                switch (e) {
                  case 'offset':
                    return;
                  case 'easing':
                    return void (
                      n && (r += `${s}animation-timing-function: ${n};\n`)
                    );
                  default:
                    return void (r += `${s}${e}: ${n};\n`);
                }
              }),
              (r += s + '}\n');
          }),
            (r += '}\n');
          const i = document.createElement('style');
          return (i.textContent = r), i;
        }
        animate(t, e, n, r, s, i = [], o) {
          const a = i.filter((t) => t instanceof ee),
            u = {};
          H(n, r) &&
            a.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (u[t] = e[t]));
            });
          const c = (function (t) {
            let e = {};
            return (
              t &&
                (Array.isArray(t) ? t : [t]).forEach((t) => {
                  Object.keys(t).forEach((n) => {
                    'offset' != n && 'easing' != n && (e[n] = t[n]);
                  });
                }),
              e
            );
          })((e = q(t, e, u)));
          if (0 == n) return new ne(t, c);
          const l = 'gen_css_kf_' + this._count++,
            h = this.buildKeyframeElement(t, l, e);
          document.querySelector('head').appendChild(h);
          const d = qt(t, e),
            f = new ee(t, e, l, n, r, s, c, d);
          return (
            f.onDestroy(() => {
              var t;
              (t = h).parentNode.removeChild(t);
            }),
            f
          );
        }
      }
      class se {
        constructor(t, e, n, r) {
          (this.element = t),
            (this.keyframes = e),
            (this.options = n),
            (this._specialStyles = r),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const t = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            t,
            this.options
          )),
            (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
            this.domPlayer.addEventListener('finish', () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(t, e, n) {
          return t.animate(e, n);
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((t) => t()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        setPosition(t) {
          this.domPlayer.currentTime = t * this.time;
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const t = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach((e) => {
              'offset' != e &&
                (t[e] = this._finished
                  ? this._finalKeyframe[e]
                  : $(this.element, e));
            }),
            (this.currentSnapshot = t);
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class ie {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            oe().toString()
          )),
            (this._cssKeyframesDriver = new re());
        }
        validateStyleProperty(t) {
          return v(t);
        }
        matchesElement(t, e) {
          return w(t, e);
        }
        containsElement(t, e) {
          return C(t, e);
        }
        query(t, e, n) {
          return E(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        overrideWebAnimationsSupport(t) {
          this._isNativeImpl = t;
        }
        animate(t, e, n, r, s, i = [], o) {
          if (!o && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(t, e, n, r, s, i);
          const a = {
            duration: n,
            delay: r,
            fill: 0 == r ? 'both' : 'forwards'
          };
          s && (a.easing = s);
          const u = {},
            c = i.filter((t) => t instanceof se);
          H(n, r) &&
            c.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (u[t] = e[t]));
            });
          const l = qt(t, (e = q(t, (e = e.map((t) => F(t, !1))), u)));
          return new se(t, e, a, l);
        }
      }
      function oe() {
        return (
          ('undefined' != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      var ae = n('ofXK');
      let ue = (() => {
        class t extends i.b {
          constructor(t, e) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = t.createRenderer(e.body, {
                id: '0',
                encapsulation: r.Q.None,
                styles: [],
                data: { animation: [] }
              }));
          }
          build(t) {
            const e = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const n = Array.isArray(t) ? Object(i.h)(t) : t;
            return (
              he(this._renderer, null, e, 'register', [n]),
              new ce(e, this._renderer)
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Ub(r.F), r.Ub(ae.d));
          }),
          (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class ce extends i.c {
        constructor(t, e) {
          super(), (this._id = t), (this._renderer = e);
        }
        create(t, e) {
          return new le(this._id, t, e || {}, this._renderer);
        }
      }
      class le {
        constructor(t, e, n, r) {
          (this.id = t),
            (this.element = e),
            (this._renderer = r),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command('create', n);
        }
        _listen(t, e) {
          return this._renderer.listen(this.element, `@@${this.id}:${t}`, e);
        }
        _command(t, ...e) {
          return he(this._renderer, this.element, this.id, t, e);
        }
        onDone(t) {
          this._listen('done', t);
        }
        onStart(t) {
          this._listen('start', t);
        }
        onDestroy(t) {
          this._listen('destroy', t);
        }
        init() {
          this._command('init');
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command('play'), (this._started = !0);
        }
        pause() {
          this._command('pause');
        }
        restart() {
          this._command('restart');
        }
        finish() {
          this._command('finish');
        }
        destroy() {
          this._command('destroy');
        }
        reset() {
          this._command('reset');
        }
        setPosition(t) {
          this._command('setPosition', t);
        }
        getPosition() {
          var t, e;
          return null !==
            (e =
              null === (t = this._renderer.engine.players[+this.id]) ||
              void 0 === t
                ? void 0
                : t.getPosition()) && void 0 !== e
            ? e
            : 0;
        }
      }
      function he(t, e, n, r, s) {
        return t.setProperty(e, `@@${n}:${r}`, s);
      }
      let de = (() => {
        class t {
          constructor(t, e, n) {
            (this.delegate = t),
              (this.engine = e),
              (this._zone = n),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (e.onRemovalComplete = (t, e) => {
                e && e.parentNode(t) && e.removeChild(t.parentNode, t);
              });
          }
          createRenderer(t, e) {
            const n = this.delegate.createRenderer(t, e);
            if (!(t && e && e.data && e.data.animation)) {
              let t = this._rendererCache.get(n);
              return (
                t ||
                  ((t = new fe('', n, this.engine)),
                  this._rendererCache.set(n, t)),
                t
              );
            }
            const r = e.id,
              s = e.id + '-' + this._currentId;
            this._currentId++, this.engine.register(s, t);
            const i = (e) => {
              Array.isArray(e)
                ? e.forEach(i)
                : this.engine.registerTrigger(r, s, t, e.name, e);
            };
            return e.data.animation.forEach(i), new pe(this, s, n, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(t, e, n) {
            t >= 0 && t < this._microtaskId
              ? this._zone.run(() => e(n))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((t) => {
                        const [e, n] = t;
                        e(n);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([e, n]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Ub(r.F), r.Ub(Ht), r.Ub(r.z));
          }),
          (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class fe {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.delegate = e),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode
              ? (t) => e.destroyNode(t)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(t, e) {
          return this.delegate.createElement(t, e);
        }
        createComment(t) {
          return this.delegate.createComment(t);
        }
        createText(t) {
          return this.delegate.createText(t);
        }
        appendChild(t, e) {
          this.delegate.appendChild(t, e),
            this.engine.onInsert(this.namespaceId, e, t, !1);
        }
        insertBefore(t, e, n, r = !0) {
          this.delegate.insertBefore(t, e, n),
            this.engine.onInsert(this.namespaceId, e, t, r);
        }
        removeChild(t, e, n) {
          this.engine.onRemove(this.namespaceId, e, this.delegate, n);
        }
        selectRootElement(t, e) {
          return this.delegate.selectRootElement(t, e);
        }
        parentNode(t) {
          return this.delegate.parentNode(t);
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t);
        }
        setAttribute(t, e, n, r) {
          this.delegate.setAttribute(t, e, n, r);
        }
        removeAttribute(t, e, n) {
          this.delegate.removeAttribute(t, e, n);
        }
        addClass(t, e) {
          this.delegate.addClass(t, e);
        }
        removeClass(t, e) {
          this.delegate.removeClass(t, e);
        }
        setStyle(t, e, n, r) {
          this.delegate.setStyle(t, e, n, r);
        }
        removeStyle(t, e, n) {
          this.delegate.removeStyle(t, e, n);
        }
        setProperty(t, e, n) {
          '@' == e.charAt(0) && '@.disabled' == e
            ? this.disableAnimations(t, !!n)
            : this.delegate.setProperty(t, e, n);
        }
        setValue(t, e) {
          this.delegate.setValue(t, e);
        }
        listen(t, e, n) {
          return this.delegate.listen(t, e, n);
        }
        disableAnimations(t, e) {
          this.engine.disableAnimations(t, e);
        }
      }
      class pe extends fe {
        constructor(t, e, n, r) {
          super(e, n, r), (this.factory = t), (this.namespaceId = e);
        }
        setProperty(t, e, n) {
          '@' == e.charAt(0)
            ? '.' == e.charAt(1) && '@.disabled' == e
              ? this.disableAnimations(t, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, t, e.substr(1), n)
            : this.delegate.setProperty(t, e, n);
        }
        listen(t, e, n) {
          if ('@' == e.charAt(0)) {
            const r = (function (t) {
              switch (t) {
                case 'body':
                  return document.body;
                case 'document':
                  return document;
                case 'window':
                  return window;
                default:
                  return t;
              }
            })(t);
            let s = e.substr(1),
              i = '';
            return (
              '@' != s.charAt(0) &&
                ([s, i] = (function (t) {
                  const e = t.indexOf('.');
                  return [t.substring(0, e), t.substr(e + 1)];
                })(s)),
              this.engine.listen(this.namespaceId, r, s, i, (t) => {
                this.factory.scheduleListenerCallback(t._data || -1, n, t);
              })
            );
          }
          return this.delegate.listen(t, e, n);
        }
      }
      let me = (() => {
        class t extends Ht {
          constructor(t, e, n) {
            super(t.body, e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Ub(ae.d), r.Ub(A), r.Ub(mt));
          }),
          (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const ge = new r.q('AnimationModuleType'),
        be = [
          {
            provide: A,
            useFactory: function () {
              return 'function' == typeof oe() ? new ie() : new re();
            }
          },
          { provide: ge, useValue: 'BrowserAnimations' },
          { provide: i.b, useClass: ue },
          {
            provide: mt,
            useFactory: function () {
              return new gt();
            }
          },
          { provide: Ht, useClass: me },
          {
            provide: r.F,
            useFactory: function (t, e, n) {
              return new de(t, e, n);
            },
            deps: [s.d, Ht, r.z]
          }
        ];
      let _e = (() => {
        class t {}
        return (
          (t.ɵmod = r.Ib({ type: t })),
          (t.ɵinj = r.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            providers: be,
            imports: [s.a]
          })),
          t
        );
      })();
    },
    SeVD: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return l;
      });
      var r = n('ngJS'),
        s = n('NJ4a'),
        i = n('Lhse'),
        o = n('kJWO'),
        a = n('I55L'),
        u = n('c2HN'),
        c = n('XoHu');
      const l = (t) => {
        if (t && 'function' == typeof t[o.a])
          return (
            (l = t),
            (t) => {
              const e = l[o.a]();
              if ('function' != typeof e.subscribe)
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              return e.subscribe(t);
            }
          );
        if (Object(a.a)(t)) return Object(r.a)(t);
        if (Object(u.a)(t))
          return (
            (n = t),
            (t) => (
              n
                .then(
                  (e) => {
                    t.closed || (t.next(e), t.complete());
                  },
                  (e) => t.error(e)
                )
                .then(null, s.a),
              t
            )
          );
        if (t && 'function' == typeof t[i.a])
          return (
            (e = t),
            (t) => {
              const n = e[i.a]();
              for (;;) {
                let e;
                try {
                  e = n.next();
                } catch (r) {
                  return t.error(r), t;
                }
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                'function' == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = Object(c.a)(t) ? 'an invalid object' : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var e, n, l;
      };
    },
    SpAZ: function (t, e, n) {
      'use strict';
      function r(t) {
        return t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    VRyK: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('HDdC'),
        s = n('z+Ro'),
        i = n('bHdf'),
        o = n('yCtX');
      function a(...t) {
        let e = Number.POSITIVE_INFINITY,
          n = null,
          a = t[t.length - 1];
        return (
          Object(s.a)(a)
            ? ((n = t.pop()),
              t.length > 1 &&
                'number' == typeof t[t.length - 1] &&
                (e = t.pop()))
            : 'number' == typeof a && (e = t.pop()),
          null === n && 1 === t.length && t[0] instanceof r.a
            ? t[0]
            : Object(i.a)(e)(Object(o.a)(t, n))
        );
      }
    },
    WMd4: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('EY2u'),
        s = n('LRne'),
        i = n('z6cu');
      let o = (() => {
        class t {
          constructor(t, e, n) {
            (this.kind = t),
              (this.value = e),
              (this.error = n),
              (this.hasValue = 'N' === t);
          }
          observe(t) {
            switch (this.kind) {
              case 'N':
                return t.next && t.next(this.value);
              case 'E':
                return t.error && t.error(this.error);
              case 'C':
                return t.complete && t.complete();
            }
          }
          do(t, e, n) {
            switch (this.kind) {
              case 'N':
                return t && t(this.value);
              case 'E':
                return e && e(this.error);
              case 'C':
                return n && n();
            }
          }
          accept(t, e, n) {
            return t && 'function' == typeof t.next
              ? this.observe(t)
              : this.do(t, e, n);
          }
          toObservable() {
            switch (this.kind) {
              case 'N':
                return Object(s.a)(this.value);
              case 'E':
                return Object(i.a)(this.error);
              case 'C':
                return Object(r.b)();
            }
            throw new Error('unexpected notification kind value');
          }
          static createNext(e) {
            return void 0 !== e ? new t('N', e) : t.undefinedValueNotification;
          }
          static createError(e) {
            return new t('E', void 0, e);
          }
          static createComplete() {
            return t.completeNotification;
          }
        }
        return (
          (t.completeNotification = new t('C')),
          (t.undefinedValueNotification = new t('N', void 0)),
          t
        );
      })();
    },
    WPX1: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return l;
      });
      var r = n('tyNb');
      const s = [
          {
            path: 'team-builder',
            links: [
              { route: 'home', name: 'team-builder' },
              { route: 'options', name: 'options' }
            ]
          },
          {
            path: 'options',
            links: [
              { route: 'home', name: 'team-builder' },
              { route: 'options', name: 'options' }
            ]
          },
          {
            path: 'nuzlocke',
            links: [
              { route: 'saves', name: 'saves' },
              { route: 'routes', name: 'routes' },
              { route: 'overview', name: 'overview' }
            ]
          }
        ],
        i = ['routes', 'overview'],
        o = [
          { link: 'team-builder', icon: 'people' },
          { link: 'nuzlocke', icon: 'local_pharmacy' }
        ];
      var a = n('XNiG'),
        u = n('pLZG'),
        c = n('fXoL');
      let l = (() => {
        class t {
          constructor(t) {
            (this.router = t),
              (this.open = !1),
              (this.links = o),
              (this.canChangeTabs = !0),
              (this.tabs = s),
              (this.id = null),
              (this.menuClick = new a.a()),
              (this.route = new a.a()),
              t.events
                .pipe(Object(u.a)((t) => t instanceof r.b))
                .subscribe((t) => {
                  var e;
                  const n =
                    null === (e = t) || void 0 === e
                      ? void 0
                      : e.urlAfterRedirects;
                  if (n) {
                    const t = n.substring(1, n.lastIndexOf('/'));
                    this.route.next(t);
                  }
                });
          }
          get parentRoute() {
            return this.router.url.substring(
              1,
              this.router.url.indexOf('/', 2)
            );
          }
          get menuClick$() {
            return this.menuClick.asObservable();
          }
          get route$() {
            return this.route.asObservable();
          }
          isCurrentRoute(t) {
            return this.router.url.includes('/' + t);
          }
          isExactRoute(t) {
            return this.router.url === t;
          }
          changeTab(t, e) {
            if (i.some((e) => e === t)) {
              if ((e && (this.id = e), this.id)) {
                const e = this.parentRoute + '/' + t + '/' + this.id;
                this.isExactRoute(e) || this.router.navigateByUrl(e);
              }
            } else {
              const e = `${this.parentRoute}/${t}`;
              this.isExactRoute(e) || this.router.navigateByUrl(e);
            }
          }
          clickMenu() {
            (this.open = !this.open), this.menuClick.next(this.open);
          }
          getTabs(t) {
            var e;
            return (
              (t = t.split('/')[0]),
              (null === (e = this.tabs.find((e) => e.path === t)) ||
              void 0 === e
                ? void 0
                : e.links) || []
            );
          }
          isViewMode(t) {
            var e;
            return (
              (null === (e = this.tabs.find((e) => e.path === t)) ||
              void 0 === e
                ? void 0
                : e.links.some((e) =>
                    this.isCurrentRoute(`${t}/${e.route}`)
                  )) || !1
            );
          }
          redirect(t) {
            this.isExactRoute(t) || this.router.navigateByUrl(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c.Ub(r.c));
          }),
          (t.ɵprov = c.Gb({ token: t, factory: t.ɵfac, providedIn: 'root' })),
          t
        );
      })();
    },
    XNiG: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return c;
      }),
        n.d(e, 'a', function () {
          return l;
        });
      var r = n('HDdC'),
        s = n('7o/Q'),
        i = n('quSY'),
        o = n('9ppp'),
        a = n('Ylt2'),
        u = n('2QA8');
      class c extends s.a {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let l = (() => {
        class t extends r.a {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [u.a]() {
            return new c(this);
          }
          lift(t) {
            const e = new h(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new o.a();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let s = 0; s < n; s++) r[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new o.a();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let s = 0; s < n; s++) r[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new o.a();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new o.a();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new o.a();
            return this.hasError
              ? (t.error(this.thrownError), i.a.EMPTY)
              : this.isStopped
              ? (t.complete(), i.a.EMPTY)
              : (this.observers.push(t), new a.a(this, t));
          }
          asObservable() {
            const t = new r.a();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new h(t, e)), t;
      })();
      class h extends l {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : i.a.EMPTY;
        }
      }
    },
    XoHu: function (t, e, n) {
      'use strict';
      function r(t) {
        return null !== t && 'object' == typeof t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    Y7HM: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('DH7j');
      function s(t) {
        return !Object(r.a)(t) && t - parseFloat(t) + 1 >= 0;
      }
    },
    Ylt2: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('quSY');
      class s extends r.a {
        constructor(t, e) {
          super(),
            (this.subject = t),
            (this.subscriber = e),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (
            ((this.subject = null),
            !e || 0 === e.length || t.isStopped || t.closed)
          )
            return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
    },
    bHdf: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('5+tZ'),
        s = n('SpAZ');
      function i(t = Number.POSITIVE_INFINITY) {
        return Object(r.a)(s.a, t);
      }
    },
    bOdf: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('5+tZ');
      function s(t, e) {
        return Object(r.a)(t, e, 1);
      }
    },
    bTqV: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return d;
      }),
        n.d(e, 'b', function () {
          return f;
        });
      var r = n('FKr1'),
        s = n('R1ws'),
        i = n('fXoL'),
        o = n('u47x');
      const a = ['mat-button', ''],
        u = ['*'],
        c = [
          'mat-button',
          'mat-flat-button',
          'mat-icon-button',
          'mat-raised-button',
          'mat-stroked-button',
          'mat-mini-fab',
          'mat-fab'
        ];
      class l {
        constructor(t) {
          this._elementRef = t;
        }
      }
      const h = Object(r.r)(Object(r.t)(Object(r.s)(l)));
      let d = (() => {
          class t extends h {
            constructor(t, e, n) {
              super(t),
                (this._focusMonitor = e),
                (this._animationMode = n),
                (this.isRoundButton = this._hasHostAttributes(
                  'mat-fab',
                  'mat-mini-fab'
                )),
                (this.isIconButton = this._hasHostAttributes(
                  'mat-icon-button'
                ));
              for (const r of c)
                this._hasHostAttributes(r) &&
                  this._getHostElement().classList.add(r);
              t.nativeElement.classList.add('mat-button-base'),
                this.isRoundButton && (this.color = 'accent');
            }
            ngAfterViewInit() {
              this._focusMonitor.monitor(this._elementRef, !0);
            }
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef);
            }
            focus(t = 'program', e) {
              this._focusMonitor.focusVia(this._getHostElement(), t, e);
            }
            _getHostElement() {
              return this._elementRef.nativeElement;
            }
            _isRippleDisabled() {
              return this.disableRipple || this.disabled;
            }
            _hasHostAttributes(...t) {
              return t.some((t) => this._getHostElement().hasAttribute(t));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(i.Kb(i.l), i.Kb(o.e), i.Kb(s.a, 8));
            }),
            (t.ɵcmp = i.Eb({
              type: t,
              selectors: [
                ['button', 'mat-button', ''],
                ['button', 'mat-raised-button', ''],
                ['button', 'mat-icon-button', ''],
                ['button', 'mat-fab', ''],
                ['button', 'mat-mini-fab', ''],
                ['button', 'mat-stroked-button', ''],
                ['button', 'mat-flat-button', '']
              ],
              viewQuery: function (t, e) {
                if ((1 & t && i.Ec(r.m, !0), 2 & t)) {
                  let t;
                  i.nc((t = i.Yb())) && (e.ripple = t.first);
                }
              },
              hostAttrs: [1, 'mat-focus-indicator'],
              hostVars: 5,
              hostBindings: function (t, e) {
                2 & t &&
                  (i.Ab('disabled', e.disabled || null),
                  i.Cb(
                    '_mat-animation-noopable',
                    'NoopAnimations' === e._animationMode
                  )('mat-button-disabled', e.disabled));
              },
              inputs: {
                disabled: 'disabled',
                disableRipple: 'disableRipple',
                color: 'color'
              },
              exportAs: ['matButton'],
              features: [i.wb],
              attrs: a,
              ngContentSelectors: u,
              decls: 4,
              vars: 5,
              consts: [
                [1, 'mat-button-wrapper'],
                [
                  'matRipple',
                  '',
                  1,
                  'mat-button-ripple',
                  3,
                  'matRippleDisabled',
                  'matRippleCentered',
                  'matRippleTrigger'
                ],
                [1, 'mat-button-focus-overlay']
              ],
              template: function (t, e) {
                1 & t &&
                  (i.hc(),
                  i.Qb(0, 'span', 0),
                  i.gc(1),
                  i.Pb(),
                  i.Lb(2, 'span', 1),
                  i.Lb(3, 'span', 2)),
                  2 & t &&
                    (i.zb(2),
                    i.Cb(
                      'mat-button-ripple-round',
                      e.isRoundButton || e.isIconButton
                    ),
                    i.ic('matRippleDisabled', e._isRippleDisabled())(
                      'matRippleCentered',
                      e.isIconButton
                    )('matRippleTrigger', e._getHostElement()));
              },
              directives: [r.m],
              styles: [
                '.mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            t
          );
        })(),
        f = (() => {
          class t {}
          return (
            (t.ɵmod = i.Ib({ type: t })),
            (t.ɵinj = i.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[r.n, r.e], r.e]
            })),
            t
          );
        })();
    },
    c2HN: function (t, e, n) {
      'use strict';
      function r(t) {
        return (
          !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then
        );
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    cH1L: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      }),
        n.d(e, 'b', function () {
          return o;
        });
      var r = n('fXoL'),
        s = n('ofXK');
      const i = new r.q('cdk-dir-doc', {
        providedIn: 'root',
        factory: function () {
          return Object(r.U)(s.d);
        }
      });
      let o = (() => {
          class t {
            constructor(t) {
              if (((this.value = 'ltr'), (this.change = new r.n()), t)) {
                const e = t.documentElement ? t.documentElement.dir : null,
                  n = (t.body ? t.body.dir : null) || e;
                this.value = 'ltr' === n || 'rtl' === n ? n : 'ltr';
              }
            }
            ngOnDestroy() {
              this.change.complete();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Ub(i, 8));
            }),
            (t.ɵprov = Object(r.Gb)({
              factory: function () {
                return new t(Object(r.Ub)(i, 8));
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        a = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              }
            })),
            t
          );
        })();
    },
    cp0P: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var r = n('HDdC'),
        s = n('DH7j'),
        i = n('lJxs'),
        o = n('XoHu'),
        a = n('Cfvw');
      function u(...t) {
        if (1 === t.length) {
          const e = t[0];
          if (Object(s.a)(e)) return c(e, null);
          if (Object(o.a)(e) && Object.getPrototypeOf(e) === Object.prototype) {
            const t = Object.keys(e);
            return c(
              t.map((t) => e[t]),
              t
            );
          }
        }
        if ('function' == typeof t[t.length - 1]) {
          const e = t.pop();
          return c(
            (t = 1 === t.length && Object(s.a)(t[0]) ? t[0] : t),
            null
          ).pipe(Object(i.a)((t) => e(...t)));
        }
        return c(t, null);
      }
      function c(t, e) {
        return new r.a((n) => {
          const r = t.length;
          if (0 === r) return void n.complete();
          const s = new Array(r);
          let i = 0,
            o = 0;
          for (let u = 0; u < r; u++) {
            const c = Object(a.a)(t[u]);
            let l = !1;
            n.add(
              c.subscribe({
                next: (t) => {
                  l || ((l = !0), o++), (s[u] = t);
                },
                error: (t) => n.error(t),
                complete: () => {
                  i++,
                    (i !== r && l) ||
                      (o === r &&
                        n.next(
                          e ? e.reduce((t, e, n) => ((t[e] = s[n]), t), {}) : s
                        ),
                      n.complete());
                }
              })
            );
          }
        });
      }
    },
    eIep: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('lJxs'),
        s = n('Cfvw'),
        i = n('zx2A');
      function o(t, e) {
        return 'function' == typeof e
          ? (n) =>
              n.pipe(
                o((n, i) =>
                  Object(s.a)(t(n, i)).pipe(
                    Object(r.a)((t, r) => e(n, t, i, r))
                  )
                )
              )
          : (e) => e.lift(new a(t));
      }
      class a {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new u(t, this.project));
        }
      }
      class u extends i.b {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e);
        }
        _innerSub(t) {
          const e = this.innerSubscription;
          e && e.unsubscribe();
          const n = new i.a(this),
            r = this.destination;
          r.add(n),
            (this.innerSubscription = Object(i.c)(t, n)),
            this.innerSubscription !== n && r.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
      }
    },
    eNwd: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('3N8a');
      class s extends r.a {
        constructor(t, e) {
          super(t, e), (this.scheduler = t), (this.work = e);
        }
        requestAsyncId(t, e, n = 0) {
          return null !== n && n > 0
            ? super.requestAsyncId(t, e, n)
            : (t.actions.push(this),
              t.scheduled ||
                (t.scheduled = requestAnimationFrame(() => t.flush(null))));
        }
        recycleAsyncId(t, e, n = 0) {
          if ((null !== n && n > 0) || (null === n && this.delay > 0))
            return super.recycleAsyncId(t, e, n);
          0 === t.actions.length &&
            (cancelAnimationFrame(e), (t.scheduled = void 0));
        }
      }
      var i = n('IjjT');
      class o extends i.a {
        flush(t) {
          (this.active = !0), (this.scheduled = void 0);
          const { actions: e } = this;
          let n,
            r = -1,
            s = e.length;
          t = t || e.shift();
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while (++r < s && (t = e.shift()));
          if (((this.active = !1), n)) {
            for (; ++r < s && (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }
      const a = new o(s);
    },
    f0Cb: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      }),
        n.d(e, 'b', function () {
          return a;
        });
      var r = n('8LU1'),
        s = n('FKr1'),
        i = n('fXoL');
      let o = (() => {
          class t {
            constructor() {
              (this._vertical = !1), (this._inset = !1);
            }
            get vertical() {
              return this._vertical;
            }
            set vertical(t) {
              this._vertical = Object(r.b)(t);
            }
            get inset() {
              return this._inset;
            }
            set inset(t) {
              this._inset = Object(r.b)(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = i.Eb({
              type: t,
              selectors: [['mat-divider']],
              hostAttrs: ['role', 'separator', 1, 'mat-divider'],
              hostVars: 7,
              hostBindings: function (t, e) {
                2 & t &&
                  (i.Ab(
                    'aria-orientation',
                    e.vertical ? 'vertical' : 'horizontal'
                  ),
                  i.Cb('mat-divider-vertical', e.vertical)(
                    'mat-divider-horizontal',
                    !e.vertical
                  )('mat-divider-inset', e.inset));
              },
              inputs: { vertical: 'vertical', inset: 'inset' },
              decls: 0,
              vars: 0,
              template: function (t, e) {},
              styles: [
                '.mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            t
          );
        })(),
        a = (() => {
          class t {}
          return (
            (t.ɵmod = i.Ib({ type: t })),
            (t.ɵinj = i.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[s.e], s.e]
            })),
            t
          );
        })();
    },
    fXoL: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return rn;
      }),
        n.d(e, 'b', function () {
          return Gu;
        }),
        n.d(e, 'c', function () {
          return zu;
        }),
        n.d(e, 'd', function () {
          return Bu;
        }),
        n.d(e, 'e', function () {
          return Uu;
        }),
        n.d(e, 'f', function () {
          return Bc;
        }),
        n.d(e, 'g', function () {
          return Tc;
        }),
        n.d(e, 'h', function () {
          return Ta;
        }),
        n.d(e, 'i', function () {
          return sc;
        }),
        n.d(e, 'j', function () {
          return ra;
        }),
        n.d(e, 'k', function () {
          return Zu;
        }),
        n.d(e, 'l', function () {
          return aa;
        }),
        n.d(e, 'm', function () {
          return _r;
        }),
        n.d(e, 'n', function () {
          return gu;
        }),
        n.d(e, 'o', function () {
          return ii;
        }),
        n.d(e, 'p', function () {
          return pn;
        }),
        n.d(e, 'q', function () {
          return nn;
        }),
        n.d(e, 'r', function () {
          return wi;
        }),
        n.d(e, 's', function () {
          return Sa;
        }),
        n.d(e, 't', function () {
          return Da;
        }),
        n.d(e, 'u', function () {
          return Qu;
        }),
        n.d(e, 'v', function () {
          return Ua;
        }),
        n.d(e, 'w', function () {
          return jc;
        }),
        n.d(e, 'x', function () {
          return Ba;
        }),
        n.d(e, 'y', function () {
          return Dc;
        }),
        n.d(e, 'z', function () {
          return ac;
        }),
        n.d(e, 'A', function () {
          return mn;
        }),
        n.d(e, 'B', function () {
          return $u;
        }),
        n.d(e, 'C', function () {
          return Ku;
        }),
        n.d(e, 'D', function () {
          return _u;
        }),
        n.d(e, 'E', function () {
          return ca;
        }),
        n.d(e, 'F', function () {
          return ua;
        }),
        n.d(e, 'G', function () {
          return Er;
        }),
        n.d(e, 'H', function () {
          return ha;
        }),
        n.d(e, 'I', function () {
          return fr;
        }),
        n.d(e, 'J', function () {
          return bn;
        }),
        n.d(e, 'K', function () {
          return Pc;
        }),
        n.d(e, 'L', function () {
          return Na;
        }),
        n.d(e, 'M', function () {
          return pc;
        }),
        n.d(e, 'N', function () {
          return sn;
        }),
        n.d(e, 'O', function () {
          return da;
        }),
        n.d(e, 'P', function () {
          return Ha;
        }),
        n.d(e, 'Q', function () {
          return F;
        }),
        n.d(e, 'R', function () {
          return Ac;
        }),
        n.d(e, 'S', function () {
          return Ec;
        }),
        n.d(e, 'T', function () {
          return f;
        }),
        n.d(e, 'U', function () {
          return An;
        }),
        n.d(e, 'V', function () {
          return Cc;
        }),
        n.d(e, 'W', function () {
          return Mc;
        }),
        n.d(e, 'X', function () {
          return bc;
        }),
        n.d(e, 'Y', function () {
          return Wu;
        }),
        n.d(e, 'Z', function () {
          return ai;
        }),
        n.d(e, 'ab', function () {
          return qo;
        }),
        n.d(e, 'bb', function () {
          return hr;
        }),
        n.d(e, 'cb', function () {
          return Wn;
        }),
        n.d(e, 'db', function () {
          return Ln;
        }),
        n.d(e, 'eb', function () {
          return Vn;
        }),
        n.d(e, 'fb', function () {
          return Hn;
        }),
        n.d(e, 'gb', function () {
          return Un;
        }),
        n.d(e, 'hb', function () {
          return Bn;
        }),
        n.d(e, 'ib', function () {
          return zn;
        }),
        n.d(e, 'jb', function () {
          return Bo;
        }),
        n.d(e, 'kb', function () {
          return Lc;
        }),
        n.d(e, 'lb', function () {
          return Uo;
        }),
        n.d(e, 'mb', function () {
          return zo;
        }),
        n.d(e, 'nb', function () {
          return Mn;
        }),
        n.d(e, 'ob', function () {
          return N;
        }),
        n.d(e, 'pb', function () {
          return Fi;
        }),
        n.d(e, 'qb', function () {
          return Xi;
        }),
        n.d(e, 'rb', function () {
          return Zi;
        }),
        n.d(e, 'sb', function () {
          return Vo;
        }),
        n.d(e, 'tb', function () {
          return Et;
        }),
        n.d(e, 'ub', function () {
          return l;
        }),
        n.d(e, 'vb', function () {
          return Nn;
        }),
        n.d(e, 'wb', function () {
          return Ei;
        }),
        n.d(e, 'xb', function () {
          return bt;
        }),
        n.d(e, 'yb', function () {
          return ta;
        }),
        n.d(e, 'zb', function () {
          return us;
        }),
        n.d(e, 'Ab', function () {
          return Ni;
        }),
        n.d(e, 'Bb', function () {
          return Io;
        }),
        n.d(e, 'Cb', function () {
          return _o;
        }),
        n.d(e, 'Db', function () {
          return ju;
        }),
        n.d(e, 'Eb', function () {
          return G;
        }),
        n.d(e, 'Fb', function () {
          return et;
        }),
        n.d(e, 'Gb', function () {
          return g;
        }),
        n.d(e, 'Hb', function () {
          return b;
        }),
        n.d(e, 'Ib', function () {
          return Y;
        }),
        n.d(e, 'Jb', function () {
          return nt;
        }),
        n.d(e, 'Kb', function () {
          return Bi;
        }),
        n.d(e, 'Lb', function () {
          return Ki;
        }),
        n.d(e, 'Mb', function () {
          return Wi;
        }),
        n.d(e, 'Nb', function () {
          return Gi;
        }),
        n.d(e, 'Ob', function () {
          return $i;
        }),
        n.d(e, 'Pb', function () {
          return qi;
        }),
        n.d(e, 'Qb', function () {
          return Hi;
        }),
        n.d(e, 'Rb', function () {
          return Qi;
        }),
        n.d(e, 'Sb', function () {
          return Je;
        }),
        n.d(e, 'Tb', function () {
          return Ro;
        }),
        n.d(e, 'Ub', function () {
          return Dn;
        }),
        n.d(e, 'Vb', function () {
          return tn;
        }),
        n.d(e, 'Wb', function () {
          return Vu;
        }),
        n.d(e, 'Xb', function () {
          return Yi;
        }),
        n.d(e, 'Yb', function () {
          return Pu;
        }),
        n.d(e, 'Zb', function () {
          return be;
        }),
        n.d(e, 'ac', function () {
          return ge;
        }),
        n.d(e, 'bc', function () {
          return ro;
        }),
        n.d(e, 'cc', function () {
          return lu;
        }),
        n.d(e, 'dc', function () {
          return hu;
        }),
        n.d(e, 'ec', function () {
          return du;
        }),
        n.d(e, 'fc', function () {
          return fu;
        }),
        n.d(e, 'gc', function () {
          return oo;
        }),
        n.d(e, 'hc', function () {
          return io;
        }),
        n.d(e, 'ic', function () {
          return Ui;
        }),
        n.d(e, 'jc', function () {
          return ao;
        }),
        n.d(e, 'kc', function () {
          return su;
        }),
        n.d(e, 'lc', function () {
          return iu;
        }),
        n.d(e, 'mc', function () {
          return ou;
        }),
        n.d(e, 'nc', function () {
          return Ou;
        }),
        n.d(e, 'oc', function () {
          return Vi;
        }),
        n.d(e, 'pc', function () {
          return wr;
        }),
        n.d(e, 'qc', function () {
          return zt;
        }),
        n.d(e, 'rc', function () {
          return pr;
        }),
        n.d(e, 'sc', function () {
          return W;
        }),
        n.d(e, 'tc', function () {
          return J;
        }),
        n.d(e, 'uc', function () {
          return Iu;
        }),
        n.d(e, 'vc', function () {
          return ku;
        }),
        n.d(e, 'wc', function () {
          return bo;
        }),
        n.d(e, 'xc', function () {
          return Ji;
        }),
        n.d(e, 'yc', function () {
          return Po;
        }),
        n.d(e, 'zc', function () {
          return Mi;
        }),
        n.d(e, 'Ac', function () {
          return ko;
        }),
        n.d(e, 'Bc', function () {
          return To;
        }),
        n.d(e, 'Cc', function () {
          return Fo;
        }),
        n.d(e, 'Dc', function () {
          return jo;
        }),
        n.d(e, 'Ec', function () {
          return Tu;
        });
      var r = n('XNiG'),
        s = n('quSY'),
        i = n('HDdC'),
        o = n('VRyK'),
        a = n('w1tV');
      function u(t) {
        for (let e in t) if (t[e] === u) return e;
        throw Error('Could not find renamed property on target object.');
      }
      function c(t, e) {
        for (const n in e)
          e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
      }
      function l(t) {
        if ('string' == typeof t) return t;
        if (Array.isArray(t)) return '[' + t.map(l).join(', ') + ']';
        if (null == t) return '' + t;
        if (t.overriddenName) return '' + t.overriddenName;
        if (t.name) return '' + t.name;
        const e = t.toString();
        if (null == e) return '' + e;
        const n = e.indexOf('\n');
        return -1 === n ? e : e.substring(0, n);
      }
      function h(t, e) {
        return null == t || '' === t
          ? null === e
            ? ''
            : e
          : null == e || '' === e
          ? t
          : t + ' ' + e;
      }
      const d = u({ __forward_ref__: u });
      function f(t) {
        return (
          (t.__forward_ref__ = f),
          (t.toString = function () {
            return l(this());
          }),
          t
        );
      }
      function p(t) {
        return m(t) ? t() : t;
      }
      function m(t) {
        return (
          'function' == typeof t &&
          t.hasOwnProperty(d) &&
          t.__forward_ref__ === f
        );
      }
      function g(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0
        };
      }
      function b(t) {
        return {
          factory: t.factory,
          providers: t.providers || [],
          imports: t.imports || []
        };
      }
      function _(t) {
        return y(t, w) || y(t, E);
      }
      function y(t, e) {
        return t.hasOwnProperty(e) ? t[e] : null;
      }
      function v(t) {
        return t && (t.hasOwnProperty(C) || t.hasOwnProperty(S)) ? t[C] : null;
      }
      const w = u({ ɵprov: u }),
        C = u({ ɵinj: u }),
        E = u({ ngInjectableDef: u }),
        S = u({ ngInjectorDef: u });
      var D = (function (t) {
        return (
          (t[(t.Default = 0)] = 'Default'),
          (t[(t.Host = 1)] = 'Host'),
          (t[(t.Self = 2)] = 'Self'),
          (t[(t.SkipSelf = 4)] = 'SkipSelf'),
          (t[(t.Optional = 8)] = 'Optional'),
          t
        );
      })({});
      let A;
      function x(t) {
        const e = A;
        return (A = t), e;
      }
      function O(t, e, n) {
        const r = _(t);
        if (r && 'root' == r.providedIn)
          return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & D.Optional) return null;
        if (void 0 !== e) return e;
        throw new Error(`Injector: NOT_FOUND [${l(t)}]`);
      }
      function k(t) {
        return { toString: t }.toString();
      }
      var T = (function (t) {
          return (
            (t[(t.OnPush = 0)] = 'OnPush'), (t[(t.Default = 1)] = 'Default'), t
          );
        })({}),
        F = (function (t) {
          return (
            (t[(t.Emulated = 0)] = 'Emulated'),
            (t[(t.None = 2)] = 'None'),
            (t[(t.ShadowDom = 3)] = 'ShadowDom'),
            t
          );
        })({});
      const j = 'undefined' != typeof globalThis && globalThis,
        I = 'undefined' != typeof window && window,
        R =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        P = 'undefined' != typeof global && global,
        N = j || P || I || R,
        L = {},
        M = [],
        V = u({ ɵcmp: u }),
        B = u({ ɵdir: u }),
        U = u({ ɵpipe: u }),
        z = u({ ɵmod: u }),
        H = u({ ɵloc: u }),
        q = u({ ɵfac: u }),
        K = u({ __NG_ELEMENT_ID__: u });
      let $ = 0;
      function G(t) {
        return k(() => {
          const e = {},
            n = {
              type: t.type,
              providersResolver: null,
              decls: t.decls,
              vars: t.vars,
              factory: null,
              template: t.template || null,
              consts: t.consts || null,
              ngContentSelectors: t.ngContentSelectors,
              hostBindings: t.hostBindings || null,
              hostVars: t.hostVars || 0,
              hostAttrs: t.hostAttrs || null,
              contentQueries: t.contentQueries || null,
              declaredInputs: e,
              inputs: null,
              outputs: null,
              exportAs: t.exportAs || null,
              onPush: t.changeDetection === T.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: t.selectors || M,
              viewQuery: t.viewQuery || null,
              features: t.features || null,
              data: t.data || {},
              encapsulation: t.encapsulation || F.Emulated,
              id: 'c',
              styles: t.styles || M,
              _: null,
              setInput: null,
              schemas: t.schemas || null,
              tView: null
            },
            r = t.directives,
            s = t.features,
            i = t.pipes;
          return (
            (n.id += $++),
            (n.inputs = tt(t.inputs, e)),
            (n.outputs = tt(t.outputs)),
            s && s.forEach((t) => t(n)),
            (n.directiveDefs = r
              ? () => ('function' == typeof r ? r() : r).map(Q)
              : null),
            (n.pipeDefs = i
              ? () => ('function' == typeof i ? i() : i).map(Z)
              : null),
            n
          );
        });
      }
      function W(t, e, n) {
        const r = t.ɵcmp;
        (r.directiveDefs = () => e.map(Q)), (r.pipeDefs = () => n.map(Z));
      }
      function Q(t) {
        return (
          rt(t) ||
          (function (t) {
            return t[B] || null;
          })(t)
        );
      }
      function Z(t) {
        return (function (t) {
          return t[U] || null;
        })(t);
      }
      const X = {};
      function Y(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || M,
          declarations: t.declarations || M,
          imports: t.imports || M,
          exports: t.exports || M,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null
        };
        return (
          null != t.id &&
            k(() => {
              X[t.id] = t.type;
            }),
          e
        );
      }
      function J(t, e) {
        return k(() => {
          const n = st(t, !0);
          (n.declarations = e.declarations || M),
            (n.imports = e.imports || M),
            (n.exports = e.exports || M);
        });
      }
      function tt(t, e) {
        if (null == t) return L;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let s = t[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              e && (e[s] = i);
          }
        return n;
      }
      const et = G;
      function nt(t) {
        return {
          type: t.type,
          name: t.name,
          factory: null,
          pure: !1 !== t.pure,
          onDestroy: t.type.prototype.ngOnDestroy || null
        };
      }
      function rt(t) {
        return t[V] || null;
      }
      function st(t, e) {
        const n = t[z] || null;
        if (!n && !0 === e)
          throw new Error(`Type ${l(t)} does not have '\u0275mod' property.`);
        return n;
      }
      function it(t) {
        return Array.isArray(t) && 'object' == typeof t[1];
      }
      function ot(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function at(t) {
        return 0 != (8 & t.flags);
      }
      function ut(t) {
        return 2 == (2 & t.flags);
      }
      function ct(t) {
        return 1 == (1 & t.flags);
      }
      function lt(t) {
        return null !== t.template;
      }
      function ht(t, e) {
        return t.hasOwnProperty(q) ? t[q] : null;
      }
      class dt extends Error {
        constructor(t, e) {
          super(
            (function (t, e) {
              return `${t ? `NG0${t}: ` : ''}${e}`;
            })(t, e)
          ),
            (this.code = t);
        }
      }
      function ft(t) {
        return 'string' == typeof t ? t : null == t ? '' : String(t);
      }
      function pt(t) {
        return 'function' == typeof t
          ? t.name || t.toString()
          : 'object' == typeof t && null != t && 'function' == typeof t.type
          ? t.type.name || t.type.toString()
          : ft(t);
      }
      function mt(t, e) {
        const n = e ? ' in ' + e : '';
        throw new dt('201', `No provider for ${pt(t)} found${n}`);
      }
      class gt {
        constructor(t, e, n) {
          (this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function bt() {
        return _t;
      }
      function _t(t) {
        return t.type.prototype.ngOnChanges && (t.setInput = vt), yt;
      }
      function yt() {
        const t = wt(this),
          e = null == t ? void 0 : t.current;
        if (e) {
          const n = t.previous;
          if (n === L) t.previous = e;
          else for (let t in e) n[t] = e[t];
          (t.current = null), this.ngOnChanges(e);
        }
      }
      function vt(t, e, n, r) {
        const s =
            wt(t) ||
            (function (t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: L, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          u = o[a];
        (i[a] = new gt(u && u.currentValue, e, o === L)), (t[r] = e);
      }
      function wt(t) {
        return t.__ngSimpleChanges__ || null;
      }
      bt.ngInherit = !0;
      let Ct = void 0;
      function Et(t) {
        Ct = t;
      }
      function St(t) {
        return !!t.listen;
      }
      const Dt = {
        createRenderer: (t, e) =>
          void 0 !== Ct
            ? Ct
            : 'undefined' != typeof document
            ? document
            : void 0
      };
      function At(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function xt(t, e) {
        return At(e[t]);
      }
      function Ot(t, e) {
        return At(e[t.index]);
      }
      function kt(t, e) {
        return t.data[e];
      }
      function Tt(t, e) {
        return t[e];
      }
      function Ft(t, e) {
        const n = e[t];
        return it(n) ? n : n[0];
      }
      function jt(t) {
        const e = (function (t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function It(t) {
        return 4 == (4 & t[2]);
      }
      function Rt(t) {
        return 128 == (128 & t[2]);
      }
      function Pt(t, e) {
        return null == e ? null : t[e];
      }
      function Nt(t) {
        t[18] = 0;
      }
      function Lt(t, e) {
        t[5] += e;
        let n = t,
          r = t[3];
        for (
          ;
          null !== r && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5]));

        )
          (r[5] += e), (n = r), (r = r[3]);
      }
      const Mt = {
        lFrame: ce(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1
      };
      function Vt() {
        return Mt.bindingsEnabled;
      }
      function Bt() {
        return Mt.lFrame.lView;
      }
      function Ut() {
        return Mt.lFrame.tView;
      }
      function zt(t) {
        Mt.lFrame.contextLView = t;
      }
      function Ht() {
        let t = qt();
        for (; null !== t && 64 === t.type; ) t = t.parent;
        return t;
      }
      function qt() {
        return Mt.lFrame.currentTNode;
      }
      function Kt(t, e) {
        const n = Mt.lFrame;
        (n.currentTNode = t), (n.isParent = e);
      }
      function $t() {
        return Mt.lFrame.isParent;
      }
      function Gt() {
        Mt.lFrame.isParent = !1;
      }
      function Wt() {
        return Mt.isInCheckNoChangesMode;
      }
      function Qt(t) {
        Mt.isInCheckNoChangesMode = t;
      }
      function Zt() {
        const t = Mt.lFrame;
        let e = t.bindingRootIndex;
        return (
          -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
        );
      }
      function Xt() {
        return Mt.lFrame.bindingIndex;
      }
      function Yt() {
        return Mt.lFrame.bindingIndex++;
      }
      function Jt(t) {
        const e = Mt.lFrame,
          n = e.bindingIndex;
        return (e.bindingIndex = e.bindingIndex + t), n;
      }
      function te(t, e) {
        const n = Mt.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t), ee(e);
      }
      function ee(t) {
        Mt.lFrame.currentDirectiveIndex = t;
      }
      function ne(t) {
        const e = Mt.lFrame.currentDirectiveIndex;
        return -1 === e ? null : t[e];
      }
      function re() {
        return Mt.lFrame.currentQueryIndex;
      }
      function se(t) {
        Mt.lFrame.currentQueryIndex = t;
      }
      function ie(t) {
        const e = t[1];
        return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null;
      }
      function oe(t, e, n) {
        if (n & D.SkipSelf) {
          let r = e,
            s = t;
          for (
            ;
            (r = r.parent),
              !(
                null !== r ||
                n & D.Host ||
                ((r = ie(s)), null === r) ||
                ((s = s[15]), 10 & r.type)
              );

          );
          if (null === r) return !1;
          (e = r), (t = s);
        }
        const r = (Mt.lFrame = ue());
        return (r.currentTNode = e), (r.lView = t), !0;
      }
      function ae(t) {
        const e = ue(),
          n = t[1];
        (Mt.lFrame = e),
          (e.currentTNode = n.firstChild),
          (e.lView = t),
          (e.tView = n),
          (e.contextLView = t),
          (e.bindingIndex = n.bindingStartIndex),
          (e.inI18n = !1);
      }
      function ue() {
        const t = Mt.lFrame,
          e = null === t ? null : t.child;
        return null === e ? ce(t) : e;
      }
      function ce(t) {
        const e = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null,
          inI18n: !1
        };
        return null !== t && (t.child = e), e;
      }
      function le() {
        const t = Mt.lFrame;
        return (
          (Mt.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t
        );
      }
      const he = le;
      function de() {
        const t = le();
        (t.isParent = !0),
          (t.tView = null),
          (t.selectedIndex = -1),
          (t.contextLView = null),
          (t.elementDepthCount = 0),
          (t.currentDirectiveIndex = -1),
          (t.currentNamespace = null),
          (t.bindingRootIndex = -1),
          (t.bindingIndex = -1),
          (t.currentQueryIndex = 0);
      }
      function fe() {
        return Mt.lFrame.selectedIndex;
      }
      function pe(t) {
        Mt.lFrame.selectedIndex = t;
      }
      function me() {
        const t = Mt.lFrame;
        return kt(t.tView, t.selectedIndex);
      }
      function ge() {
        Mt.lFrame.currentNamespace = 'http://www.w3.org/2000/svg';
      }
      function be() {
        Mt.lFrame.currentNamespace = null;
      }
      function _e(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n].type.prototype,
            {
              ngAfterContentInit: r,
              ngAfterContentChecked: s,
              ngAfterViewInit: i,
              ngAfterViewChecked: o,
              ngOnDestroy: a
            } = e;
          r && (t.contentHooks || (t.contentHooks = [])).push(-n, r),
            s &&
              ((t.contentHooks || (t.contentHooks = [])).push(n, s),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, s)),
            i && (t.viewHooks || (t.viewHooks = [])).push(-n, i),
            o &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, o),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)),
            null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a);
        }
      }
      function ye(t, e, n) {
        Ce(t, e, 3, n);
      }
      function ve(t, e, n, r) {
        (3 & t[2]) === n && Ce(t, e, n, r);
      }
      function we(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n));
      }
      function Ce(t, e, n, r) {
        const s = null != r ? r : -1,
          i = e.length - 1;
        let o = 0;
        for (let a = void 0 !== r ? 65535 & t[18] : 0; a < i; a++)
          if ('number' == typeof e[a + 1]) {
            if (((o = e[a]), null != r && o >= r)) break;
          } else
            e[a] < 0 && (t[18] += 65536),
              (o < s || -1 == s) &&
                (Ee(t, n, e, a), (t[18] = (4294901760 & t[18]) + a + 2)),
              a++;
      }
      function Ee(t, e, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = t[s ? -n[r] : n[r]];
        s
          ? t[2] >> 11 < t[18] >> 16 &&
            (3 & t[2]) === e &&
            ((t[2] += 2048), i.call(o))
          : i.call(o);
      }
      class Se {
        constructor(t, e, n) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = e),
            (this.injectImpl = n);
        }
      }
      function De(t, e, n) {
        const r = St(t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ('number' == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              u = n[s++];
            r ? t.setAttribute(e, a, u, o) : e.setAttributeNS(o, a, u);
          } else {
            const o = i,
              a = n[++s];
            xe(o)
              ? r && t.setProperty(e, o, a)
              : r
              ? t.setAttribute(e, o, a)
              : e.setAttribute(o, a),
              s++;
          }
        }
        return s;
      }
      function Ae(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function xe(t) {
        return 64 === t.charCodeAt(0);
      }
      function Oe(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            'number' == typeof s
              ? (n = s)
              : 0 === n ||
                ke(t, n, s, null, -1 === n || 2 === n ? e[++r] : null);
          }
        }
        return t;
      }
      function ke(t, e, n, r, s) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ('number' == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ('number' == typeof e) break;
          if (e === n) {
            if (null === r) return void (null !== s && (t[i + 1] = s));
            if (r === t[i + 1]) return void (t[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== r && t.splice(i++, 0, r),
          null !== s && t.splice(i++, 0, s);
      }
      function Te(t) {
        return -1 !== t;
      }
      function Fe(t) {
        return 32767 & t;
      }
      function je(t, e) {
        let n = t >> 16,
          r = e;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let Ie = !0;
      function Re(t) {
        const e = Ie;
        return (Ie = t), e;
      }
      let Pe = 0;
      function Ne(t, e) {
        const n = Me(t, e);
        if (-1 !== n) return n;
        const r = e[1];
        r.firstCreatePass &&
          ((t.injectorIndex = e.length),
          Le(r.data, t),
          Le(e, null),
          Le(r.blueprint, null));
        const s = Ve(t, e),
          i = t.injectorIndex;
        if (Te(s)) {
          const t = Fe(s),
            n = je(s, e),
            r = n[1].data;
          for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s];
        }
        return (e[i + 8] = s), i;
      }
      function Le(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function Me(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null === e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function Ve(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex;
        let n = 0,
          r = null,
          s = e;
        for (; null !== s; ) {
          const t = s[1],
            e = t.type;
          if (((r = 2 === e ? t.declTNode : 1 === e ? s[6] : null), null === r))
            return -1;
          if ((n++, (s = s[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Be(t, e, n) {
        !(function (t, e, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(K) && (r = n[K]),
            null == r && (r = n[K] = Pe++);
          const s = 255 & r,
            i = 1 << s,
            o = 64 & s,
            a = 32 & s,
            u = e.data;
          128 & s
            ? o
              ? a
                ? (u[t + 7] |= i)
                : (u[t + 6] |= i)
              : a
              ? (u[t + 5] |= i)
              : (u[t + 4] |= i)
            : o
            ? a
              ? (u[t + 3] |= i)
              : (u[t + 2] |= i)
            : a
            ? (u[t + 1] |= i)
            : (u[t] |= i);
        })(t, e, n);
      }
      function Ue(t, e, n) {
        if (n & D.Optional) return t;
        mt(e, 'NodeInjector');
      }
      function ze(t, e, n, r) {
        if (
          (n & D.Optional && void 0 === r && (r = null),
          0 == (n & (D.Self | D.Host)))
        ) {
          const s = t[9],
            i = x(void 0);
          try {
            return s ? s.get(e, r, n & D.Optional) : O(e, r, n & D.Optional);
          } finally {
            x(i);
          }
        }
        return Ue(r, e, n);
      }
      function He(t, e, n, r = D.Default, s) {
        if (null !== t) {
          const i = (function (t) {
            if ('string' == typeof t) return t.charCodeAt(0) || 0;
            const e = t.hasOwnProperty(K) ? t[K] : void 0;
            return 'number' == typeof e ? (e >= 0 ? 255 & e : Ke) : e;
          })(n);
          if ('function' == typeof i) {
            if (!oe(e, t, r)) return r & D.Host ? Ue(s, n, r) : ze(e, n, r, s);
            try {
              const t = i();
              if (null != t || r & D.Optional) return t;
              mt(n);
            } finally {
              he();
            }
          } else if ('number' == typeof i) {
            let s = null,
              o = Me(t, e),
              a = -1,
              u = r & D.Host ? e[16][6] : null;
            for (
              (-1 === o || r & D.SkipSelf) &&
              ((a = -1 === o ? Ve(t, e) : e[o + 8]),
              -1 !== a && Ze(r, !1)
                ? ((s = e[1]), (o = Fe(a)), (e = je(a, e)))
                : (o = -1));
              -1 !== o;

            ) {
              const t = e[1];
              if (Qe(i, o, t.data)) {
                const t = $e(o, e, n, s, r, u);
                if (t !== qe) return t;
              }
              (a = e[o + 8]),
                -1 !== a && Ze(r, e[1].data[o + 8] === u) && Qe(i, o, e)
                  ? ((s = t), (o = Fe(a)), (e = je(a, e)))
                  : (o = -1);
            }
          }
        }
        return ze(e, n, r, s);
      }
      const qe = {};
      function Ke() {
        return new Xe(Ht(), Bt());
      }
      function $e(t, e, n, r, s, i) {
        const o = e[1],
          a = o.data[t + 8],
          u = Ge(
            a,
            o,
            n,
            null == r ? ut(a) && Ie : r != o && 0 != (3 & a.type),
            s & D.Host && i === a
          );
        return null !== u ? We(e, o, u, a) : qe;
      }
      function Ge(t, e, n, r, s) {
        const i = t.providerIndexes,
          o = e.data,
          a = 1048575 & i,
          u = t.directiveStart,
          c = i >> 20,
          l = s ? a + c : t.directiveEnd;
        for (let h = r ? a : a + c; h < l; h++) {
          const t = o[h];
          if ((h < u && n === t) || (h >= u && t.type === n)) return h;
        }
        if (s) {
          const t = o[u];
          if (t && lt(t) && t.type === n) return u;
        }
        return null;
      }
      function We(t, e, n, r) {
        let s = t[n];
        const i = e.data;
        if (s instanceof Se) {
          const o = s;
          o.resolving &&
            (function (t, e) {
              throw new dt(
                '200',
                'Circular dependency in DI detected for ' + t
              );
            })(pt(i[n]));
          const a = Re(o.canSeeViewProviders);
          o.resolving = !0;
          const u = o.injectImpl ? x(o.injectImpl) : null;
          oe(t, r, D.Default);
          try {
            (s = t[n] = o.factory(void 0, i, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function (t, e, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: s,
                    ngDoCheck: i
                  } = e.type.prototype;
                  if (r) {
                    const r = _t(e);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, r);
                  }
                  s &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, i));
                })(n, i[n], e);
          } finally {
            null !== u && x(u), Re(a), (o.resolving = !1), he();
          }
        }
        return s;
      }
      function Qe(t, e, n) {
        const r = 64 & t,
          s = 32 & t;
        let i;
        return (
          (i =
            128 & t
              ? r
                ? s
                  ? n[e + 7]
                  : n[e + 6]
                : s
                ? n[e + 5]
                : n[e + 4]
              : r
              ? s
                ? n[e + 3]
                : n[e + 2]
              : s
              ? n[e + 1]
              : n[e]),
          !!(i & (1 << t))
        );
      }
      function Ze(t, e) {
        return !(t & D.Self || (t & D.Host && e));
      }
      class Xe {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return He(this._tNode, this._lView, t, void 0, e);
        }
      }
      function Ye(t) {
        const e = t;
        if (m(t))
          return () => {
            const t = Ye(p(e));
            return t ? t() : null;
          };
        let n = ht(e);
        if (null === n) {
          const t = v(e);
          n = t && t.factory;
        }
        return n || null;
      }
      function Je(t) {
        return k(() => {
          const e = t.prototype.constructor,
            n = e[q] || Ye(e),
            r = Object.prototype;
          let s = Object.getPrototypeOf(t.prototype).constructor;
          for (; s && s !== r; ) {
            const t = s[q] || Ye(s);
            if (t && t !== n) return t;
            s = Object.getPrototypeOf(s);
          }
          return (t) => new t();
        });
      }
      function tn(t) {
        return (function (t, e) {
          if ('class' === e) return t.classes;
          if ('style' === e) return t.styles;
          const n = t.attrs;
          if (n) {
            const t = n.length;
            let r = 0;
            for (; r < t; ) {
              const s = n[r];
              if (Ae(s)) break;
              if (0 === s) r += 2;
              else if ('number' == typeof s)
                for (r++; r < t && 'string' == typeof n[r]; ) r++;
              else {
                if (s === e) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(Ht(), t);
      }
      function en(t, e, n) {
        return k(() => {
          const r = (function (t) {
            return function (...e) {
              if (t) {
                const n = t(...e);
                for (const t in n) this[t] = n[t];
              }
            };
          })(e);
          function s(...t) {
            if (this instanceof s) return r.apply(this, t), this;
            const e = new s(...t);
            return (n.annotation = e), n;
            function n(t, n, r) {
              const s = t.hasOwnProperty('__parameters__')
                ? t.__parameters__
                : Object.defineProperty(t, '__parameters__', { value: [] })
                    .__parameters__;
              for (; s.length <= r; ) s.push(null);
              return (s[r] = s[r] || []).push(e), t;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = t),
            (s.annotationCls = s),
            s
          );
        });
      }
      class nn {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = g({
                  token: this,
                  providedIn: e.providedIn || 'root',
                  factory: e.factory
                }));
        }
        toString() {
          return 'InjectionToken ' + this._desc;
        }
      }
      const rn = new nn('AnalyzeForEntryComponents'),
        sn = Function;
      function on(t, e) {
        void 0 === e && (e = t);
        for (let n = 0; n < t.length; n++) {
          let r = t[n];
          Array.isArray(r)
            ? (e === t && (e = t.slice(0, n)), on(r, e))
            : e !== t && e.push(r);
        }
        return e;
      }
      function an(t, e) {
        t.forEach((t) => (Array.isArray(t) ? an(t, e) : e(t)));
      }
      function un(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function cn(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      function ln(t, e) {
        const n = [];
        for (let r = 0; r < t; r++) n.push(e);
        return n;
      }
      function hn(t, e, n) {
        let r = fn(t, e);
        return (
          r >= 0
            ? (t[1 | r] = n)
            : ((r = ~r),
              (function (t, e, n, r) {
                let s = t.length;
                if (s == e) t.push(n, r);
                else if (1 === s) t.push(r, t[0]), (t[0] = n);
                else {
                  for (s--, t.push(t[s - 1], t[s]); s > e; )
                    (t[s] = t[s - 2]), s--;
                  (t[e] = n), (t[e + 1] = r);
                }
              })(t, r, e, n)),
          r
        );
      }
      function dn(t, e) {
        const n = fn(t, e);
        if (n >= 0) return t[1 | n];
      }
      function fn(t, e) {
        return (function (t, e, n) {
          let r = 0,
            s = t.length >> 1;
          for (; s !== r; ) {
            const n = r + ((s - r) >> 1),
              i = t[n << 1];
            if (e === i) return n << 1;
            i > e ? (s = n) : (r = n + 1);
          }
          return ~(s << 1);
        })(t, e);
      }
      const pn = en('Inject', (t) => ({ token: t })),
        mn = en('Optional'),
        gn = en('Self'),
        bn = en('SkipSelf'),
        _n = en('Host'),
        yn = {},
        vn = /\n/gm,
        wn = u({ provide: String, useValue: u });
      let Cn = void 0;
      function En(t) {
        const e = Cn;
        return (Cn = t), e;
      }
      function Sn(t, e = D.Default) {
        if (void 0 === Cn)
          throw new Error('inject() must be called from an injection context');
        return null === Cn
          ? O(t, void 0, e)
          : Cn.get(t, e & D.Optional ? null : void 0, e);
      }
      function Dn(t, e = D.Default) {
        return (A || Sn)(p(t), e);
      }
      const An = Dn;
      function xn(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const r = p(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error('Arguments array must have arguments.');
            let t = void 0,
              n = D.Default;
            for (let e = 0; e < r.length; e++) {
              const s = r[e];
              s instanceof mn || 'Optional' === s.ngMetadataName || s === mn
                ? (n |= D.Optional)
                : s instanceof bn || 'SkipSelf' === s.ngMetadataName || s === bn
                ? (n |= D.SkipSelf)
                : s instanceof gn || 'Self' === s.ngMetadataName || s === gn
                ? (n |= D.Self)
                : s instanceof _n || 'Host' === s.ngMetadataName || s === _n
                ? (n |= D.Host)
                : (t = s instanceof pn || s === pn ? s.token : s);
            }
            e.push(Dn(t, n));
          } else e.push(Dn(r));
        }
        return e;
      }
      let On;
      function kn(t) {
        var e;
        return (
          (null ===
            (e = (function () {
              if (void 0 === On && ((On = null), N.trustedTypes))
                try {
                  On = N.trustedTypes.createPolicy('angular', {
                    createHTML: (t) => t,
                    createScript: (t) => t,
                    createScriptURL: (t) => t
                  });
                } catch (e) {}
              return On;
            })()) || void 0 === e
            ? void 0
            : e.createHTML(t)) || t
        );
      }
      class Tn {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return (
            'SafeValue must use [property]=binding: ' +
            this.changingThisBreaksApplicationSecurity +
            ' (see https://g.co/ng/security#xss)'
          );
        }
      }
      class Fn extends Tn {
        getTypeName() {
          return 'HTML';
        }
      }
      class jn extends Tn {
        getTypeName() {
          return 'Style';
        }
      }
      class In extends Tn {
        getTypeName() {
          return 'Script';
        }
      }
      class Rn extends Tn {
        getTypeName() {
          return 'URL';
        }
      }
      class Pn extends Tn {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function Nn(t) {
        return t instanceof Tn ? t.changingThisBreaksApplicationSecurity : t;
      }
      function Ln(t, e) {
        const n = Mn(t);
        if (null != n && n !== e) {
          if ('ResourceURL' === n && 'URL' === e) return !0;
          throw new Error(
            `Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`
          );
        }
        return n === e;
      }
      function Mn(t) {
        return (t instanceof Tn && t.getTypeName()) || null;
      }
      function Vn(t) {
        return new Fn(t);
      }
      function Bn(t) {
        return new jn(t);
      }
      function Un(t) {
        return new In(t);
      }
      function zn(t) {
        return new Rn(t);
      }
      function Hn(t) {
        return new Pn(t);
      }
      class qn {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = '<body><remove></remove>' + t;
          try {
            const e = new window.DOMParser().parseFromString(kn(t), 'text/html')
              .body;
            return null === e
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (e.removeChild(e.firstChild), e);
          } catch (e) {
            return null;
          }
        }
      }
      class Kn {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              'sanitization-inert'
            )),
            null == this.inertDocument.body)
          ) {
            const t = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(t);
            const e = this.inertDocument.createElement('body');
            t.appendChild(e);
          }
        }
        getInertBodyElement(t) {
          const e = this.inertDocument.createElement('template');
          if ('content' in e) return (e.innerHTML = kn(t)), e;
          const n = this.inertDocument.createElement('body');
          return (
            (n.innerHTML = kn(t)),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(n),
            n
          );
        }
        stripCustomNsAttrs(t) {
          const e = t.attributes;
          for (let r = e.length - 1; 0 < r; r--) {
            const n = e.item(r).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) ||
              t.removeAttribute(n);
          }
          let n = t.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling);
        }
      }
      const $n = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        Gn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Wn(t) {
        return (t = String(t)).match($n) || t.match(Gn) ? t : 'unsafe:' + t;
      }
      function Qn(t) {
        const e = {};
        for (const n of t.split(',')) e[n] = !0;
        return e;
      }
      function Zn(...t) {
        const e = {};
        for (const n of t)
          for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
        return e;
      }
      const Xn = Qn('area,br,col,hr,img,wbr'),
        Yn = Qn('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Jn = Qn('rp,rt'),
        tr = Zn(Jn, Yn),
        er = Zn(
          Xn,
          Zn(
            Yn,
            Qn(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          Zn(
            Jn,
            Qn(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          tr
        ),
        nr = Qn('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        rr = Qn('srcset'),
        sr = Zn(
          nr,
          rr,
          Qn(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          Qn(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        ir = Qn('script,style,template');
      class or {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let e = t.firstChild,
            n = !0;
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              n && e.firstChild)
            )
              e = e.firstChild;
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let t = this.checkClobberedElement(e, e.nextSibling);
                if (t) {
                  e = t;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const e = t.nodeName.toLowerCase();
          if (!er.hasOwnProperty(e))
            return (this.sanitizedSomething = !0), !ir.hasOwnProperty(e);
          this.buf.push('<'), this.buf.push(e);
          const n = t.attributes;
          for (let s = 0; s < n.length; s++) {
            const t = n.item(s),
              e = t.name,
              i = e.toLowerCase();
            if (!sr.hasOwnProperty(i)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let o = t.value;
            nr[i] && (o = Wn(o)),
              rr[i] &&
                ((r = o),
                (o = (r = String(r))
                  .split(',')
                  .map((t) => Wn(t.trim()))
                  .join(', '))),
              this.buf.push(' ', e, '="', cr(o), '"');
          }
          var r;
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const e = t.nodeName.toLowerCase();
          er.hasOwnProperty(e) &&
            !Xn.hasOwnProperty(e) &&
            (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(cr(t));
        }
        checkClobberedElement(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              'Failed to sanitize html because the element is clobbered: ' +
                t.outerHTML
            );
          return e;
        }
      }
      const ar = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        ur = /([^\#-~ |!])/g;
      function cr(t) {
        return t
          .replace(/&/g, '&amp;')
          .replace(ar, function (t) {
            return (
              '&#' +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(ur, function (t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let lr;
      function hr(t, e) {
        let n = null;
        try {
          lr =
            lr ||
            (function (t) {
              const e = new Kn(t);
              return (function () {
                try {
                  return !!new window.DOMParser().parseFromString(
                    kn(''),
                    'text/html'
                  );
                } catch (t) {
                  return !1;
                }
              })()
                ? new qn(e)
                : e;
            })(t);
          let r = e ? String(e) : '';
          n = lr.getInertBodyElement(r);
          let s = 5,
            i = r;
          do {
            if (0 === s)
              throw new Error(
                'Failed to sanitize html because the input is unstable'
              );
            s--, (r = i), (i = n.innerHTML), (n = lr.getInertBodyElement(r));
          } while (r !== i);
          return new or().sanitizeChildren(dr(n) || n);
        } finally {
          if (n) {
            const t = dr(n) || n;
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
        }
      }
      function dr(t) {
        return 'content' in t &&
          (function (t) {
            return (
              t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName
            );
          })(t)
          ? t.content
          : null;
      }
      var fr = (function (t) {
        return (
          (t[(t.NONE = 0)] = 'NONE'),
          (t[(t.HTML = 1)] = 'HTML'),
          (t[(t.STYLE = 2)] = 'STYLE'),
          (t[(t.SCRIPT = 3)] = 'SCRIPT'),
          (t[(t.URL = 4)] = 'URL'),
          (t[(t.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
          t
        );
      })({});
      function pr(t) {
        const e = (function () {
          const t = Bt();
          return t && t[12];
        })();
        return e
          ? e.sanitize(fr.URL, t) || ''
          : Ln(t, 'URL')
          ? Nn(t)
          : Wn(ft(t));
      }
      function mr(t) {
        return t.ngDebugContext;
      }
      function gr(t) {
        return t.ngOriginalError;
      }
      function br(t, ...e) {
        t.error(...e);
      }
      class _r {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function (t) {
              return t.ngErrorLogger || br;
            })(t);
          r(this._console, 'ERROR', t),
            e && r(this._console, 'ORIGINAL ERROR', e),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(t) {
          return t ? (mr(t) ? mr(t) : this._findContext(gr(t))) : null;
        }
        _findOriginalError(t) {
          let e = gr(t);
          for (; e && gr(e); ) e = gr(e);
          return e;
        }
      }
      function yr(t, e) {
        t.__ngContext__ = e;
      }
      const vr = (() =>
        (
          ('undefined' != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(N))();
      function wr(t) {
        return { name: 'document', target: t.ownerDocument };
      }
      function Cr(t) {
        return t instanceof Function ? t() : t;
      }
      var Er = (function (t) {
        return (
          (t[(t.Important = 1)] = 'Important'),
          (t[(t.DashCase = 2)] = 'DashCase'),
          t
        );
      })({});
      function Sr(t, e) {
        return (void 0)(t, e);
      }
      function Dr(t) {
        const e = t[3];
        return ot(e) ? e[3] : e;
      }
      function Ar(t) {
        return Or(t[13]);
      }
      function xr(t) {
        return Or(t[4]);
      }
      function Or(t) {
        for (; null !== t && !ot(t); ) t = t[4];
        return t;
      }
      function kr(t, e, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          ot(r) ? (i = r) : it(r) && ((o = !0), (r = r[0]));
          const a = At(r);
          0 === t && null !== n
            ? null == s
              ? Lr(e, n, a)
              : Nr(e, n, a, s || null, !0)
            : 1 === t && null !== n
            ? Nr(e, n, a, s || null, !0)
            : 2 === t
            ? (function (t, e, n) {
                const r = Vr(t, e);
                r &&
                  (function (t, e, n, r) {
                    St(t) ? t.removeChild(e, n, r) : e.removeChild(n);
                  })(t, r, e, n);
              })(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != i &&
              (function (t, e, n, r, s) {
                const i = n[7];
                i !== At(n) && kr(e, t, r, i, s);
                for (let o = 10; o < n.length; o++) {
                  const s = n[o];
                  $r(s[1], s, t, e, r, i);
                }
              })(e, t, i, n, s);
        }
      }
      function Tr(t, e, n) {
        return St(t)
          ? t.createElement(e, n)
          : null === n
          ? t.createElement(e)
          : t.createElementNS(n, e);
      }
      function Fr(t, e) {
        const n = t[9],
          r = n.indexOf(e),
          s = e[3];
        1024 & e[2] && ((e[2] &= -1025), Lt(s, -1)), n.splice(r, 1);
      }
      function jr(t, e) {
        if (t.length <= 10) return;
        const n = 10 + e,
          r = t[n];
        if (r) {
          const i = r[17];
          null !== i && i !== t && Fr(i, r), e > 0 && (t[n - 1][4] = r[4]);
          const o = cn(t, 10 + e);
          $r(r[1], (s = r), s[11], 2, null, null), (s[0] = null), (s[6] = null);
          const a = o[19];
          null !== a && a.detachView(o[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        var s;
        return r;
      }
      function Ir(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          St(n) && n.destroyNode && $r(t, e, n, 3, null, null),
            (function (t) {
              let e = t[13];
              if (!e) return Rr(t[1], t);
              for (; e; ) {
                let n = null;
                if (it(e)) n = e[13];
                else {
                  const t = e[10];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; )
                    it(e) && Rr(e[1], e), (e = e[3]);
                  null === e && (e = t), it(e) && Rr(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function Rr(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]];
                  if (!(t instanceof Se)) {
                    const e = n[r + 1];
                    if (Array.isArray(e))
                      for (let n = 0; n < e.length; n += 2)
                        e[n + 1].call(t[e[n]]);
                    else e.call(t);
                  }
                }
            })(t, e),
            (function (t, e) {
              const n = t.cleanup,
                r = e[7];
              let s = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    const t = n[i + 1],
                      o = 'function' == typeof t ? t(e) : At(e[t]),
                      a = r[(s = n[i + 2])],
                      u = n[i + 3];
                    'boolean' == typeof u
                      ? o.removeEventListener(n[i], a, u)
                      : u >= 0
                      ? r[(s = u)]()
                      : r[(s = -u)].unsubscribe(),
                      (i += 2);
                  } else {
                    const t = r[(s = n[i + 1])];
                    n[i].call(t);
                  }
              if (null !== r) {
                for (let t = s + 1; t < r.length; t++) (0, r[t])();
                e[7] = null;
              }
            })(t, e),
            1 === e[1].type && St(e[11]) && e[11].destroy();
          const n = e[17];
          if (null !== n && ot(e[3])) {
            n !== e[3] && Fr(n, e);
            const r = e[19];
            null !== r && r.detachView(t);
          }
        }
      }
      function Pr(t, e, n) {
        return (function (t, e, n) {
          let r = e;
          for (; null !== r && 40 & r.type; ) r = (e = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const e = t.data[r.directiveStart].encapsulation;
            if (e === F.None || e === F.Emulated) return null;
          }
          return Ot(r, n);
        })(t, e.parent, n);
      }
      function Nr(t, e, n, r, s) {
        St(t) ? t.insertBefore(e, n, r, s) : e.insertBefore(n, r, s);
      }
      function Lr(t, e, n) {
        St(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function Mr(t, e, n, r, s) {
        null !== r ? Nr(t, e, n, r, s) : Lr(t, e, n);
      }
      function Vr(t, e) {
        return St(t) ? t.parentNode(e) : e.parentNode;
      }
      function Br(t, e, n) {
        return Ur(t, e, n);
      }
      let Ur = function (t, e, n) {
        return 40 & t.type ? Ot(t, n) : null;
      };
      function zr(t, e, n, r) {
        const s = Pr(t, r, e),
          i = e[11],
          o = Br(r.parent || e[6], r, e);
        if (null != s)
          if (Array.isArray(n))
            for (let a = 0; a < n.length; a++) Mr(i, s, n[a], o, !1);
          else Mr(i, s, n, o, !1);
      }
      function Hr(t, e) {
        if (null !== e) {
          const n = e.type;
          if (3 & n) return Ot(e, t);
          if (4 & n) return qr(-1, t[e.index]);
          if (8 & n) {
            const n = e.child;
            if (null !== n) return Hr(t, n);
            {
              const n = t[e.index];
              return ot(n) ? qr(-1, n) : At(n);
            }
          }
          if (32 & n) return Sr(e, t)() || At(t[e.index]);
          {
            const n = t[16],
              r = n[6],
              s = Dr(n),
              i = r.projection[e.projection];
            return null != i ? Hr(s, i) : Hr(t, e.next);
          }
        }
        return null;
      }
      function qr(t, e) {
        const n = 10 + t + 1;
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild;
          if (null !== r) return Hr(t, r);
        }
        return e[7];
      }
      function Kr(t, e, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            u = n.type;
          if (
            (o && 0 === e && (a && yr(At(a), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & u) Kr(t, e, n.child, r, s, i, !1), kr(e, t, s, a, i);
            else if (32 & u) {
              const o = Sr(n, r);
              let u;
              for (; (u = o()); ) kr(e, t, s, u, i);
              kr(e, t, s, a, i);
            } else 16 & u ? Gr(t, e, r, n, s, i) : kr(e, t, s, a, i);
          n = o ? n.projectionNext : n.next;
        }
      }
      function $r(t, e, n, r, s, i) {
        Kr(n, r, t.firstChild, e, s, i, !1);
      }
      function Gr(t, e, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a))
          for (let u = 0; u < a.length; u++) kr(e, t, s, a[u], i);
        else Kr(t, e, a, o[3], s, i, !0);
      }
      function Wr(t, e, n) {
        St(t) ? t.setAttribute(e, 'style', n) : (e.style.cssText = n);
      }
      function Qr(t, e, n) {
        St(t)
          ? '' === n
            ? t.removeAttribute(e, 'class')
            : t.setAttribute(e, 'class', n)
          : (e.className = n);
      }
      function Zr(t, e, n) {
        let r = t.length;
        for (;;) {
          const s = t.indexOf(e, n);
          if (-1 === s) return s;
          if (0 === s || t.charCodeAt(s - 1) <= 32) {
            const n = e.length;
            if (s + n === r || t.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      function Xr(t, e, n) {
        let r = 0;
        for (; r < t.length; ) {
          let s = t[r++];
          if (n && 'class' === s) {
            if (((s = t[r]), -1 !== Zr(s.toLowerCase(), e, 0))) return !0;
          } else if (1 === s) {
            for (; r < t.length && 'string' == typeof (s = t[r++]); )
              if (s.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Yr(t) {
        return 4 === t.type && 'ng-template' !== t.value;
      }
      function Jr(t, e, n) {
        return e === (4 !== t.type || n ? t.value : 'ng-template');
      }
      function ts(t, e, n) {
        let r = 4;
        const s = t.attrs || [],
          i = (function (t) {
            for (let e = 0; e < t.length; e++) if (Ae(t[e])) return e;
            return t.length;
          })(s);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const u = e[a];
          if ('number' != typeof u) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ('' !== u && !Jr(t, u, n)) || ('' === u && 1 === e.length))
                ) {
                  if (es(r)) return !1;
                  o = !0;
                }
              } else {
                const c = 8 & r ? u : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!Xr(t.attrs, c, n)) {
                    if (es(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const l = ns(8 & r ? 'class' : u, s, Yr(t), n);
                if (-1 === l) {
                  if (es(r)) return !1;
                  o = !0;
                  continue;
                }
                if ('' !== c) {
                  let t;
                  t = l > i ? '' : s[l + 1].toLowerCase();
                  const e = 8 & r ? t : null;
                  if ((e && -1 !== Zr(e, c, 0)) || (2 & r && c !== t)) {
                    if (es(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !es(r) && !es(u)) return !1;
            if (o && es(u)) continue;
            (o = !1), (r = u | (1 & r));
          }
        }
        return es(r) || o;
      }
      function es(t) {
        return 0 == (1 & t);
      }
      function ns(t, e, n, r) {
        if (null === e) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < e.length; ) {
            const r = e[s];
            if (r === t) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let t = e[++s];
                for (; 'string' == typeof t; ) t = e[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function (t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              const r = t[n];
              if ('number' == typeof r) return -1;
              if (r === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function rs(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if (ts(t, e[r], n)) return !0;
        return !1;
      }
      function ss(t, e) {
        t: for (let n = 0; n < e.length; n++) {
          const r = e[n];
          if (t.length === r.length) {
            for (let e = 0; e < t.length; e++) if (t[e] !== r[e]) continue t;
            return !0;
          }
        }
        return !1;
      }
      function is(t, e) {
        return t ? ':not(' + e.trim() + ')' : e;
      }
      function os(t) {
        let e = t[0],
          n = 1,
          r = 2,
          s = '',
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ('string' == typeof o)
            if (2 & r) {
              const e = t[++n];
              s += '[' + o + (e.length > 0 ? '="' + e + '"' : '') + ']';
            } else 8 & r ? (s += '.' + o) : 4 & r && (s += ' ' + o);
          else
            '' === s || es(o) || ((e += is(i, s)), (s = '')),
              (r = o),
              (i = i || !es(r));
          n++;
        }
        return '' !== s && (e += is(i, s)), e;
      }
      const as = {};
      function us(t) {
        cs(Ut(), Bt(), fe() + t, Wt());
      }
      function cs(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks;
            null !== r && ye(e, r, n);
          } else {
            const r = t.preOrderHooks;
            null !== r && ve(e, r, 0, n);
          }
        pe(n);
      }
      function ls(t, e) {
        return (t << 17) | (e << 2);
      }
      function hs(t) {
        return (t >> 17) & 32767;
      }
      function ds(t) {
        return 2 | t;
      }
      function fs(t) {
        return (131068 & t) >> 2;
      }
      function ps(t, e) {
        return (-131069 & t) | (e << 2);
      }
      function ms(t) {
        return 1 | t;
      }
      function gs(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = t.data[i];
              se(s), n.contentQueries(2, e[i], i);
            }
          }
      }
      function bs(t, e, n, r, s, i, o, a, u, c) {
        const l = e.blueprint.slice();
        return (
          (l[0] = s),
          (l[2] = 140 | r),
          Nt(l),
          (l[3] = l[15] = t),
          (l[8] = n),
          (l[10] = o || (t && t[10])),
          (l[11] = a || (t && t[11])),
          (l[12] = u || (t && t[12]) || null),
          (l[9] = c || (t && t[9]) || null),
          (l[6] = i),
          (l[16] = 2 == e.type ? t[16] : l),
          l
        );
      }
      function _s(t, e, n, r, s) {
        let i = t.data[e];
        if (null === i)
          (i = (function (t, e, n, r, s) {
            const i = qt(),
              o = $t(),
              a = (t.data[e] = (function (t, e, n, r, s, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: e ? e.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: s,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: e,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0
                };
              })(0, o ? i : i && i.parent, n, e, r, s));
            return (
              null === t.firstChild && (t.firstChild = a),
              null !== i &&
                (o
                  ? null == i.child && null !== a.parent && (i.child = a)
                  : null === i.next && (i.next = a)),
              a
            );
          })(t, e, n, r, s)),
            Mt.lFrame.inI18n && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = s);
          const t = (function () {
            const t = Mt.lFrame,
              e = t.currentTNode;
            return t.isParent ? e : e.parent;
          })();
          i.injectorIndex = null === t ? -1 : t.injectorIndex;
        }
        return Kt(i, !0), i;
      }
      function ys(t, e, n, r) {
        if (0 === n) return -1;
        const s = e.length;
        for (let i = 0; i < n; i++)
          e.push(r), t.blueprint.push(r), t.data.push(null);
        return s;
      }
      function vs(t, e, n) {
        ae(e);
        try {
          const r = t.viewQuery;
          null !== r && Zs(1, r, n);
          const s = t.template;
          null !== s && Es(t, e, s, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && gs(t, e),
            t.staticViewQueries && Zs(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) Ks(t, e[n]);
            })(e, i);
        } catch (r) {
          throw (t.firstCreatePass && (t.incompleteFirstPass = !0), r);
        } finally {
          (e[2] &= -5), de();
        }
      }
      function ws(t, e, n, r) {
        const s = e[2];
        if (256 == (256 & s)) return;
        ae(e);
        const i = Wt();
        try {
          Nt(e),
            (Mt.lFrame.bindingIndex = t.bindingStartIndex),
            null !== n && Es(t, e, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && ye(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && ve(e, n, 0, null), we(e, 0);
            }
          if (
            ((function (t) {
              for (let e = Ar(t); null !== e; e = xr(e)) {
                if (!e[2]) continue;
                const t = e[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e],
                    r = n[3];
                  0 == (1024 & n[2]) && Lt(r, 1), (n[2] |= 1024);
                }
              }
            })(e),
            (function (t) {
              for (let e = Ar(t); null !== e; e = xr(e))
                for (let t = 10; t < e.length; t++) {
                  const n = e[t],
                    r = n[1];
                  Rt(n) && ws(r, n, r.template, n[8]);
                }
            })(e),
            null !== t.contentQueries && gs(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && ye(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && ve(e, n, 1), we(e, 1);
            }
          !(function (t, e) {
            const n = t.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let t = 0; t < n.length; t++) {
                  const r = n[t];
                  if (r < 0) pe(~r);
                  else {
                    const s = r,
                      i = n[++t],
                      o = n[++t];
                    te(i, s), o(2, e[s]);
                  }
                }
              } finally {
                pe(-1);
              }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) Hs(t, e[n]);
            })(e, a);
          const u = t.viewQuery;
          if ((null !== u && Zs(2, u, r), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && ye(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && ve(e, n, 2), we(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            i || (e[2] &= -73),
            1024 & e[2] && ((e[2] &= -1025), Lt(e[3], -1));
        } finally {
          de();
        }
      }
      function Cs(t, e, n, r) {
        const s = e[10],
          i = !Wt(),
          o = It(e);
        try {
          i && !o && s.begin && s.begin(), o && vs(t, e, r), ws(t, e, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function Es(t, e, n, r, s) {
        const i = fe();
        try {
          pe(-1), 2 & r && e.length > 20 && cs(t, e, 20, Wt()), n(r, s);
        } finally {
          pe(i);
        }
      }
      function Ss(t, e, n) {
        if (at(e)) {
          const r = e.directiveEnd;
          for (let s = e.directiveStart; s < r; s++) {
            const e = t.data[s];
            e.contentQueries && e.contentQueries(1, n[s], s);
          }
        }
      }
      function Ds(t, e, n) {
        Vt() &&
          ((function (t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || Ne(n, e), yr(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = lt(r);
              i && Vs(e, n, r);
              const u = We(e, t, a, n);
              yr(u, e),
                null !== o && Bs(0, a - s, u, r, 0, o),
                i && (Ft(n.index, e)[8] = u);
            }
          })(t, e, n, Ot(n, e)),
          128 == (128 & n.flags) &&
            (function (t, e, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                i = n.index,
                o = Mt.lFrame.currentDirectiveIndex;
              try {
                pe(i);
                for (let n = r; n < s; n++) {
                  const r = t.data[n],
                    s = e[n];
                  ee(n),
                    (null === r.hostBindings &&
                      0 === r.hostVars &&
                      null === r.hostAttrs) ||
                      Rs(r, s);
                }
              } finally {
                pe(-1), ee(o);
              }
            })(t, e, n));
      }
      function As(t, e, n = Ot) {
        const r = e.localNames;
        if (null !== r) {
          let s = e.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(e, t) : t[o];
            t[s++] = a;
          }
        }
      }
      function xs(t) {
        const e = t.tView;
        return null === e || e.incompleteFirstPass
          ? (t.tView = Os(
              1,
              null,
              t.template,
              t.decls,
              t.vars,
              t.directiveDefs,
              t.pipeDefs,
              t.viewQuery,
              t.schemas,
              t.consts
            ))
          : e;
      }
      function Os(t, e, n, r, s, i, o, a, u, c) {
        const l = 20 + r,
          h = l + s,
          d = (function (t, e) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(r < t ? null : as);
            return n;
          })(l, h),
          f = 'function' == typeof c ? c() : c;
        return (d[1] = {
          type: t,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: e,
          data: d.slice().fill(null, l),
          bindingStartIndex: l,
          expandoStartIndex: h,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof i ? i() : i,
          pipeRegistry: 'function' == typeof o ? o() : o,
          firstChild: null,
          schemas: u,
          consts: f,
          incompleteFirstPass: !1
        });
      }
      function ks(t, e, n, r) {
        const s = Ys(e);
        null === n
          ? s.push(r)
          : (s.push(n), t.firstCreatePass && Js(t).push(r, s.length - 1));
      }
      function Ts(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const s = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(e, s)
              : (n[r] = [e, s]);
          }
        return n;
      }
      function Fs(t, e, n, r, s, i, o, a) {
        const u = Ot(e, n);
        let c,
          l = e.inputs;
        var h;
        !a && null != l && (c = l[r])
          ? (ni(t, n, c, r, s),
            ut(e) &&
              (function (t, e) {
                const n = Ft(e, t);
                16 & n[2] || (n[2] |= 64);
              })(n, e.index))
          : 3 & e.type &&
            ((r =
              'class' === (h = r)
                ? 'className'
                : 'for' === h
                ? 'htmlFor'
                : 'formaction' === h
                ? 'formAction'
                : 'innerHtml' === h
                ? 'innerHTML'
                : 'readonly' === h
                ? 'readOnly'
                : 'tabindex' === h
                ? 'tabIndex'
                : h),
            (s = null != o ? o(s, e.value || '', r) : s),
            St(i)
              ? i.setProperty(u, r, s)
              : xe(r) || (u.setProperty ? u.setProperty(r, s) : (u[r] = s)));
      }
      function js(t, e, n, r) {
        let s = !1;
        if (Vt()) {
          const i = (function (t, e, n) {
              const r = t.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  rs(n, o.selectors, !1) &&
                    (s || (s = []),
                    Be(Ne(n, e), t, o.type),
                    lt(o) ? (Ps(t, n), s.unshift(o)) : s.push(o));
                }
              return s;
            })(t, e, n),
            o = null === r ? null : { '': -1 };
          if (null !== i) {
            (s = !0), Ls(n, t.data.length, i.length);
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.providersResolver && e.providersResolver(e);
            }
            let r = !1,
              a = !1,
              u = ys(t, e, i.length, null);
            for (let s = 0; s < i.length; s++) {
              const c = i[s];
              (n.mergedAttrs = Oe(n.mergedAttrs, c.hostAttrs)),
                Ms(t, n, e, u, c),
                Ns(u, c, o),
                null !== c.contentQueries && (n.flags |= 8),
                (null === c.hostBindings &&
                  null === c.hostAttrs &&
                  0 === c.hostVars) ||
                  (n.flags |= 128);
              const l = c.type.prototype;
              !r &&
                (l.ngOnChanges || l.ngOnInit || l.ngDoCheck) &&
                ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index),
                (r = !0)),
                a ||
                  (!l.ngOnChanges && !l.ngDoCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (a = !0)),
                u++;
            }
            !(function (t, e) {
              const n = e.directiveEnd,
                r = t.data,
                s = e.attrs,
                i = [];
              let o = null,
                a = null;
              for (let u = e.directiveStart; u < n; u++) {
                const t = r[u],
                  n = t.inputs,
                  c = null === s || Yr(e) ? null : Us(n, s);
                i.push(c), (o = Ts(n, u, o)), (a = Ts(t.outputs, u, a));
              }
              null !== o &&
                (o.hasOwnProperty('class') && (e.flags |= 16),
                o.hasOwnProperty('style') && (e.flags |= 32)),
                (e.initialInputs = i),
                (e.inputs = o),
                (e.outputs = a);
            })(t, n);
          }
          o &&
            (function (t, e, n) {
              if (e) {
                const r = (t.localNames = []);
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s)
                    throw new dt(
                      '301',
                      `Export of name '${e[t + 1]}' not found!`
                    );
                  r.push(e[t], s);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = Oe(n.mergedAttrs, n.attrs)), s;
      }
      function Is(t, e, n, r, s, i) {
        const o = i.hostBindings;
        if (o) {
          let n = t.hostBindingOpCodes;
          null === n && (n = t.hostBindingOpCodes = []);
          const i = ~e.index;
          (function (t) {
            let e = t.length;
            for (; e > 0; ) {
              const n = t[--e];
              if ('number' == typeof n && n < 0) return n;
            }
            return 0;
          })(n) != i && n.push(i),
            n.push(r, s, o);
        }
      }
      function Rs(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function Ps(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function Ns(t, e, n) {
        if (n) {
          if (e.exportAs)
            for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          lt(e) && (n[''] = t);
        }
      }
      function Ls(t, e, n) {
        (t.flags |= 1),
          (t.directiveStart = e),
          (t.directiveEnd = e + n),
          (t.providerIndexes = e);
      }
      function Ms(t, e, n, r, s) {
        t.data[r] = s;
        const i = s.factory || (s.factory = ht(s.type)),
          o = new Se(i, lt(s), null);
        (t.blueprint[r] = o),
          (n[r] = o),
          Is(t, e, 0, r, ys(t, n, s.hostVars, as), s);
      }
      function Vs(t, e, n) {
        const r = Ot(e, t),
          s = xs(n),
          i = t[10],
          o = $s(
            t,
            bs(
              t,
              s,
              null,
              n.onPush ? 64 : 16,
              r,
              e,
              i,
              i.createRenderer(r, n),
              null,
              null
            )
          );
        t[e.index] = o;
      }
      function Bs(t, e, n, r, s, i) {
        const o = i[e];
        if (null !== o) {
          const t = r.setInput;
          for (let e = 0; e < o.length; ) {
            const s = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function Us(t, e) {
        let n = null,
          r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if (0 !== s)
            if (5 !== s) {
              if ('number' == typeof s) break;
              t.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, t[s], e[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function zs(t, e, n, r) {
        return new Array(t, !0, !1, e, null, 0, r, n, null, null);
      }
      function Hs(t, e) {
        const n = Ft(e, t);
        if (Rt(n)) {
          const t = n[1];
          80 & n[2] ? ws(t, n, t.template, n[8]) : n[5] > 0 && qs(n);
        }
      }
      function qs(t) {
        for (let n = Ar(t); null !== n; n = xr(n))
          for (let t = 10; t < n.length; t++) {
            const e = n[t];
            if (1024 & e[2]) {
              const t = e[1];
              ws(t, e, t.template, e[8]);
            } else e[5] > 0 && qs(e);
          }
        const e = t[1].components;
        if (null !== e)
          for (let n = 0; n < e.length; n++) {
            const r = Ft(e[n], t);
            Rt(r) && r[5] > 0 && qs(r);
          }
      }
      function Ks(t, e) {
        const n = Ft(e, t),
          r = n[1];
        !(function (t, e) {
          for (let n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n]);
        })(r, n),
          vs(r, n, n[8]);
      }
      function $s(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function Gs(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = Dr(t);
          if (0 != (512 & t[2]) && !e) return t;
          t = e;
        }
        return null;
      }
      function Ws(t, e, n) {
        const r = e[10];
        r.begin && r.begin();
        try {
          ws(t, e, t.template, n);
        } catch (s) {
          throw (ei(e, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function Qs(t) {
        !(function (t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = jt(n),
              s = r[1];
            Cs(s, r, s.template, n);
          }
        })(t[8]);
      }
      function Zs(t, e, n) {
        se(0), e(t, n);
      }
      const Xs = (() => Promise.resolve(null))();
      function Ys(t) {
        return t[7] || (t[7] = []);
      }
      function Js(t) {
        return t.cleanup || (t.cleanup = []);
      }
      function ti(t, e, n) {
        return (
          (null === t || lt(t)) &&
            (n = (function (t) {
              for (; Array.isArray(t); ) {
                if ('object' == typeof t[1]) return t;
                t = t[0];
              }
              return null;
            })(n[e.index])),
          n[11]
        );
      }
      function ei(t, e) {
        const n = t[9],
          r = n ? n.get(_r, null) : null;
        r && r.handleError(e);
      }
      function ni(t, e, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            u = e[o],
            c = t.data[o];
          null !== c.setInput ? c.setInput(u, s, r, a) : (u[a] = s);
        }
      }
      function ri(t, e, n) {
        const r = xt(e, t);
        !(function (t, e, n) {
          St(t) ? t.setValue(e, n) : (e.textContent = n);
        })(t[11], r, n);
      }
      function si(t, e, n) {
        let r = n ? t.styles : null,
          s = n ? t.classes : null,
          i = 0;
        if (null !== e)
          for (let o = 0; o < e.length; o++) {
            const t = e[o];
            'number' == typeof t
              ? (i = t)
              : 1 == i
              ? (s = h(s, t))
              : 2 == i && (r = h(r, t + ': ' + e[++o] + ';'));
          }
        n ? (t.styles = r) : (t.stylesWithoutHost = r),
          n ? (t.classes = s) : (t.classesWithoutHost = s);
      }
      const ii = new nn('INJECTOR', -1);
      class oi {
        get(t, e = yn) {
          if (e === yn) {
            const e = new Error(`NullInjectorError: No provider for ${l(t)}!`);
            throw ((e.name = 'NullInjectorError'), e);
          }
          return e;
        }
      }
      const ai = new nn('Set Injector scope.'),
        ui = {},
        ci = {},
        li = [];
      let hi = void 0;
      function di() {
        return void 0 === hi && (hi = new oi()), hi;
      }
      function fi(t, e = null, n = null, r) {
        return new pi(t, n, e || di(), r);
      }
      class pi {
        constructor(t, e, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && an(e, (n) => this.processProvider(n, t, e)),
            an([t], (t) => this.processInjectorType(t, [], s)),
            this.records.set(ii, bi(void 0, this));
          const i = this.records.get(ai);
          (this.scope = null != i ? i.value : null),
            (this.source = r || ('object' == typeof t ? null : l(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, e = yn, n = D.Default) {
          this.assertNotDestroyed();
          const r = En(this);
          try {
            if (!(n & D.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n =
                  ('function' == typeof (s = t) ||
                    ('object' == typeof s && s instanceof nn)) &&
                  _(t);
                (e = n && this.injectableDefInScope(n) ? bi(mi(t), ui) : null),
                  this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & D.Self ? di() : this.parent).get(
              t,
              (e = n & D.Optional && e === yn ? null : e)
            );
          } catch (i) {
            if ('NullInjectorError' === i.name) {
              if (
                ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(l(t)), r)
              )
                throw i;
              return (function (t, e, n, r) {
                const s = t.ngTempTokenPath;
                throw (
                  (e.__source && s.unshift(e.__source),
                  (t.message = (function (t, e, n, r = null) {
                    t =
                      t && '\n' === t.charAt(0) && '\u0275' == t.charAt(1)
                        ? t.substr(2)
                        : t;
                    let s = l(e);
                    if (Array.isArray(e)) s = e.map(l).join(' -> ');
                    else if ('object' == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n];
                          t.push(
                            n +
                              ':' +
                              ('string' == typeof r ? JSON.stringify(r) : l(r))
                          );
                        }
                      s = `{${t.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${s}]: ${t.replace(
                      vn,
                      '\n  '
                    )}`;
                  })('\n' + t.message, s, n, r)),
                  (t.ngTokenPath = s),
                  (t.ngTempTokenPath = null),
                  t)
                );
              })(i, t, 'R3InjectorError', this.source);
            }
            throw i;
          } finally {
            En(r);
          }
          var s;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((e, n) => t.push(l(n))),
            `R3Injector[${t.join(', ')}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error('Injector has already been destroyed.');
        }
        processInjectorType(t, e, n) {
          if (!(t = p(t))) return !1;
          let r = v(t);
          const s = (null == r && t.ngModule) || void 0,
            i = void 0 === s ? t : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = v(s)), null == r)) return !1;
          if (null != r.imports && !o) {
            let t;
            n.push(i);
            try {
              an(r.imports, (r) => {
                this.processInjectorType(r, e, n) &&
                  (void 0 === t && (t = []), t.push(r));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e];
                an(r, (t) => this.processProvider(t, n, r || li));
              }
          }
          this.injectorDefTypes.add(i), this.records.set(i, bi(r.factory, ui));
          const a = r.providers;
          if (null != a && !o) {
            const e = t;
            an(a, (t) => this.processProvider(t, e, a));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let r = yi((t = p(t))) ? t : p(t && t.provide);
          const s = (function (t, e, n) {
            return _i(t) ? bi(void 0, t.useValue) : bi(gi(t), ui);
          })(t);
          if (yi(t) || !0 !== t.multi) this.records.get(r);
          else {
            let e = this.records.get(r);
            e ||
              ((e = bi(void 0, ui, !0)),
              (e.factory = () => xn(e.multi)),
              this.records.set(r, e)),
              (r = t),
              e.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === ui && ((e.value = ci), (e.value = e.factory())),
            'object' == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              'object' == typeof n &&
              'function' == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ('string' == typeof t.providedIn
              ? 'any' === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          );
        }
      }
      function mi(t) {
        const e = _(t),
          n = null !== e ? e.factory : ht(t);
        if (null !== n) return n;
        const r = v(t);
        if (null !== r) return r.factory;
        if (t instanceof nn)
          throw new Error(`Token ${l(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function (t) {
            const e = t.length;
            if (e > 0) {
              const n = ln(e, '?');
              throw new Error(
                `Can't resolve all parameters for ${l(t)}: (${n.join(', ')}).`
              );
            }
            const n = (function (t) {
              const e = t && (t[w] || t[E]);
              if (e) {
                const n = (function (t) {
                  if (t.hasOwnProperty('name')) return t.name;
                  const e = ('' + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? '' : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error('unreachable');
      }
      function gi(t, e, n) {
        let r = void 0;
        if (yi(t)) {
          const e = p(t);
          return ht(e) || mi(e);
        }
        if (_i(t)) r = () => p(t.useValue);
        else if ((s = t) && s.useFactory)
          r = () => t.useFactory(...xn(t.deps || []));
        else if (
          (function (t) {
            return !(!t || !t.useExisting);
          })(t)
        )
          r = () => Dn(p(t.useExisting));
        else {
          const e = p(t && (t.useClass || t.provide));
          if (
            !(function (t) {
              return !!t.deps;
            })(t)
          )
            return ht(e) || mi(e);
          r = () => new e(...xn(t.deps));
        }
        var s;
        return r;
      }
      function bi(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function _i(t) {
        return null !== t && 'object' == typeof t && wn in t;
      }
      function yi(t) {
        return 'function' == typeof t;
      }
      const vi = function (t, e, n) {
        return (function (t, e = null, n = null, r) {
          const s = fi(t, e, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, e, t, n);
      };
      let wi = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t)
              ? vi(t, e, '')
              : vi(t.providers, t.parent, t.name || '');
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = yn),
          (t.NULL = new oi()),
          (t.ɵprov = g({ token: t, providedIn: 'any', factory: () => Dn(ii) })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      function Ci(t, e) {
        _e(jt(t)[1], Ht());
      }
      function Ei(t) {
        let e = Object.getPrototypeOf(t.type.prototype).constructor,
          n = !0;
        const r = [t];
        for (; e; ) {
          let s = void 0;
          if (lt(t)) s = e.ɵcmp || e.ɵdir;
          else {
            if (e.ɵcmp) throw new Error('Directives cannot inherit Components');
            s = e.ɵdir;
          }
          if (s) {
            if (n) {
              r.push(s);
              const e = t;
              (e.inputs = Si(t.inputs)),
                (e.declaredInputs = Si(t.declaredInputs)),
                (e.outputs = Si(t.outputs));
              const n = s.hostBindings;
              n && xi(t, n);
              const i = s.viewQuery,
                o = s.contentQueries;
              if (
                (i && Di(t, i),
                o && Ai(t, o),
                c(t.inputs, s.inputs),
                c(t.declaredInputs, s.declaredInputs),
                c(t.outputs, s.outputs),
                lt(s) && s.data.animation)
              ) {
                const e = t.data;
                e.animation = (e.animation || []).concat(s.data.animation);
              }
            }
            const e = s.features;
            if (e)
              for (let r = 0; r < e.length; r++) {
                const s = e[r];
                s && s.ngInherit && s(t), s === Ei && (n = !1);
              }
          }
          e = Object.getPrototypeOf(e);
        }
        !(function (t) {
          let e = 0,
            n = null;
          for (let r = t.length - 1; r >= 0; r--) {
            const s = t[r];
            (s.hostVars = e += s.hostVars),
              (s.hostAttrs = Oe(s.hostAttrs, (n = Oe(n, s.hostAttrs))));
          }
        })(r);
      }
      function Si(t) {
        return t === L ? {} : t === M ? [] : t;
      }
      function Di(t, e) {
        const n = t.viewQuery;
        t.viewQuery = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      function Ai(t, e) {
        const n = t.contentQueries;
        t.contentQueries = n
          ? (t, r, s) => {
              e(t, r, s), n(t, r, s);
            }
          : e;
      }
      function xi(t, e) {
        const n = t.hostBindings;
        t.hostBindings = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      let Oi = null;
      function ki() {
        if (!Oi) {
          const t = N.Symbol;
          if (t && t.iterator) Oi = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              'entries' !== n &&
                'size' !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (Oi = n);
            }
          }
        }
        return Oi;
      }
      class Ti {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new Ti(t);
        }
        static unwrap(t) {
          return Ti.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof Ti;
        }
      }
      function Fi(t) {
        return (
          !!ji(t) && (Array.isArray(t) || (!(t instanceof Map) && ki() in t))
        );
      }
      function ji(t) {
        return null !== t && ('function' == typeof t || 'object' == typeof t);
      }
      function Ii(t, e, n) {
        return (t[e] = n);
      }
      function Ri(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function Pi(t, e, n, r) {
        const s = Ri(t, e, n);
        return Ri(t, e + 1, r) || s;
      }
      function Ni(t, e, n, r) {
        const s = Bt();
        return (
          Ri(s, Yt(), e) &&
            (Ut(),
            (function (t, e, n, r, s, i) {
              const o = Ot(t, e);
              !(function (t, e, n, r, s, i, o) {
                if (null == i)
                  St(t) ? t.removeAttribute(e, s, n) : e.removeAttribute(s);
                else {
                  const a = null == o ? ft(i) : o(i, r || '', s);
                  St(t)
                    ? t.setAttribute(e, s, a, n)
                    : n
                    ? e.setAttributeNS(n, s, a)
                    : e.setAttribute(s, a);
                }
              })(e[11], o, i, t.value, n, r, s);
            })(me(), s, t, e, n, r)),
          Ni
        );
      }
      function Li(t, e, n, r) {
        return Ri(t, Yt(), n) ? e + ft(n) + r : as;
      }
      function Mi(t, e, n, r, s, i, o, a) {
        const u = Bt(),
          c = Ut(),
          l = t + 20,
          h = c.firstCreatePass
            ? (function (t, e, n, r, s, i, o, a, u) {
                const c = e.consts,
                  l = _s(e, t, 4, o || null, Pt(c, a));
                js(e, n, l, Pt(c, u)), _e(e, l);
                const h = (l.tViews = Os(
                  2,
                  l,
                  r,
                  s,
                  i,
                  e.directiveRegistry,
                  e.pipeRegistry,
                  null,
                  e.schemas,
                  c
                ));
                return (
                  null !== e.queries &&
                    (e.queries.template(e, l),
                    (h.queries = e.queries.embeddedTView(l))),
                  l
                );
              })(l, c, u, e, n, r, s, i, o)
            : c.data[l];
        Kt(h, !1);
        const d = u[11].createComment('');
        zr(c, u, d, h),
          yr(d, u),
          $s(u, (u[l] = zs(d, u, d, h))),
          ct(h) && Ds(c, u, h),
          null != o && As(u, h, a);
      }
      function Vi(t) {
        return Tt(Mt.lFrame.contextLView, 20 + t);
      }
      function Bi(t, e = D.Default) {
        const n = Bt();
        return null === n ? Dn(t, e) : He(Ht(), n, p(t), e);
      }
      function Ui(t, e, n) {
        const r = Bt();
        return Ri(r, Yt(), e) && Fs(Ut(), me(), r, t, e, r[11], n, !1), Ui;
      }
      function zi(t, e, n, r, s) {
        const i = s ? 'class' : 'style';
        ni(t, n, e.inputs[i], i, r);
      }
      function Hi(t, e, n, r) {
        const s = Bt(),
          i = Ut(),
          o = 20 + t,
          a = s[11],
          u = (s[o] = Tr(a, e, Mt.lFrame.currentNamespace)),
          c = i.firstCreatePass
            ? (function (t, e, n, r, s, i, o) {
                const a = e.consts,
                  u = _s(e, t, 2, s, Pt(a, i));
                return (
                  js(e, n, u, Pt(a, o)),
                  null !== u.attrs && si(u, u.attrs, !1),
                  null !== u.mergedAttrs && si(u, u.mergedAttrs, !0),
                  null !== e.queries && e.queries.elementStart(e, u),
                  u
                );
              })(o, i, s, 0, e, n, r)
            : i.data[o];
        Kt(c, !0);
        const l = c.mergedAttrs;
        null !== l && De(a, u, l);
        const h = c.classes;
        null !== h && Qr(a, u, h);
        const d = c.styles;
        null !== d && Wr(a, u, d),
          64 != (64 & c.flags) && zr(i, s, u, c),
          0 === Mt.lFrame.elementDepthCount && yr(u, s),
          Mt.lFrame.elementDepthCount++,
          ct(c) && (Ds(i, s, c), Ss(i, c, s)),
          null !== r && As(s, c);
      }
      function qi() {
        let t = Ht();
        $t() ? Gt() : ((t = t.parent), Kt(t, !1));
        const e = t;
        Mt.lFrame.elementDepthCount--;
        const n = Ut();
        n.firstCreatePass && (_e(n, t), at(t) && n.queries.elementEnd(t)),
          null != e.classesWithoutHost &&
            (function (t) {
              return 0 != (16 & t.flags);
            })(e) &&
            zi(n, e, Bt(), e.classesWithoutHost, !0),
          null != e.stylesWithoutHost &&
            (function (t) {
              return 0 != (32 & t.flags);
            })(e) &&
            zi(n, e, Bt(), e.stylesWithoutHost, !1);
      }
      function Ki(t, e, n, r) {
        Hi(t, e, n, r), qi();
      }
      function $i(t, e, n) {
        const r = Bt(),
          s = Ut(),
          i = t + 20,
          o = s.firstCreatePass
            ? (function (t, e, n, r, s) {
                const i = e.consts,
                  o = Pt(i, r),
                  a = _s(e, t, 8, 'ng-container', o);
                return (
                  null !== o && si(a, o, !0),
                  js(e, n, a, Pt(i, s)),
                  null !== e.queries && e.queries.elementStart(e, a),
                  a
                );
              })(i, s, r, e, n)
            : s.data[i];
        Kt(o, !0);
        const a = (r[i] = r[11].createComment(''));
        zr(s, r, a, o),
          yr(a, r),
          ct(o) && (Ds(s, r, o), Ss(s, o, r)),
          null != n && As(r, o);
      }
      function Gi() {
        let t = Ht();
        const e = Ut();
        $t() ? Gt() : ((t = t.parent), Kt(t, !1)),
          e.firstCreatePass && (_e(e, t), at(t) && e.queries.elementEnd(t));
      }
      function Wi(t, e, n) {
        $i(t, e, n), Gi();
      }
      function Qi() {
        return Bt();
      }
      function Zi(t) {
        return !!t && 'function' == typeof t.then;
      }
      function Xi(t) {
        return !!t && 'function' == typeof t.subscribe;
      }
      function Yi(t, e, n = !1, r) {
        const s = Bt(),
          i = Ut(),
          o = Ht();
        return to(i, s, s[11], o, t, e, n, r), Yi;
      }
      function Ji(t, e, n = !1, r) {
        const s = Ht(),
          i = Bt(),
          o = Ut();
        return to(o, i, ti(ne(o.data), s, i), s, t, e, n, r), Ji;
      }
      function to(t, e, n, r, s, i, o = !1, a) {
        const u = ct(r),
          c = t.firstCreatePass && Js(t),
          l = Ys(e);
        let h = !0;
        if (3 & r.type) {
          const d = Ot(r, e),
            f = a ? a(d) : L,
            p = f.target || d,
            m = l.length,
            g = a ? (t) => a(At(t[r.index])).target : r.index;
          if (St(n)) {
            let o = null;
            if (
              (!a &&
                u &&
                (o = (function (t, e, n, r) {
                  const s = t.cleanup;
                  if (null != s)
                    for (let i = 0; i < s.length - 1; i += 2) {
                      const t = s[i];
                      if (t === n && s[i + 1] === r) {
                        const t = e[7],
                          n = s[i + 2];
                        return t.length > n ? t[n] : null;
                      }
                      'string' == typeof t && (i += 2);
                    }
                  return null;
                })(t, e, s, r.index)),
              null !== o)
            )
              ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i),
                (o.__ngLastListenerFn__ = i),
                (h = !1);
            else {
              i = no(r, e, i, !1);
              const t = n.listen(f.name || p, s, i);
              l.push(i, t), c && c.push(s, g, m, m + 1);
            }
          } else
            (i = no(r, e, i, !0)),
              p.addEventListener(s, i, o),
              l.push(i),
              c && c.push(s, g, m, o);
        } else i = no(r, e, i, !1);
        const d = r.outputs;
        let f;
        if (h && null !== d && (f = d[s])) {
          const t = f.length;
          if (t)
            for (let n = 0; n < t; n += 2) {
              const t = e[f[n]][f[n + 1]].subscribe(i),
                o = l.length;
              l.push(i, t), c && c.push(s, r.index, o, -(o + 1));
            }
        }
      }
      function eo(t, e, n) {
        try {
          return !1 !== e(n);
        } catch (r) {
          return ei(t, r), !1;
        }
      }
      function no(t, e, n, r) {
        return function s(i) {
          if (i === Function) return n;
          const o = 2 & t.flags ? Ft(t.index, e) : e;
          0 == (32 & e[2]) && Gs(o);
          let a = eo(e, n, i),
            u = s.__ngNextListenerFn__;
          for (; u; ) (a = eo(e, u, i) && a), (u = u.__ngNextListenerFn__);
          return r && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function ro(t = 1) {
        return (function (t) {
          return (Mt.lFrame.contextLView = (function (t, e) {
            for (; t > 0; ) (e = e[15]), t--;
            return e;
          })(t, Mt.lFrame.contextLView))[8];
        })(t);
      }
      function so(t, e) {
        let n = null;
        const r = (function (t) {
          const e = t.attrs;
          if (null != e) {
            const t = e.indexOf(5);
            if (0 == (1 & t)) return e[t + 1];
          }
          return null;
        })(t);
        for (let s = 0; s < e.length; s++) {
          const i = e[s];
          if ('*' !== i) {
            if (null === r ? rs(t, i, !0) : ss(r, i)) return s;
          } else n = s;
        }
        return n;
      }
      function io(t) {
        const e = Bt()[16][6];
        if (!e.projection) {
          const n = (e.projection = ln(t ? t.length : 1, null)),
            r = n.slice();
          let s = e.child;
          for (; null !== s; ) {
            const e = t ? so(s, t) : 0;
            null !== e &&
              (r[e] ? (r[e].projectionNext = s) : (n[e] = s), (r[e] = s)),
              (s = s.next);
          }
        }
      }
      function oo(t, e = 0, n) {
        const r = Bt(),
          s = Ut(),
          i = _s(s, 20 + t, 16, null, n || null);
        null === i.projection && (i.projection = e),
          Gt(),
          64 != (64 & i.flags) &&
            (function (t, e, n) {
              Gr(e[11], 0, e, n, Pr(t, n, e), Br(n.parent || e[6], n, e));
            })(s, r, i);
      }
      function ao(t, e, n) {
        return uo(t, '', e, '', n), ao;
      }
      function uo(t, e, n, r, s) {
        const i = Bt(),
          o = Li(i, e, n, r);
        return o !== as && Fs(Ut(), me(), i, t, o, i[11], s, !1), uo;
      }
      const co = [];
      function lo(t, e, n, r, s) {
        const i = t[n + 1],
          o = null === e;
        let a = r ? hs(i) : fs(i),
          u = !1;
        for (; 0 !== a && (!1 === u || o); ) {
          const n = t[a + 1];
          ho(t[a], e) && ((u = !0), (t[a + 1] = r ? ms(n) : ds(n))),
            (a = r ? hs(n) : fs(n));
        }
        u && (t[n + 1] = r ? ds(i) : ms(i));
      }
      function ho(t, e) {
        return (
          null === t ||
          null == e ||
          (Array.isArray(t) ? t[1] : t) === e ||
          (!(!Array.isArray(t) || 'string' != typeof e) && fn(t, e) >= 0)
        );
      }
      const fo = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function po(t) {
        return t.substring(fo.key, fo.keyEnd);
      }
      function mo(t, e) {
        const n = fo.textEnd;
        return n === e
          ? -1
          : ((e = fo.keyEnd = (function (t, e, n) {
              for (; e < n && t.charCodeAt(e) > 32; ) e++;
              return e;
            })(t, (fo.key = e), n)),
            go(t, e, n));
      }
      function go(t, e, n) {
        for (; e < n && t.charCodeAt(e) <= 32; ) e++;
        return e;
      }
      function bo(t, e, n) {
        return vo(t, e, n, !1), bo;
      }
      function _o(t, e) {
        return vo(t, e, null, !0), _o;
      }
      function yo(t, e) {
        for (
          let n = (function (t) {
            return (
              (function (t) {
                (fo.key = 0),
                  (fo.keyEnd = 0),
                  (fo.value = 0),
                  (fo.valueEnd = 0),
                  (fo.textEnd = t.length);
              })(t),
              mo(t, go(t, 0, fo.textEnd))
            );
          })(e);
          n >= 0;
          n = mo(e, n)
        )
          hn(t, po(e), !0);
      }
      function vo(t, e, n, r) {
        const s = Bt(),
          i = Ut(),
          o = Jt(2);
        i.firstUpdatePass && Co(i, t, o, r),
          e !== as &&
            Ri(s, o, e) &&
            Do(
              i,
              i.data[fe()],
              s,
              s[11],
              t,
              (s[o + 1] = (function (t, e) {
                return (
                  null == t ||
                    ('string' == typeof e
                      ? (t += e)
                      : 'object' == typeof t && (t = l(Nn(t)))),
                  t
                );
              })(e, n)),
              r,
              o
            );
      }
      function wo(t, e) {
        return e >= t.expandoStartIndex;
      }
      function Co(t, e, n, r) {
        const s = t.data;
        if (null === s[n + 1]) {
          const i = s[fe()],
            o = wo(t, n);
          Oo(i, r) && null === e && !o && (e = !1),
            (e = (function (t, e, n, r) {
              const s = ne(t);
              let i = r ? e.residualClasses : e.residualStyles;
              if (null === s)
                0 === (r ? e.classBindings : e.styleBindings) &&
                  ((n = So((n = Eo(null, t, e, n, r)), e.attrs, r)),
                  (i = null));
              else {
                const o = e.directiveStylingLast;
                if (-1 === o || t[o] !== s)
                  if (((n = Eo(s, t, e, n, r)), null === i)) {
                    let n = (function (t, e, n) {
                      const r = n ? e.classBindings : e.styleBindings;
                      if (0 !== fs(r)) return t[hs(r)];
                    })(t, e, r);
                    void 0 !== n &&
                      Array.isArray(n) &&
                      ((n = Eo(null, t, e, n[1], r)),
                      (n = So(n, e.attrs, r)),
                      (function (t, e, n, r) {
                        t[hs(n ? e.classBindings : e.styleBindings)] = r;
                      })(t, e, r, n));
                  } else
                    i = (function (t, e, n) {
                      let r = void 0;
                      const s = e.directiveEnd;
                      for (let i = 1 + e.directiveStylingLast; i < s; i++)
                        r = So(r, t[i].hostAttrs, n);
                      return So(r, e.attrs, n);
                    })(t, e, r);
              }
              return (
                void 0 !== i &&
                  (r ? (e.residualClasses = i) : (e.residualStyles = i)),
                n
              );
            })(s, i, e, r)),
            (function (t, e, n, r, s, i) {
              let o = i ? e.classBindings : e.styleBindings,
                a = hs(o),
                u = fs(o);
              t[r] = n;
              let c,
                l = !1;
              if (Array.isArray(n)) {
                const t = n;
                (c = t[1]), (null === c || fn(t, c) > 0) && (l = !0);
              } else c = n;
              if (s)
                if (0 !== u) {
                  const e = hs(t[a + 1]);
                  (t[r + 1] = ls(e, a)),
                    0 !== e && (t[e + 1] = ps(t[e + 1], r)),
                    (t[a + 1] = (131071 & t[a + 1]) | (r << 17));
                } else
                  (t[r + 1] = ls(a, 0)),
                    0 !== a && (t[a + 1] = ps(t[a + 1], r)),
                    (a = r);
              else
                (t[r + 1] = ls(u, 0)),
                  0 === a ? (a = r) : (t[u + 1] = ps(t[u + 1], r)),
                  (u = r);
              l && (t[r + 1] = ds(t[r + 1])),
                lo(t, c, r, !0),
                lo(t, c, r, !1),
                (function (t, e, n, r, s) {
                  const i = s ? t.residualClasses : t.residualStyles;
                  null != i &&
                    'string' == typeof e &&
                    fn(i, e) >= 0 &&
                    (n[r + 1] = ms(n[r + 1]));
                })(e, c, t, r, i),
                (o = ls(a, u)),
                i ? (e.classBindings = o) : (e.styleBindings = o);
            })(s, i, e, n, o, r);
        }
      }
      function Eo(t, e, n, r, s) {
        let i = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < o && ((i = e[a]), (r = So(r, i.hostAttrs, s)), i !== t);

        )
          a++;
        return null !== t && (n.directiveStylingLast = a), r;
      }
      function So(t, e, n) {
        const r = n ? 1 : 2;
        let s = -1;
        if (null !== e)
          for (let i = 0; i < e.length; i++) {
            const o = e[i];
            'number' == typeof o
              ? (s = o)
              : s === r &&
                (Array.isArray(t) || (t = void 0 === t ? [] : ['', t]),
                hn(t, o, !!n || e[++i]));
          }
        return void 0 === t ? null : t;
      }
      function Do(t, e, n, r, s, i, o, a) {
        if (!(3 & e.type)) return;
        const u = t.data,
          c = u[a + 1];
        xo(1 == (1 & c) ? Ao(u, e, n, s, fs(c), o) : void 0) ||
          (xo(i) || (2 == (2 & c) && (i = Ao(u, null, n, s, a, o))),
          (function (t, e, n, r, s) {
            const i = St(t);
            if (e)
              s
                ? i
                  ? t.addClass(n, r)
                  : n.classList.add(r)
                : i
                ? t.removeClass(n, r)
                : n.classList.remove(r);
            else {
              let e = -1 === r.indexOf('-') ? void 0 : Er.DashCase;
              if (null == s)
                i ? t.removeStyle(n, r, e) : n.style.removeProperty(r);
              else {
                const o = 'string' == typeof s && s.endsWith('!important');
                o && ((s = s.slice(0, -10)), (e |= Er.Important)),
                  i
                    ? t.setStyle(n, r, s, e)
                    : n.style.setProperty(r, s, o ? 'important' : '');
              }
            }
          })(r, o, xt(fe(), n), s, i));
      }
      function Ao(t, e, n, r, s, i) {
        const o = null === e;
        let a = void 0;
        for (; s > 0; ) {
          const e = t[s],
            i = Array.isArray(e),
            u = i ? e[1] : e,
            c = null === u;
          let l = n[s + 1];
          l === as && (l = c ? co : void 0);
          let h = c ? dn(l, r) : u === r ? l : void 0;
          if ((i && !xo(h) && (h = dn(e, r)), xo(h) && ((a = h), o))) return a;
          const d = t[s + 1];
          s = o ? hs(d) : fs(d);
        }
        if (null !== e) {
          let t = i ? e.residualClasses : e.residualStyles;
          null != t && (a = dn(t, r));
        }
        return a;
      }
      function xo(t) {
        return void 0 !== t;
      }
      function Oo(t, e) {
        return 0 != (t.flags & (e ? 16 : 32));
      }
      function ko(t, e = '') {
        const n = Bt(),
          r = Ut(),
          s = t + 20,
          i = r.firstCreatePass ? _s(r, s, 1, e, null) : r.data[s],
          o = (n[s] = (function (t, e) {
            return St(t) ? t.createText(e) : t.createTextNode(e);
          })(n[11], e));
        zr(r, n, o, i), Kt(i, !1);
      }
      function To(t) {
        return Fo('', t, ''), To;
      }
      function Fo(t, e, n) {
        const r = Bt(),
          s = Li(r, t, e, n);
        return s !== as && ri(r, fe(), s), Fo;
      }
      function jo(t, e, n, r, s) {
        const i = Bt(),
          o = (function (t, e, n, r, s, i) {
            const o = Pi(t, Xt(), n, s);
            return Jt(2), o ? e + ft(n) + r + ft(s) + i : as;
          })(i, t, e, n, r, s);
        return o !== as && ri(i, fe(), o), jo;
      }
      function Io(t, e, n) {
        !(function (t, e, n, r) {
          const s = Ut(),
            i = Jt(2);
          s.firstUpdatePass && Co(s, null, i, true);
          const o = Bt();
          if (n !== as && Ri(o, i, n)) {
            const r = s.data[fe()];
            if (Oo(r, true) && !wo(s, i)) {
              let t = r.classesWithoutHost;
              null !== t && (n = h(t, n || '')), zi(s, r, o, n, true);
            } else
              !(function (t, e, n, r, s, i, o, a) {
                s === as && (s = co);
                let u = 0,
                  c = 0,
                  l = 0 < s.length ? s[0] : null,
                  h = 0 < i.length ? i[0] : null;
                for (; null !== l || null !== h; ) {
                  const o = u < s.length ? s[u + 1] : void 0,
                    d = c < i.length ? i[c + 1] : void 0;
                  let f = null,
                    p = void 0;
                  l === h
                    ? ((u += 2), (c += 2), o !== d && ((f = h), (p = d)))
                    : null === h || (null !== l && l < h)
                    ? ((u += 2), (f = l))
                    : ((c += 2), (f = h), (p = d)),
                    null !== f && Do(t, e, n, r, f, p, true, a),
                    (l = u < s.length ? s[u] : null),
                    (h = c < i.length ? i[c] : null);
                }
              })(
                s,
                r,
                o,
                o[11],
                o[i + 1],
                (o[i + 1] = (function (t, e, n) {
                  if (null == n || '' === n) return co;
                  const r = [],
                    s = Nn(n);
                  if (Array.isArray(s))
                    for (let i = 0; i < s.length; i++) t(r, s[i], !0);
                  else if ('object' == typeof s)
                    for (const i in s) s.hasOwnProperty(i) && t(r, i, s[i]);
                  else 'string' == typeof s && e(r, s);
                  return r;
                })(t, e, n)),
                0,
                i
              );
          }
        })(hn, yo, Li(Bt(), t, e, n));
      }
      function Ro(t, e, n) {
        const r = Bt();
        return Ri(r, Yt(), e) && Fs(Ut(), me(), r, t, e, r[11], n, !0), Ro;
      }
      function Po(t, e, n) {
        const r = Bt();
        if (Ri(r, Yt(), e)) {
          const s = Ut(),
            i = me();
          Fs(s, i, r, t, e, ti(ne(s.data), i, r), n, !0);
        }
        return Po;
      }
      const No = void 0;
      var Lo = [
        'en',
        [['a', 'p'], ['AM', 'PM'], No],
        [['AM', 'PM'], No, No],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        No,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        ],
        No,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini']
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', No, "{1} 'at' {0}", No],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xd7',
          '\u2030',
          '\u221e',
          'NaN',
          ':'
        ],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === e && 0 === n ? 1 : 5;
        }
      ];
      let Mo = {};
      function Vo(t, e, n) {
        'string' != typeof e && ((n = e), (e = t[qo.LocaleId])),
          (e = e.toLowerCase().replace(/_/g, '-')),
          (Mo[e] = t),
          n && (Mo[e][qo.ExtraData] = n);
      }
      function Bo(t) {
        const e = (function (t) {
          return t.toLowerCase().replace(/_/g, '-');
        })(t);
        let n = Ho(e);
        if (n) return n;
        const r = e.split('-')[0];
        if (((n = Ho(r)), n)) return n;
        if ('en' === r) return Lo;
        throw new Error(`Missing locale data for the locale "${t}".`);
      }
      function Uo(t) {
        return Bo(t)[qo.CurrencyCode] || null;
      }
      function zo(t) {
        return Bo(t)[qo.PluralCase];
      }
      function Ho(t) {
        return (
          t in Mo ||
            (Mo[t] =
              N.ng &&
              N.ng.common &&
              N.ng.common.locales &&
              N.ng.common.locales[t]),
          Mo[t]
        );
      }
      var qo = (function (t) {
        return (
          (t[(t.LocaleId = 0)] = 'LocaleId'),
          (t[(t.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
          (t[(t.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
          (t[(t.DaysFormat = 3)] = 'DaysFormat'),
          (t[(t.DaysStandalone = 4)] = 'DaysStandalone'),
          (t[(t.MonthsFormat = 5)] = 'MonthsFormat'),
          (t[(t.MonthsStandalone = 6)] = 'MonthsStandalone'),
          (t[(t.Eras = 7)] = 'Eras'),
          (t[(t.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
          (t[(t.WeekendRange = 9)] = 'WeekendRange'),
          (t[(t.DateFormat = 10)] = 'DateFormat'),
          (t[(t.TimeFormat = 11)] = 'TimeFormat'),
          (t[(t.DateTimeFormat = 12)] = 'DateTimeFormat'),
          (t[(t.NumberSymbols = 13)] = 'NumberSymbols'),
          (t[(t.NumberFormats = 14)] = 'NumberFormats'),
          (t[(t.CurrencyCode = 15)] = 'CurrencyCode'),
          (t[(t.CurrencySymbol = 16)] = 'CurrencySymbol'),
          (t[(t.CurrencyName = 17)] = 'CurrencyName'),
          (t[(t.Currencies = 18)] = 'Currencies'),
          (t[(t.Directionality = 19)] = 'Directionality'),
          (t[(t.PluralCase = 20)] = 'PluralCase'),
          (t[(t.ExtraData = 21)] = 'ExtraData'),
          t
        );
      })({});
      let Ko = 'en-US';
      function $o(t) {
        var e, n;
        (n = 'Expected localeId to be defined'),
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error(
                'ASSERTION ERROR: ' + t + ` [Expected=> null != ${e} <=Actual]`
              );
            })(n, e),
          'string' == typeof t && (Ko = t.toLowerCase().replace(/_/g, '-'));
      }
      function Go(t, e, n, r, s) {
        if (((t = p(t)), Array.isArray(t)))
          for (let i = 0; i < t.length; i++) Go(t[i], e, n, r, s);
        else {
          const i = Ut(),
            o = Bt();
          let a = yi(t) ? t : p(t.provide),
            u = gi(t);
          const c = Ht(),
            l = 1048575 & c.providerIndexes,
            h = c.directiveStart,
            d = c.providerIndexes >> 20;
          if (yi(t) || !t.multi) {
            const r = new Se(u, s, Bi),
              f = Zo(a, e, s ? l : l + d, h);
            -1 === f
              ? (Be(Ne(c, o), i, a),
                Wo(i, t, e.length),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                s && (c.providerIndexes += 1048576),
                n.push(r),
                o.push(r))
              : ((n[f] = r), (o[f] = r));
          } else {
            const f = Zo(a, e, l + d, h),
              p = Zo(a, e, l, l + d),
              m = f >= 0 && n[f],
              g = p >= 0 && n[p];
            if ((s && !g) || (!s && !m)) {
              Be(Ne(c, o), i, a);
              const l = (function (t, e, n, r, s) {
                const i = new Se(t, n, Bi);
                return (
                  (i.multi = []),
                  (i.index = e),
                  (i.componentProviders = 0),
                  Qo(i, s, r && !n),
                  i
                );
              })(s ? Yo : Xo, n.length, s, r, u);
              !s && g && (n[p].providerFactory = l),
                Wo(i, t, e.length, 0),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                s && (c.providerIndexes += 1048576),
                n.push(l),
                o.push(l);
            } else Wo(i, t, f > -1 ? f : p, Qo(n[s ? p : f], u, !s && r));
            !s && r && g && n[p].componentProviders++;
          }
        }
      }
      function Wo(t, e, n, r) {
        const s = yi(e);
        if (s || e.useClass) {
          const i = (e.useClass || e).prototype.ngOnDestroy;
          if (i) {
            const o = t.destroyHooks || (t.destroyHooks = []);
            if (!s && e.multi) {
              const t = o.indexOf(n);
              -1 === t ? o.push(n, [r, i]) : o[t + 1].push(r, i);
            } else o.push(n, i);
          }
        }
      }
      function Qo(t, e, n) {
        return n && t.componentProviders++, t.multi.push(e) - 1;
      }
      function Zo(t, e, n, r) {
        for (let s = n; s < r; s++) if (e[s] === t) return s;
        return -1;
      }
      function Xo(t, e, n, r) {
        return Jo(this.multi, []);
      }
      function Yo(t, e, n, r) {
        const s = this.multi;
        let i;
        if (this.providerFactory) {
          const t = this.providerFactory.componentProviders,
            e = We(n, n[1], this.providerFactory.index, r);
          (i = e.slice(0, t)), Jo(s, i);
          for (let n = t; n < e.length; n++) i.push(e[n]);
        } else (i = []), Jo(s, i);
        return i;
      }
      function Jo(t, e) {
        for (let n = 0; n < t.length; n++) e.push((0, t[n])());
        return e;
      }
      function ta(t, e = []) {
        return (n) => {
          n.providersResolver = (n, r) =>
            (function (t, e, n) {
              const r = Ut();
              if (r.firstCreatePass) {
                const s = lt(t);
                Go(n, r.data, r.blueprint, s, !0),
                  Go(e, r.data, r.blueprint, s, !1);
              }
            })(n, r ? r(t) : t, e);
        };
      }
      class ea {}
      class na {
        resolveComponentFactory(t) {
          throw (function (t) {
            const e = Error(
              `No component factory found for ${l(
                t
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let ra = (() => {
        class t {}
        return (t.NULL = new na()), t;
      })();
      function sa(...t) {}
      function ia(t, e) {
        return new aa(Ot(t, e));
      }
      const oa = function () {
        return ia(Ht(), Bt());
      };
      let aa = (() => {
        class t {
          constructor(t) {
            this.nativeElement = t;
          }
        }
        return (t.__NG_ELEMENT_ID__ = oa), t;
      })();
      class ua {}
      let ca = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => la()), t;
      })();
      const la = function () {
        const t = Bt(),
          e = Ft(Ht().index, t);
        return (function (t) {
          return t[11];
        })(it(e) ? e : t);
      };
      let ha = (() => {
        class t {}
        return (
          (t.ɵprov = g({ token: t, providedIn: 'root', factory: () => null })),
          t
        );
      })();
      class da {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const fa = new da('11.0.9');
      class pa {
        constructor() {}
        supports(t) {
          return Fi(t);
        }
        create(t) {
          return new ga(t);
        }
      }
      const ma = (t, e) => e;
      class ga {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || ma);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < va(n, r, s)) ? e : n,
              o = va(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const t = o - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  e <= i && i < t && (s[n] = r + 1);
                }
                s[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !Fi(t)))
            throw new Error(
              `Error trying to diff '${l(
                t
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== s && Object.is(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, e)),
                    Object.is(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, e)), (i = !0)),
                (s = s._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[ki()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, (t) => {
                (r = this._trackByFn(e, t)),
                  null !== s && Object.is(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, t, r, e)),
                      Object.is(s.item, t) || this._addIdentityChange(s, t))
                    : ((s = this._mismatch(s, t, r, e)), (i = !0)),
                  (s = s._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(s), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, r))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, s, r))
              : null !==
                (t =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, s, r))
              : (t = this._addAfter(new ba(e, n), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new ya()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return (
            null === e ? (this._itHead = n) : (e._next = n),
            null === n ? (this._itTail = e) : (n._prev = e),
            t
          );
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new ya()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class ba {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class _a {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if (
              (null === e || e <= n.currentIndex) &&
              Object.is(n.trackById, t)
            )
              return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class ya {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new _a()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function va(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + e + s;
      }
      class wa {
        constructor() {}
        supports(t) {
          return t instanceof Map || ji(t);
        }
        create() {
          return new Ca();
        }
      }
      class Ca {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || ji(t)))
              throw new Error(
                `Error trying to diff '${l(
                  t
                )}'. Only maps and objects are allowed`
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n)
                this._maybeAddToChanges(e, t),
                  (this._appendAfter = e),
                  (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new Ea(t);
          return (
            this._records.set(t, n),
            (n.currentValue = e),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Object.is(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class Ea {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let Sa = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (null != n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      'Cannot extend IterableDiffers without a parent injector'
                    );
                  return t.create(e, n);
                },
                deps: [[t, new bn(), new mn()]]
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (null != e) return e;
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${
                  ((n = t), n.name || typeof n)
                }'`
              );
              var n;
            }
          }
          return (
            (t.ɵprov = g({
              token: t,
              providedIn: 'root',
              factory: () => new t([new pa()])
            })),
            t
          );
        })(),
        Da = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      'Cannot extend KeyValueDiffers without a parent injector'
                    );
                  return t.create(e, n);
                },
                deps: [[t, new bn(), new mn()]]
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${t}'`);
            }
          }
          return (
            (t.ɵprov = g({
              token: t,
              providedIn: 'root',
              factory: () => new t([new wa()])
            })),
            t
          );
        })();
      function Aa(t, e, n, r, s = !1) {
        for (; null !== n; ) {
          const i = e[n.index];
          if ((null !== i && r.push(At(i)), ot(i)))
            for (let t = 10; t < i.length; t++) {
              const e = i[t],
                n = e[1].firstChild;
              null !== n && Aa(e[1], e, n, r);
            }
          const o = n.type;
          if (8 & o) Aa(t, e, n.child, r);
          else if (32 & o) {
            const t = Sr(n, e);
            let s;
            for (; (s = t()); ) r.push(s);
          } else if (16 & o) {
            const t = e[16],
              s = t[6].projection[n.projection];
            if (Array.isArray(s)) r.push(...s);
            else {
              const e = Dr(t);
              Aa(e[1], e, s, r, !0);
            }
          }
          n = s ? n.projectionNext : n.next;
        }
        return r;
      }
      class xa {
        constructor(t, e) {
          (this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            e = t[1];
          return Aa(e, t, e.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (ot(t)) {
              const e = t[8],
                n = e ? e.indexOf(this) : -1;
              n > -1 && (jr(t, n), cn(e, n));
            }
            this._attachedToViewContainer = !1;
          }
          Ir(this._lView[1], this._lView);
        }
        onDestroy(t) {
          ks(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Gs(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Ws(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (t, e, n) {
            Qt(!0);
            try {
              Ws(t, e, n);
            } finally {
              Qt(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef)
            throw new Error(
              'This view is already attached directly to the ApplicationRef!'
            );
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null),
            $r(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer)
            throw new Error(
              'This view is already attached to a ViewContainer!'
            );
          this._appRef = t;
        }
      }
      class Oa extends xa {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Qs(this._view);
        }
        checkNoChanges() {
          !(function (t) {
            Qt(!0);
            try {
              Qs(t);
            } finally {
              Qt(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      const ka = Fa;
      let Ta = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = ka), (t.__ChangeDetectorRef__ = !0), t;
      })();
      function Fa(t = !1) {
        return (function (t, e, n) {
          if (!n && ut(t)) {
            const n = Ft(t.index, e);
            return new xa(n, n);
          }
          return 47 & t.type ? new xa(e[16], e) : null;
        })(Ht(), Bt(), t);
      }
      const ja = [new wa()],
        Ia = new Sa([new pa()]),
        Ra = new Da(ja),
        Pa = function () {
          return Va(Ht(), Bt());
        };
      let Na = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Pa), t;
      })();
      const La = Na,
        Ma = class extends La {
          constructor(t, e, n) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = e),
              (this.elementRef = n);
          }
          createEmbeddedView(t) {
            const e = this._declarationTContainer.tViews,
              n = bs(
                this._declarationLView,
                e,
                t,
                16,
                null,
                e.declTNode,
                null,
                null,
                null,
                null
              );
            n[17] = this._declarationLView[this._declarationTContainer.index];
            const r = this._declarationLView[19];
            return (
              null !== r && (n[19] = r.createEmbeddedView(e)),
              vs(e, n, t),
              new xa(n)
            );
          }
        };
      function Va(t, e) {
        return 4 & t.type ? new Ma(e, t, ia(t, e)) : null;
      }
      class Ba {}
      class Ua {}
      const za = function () {
        return Wa(Ht(), Bt());
      };
      let Ha = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = za), t;
      })();
      const qa = Ha,
        Ka = class extends qa {
          constructor(t, e, n) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = e),
              (this._hostLView = n);
          }
          get element() {
            return ia(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Xe(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Ve(this._hostTNode, this._hostLView);
            if (Te(t)) {
              const e = je(t, this._hostLView),
                n = Fe(t);
              return new Xe(e[1].data[n + 8], e);
            }
            return new Xe(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const e = $a(this._lContainer);
            return (null !== e && e[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, e, n) {
            const r = t.createEmbeddedView(e || {});
            return this.insert(r, n), r;
          }
          createComponent(t, e, n, r, s) {
            const i = n || this.parentInjector;
            if (!s && null == t.ngModule && i) {
              const t = i.get(Ba, null);
              t && (s = t);
            }
            const o = t.create(i, r, void 0, s);
            return this.insert(o.hostView, e), o;
          }
          insert(t, e) {
            const n = t._lView,
              r = n[1];
            if (ot(n[3])) {
              const e = this.indexOf(t);
              if (-1 !== e) this.detach(e);
              else {
                const e = n[3],
                  r = new Ka(e, e[6], e[3]);
                r.detach(r.indexOf(t));
              }
            }
            const s = this._adjustIndex(e),
              i = this._lContainer;
            !(function (t, e, n, r) {
              const s = 10 + r,
                i = n.length;
              r > 0 && (n[s - 1][4] = e),
                r < i - 10
                  ? ((e[4] = n[s]), un(n, 10 + r, e))
                  : (n.push(e), (e[4] = null)),
                (e[3] = n);
              const o = e[17];
              null !== o &&
                n !== o &&
                (function (t, e) {
                  const n = t[9];
                  e[16] !== e[3][3][16] && (t[2] = !0),
                    null === n ? (t[9] = [e]) : n.push(e);
                })(o, e);
              const a = e[19];
              null !== a && a.insertView(t), (e[2] |= 128);
            })(r, n, i, s);
            const o = qr(s, i),
              a = n[11],
              u = Vr(a, i[7]);
            return (
              null !== u &&
                (function (t, e, n, r, s, i) {
                  (r[0] = s), (r[6] = e), $r(t, r, n, 1, s, i);
                })(r, i[6], a, n, u, o),
              t.attachToViewContainerRef(),
              un(Ga(i), s, t),
              t
            );
          }
          move(t, e) {
            return this.insert(t, e);
          }
          indexOf(t) {
            const e = $a(this._lContainer);
            return null !== e ? e.indexOf(t) : -1;
          }
          remove(t) {
            const e = this._adjustIndex(t, -1),
              n = jr(this._lContainer, e);
            n && (cn(Ga(this._lContainer), e), Ir(n[1], n));
          }
          detach(t) {
            const e = this._adjustIndex(t, -1),
              n = jr(this._lContainer, e);
            return n && null != cn(Ga(this._lContainer), e) ? new xa(n) : null;
          }
          _adjustIndex(t, e = 0) {
            return null == t ? this.length + e : t;
          }
        };
      function $a(t) {
        return t[8];
      }
      function Ga(t) {
        return t[8] || (t[8] = []);
      }
      function Wa(t, e) {
        let n;
        const r = e[t.index];
        if (ot(r)) n = r;
        else {
          let s;
          if (8 & t.type) s = At(r);
          else {
            const n = e[11];
            s = n.createComment('');
            const r = Ot(t, e);
            Nr(
              n,
              Vr(n, r),
              s,
              (function (t, e) {
                return St(t) ? t.nextSibling(e) : e.nextSibling;
              })(n, r),
              !1
            );
          }
          (e[t.index] = n = zs(r, e, s, t)), $s(e, n);
        }
        return new Ka(n, t, e);
      }
      const Qa = {};
      class Za extends ra {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const e = rt(t);
          return new Ja(e, this.ngModule);
        }
      }
      function Xa(t) {
        const e = [];
        for (let n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const Ya = new nn('SCHEDULER_TOKEN', {
        providedIn: 'root',
        factory: () => vr
      });
      class Ja extends ea {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(os).join(',')),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return Xa(this.componentDef.inputs);
        }
        get outputs() {
          return Xa(this.componentDef.outputs);
        }
        create(t, e, n, r) {
          const s = (r = r || this.ngModule)
              ? (function (t, e) {
                  return {
                    get: (n, r, s) => {
                      const i = t.get(n, Qa, s);
                      return i !== Qa || r === Qa ? i : e.get(n, r, s);
                    }
                  };
                })(t, r.injector)
              : t,
            i = s.get(ua, Dt),
            o = s.get(ha, null),
            a = i.createRenderer(null, this.componentDef),
            u = this.componentDef.selectors[0][0] || 'div',
            c = n
              ? (function (t, e, n) {
                  if (St(t)) return t.selectRootElement(e, n === F.ShadowDom);
                  let r = 'string' == typeof e ? t.querySelector(e) : e;
                  return (r.textContent = ''), r;
                })(a, n, this.componentDef.encapsulation)
              : Tr(
                  i.createRenderer(null, this.componentDef),
                  u,
                  (function (t) {
                    const e = t.toLowerCase();
                    return 'svg' === e
                      ? 'http://www.w3.org/2000/svg'
                      : 'math' === e
                      ? 'http://www.w3.org/1998/MathML/'
                      : null;
                  })(u)
                ),
            l = this.componentDef.onPush ? 576 : 528,
            h = {
              components: [],
              scheduler: vr,
              clean: Xs,
              playerHandler: null,
              flags: 0
            },
            d = Os(0, null, null, 1, 0, null, null, null, null, null),
            f = bs(null, d, h, l, null, null, i, a, o, s);
          let p, m;
          ae(f);
          try {
            const t = (function (t, e, n, r, s, i) {
              const o = n[1];
              n[20] = t;
              const a = _s(o, 20, 2, '#host', null),
                u = (a.mergedAttrs = e.hostAttrs);
              null !== u &&
                (si(a, u, !0),
                null !== t &&
                  (De(s, t, u),
                  null !== a.classes && Qr(s, t, a.classes),
                  null !== a.styles && Wr(s, t, a.styles)));
              const c = r.createRenderer(t, e),
                l = bs(
                  n,
                  xs(e),
                  null,
                  e.onPush ? 64 : 16,
                  n[20],
                  a,
                  r,
                  c,
                  null,
                  null
                );
              return (
                o.firstCreatePass &&
                  (Be(Ne(a, n), o, e.type), Ps(o, a), Ls(a, n.length, 1)),
                $s(n, l),
                (n[20] = l)
              );
            })(c, this.componentDef, f, i, a);
            if (c)
              if (n) De(a, c, ['ng-version', fa.full]);
              else {
                const { attrs: t, classes: e } = (function (t) {
                  const e = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < t.length; ) {
                    let i = t[r];
                    if ('string' == typeof i)
                      2 === s
                        ? '' !== i && e.push(i, t[++r])
                        : 8 === s && n.push(i);
                    else {
                      if (!es(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: e, classes: n };
                })(this.componentDef.selectors[0]);
                t && De(a, c, t), e && e.length > 0 && Qr(a, c, e.join(' '));
              }
            if (((m = kt(d, 20)), void 0 !== e)) {
              const t = (m.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = e[n];
                t.push(null != r ? Array.from(r) : null);
              }
            }
            (p = (function (t, e, n, r, s) {
              const i = n[1],
                o = (function (t, e, n) {
                  const r = Ht();
                  t.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Ms(t, r, e, ys(t, e, 1, null), n));
                  const s = We(e, t, r.directiveStart, r);
                  yr(s, e);
                  const i = Ot(r, e);
                  return i && yr(i, e), s;
                })(i, n, e);
              if (
                (r.components.push(o),
                (t[8] = o),
                s && s.forEach((t) => t(o, e)),
                e.contentQueries)
              ) {
                const t = Ht();
                e.contentQueries(1, o, t.directiveStart);
              }
              const a = Ht();
              return (
                !i.firstCreatePass ||
                  (null === e.hostBindings && null === e.hostAttrs) ||
                  (pe(a.index),
                  Is(n[1], a, 0, a.directiveStart, a.directiveEnd, e),
                  Rs(e, o)),
                o
              );
            })(t, this.componentDef, f, h, [Ci])),
              vs(d, f, null);
          } finally {
            de();
          }
          return new tu(this.componentType, p, ia(m, f), f, m);
        }
      }
      class tu extends class {} {
        constructor(t, e, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new Oa(r)),
            (this.componentType = t);
        }
        get injector() {
          return new Xe(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      const eu = new Map();
      class nu extends Ba {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Za(this));
          const n = st(t),
            r = t[H] || null;
          r && $o(r),
            (this._bootstrapComponents = Cr(n.bootstrap)),
            (this._r3Injector = fi(
              t,
              e,
              [
                { provide: Ba, useValue: this },
                { provide: ra, useValue: this.componentFactoryResolver }
              ],
              l(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, e = wi.THROW_IF_NOT_FOUND, n = D.Default) {
          return t === wi || t === Ba || t === ii
            ? this
            : this._r3Injector.get(t, e, n);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class ru extends Ua {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== st(t) &&
              (function (t) {
                const e = new Set();
                !(function t(n) {
                  const r = st(n, !0),
                    s = r.id;
                  null !== s &&
                    ((function (t, e, n) {
                      if (e && e !== n)
                        throw new Error(
                          `Duplicate module registered for ${t} - ${l(
                            e
                          )} vs ${l(e.name)}`
                        );
                    })(s, eu.get(s), n),
                    eu.set(s, n));
                  const i = Cr(r.imports);
                  for (const o of i) e.has(o) || (e.add(o), t(o));
                })(t);
              })(t);
        }
        create(t) {
          return new nu(this.moduleType, t);
        }
      }
      function su(t, e, n) {
        const r = Zt() + t,
          s = Bt();
        return s[r] === as
          ? Ii(s, r, n ? e.call(n) : e())
          : (function (t, e) {
              return t[e];
            })(s, r);
      }
      function iu(t, e, n, r) {
        return uu(Bt(), Zt(), t, e, n, r);
      }
      function ou(t, e, n, r, s) {
        return cu(Bt(), Zt(), t, e, n, r, s);
      }
      function au(t, e) {
        const n = t[e];
        return n === as ? void 0 : n;
      }
      function uu(t, e, n, r, s, i) {
        const o = e + n;
        return Ri(t, o, s)
          ? Ii(t, o + 1, i ? r.call(i, s) : r(s))
          : au(t, o + 1);
      }
      function cu(t, e, n, r, s, i, o) {
        const a = e + n;
        return Pi(t, a, s, i)
          ? Ii(t, a + 2, o ? r.call(o, s, i) : r(s, i))
          : au(t, a + 2);
      }
      function lu(t, e) {
        const n = Ut();
        let r;
        const s = t + 20;
        n.firstCreatePass
          ? ((r = (function (t, e) {
              if (e)
                for (let n = e.length - 1; n >= 0; n--) {
                  const r = e[n];
                  if (t === r.name) return r;
                }
              throw new dt('302', `The pipe '${t}' could not be found!`);
            })(e, n.pipeRegistry)),
            (n.data[s] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy))
          : (r = n.data[s]);
        const i = r.factory || (r.factory = ht(r.type)),
          o = x(Bi);
        try {
          const t = Re(!1),
            e = i();
          return (
            Re(t),
            (function (t, e, n, r) {
              n >= t.data.length &&
                ((t.data[n] = null), (t.blueprint[n] = null)),
                (e[n] = r);
            })(n, Bt(), s, e),
            e
          );
        } finally {
          x(o);
        }
      }
      function hu(t, e, n) {
        const r = t + 20,
          s = Bt(),
          i = Tt(s, r);
        return mu(
          s,
          pu(s, r) ? uu(s, Zt(), e, i.transform, n, i) : i.transform(n)
        );
      }
      function du(t, e, n, r) {
        const s = t + 20,
          i = Bt(),
          o = Tt(i, s);
        return mu(
          i,
          pu(i, s) ? cu(i, Zt(), e, o.transform, n, r, o) : o.transform(n, r)
        );
      }
      function fu(t, e, n, r, s) {
        const i = t + 20,
          o = Bt(),
          a = Tt(o, i);
        return mu(
          o,
          pu(o, i)
            ? (function (t, e, n, r, s, i, o, a) {
                const u = e + n;
                return (function (t, e, n, r, s) {
                  const i = Pi(t, e, n, r);
                  return Ri(t, e + 2, s) || i;
                })(t, u, s, i, o)
                  ? Ii(t, u + 3, a ? r.call(a, s, i, o) : r(s, i, o))
                  : au(t, u + 3);
              })(o, Zt(), e, a.transform, n, r, s, a)
            : a.transform(n, r, s)
        );
      }
      function pu(t, e) {
        return t[1].data[e].pure;
      }
      function mu(t, e) {
        return Ti.isWrapped(e) && ((e = Ti.unwrap(e)), (t[Xt()] = as)), e;
      }
      const gu = class extends r.a {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let r,
            i = (t) => null,
            o = () => null;
          t && 'object' == typeof t
            ? ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e));
                  }
                : (e) => {
                    t.next(e);
                  }),
              t.error &&
                (i = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e));
                    }
                  : (e) => {
                      t.error(e);
                    }),
              t.complete &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
              e &&
                (i = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
              n &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const a = super.subscribe(r, i, o);
          return t instanceof s.a && t.add(a), a;
        }
      };
      function bu() {
        return this._results[ki()]();
      }
      class _u {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new gu()),
            (this.length = 0);
          const t = ki(),
            e = _u.prototype;
          e[t] || (e[t] = bu);
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t) {
          (this._results = on(t)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class yu {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new yu(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class vu {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const e = t.queries;
          if (null !== e) {
            const n =
                null !== t.contentQueries ? t.contentQueries[0] : e.length,
              r = [];
            for (let t = 0; t < n; t++) {
              const n = e.getByIndex(t);
              r.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new vu(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++)
            null !== Mu(t, e).matches && this.queries[e].setDirty();
        }
      }
      class wu {
        constructor(t, e, n, r = null) {
          (this.predicate = t),
            (this.descendants = e),
            (this.isStatic = n),
            (this.read = r);
        }
      }
      class Cu {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementStart(t, e);
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++)
            this.queries[e].elementEnd(t);
        }
        embeddedTView(t) {
          let e = null;
          for (let n = 0; n < this.length; n++) {
            const r = null !== e ? e.length : 0,
              s = this.getByIndex(n).embeddedTView(t, r);
            s &&
              ((s.indexInDeclarationView = n),
              null !== e ? e.push(s) : (e = [s]));
          }
          return null !== e ? new Cu(e) : null;
        }
        template(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].template(t, e);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Eu {
        constructor(t, e = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e);
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, e) {
          this.elementStart(t, e);
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, e),
              new Eu(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && !1 === this.metadata.descendants) {
            const e = this._declarationNodeIndex;
            let n = t.parent;
            for (; null !== n && 8 & n.type && n.index !== e; ) n = n.parent;
            return e === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, e) {
          const n = this.metadata.predicate;
          if (Array.isArray(n))
            for (let r = 0; r < n.length; r++) {
              const s = n[r];
              this.matchTNodeWithReadOption(t, e, Su(e, s)),
                this.matchTNodeWithReadOption(t, e, Ge(e, t, s, !1, !1));
            }
          else
            n === Na
              ? 4 & e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, Ge(e, t, n, !1, !1));
        }
        matchTNodeWithReadOption(t, e, n) {
          if (null !== n) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === aa || r === Ha || (r === Na && 4 & e.type))
                this.addMatch(e.index, -2);
              else {
                const n = Ge(e, t, r, !1, !1);
                null !== n && this.addMatch(e.index, n);
              }
            else this.addMatch(e.index, n);
          }
        }
        addMatch(t, e) {
          null === this.matches
            ? (this.matches = [t, e])
            : this.matches.push(t, e);
        }
      }
      function Su(t, e) {
        const n = t.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
        return null;
      }
      function Du(t, e, n, r) {
        return -1 === n
          ? (function (t, e) {
              return 11 & t.type ? ia(t, e) : 4 & t.type ? Va(t, e) : null;
            })(e, t)
          : -2 === n
          ? (function (t, e, n) {
              return n === aa
                ? ia(e, t)
                : n === Na
                ? Va(e, t)
                : n === Ha
                ? Wa(e, t)
                : void 0;
            })(t, e, r)
          : We(t, t[1], n, e);
      }
      function Au(t, e, n, r) {
        const s = e[19].queries[r];
        if (null === s.matches) {
          const r = t.data,
            i = n.matches,
            o = [];
          for (let t = 0; t < i.length; t += 2) {
            const s = i[t];
            o.push(s < 0 ? null : Du(e, r[s], i[t + 1], n.metadata.read));
          }
          s.matches = o;
        }
        return s.matches;
      }
      function xu(t, e, n, r) {
        const s = t.queries.getByIndex(n),
          i = s.matches;
        if (null !== i) {
          const o = Au(t, e, s, n);
          for (let t = 0; t < i.length; t += 2) {
            const n = i[t];
            if (n > 0) r.push(o[t / 2]);
            else {
              const s = i[t + 1],
                o = e[-n];
              for (let t = 10; t < o.length; t++) {
                const e = o[t];
                e[17] === e[3] && xu(e[1], e, s, r);
              }
              if (null !== o[9]) {
                const t = o[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e];
                  xu(n[1], n, s, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Ou(t) {
        const e = Bt(),
          n = Ut(),
          r = re();
        se(r + 1);
        const s = Mu(n, r);
        if (t.dirty && It(e) === s.metadata.isStatic) {
          if (null === s.matches) t.reset([]);
          else {
            const i = s.crossesNgTemplate ? xu(n, e, r, []) : Au(n, e, s, r);
            t.reset(i), t.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function ku(t, e, n) {
        Fu(Ut(), Bt(), t, e, n, !0);
      }
      function Tu(t, e, n) {
        Fu(Ut(), Bt(), t, e, n, !1);
      }
      function Fu(t, e, n, r, s, i) {
        t.firstCreatePass &&
          (Lu(t, new wu(n, r, i, s), -1), i && (t.staticViewQueries = !0)),
          Nu(t, e);
      }
      function ju(t, e, n, r) {
        Ru(Ut(), Bt(), e, n, r, !1, Ht(), t);
      }
      function Iu(t, e, n, r) {
        Ru(Ut(), Bt(), e, n, r, !0, Ht(), t);
      }
      function Ru(t, e, n, r, s, i, o, a) {
        t.firstCreatePass &&
          (Lu(t, new wu(n, r, i, s), o.index),
          (function (t, e) {
            const n = t.contentQueries || (t.contentQueries = []);
            e !== (n.length ? n[n.length - 1] : -1) &&
              n.push(t.queries.length - 1, e);
          })(t, a),
          i && (t.staticContentQueries = !0)),
          Nu(t, e);
      }
      function Pu() {
        return (t = Bt()), (e = re()), t[19].queries[e].queryList;
        var t, e;
      }
      function Nu(t, e) {
        const n = new _u();
        ks(t, e, n, n.destroy),
          null === e[19] && (e[19] = new vu()),
          e[19].queries.push(new yu(n));
      }
      function Lu(t, e, n) {
        null === t.queries && (t.queries = new Cu()),
          t.queries.track(new Eu(e, n));
      }
      function Mu(t, e) {
        return t.queries.getByIndex(e);
      }
      function Vu(t = D.Default) {
        const e = Fa(!0);
        if (null != e || t & D.Optional) return e;
        mt('ChangeDetectorRef');
      }
      const Bu = new nn('Application Initializer');
      let Uu = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.resolve = sa),
              (this.reject = sa),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                Zi(e) && t.push(e);
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch((t) => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Dn(Bu, 8));
          }),
          (t.ɵprov = g({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const zu = new nn('AppId'),
        Hu = {
          provide: zu,
          useFactory: function () {
            return `${qu()}${qu()}${qu()}`;
          },
          deps: []
        };
      function qu() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Ku = new nn('Platform Initializer'),
        $u = new nn('Platform ID'),
        Gu = new nn('appBootstrapListener');
      let Wu = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = g({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Qu = new nn('LocaleId'),
        Zu = new nn('DefaultCurrencyCode');
      class Xu {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const Yu = function (t) {
          return new ru(t);
        },
        Ju = Yu,
        tc = function (t) {
          return Promise.resolve(Yu(t));
        },
        ec = function (t) {
          const e = Yu(t),
            n = Cr(st(t).declarations).reduce((t, e) => {
              const n = rt(e);
              return n && t.push(new Ja(n)), t;
            }, []);
          return new Xu(e, n);
        },
        nc = ec,
        rc = function (t) {
          return Promise.resolve(ec(t));
        };
      let sc = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = Ju),
              (this.compileModuleAsync = tc),
              (this.compileModuleAndAllComponentsSync = nc),
              (this.compileModuleAndAllComponentsAsync = rc);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = g({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const ic = (() => Promise.resolve(0))();
      function oc(t) {
        'undefined' == typeof Zone
          ? ic.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', t);
      }
      class ac {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: e = !1
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new gu(!1)),
            (this.onMicrotaskEmpty = new gu(!1)),
            (this.onStable = new gu(!1)),
            (this.onError = new gu(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = e),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              let t = N.requestAnimationFrame,
                e = N.cancelAnimationFrame;
              if ('undefined' != typeof Zone && t && e) {
                const n = t[Zone.__symbol__('OriginalDelegate')];
                n && (t = n);
                const r = e[Zone.__symbol__('OriginalDelegate')];
                r && (e = r);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: e
              };
            })().nativeRequestAnimationFrame),
            (function (t) {
              const e =
                !!t.shouldCoalesceEventChangeDetection &&
                t.nativeRequestAnimationFrame &&
                (() => {
                  !(function (t) {
                    -1 === t.lastRequestAnimationFrameId &&
                      ((t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(
                        N,
                        () => {
                          t.fakeTopEventTask ||
                            (t.fakeTopEventTask = Zone.root.scheduleEventTask(
                              'fakeTopEventTask',
                              () => {
                                (t.lastRequestAnimationFrameId = -1),
                                  lc(t),
                                  cc(t);
                              },
                              void 0,
                              () => {},
                              () => {}
                            )),
                            t.fakeTopEventTask.invoke();
                        }
                      )),
                      lc(t));
                  })(t);
                });
              t._inner = t._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0, maybeDelayChangeDetection: e },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return hc(t), n.invokeTask(s, i, o, a);
                  } finally {
                    e && 'eventTask' === i.type && e(), dc(t);
                  }
                },
                onInvoke: (e, n, r, s, i, o, a) => {
                  try {
                    return hc(t), e.invoke(r, s, i, o, a);
                  } finally {
                    dc(t);
                  }
                },
                onHasTask: (e, n, r, s) => {
                  e.hasTask(r, s),
                    n === r &&
                      ('microTask' == s.change
                        ? ((t._hasPendingMicrotasks = s.microTask),
                          lc(t),
                          cc(t))
                        : 'macroTask' == s.change &&
                          (t.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, n, r, s) => (
                  e.handleError(r, s),
                  t.runOutsideAngular(() => t.onError.emit(s)),
                  !1
                )
              });
            })(this);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!ac.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (ac.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask('NgZoneEvent: ' + r, t, uc, sa, sa);
          try {
            return s.runTask(i, e, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const uc = {};
      function cc(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function lc(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          (t.shouldCoalesceEventChangeDetection &&
            -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function hc(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function dc(t) {
        t._nesting--, cc(t);
      }
      class fc {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new gu()),
            (this.onMicrotaskEmpty = new gu()),
            (this.onStable = new gu()),
            (this.onError = new gu());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }
      let pc = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone =
                    'undefined' == typeof Zone
                      ? null
                      : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                }
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      ac.assertNotInAngularZone(),
                        oc(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    }
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                oc(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (e) =>
                    !e.updateCb ||
                    !e.updateCb(t) ||
                    (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let r = -1;
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (t) => t.timeoutId !== r
                  )),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Dn(ac));
            }),
            (t.ɵprov = g({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        mc = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), yc.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return yc.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = g({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class gc {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      function bc(t) {
        yc = t;
      }
      let _c,
        yc = new gc(),
        vc = !0,
        wc = !1;
      function Cc() {
        return (wc = !0), vc;
      }
      function Ec() {
        if (wc)
          throw new Error('Cannot enable prod mode after platform setup.');
        vc = !1;
      }
      const Sc = new nn('AllowMultipleToken');
      class Dc {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function Ac(t, e, n = []) {
        const r = 'Platform: ' + e,
          s = new nn(r);
        return (e = []) => {
          let i = xc();
          if (!i || i.injector.get(Sc, !1))
            if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
            else {
              const t = n
                .concat(e)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: ai, useValue: 'platform' }
                );
              !(function (t) {
                if (_c && !_c.destroyed && !_c.injector.get(Sc, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                _c = t.get(Oc);
                const e = t.get(Ku, null);
                e && e.forEach((t) => t());
              })(wi.create({ providers: t, name: r }));
            }
          return (function (t) {
            const e = xc();
            if (!e) throw new Error('No platform exists!');
            if (!e.injector.get(t, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return e;
          })(s);
        };
      }
      function xc() {
        return _c && !_c.destroyed ? _c : null;
      }
      let Oc = (() => {
        class t {
          constructor(t) {
            (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function (t, e) {
                let n;
                return (
                  (n =
                    'noop' === t
                      ? new fc()
                      : ('zone.js' === t ? void 0 : t) ||
                        new ac({
                          enableLongStackTrace: Cc(),
                          shouldCoalesceEventChangeDetection: e
                        })),
                  n
                );
              })(e ? e.ngZone : void 0, (e && e.ngZoneEventCoalescing) || !1),
              r = [{ provide: ac, useValue: n }];
            return n.run(() => {
              const e = wi.create({
                  providers: r,
                  parent: this.injector,
                  name: t.moduleType.name
                }),
                s = t.create(e),
                i = s.injector.get(_r, null);
              if (!i)
                throw new Error(
                  'No ErrorHandler. Is platform module (BrowserModule) included?'
                );
              return (
                n.runOutsideAngular(() => {
                  const t = n.onError.subscribe({
                    next: (t) => {
                      i.handleError(t);
                    }
                  });
                  s.onDestroy(() => {
                    Fc(this._modules, s), t.unsubscribe();
                  });
                }),
                (function (t, e, n) {
                  try {
                    const r = n();
                    return Zi(r)
                      ? r.catch((n) => {
                          throw (
                            (e.runOutsideAngular(() => t.handleError(n)), n)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r);
                  }
                })(i, n, () => {
                  const t = s.injector.get(Uu);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (
                        $o(s.injector.get(Qu, 'en-US') || 'en-US'),
                        this._moduleDoBootstrap(s),
                        s
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = kc({}, e);
            return (function (t, e, n) {
              const r = new ru(n);
              return Promise.resolve(r);
            })(0, 0, t).then((t) => this.bootstrapModuleFactory(t, n));
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(Tc);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach((t) => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${l(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Dn(wi));
          }),
          (t.ɵprov = g({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function kc(t, e) {
        return Array.isArray(e)
          ? e.reduce(kc, t)
          : Object.assign(Object.assign({}, t), e);
      }
      let Tc = (() => {
        class t {
          constructor(t, e, n, r, s, u) {
            (this._zone = t),
              (this._console = e),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = s),
              (this._initStatus = u),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe(
                {
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  }
                }
              ));
            const c = new i.a((t) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              l = new i.a((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    ac.assertNotInAngularZone(),
                      oc(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  ac.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = Object(o.a)(c, l.pipe(Object(a.a)()));
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n =
              t instanceof ea
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(Ba),
              s = n.create(wi.NULL, [], e || n.selector, r),
              i = s.location.nativeElement,
              o = s.injector.get(pc, null),
              a = o && s.injector.get(mc);
            return (
              o && a && a.registerApplication(i, o),
              s.onDestroy(() => {
                this.detachView(s.hostView),
                  Fc(this.components, s),
                  a && a.unregisterApplication(i);
              }),
              this._loadComponent(s),
              Cc() &&
                this._console.log(
                  'Angular is running in development mode. Call enableProdMode() to enable production mode.'
                ),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error('ApplicationRef.tick is called recursively');
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(t)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            Fc(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(Gu, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Dn(ac), Dn(Wu), Dn(wi), Dn(_r), Dn(ra), Dn(Uu));
          }),
          (t.ɵprov = g({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Fc(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class jc {}
      class Ic {}
      const Rc = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      let Pc = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || Rc);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, r] = t.split('#');
            return (
              void 0 === r && (r = 'default'),
              n('zn8P')(e)
                .then((t) => t[r])
                .then((t) => Nc(t, e, r))
                .then((t) => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, r] = t.split('#'),
              s = 'NgFactory';
            return (
              void 0 === r && ((r = 'default'), (s = '')),
              n('zn8P')(
                this._config.factoryPathPrefix +
                  e +
                  this._config.factoryPathSuffix
              )
                .then((t) => t[r + s])
                .then((t) => Nc(t, e, r))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Dn(sc), Dn(Ic, 8));
          }),
          (t.ɵprov = g({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Nc(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const Lc = function (t) {
          return null;
        },
        Mc = Ac(null, 'core', [
          { provide: $u, useValue: 'unknown' },
          { provide: Oc, deps: [wi] },
          { provide: mc, deps: [] },
          { provide: Wu, deps: [] }
        ]),
        Vc = [
          { provide: Tc, useClass: Tc, deps: [ac, Wu, wi, _r, ra, Uu] },
          {
            provide: Ya,
            deps: [ac],
            useFactory: function (t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function (t) {
                  e.push(t);
                }
              );
            }
          },
          { provide: Uu, useClass: Uu, deps: [[new mn(), Bu]] },
          { provide: sc, useClass: sc, deps: [] },
          Hu,
          {
            provide: Sa,
            useFactory: function () {
              return Ia;
            },
            deps: []
          },
          {
            provide: Da,
            useFactory: function () {
              return Ra;
            },
            deps: []
          },
          {
            provide: Qu,
            useFactory: function (t) {
              return (
                $o(
                  (t =
                    t ||
                    ('undefined' != typeof $localize && $localize.locale) ||
                    'en-US')
                ),
                t
              );
            },
            deps: [[new pn(Qu), new mn(), new bn()]]
          },
          { provide: Zu, useValue: 'USD' }
        ];
      let Bc = (() => {
        class t {
          constructor(t) {}
        }
        return (
          (t.ɵmod = Y({ type: t })),
          (t.ɵinj = b({
            factory: function (e) {
              return new (e || t)(Dn(Tc));
            },
            providers: Vc
          })),
          t
        );
      })();
    },
    gRHU: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('2fFW'),
        s = n('NJ4a');
      const i = {
        closed: !0,
        next(t) {},
        error(t) {
          if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
          Object(s.a)(t);
        },
        complete() {}
      };
    },
    ioxi: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('fXoL');
      let s = (() => {
        class t {
          constructor() {
            this.regionalForms = ['galar', 'alola'];
          }
          titlecase(t) {
            if (t) {
              if (t.includes('-')) {
                const [e, ...n] = t.split('-'),
                  r = n.join('-');
                return [this.titlecase(e), this.titlecase(r)].join('-');
              }
              {
                const e = t.split(' '),
                  n = e.length;
                return e
                  .map((t) => {
                    var e;
                    return t && t.length > 1
                      ? this.regionalForms.includes(t.toLowerCase())
                        ? t
                        : t[0].toUpperCase() + t.slice(1).toLowerCase()
                      : n >= 2
                      ? null === (e = t[0]) || void 0 === e
                        ? void 0
                        : e.toUpperCase()
                      : t[0];
                  })
                  .join(' ');
              }
            }
            return '';
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac, providedIn: 'root' })),
          t
        );
      })();
    },
    jZKg: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('HDdC'),
        s = n('quSY');
      function i(t, e) {
        return new r.a((n) => {
          const r = new s.a();
          let i = 0;
          return (
            r.add(
              e.schedule(function () {
                i !== t.length
                  ? (n.next(t[i++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
    },
    jhN1: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return L;
      }),
        n.d(e, 'b', function () {
          return F;
        }),
        n.d(e, 'c', function () {
          return P;
        }),
        n.d(e, 'd', function () {
          return w;
        });
      var r = n('ofXK'),
        s = n('fXoL');
      class i extends r.x {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      }
      class o extends i {
        static makeCurrent() {
          Object(r.B)(new o());
        }
        getProperty(t, e) {
          return t[e];
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        getValue(t) {
          return t.value;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return 'window' === e
            ? window
            : 'document' === e
            ? t
            : 'body' === e
            ? t.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e =
            u || ((u = document.querySelector('base')), u)
              ? u.getAttribute('href')
              : null;
          return null == e
            ? null
            : ((n = e),
              a || (a = document.createElement('a')),
              a.setAttribute('href', n),
              '/' === a.pathname.charAt(0) ? a.pathname : '/' + a.pathname);
          var n;
        }
        resetBaseElement() {
          u = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return Object(r.A)(document.cookie, t);
        }
      }
      let a,
        u = null;
      const c = new s.q('TRANSITION_ID'),
        l = [
          {
            provide: s.d,
            useFactory: function (t, e, n) {
              return () => {
                n.get(s.e).donePromise.then(() => {
                  const n = Object(r.z)();
                  Array.prototype.slice
                    .apply(e.querySelectorAll('style[ng-transition]'))
                    .filter((e) => e.getAttribute('ng-transition') === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [c, r.d, s.r],
            multi: !0
          }
        ];
      class h {
        static init() {
          Object(s.X)(new h());
        }
        addToWindow(t) {
          (s.ob.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r)
              throw new Error('Could not find testability for element.');
            return r;
          }),
            (s.ob.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (s.ob.getAllAngularRootElements = () => t.getAllRootElements()),
            s.ob.frameworkStabilizers || (s.ob.frameworkStabilizers = []),
            s.ob.frameworkStabilizers.push((t) => {
              const e = s.ob.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const i = function (e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function (t) {
                t.whenStable(i);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const s = t.getTestability(e);
          return null != s
            ? s
            : n
            ? Object(r.z)().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      const d = new s.q('EventManagerPlugins');
      let f = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach((t) => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const e = n[r];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error('No event manager plugin found for event ' + t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Ub(d), s.Ub(s.z));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class p {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const s = Object(r.z)().getGlobalEventTarget(this._doc, t);
          if (!s)
            throw new Error(`Unsupported event target ${s} for event ${e}`);
          return this.addEventListener(s, e, n);
        }
      }
      let m = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach((t) => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        g = (() => {
          class t extends m {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head);
            }
            _addStylesToHost(t, e) {
              t.forEach((t) => {
                const n = this._doc.createElement('style');
                (n.textContent = t), this._styleNodes.add(e.appendChild(n));
              });
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }
            removeHost(t) {
              this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((e) => this._addStylesToHost(t, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach((t) => Object(r.z)().remove(t));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Ub(r.d));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const b = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        _ = /%COMP%/g;
      function y(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          Array.isArray(s) ? y(t, s, n) : ((s = s.replace(_, t)), n.push(s));
        }
        return n;
      }
      function v(t) {
        return (e) => {
          if ('__ngUnwrap__' === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let w = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new C(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case s.Q.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new E(
                      this.eventManager,
                      this.sharedStylesHost,
                      e,
                      this.appId
                    )),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case 1:
              case s.Q.ShadowDom:
                return new S(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = y(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t),
                    this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Ub(f), s.Ub(g), s.Ub(s.c));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class C {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(b[e] || e, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = 'string' == typeof t ? document.querySelector(t) : t;
          if (!n)
            throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ''), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ':' + e;
            const s = b[r];
            s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = b[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & (s.G.DashCase | s.G.Important)
            ? t.style.setProperty(e, n, r & s.G.Important ? 'important' : '')
            : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & s.G.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return 'string' == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, v(n))
            : this.eventManager.addEventListener(t, e, v(n));
        }
      }
      class E extends C {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const s = y(r + '-' + n.id, n.styles, []);
          e.addStyles(s),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(_, r + '-' + n.id)),
            (this.hostAttr = '_nghost-%COMP%'.replace(_, r + '-' + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, '');
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class S extends C {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.shadowRoot = n.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = y(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const t = document.createElement('style');
            (t.textContent = s[i]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          );
        }
      }
      let D = (() => {
        class t extends p {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return (
              t.addEventListener(e, n, !1),
              () => this.removeEventListener(t, e, n)
            );
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Ub(r.d));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const A = ['alt', 'control', 'meta', 'shift'],
        x = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS'
        },
        O = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock'
        },
        k = {
          alt: (t) => t.altKey,
          control: (t) => t.ctrlKey,
          meta: (t) => t.metaKey,
          shift: (t) => t.shiftKey
        };
      let T = (() => {
          class t extends p {
            constructor(t) {
              super(t);
            }
            supports(e) {
              return null != t.parseEventName(e);
            }
            addEventListener(e, n, s) {
              const i = t.parseEventName(n),
                o = t.eventCallback(i.fullKey, s, this.manager.getZone());
              return this.manager
                .getZone()
                .runOutsideAngular(() =>
                  Object(r.z)().onAndCancel(e, i.domEventName, o)
                );
            }
            static parseEventName(e) {
              const n = e.toLowerCase().split('.'),
                r = n.shift();
              if (0 === n.length || ('keydown' !== r && 'keyup' !== r))
                return null;
              const s = t._normalizeKey(n.pop());
              let i = '';
              if (
                (A.forEach((t) => {
                  const e = n.indexOf(t);
                  e > -1 && (n.splice(e, 1), (i += t + '.'));
                }),
                (i += s),
                0 != n.length || 0 === s.length)
              )
                return null;
              const o = {};
              return (o.domEventName = r), (o.fullKey = i), o;
            }
            static getEventFullKey(t) {
              let e = '',
                n = (function (t) {
                  let e = t.key;
                  if (null == e) {
                    if (((e = t.keyIdentifier), null == e))
                      return 'Unidentified';
                    e.startsWith('U+') &&
                      ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                      3 === t.location && O.hasOwnProperty(e) && (e = O[e]));
                  }
                  return x[e] || e;
                })(t);
              return (
                (n = n.toLowerCase()),
                ' ' === n ? (n = 'space') : '.' === n && (n = 'dot'),
                A.forEach((r) => {
                  r != n && (0, k[r])(t) && (e += r + '.');
                }),
                (e += n),
                e
              );
            }
            static eventCallback(e, n, r) {
              return (s) => {
                t.getEventFullKey(s) === e && r.runGuarded(() => n(s));
              };
            }
            static _normalizeKey(t) {
              switch (t) {
                case 'esc':
                  return 'escape';
                default:
                  return t;
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Ub(r.d));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        F = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return Object(s.Ub)(I);
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })();
      function j(t) {
        return new I(t.get(r.d));
      }
      let I = (() => {
        class t extends F {
          constructor(t) {
            super(), (this._doc = t);
          }
          sanitize(t, e) {
            if (null == e) return null;
            switch (t) {
              case s.I.NONE:
                return e;
              case s.I.HTML:
                return Object(s.db)(e, 'HTML')
                  ? Object(s.vb)(e)
                  : Object(s.bb)(this._doc, String(e));
              case s.I.STYLE:
                return Object(s.db)(e, 'Style') ? Object(s.vb)(e) : e;
              case s.I.SCRIPT:
                if (Object(s.db)(e, 'Script')) return Object(s.vb)(e);
                throw new Error('unsafe value used in a script context');
              case s.I.URL:
                return (
                  Object(s.nb)(e),
                  Object(s.db)(e, 'URL')
                    ? Object(s.vb)(e)
                    : Object(s.cb)(String(e))
                );
              case s.I.RESOURCE_URL:
                if (Object(s.db)(e, 'ResourceURL')) return Object(s.vb)(e);
                throw new Error(
                  'unsafe value used in a resource URL context (see https://g.co/ng/security#xss)'
                );
              default:
                throw new Error(
                  `Unexpected SecurityContext ${t} (see https://g.co/ng/security#xss)`
                );
            }
          }
          bypassSecurityTrustHtml(t) {
            return Object(s.eb)(t);
          }
          bypassSecurityTrustStyle(t) {
            return Object(s.hb)(t);
          }
          bypassSecurityTrustScript(t) {
            return Object(s.gb)(t);
          }
          bypassSecurityTrustUrl(t) {
            return Object(s.ib)(t);
          }
          bypassSecurityTrustResourceUrl(t) {
            return Object(s.fb)(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Ub(r.d));
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: function () {
              return j(Object(s.Ub)(s.o));
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      const R = [
          { provide: s.B, useValue: r.y },
          {
            provide: s.C,
            useValue: function () {
              o.makeCurrent(), h.init();
            },
            multi: !0
          },
          {
            provide: r.d,
            useFactory: function () {
              return Object(s.tb)(document), document;
            },
            deps: []
          }
        ],
        P = Object(s.R)(s.W, 'browser', R),
        N = [
          [],
          { provide: s.Z, useValue: 'root' },
          {
            provide: s.m,
            useFactory: function () {
              return new s.m();
            },
            deps: []
          },
          { provide: d, useClass: D, multi: !0, deps: [r.d, s.z, s.B] },
          { provide: d, useClass: T, multi: !0, deps: [r.d] },
          [],
          { provide: w, useClass: w, deps: [f, g, s.c] },
          { provide: s.F, useExisting: w },
          { provide: m, useExisting: g },
          { provide: g, useClass: g, deps: [r.d] },
          { provide: s.M, useClass: s.M, deps: [s.z] },
          { provide: f, useClass: f, deps: [d, s.z] },
          []
        ];
      let L = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [
                { provide: s.c, useValue: e.appId },
                { provide: c, useExisting: s.c },
                l
              ]
            };
          }
        }
        return (
          (t.ɵmod = s.Ib({ type: t })),
          (t.ɵinj = s.Hb({
            factory: function (e) {
              return new (e || t)(s.Ub(t, 12));
            },
            providers: N,
            imports: [r.c, s.f]
          })),
          t
        );
      })();
      'undefined' != typeof window && window;
    },
    kJWO: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (() =>
        ('function' == typeof Symbol && Symbol.observable) || '@@observable')();
    },
    lJxs: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('7o/Q');
      function s(t, e) {
        return function (n) {
          if ('function' != typeof t)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          return n.lift(new i(t, e));
        };
      }
      class i {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new o(t, this.project, this.thisArg));
        }
      }
      class o extends r.a {
        constructor(t, e, n) {
          super(t),
            (this.project = e),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
    },
    n6bG: function (t, e, n) {
      'use strict';
      function r(t) {
        return 'function' == typeof t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    nLfN: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      }),
        n.d(e, 'b', function () {
          return u;
        }),
        n.d(e, 'c', function () {
          return _;
        }),
        n.d(e, 'd', function () {
          return b;
        }),
        n.d(e, 'e', function () {
          return l;
        }),
        n.d(e, 'f', function () {
          return m;
        }),
        n.d(e, 'g', function () {
          return g;
        });
      var r = n('fXoL'),
        s = n('ofXK');
      let i;
      try {
        i = 'undefined' != typeof Intl && Intl.v8BreakIterator;
      } catch (y) {
        i = !1;
      }
      let o,
        a = (() => {
          class t {
            constructor(t) {
              (this._platformId = t),
                (this.isBrowser = this._platformId
                  ? Object(s.v)(this._platformId)
                  : 'object' == typeof document && !!document),
                (this.EDGE =
                  this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT =
                  this.isBrowser &&
                  /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                  this.isBrowser &&
                  !(!window.chrome && !i) &&
                  'undefined' != typeof CSS &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.WEBKIT =
                  this.isBrowser &&
                  /AppleWebKit/i.test(navigator.userAgent) &&
                  !this.BLINK &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.IOS =
                  this.isBrowser &&
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !('MSStream' in window)),
                (this.FIREFOX =
                  this.isBrowser &&
                  /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                  this.isBrowser &&
                  /android/i.test(navigator.userAgent) &&
                  !this.TRIDENT),
                (this.SAFARI =
                  this.isBrowser &&
                  /safari/i.test(navigator.userAgent) &&
                  this.WEBKIT);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Ub(r.B));
            }),
            (t.ɵprov = Object(r.Gb)({
              factory: function () {
                return new t(Object(r.Ub)(r.B));
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        u = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              }
            })),
            t
          );
        })();
      const c = [
        'color',
        'button',
        'checkbox',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week'
      ];
      function l() {
        if (o) return o;
        if ('object' != typeof document || !document)
          return (o = new Set(c)), o;
        let t = document.createElement('input');
        return (
          (o = new Set(
            c.filter((e) => (t.setAttribute('type', e), t.type === e))
          )),
          o
        );
      }
      let h, d, f, p;
      function m(t) {
        return (function () {
          if (null == h && 'undefined' != typeof window)
            try {
              window.addEventListener(
                'test',
                null,
                Object.defineProperty({}, 'passive', { get: () => (h = !0) })
              );
            } finally {
              h = h || !1;
            }
          return h;
        })()
          ? t
          : !!t.capture;
      }
      function g() {
        if (null == f) {
          if ('object' != typeof document || !document) return (f = !1), f;
          if ('scrollBehavior' in document.documentElement.style) f = !0;
          else {
            const t = Element.prototype.scrollTo;
            f = !!t && !/\{\s*\[native code\]\s*\}/.test(t.toString());
          }
        }
        return f;
      }
      function b() {
        if ('object' != typeof document || !document) return 0;
        if (null == d) {
          const t = document.createElement('div'),
            e = t.style;
          (t.dir = 'rtl'),
            (e.width = '1px'),
            (e.overflow = 'auto'),
            (e.visibility = 'hidden'),
            (e.pointerEvents = 'none'),
            (e.position = 'absolute');
          const n = document.createElement('div'),
            r = n.style;
          (r.width = '2px'),
            (r.height = '1px'),
            t.appendChild(n),
            document.body.appendChild(t),
            (d = 0),
            0 === t.scrollLeft &&
              ((t.scrollLeft = 1), (d = 0 === t.scrollLeft ? 1 : 2)),
            t.parentNode.removeChild(t);
        }
        return d;
      }
      function _(t) {
        if (
          (function () {
            if (null == p) {
              const t = 'undefined' != typeof document ? document.head : null;
              p = !(!t || (!t.createShadowRoot && !t.attachShadow));
            }
            return p;
          })()
        ) {
          const e = t.getRootNode ? t.getRootNode() : null;
          if (
            'undefined' != typeof ShadowRoot &&
            ShadowRoot &&
            e instanceof ShadowRoot
          )
            return e;
        }
        return null;
      }
    },
    nYR2: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('7o/Q'),
        s = n('quSY');
      function i(t) {
        return (e) => e.lift(new o(t));
      }
      class o {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new a(t, this.callback));
        }
      }
      class a extends r.a {
        constructor(t, e) {
          super(t), this.add(new s.a(e));
        }
      }
    },
    ngJS: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (t) => (e) => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
    },
    oB13: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return l;
      });
      var r = n('XNiG'),
        s = n('HDdC'),
        i = (n('7o/Q'), n('quSY')),
        o = n('x+ZX');
      class a extends s.a {
        constructor(t, e) {
          super(),
            (this.source = t),
            (this.subjectFactory = e),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (t && !t.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new i.a()),
              t.add(this.source.subscribe(new c(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = i.a.EMPTY))),
            t
          );
        }
        refCount() {
          return Object(o.a)()(this);
        }
      }
      const u = (() => {
        const t = a.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount }
        };
      })();
      class c extends r.b {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0),
              (t._subject = null),
              (t._connection = null),
              e && e.unsubscribe();
          }
        }
      }
      function l(t, e) {
        return function (n) {
          let r;
          if (
            ((r =
              'function' == typeof t
                ? t
                : function () {
                    return t;
                  }),
            'function' == typeof e)
          )
            return n.lift(new h(r, e));
          const s = Object.create(n, u);
          return (s.source = n), (s.subjectFactory = r), s;
        };
      }
      class h {
        constructor(t, e) {
          (this.subjectFactory = t), (this.selector = e);
        }
        call(t, e) {
          const { selector: n } = this,
            r = this.subjectFactory(),
            s = n(r).subscribe(t);
          return s.add(e.subscribe(r)), s;
        }
      }
    },
    ofXK: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return v;
      }),
        n.d(e, 'b', function () {
          return Et;
        }),
        n.d(e, 'c', function () {
          return kt;
        }),
        n.d(e, 'd', function () {
          return u;
        }),
        n.d(e, 'e', function () {
          return xt;
        }),
        n.d(e, 'f', function () {
          return C;
        }),
        n.d(e, 'g', function () {
          return h;
        }),
        n.d(e, 'h', function () {
          return E;
        }),
        n.d(e, 'i', function () {
          return _;
        }),
        n.d(e, 'j', function () {
          return St;
        }),
        n.d(e, 'k', function () {
          return at;
        }),
        n.d(e, 'l', function () {
          return ct;
        }),
        n.d(e, 'm', function () {
          return ht;
        }),
        n.d(e, 'n', function () {
          return mt;
        }),
        n.d(e, 'o', function () {
          return gt;
        }),
        n.d(e, 'p', function () {
          return bt;
        }),
        n.d(e, 'q', function () {
          return w;
        }),
        n.d(e, 'r', function () {
          return c;
        }),
        n.d(e, 's', function () {
          return Ot;
        }),
        n.d(e, 't', function () {
          return At;
        }),
        n.d(e, 'u', function () {
          return It;
        }),
        n.d(e, 'v', function () {
          return Ft;
        }),
        n.d(e, 'w', function () {
          return jt;
        }),
        n.d(e, 'x', function () {
          return a;
        }),
        n.d(e, 'y', function () {
          return Tt;
        }),
        n.d(e, 'z', function () {
          return i;
        }),
        n.d(e, 'A', function () {
          return ot;
        }),
        n.d(e, 'B', function () {
          return o;
        });
      var r = n('fXoL');
      let s = null;
      function i() {
        return s;
      }
      function o(t) {
        s || (s = t);
      }
      class a {}
      const u = new r.q('DocumentToken');
      let c = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(r.Gb)({
            factory: l,
            token: t,
            providedIn: 'platform'
          })),
          t
        );
      })();
      function l() {
        return Object(r.Ub)(d);
      }
      const h = new r.q('Location Initialized');
      let d = (() => {
        class t extends c {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = i().getLocation()),
              (this._history = i().getHistory());
          }
          getBaseHrefFromDOM() {
            return i().getBaseHref(this._doc);
          }
          onPopState(t) {
            i()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('popstate', t, !1);
          }
          onHashChange(t) {
            i()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('hashchange', t, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            f() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            f()
              ? this._history.replaceState(t, e, n)
              : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Ub(u));
          }),
          (t.ɵprov = Object(r.Gb)({
            factory: p,
            token: t,
            providedIn: 'platform'
          })),
          t
        );
      })();
      function f() {
        return !!window.history.pushState;
      }
      function p() {
        return new d(Object(r.Ub)(u));
      }
      function m(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith('/') && n++,
          e.startsWith('/') && n++,
          2 == n ? t + e.substring(1) : 1 == n ? t + e : t + '/' + e
        );
      }
      function g(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ('/' === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function b(t) {
        return t && '?' !== t[0] ? '?' + t : t;
      }
      let _ = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(r.Gb)({
            factory: y,
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      function y(t) {
        const e = Object(r.Ub)(u).location;
        return new w(Object(r.Ub)(c), (e && e.origin) || '');
      }
      const v = new r.q('appBaseHref');
      let w = (() => {
          class t extends _ {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
                );
              this._baseHref = e;
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return m(this._baseHref, t);
            }
            path(t = !1) {
              const e =
                  this._platformLocation.pathname +
                  b(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + b(r));
              this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + b(r));
              this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Ub(c), r.Ub(v, 8));
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        C = (() => {
          class t extends _ {
            constructor(t, e) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ''),
                null != e && (this._baseHref = e);
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = m(this._baseHref, t);
              return e.length > 0 ? '#' + e : e;
            }
            pushState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + b(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + b(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Ub(c), r.Ub(v, 8));
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        E = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new r.n()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = g(D(n))),
                this._platformStrategy.onPopState((t) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type
                  });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = '') {
              return this.path() == this.normalize(t + b(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, D(e))
              );
            }
            prepareExternalUrl(t) {
              return (
                t && '/' !== t[0] && (t = '/' + t),
                this._platformStrategy.prepareExternalUrl(t)
              );
            }
            go(t, e = '', n = null) {
              this._platformStrategy.pushState(n, '', t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + b(e)),
                  n
                );
            }
            replaceState(t, e = '', n = null) {
              this._platformStrategy.replaceState(n, '', t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + b(e)),
                  n
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((t) => {
                    this._notifyUrlChangeListeners(t.url, t.state);
                  }));
            }
            _notifyUrlChangeListeners(t = '', e) {
              this._urlChangeListeners.forEach((n) => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({
                next: t,
                error: e,
                complete: n
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Ub(_), r.Ub(c));
            }),
            (t.normalizeQueryParams = b),
            (t.joinWithSlash = m),
            (t.stripTrailingSlash = g),
            (t.ɵprov = Object(r.Gb)({
              factory: S,
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })();
      function S() {
        return new E(Object(r.Ub)(_), Object(r.Ub)(c));
      }
      function D(t) {
        return t.replace(/\/index.html$/, '');
      }
      var A = (function (t) {
          return (
            (t[(t.Zero = 0)] = 'Zero'),
            (t[(t.One = 1)] = 'One'),
            (t[(t.Two = 2)] = 'Two'),
            (t[(t.Few = 3)] = 'Few'),
            (t[(t.Many = 4)] = 'Many'),
            (t[(t.Other = 5)] = 'Other'),
            t
          );
        })({}),
        x = (function (t) {
          return (
            (t[(t.Format = 0)] = 'Format'),
            (t[(t.Standalone = 1)] = 'Standalone'),
            t
          );
        })({}),
        O = (function (t) {
          return (
            (t[(t.Narrow = 0)] = 'Narrow'),
            (t[(t.Abbreviated = 1)] = 'Abbreviated'),
            (t[(t.Wide = 2)] = 'Wide'),
            (t[(t.Short = 3)] = 'Short'),
            t
          );
        })({}),
        k = (function (t) {
          return (
            (t[(t.Short = 0)] = 'Short'),
            (t[(t.Medium = 1)] = 'Medium'),
            (t[(t.Long = 2)] = 'Long'),
            (t[(t.Full = 3)] = 'Full'),
            t
          );
        })({}),
        T = (function (t) {
          return (
            (t[(t.Decimal = 0)] = 'Decimal'),
            (t[(t.Group = 1)] = 'Group'),
            (t[(t.List = 2)] = 'List'),
            (t[(t.PercentSign = 3)] = 'PercentSign'),
            (t[(t.PlusSign = 4)] = 'PlusSign'),
            (t[(t.MinusSign = 5)] = 'MinusSign'),
            (t[(t.Exponential = 6)] = 'Exponential'),
            (t[(t.SuperscriptingExponent = 7)] = 'SuperscriptingExponent'),
            (t[(t.PerMille = 8)] = 'PerMille'),
            (t[(t[1 / 0] = 9)] = 'Infinity'),
            (t[(t.NaN = 10)] = 'NaN'),
            (t[(t.TimeSeparator = 11)] = 'TimeSeparator'),
            (t[(t.CurrencyDecimal = 12)] = 'CurrencyDecimal'),
            (t[(t.CurrencyGroup = 13)] = 'CurrencyGroup'),
            t
          );
        })({});
      function F(t, e) {
        return L(Object(r.jb)(t)[r.ab.DateFormat], e);
      }
      function j(t, e) {
        return L(Object(r.jb)(t)[r.ab.TimeFormat], e);
      }
      function I(t, e) {
        return L(Object(r.jb)(t)[r.ab.DateTimeFormat], e);
      }
      function R(t, e) {
        const n = Object(r.jb)(t),
          s = n[r.ab.NumberSymbols][e];
        if (void 0 === s) {
          if (e === T.CurrencyDecimal) return n[r.ab.NumberSymbols][T.Decimal];
          if (e === T.CurrencyGroup) return n[r.ab.NumberSymbols][T.Group];
        }
        return s;
      }
      const P = r.mb;
      function N(t) {
        if (!t[r.ab.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              t[r.ab.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function L(t, e) {
        for (let n = e; n > -1; n--) if (void 0 !== t[n]) return t[n];
        throw new Error('Locale data API: locale data undefined');
      }
      function M(t) {
        const [e, n] = t.split(':');
        return { hours: +e, minutes: +n };
      }
      const V = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        B = {},
        U = /((?:[^GyYMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
      var z = (function (t) {
          return (
            (t[(t.Short = 0)] = 'Short'),
            (t[(t.ShortGMT = 1)] = 'ShortGMT'),
            (t[(t.Long = 2)] = 'Long'),
            (t[(t.Extended = 3)] = 'Extended'),
            t
          );
        })({}),
        H = (function (t) {
          return (
            (t[(t.FullYear = 0)] = 'FullYear'),
            (t[(t.Month = 1)] = 'Month'),
            (t[(t.Date = 2)] = 'Date'),
            (t[(t.Hours = 3)] = 'Hours'),
            (t[(t.Minutes = 4)] = 'Minutes'),
            (t[(t.Seconds = 5)] = 'Seconds'),
            (t[(t.FractionalSeconds = 6)] = 'FractionalSeconds'),
            (t[(t.Day = 7)] = 'Day'),
            t
          );
        })({}),
        q = (function (t) {
          return (
            (t[(t.DayPeriods = 0)] = 'DayPeriods'),
            (t[(t.Days = 1)] = 'Days'),
            (t[(t.Months = 2)] = 'Months'),
            (t[(t.Eras = 3)] = 'Eras'),
            t
          );
        })({});
      function K(t, e, n, r) {
        let s = (function (t) {
          if (rt(t)) return t;
          if ('number' == typeof t && !isNaN(t)) return new Date(t);
          if ('string' == typeof t) {
            t = t.trim();
            const e = parseFloat(t);
            if (!isNaN(t - e)) return new Date(e);
            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
              const [e, n, r] = t.split('-').map((t) => +t);
              return new Date(e, n - 1, r);
            }
            let n;
            if ((n = t.match(V)))
              return (function (t) {
                const e = new Date(0);
                let n = 0,
                  r = 0;
                const s = t[8] ? e.setUTCFullYear : e.setFullYear,
                  i = t[8] ? e.setUTCHours : e.setHours;
                t[9] &&
                  ((n = Number(t[9] + t[10])), (r = Number(t[9] + t[11]))),
                  s.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                const o = Number(t[4] || 0) - n,
                  a = Number(t[5] || 0) - r,
                  u = Number(t[6] || 0),
                  c = Math.floor(1e3 * parseFloat('0.' + (t[7] || 0)));
                return i.call(e, o, a, u, c), e;
              })(n);
          }
          const e = new Date(t);
          if (!rt(e)) throw new Error(`Unable to convert "${t}" into a date`);
          return e;
        })(t);
        e = $(n, e) || e;
        let i,
          o = [];
        for (; e; ) {
          if (((i = U.exec(e)), !i)) {
            o.push(e);
            break;
          }
          {
            o = o.concat(i.slice(1));
            const t = o.pop();
            if (!t) break;
            e = t;
          }
        }
        let a = s.getTimezoneOffset();
        r &&
          ((a = nt(r, a)),
          (s = (function (t, e, n) {
            const r = t.getTimezoneOffset();
            return (function (t, e) {
              return (
                (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t
              );
            })(t, -1 * (nt(e, r) - r));
          })(s, r)));
        let u = '';
        return (
          o.forEach((t) => {
            const e = (function (t) {
              if (et[t]) return et[t];
              let e;
              switch (t) {
                case 'G':
                case 'GG':
                case 'GGG':
                  e = Z(q.Eras, O.Abbreviated);
                  break;
                case 'GGGG':
                  e = Z(q.Eras, O.Wide);
                  break;
                case 'GGGGG':
                  e = Z(q.Eras, O.Narrow);
                  break;
                case 'y':
                  e = Q(H.FullYear, 1, 0, !1, !0);
                  break;
                case 'yy':
                  e = Q(H.FullYear, 2, 0, !0, !0);
                  break;
                case 'yyy':
                  e = Q(H.FullYear, 3, 0, !1, !0);
                  break;
                case 'yyyy':
                  e = Q(H.FullYear, 4, 0, !1, !0);
                  break;
                case 'Y':
                  e = tt(1);
                  break;
                case 'YY':
                  e = tt(2, !0);
                  break;
                case 'YYY':
                  e = tt(3);
                  break;
                case 'YYYY':
                  e = tt(4);
                  break;
                case 'M':
                case 'L':
                  e = Q(H.Month, 1, 1);
                  break;
                case 'MM':
                case 'LL':
                  e = Q(H.Month, 2, 1);
                  break;
                case 'MMM':
                  e = Z(q.Months, O.Abbreviated);
                  break;
                case 'MMMM':
                  e = Z(q.Months, O.Wide);
                  break;
                case 'MMMMM':
                  e = Z(q.Months, O.Narrow);
                  break;
                case 'LLL':
                  e = Z(q.Months, O.Abbreviated, x.Standalone);
                  break;
                case 'LLLL':
                  e = Z(q.Months, O.Wide, x.Standalone);
                  break;
                case 'LLLLL':
                  e = Z(q.Months, O.Narrow, x.Standalone);
                  break;
                case 'w':
                  e = J(1);
                  break;
                case 'ww':
                  e = J(2);
                  break;
                case 'W':
                  e = J(1, !0);
                  break;
                case 'd':
                  e = Q(H.Date, 1);
                  break;
                case 'dd':
                  e = Q(H.Date, 2);
                  break;
                case 'E':
                case 'EE':
                case 'EEE':
                  e = Z(q.Days, O.Abbreviated);
                  break;
                case 'EEEE':
                  e = Z(q.Days, O.Wide);
                  break;
                case 'EEEEE':
                  e = Z(q.Days, O.Narrow);
                  break;
                case 'EEEEEE':
                  e = Z(q.Days, O.Short);
                  break;
                case 'a':
                case 'aa':
                case 'aaa':
                  e = Z(q.DayPeriods, O.Abbreviated);
                  break;
                case 'aaaa':
                  e = Z(q.DayPeriods, O.Wide);
                  break;
                case 'aaaaa':
                  e = Z(q.DayPeriods, O.Narrow);
                  break;
                case 'b':
                case 'bb':
                case 'bbb':
                  e = Z(q.DayPeriods, O.Abbreviated, x.Standalone, !0);
                  break;
                case 'bbbb':
                  e = Z(q.DayPeriods, O.Wide, x.Standalone, !0);
                  break;
                case 'bbbbb':
                  e = Z(q.DayPeriods, O.Narrow, x.Standalone, !0);
                  break;
                case 'B':
                case 'BB':
                case 'BBB':
                  e = Z(q.DayPeriods, O.Abbreviated, x.Format, !0);
                  break;
                case 'BBBB':
                  e = Z(q.DayPeriods, O.Wide, x.Format, !0);
                  break;
                case 'BBBBB':
                  e = Z(q.DayPeriods, O.Narrow, x.Format, !0);
                  break;
                case 'h':
                  e = Q(H.Hours, 1, -12);
                  break;
                case 'hh':
                  e = Q(H.Hours, 2, -12);
                  break;
                case 'H':
                  e = Q(H.Hours, 1);
                  break;
                case 'HH':
                  e = Q(H.Hours, 2);
                  break;
                case 'm':
                  e = Q(H.Minutes, 1);
                  break;
                case 'mm':
                  e = Q(H.Minutes, 2);
                  break;
                case 's':
                  e = Q(H.Seconds, 1);
                  break;
                case 'ss':
                  e = Q(H.Seconds, 2);
                  break;
                case 'S':
                  e = Q(H.FractionalSeconds, 1);
                  break;
                case 'SS':
                  e = Q(H.FractionalSeconds, 2);
                  break;
                case 'SSS':
                  e = Q(H.FractionalSeconds, 3);
                  break;
                case 'Z':
                case 'ZZ':
                case 'ZZZ':
                  e = X(z.Short);
                  break;
                case 'ZZZZZ':
                  e = X(z.Extended);
                  break;
                case 'O':
                case 'OO':
                case 'OOO':
                case 'z':
                case 'zz':
                case 'zzz':
                  e = X(z.ShortGMT);
                  break;
                case 'OOOO':
                case 'ZZZZ':
                case 'zzzz':
                  e = X(z.Long);
                  break;
                default:
                  return null;
              }
              return (et[t] = e), e;
            })(t);
            u += e
              ? e(s, n, a)
              : "''" === t
              ? "'"
              : t.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          }),
          u
        );
      }
      function $(t, e) {
        const n = (function (t) {
          return Object(r.jb)(t)[r.ab.LocaleId];
        })(t);
        if (((B[n] = B[n] || {}), B[n][e])) return B[n][e];
        let s = '';
        switch (e) {
          case 'shortDate':
            s = F(t, k.Short);
            break;
          case 'mediumDate':
            s = F(t, k.Medium);
            break;
          case 'longDate':
            s = F(t, k.Long);
            break;
          case 'fullDate':
            s = F(t, k.Full);
            break;
          case 'shortTime':
            s = j(t, k.Short);
            break;
          case 'mediumTime':
            s = j(t, k.Medium);
            break;
          case 'longTime':
            s = j(t, k.Long);
            break;
          case 'fullTime':
            s = j(t, k.Full);
            break;
          case 'short':
            const e = $(t, 'shortTime'),
              n = $(t, 'shortDate');
            s = G(I(t, k.Short), [e, n]);
            break;
          case 'medium':
            const r = $(t, 'mediumTime'),
              i = $(t, 'mediumDate');
            s = G(I(t, k.Medium), [r, i]);
            break;
          case 'long':
            const o = $(t, 'longTime'),
              a = $(t, 'longDate');
            s = G(I(t, k.Long), [o, a]);
            break;
          case 'full':
            const u = $(t, 'fullTime'),
              c = $(t, 'fullDate');
            s = G(I(t, k.Full), [u, c]);
        }
        return s && (B[n][e] = s), s;
      }
      function G(t, e) {
        return (
          e &&
            (t = t.replace(/\{([^}]+)}/g, function (t, n) {
              return null != e && n in e ? e[n] : t;
            })),
          t
        );
      }
      function W(t, e, n = '-', r, s) {
        let i = '';
        (t < 0 || (s && t <= 0)) && (s ? (t = 1 - t) : ((t = -t), (i = n)));
        let o = String(t);
        for (; o.length < e; ) o = '0' + o;
        return r && (o = o.substr(o.length - e)), i + o;
      }
      function Q(t, e, n = 0, r = !1, s = !1) {
        return function (i, o) {
          let a = (function (t, e) {
            switch (t) {
              case H.FullYear:
                return e.getFullYear();
              case H.Month:
                return e.getMonth();
              case H.Date:
                return e.getDate();
              case H.Hours:
                return e.getHours();
              case H.Minutes:
                return e.getMinutes();
              case H.Seconds:
                return e.getSeconds();
              case H.FractionalSeconds:
                return e.getMilliseconds();
              case H.Day:
                return e.getDay();
              default:
                throw new Error(`Unknown DateType value "${t}".`);
            }
          })(t, i);
          if (((n > 0 || a > -n) && (a += n), t === H.Hours))
            0 === a && -12 === n && (a = 12);
          else if (t === H.FractionalSeconds)
            return (u = e), W(a, 3).substr(0, u);
          var u;
          const c = R(o, T.MinusSign);
          return W(a, e, c, r, s);
        };
      }
      function Z(t, e, n = x.Format, s = !1) {
        return function (i, o) {
          return (function (t, e, n, s, i, o) {
            switch (n) {
              case q.Months:
                return (function (t, e, n) {
                  const s = Object(r.jb)(t),
                    i = L([s[r.ab.MonthsFormat], s[r.ab.MonthsStandalone]], e);
                  return L(i, n);
                })(e, i, s)[t.getMonth()];
              case q.Days:
                return (function (t, e, n) {
                  const s = Object(r.jb)(t),
                    i = L([s[r.ab.DaysFormat], s[r.ab.DaysStandalone]], e);
                  return L(i, n);
                })(e, i, s)[t.getDay()];
              case q.DayPeriods:
                const a = t.getHours(),
                  u = t.getMinutes();
                if (o) {
                  const t = (function (t) {
                      const e = Object(r.jb)(t);
                      return (
                        N(e),
                        (e[r.ab.ExtraData][2] || []).map((t) =>
                          'string' == typeof t ? M(t) : [M(t[0]), M(t[1])]
                        )
                      );
                    })(e),
                    n = (function (t, e, n) {
                      const s = Object(r.jb)(t);
                      N(s);
                      const i =
                        L([s[r.ab.ExtraData][0], s[r.ab.ExtraData][1]], e) ||
                        [];
                      return L(i, n) || [];
                    })(e, i, s),
                    o = t.findIndex((t) => {
                      if (Array.isArray(t)) {
                        const [e, n] = t,
                          r = a >= e.hours && u >= e.minutes,
                          s = a < n.hours || (a === n.hours && u < n.minutes);
                        if (e.hours < n.hours) {
                          if (r && s) return !0;
                        } else if (r || s) return !0;
                      } else if (t.hours === a && t.minutes === u) return !0;
                      return !1;
                    });
                  if (-1 !== o) return n[o];
                }
                return (function (t, e, n) {
                  const s = Object(r.jb)(t),
                    i = L(
                      [s[r.ab.DayPeriodsFormat], s[r.ab.DayPeriodsStandalone]],
                      e
                    );
                  return L(i, n);
                })(e, i, s)[a < 12 ? 0 : 1];
              case q.Eras:
                return (function (t, e) {
                  return L(Object(r.jb)(t)[r.ab.Eras], e);
                })(e, s)[t.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error('unexpected translation type ' + n);
            }
          })(i, o, t, e, n, s);
        };
      }
      function X(t) {
        return function (e, n, r) {
          const s = -1 * r,
            i = R(n, T.MinusSign),
            o = s > 0 ? Math.floor(s / 60) : Math.ceil(s / 60);
          switch (t) {
            case z.Short:
              return (
                (s >= 0 ? '+' : '') + W(o, 2, i) + W(Math.abs(s % 60), 2, i)
              );
            case z.ShortGMT:
              return 'GMT' + (s >= 0 ? '+' : '') + W(o, 1, i);
            case z.Long:
              return (
                'GMT' +
                (s >= 0 ? '+' : '') +
                W(o, 2, i) +
                ':' +
                W(Math.abs(s % 60), 2, i)
              );
            case z.Extended:
              return 0 === r
                ? 'Z'
                : (s >= 0 ? '+' : '') +
                    W(o, 2, i) +
                    ':' +
                    W(Math.abs(s % 60), 2, i);
            default:
              throw new Error(`Unknown zone width "${t}"`);
          }
        };
      }
      function Y(t) {
        return new Date(
          t.getFullYear(),
          t.getMonth(),
          t.getDate() + (4 - t.getDay())
        );
      }
      function J(t, e = !1) {
        return function (n, r) {
          let s;
          if (e) {
            const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
              e = n.getDate();
            s = 1 + Math.floor((e + t) / 7);
          } else {
            const t = Y(n),
              e = (function (t) {
                const e = new Date(t, 0, 1).getDay();
                return new Date(t, 0, 1 + (e <= 4 ? 4 : 11) - e);
              })(t.getFullYear()),
              r = t.getTime() - e.getTime();
            s = 1 + Math.round(r / 6048e5);
          }
          return W(s, t, R(r, T.MinusSign));
        };
      }
      function tt(t, e = !1) {
        return function (n, r) {
          return W(Y(n).getFullYear(), t, R(r, T.MinusSign), e);
        };
      }
      const et = {};
      function nt(t, e) {
        t = t.replace(/:/g, '');
        const n = Date.parse('Jan 01, 1970 00:00:00 ' + t) / 6e4;
        return isNaN(n) ? e : n;
      }
      function rt(t) {
        return t instanceof Date && !isNaN(t.valueOf());
      }
      class st {}
      let it = (() => {
        class t extends st {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, e) {
            switch (P(e || this.locale)(t)) {
              case A.Zero:
                return 'zero';
              case A.One:
                return 'one';
              case A.Two:
                return 'two';
              case A.Few:
                return 'few';
              case A.Many:
                return 'many';
              default:
                return 'other';
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Ub(r.u));
          }),
          (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function ot(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(';')) {
          const t = n.indexOf('='),
            [r, s] = -1 == t ? [n, ''] : [n.slice(0, t), n.slice(t + 1)];
          if (r.trim() === e) return decodeURIComponent(s);
        }
        return null;
      }
      let at = (() => {
        class t {
          constructor(t, e, n, r) {
            (this._iterableDiffers = t),
              (this._keyValueDiffers = e),
              (this._ngEl = n),
              (this._renderer = r),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(t) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                'string' == typeof t ? t.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(t) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = 'string' == typeof t ? t.split(/\s+/) : t),
              this._rawClass &&
                (Object(r.pb)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const t = this._iterableDiffer.diff(this._rawClass);
              t && this._applyIterableChanges(t);
            } else if (this._keyValueDiffer) {
              const t = this._keyValueDiffer.diff(this._rawClass);
              t && this._applyKeyValueChanges(t);
            }
          }
          _applyKeyValueChanges(t) {
            t.forEachAddedItem((t) => this._toggleClass(t.key, t.currentValue)),
              t.forEachChangedItem((t) =>
                this._toggleClass(t.key, t.currentValue)
              ),
              t.forEachRemovedItem((t) => {
                t.previousValue && this._toggleClass(t.key, !1);
              });
          }
          _applyIterableChanges(t) {
            t.forEachAddedItem((t) => {
              if ('string' != typeof t.item)
                throw new Error(
                  'NgClass can only toggle CSS classes expressed as strings, got ' +
                    Object(r.ub)(t.item)
                );
              this._toggleClass(t.item, !0);
            }),
              t.forEachRemovedItem((t) => this._toggleClass(t.item, !1));
          }
          _applyClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach((t) => this._toggleClass(t, !0))
                : Object.keys(t).forEach((e) => this._toggleClass(e, !!t[e])));
          }
          _removeClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach((t) => this._toggleClass(t, !1))
                : Object.keys(t).forEach((t) => this._toggleClass(t, !1)));
          }
          _toggleClass(t, e) {
            (t = t.trim()) &&
              t.split(/\s+/g).forEach((t) => {
                e
                  ? this._renderer.addClass(this._ngEl.nativeElement, t)
                  : this._renderer.removeClass(this._ngEl.nativeElement, t);
              });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.s), r.Kb(r.t), r.Kb(r.l), r.Kb(r.E));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [['', 'ngClass', '']],
            inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' }
          })),
          t
        );
      })();
      class ut {
        constructor(t, e, n, r) {
          (this.$implicit = t),
            (this.ngForOf = e),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let ct = (() => {
        class t {
          constructor(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            this._trackByFn = t;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs
                    .find(n)
                    .create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${
                      ((t = n), t.name || typeof t)
                    }'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var t;
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const e = [];
            t.forEachOperation((t, n, r) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new ut(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  s = new lt(t, n);
                e.push(s);
              } else if (null == r)
                this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new lt(t, s);
                e.push(i);
              }
            });
            for (let n = 0; n < e.length; n++)
              this._perViewChange(e[n].view, e[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const t = this._viewContainer.get(n);
              (t.context.index = n),
                (t.context.count = r),
                (t.context.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((t) => {
              this._viewContainer.get(t.currentIndex).context.$implicit =
                t.item;
            });
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.P), r.Kb(r.L), r.Kb(r.s));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate'
            }
          })),
          t
        );
      })();
      class lt {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      let ht = (() => {
        class t {
          constructor(t, e) {
            (this._viewContainer = t),
              (this._context = new dt()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t),
              this._updateView();
          }
          set ngIfThen(t) {
            ft('ngIfThen', t),
              (this._thenTemplateRef = t),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(t) {
            ft('ngIfElse', t),
              (this._elseTemplateRef = t),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.P), r.Kb(r.L));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [['', 'ngIf', '']],
            inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' }
          })),
          t
        );
      })();
      class dt {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function ft(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(
            `${t} must be a TemplateRef, but received '${Object(r.ub)(e)}'.`
          );
      }
      class pt {
        constructor(t, e) {
          (this._viewContainerRef = t),
            (this._templateRef = e),
            (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(t) {
          t && !this._created
            ? this.create()
            : !t && this._created && this.destroy();
        }
      }
      let mt = (() => {
          class t {
            constructor() {
              (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(t) {
              (this._ngSwitch = t),
                0 === this._caseCount && this._updateDefaultCases(!0);
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(t) {
              this._defaultViews || (this._defaultViews = []),
                this._defaultViews.push(t);
            }
            _matchCase(t) {
              const e = t == this._ngSwitch;
              return (
                (this._lastCasesMatched = this._lastCasesMatched || e),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                e
              );
            }
            _updateDefaultCases(t) {
              if (this._defaultViews && t !== this._defaultUsed) {
                this._defaultUsed = t;
                for (let e = 0; e < this._defaultViews.length; e++)
                  this._defaultViews[e].enforceState(t);
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [['', 'ngSwitch', '']],
              inputs: { ngSwitch: 'ngSwitch' }
            })),
            t
          );
        })(),
        gt = (() => {
          class t {
            constructor(t, e, n) {
              (this.ngSwitch = n), n._addCase(), (this._view = new pt(t, e));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase)
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(r.P), r.Kb(r.L), r.Kb(mt, 1));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [['', 'ngSwitchCase', '']],
              inputs: { ngSwitchCase: 'ngSwitchCase' }
            })),
            t
          );
        })(),
        bt = (() => {
          class t {
            constructor(t, e, n) {
              n._addDefault(new pt(t, e));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(r.P), r.Kb(r.L), r.Kb(mt, 1));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [['', 'ngSwitchDefault', '']]
            })),
            t
          );
        })();
      function _t(t, e) {
        return Error(
          `InvalidPipeArgument: '${e}' for pipe '${Object(r.ub)(t)}'`
        );
      }
      class yt {
        createSubscription(t, e) {
          return t.subscribe({
            next: e,
            error: (t) => {
              throw t;
            }
          });
        }
        dispose(t) {
          t.unsubscribe();
        }
        onDestroy(t) {
          t.unsubscribe();
        }
      }
      class vt {
        createSubscription(t, e) {
          return t.then(e, (t) => {
            throw t;
          });
        }
        dispose(t) {}
        onDestroy(t) {}
      }
      const wt = new vt(),
        Ct = new yt();
      let Et = (() => {
          class t {
            constructor(t) {
              (this._ref = t),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null);
            }
            ngOnDestroy() {
              this._subscription && this._dispose();
            }
            transform(t) {
              return this._obj
                ? t !== this._obj
                  ? (this._dispose(), this.transform(t))
                  : this._latestValue
                : (t && this._subscribe(t), this._latestValue);
            }
            _subscribe(t) {
              (this._obj = t),
                (this._strategy = this._selectStrategy(t)),
                (this._subscription = this._strategy.createSubscription(
                  t,
                  (e) => this._updateLatestValue(t, e)
                ));
            }
            _selectStrategy(e) {
              if (Object(r.rb)(e)) return wt;
              if (Object(r.qb)(e)) return Ct;
              throw _t(t, e);
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(t, e) {
              t === this._obj &&
                ((this._latestValue = e), this._ref.markForCheck());
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Wb());
            }),
            (t.ɵpipe = r.Jb({ name: 'async', type: t, pure: !1 })),
            t
          );
        })(),
        St = (() => {
          class t {
            transform(e) {
              if (null == e) return null;
              if ('string' != typeof e) throw _t(t, e);
              return e.toLowerCase();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵpipe = r.Jb({ name: 'lowercase', type: t, pure: !0 })),
            t
          );
        })();
      const Dt = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g;
      let At = (() => {
          class t {
            transform(e) {
              if (null == e) return null;
              if ('string' != typeof e) throw _t(t, e);
              return e.replace(
                Dt,
                (t) => t[0].toUpperCase() + t.substr(1).toLowerCase()
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵpipe = r.Jb({ name: 'titlecase', type: t, pure: !0 })),
            t
          );
        })(),
        xt = (() => {
          class t {
            constructor(t) {
              this.locale = t;
            }
            transform(e, n = 'mediumDate', r, s) {
              if (null == e || '' === e || e != e) return null;
              try {
                return K(e, n, s || this.locale, r);
              } catch (i) {
                throw _t(t, i.message);
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(r.u));
            }),
            (t.ɵpipe = r.Jb({ name: 'date', type: t, pure: !0 })),
            t
          );
        })(),
        Ot = (() => {
          class t {
            transform(e, n, r) {
              if (null == e) return null;
              if (!this.supports(e)) throw _t(t, e);
              return e.slice(n, r);
            }
            supports(t) {
              return 'string' == typeof t || Array.isArray(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵpipe = r.Jb({ name: 'slice', type: t, pure: !1 })),
            t
          );
        })(),
        kt = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [{ provide: st, useClass: it }]
            })),
            t
          );
        })();
      const Tt = 'browser';
      function Ft(t) {
        return t === Tt;
      }
      function jt(t) {
        return 'server' === t;
      }
      let It = (() => {
        class t {}
        return (
          (t.ɵprov = Object(r.Gb)({
            token: t,
            providedIn: 'root',
            factory: () => new Rt(Object(r.Ub)(u), window)
          })),
          t
        );
      })();
      class Rt {
        constructor(t, e) {
          (this.document = t), (this.window = e), (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportsScrolling() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          var e;
          if (!this.supportsScrolling()) return;
          const n =
            null !== (e = this.document.getElementById(t)) && void 0 !== e
              ? e
              : this.document.getElementsByName(t)[0];
          void 0 !== n && (this.scrollToElement(n), this.attemptFocus(n));
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        attemptFocus(t) {
          return t.focus(), this.document.activeElement === t;
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const t =
              Pt(this.window.history) ||
              Pt(Object.getPrototypeOf(this.window.history));
            return !(!t || (!t.writable && !t.set));
          } catch (t) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              'pageXOffset' in this.window
            );
          } catch (t) {
            return !1;
          }
        }
      }
      function Pt(t) {
        return Object.getOwnPropertyDescriptor(t, 'scrollRestoration');
      }
    },
    pLZG: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('7o/Q');
      function s(t, e) {
        return function (n) {
          return n.lift(new i(t, e));
        };
      }
      class i {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new o(t, this.predicate, this.thisArg));
        }
      }
      class o extends r.a {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
    },
    quSY: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('DH7j'),
        s = n('XoHu'),
        i = n('n6bG');
      const o = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join('\n  ')}`
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let a = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _ctorUnsubscribe: a,
              _unsubscribe: c,
              _subscriptions: l
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof t)
            )
              n.remove(this);
            else if (null !== n)
              for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (Object(i.a)(c)) {
              a && (this._unsubscribe = void 0);
              try {
                c.call(this);
              } catch (h) {
                e = h instanceof o ? u(h.errors) : [h];
              }
            }
            if (Object(r.a)(l)) {
              let t = -1,
                n = l.length;
              for (; ++t < n; ) {
                const n = l[t];
                if (Object(s.a)(n))
                  try {
                    n.unsubscribe();
                  } catch (h) {
                    (e = e || []),
                      h instanceof o ? (e = e.concat(u(h.errors))) : e.push(h);
                  }
              }
            }
            if (e) throw new o(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case 'function':
                n = new t(e);
              case 'object':
                if (
                  n === this ||
                  n.closed ||
                  'function' != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error(
                  'unrecognized teardown ' + e + ' added to Subscription.'
                );
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof t) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        var e;
        return (t.EMPTY = (((e = new t()).closed = !0), e)), t;
      })();
      function u(t) {
        return t.reduce((t, e) => t.concat(e instanceof o ? e.errors : e), []);
      }
    },
    tyNb: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return ne;
      }),
        n.d(e, 'b', function () {
          return tt;
        }),
        n.d(e, 'c', function () {
          return Cn;
        }),
        n.d(e, 'd', function () {
          return En;
        }),
        n.d(e, 'e', function () {
          return Pn;
        }),
        n.d(e, 'f', function () {
          return Dn;
        });
      var r = n('ofXK'),
        s = n('fXoL'),
        i = n('Cfvw'),
        o = n('LRne'),
        a = n('2Vo4'),
        u = n('z+Ro'),
        c = n('DH7j'),
        l = n('7o/Q');
      class h extends l.a {
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
      class d extends l.a {
        constructor(t, e, n) {
          super(),
            (this.parent = t),
            (this.outerValue = e),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      var f = n('SeVD'),
        p = n('HDdC');
      function m(t, e, n, r, s = new d(t, n, r)) {
        if (!s.closed)
          return e instanceof p.a ? e.subscribe(s) : Object(f.a)(e)(s);
      }
      var g = n('yCtX');
      const b = {};
      class _ {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new y(t, this.resultSelector));
        }
      }
      class y extends h {
        constructor(t, e) {
          super(t),
            (this.resultSelector = e),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(t) {
          this.values.push(b), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) this.add(m(this, t[n], void 0, n));
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n) {
          const r = this.values,
            s = this.toRespond
              ? r[n] === b
                ? --this.toRespond
                : this.toRespond
              : 0;
          (r[n] = e),
            0 === s &&
              (this.resultSelector
                ? this._tryResultSelector(r)
                : this.destination.next(r.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const v = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = 'no elements in sequence'),
            (this.name = 'EmptyError'),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      var w = n('GyhO'),
        C = n('NXyV'),
        E = n('EY2u'),
        S = n('XNiG'),
        D = n('lJxs'),
        A = n('eIep'),
        x = n('IzEk'),
        O = n('JX91');
      function k(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new T(t, e, n));
          }
        );
      }
      class T {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(
            new F(t, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class F extends l.a {
        constructor(t, e, n, r) {
          super(t),
            (this.accumulator = e),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      var j = n('pLZG'),
        I = n('JIr8'),
        R = n('bOdf'),
        P = n('4I5i');
      function N(t) {
        return function (e) {
          return 0 === t ? Object(E.b)() : e.lift(new L(t));
        };
      }
      class L {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new P.a();
        }
        call(t, e) {
          return e.subscribe(new M(t, this.total));
        }
      }
      class M extends l.a {
        constructor(t, e) {
          super(t),
            (this.total = e),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = e++ % n;
              t.next(r[s]);
            }
          }
          t.complete();
        }
      }
      function V(t = z) {
        return (e) => e.lift(new B(t));
      }
      class B {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new U(t, this.errorFactory));
        }
      }
      class U extends l.a {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function z() {
        return new v();
      }
      function H(t = null) {
        return (e) => e.lift(new q(t));
      }
      class q {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new K(t, this.defaultValue));
        }
      }
      class K extends l.a {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      var $ = n('SpAZ');
      function G(t, e) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            t ? Object(j.a)((e, n) => t(e, n, r)) : $.a,
            Object(x.a)(1),
            n ? H(e) : V(() => new v())
          );
      }
      var W = n('5+tZ'),
        Q = n('vkgz'),
        Z = n('nYR2'),
        X = n('bHdf');
      class Y {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class J extends Y {
        constructor(t, e, n = 'imperative', r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class tt extends Y {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class et extends Y {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class nt extends Y {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class rt extends Y {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class st extends Y {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class it extends Y {
        constructor(t, e, n, r, s) {
          super(t, e),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class ot extends Y {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class at extends Y {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ut {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class ct {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class lt {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class ht {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class dt {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class ft {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class pt {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class mt {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return Object.prototype.hasOwnProperty.call(this.params, t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function gt(t) {
        return new mt(t);
      }
      function bt(t) {
        const e = Error('NavigationCancelingError: ' + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function _t(t, e, n) {
        const r = n.path.split('/');
        if (r.length > t.length) return null;
        if ('full' === n.pathMatch && (e.hasChildren() || r.length < t.length))
          return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const e = r[i],
            n = t[i];
          if (e.startsWith(':')) s[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: s };
      }
      function yt(t, e) {
        const n = Object.keys(t),
          r = Object.keys(e);
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++)
          if (((s = n[i]), !vt(t[s], e[s]))) return !1;
        return !0;
      }
      function vt(t, e) {
        if (Array.isArray(t) && Array.isArray(e)) {
          if (t.length !== e.length) return !1;
          const n = [...t].sort(),
            r = [...e].sort();
          return n.every((t, e) => r[e] === t);
        }
        return t === e;
      }
      function wt(t) {
        return Array.prototype.concat.apply([], t);
      }
      function Ct(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function Et(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function St(t) {
        return Object(s.qb)(t)
          ? t
          : Object(s.rb)(t)
          ? Object(i.a)(Promise.resolve(t))
          : Object(o.a)(t);
      }
      function Dt(t, e, n) {
        return n
          ? (function (t, e) {
              return yt(t, e);
            })(t.queryParams, e.queryParams) && At(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every((n) => vt(t[n], e[n]))
              );
            })(t.queryParams, e.queryParams) && xt(t.root, e.root);
      }
      function At(t, e) {
        if (!jt(t.segments, e.segments)) return !1;
        if (t.numberOfChildren !== e.numberOfChildren) return !1;
        for (const n in e.children) {
          if (!t.children[n]) return !1;
          if (!At(t.children[n], e.children[n])) return !1;
        }
        return !0;
      }
      function xt(t, e) {
        return Ot(t, e, e.segments);
      }
      function Ot(t, e, n) {
        if (t.segments.length > n.length)
          return !!jt(t.segments.slice(0, n.length), n) && !e.hasChildren();
        if (t.segments.length === n.length) {
          if (!jt(t.segments, n)) return !1;
          for (const n in e.children) {
            if (!t.children[n]) return !1;
            if (!xt(t.children[n], e.children[n])) return !1;
          }
          return !0;
        }
        {
          const r = n.slice(0, t.segments.length),
            s = n.slice(t.segments.length);
          return (
            !!jt(t.segments, r) &&
            !!t.children.primary &&
            Ot(t.children.primary, e, s)
          );
        }
      }
      class kt {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = gt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Pt.serialize(this);
        }
      }
      class Tt {
        constructor(t, e) {
          (this.segments = t),
            (this.children = e),
            (this.parent = null),
            Et(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Nt(this);
        }
      }
      class Ft {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = gt(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Ht(this);
        }
      }
      function jt(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      class It {}
      class Rt {
        parse(t) {
          const e = new Wt(t);
          return new kt(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment()
          );
        }
        serialize(t) {
          return `${'/' + Lt(t.root, !0)}${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e];
              return Array.isArray(n)
                ? n.map((t) => `${Vt(e)}=${Vt(t)}`).join('&')
                : `${Vt(e)}=${Vt(n)}`;
            });
            return e.length ? '?' + e.join('&') : '';
          })(t.queryParams)}${
            'string' == typeof t.fragment ? '#' + encodeURI(t.fragment) : ''
          }`;
        }
      }
      const Pt = new Rt();
      function Nt(t) {
        return t.segments.map((t) => Ht(t)).join('/');
      }
      function Lt(t, e) {
        if (!t.hasChildren()) return Nt(t);
        if (e) {
          const e = t.children.primary ? Lt(t.children.primary, !1) : '',
            n = [];
          return (
            Et(t.children, (t, e) => {
              'primary' !== e && n.push(`${e}:${Lt(t, !1)}`);
            }),
            n.length > 0 ? `${e}(${n.join('//')})` : e
          );
        }
        {
          const e = (function (t, e) {
            let n = [];
            return (
              Et(t.children, (t, r) => {
                'primary' === r && (n = n.concat(e(t, r)));
              }),
              Et(t.children, (t, r) => {
                'primary' !== r && (n = n.concat(e(t, r)));
              }),
              n
            );
          })(t, (e, n) =>
            'primary' === n
              ? [Lt(t.children.primary, !1)]
              : [`${n}:${Lt(e, !1)}`]
          );
          return 1 === Object.keys(t.children).length &&
            null != t.children.primary
            ? `${Nt(t)}/${e[0]}`
            : `${Nt(t)}/(${e.join('//')})`;
        }
      }
      function Mt(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Vt(t) {
        return Mt(t).replace(/%3B/gi, ';');
      }
      function Bt(t) {
        return Mt(t)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function Ut(t) {
        return decodeURIComponent(t);
      }
      function zt(t) {
        return Ut(t.replace(/\+/g, '%20'));
      }
      function Ht(t) {
        return `${Bt(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${Bt(t)}=${Bt(e[t])}`)
            .join(''))
        }`;
        var e;
      }
      const qt = /^[^\/()?;=#]+/;
      function Kt(t) {
        const e = t.match(qt);
        return e ? e[0] : '';
      }
      const $t = /^[^=?&#]+/,
        Gt = /^[^?&#]+/;
      class Wt {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new Tt([], {})
              : new Tt([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional('&'));
          return t;
        }
        parseFragment() {
          return this.consumeOptional('#')
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const t = [];
          for (
            this.peekStartsWith('(') || t.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith('/(') &&
            (this.capture('/'), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) &&
              (n.primary = new Tt(t, e)),
            n
          );
        }
        parseSegment() {
          const t = Kt(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(t), new Ft(Ut(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = Kt(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = Kt(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[Ut(e)] = Ut(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match($t);
            return e ? e[0] : '';
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = (function (t) {
              const e = t.match(Gt);
              return e ? e[0] : '';
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = zt(e),
            s = zt(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(s);
          } else t[r] = s;
        }
        parseParens(t) {
          const e = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const n = Kt(this.remaining),
              r = this.remaining[n.length];
            if ('/' !== r && ')' !== r && ';' !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s = void 0;
            n.indexOf(':') > -1
              ? ((s = n.substr(0, n.indexOf(':'))),
                this.capture(s),
                this.capture(':'))
              : t && (s = 'primary');
            const i = this.parseChildren();
            (e[s] = 1 === Object.keys(i).length ? i.primary : new Tt([], i)),
              this.consumeOptional('//');
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class Qt {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = Zt(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = Zt(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = Xt(t, this._root);
          return e.length < 2
            ? []
            : e[e.length - 2].children
                .map((t) => t.value)
                .filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return Xt(t, this._root).map((t) => t.value);
        }
      }
      function Zt(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = Zt(t, n);
          if (e) return e;
        }
        return null;
      }
      function Xt(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = Xt(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class Yt {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Jt(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class te extends Qt {
        constructor(t, e) {
          super(t), (this.snapshot = e), oe(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function ee(t, e) {
        const n = (function (t, e) {
            const n = new se(
              [],
              {},
              {},
              '',
              {},
              'primary',
              e,
              null,
              t.root,
              -1,
              {}
            );
            return new ie('', new Yt(n, []));
          })(t, e),
          r = new a.a([new Ft('', {})]),
          s = new a.a({}),
          i = new a.a({}),
          o = new a.a({}),
          u = new a.a(''),
          c = new ne(r, s, o, u, i, 'primary', e, n.root);
        return (c.snapshot = n.root), new te(new Yt(c, []), n);
      }
      class ne {
        constructor(t, e, n, r, s, i, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(Object(D.a)((t) => gt(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                Object(D.a)((t) => gt(t))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function re(t, e = 'emptyOnly') {
        const n = t.pathFromRoot;
        let r = 0;
        if ('always' !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && '' === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(
                Object.assign({}, t.resolve),
                e._resolvedData
              )
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class se {
        constructor(t, e, n, r, s, i, o, a, u, c, l) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = u),
            (this._lastPathIndex = c),
            (this._resolve = l);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = gt(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = gt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((t) => t.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class ie extends Qt {
        constructor(t, e) {
          super(e), (this.url = t), oe(this, e);
        }
        toString() {
          return ae(this._root);
        }
      }
      function oe(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => oe(t, e));
      }
      function ae(t) {
        const e =
          t.children.length > 0 ? ` { ${t.children.map(ae).join(', ')} } ` : '';
        return `${t.value}${e}`;
      }
      function ue(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            yt(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            yt(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!yt(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            yt(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function ce(t, e) {
        var n, r;
        return (
          yt(t.params, e.params) &&
          jt((n = t.url), (r = e.url)) &&
          n.every((t, e) => yt(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || ce(t.parent, e.parent))
        );
      }
      function le(t, e, n) {
        if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = e.value;
          const s = (function (t, e, n) {
            return e.children.map((e) => {
              for (const r of n.children)
                if (t.shouldReuseRoute(e.value, r.value.snapshot))
                  return le(t, e, r);
              return le(t, e);
            });
          })(t, e, n);
          return new Yt(r, s);
        }
        {
          const n = t.retrieve(e.value);
          if (n) {
            const t = n.route;
            return he(e, t), t;
          }
          {
            const n = new ne(
                new a.a((r = e.value).url),
                new a.a(r.params),
                new a.a(r.queryParams),
                new a.a(r.fragment),
                new a.a(r.data),
                r.outlet,
                r.component,
                r
              ),
              s = e.children.map((e) => le(t, e));
            return new Yt(n, s);
          }
        }
        var r;
      }
      function he(t, e) {
        if (t.value.routeConfig !== e.value.routeConfig)
          throw new Error(
            'Cannot reattach ActivatedRouteSnapshot created from a different route'
          );
        if (t.children.length !== e.children.length)
          throw new Error(
            'Cannot reattach ActivatedRouteSnapshot with a different number of children'
          );
        e.value._futureSnapshot = t.value;
        for (let n = 0; n < t.children.length; ++n)
          he(t.children[n], e.children[n]);
      }
      function de(t) {
        return (
          'object' == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function fe(t) {
        return 'object' == typeof t && null != t && t.outlets;
      }
      function pe(t, e, n, r, s) {
        let i = {};
        return (
          r &&
            Et(r, (t, e) => {
              i[e] = Array.isArray(t) ? t.map((t) => '' + t) : '' + t;
            }),
          new kt(n.root === t ? e : me(n.root, t, e), i, s)
        );
      }
      function me(t, e, n) {
        const r = {};
        return (
          Et(t.children, (t, s) => {
            r[s] = t === e ? n : me(t, e, n);
          }),
          new Tt(t.segments, r)
        );
      }
      class ge {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = n),
            t && n.length > 0 && de(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const r = n.find(fe);
          if (r && r !== Ct(n))
            throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class be {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function _e(t, e, n) {
        if (
          (t || (t = new Tt([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return ye(t, e, n);
        const r = (function (t, e, n) {
            let r = 0,
              s = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < t.segments.length; ) {
              if (r >= n.length) return i;
              const e = t.segments[s],
                o = n[r];
              if (fe(o)) break;
              const a = '' + o,
                u = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === a) break;
              if (a && u && 'object' == typeof u && void 0 === u.outlets) {
                if (!Ee(a, u, e)) return i;
                r += 2;
              } else {
                if (!Ee(a, {}, e)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(t, e, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new Tt(t.segments.slice(0, r.pathIndex), {});
          return (
            (e.children.primary = new Tt(
              t.segments.slice(r.pathIndex),
              t.children
            )),
            ye(e, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new Tt(t.segments, {})
          : r.match && !t.hasChildren()
          ? ve(t, e, n)
          : r.match
          ? ye(t, 0, s)
          : ve(t, e, n);
      }
      function ye(t, e, n) {
        if (0 === n.length) return new Tt(t.segments, {});
        {
          const r = (function (t) {
              return fe(t[0]) ? t[0].outlets : { primary: t };
            })(n),
            s = {};
          return (
            Et(r, (n, r) => {
              'string' == typeof n && (n = [n]),
                null !== n && (s[r] = _e(t.children[r], e, n));
            }),
            Et(t.children, (t, e) => {
              void 0 === r[e] && (s[e] = t);
            }),
            new Tt(t.segments, s)
          );
        }
      }
      function ve(t, e, n) {
        const r = t.segments.slice(0, e);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if (fe(i)) {
            const t = we(i.outlets);
            return new Tt(r, t);
          }
          if (0 === s && de(n[0])) {
            r.push(new Ft(t.segments[e].path, n[0])), s++;
            continue;
          }
          const o = fe(i) ? i.outlets.primary : '' + i,
            a = s < n.length - 1 ? n[s + 1] : null;
          o && a && de(a)
            ? (r.push(new Ft(o, Ce(a))), (s += 2))
            : (r.push(new Ft(o, {})), s++);
        }
        return new Tt(r, {});
      }
      function we(t) {
        const e = {};
        return (
          Et(t, (t, n) => {
            'string' == typeof t && (t = [t]),
              null !== t && (e[n] = ve(new Tt([], {}), 0, t));
          }),
          e
        );
      }
      function Ce(t) {
        const e = {};
        return Et(t, (t, n) => (e[n] = '' + t)), e;
      }
      function Ee(t, e, n) {
        return t == n.path && yt(e, n.parameters);
      }
      class Se {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t),
            ue(this.futureState.root),
            this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = Jt(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            Et(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(t, e, s.children);
            } else this.deactivateChildRoutes(t, e, n);
          else s && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: e,
              route: t,
              contexts: r
            });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet),
            r = n && t.value.component ? n.children : e,
            s = Jt(t);
          for (const i of Object.keys(s))
            this.deactivateRouteAndItsChildren(s[i], r);
          n &&
            n.outlet &&
            (n.outlet.deactivate(), n.children.onOutletDeactivated());
        }
        activateChildRoutes(t, e, n) {
          const r = Jt(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, r[t.value.outlet], n),
              this.forwardEvent(new ft(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new ht(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if ((ue(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, s.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                De(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = s),
                e.outlet && e.outlet.activateWith(r, s),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function De(t) {
        ue(t.value), t.children.forEach(De);
      }
      class Ae {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function xe(t) {
        return 'function' == typeof t;
      }
      function Oe(t) {
        return t instanceof kt;
      }
      const ke = Symbol('INITIAL_VALUE');
      function Te() {
        return Object(A.a)((t) =>
          (function (...t) {
            let e = void 0,
              n = void 0;
            return (
              Object(u.a)(t[t.length - 1]) && (n = t.pop()),
              'function' == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && Object(c.a)(t[0]) && (t = t[0]),
              Object(g.a)(t, n).lift(new _(e))
            );
          })(t.map((t) => t.pipe(Object(x.a)(1), Object(O.a)(ke)))).pipe(
            k((t, e) => {
              let n = !1;
              return e.reduce((t, r, s) => {
                if (t !== ke) return t;
                if ((r === ke && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === e.length - 1 || Oe(r)) return r;
                }
                return t;
              }, t);
            }, ke),
            Object(j.a)((t) => t !== ke),
            Object(D.a)((t) => (Oe(t) ? t : !0 === t)),
            Object(x.a)(1)
          )
        );
      }
      let Fe = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = s.Eb({
            type: t,
            selectors: [['ng-component']],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && s.Lb(0, 'router-outlet');
            },
            directives: function () {
              return [Dn];
            },
            encapsulation: 2
          })),
          t
        );
      })();
      function je(t, e = '') {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          Ie(r, Re(e, r));
        }
      }
      function Ie(t, e) {
        t.children && je(t.children, e);
      }
      function Re(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? t + '/'
              : !t && e.path
              ? e.path
              : `${t}/${e.path}`
            : ''
          : t;
      }
      function Pe(t) {
        const e = t.children && t.children.map(Pe),
          n = e
            ? Object.assign(Object.assign({}, t), { children: e })
            : Object.assign({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            'primary' !== n.outlet &&
            (n.component = Fe),
          n
        );
      }
      function Ne(t) {
        return t.outlet || 'primary';
      }
      function Le(t, e) {
        const n = t.filter((t) => Ne(t) === e);
        return n.push(...t.filter((t) => Ne(t) !== e)), n;
      }
      const Me = {
        matched: !1,
        consumedSegments: [],
        lastChild: 0,
        parameters: {},
        positionalParamSegments: {}
      };
      function Ve(t, e, n) {
        var r;
        if ('' === e.path)
          return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? Object.assign({}, Me)
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {}
              };
        const s = (e.matcher || _t)(n, t, e);
        if (!s) return Object.assign({}, Me);
        const i = {};
        Et(s.posParams, (t, e) => {
          i[e] = t.path;
        });
        const o =
          s.consumed.length > 0
            ? Object.assign(
                Object.assign({}, i),
                s.consumed[s.consumed.length - 1].parameters
              )
            : i;
        return {
          matched: !0,
          consumedSegments: s.consumed,
          lastChild: s.consumed.length,
          parameters: o,
          positionalParamSegments:
            null !== (r = s.posParams) && void 0 !== r ? r : {}
        };
      }
      function Be(t, e, n, r, s = 'corrected') {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => Ue(t, e, n) && 'primary' !== Ne(n));
          })(t, n, r)
        ) {
          const s = new Tt(
            e,
            (function (t, e, n, r) {
              const s = {};
              (s.primary = r),
                (r._sourceSegment = t),
                (r._segmentIndexShift = e.length);
              for (const i of n)
                if ('' === i.path && 'primary' !== Ne(i)) {
                  const n = new Tt([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = e.length),
                    (s[Ne(i)] = n);
                }
              return s;
            })(t, e, r, new Tt(n, t.children))
          );
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = e.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => Ue(t, e, n));
          })(t, n, r)
        ) {
          const i = new Tt(
            t.segments,
            (function (t, e, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (Ue(t, n, a) && !s[Ne(a)]) {
                  const n = new Tt([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift =
                      'legacy' === i ? t.segments.length : e.length),
                    (o[Ne(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(t, e, n, r, t.children, s)
          );
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new Tt(t.segments, t.children);
        return (
          (i._sourceSegment = t),
          (i._segmentIndexShift = e.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function Ue(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path
        );
      }
      function ze(t, e, n, r) {
        return (
          !!(Ne(t) === r || ('primary' !== r && Ue(e, n, t))) &&
          ('**' === t.path || Ve(e, t, n).matched)
        );
      }
      function He(t, e, n) {
        return 0 === e.length && !t.children[n];
      }
      class qe {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class Ke {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function $e(t) {
        return new p.a((e) => e.error(new qe(t)));
      }
      function Ge(t) {
        return new p.a((e) => e.error(new Ke(t)));
      }
      function We(t) {
        return new p.a((e) =>
          e.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${t}'`
            )
          )
        );
      }
      class Qe {
        constructor(t, e, n, r, i) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(s.x));
        }
        apply() {
          const t = Be(this.urlTree.root, [], [], this.config).segmentGroup,
            e = new Tt(t.segments, t.children);
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            e,
            'primary'
          )
            .pipe(
              Object(D.a)((t) =>
                this.createUrlTree(
                  Ze(t),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              Object(I.a)((t) => {
                if (t instanceof Ke)
                  return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof qe) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            t.root,
            'primary'
          )
            .pipe(
              Object(D.a)((e) =>
                this.createUrlTree(Ze(e), t.queryParams, t.fragment)
              )
            )
            .pipe(
              Object(I.a)((t) => {
                if (t instanceof qe) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`
          );
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new Tt([], { primary: t }) : t;
          return new kt(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(
                Object(D.a)((t) => new Tt([], t))
              )
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          const r = [];
          for (const s of Object.keys(n.children))
            'primary' === s ? r.unshift(s) : r.push(s);
          return Object(i.a)(r).pipe(
            Object(R.a)((r) => {
              const s = n.children[r],
                i = Le(e, r);
              return this.expandSegmentGroup(t, i, s, r).pipe(
                Object(D.a)((t) => ({ segment: t, outlet: r }))
              );
            }),
            k((t, e) => ((t[e.outlet] = e.segment), t), {}),
            (function (t, e) {
              const n = arguments.length >= 2;
              return (r) =>
                r.pipe(
                  t ? Object(j.a)((e, n) => t(e, n, r)) : $.a,
                  N(1),
                  n ? H(e) : V(() => new v())
                );
            })()
          );
        }
        expandSegment(t, e, n, r, s, a) {
          return Object(i.a)(n).pipe(
            Object(R.a)((i) =>
              this.expandSegmentAgainstRoute(t, e, n, i, r, s, a).pipe(
                Object(I.a)((t) => {
                  if (t instanceof qe) return Object(o.a)(null);
                  throw t;
                })
              )
            ),
            G((t) => !!t),
            Object(I.a)((t, n) => {
              if (t instanceof v || 'EmptyError' === t.name) {
                if (He(e, r, s)) return Object(o.a)(new Tt([], {}));
                throw new qe(e);
              }
              throw t;
            })
          );
        }
        expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
          return ze(r, e, s, i)
            ? void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(t, e, r, s, i)
              : o && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
              : $e(e)
            : $e(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                r,
                s,
                i
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? Ge(s)
            : this.lineralizeSegments(n, s).pipe(
                Object(W.a)((n) => {
                  const s = new Tt(n, {});
                  return this.expandSegment(t, s, e, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: u,
            positionalParamSegments: c
          } = Ve(e, r, s);
          if (!o) return $e(e);
          const l = this.applyRedirectCommands(a, r.redirectTo, c);
          return r.redirectTo.startsWith('/')
            ? Ge(l)
            : this.lineralizeSegments(r, l).pipe(
                Object(W.a)((r) =>
                  this.expandSegment(t, e, n, r.concat(s.slice(u)), i, !1)
                )
              );
        }
        matchSegmentAgainstRoute(t, e, n, r, s) {
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(t.injector, n)
                  .pipe(
                    Object(D.a)((t) => ((n._loadedConfig = t), new Tt(r, {})))
                  )
              : Object(o.a)(new Tt(r, {}));
          const { matched: i, consumedSegments: a, lastChild: u } = Ve(e, n, r);
          if (!i) return $e(e);
          const c = r.slice(u);
          return this.getChildConfig(t, n, r).pipe(
            Object(W.a)((t) => {
              const r = t.module,
                i = t.routes,
                { segmentGroup: u, slicedSegments: l } = Be(e, a, c, i),
                h = new Tt(u.segments, u.children);
              if (0 === l.length && h.hasChildren())
                return this.expandChildren(r, i, h).pipe(
                  Object(D.a)((t) => new Tt(a, t))
                );
              if (0 === i.length && 0 === l.length)
                return Object(o.a)(new Tt(a, {}));
              const d = Ne(n) === s;
              return this.expandSegment(r, h, i, l, d ? 'primary' : s, !0).pipe(
                Object(D.a)((t) => new Tt(a.concat(t.segments), t.children))
              );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? Object(o.a)(new Ae(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? Object(o.a)(e._loadedConfig)
              : this.runCanLoadGuards(t.injector, e, n).pipe(
                  Object(W.a)((n) =>
                    n
                      ? this.configLoader
                          .load(t.injector, e)
                          .pipe(Object(D.a)((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new p.a((e) =>
                            e.error(
                              bt(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : Object(o.a)(new Ae([], t));
        }
        runCanLoadGuards(t, e, n) {
          const r = e.canLoad;
          if (!r || 0 === r.length) return Object(o.a)(!0);
          const s = r.map((r) => {
            const s = t.get(r);
            let i;
            if (
              (function (t) {
                return t && xe(t.canLoad);
              })(s)
            )
              i = s.canLoad(e, n);
            else {
              if (!xe(s)) throw new Error('Invalid CanLoad guard');
              i = s(e, n);
            }
            return St(i);
          });
          return Object(o.a)(s).pipe(
            Te(),
            Object(Q.a)((t) => {
              if (!Oe(t)) return;
              const e = bt(
                `Redirecting to "${this.urlSerializer.serialize(t)}"`
              );
              throw ((e.url = t), e);
            }),
            Object(D.a)((t) => !0 === t)
          );
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Object(o.a)(n);
            if (r.numberOfChildren > 1 || !r.children.primary)
              return We(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n
          );
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const s = this.createSegmentGroup(t, e.root, n, r);
          return new kt(
            s,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment
          );
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            Et(t, (t, r) => {
              if ('string' == typeof t && t.startsWith(':')) {
                const s = t.substring(1);
                n[r] = e[s];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const s = this.createSegments(t, e.segments, n, r);
          let i = {};
          return (
            Et(e.children, (e, s) => {
              i[s] = this.createSegmentGroup(t, e, n, r);
            }),
            new Tt(s, i)
          );
        }
        createSegments(t, e, n, r) {
          return e.map((e) =>
            e.path.startsWith(':')
              ? this.findPosParam(t, e, r)
              : this.findOrReturn(e, n)
          );
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${e.path}'.`
            );
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function Ze(t) {
        const e = {};
        for (const n of Object.keys(t.children)) {
          const r = Ze(t.children[n]);
          (r.segments.length > 0 || r.hasChildren()) && (e[n] = r);
        }
        return (function (t) {
          if (1 === t.numberOfChildren && t.children.primary) {
            const e = t.children.primary;
            return new Tt(t.segments.concat(e.segments), e.children);
          }
          return t;
        })(new Tt(t.segments, e));
      }
      class Xe {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Ye {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function Je(t, e, n) {
        const r = t._root;
        return en(r, e ? e._root : null, n, [r.value]);
      }
      function tn(t, e, n) {
        const r = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function en(
        t,
        e,
        n,
        r,
        s = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const i = Jt(e);
        return (
          t.children.forEach((t) => {
            !(function (
              t,
              e,
              n,
              r,
              s = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const i = t.value,
                o = e ? e.value : null,
                a = n ? n.getContext(t.value.outlet) : null;
              if (o && i.routeConfig === o.routeConfig) {
                const u = (function (t, e, n) {
                  if ('function' == typeof n) return n(t, e);
                  switch (n) {
                    case 'pathParamsChange':
                      return !jt(t.url, e.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !jt(t.url, e.url) || !yt(t.queryParams, e.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !ce(t, e) || !yt(t.queryParams, e.queryParams);
                    case 'paramsChange':
                    default:
                      return !ce(t, e);
                  }
                })(o, i, i.routeConfig.runGuardsAndResolvers);
                u
                  ? s.canActivateChecks.push(new Xe(r))
                  : ((i.data = o.data), (i._resolvedData = o._resolvedData)),
                  en(t, e, i.component ? (a ? a.children : null) : n, r, s),
                  u &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    s.canDeactivateChecks.push(new Ye(a.outlet.component, o));
              } else
                o && nn(e, a, s),
                  s.canActivateChecks.push(new Xe(r)),
                  en(t, null, i.component ? (a ? a.children : null) : n, r, s);
            })(t, i[t.value.outlet], n, r.concat([t.value]), s),
              delete i[t.value.outlet];
          }),
          Et(i, (t, e) => nn(t, n.getContext(e), s)),
          s
        );
      }
      function nn(t, e, n) {
        const r = Jt(t),
          s = t.value;
        Et(r, (t, r) => {
          nn(t, s.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new Ye(
              s.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              s
            )
          );
      }
      class rn {}
      function sn(t) {
        return new p.a((e) => e.error(t));
      }
      class on {
        constructor(t, e, n, r, s, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          const t = Be(
              this.urlTree.root,
              [],
              [],
              this.config.filter((t) => void 0 === t.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            e = this.processSegmentGroup(this.config, t, 'primary');
          if (null === e) return null;
          const n = new se(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              'primary',
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            r = new Yt(n, e),
            s = new ie(this.url, r);
          return this.inheritParamsAndData(s._root), s;
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = re(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = [];
          for (const s of Object.keys(e.children)) {
            const r = e.children[s],
              i = Le(t, s),
              o = this.processSegmentGroup(i, r, s);
            if (null === o) return null;
            n.push(...o);
          }
          const r = (function (t) {
            const e = [];
            for (const n of t) {
              if (!an(n)) {
                e.push(n);
                continue;
              }
              const t = e.find(
                (t) => n.value.routeConfig === t.value.routeConfig
              );
              void 0 !== t ? t.children.push(...n.children) : e.push(n);
            }
            return e;
          })(n);
          return (
            r.sort((t, e) =>
              'primary' === t.value.outlet
                ? -1
                : 'primary' === e.value.outlet
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            r
          );
        }
        processSegment(t, e, n, r) {
          for (const s of t) {
            const t = this.processSegmentAgainstRoute(s, e, n, r);
            if (null !== t) return t;
          }
          return He(e, n, r) ? [] : null;
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo || !ze(t, e, n, r)) return null;
          let s,
            i = [],
            o = [];
          if ('**' === t.path) {
            const r = n.length > 0 ? Ct(n).parameters : {};
            s = new se(
              n,
              r,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              ln(t),
              Ne(t),
              t.component,
              t,
              un(e),
              cn(e) + n.length,
              hn(t)
            );
          } else {
            const r = Ve(e, t, n);
            if (!r.matched) return null;
            (i = r.consumedSegments),
              (o = n.slice(r.lastChild)),
              (s = new se(
                i,
                r.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                ln(t),
                Ne(t),
                t.component,
                t,
                un(e),
                cn(e) + i.length,
                hn(t)
              ));
          }
          const a = (function (t) {
              return t.children
                ? t.children
                : t.loadChildren
                ? t._loadedConfig.routes
                : [];
            })(t),
            { segmentGroup: u, slicedSegments: c } = Be(
              e,
              i,
              o,
              a.filter((t) => void 0 === t.redirectTo),
              this.relativeLinkResolution
            );
          if (0 === c.length && u.hasChildren()) {
            const t = this.processChildren(a, u);
            return null === t ? null : [new Yt(s, t)];
          }
          if (0 === a.length && 0 === c.length) return [new Yt(s, [])];
          const l = Ne(t) === r,
            h = this.processSegment(a, u, c, l ? 'primary' : r);
          return null === h ? null : [new Yt(s, h)];
        }
      }
      function an(t) {
        const e = t.value.routeConfig;
        return e && '' === e.path && void 0 === e.redirectTo;
      }
      function un(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function cn(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; )
          (e = e._sourceSegment),
            (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function ln(t) {
        return t.data || {};
      }
      function hn(t) {
        return t.resolve || {};
      }
      function dn(t) {
        return Object(A.a)((e) => {
          const n = t(e);
          return n ? Object(i.a)(n).pipe(Object(D.a)(() => e)) : Object(o.a)(e);
        });
      }
      class fn extends class {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      } {}
      const pn = new s.q('ROUTES');
      class mn {
        constructor(t, e, n, r) {
          (this.loader = t),
            (this.compiler = e),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(t, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              Object(D.a)((n) => {
                this.onLoadEndListener && this.onLoadEndListener(e);
                const r = n.create(t);
                return new Ae(wt(r.injector.get(pn)).map(Pe), r);
              })
            )
          );
        }
        loadModuleFactory(t) {
          return 'string' == typeof t
            ? Object(i.a)(this.loader.load(t))
            : St(t()).pipe(
                Object(W.a)((t) =>
                  t instanceof s.v
                    ? Object(o.a)(t)
                    : Object(i.a)(this.compiler.compileModuleAsync(t))
                )
              );
        }
      }
      class gn {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new bn()),
            (this.attachRef = null);
        }
      }
      class bn {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new gn()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      class _n {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function yn(t) {
        throw t;
      }
      function vn(t, e, n) {
        return e.parse('/');
      }
      function wn(t, e) {
        return Object(o.a)(null);
      }
      let Cn = (() => {
          class t {
            constructor(t, e, n, r, i, o, u, c) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = c),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.lastLocationChangeInfo = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new S.a()),
                (this.errorHandler = yn),
                (this.malformedUriErrorHandler = vn),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: wn,
                  afterPreactivation: wn
                }),
                (this.urlHandlingStrategy = new _n()),
                (this.routeReuseStrategy = new fn()),
                (this.onSameUrlNavigation = 'ignore'),
                (this.paramsInheritanceStrategy = 'emptyOnly'),
                (this.urlUpdateStrategy = 'deferred'),
                (this.relativeLinkResolution = 'corrected'),
                (this.ngModule = i.get(s.x)),
                (this.console = i.get(s.Y));
              const l = i.get(s.z);
              (this.isNgZoneEnabled =
                l instanceof s.z && s.z.isInAngularZone()),
                this.resetConfig(c),
                (this.currentUrlTree = new kt(new Tt([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new mn(
                  o,
                  u,
                  (t) => this.triggerEvent(new ut(t)),
                  (t) => this.triggerEvent(new ct(t))
                )),
                (this.routerState = ee(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new a.a({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: 'imperative',
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                Object(j.a)((t) => 0 !== t.id),
                Object(D.a)((t) =>
                  Object.assign(Object.assign({}, t), {
                    extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
                  })
                ),
                Object(A.a)((t) => {
                  let n = !1,
                    r = !1;
                  return Object(o.a)(t).pipe(
                    Object(Q.a)((t) => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(
                              Object.assign({}, this.lastSuccessfulNavigation),
                              { previousNavigation: null }
                            )
                          : null
                      };
                    }),
                    Object(A.a)((t) => {
                      const n =
                        !this.navigated ||
                        t.extractedUrl.toString() !==
                          this.browserUrlTree.toString();
                      if (
                        ('reload' === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return Object(o.a)(t).pipe(
                          Object(A.a)((t) => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(
                                new J(
                                  t.id,
                                  this.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState
                                )
                              ),
                              n !== this.transitions.getValue()
                                ? E.a
                                : Promise.resolve(t)
                            );
                          }),
                          ((r = this.ngModule.injector),
                          (s = this.configLoader),
                          (i = this.urlSerializer),
                          (a = this.config),
                          Object(A.a)((t) =>
                            (function (t, e, n, r, s) {
                              return new Qe(t, e, n, r, s).apply();
                            })(r, s, i, t.extractedUrl, a).pipe(
                              Object(D.a)((e) =>
                                Object.assign(Object.assign({}, t), {
                                  urlAfterRedirects: e
                                })
                              )
                            )
                          )),
                          Object(Q.a)((t) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: t.urlAfterRedirects }
                            );
                          }),
                          (function (t, e, n, r, s) {
                            return Object(W.a)((i) =>
                              (function (
                                t,
                                e,
                                n,
                                r,
                                s = 'emptyOnly',
                                i = 'legacy'
                              ) {
                                try {
                                  const a = new on(
                                    t,
                                    e,
                                    n,
                                    r,
                                    s,
                                    i
                                  ).recognize();
                                  return null === a
                                    ? sn(new rn())
                                    : Object(o.a)(a);
                                } catch (a) {
                                  return sn(a);
                                }
                              })(
                                t,
                                e,
                                i.urlAfterRedirects,
                                n(i.urlAfterRedirects),
                                r,
                                s
                              ).pipe(
                                Object(D.a)((t) =>
                                  Object.assign(Object.assign({}, i), {
                                    targetSnapshot: t
                                  })
                                )
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (t) => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          Object(Q.a)((t) => {
                            'eager' === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(
                                  t.urlAfterRedirects,
                                  !!t.extras.replaceUrl,
                                  t.id,
                                  t.extras.state
                                ),
                              (this.browserUrlTree = t.urlAfterRedirects));
                            const n = new rt(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.next(n);
                          })
                        );
                      var r, s, i, a;
                      if (
                        n &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          this.rawUrlTree
                        )
                      ) {
                        const {
                            id: n,
                            extractedUrl: r,
                            source: s,
                            restoredState: i,
                            extras: a
                          } = t,
                          u = new J(n, this.serializeUrl(r), s, i);
                        e.next(u);
                        const c = ee(r, this.rootComponentType).snapshot;
                        return Object(o.a)(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: c,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, a), {
                              skipLocationChange: !1,
                              replaceUrl: !1
                            })
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl),
                        (this.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        E.a
                      );
                    }),
                    dn((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o }
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o
                      });
                    }),
                    Object(Q.a)((t) => {
                      const e = new st(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      this.triggerEvent(e);
                    }),
                    Object(D.a)((t) =>
                      Object.assign(Object.assign({}, t), {
                        guards: Je(
                          t.targetSnapshot,
                          t.currentSnapshot,
                          this.rootContexts
                        )
                      })
                    ),
                    (function (t, e) {
                      return Object(W.a)((n) => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: s,
                          guards: {
                            canActivateChecks: a,
                            canDeactivateChecks: u
                          }
                        } = n;
                        return 0 === u.length && 0 === a.length
                          ? Object(o.a)(
                              Object.assign(Object.assign({}, n), {
                                guardsResult: !0
                              })
                            )
                          : (function (t, e, n, r) {
                              return Object(i.a)(t).pipe(
                                Object(W.a)((t) =>
                                  (function (t, e, n, r, s) {
                                    const i =
                                      e && e.routeConfig
                                        ? e.routeConfig.canDeactivate
                                        : null;
                                    if (!i || 0 === i.length)
                                      return Object(o.a)(!0);
                                    const a = i.map((i) => {
                                      const o = tn(i, e, s);
                                      let a;
                                      if (
                                        (function (t) {
                                          return t && xe(t.canDeactivate);
                                        })(o)
                                      )
                                        a = St(o.canDeactivate(t, e, n, r));
                                      else {
                                        if (!xe(o))
                                          throw new Error(
                                            'Invalid CanDeactivate guard'
                                          );
                                        a = St(o(t, e, n, r));
                                      }
                                      return a.pipe(G());
                                    });
                                    return Object(o.a)(a).pipe(Te());
                                  })(t.component, t.route, n, e, r)
                                ),
                                G((t) => !0 !== t, !0)
                              );
                            })(u, r, s, t).pipe(
                              Object(W.a)((n) =>
                                n && 'boolean' == typeof n
                                  ? (function (t, e, n, r) {
                                      return Object(i.a)(e).pipe(
                                        Object(R.a)((e) =>
                                          Object(w.a)(
                                            (function (t, e) {
                                              return (
                                                null !== t && e && e(new lt(t)),
                                                Object(o.a)(!0)
                                              );
                                            })(e.route.parent, r),
                                            (function (t, e) {
                                              return (
                                                null !== t && e && e(new dt(t)),
                                                Object(o.a)(!0)
                                              );
                                            })(e.route, r),
                                            (function (t, e, n) {
                                              const r = e[e.length - 1],
                                                s = e
                                                  .slice(0, e.length - 1)
                                                  .reverse()
                                                  .map((t) =>
                                                    (function (t) {
                                                      const e = t.routeConfig
                                                        ? t.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return e && 0 !== e.length
                                                        ? { node: t, guards: e }
                                                        : null;
                                                    })(t)
                                                  )
                                                  .filter((t) => null !== t)
                                                  .map((e) =>
                                                    Object(C.a)(() => {
                                                      const s = e.guards.map(
                                                        (s) => {
                                                          const i = tn(
                                                            s,
                                                            e.node,
                                                            n
                                                          );
                                                          let o;
                                                          if (
                                                            (function (t) {
                                                              return (
                                                                t &&
                                                                xe(
                                                                  t.canActivateChild
                                                                )
                                                              );
                                                            })(i)
                                                          )
                                                            o = St(
                                                              i.canActivateChild(
                                                                r,
                                                                t
                                                              )
                                                            );
                                                          else {
                                                            if (!xe(i))
                                                              throw new Error(
                                                                'Invalid CanActivateChild guard'
                                                              );
                                                            o = St(i(r, t));
                                                          }
                                                          return o.pipe(G());
                                                        }
                                                      );
                                                      return Object(o.a)(
                                                        s
                                                      ).pipe(Te());
                                                    })
                                                  );
                                              return Object(o.a)(s).pipe(Te());
                                            })(t, e.path, n),
                                            (function (t, e, n) {
                                              const r = e.routeConfig
                                                ? e.routeConfig.canActivate
                                                : null;
                                              if (!r || 0 === r.length)
                                                return Object(o.a)(!0);
                                              const s = r.map((r) =>
                                                Object(C.a)(() => {
                                                  const s = tn(r, e, n);
                                                  let i;
                                                  if (
                                                    (function (t) {
                                                      return (
                                                        t && xe(t.canActivate)
                                                      );
                                                    })(s)
                                                  )
                                                    i = St(s.canActivate(e, t));
                                                  else {
                                                    if (!xe(s))
                                                      throw new Error(
                                                        'Invalid CanActivate guard'
                                                      );
                                                    i = St(s(e, t));
                                                  }
                                                  return i.pipe(G());
                                                })
                                              );
                                              return Object(o.a)(s).pipe(Te());
                                            })(t, e.route, n)
                                          )
                                        ),
                                        G((t) => !0 !== t, !0)
                                      );
                                    })(r, a, t, e)
                                  : Object(o.a)(n)
                              ),
                              Object(D.a)((t) =>
                                Object.assign(Object.assign({}, n), {
                                  guardsResult: t
                                })
                              )
                            );
                      });
                    })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                    Object(Q.a)((t) => {
                      if (Oe(t.guardsResult)) {
                        const e = bt(
                          `Redirecting to "${this.serializeUrl(
                            t.guardsResult
                          )}"`
                        );
                        throw ((e.url = t.guardsResult), e);
                      }
                      const e = new it(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      this.triggerEvent(e);
                    }),
                    Object(j.a)((t) => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new et(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          ''
                        );
                        return e.next(n), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    dn((t) => {
                      if (t.guards.canActivateChecks.length)
                        return Object(o.a)(t).pipe(
                          Object(Q.a)((t) => {
                            const e = new ot(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          }),
                          Object(A.a)((t) => {
                            let n = !1;
                            return Object(o.a)(t).pipe(
                              ((r = this.paramsInheritanceStrategy),
                              (s = this.ngModule.injector),
                              Object(W.a)((t) => {
                                const {
                                  targetSnapshot: e,
                                  guards: { canActivateChecks: n }
                                } = t;
                                if (!n.length) return Object(o.a)(t);
                                let a = 0;
                                return Object(i.a)(n).pipe(
                                  Object(R.a)((t) =>
                                    (function (t, e, n, r) {
                                      return (function (t, e, n, r) {
                                        const s = Object.keys(t);
                                        if (0 === s.length)
                                          return Object(o.a)({});
                                        const a = {};
                                        return Object(i.a)(s).pipe(
                                          Object(W.a)((s) =>
                                            (function (t, e, n, r) {
                                              const s = tn(t, e, r);
                                              return St(
                                                s.resolve
                                                  ? s.resolve(e, n)
                                                  : s(e, n)
                                              );
                                            })(t[s], e, n, r).pipe(
                                              Object(Q.a)((t) => {
                                                a[s] = t;
                                              })
                                            )
                                          ),
                                          N(1),
                                          Object(W.a)(() =>
                                            Object.keys(a).length === s.length
                                              ? Object(o.a)(a)
                                              : E.a
                                          )
                                        );
                                      })(t._resolve, t, e, r).pipe(
                                        Object(D.a)(
                                          (e) => (
                                            (t._resolvedData = e),
                                            (t.data = Object.assign(
                                              Object.assign({}, t.data),
                                              re(t, n).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(t.route, e, r, s)
                                  ),
                                  Object(Q.a)(() => a++),
                                  N(1),
                                  Object(W.a)((e) =>
                                    a === n.length ? Object(o.a)(t) : E.a
                                  )
                                );
                              })),
                              Object(Q.a)({
                                next: () => (n = !0),
                                complete: () => {
                                  if (!n) {
                                    const n = new et(
                                      t.id,
                                      this.serializeUrl(t.extractedUrl),
                                      "At least one route resolver didn't emit any value."
                                    );
                                    e.next(n), t.resolve(!1);
                                  }
                                }
                              })
                            );
                            var r, s;
                          }),
                          Object(Q.a)((t) => {
                            const e = new at(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          })
                        );
                    }),
                    dn((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o }
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o
                      });
                    }),
                    Object(D.a)((t) => {
                      const e = (function (t, e, n) {
                        const r = le(t, e._root, n ? n._root : void 0);
                        return new te(r, e);
                      })(
                        this.routeReuseStrategy,
                        t.targetSnapshot,
                        t.currentRouterState
                      );
                      return Object.assign(Object.assign({}, t), {
                        targetRouterState: e
                      });
                    }),
                    Object(Q.a)((t) => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          t.rawUrl
                        )),
                        (this.routerState = t.targetRouterState),
                        'deferred' === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              this.rawUrlTree,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            ),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((s = this.rootContexts),
                    (a = this.routeReuseStrategy),
                    (u = (t) => this.triggerEvent(t)),
                    Object(D.a)(
                      (t) => (
                        new Se(
                          a,
                          t.targetRouterState,
                          t.currentRouterState,
                          u
                        ).activate(s),
                        t
                      )
                    )),
                    Object(Q.a)({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      }
                    }),
                    Object(Z.a)(() => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new et(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        );
                        e.next(n), t.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    Object(I.a)((n) => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = Oe(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl
                          ));
                        const s = new et(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n.message
                        );
                        e.next(s),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(
                                  n.url,
                                  this.rawUrlTree
                                );
                                this.scheduleNavigation(
                                  e,
                                  'imperative',
                                  null,
                                  {
                                    skipLocationChange:
                                      t.extras.skipLocationChange,
                                    replaceUrl:
                                      'eager' === this.urlUpdateStrategy
                                  },
                                  {
                                    resolve: t.resolve,
                                    reject: t.reject,
                                    promise: t.promise
                                  }
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        this.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl
                        );
                        const r = new nt(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n
                        );
                        e.next(r);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var s;
                      return E.a;
                    })
                  );
                  var s, a, u;
                })
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(
                Object.assign(Object.assign({}, this.getTransition()), t)
              );
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0
                  });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  const e = this.extractLocationChangeInfoFromEvent(t);
                  this.shouldScheduleNavigation(
                    this.lastLocationChangeInfo,
                    e
                  ) &&
                    setTimeout(() => {
                      const { source: t, state: n, urlTree: r } = e,
                        s = { replaceUrl: !0 };
                      if (n) {
                        const t = Object.assign({}, n);
                        delete t.navigationId,
                          0 !== Object.keys(t).length && (s.state = t);
                      }
                      this.scheduleNavigation(r, t, n, s);
                    }, 0),
                    (this.lastLocationChangeInfo = e);
                }));
            }
            extractLocationChangeInfoFromEvent(t) {
              var e;
              return {
                source: 'popstate' === t.type ? 'popstate' : 'hashchange',
                urlTree: this.parseUrl(t.url),
                state: (
                  null === (e = t.state) || void 0 === e
                    ? void 0
                    : e.navigationId
                )
                  ? t.state
                  : null,
                transitionId: this.getTransition().id
              };
            }
            shouldScheduleNavigation(t, e) {
              if (!t) return !0;
              const n = e.urlTree.toString() === t.urlTree.toString();
              return !(
                e.transitionId === t.transitionId &&
                n &&
                (('hashchange' === e.source && 'popstate' === t.source) ||
                  ('popstate' === e.source && 'hashchange' === t.source))
              );
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              je(t),
                (this.config = t.map(Pe)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0));
            }
            createUrlTree(t, e = {}) {
              const {
                  relativeTo: n,
                  queryParams: r,
                  fragment: s,
                  queryParamsHandling: i,
                  preserveFragment: o
                } = e,
                a = n || this.routerState.root,
                u = o ? this.currentUrlTree.fragment : s;
              let c = null;
              switch (i) {
                case 'merge':
                  c = Object.assign(
                    Object.assign({}, this.currentUrlTree.queryParams),
                    r
                  );
                  break;
                case 'preserve':
                  c = this.currentUrlTree.queryParams;
                  break;
                default:
                  c = r || null;
              }
              return (
                null !== c && (c = this.removeEmptyProps(c)),
                (function (t, e, n, r, s) {
                  if (0 === n.length) return pe(e.root, e.root, e, r, s);
                  const i = (function (t) {
                    if (
                      'string' == typeof t[0] &&
                      1 === t.length &&
                      '/' === t[0]
                    )
                      return new ge(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const r = t.reduce((t, r, s) => {
                      if ('object' == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {};
                          return (
                            Et(r.outlets, (t, n) => {
                              e[n] = 'string' == typeof t ? t.split('/') : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (r.segmentPath) return [...t, r.segmentPath];
                      }
                      return 'string' != typeof r
                        ? [...t, r]
                        : 0 === s
                        ? (r.split('/').forEach((r, s) => {
                            (0 == s && '.' === r) ||
                              (0 == s && '' === r
                                ? (n = !0)
                                : '..' === r
                                ? e++
                                : '' != r && t.push(r));
                          }),
                          t)
                        : [...t, r];
                    }, []);
                    return new ge(n, e, r);
                  })(n);
                  if (i.toRoot()) return pe(e.root, new Tt([], {}), e, r, s);
                  const o = (function (t, e, n) {
                      if (t.isAbsolute) return new be(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) {
                        const t = n.snapshot._urlSegment;
                        return new be(t, t === e.root, 0);
                      }
                      const r = de(t.commands[0]) ? 0 : 1;
                      return (function (t, e, n) {
                        let r = t,
                          s = e,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r))
                            throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new be(r, !1, s - i);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        t.numberOfDoubleDots
                      );
                    })(i, e, t),
                    a = o.processChildren
                      ? ye(o.segmentGroup, o.index, i.commands)
                      : _e(o.segmentGroup, o.index, i.commands);
                  return pe(o.segmentGroup, a, e, r, s);
                })(a, this.currentUrlTree, t, c, u)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              const n = Oe(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, 'imperative', null, e);
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function (t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n)
                      throw new Error(
                        `The requested path contains ${n} segment at index ${e}`
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              if (Oe(t)) return Dt(this.currentUrlTree, t, e);
              const n = this.parseUrl(t);
              return Dt(this.currentUrlTree, n, e);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (t) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new tt(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(this.currentUrlTree)
                      )
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0);
                },
                (t) => {
                  this.console.warn('Unhandled Navigation Error: ');
                }
              );
            }
            scheduleNavigation(t, e, n, r, s) {
              const i = this.getTransition(),
                o =
                  'imperative' !== e &&
                  'imperative' === (null == i ? void 0 : i.source),
                a =
                  (this.lastSuccessfulId === i.id || this.currentNavigation
                    ? i.rawUrl
                    : i.urlAfterRedirects
                  ).toString() === t.toString();
              if (o && a) return Promise.resolve(!0);
              let u, c, l;
              s
                ? ((u = s.resolve), (c = s.reject), (l = s.promise))
                : (l = new Promise((t, e) => {
                    (u = t), (c = e);
                  }));
              const h = ++this.navigationId;
              return (
                this.setTransition({
                  id: h,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: u,
                  reject: c,
                  promise: l,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState
                }),
                l.catch((t) => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e, n, r) {
              const s = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(s) || e
                  ? this.location.replaceState(
                      s,
                      '',
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    )
                  : this.location.go(
                      s,
                      '',
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    );
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                { navigationId: this.lastSuccessfulId }
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Ub(s.N),
                s.Ub(It),
                s.Ub(bn),
                s.Ub(r.h),
                s.Ub(s.r),
                s.Ub(s.w),
                s.Ub(s.i),
                s.Ub(void 0)
              );
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        En = (() => {
          class t {
            constructor(t, e, n) {
              (this.router = t),
                (this.route = e),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.onChanges = new S.a()),
                (this.subscription = t.events.subscribe((t) => {
                  t instanceof tt && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            ngOnChanges(t) {
              this.updateTargetUrlAndHref(), this.onChanges.next(this);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(t, e, n, r, s) {
              if (0 !== t || e || n || r || s) return !0;
              if ('string' == typeof this.target && '_self' != this.target)
                return !0;
              const i = {
                skipLocationChange: Sn(this.skipLocationChange),
                replaceUrl: Sn(this.replaceUrl),
                state: this.state
              };
              return this.router.navigateByUrl(this.urlTree, i), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.urlTree)
              );
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Sn(this.preserveFragment)
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Kb(Cn), s.Kb(ne), s.Kb(r.i));
            }),
            (t.ɵdir = s.Fb({
              type: t,
              selectors: [
                ['a', 'routerLink', ''],
                ['area', 'routerLink', '']
              ],
              hostVars: 2,
              hostBindings: function (t, e) {
                1 & t &&
                  s.Xb('click', function (t) {
                    return e.onClick(
                      t.button,
                      t.ctrlKey,
                      t.shiftKey,
                      t.altKey,
                      t.metaKey
                    );
                  }),
                  2 & t &&
                    (s.Tb('href', e.href, s.rc), s.Ab('target', e.target));
              },
              inputs: {
                routerLink: 'routerLink',
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                state: 'state'
              },
              features: [s.xb]
            })),
            t
          );
        })();
      function Sn(t) {
        return '' === t || !!t;
      }
      let Dn = (() => {
        class t {
          constructor(t, e, n, r, i) {
            (this.parentContexts = t),
              (this.location = e),
              (this.resolver = n),
              (this.changeDetector = i),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new s.n()),
              (this.deactivateEvents = new s.n()),
              (this.name = r || 'primary'),
              t.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const t = this.parentContexts.getContext(this.name);
              t &&
                t.route &&
                (t.attachRef
                  ? this.attach(t.attachRef, t.route)
                  : this.activateWith(t.route, t.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error('Outlet is not activated');
            this.location.detach();
            const t = this.activated;
            return (this.activated = null), (this._activatedRoute = null), t;
          }
          attach(t, e) {
            (this.activated = t),
              (this._activatedRoute = e),
              this.location.insert(t.hostView);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, e) {
            if (this.isActivated)
              throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = t;
            const n = (e = e || this.resolver).resolveComponentFactory(
                t._futureSnapshot.routeConfig.component
              ),
              r = this.parentContexts.getOrCreateContext(this.name).children,
              s = new An(t, r, this.location.injector);
            (this.activated = this.location.createComponent(
              n,
              this.location.length,
              s
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              s.Kb(bn),
              s.Kb(s.P),
              s.Kb(s.j),
              s.Vb('name'),
              s.Kb(s.h)
            );
          }),
          (t.ɵdir = s.Fb({
            type: t,
            selectors: [['router-outlet']],
            outputs: {
              activateEvents: 'activate',
              deactivateEvents: 'deactivate'
            },
            exportAs: ['outlet']
          })),
          t
        );
      })();
      class An {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === ne
            ? this.route
            : t === bn
            ? this.childContexts
            : this.parent.get(t, e);
        }
      }
      class xn {}
      class On {
        preload(t, e) {
          return Object(o.a)(null);
        }
      }
      let kn = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new mn(
                  e,
                  n,
                  (e) => t.triggerEvent(new ut(e)),
                  (e) => t.triggerEvent(new ct(e))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  Object(j.a)((t) => t instanceof tt),
                  Object(R.a)(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(s.x);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children));
              return Object(i.a)(n).pipe(
                Object(X.a)(),
                Object(D.a)((t) => {})
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                this.loader
                  .load(t.injector, e)
                  .pipe(
                    Object(W.a)(
                      (t) => (
                        (e._loadedConfig = t),
                        this.processRoutes(t.module, t.routes)
                      )
                    )
                  )
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Ub(Cn),
                s.Ub(s.w),
                s.Ub(s.i),
                s.Ub(s.r),
                s.Ub(xn)
              );
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Tn = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = 'imperative'),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration =
                  n.scrollPositionRestoration || 'disabled'),
                (n.anchorScrolling = n.anchorScrolling || 'disabled');
            }
            init() {
              'disabled' !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration('manual'),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof J
                  ? ((this.store[
                      this.lastId
                    ] = this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState
                      ? t.restoredState.navigationId
                      : 0))
                  : t instanceof tt &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(
                      t,
                      this.router.parseUrl(t.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof pt &&
                  (t.position
                    ? 'top' === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : 'enabled' === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && 'enabled' === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : 'disabled' !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new pt(
                  t,
                  'popstate' === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Ub(Cn), s.Ub(r.u), s.Ub(void 0));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const Fn = new s.q('ROUTER_CONFIGURATION'),
        jn = new s.q('ROUTER_FORROOT_GUARD'),
        In = [
          r.h,
          { provide: It, useClass: Rt },
          {
            provide: Cn,
            useFactory: function (t, e, n, s, i, o, a, u = {}, c, l) {
              const h = new Cn(null, t, e, n, s, i, o, wt(a));
              if (
                (c && (h.urlHandlingStrategy = c),
                l && (h.routeReuseStrategy = l),
                (function (t, e) {
                  t.errorHandler && (e.errorHandler = t.errorHandler),
                    t.malformedUriErrorHandler &&
                      (e.malformedUriErrorHandler = t.malformedUriErrorHandler),
                    t.onSameUrlNavigation &&
                      (e.onSameUrlNavigation = t.onSameUrlNavigation),
                    t.paramsInheritanceStrategy &&
                      (e.paramsInheritanceStrategy =
                        t.paramsInheritanceStrategy),
                    t.relativeLinkResolution &&
                      (e.relativeLinkResolution = t.relativeLinkResolution),
                    t.urlUpdateStrategy &&
                      (e.urlUpdateStrategy = t.urlUpdateStrategy);
                })(u, h),
                u.enableTracing)
              ) {
                const t = Object(r.z)();
                h.events.subscribe((e) => {
                  t.logGroup('Router Event: ' + e.constructor.name),
                    t.log(e.toString()),
                    t.log(e),
                    t.logGroupEnd();
                });
              }
              return h;
            },
            deps: [
              It,
              bn,
              r.h,
              s.r,
              s.w,
              s.i,
              pn,
              Fn,
              [class {}, new s.A()],
              [class {}, new s.A()]
            ]
          },
          bn,
          {
            provide: ne,
            useFactory: function (t) {
              return t.routerState.root;
            },
            deps: [Cn]
          },
          { provide: s.w, useClass: s.K },
          kn,
          On,
          class {
            preload(t, e) {
              return e().pipe(Object(I.a)(() => Object(o.a)(null)));
            }
          },
          { provide: Fn, useValue: { enableTracing: !1 } }
        ];
      function Rn() {
        return new s.y('Router', Cn);
      }
      let Pn = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                In,
                Vn(e),
                {
                  provide: jn,
                  useFactory: Mn,
                  deps: [[Cn, new s.A(), new s.J()]]
                },
                { provide: Fn, useValue: n || {} },
                {
                  provide: r.i,
                  useFactory: Ln,
                  deps: [r.r, [new s.p(r.a), new s.A()], Fn]
                },
                { provide: Tn, useFactory: Nn, deps: [Cn, r.u, Fn] },
                {
                  provide: xn,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : On
                },
                { provide: s.y, multi: !0, useFactory: Rn },
                [
                  Bn,
                  { provide: s.d, multi: !0, useFactory: Un, deps: [Bn] },
                  { provide: Hn, useFactory: zn, deps: [Bn] },
                  { provide: s.b, multi: !0, useExisting: Hn }
                ]
              ]
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [Vn(e)] };
          }
        }
        return (
          (t.ɵmod = s.Ib({ type: t })),
          (t.ɵinj = s.Hb({
            factory: function (e) {
              return new (e || t)(s.Ub(jn, 8), s.Ub(Cn, 8));
            }
          })),
          t
        );
      })();
      function Nn(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new Tn(t, e, n);
      }
      function Ln(t, e, n = {}) {
        return n.useHash ? new r.f(t, e) : new r.q(t, e);
      }
      function Mn(t) {
        return 'guarded';
      }
      function Vn(t) {
        return [
          { provide: s.a, multi: !0, useValue: t },
          { provide: pn, multi: !0, useValue: t }
        ];
      }
      let Bn = (() => {
        class t {
          constructor(t) {
            (this.injector = t),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new S.a());
          }
          appInitializer() {
            return this.injector.get(r.g, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise((e) => (t = e)),
                n = this.injector.get(Cn),
                r = this.injector.get(Fn);
              return (
                'disabled' === r.initialNavigation
                  ? (n.setUpLocationChangeListener(), t(!0))
                  : 'enabled' === r.initialNavigation ||
                    'enabledBlocking' === r.initialNavigation
                  ? ((n.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? Object(o.a)(null)
                        : ((this.initNavigation = !0),
                          t(!0),
                          this.resultOfPreactivationDone)),
                    n.initialNavigation())
                  : t(!0),
                e
              );
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get(Fn),
              n = this.injector.get(kn),
              r = this.injector.get(Tn),
              i = this.injector.get(Cn),
              o = this.injector.get(s.g);
            t === o.components[0] &&
              (('enabledNonBlocking' !== e.initialNavigation &&
                void 0 !== e.initialNavigation) ||
                i.initialNavigation(),
              n.setUpPreloading(),
              r.init(),
              i.resetRootComponentType(o.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Ub(s.r));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Un(t) {
        return t.appInitializer.bind(t);
      }
      function zn(t) {
        return t.bootstrapListener.bind(t);
      }
      const Hn = new s.q('Router Initializer');
    },
    u47x: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return P;
      }),
        n.d(e, 'b', function () {
          return _;
        }),
        n.d(e, 'c', function () {
          return I;
        }),
        n.d(e, 'd', function () {
          return y;
        }),
        n.d(e, 'e', function () {
          return F;
        }),
        n.d(e, 'f', function () {
          return S;
        }),
        n.d(e, 'g', function () {
          return R;
        }),
        n.d(e, 'h', function () {
          return x;
        }),
        n.d(e, 'i', function () {
          return O;
        });
      var r = n('ofXK'),
        s = n('fXoL'),
        i = n('nLfN'),
        o = n('XNiG'),
        a = n('quSY'),
        u = n('LRne'),
        c = n('FtGj'),
        l = n('vkgz'),
        h = n('Kj3r'),
        d = n('pLZG'),
        f = n('lJxs'),
        p = n('IzEk'),
        m = n('8LU1'),
        g = n('GU7r');
      class b {
        constructor(t) {
          (this._items = t),
            (this._activeItemIndex = -1),
            (this._activeItem = null),
            (this._wrap = !1),
            (this._letterKeyStream = new o.a()),
            (this._typeaheadSubscription = a.a.EMPTY),
            (this._vertical = !0),
            (this._allowedModifierKeys = []),
            (this._homeAndEnd = !1),
            (this._skipPredicateFn = (t) => t.disabled),
            (this._pressedLetters = []),
            (this.tabOut = new o.a()),
            (this.change = new o.a()),
            t instanceof s.D &&
              t.changes.subscribe((t) => {
                if (this._activeItem) {
                  const e = t.toArray().indexOf(this._activeItem);
                  e > -1 &&
                    e !== this._activeItemIndex &&
                    (this._activeItemIndex = e);
                }
              });
        }
        skipPredicate(t) {
          return (this._skipPredicateFn = t), this;
        }
        withWrap(t = !0) {
          return (this._wrap = t), this;
        }
        withVerticalOrientation(t = !0) {
          return (this._vertical = t), this;
        }
        withHorizontalOrientation(t) {
          return (this._horizontal = t), this;
        }
        withAllowedModifierKeys(t) {
          return (this._allowedModifierKeys = t), this;
        }
        withTypeAhead(t = 200) {
          return (
            this._typeaheadSubscription.unsubscribe(),
            (this._typeaheadSubscription = this._letterKeyStream
              .pipe(
                Object(l.a)((t) => this._pressedLetters.push(t)),
                Object(h.a)(t),
                Object(d.a)(() => this._pressedLetters.length > 0),
                Object(f.a)(() => this._pressedLetters.join(''))
              )
              .subscribe((t) => {
                const e = this._getItemsArray();
                for (let n = 1; n < e.length + 1; n++) {
                  const r = (this._activeItemIndex + n) % e.length,
                    s = e[r];
                  if (
                    !this._skipPredicateFn(s) &&
                    0 === s.getLabel().toUpperCase().trim().indexOf(t)
                  ) {
                    this.setActiveItem(r);
                    break;
                  }
                }
                this._pressedLetters = [];
              })),
            this
          );
        }
        withHomeAndEnd(t = !0) {
          return (this._homeAndEnd = t), this;
        }
        setActiveItem(t) {
          const e = this._activeItem;
          this.updateActiveItem(t),
            this._activeItem !== e && this.change.next(this._activeItemIndex);
        }
        onKeydown(t) {
          const e = t.keyCode,
            n = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].every(
              (e) => !t[e] || this._allowedModifierKeys.indexOf(e) > -1
            );
          switch (e) {
            case c.k:
              return void this.tabOut.next();
            case c.b:
              if (this._vertical && n) {
                this.setNextItemActive();
                break;
              }
              return;
            case c.l:
              if (this._vertical && n) {
                this.setPreviousItemActive();
                break;
              }
              return;
            case c.i:
              if (this._horizontal && n) {
                'rtl' === this._horizontal
                  ? this.setPreviousItemActive()
                  : this.setNextItemActive();
                break;
              }
              return;
            case c.g:
              if (this._horizontal && n) {
                'rtl' === this._horizontal
                  ? this.setNextItemActive()
                  : this.setPreviousItemActive();
                break;
              }
              return;
            case c.f:
              if (this._homeAndEnd && n) {
                this.setFirstItemActive();
                break;
              }
              return;
            case c.c:
              if (this._homeAndEnd && n) {
                this.setLastItemActive();
                break;
              }
              return;
            default:
              return void (
                (n || Object(c.o)(t, 'shiftKey')) &&
                (t.key && 1 === t.key.length
                  ? this._letterKeyStream.next(t.key.toLocaleUpperCase())
                  : ((e >= c.a && e <= c.m) || (e >= c.n && e <= c.h)) &&
                    this._letterKeyStream.next(String.fromCharCode(e)))
              );
          }
          (this._pressedLetters = []), t.preventDefault();
        }
        get activeItemIndex() {
          return this._activeItemIndex;
        }
        get activeItem() {
          return this._activeItem;
        }
        isTyping() {
          return this._pressedLetters.length > 0;
        }
        setFirstItemActive() {
          this._setActiveItemByIndex(0, 1);
        }
        setLastItemActive() {
          this._setActiveItemByIndex(this._items.length - 1, -1);
        }
        setNextItemActive() {
          this._activeItemIndex < 0
            ? this.setFirstItemActive()
            : this._setActiveItemByDelta(1);
        }
        setPreviousItemActive() {
          this._activeItemIndex < 0 && this._wrap
            ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
        }
        updateActiveItem(t) {
          const e = this._getItemsArray(),
            n = 'number' == typeof t ? t : e.indexOf(t),
            r = e[n];
          (this._activeItem = null == r ? null : r),
            (this._activeItemIndex = n);
        }
        _setActiveItemByDelta(t) {
          this._wrap
            ? this._setActiveInWrapMode(t)
            : this._setActiveInDefaultMode(t);
        }
        _setActiveInWrapMode(t) {
          const e = this._getItemsArray();
          for (let n = 1; n <= e.length; n++) {
            const r = (this._activeItemIndex + t * n + e.length) % e.length;
            if (!this._skipPredicateFn(e[r])) return void this.setActiveItem(r);
          }
        }
        _setActiveInDefaultMode(t) {
          this._setActiveItemByIndex(this._activeItemIndex + t, t);
        }
        _setActiveItemByIndex(t, e) {
          const n = this._getItemsArray();
          if (n[t]) {
            for (; this._skipPredicateFn(n[t]); ) if (!n[(t += e)]) return;
            this.setActiveItem(t);
          }
        }
        _getItemsArray() {
          return this._items instanceof s.D
            ? this._items.toArray()
            : this._items;
        }
      }
      class _ extends b {
        setActiveItem(t) {
          this.activeItem && this.activeItem.setInactiveStyles(),
            super.setActiveItem(t),
            this.activeItem && this.activeItem.setActiveStyles();
        }
      }
      class y extends b {
        constructor() {
          super(...arguments), (this._origin = 'program');
        }
        setFocusOrigin(t) {
          return (this._origin = t), this;
        }
        setActiveItem(t) {
          super.setActiveItem(t),
            this.activeItem && this.activeItem.focus(this._origin);
        }
      }
      let v = (() => {
        class t {
          constructor(t) {
            this._platform = t;
          }
          isDisabled(t) {
            return t.hasAttribute('disabled');
          }
          isVisible(t) {
            return (
              (function (t) {
                return !!(
                  t.offsetWidth ||
                  t.offsetHeight ||
                  ('function' == typeof t.getClientRects &&
                    t.getClientRects().length)
                );
              })(t) && 'visible' === getComputedStyle(t).visibility
            );
          }
          isTabbable(t) {
            if (!this._platform.isBrowser) return !1;
            const e = (function (t) {
              try {
                return t.frameElement;
              } catch (e) {
                return null;
              }
            })(
              ((n = t).ownerDocument && n.ownerDocument.defaultView) || window
            );
            var n;
            if (e) {
              if (-1 === C(e)) return !1;
              if (!this.isVisible(e)) return !1;
            }
            let r = t.nodeName.toLowerCase(),
              s = C(t);
            return t.hasAttribute('contenteditable')
              ? -1 !== s
              : 'iframe' !== r &&
                  'object' !== r &&
                  !(
                    this._platform.WEBKIT &&
                    this._platform.IOS &&
                    !(function (t) {
                      let e = t.nodeName.toLowerCase(),
                        n = 'input' === e && t.type;
                      return (
                        'text' === n ||
                        'password' === n ||
                        'select' === e ||
                        'textarea' === e
                      );
                    })(t)
                  ) &&
                  ('audio' === r
                    ? !!t.hasAttribute('controls') && -1 !== s
                    : 'video' === r
                    ? -1 !== s &&
                      (null !== s ||
                        this._platform.FIREFOX ||
                        t.hasAttribute('controls'))
                    : t.tabIndex >= 0);
          }
          isFocusable(t, e) {
            return (
              (function (t) {
                return (
                  !(function (t) {
                    return (
                      (function (t) {
                        return 'input' == t.nodeName.toLowerCase();
                      })(t) && 'hidden' == t.type
                    );
                  })(t) &&
                  ((function (t) {
                    let e = t.nodeName.toLowerCase();
                    return (
                      'input' === e ||
                      'select' === e ||
                      'button' === e ||
                      'textarea' === e
                    );
                  })(t) ||
                    (function (t) {
                      return (
                        (function (t) {
                          return 'a' == t.nodeName.toLowerCase();
                        })(t) && t.hasAttribute('href')
                      );
                    })(t) ||
                    t.hasAttribute('contenteditable') ||
                    w(t))
                );
              })(t) &&
              !this.isDisabled(t) &&
              ((null == e ? void 0 : e.ignoreVisibility) || this.isVisible(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Ub(i.a));
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: function () {
              return new t(Object(s.Ub)(i.a));
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      function w(t) {
        if (!t.hasAttribute('tabindex') || void 0 === t.tabIndex) return !1;
        let e = t.getAttribute('tabindex');
        return '-32768' != e && !(!e || isNaN(parseInt(e, 10)));
      }
      function C(t) {
        if (!w(t)) return null;
        const e = parseInt(t.getAttribute('tabindex') || '', 10);
        return isNaN(e) ? -1 : e;
      }
      class E {
        constructor(t, e, n, r, s = !1) {
          (this._element = t),
            (this._checker = e),
            (this._ngZone = n),
            (this._document = r),
            (this._hasAttached = !1),
            (this.startAnchorListener = () => this.focusLastTabbableElement()),
            (this.endAnchorListener = () => this.focusFirstTabbableElement()),
            (this._enabled = !0),
            s || this.attachAnchors();
        }
        get enabled() {
          return this._enabled;
        }
        set enabled(t) {
          (this._enabled = t),
            this._startAnchor &&
              this._endAnchor &&
              (this._toggleAnchorTabIndex(t, this._startAnchor),
              this._toggleAnchorTabIndex(t, this._endAnchor));
        }
        destroy() {
          const t = this._startAnchor,
            e = this._endAnchor;
          t &&
            (t.removeEventListener('focus', this.startAnchorListener),
            t.parentNode && t.parentNode.removeChild(t)),
            e &&
              (e.removeEventListener('focus', this.endAnchorListener),
              e.parentNode && e.parentNode.removeChild(e)),
            (this._startAnchor = this._endAnchor = null),
            (this._hasAttached = !1);
        }
        attachAnchors() {
          return (
            !!this._hasAttached ||
            (this._ngZone.runOutsideAngular(() => {
              this._startAnchor ||
                ((this._startAnchor = this._createAnchor()),
                this._startAnchor.addEventListener(
                  'focus',
                  this.startAnchorListener
                )),
                this._endAnchor ||
                  ((this._endAnchor = this._createAnchor()),
                  this._endAnchor.addEventListener(
                    'focus',
                    this.endAnchorListener
                  ));
            }),
            this._element.parentNode &&
              (this._element.parentNode.insertBefore(
                this._startAnchor,
                this._element
              ),
              this._element.parentNode.insertBefore(
                this._endAnchor,
                this._element.nextSibling
              ),
              (this._hasAttached = !0)),
            this._hasAttached)
          );
        }
        focusInitialElementWhenReady() {
          return new Promise((t) => {
            this._executeOnStable(() => t(this.focusInitialElement()));
          });
        }
        focusFirstTabbableElementWhenReady() {
          return new Promise((t) => {
            this._executeOnStable(() => t(this.focusFirstTabbableElement()));
          });
        }
        focusLastTabbableElementWhenReady() {
          return new Promise((t) => {
            this._executeOnStable(() => t(this.focusLastTabbableElement()));
          });
        }
        _getRegionBoundary(t) {
          let e = this._element.querySelectorAll(
            `[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`
          );
          for (let n = 0; n < e.length; n++)
            e[n].hasAttribute('cdk-focus-' + t)
              ? console.warn(
                  `Found use of deprecated attribute 'cdk-focus-${t}', use 'cdkFocusRegion${t}' instead. The deprecated attribute will be removed in 8.0.0.`,
                  e[n]
                )
              : e[n].hasAttribute('cdk-focus-region-' + t) &&
                console.warn(
                  `Found use of deprecated attribute 'cdk-focus-region-${t}', use 'cdkFocusRegion${t}' instead. The deprecated attribute will be removed in 8.0.0.`,
                  e[n]
                );
          return 'start' == t
            ? e.length
              ? e[0]
              : this._getFirstTabbableElement(this._element)
            : e.length
            ? e[e.length - 1]
            : this._getLastTabbableElement(this._element);
        }
        focusInitialElement() {
          const t = this._element.querySelector(
            '[cdk-focus-initial], [cdkFocusInitial]'
          );
          if (t) {
            if (
              (t.hasAttribute('cdk-focus-initial') &&
                console.warn(
                  "Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0",
                  t
                ),
              !this._checker.isFocusable(t))
            ) {
              const e = this._getFirstTabbableElement(t);
              return null == e || e.focus(), !!e;
            }
            return t.focus(), !0;
          }
          return this.focusFirstTabbableElement();
        }
        focusFirstTabbableElement() {
          const t = this._getRegionBoundary('start');
          return t && t.focus(), !!t;
        }
        focusLastTabbableElement() {
          const t = this._getRegionBoundary('end');
          return t && t.focus(), !!t;
        }
        hasAttached() {
          return this._hasAttached;
        }
        _getFirstTabbableElement(t) {
          if (this._checker.isFocusable(t) && this._checker.isTabbable(t))
            return t;
          let e = t.children || t.childNodes;
          for (let n = 0; n < e.length; n++) {
            let t =
              e[n].nodeType === this._document.ELEMENT_NODE
                ? this._getFirstTabbableElement(e[n])
                : null;
            if (t) return t;
          }
          return null;
        }
        _getLastTabbableElement(t) {
          if (this._checker.isFocusable(t) && this._checker.isTabbable(t))
            return t;
          let e = t.children || t.childNodes;
          for (let n = e.length - 1; n >= 0; n--) {
            let t =
              e[n].nodeType === this._document.ELEMENT_NODE
                ? this._getLastTabbableElement(e[n])
                : null;
            if (t) return t;
          }
          return null;
        }
        _createAnchor() {
          const t = this._document.createElement('div');
          return (
            this._toggleAnchorTabIndex(this._enabled, t),
            t.classList.add('cdk-visually-hidden'),
            t.classList.add('cdk-focus-trap-anchor'),
            t.setAttribute('aria-hidden', 'true'),
            t
          );
        }
        _toggleAnchorTabIndex(t, e) {
          t ? e.setAttribute('tabindex', '0') : e.removeAttribute('tabindex');
        }
        toggleAnchors(t) {
          this._startAnchor &&
            this._endAnchor &&
            (this._toggleAnchorTabIndex(t, this._startAnchor),
            this._toggleAnchorTabIndex(t, this._endAnchor));
        }
        _executeOnStable(t) {
          this._ngZone.isStable
            ? t()
            : this._ngZone.onStable.pipe(Object(p.a)(1)).subscribe(t);
        }
      }
      let S = (() => {
        class t {
          constructor(t, e, n) {
            (this._checker = t), (this._ngZone = e), (this._document = n);
          }
          create(t, e = !1) {
            return new E(t, this._checker, this._ngZone, this._document, e);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Ub(v), s.Ub(s.z), s.Ub(r.d));
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: function () {
              return new t(
                Object(s.Ub)(v),
                Object(s.Ub)(s.z),
                Object(s.Ub)(r.d)
              );
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      'undefined' != typeof Element && Element;
      const D = new s.q('liveAnnouncerElement', {
          providedIn: 'root',
          factory: function () {
            return null;
          }
        }),
        A = new s.q('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
      let x = (() => {
        class t {
          constructor(t, e, n, r) {
            (this._ngZone = e),
              (this._defaultOptions = r),
              (this._document = n),
              (this._liveElement = t || this._createLiveElement());
          }
          announce(t, ...e) {
            const n = this._defaultOptions;
            let r, s;
            return (
              1 === e.length && 'number' == typeof e[0]
                ? (s = e[0])
                : ([r, s] = e),
              this.clear(),
              clearTimeout(this._previousTimeout),
              r || (r = n && n.politeness ? n.politeness : 'polite'),
              null == s && n && (s = n.duration),
              this._liveElement.setAttribute('aria-live', r),
              this._ngZone.runOutsideAngular(
                () =>
                  new Promise((e) => {
                    clearTimeout(this._previousTimeout),
                      (this._previousTimeout = setTimeout(() => {
                        (this._liveElement.textContent = t),
                          e(),
                          'number' == typeof s &&
                            (this._previousTimeout = setTimeout(
                              () => this.clear(),
                              s
                            ));
                      }, 100));
                  })
              )
            );
          }
          clear() {
            this._liveElement && (this._liveElement.textContent = '');
          }
          ngOnDestroy() {
            clearTimeout(this._previousTimeout),
              this._liveElement &&
                this._liveElement.parentNode &&
                (this._liveElement.parentNode.removeChild(this._liveElement),
                (this._liveElement = null));
          }
          _createLiveElement() {
            const t = this._document.getElementsByClassName(
                'cdk-live-announcer-element'
              ),
              e = this._document.createElement('div');
            for (let n = 0; n < t.length; n++)
              t[n].parentNode.removeChild(t[n]);
            return (
              e.classList.add('cdk-live-announcer-element'),
              e.classList.add('cdk-visually-hidden'),
              e.setAttribute('aria-atomic', 'true'),
              e.setAttribute('aria-live', 'polite'),
              this._document.body.appendChild(e),
              e
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Ub(D, 8), s.Ub(s.z), s.Ub(r.d), s.Ub(A, 8));
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: function () {
              return new t(
                Object(s.Ub)(D, 8),
                Object(s.Ub)(s.z),
                Object(s.Ub)(r.d),
                Object(s.Ub)(A, 8)
              );
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      function O(t) {
        return 0 === t.buttons;
      }
      const k = new s.q('cdk-focus-monitor-default-options'),
        T = Object(i.f)({ passive: !0, capture: !0 });
      let F = (() => {
        class t {
          constructor(t, e, n, r) {
            (this._ngZone = t),
              (this._platform = e),
              (this._origin = null),
              (this._windowFocused = !1),
              (this._elementInfo = new Map()),
              (this._monitoredElementCount = 0),
              (this._rootNodeFocusListenerCount = new Map()),
              (this._documentKeydownListener = () => {
                (this._lastTouchTarget = null),
                  this._setOriginForCurrentEventQueue('keyboard');
              }),
              (this._documentMousedownListener = (t) => {
                if (!this._lastTouchTarget) {
                  const e = O(t) ? 'keyboard' : 'mouse';
                  this._setOriginForCurrentEventQueue(e);
                }
              }),
              (this._documentTouchstartListener = (t) => {
                null != this._touchTimeoutId &&
                  clearTimeout(this._touchTimeoutId),
                  (this._lastTouchTarget = j(t)),
                  (this._touchTimeoutId = setTimeout(
                    () => (this._lastTouchTarget = null),
                    650
                  ));
              }),
              (this._windowFocusListener = () => {
                (this._windowFocused = !0),
                  (this._windowFocusTimeoutId = setTimeout(
                    () => (this._windowFocused = !1)
                  ));
              }),
              (this._rootNodeFocusAndBlurListener = (t) => {
                const e = j(t),
                  n = 'focus' === t.type ? this._onFocus : this._onBlur;
                for (let r = e; r; r = r.parentElement) n.call(this, t, r);
              }),
              (this._document = n),
              (this._detectionMode =
                (null == r ? void 0 : r.detectionMode) || 0);
          }
          monitor(t, e = !1) {
            const n = Object(m.d)(t);
            if (!this._platform.isBrowser || 1 !== n.nodeType)
              return Object(u.a)(null);
            const r = Object(i.c)(n) || this._getDocument(),
              s = this._elementInfo.get(n);
            if (s) return e && (s.checkChildren = !0), s.subject;
            const a = { checkChildren: e, subject: new o.a(), rootNode: r };
            return (
              this._elementInfo.set(n, a),
              this._registerGlobalListeners(a),
              a.subject
            );
          }
          stopMonitoring(t) {
            const e = Object(m.d)(t),
              n = this._elementInfo.get(e);
            n &&
              (n.subject.complete(),
              this._setClasses(e),
              this._elementInfo.delete(e),
              this._removeGlobalListeners(n));
          }
          focusVia(t, e, n) {
            const r = Object(m.d)(t);
            r === this._getDocument().activeElement
              ? this._getClosestElementsInfo(r).forEach(([t, n]) =>
                  this._originChanged(t, e, n)
                )
              : (this._setOriginForCurrentEventQueue(e),
                'function' == typeof r.focus && r.focus(n));
          }
          ngOnDestroy() {
            this._elementInfo.forEach((t, e) => this.stopMonitoring(e));
          }
          _getDocument() {
            return this._document || document;
          }
          _getWindow() {
            return this._getDocument().defaultView || window;
          }
          _toggleClass(t, e, n) {
            n ? t.classList.add(e) : t.classList.remove(e);
          }
          _getFocusOrigin(t) {
            return this._origin
              ? this._origin
              : this._windowFocused && this._lastFocusOrigin
              ? this._lastFocusOrigin
              : this._wasCausedByTouch(t)
              ? 'touch'
              : 'program';
          }
          _setClasses(t, e) {
            this._toggleClass(t, 'cdk-focused', !!e),
              this._toggleClass(t, 'cdk-touch-focused', 'touch' === e),
              this._toggleClass(t, 'cdk-keyboard-focused', 'keyboard' === e),
              this._toggleClass(t, 'cdk-mouse-focused', 'mouse' === e),
              this._toggleClass(t, 'cdk-program-focused', 'program' === e);
          }
          _setOriginForCurrentEventQueue(t) {
            this._ngZone.runOutsideAngular(() => {
              (this._origin = t),
                0 === this._detectionMode &&
                  (this._originTimeoutId = setTimeout(
                    () => (this._origin = null),
                    1
                  ));
            });
          }
          _wasCausedByTouch(t) {
            const e = j(t);
            return (
              this._lastTouchTarget instanceof Node &&
              e instanceof Node &&
              (e === this._lastTouchTarget || e.contains(this._lastTouchTarget))
            );
          }
          _onFocus(t, e) {
            const n = this._elementInfo.get(e);
            n &&
              (n.checkChildren || e === j(t)) &&
              this._originChanged(e, this._getFocusOrigin(t), n);
          }
          _onBlur(t, e) {
            const n = this._elementInfo.get(e);
            !n ||
              (n.checkChildren &&
                t.relatedTarget instanceof Node &&
                e.contains(t.relatedTarget)) ||
              (this._setClasses(e), this._emitOrigin(n.subject, null));
          }
          _emitOrigin(t, e) {
            this._ngZone.run(() => t.next(e));
          }
          _registerGlobalListeners(t) {
            if (!this._platform.isBrowser) return;
            const e = t.rootNode,
              n = this._rootNodeFocusListenerCount.get(e) || 0;
            n ||
              this._ngZone.runOutsideAngular(() => {
                e.addEventListener(
                  'focus',
                  this._rootNodeFocusAndBlurListener,
                  T
                ),
                  e.addEventListener(
                    'blur',
                    this._rootNodeFocusAndBlurListener,
                    T
                  );
              }),
              this._rootNodeFocusListenerCount.set(e, n + 1),
              1 == ++this._monitoredElementCount &&
                this._ngZone.runOutsideAngular(() => {
                  const t = this._getDocument(),
                    e = this._getWindow();
                  t.addEventListener(
                    'keydown',
                    this._documentKeydownListener,
                    T
                  ),
                    t.addEventListener(
                      'mousedown',
                      this._documentMousedownListener,
                      T
                    ),
                    t.addEventListener(
                      'touchstart',
                      this._documentTouchstartListener,
                      T
                    ),
                    e.addEventListener('focus', this._windowFocusListener);
                });
          }
          _removeGlobalListeners(t) {
            const e = t.rootNode;
            if (this._rootNodeFocusListenerCount.has(e)) {
              const t = this._rootNodeFocusListenerCount.get(e);
              t > 1
                ? this._rootNodeFocusListenerCount.set(e, t - 1)
                : (e.removeEventListener(
                    'focus',
                    this._rootNodeFocusAndBlurListener,
                    T
                  ),
                  e.removeEventListener(
                    'blur',
                    this._rootNodeFocusAndBlurListener,
                    T
                  ),
                  this._rootNodeFocusListenerCount.delete(e));
            }
            if (!--this._monitoredElementCount) {
              const t = this._getDocument(),
                e = this._getWindow();
              t.removeEventListener(
                'keydown',
                this._documentKeydownListener,
                T
              ),
                t.removeEventListener(
                  'mousedown',
                  this._documentMousedownListener,
                  T
                ),
                t.removeEventListener(
                  'touchstart',
                  this._documentTouchstartListener,
                  T
                ),
                e.removeEventListener('focus', this._windowFocusListener),
                clearTimeout(this._windowFocusTimeoutId),
                clearTimeout(this._touchTimeoutId),
                clearTimeout(this._originTimeoutId);
            }
          }
          _originChanged(t, e, n) {
            this._setClasses(t, e),
              this._emitOrigin(n.subject, e),
              (this._lastFocusOrigin = e);
          }
          _getClosestElementsInfo(t) {
            const e = [];
            return (
              this._elementInfo.forEach((n, r) => {
                (r === t || (n.checkChildren && r.contains(t))) &&
                  e.push([r, n]);
              }),
              e
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Ub(s.z), s.Ub(i.a), s.Ub(r.d, 8), s.Ub(k, 8));
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: function () {
              return new t(
                Object(s.Ub)(s.z),
                Object(s.Ub)(i.a),
                Object(s.Ub)(r.d, 8),
                Object(s.Ub)(k, 8)
              );
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      function j(t) {
        return t.composedPath ? t.composedPath()[0] : t.target;
      }
      let I = (() => {
          class t {
            constructor(t, e) {
              (this._elementRef = t),
                (this._focusMonitor = e),
                (this.cdkFocusChange = new s.n());
            }
            ngAfterViewInit() {
              const t = this._elementRef.nativeElement;
              this._monitorSubscription = this._focusMonitor
                .monitor(
                  t,
                  1 === t.nodeType && t.hasAttribute('cdkMonitorSubtreeFocus')
                )
                .subscribe((t) => this.cdkFocusChange.emit(t));
            }
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef),
                this._monitorSubscription &&
                  this._monitorSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Kb(s.l), s.Kb(F));
            }),
            (t.ɵdir = s.Fb({
              type: t,
              selectors: [
                ['', 'cdkMonitorElementFocus', ''],
                ['', 'cdkMonitorSubtreeFocus', '']
              ],
              outputs: { cdkFocusChange: 'cdkFocusChange' }
            })),
            t
          );
        })(),
        R = (() => {
          class t {
            constructor(t, e) {
              (this._platform = t), (this._document = e);
            }
            getHighContrastMode() {
              if (!this._platform.isBrowser) return 0;
              const t = this._document.createElement('div');
              (t.style.backgroundColor = 'rgb(1,2,3)'),
                (t.style.position = 'absolute'),
                this._document.body.appendChild(t);
              const e = this._document.defaultView || window,
                n = e && e.getComputedStyle ? e.getComputedStyle(t) : null,
                r = ((n && n.backgroundColor) || '').replace(/ /g, '');
              switch ((this._document.body.removeChild(t), r)) {
                case 'rgb(0,0,0)':
                  return 2;
                case 'rgb(255,255,255)':
                  return 1;
              }
              return 0;
            }
            _applyBodyHighContrastModeCssClasses() {
              if (this._platform.isBrowser && this._document.body) {
                const t = this._document.body.classList;
                t.remove('cdk-high-contrast-active'),
                  t.remove('cdk-high-contrast-black-on-white'),
                  t.remove('cdk-high-contrast-white-on-black');
                const e = this.getHighContrastMode();
                1 === e
                  ? (t.add('cdk-high-contrast-active'),
                    t.add('cdk-high-contrast-black-on-white'))
                  : 2 === e &&
                    (t.add('cdk-high-contrast-active'),
                    t.add('cdk-high-contrast-white-on-black'));
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Ub(i.a), s.Ub(r.d));
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return new t(Object(s.Ub)(i.a), Object(s.Ub)(r.d));
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        P = (() => {
          class t {
            constructor(t) {
              t._applyBodyHighContrastModeCssClasses();
            }
          }
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)(s.Ub(R));
              },
              imports: [[i.b, g.c]]
            })),
            t
          );
        })();
    },
    vkgz: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('7o/Q'),
        s = n('KqfI'),
        i = n('n6bG');
      function o(t, e, n) {
        return function (r) {
          return r.lift(new a(t, e, n));
        };
      }
      class a {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(
            new u(t, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class u extends r.a {
        constructor(t, e, n, r) {
          super(t),
            (this._tapNext = s.a),
            (this._tapError = s.a),
            (this._tapComplete = s.a),
            (this._tapError = n || s.a),
            (this._tapComplete = r || s.a),
            Object(i.a)(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || s.a),
                (this._tapError = e.error || s.a),
                (this._tapComplete = e.complete || s.a));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
    },
    vxfF: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return m;
      }),
        n.d(e, 'b', function () {
          return b;
        }),
        n.d(e, 'c', function () {
          return p;
        }),
        n.d(e, 'd', function () {
          return _;
        }),
        n.d(e, 'e', function () {
          return g;
        }),
        n('8LU1');
      var r = n('fXoL'),
        s = n('XNiG'),
        i = n('LRne'),
        o = n('HDdC'),
        a = n('xgIS'),
        u = (n('eNwd'), n('7Hc7'), n('quSY'), n('7+OI'), n('/uUt'), n('3UWI')),
        c = n('pLZG'),
        l = n('1G5W');
      n('JX91'),
        n('7o/Q'),
        n('eIep'),
        n('3N8a'),
        n('IjjT'),
        n('WMd4'),
        n('9ppp'),
        n('Ylt2');
      var h = n('nLfN'),
        d = n('ofXK'),
        f = n('cH1L');
      n('0EQZ');
      let p = (() => {
          class t {
            constructor(t, e, n) {
              (this._ngZone = t),
                (this._platform = e),
                (this._scrolled = new s.a()),
                (this._globalSubscription = null),
                (this._scrolledCount = 0),
                (this.scrollContainers = new Map()),
                (this._document = n);
            }
            register(t) {
              this.scrollContainers.has(t) ||
                this.scrollContainers.set(
                  t,
                  t.elementScrolled().subscribe(() => this._scrolled.next(t))
                );
            }
            deregister(t) {
              const e = this.scrollContainers.get(t);
              e && (e.unsubscribe(), this.scrollContainers.delete(t));
            }
            scrolled(t = 20) {
              return this._platform.isBrowser
                ? new o.a((e) => {
                    this._globalSubscription || this._addGlobalListener();
                    const n =
                      t > 0
                        ? this._scrolled.pipe(Object(u.a)(t)).subscribe(e)
                        : this._scrolled.subscribe(e);
                    return (
                      this._scrolledCount++,
                      () => {
                        n.unsubscribe(),
                          this._scrolledCount--,
                          this._scrolledCount || this._removeGlobalListener();
                      }
                    );
                  })
                : Object(i.a)();
            }
            ngOnDestroy() {
              this._removeGlobalListener(),
                this.scrollContainers.forEach((t, e) => this.deregister(e)),
                this._scrolled.complete();
            }
            ancestorScrolled(t, e) {
              const n = this.getAncestorScrollContainers(t);
              return this.scrolled(e).pipe(
                Object(c.a)((t) => !t || n.indexOf(t) > -1)
              );
            }
            getAncestorScrollContainers(t) {
              const e = [];
              return (
                this.scrollContainers.forEach((n, r) => {
                  this._scrollableContainsElement(r, t) && e.push(r);
                }),
                e
              );
            }
            _getWindow() {
              return this._document.defaultView || window;
            }
            _scrollableContainsElement(t, e) {
              let n = e.nativeElement,
                r = t.getElementRef().nativeElement;
              do {
                if (n == r) return !0;
              } while ((n = n.parentElement));
              return !1;
            }
            _addGlobalListener() {
              this._globalSubscription = this._ngZone.runOutsideAngular(() => {
                const t = this._getWindow();
                return Object(a.a)(t.document, 'scroll').subscribe(() =>
                  this._scrolled.next()
                );
              });
            }
            _removeGlobalListener() {
              this._globalSubscription &&
                (this._globalSubscription.unsubscribe(),
                (this._globalSubscription = null));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Ub(r.z), r.Ub(h.a), r.Ub(d.d, 8));
            }),
            (t.ɵprov = Object(r.Gb)({
              factory: function () {
                return new t(
                  Object(r.Ub)(r.z),
                  Object(r.Ub)(h.a),
                  Object(r.Ub)(d.d, 8)
                );
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        m = (() => {
          class t {
            constructor(t, e, n, r) {
              (this.elementRef = t),
                (this.scrollDispatcher = e),
                (this.ngZone = n),
                (this.dir = r),
                (this._destroyed = new s.a()),
                (this._elementScrolled = new o.a((t) =>
                  this.ngZone.runOutsideAngular(() =>
                    Object(a.a)(this.elementRef.nativeElement, 'scroll')
                      .pipe(Object(l.a)(this._destroyed))
                      .subscribe(t)
                  )
                ));
            }
            ngOnInit() {
              this.scrollDispatcher.register(this);
            }
            ngOnDestroy() {
              this.scrollDispatcher.deregister(this),
                this._destroyed.next(),
                this._destroyed.complete();
            }
            elementScrolled() {
              return this._elementScrolled;
            }
            getElementRef() {
              return this.elementRef;
            }
            scrollTo(t) {
              const e = this.elementRef.nativeElement,
                n = this.dir && 'rtl' == this.dir.value;
              null == t.left && (t.left = n ? t.end : t.start),
                null == t.right && (t.right = n ? t.start : t.end),
                null != t.bottom &&
                  (t.top = e.scrollHeight - e.clientHeight - t.bottom),
                n && 0 != Object(h.d)()
                  ? (null != t.left &&
                      (t.right = e.scrollWidth - e.clientWidth - t.left),
                    2 == Object(h.d)()
                      ? (t.left = t.right)
                      : 1 == Object(h.d)() &&
                        (t.left = t.right ? -t.right : t.right))
                  : null != t.right &&
                    (t.left = e.scrollWidth - e.clientWidth - t.right),
                this._applyScrollToOptions(t);
            }
            _applyScrollToOptions(t) {
              const e = this.elementRef.nativeElement;
              Object(h.g)()
                ? e.scrollTo(t)
                : (null != t.top && (e.scrollTop = t.top),
                  null != t.left && (e.scrollLeft = t.left));
            }
            measureScrollOffset(t) {
              const e = this.elementRef.nativeElement;
              if ('top' == t) return e.scrollTop;
              if ('bottom' == t)
                return e.scrollHeight - e.clientHeight - e.scrollTop;
              const n = this.dir && 'rtl' == this.dir.value;
              return (
                'start' == t
                  ? (t = n ? 'right' : 'left')
                  : 'end' == t && (t = n ? 'left' : 'right'),
                n && 2 == Object(h.d)()
                  ? 'left' == t
                    ? e.scrollWidth - e.clientWidth - e.scrollLeft
                    : e.scrollLeft
                  : n && 1 == Object(h.d)()
                  ? 'left' == t
                    ? e.scrollLeft + e.scrollWidth - e.clientWidth
                    : -e.scrollLeft
                  : 'left' == t
                  ? e.scrollLeft
                  : e.scrollWidth - e.clientWidth - e.scrollLeft
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(r.l), r.Kb(p), r.Kb(r.z), r.Kb(f.b, 8));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['', 'cdk-scrollable', ''],
                ['', 'cdkScrollable', '']
              ]
            })),
            t
          );
        })(),
        g = (() => {
          class t {
            constructor(t, e, n) {
              (this._platform = t),
                (this._change = new s.a()),
                (this._changeListener = (t) => {
                  this._change.next(t);
                }),
                (this._document = n),
                e.runOutsideAngular(() => {
                  if (t.isBrowser) {
                    const t = this._getWindow();
                    t.addEventListener('resize', this._changeListener),
                      t.addEventListener(
                        'orientationchange',
                        this._changeListener
                      );
                  }
                  this.change().subscribe(() => this._updateViewportSize());
                });
            }
            ngOnDestroy() {
              if (this._platform.isBrowser) {
                const t = this._getWindow();
                t.removeEventListener('resize', this._changeListener),
                  t.removeEventListener(
                    'orientationchange',
                    this._changeListener
                  );
              }
              this._change.complete();
            }
            getViewportSize() {
              this._viewportSize || this._updateViewportSize();
              const t = {
                width: this._viewportSize.width,
                height: this._viewportSize.height
              };
              return this._platform.isBrowser || (this._viewportSize = null), t;
            }
            getViewportRect() {
              const t = this.getViewportScrollPosition(),
                { width: e, height: n } = this.getViewportSize();
              return {
                top: t.top,
                left: t.left,
                bottom: t.top + n,
                right: t.left + e,
                height: n,
                width: e
              };
            }
            getViewportScrollPosition() {
              if (!this._platform.isBrowser) return { top: 0, left: 0 };
              const t = this._document,
                e = this._getWindow(),
                n = t.documentElement,
                r = n.getBoundingClientRect();
              return {
                top:
                  -r.top || t.body.scrollTop || e.scrollY || n.scrollTop || 0,
                left:
                  -r.left || t.body.scrollLeft || e.scrollX || n.scrollLeft || 0
              };
            }
            change(t = 20) {
              return t > 0 ? this._change.pipe(Object(u.a)(t)) : this._change;
            }
            _getWindow() {
              return this._document.defaultView || window;
            }
            _updateViewportSize() {
              const t = this._getWindow();
              this._viewportSize = this._platform.isBrowser
                ? { width: t.innerWidth, height: t.innerHeight }
                : { width: 0, height: 0 };
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Ub(h.a), r.Ub(r.z), r.Ub(d.d, 8));
            }),
            (t.ɵprov = Object(r.Gb)({
              factory: function () {
                return new t(
                  Object(r.Ub)(h.a),
                  Object(r.Ub)(r.z),
                  Object(r.Ub)(d.d, 8)
                );
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        b = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              }
            })),
            t
          );
        })(),
        _ = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[f.a, h.b, b], f.a, b]
            })),
            t
          );
        })();
    },
    w1tV: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('oB13'),
        s = n('x+ZX'),
        i = n('XNiG');
      function o() {
        return new i.a();
      }
      function a() {
        return (t) => Object(s.a)()(Object(r.a)(o)(t));
      }
    },
    'x+ZX': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('7o/Q');
      function s() {
        return function (t) {
          return t.lift(new i(t));
        };
      }
      class i {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new o(t, n),
            s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class o extends r.a {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
    },
    xgIS: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('HDdC'),
        s = n('DH7j'),
        i = n('n6bG'),
        o = n('lJxs');
      function a(t, e, n, c) {
        return (
          Object(i.a)(n) && ((c = n), (n = void 0)),
          c
            ? a(t, e, n).pipe(
                Object(o.a)((t) => (Object(s.a)(t) ? c(...t) : c(t)))
              )
            : new r.a((r) => {
                u(
                  t,
                  e,
                  function (t) {
                    r.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : t
                    );
                  },
                  r,
                  n
                );
              })
        );
      }
      function u(t, e, n, r, s) {
        let i;
        if (
          (function (t) {
            return (
              t &&
              'function' == typeof t.addEventListener &&
              'function' == typeof t.removeEventListener
            );
          })(t)
        ) {
          const r = t;
          t.addEventListener(e, n, s),
            (i = () => r.removeEventListener(e, n, s));
        } else if (
          (function (t) {
            return t && 'function' == typeof t.on && 'function' == typeof t.off;
          })(t)
        ) {
          const r = t;
          t.on(e, n), (i = () => r.off(e, n));
        } else if (
          (function (t) {
            return (
              t &&
              'function' == typeof t.addListener &&
              'function' == typeof t.removeListener
            );
          })(t)
        ) {
          const r = t;
          t.addListener(e, n), (i = () => r.removeListener(e, n));
        } else {
          if (!t || !t.length) throw new TypeError('Invalid event target');
          for (let i = 0, o = t.length; i < o; i++) u(t[i], e, n, r, s);
        }
        r.add(i);
      }
    },
    yCtX: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('HDdC'),
        s = n('ngJS'),
        i = n('jZKg');
      function o(t, e) {
        return e ? Object(i.a)(t, e) : new r.a(Object(s.a)(t));
      }
    },
    'z+Ro': function (t, e, n) {
      'use strict';
      function r(t) {
        return t && 'function' == typeof t.schedule;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    z6cu: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('HDdC');
      function s(t, e) {
        return new r.a(
          e
            ? (n) => e.schedule(i, 0, { error: t, subscriber: n })
            : (e) => e.error(t)
        );
      }
      function i({ error: t, subscriber: e }) {
        e.error(t);
      }
    },
    zUnb: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('fXoL'),
        s = n('ofXK'),
        i = n('jhN1'),
        o = n('R1ws'),
        a = n('NXyV'),
        u = n('z6cu'),
        c = n('xgIS'),
        l = n('LRne'),
        h = n('GyhO'),
        d = n('XNiG'),
        f = n('HDdC'),
        p = n('KqfI');
      const m = new f.a(p.a);
      var g = n('VRyK'),
        b = n('lJxs'),
        _ = n('pLZG'),
        y = n('eIep'),
        v = n('oB13'),
        w = n('IzEk'),
        C = n('vkgz'),
        E = n('3E0/');
      const S = 'Service workers are disabled or not supported by this browser';
      class D {
        constructor(t) {
          if (((this.serviceWorker = t), t)) {
            const e = Object(c.a)(t, 'controllerchange').pipe(
                Object(b.a)(() => t.controller)
              ),
              n = Object(a.a)(() => Object(l.a)(t.controller)),
              r = Object(h.a)(n, e);
            (this.worker = r.pipe(Object(_.a)((t) => !!t))),
              (this.registration = this.worker.pipe(
                Object(y.a)(() => t.getRegistration())
              ));
            const s = Object(c.a)(t, 'message')
              .pipe(Object(b.a)((t) => t.data))
              .pipe(Object(_.a)((t) => t && t.type))
              .pipe(Object(v.a)(new d.a()));
            s.connect(), (this.events = s);
          } else
            this.worker = this.events = this.registration = Object(a.a)(() =>
              Object(u.a)(
                new Error(
                  'Service workers are disabled or not supported by this browser'
                )
              )
            );
        }
        postMessage(t, e) {
          return this.worker
            .pipe(
              Object(w.a)(1),
              Object(C.a)((n) => {
                n.postMessage(Object.assign({ action: t }, e));
              })
            )
            .toPromise()
            .then(() => {});
        }
        postMessageWithStatus(t, e, n) {
          const r = this.waitForStatus(n),
            s = this.postMessage(t, e);
          return Promise.all([r, s]).then(() => {});
        }
        generateNonce() {
          return Math.round(1e7 * Math.random());
        }
        eventsOfType(t) {
          return this.events.pipe(Object(_.a)((e) => e.type === t));
        }
        nextEventOfType(t) {
          return this.eventsOfType(t).pipe(Object(w.a)(1));
        }
        waitForStatus(t) {
          return this.eventsOfType('STATUS')
            .pipe(
              Object(_.a)((e) => e.nonce === t),
              Object(w.a)(1),
              Object(b.a)((t) => {
                if (!t.status) throw new Error(t.error);
              })
            )
            .toPromise();
        }
        get isEnabled() {
          return !!this.serviceWorker;
        }
      }
      let A = (() => {
          class t {
            constructor(t) {
              if (
                ((this.sw = t),
                (this.subscriptionChanges = new d.a()),
                !t.isEnabled)
              )
                return (
                  (this.messages = m),
                  (this.notificationClicks = m),
                  void (this.subscription = m)
                );
              (this.messages = this.sw
                .eventsOfType('PUSH')
                .pipe(Object(b.a)((t) => t.data))),
                (this.notificationClicks = this.sw
                  .eventsOfType('NOTIFICATION_CLICK')
                  .pipe(Object(b.a)((t) => t.data))),
                (this.pushManager = this.sw.registration.pipe(
                  Object(b.a)((t) => t.pushManager)
                ));
              const e = this.pushManager.pipe(
                Object(y.a)((t) => t.getSubscription())
              );
              this.subscription = Object(g.a)(e, this.subscriptionChanges);
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            requestSubscription(t) {
              if (!this.sw.isEnabled) return Promise.reject(new Error(S));
              const e = { userVisibleOnly: !0 };
              let n = this.decodeBase64(
                  t.serverPublicKey.replace(/_/g, '/').replace(/-/g, '+')
                ),
                r = new Uint8Array(new ArrayBuffer(n.length));
              for (let s = 0; s < n.length; s++) r[s] = n.charCodeAt(s);
              return (
                (e.applicationServerKey = r),
                this.pushManager
                  .pipe(
                    Object(y.a)((t) => t.subscribe(e)),
                    Object(w.a)(1)
                  )
                  .toPromise()
                  .then((t) => (this.subscriptionChanges.next(t), t))
              );
            }
            unsubscribe() {
              return this.sw.isEnabled
                ? this.subscription
                    .pipe(
                      Object(w.a)(1),
                      Object(y.a)((t) => {
                        if (null === t)
                          throw new Error(
                            'Not subscribed to push notifications.'
                          );
                        return t.unsubscribe().then((t) => {
                          if (!t) throw new Error('Unsubscribe failed!');
                          this.subscriptionChanges.next(null);
                        });
                      })
                    )
                    .toPromise()
                : Promise.reject(new Error(S));
            }
            decodeBase64(t) {
              return atob(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Ub(D));
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        x = (() => {
          class t {
            constructor(t) {
              if (((this.sw = t), !t.isEnabled))
                return (
                  (this.available = m),
                  (this.activated = m),
                  void (this.unrecoverable = m)
                );
              (this.available = this.sw.eventsOfType('UPDATE_AVAILABLE')),
                (this.activated = this.sw.eventsOfType('UPDATE_ACTIVATED')),
                (this.unrecoverable = this.sw.eventsOfType(
                  'UNRECOVERABLE_STATE'
                ));
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            checkForUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(S));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithStatus(
                'CHECK_FOR_UPDATES',
                { statusNonce: t },
                t
              );
            }
            activateUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(S));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithStatus(
                'ACTIVATE_UPDATE',
                { statusNonce: t },
                t
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Ub(D));
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class O {}
      const k = new r.q('NGSW_REGISTER_SCRIPT');
      function T(t, e, n, i) {
        return () => {
          if (
            !Object(s.v)(i) ||
            !('serviceWorker' in navigator) ||
            !1 === n.enabled
          )
            return;
          let o;
          if (
            (navigator.serviceWorker.addEventListener(
              'controllerchange',
              () => {
                null !== navigator.serviceWorker.controller &&
                  navigator.serviceWorker.controller.postMessage({
                    action: 'INITIALIZE'
                  });
              }
            ),
            'function' == typeof n.registrationStrategy)
          )
            o = n.registrationStrategy();
          else {
            const [e, ...r] = (
              n.registrationStrategy || 'registerWhenStable:30000'
            ).split(':');
            switch (e) {
              case 'registerImmediately':
                o = Object(l.a)(null);
                break;
              case 'registerWithDelay':
                o = F(+r[0] || 0);
                break;
              case 'registerWhenStable':
                o = r[0] ? Object(g.a)(j(t), F(+r[0])) : j(t);
                break;
              default:
                throw new Error(
                  'Unknown ServiceWorker registration strategy: ' +
                    n.registrationStrategy
                );
            }
          }
          t.get(r.z).runOutsideAngular(() =>
            o.pipe(Object(w.a)(1)).subscribe(() =>
              navigator.serviceWorker
                .register(e, { scope: n.scope })
                .catch((e) => {
                  t.get(r.m).handleError(e);
                })
            )
          );
        };
      }
      function F(t) {
        return Object(l.a)(null).pipe(Object(E.a)(t));
      }
      function j(t) {
        return t.get(r.g).isStable.pipe(Object(_.a)((t) => t));
      }
      function I(t, e) {
        return new D(
          Object(s.v)(e) && !1 !== t.enabled ? navigator.serviceWorker : void 0
        );
      }
      let R = (() => {
        class t {
          static register(e, n = {}) {
            return {
              ngModule: t,
              providers: [
                { provide: k, useValue: e },
                { provide: O, useValue: n },
                { provide: D, useFactory: I, deps: [O, r.B] },
                {
                  provide: r.d,
                  useFactory: T,
                  deps: [r.r, k, O, r.B],
                  multi: !0
                }
              ]
            };
          }
        }
        return (
          (t.ɵmod = r.Ib({ type: t })),
          (t.ɵinj = r.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            providers: [A, x]
          })),
          t
        );
      })();
      var P = n('u47x'),
        N = n('GU7r'),
        L = n('+rOU'),
        M = n('FKr1'),
        V = (n('quSY'), n('PqYM')),
        B = n('R0Ic'),
        U = n('JX91'),
        z = n('/uUt'),
        H = n('1G5W'),
        q = n('8LU1'),
        K = n('nLfN'),
        $ = n('FtGj'),
        G = n('cH1L'),
        W = n('vxfF');
      const Q = ['*'],
        Z = ['tabListContainer'],
        X = ['tabList'],
        Y = ['nextPaginator'],
        J = ['previousPaginator'],
        tt = ['mat-tab-nav-bar', ''],
        et = new r.q('MatInkBarPositioner', {
          providedIn: 'root',
          factory: function () {
            return (t) => ({
              left: t ? (t.offsetLeft || 0) + 'px' : '0',
              width: t ? (t.offsetWidth || 0) + 'px' : '0'
            });
          }
        });
      let nt = (() => {
        class t {
          constructor(t, e, n, r) {
            (this._elementRef = t),
              (this._ngZone = e),
              (this._inkBarPositioner = n),
              (this._animationMode = r);
          }
          alignToElement(t) {
            this.show(),
              'undefined' != typeof requestAnimationFrame
                ? this._ngZone.runOutsideAngular(() => {
                    requestAnimationFrame(() => this._setStyles(t));
                  })
                : this._setStyles(t);
          }
          show() {
            this._elementRef.nativeElement.style.visibility = 'visible';
          }
          hide() {
            this._elementRef.nativeElement.style.visibility = 'hidden';
          }
          _setStyles(t) {
            const e = this._inkBarPositioner(t),
              n = this._elementRef.nativeElement;
            (n.style.left = e.left), (n.style.width = e.width);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.l), r.Kb(r.z), r.Kb(et), r.Kb(o.a, 8));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [['mat-ink-bar']],
            hostAttrs: [1, 'mat-ink-bar'],
            hostVars: 2,
            hostBindings: function (t, e) {
              2 & t &&
                r.Cb(
                  '_mat-animation-noopable',
                  'NoopAnimations' === e._animationMode
                );
            }
          })),
          t
        );
      })();
      const rt = Object(K.f)({ passive: !0 });
      let st = (() => {
          class t {
            constructor(t, e, n, s, i, o, a) {
              (this._elementRef = t),
                (this._changeDetectorRef = e),
                (this._viewportRuler = n),
                (this._dir = s),
                (this._ngZone = i),
                (this._platform = o),
                (this._animationMode = a),
                (this._scrollDistance = 0),
                (this._selectedIndexChanged = !1),
                (this._destroyed = new d.a()),
                (this._showPaginationControls = !1),
                (this._disableScrollAfter = !0),
                (this._disableScrollBefore = !0),
                (this._stopScrolling = new d.a()),
                (this.disablePagination = !1),
                (this._selectedIndex = 0),
                (this.selectFocusedIndex = new r.n()),
                (this.indexFocused = new r.n()),
                i.runOutsideAngular(() => {
                  Object(c.a)(t.nativeElement, 'mouseleave')
                    .pipe(Object(H.a)(this._destroyed))
                    .subscribe(() => {
                      this._stopInterval();
                    });
                });
            }
            get selectedIndex() {
              return this._selectedIndex;
            }
            set selectedIndex(t) {
              (t = Object(q.e)(t)),
                this._selectedIndex != t &&
                  ((this._selectedIndexChanged = !0),
                  (this._selectedIndex = t),
                  this._keyManager && this._keyManager.updateActiveItem(t));
            }
            ngAfterViewInit() {
              Object(c.a)(
                this._previousPaginator.nativeElement,
                'touchstart',
                rt
              )
                .pipe(Object(H.a)(this._destroyed))
                .subscribe(() => {
                  this._handlePaginatorPress('before');
                }),
                Object(c.a)(this._nextPaginator.nativeElement, 'touchstart', rt)
                  .pipe(Object(H.a)(this._destroyed))
                  .subscribe(() => {
                    this._handlePaginatorPress('after');
                  });
            }
            ngAfterContentInit() {
              const t = this._dir ? this._dir.change : Object(l.a)(null),
                e = this._viewportRuler.change(150),
                n = () => {
                  this.updatePagination(), this._alignInkBarToSelectedTab();
                };
              (this._keyManager = new P.d(this._items)
                .withHorizontalOrientation(this._getLayoutDirection())
                .withHomeAndEnd()
                .withWrap()),
                this._keyManager.updateActiveItem(this._selectedIndex),
                'undefined' != typeof requestAnimationFrame
                  ? requestAnimationFrame(n)
                  : n(),
                Object(g.a)(t, e, this._items.changes)
                  .pipe(Object(H.a)(this._destroyed))
                  .subscribe(() => {
                    Promise.resolve().then(n),
                      this._keyManager.withHorizontalOrientation(
                        this._getLayoutDirection()
                      );
                  }),
                this._keyManager.change
                  .pipe(Object(H.a)(this._destroyed))
                  .subscribe((t) => {
                    this.indexFocused.emit(t), this._setTabFocus(t);
                  });
            }
            ngAfterContentChecked() {
              this._tabLabelCount != this._items.length &&
                (this.updatePagination(),
                (this._tabLabelCount = this._items.length),
                this._changeDetectorRef.markForCheck()),
                this._selectedIndexChanged &&
                  (this._scrollToLabel(this._selectedIndex),
                  this._checkScrollingControls(),
                  this._alignInkBarToSelectedTab(),
                  (this._selectedIndexChanged = !1),
                  this._changeDetectorRef.markForCheck()),
                this._scrollDistanceChanged &&
                  (this._updateTabScrollPosition(),
                  (this._scrollDistanceChanged = !1),
                  this._changeDetectorRef.markForCheck());
            }
            ngOnDestroy() {
              this._destroyed.next(),
                this._destroyed.complete(),
                this._stopScrolling.complete();
            }
            _handleKeydown(t) {
              if (!Object($.o)(t))
                switch (t.keyCode) {
                  case $.d:
                  case $.j:
                    this.focusIndex !== this.selectedIndex &&
                      (this.selectFocusedIndex.emit(this.focusIndex),
                      this._itemSelected(t));
                    break;
                  default:
                    this._keyManager.onKeydown(t);
                }
            }
            _onContentChanges() {
              const t = this._elementRef.nativeElement.textContent;
              t !== this._currentTextContent &&
                ((this._currentTextContent = t || ''),
                this._ngZone.run(() => {
                  this.updatePagination(),
                    this._alignInkBarToSelectedTab(),
                    this._changeDetectorRef.markForCheck();
                }));
            }
            updatePagination() {
              this._checkPaginationEnabled(),
                this._checkScrollingControls(),
                this._updateTabScrollPosition();
            }
            get focusIndex() {
              return this._keyManager ? this._keyManager.activeItemIndex : 0;
            }
            set focusIndex(t) {
              this._isValidIndex(t) &&
                this.focusIndex !== t &&
                this._keyManager &&
                this._keyManager.setActiveItem(t);
            }
            _isValidIndex(t) {
              if (!this._items) return !0;
              const e = this._items ? this._items.toArray()[t] : null;
              return !!e && !e.disabled;
            }
            _setTabFocus(t) {
              if (
                (this._showPaginationControls && this._scrollToLabel(t),
                this._items && this._items.length)
              ) {
                this._items.toArray()[t].focus();
                const e = this._tabListContainer.nativeElement,
                  n = this._getLayoutDirection();
                e.scrollLeft = 'ltr' == n ? 0 : e.scrollWidth - e.offsetWidth;
              }
            }
            _getLayoutDirection() {
              return this._dir && 'rtl' === this._dir.value ? 'rtl' : 'ltr';
            }
            _updateTabScrollPosition() {
              if (this.disablePagination) return;
              const t = this.scrollDistance,
                e = 'ltr' === this._getLayoutDirection() ? -t : t;
              (this._tabList.nativeElement.style.transform = `translateX(${Math.round(
                e
              )}px)`),
                (this._platform.TRIDENT || this._platform.EDGE) &&
                  (this._tabListContainer.nativeElement.scrollLeft = 0);
            }
            get scrollDistance() {
              return this._scrollDistance;
            }
            set scrollDistance(t) {
              this._scrollTo(t);
            }
            _scrollHeader(t) {
              return this._scrollTo(
                this._scrollDistance +
                  (('before' == t ? -1 : 1) *
                    this._tabListContainer.nativeElement.offsetWidth) /
                    3
              );
            }
            _handlePaginatorClick(t) {
              this._stopInterval(), this._scrollHeader(t);
            }
            _scrollToLabel(t) {
              if (this.disablePagination) return;
              const e = this._items ? this._items.toArray()[t] : null;
              if (!e) return;
              const n = this._tabListContainer.nativeElement.offsetWidth,
                { offsetLeft: r, offsetWidth: s } = e.elementRef.nativeElement;
              let i, o;
              'ltr' == this._getLayoutDirection()
                ? ((i = r), (o = i + s))
                : ((o = this._tabList.nativeElement.offsetWidth - r),
                  (i = o - s));
              const a = this.scrollDistance,
                u = this.scrollDistance + n;
              i < a
                ? (this.scrollDistance -= a - i + 60)
                : o > u && (this.scrollDistance += o - u + 60);
            }
            _checkPaginationEnabled() {
              if (this.disablePagination) this._showPaginationControls = !1;
              else {
                const t =
                  this._tabList.nativeElement.scrollWidth >
                  this._elementRef.nativeElement.offsetWidth;
                t || (this.scrollDistance = 0),
                  t !== this._showPaginationControls &&
                    this._changeDetectorRef.markForCheck(),
                  (this._showPaginationControls = t);
              }
            }
            _checkScrollingControls() {
              this.disablePagination
                ? (this._disableScrollAfter = this._disableScrollBefore = !0)
                : ((this._disableScrollBefore = 0 == this.scrollDistance),
                  (this._disableScrollAfter =
                    this.scrollDistance == this._getMaxScrollDistance()),
                  this._changeDetectorRef.markForCheck());
            }
            _getMaxScrollDistance() {
              return (
                this._tabList.nativeElement.scrollWidth -
                  this._tabListContainer.nativeElement.offsetWidth || 0
              );
            }
            _alignInkBarToSelectedTab() {
              const t =
                  this._items && this._items.length
                    ? this._items.toArray()[this.selectedIndex]
                    : null,
                e = t ? t.elementRef.nativeElement : null;
              e ? this._inkBar.alignToElement(e) : this._inkBar.hide();
            }
            _stopInterval() {
              this._stopScrolling.next();
            }
            _handlePaginatorPress(t, e) {
              (e && null != e.button && 0 !== e.button) ||
                (this._stopInterval(),
                Object(V.a)(650, 100)
                  .pipe(
                    Object(H.a)(
                      Object(g.a)(this._stopScrolling, this._destroyed)
                    )
                  )
                  .subscribe(() => {
                    const {
                      maxScrollDistance: e,
                      distance: n
                    } = this._scrollHeader(t);
                    (0 === n || n >= e) && this._stopInterval();
                  }));
            }
            _scrollTo(t) {
              if (this.disablePagination)
                return { maxScrollDistance: 0, distance: 0 };
              const e = this._getMaxScrollDistance();
              return (
                (this._scrollDistance = Math.max(0, Math.min(e, t))),
                (this._scrollDistanceChanged = !0),
                this._checkScrollingControls(),
                { maxScrollDistance: e, distance: this._scrollDistance }
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(r.l),
                r.Kb(r.h),
                r.Kb(W.e),
                r.Kb(G.b, 8),
                r.Kb(r.z),
                r.Kb(K.a),
                r.Kb(o.a, 8)
              );
            }),
            (t.ɵdir = r.Fb({
              type: t,
              inputs: { disablePagination: 'disablePagination' }
            })),
            t
          );
        })(),
        it = (() => {
          class t extends st {
            constructor(t, e, n, r, s, i, o) {
              super(t, r, s, e, n, i, o),
                (this._disableRipple = !1),
                (this.color = 'primary');
            }
            get backgroundColor() {
              return this._backgroundColor;
            }
            set backgroundColor(t) {
              const e = this._elementRef.nativeElement.classList;
              e.remove('mat-background-' + this.backgroundColor),
                t && e.add('mat-background-' + t),
                (this._backgroundColor = t);
            }
            get disableRipple() {
              return this._disableRipple;
            }
            set disableRipple(t) {
              this._disableRipple = Object(q.b)(t);
            }
            _itemSelected() {}
            ngAfterContentInit() {
              this._items.changes
                .pipe(Object(U.a)(null), Object(H.a)(this._destroyed))
                .subscribe(() => {
                  this.updateActiveLink();
                }),
                super.ngAfterContentInit();
            }
            updateActiveLink() {
              if (!this._items) return;
              const t = this._items.toArray();
              for (let e = 0; e < t.length; e++)
                if (t[e].active)
                  return (
                    (this.selectedIndex = e),
                    void this._changeDetectorRef.markForCheck()
                  );
              (this.selectedIndex = -1), this._inkBar.hide();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(r.l),
                r.Kb(G.b, 8),
                r.Kb(r.z),
                r.Kb(r.h),
                r.Kb(W.e),
                r.Kb(K.a),
                r.Kb(o.a, 8)
              );
            }),
            (t.ɵdir = r.Fb({
              type: t,
              inputs: {
                color: 'color',
                backgroundColor: 'backgroundColor',
                disableRipple: 'disableRipple'
              },
              features: [r.wb]
            })),
            t
          );
        })(),
        ot = (() => {
          class t extends it {
            constructor(t, e, n, r, s, i, o) {
              super(t, e, n, r, s, i, o);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(r.l),
                r.Kb(G.b, 8),
                r.Kb(r.z),
                r.Kb(r.h),
                r.Kb(W.e),
                r.Kb(K.a),
                r.Kb(o.a, 8)
              );
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['', 'mat-tab-nav-bar', '']],
              contentQueries: function (t, e, n) {
                if ((1 & t && r.Db(n, lt, !0), 2 & t)) {
                  let t;
                  r.nc((t = r.Yb())) && (e._items = t);
                }
              },
              viewQuery: function (t, e) {
                if (
                  (1 & t &&
                    (r.vc(nt, !0),
                    r.vc(Z, !0),
                    r.vc(X, !0),
                    r.Ec(Y, !0),
                    r.Ec(J, !0)),
                  2 & t)
                ) {
                  let t;
                  r.nc((t = r.Yb())) && (e._inkBar = t.first),
                    r.nc((t = r.Yb())) && (e._tabListContainer = t.first),
                    r.nc((t = r.Yb())) && (e._tabList = t.first),
                    r.nc((t = r.Yb())) && (e._nextPaginator = t.first),
                    r.nc((t = r.Yb())) && (e._previousPaginator = t.first);
                }
              },
              hostAttrs: [1, 'mat-tab-nav-bar', 'mat-tab-header'],
              hostVars: 10,
              hostBindings: function (t, e) {
                2 & t &&
                  r.Cb(
                    'mat-tab-header-pagination-controls-enabled',
                    e._showPaginationControls
                  )('mat-tab-header-rtl', 'rtl' == e._getLayoutDirection())(
                    'mat-primary',
                    'warn' !== e.color && 'accent' !== e.color
                  )('mat-accent', 'accent' === e.color)(
                    'mat-warn',
                    'warn' === e.color
                  );
              },
              inputs: { color: 'color' },
              exportAs: ['matTabNavBar', 'matTabNav'],
              features: [r.wb],
              attrs: tt,
              ngContentSelectors: Q,
              decls: 13,
              vars: 8,
              consts: [
                [
                  'aria-hidden',
                  'true',
                  'mat-ripple',
                  '',
                  1,
                  'mat-tab-header-pagination',
                  'mat-tab-header-pagination-before',
                  'mat-elevation-z4',
                  3,
                  'matRippleDisabled',
                  'click',
                  'mousedown',
                  'touchend'
                ],
                ['previousPaginator', ''],
                [1, 'mat-tab-header-pagination-chevron'],
                [1, 'mat-tab-link-container', 3, 'keydown'],
                ['tabListContainer', ''],
                [1, 'mat-tab-list', 3, 'cdkObserveContent'],
                ['tabList', ''],
                [1, 'mat-tab-links'],
                [
                  'aria-hidden',
                  'true',
                  'mat-ripple',
                  '',
                  1,
                  'mat-tab-header-pagination',
                  'mat-tab-header-pagination-after',
                  'mat-elevation-z4',
                  3,
                  'matRippleDisabled',
                  'mousedown',
                  'click',
                  'touchend'
                ],
                ['nextPaginator', '']
              ],
              template: function (t, e) {
                1 & t &&
                  (r.hc(),
                  r.Qb(0, 'div', 0, 1),
                  r.Xb('click', function () {
                    return e._handlePaginatorClick('before');
                  })('mousedown', function (t) {
                    return e._handlePaginatorPress('before', t);
                  })('touchend', function () {
                    return e._stopInterval();
                  }),
                  r.Lb(2, 'div', 2),
                  r.Pb(),
                  r.Qb(3, 'div', 3, 4),
                  r.Xb('keydown', function (t) {
                    return e._handleKeydown(t);
                  }),
                  r.Qb(5, 'div', 5, 6),
                  r.Xb('cdkObserveContent', function () {
                    return e._onContentChanges();
                  }),
                  r.Qb(7, 'div', 7),
                  r.gc(8),
                  r.Pb(),
                  r.Lb(9, 'mat-ink-bar'),
                  r.Pb(),
                  r.Pb(),
                  r.Qb(10, 'div', 8, 9),
                  r.Xb('mousedown', function (t) {
                    return e._handlePaginatorPress('after', t);
                  })('click', function () {
                    return e._handlePaginatorClick('after');
                  })('touchend', function () {
                    return e._stopInterval();
                  }),
                  r.Lb(12, 'div', 2),
                  r.Pb()),
                  2 & t &&
                    (r.Cb(
                      'mat-tab-header-pagination-disabled',
                      e._disableScrollBefore
                    ),
                    r.ic(
                      'matRippleDisabled',
                      e._disableScrollBefore || e.disableRipple
                    ),
                    r.zb(5),
                    r.Cb(
                      '_mat-animation-noopable',
                      'NoopAnimations' === e._animationMode
                    ),
                    r.zb(5),
                    r.Cb(
                      'mat-tab-header-pagination-disabled',
                      e._disableScrollAfter
                    ),
                    r.ic(
                      'matRippleDisabled',
                      e._disableScrollAfter || e.disableRipple
                    ));
              },
              directives: [M.m, N.a, nt],
              styles: [
                '.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n'
              ],
              encapsulation: 2
            })),
            t
          );
        })();
      class at {}
      const ut = Object(M.v)(Object(M.s)(Object(M.t)(at)));
      let ct = (() => {
          class t extends ut {
            constructor(t, e, n, r, s, i) {
              super(),
                (this._tabNavBar = t),
                (this.elementRef = e),
                (this._focusMonitor = s),
                (this._isActive = !1),
                (this.rippleConfig = n || {}),
                (this.tabIndex = parseInt(r) || 0),
                'NoopAnimations' === i &&
                  (this.rippleConfig.animation = {
                    enterDuration: 0,
                    exitDuration: 0
                  });
            }
            get active() {
              return this._isActive;
            }
            set active(t) {
              Object(q.b)(t) !== this._isActive &&
                ((this._isActive = t), this._tabNavBar.updateActiveLink());
            }
            get rippleDisabled() {
              return (
                this.disabled ||
                this.disableRipple ||
                this._tabNavBar.disableRipple ||
                !!this.rippleConfig.disabled
              );
            }
            focus() {
              this.elementRef.nativeElement.focus();
            }
            ngAfterViewInit() {
              this._focusMonitor.monitor(this.elementRef);
            }
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this.elementRef);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(it),
                r.Kb(r.l),
                r.Kb(M.d, 8),
                r.Vb('tabindex'),
                r.Kb(P.e),
                r.Kb(o.a, 8)
              );
            }),
            (t.ɵdir = r.Fb({
              type: t,
              inputs: { active: 'active' },
              features: [r.wb]
            })),
            t
          );
        })(),
        lt = (() => {
          class t extends ct {
            constructor(t, e, n, r, s, i, o, a) {
              super(t, e, s, i, o, a),
                (this._tabLinkRipple = new M.o(this, n, e, r)),
                this._tabLinkRipple.setupTriggerEvents(e.nativeElement);
            }
            ngOnDestroy() {
              super.ngOnDestroy(), this._tabLinkRipple._removeTriggerEvents();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(ot),
                r.Kb(r.l),
                r.Kb(r.z),
                r.Kb(K.a),
                r.Kb(M.d, 8),
                r.Vb('tabindex'),
                r.Kb(P.e),
                r.Kb(o.a, 8)
              );
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['', 'mat-tab-link', ''],
                ['', 'matTabLink', '']
              ],
              hostAttrs: [1, 'mat-tab-link', 'mat-focus-indicator'],
              hostVars: 7,
              hostBindings: function (t, e) {
                2 & t &&
                  (r.Ab('aria-current', e.active ? 'page' : null)(
                    'aria-disabled',
                    e.disabled
                  )('tabIndex', e.tabIndex),
                  r.Cb('mat-tab-disabled', e.disabled)(
                    'mat-tab-label-active',
                    e.active
                  ));
              },
              inputs: {
                disabled: 'disabled',
                disableRipple: 'disableRipple',
                tabIndex: 'tabIndex'
              },
              exportAs: ['matTabLink'],
              features: [r.wb]
            })),
            t
          );
        })(),
        ht = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[s.c, M.e, L.g, M.n, N.c, P.a], M.e]
            })),
            t
          );
        })();
      var dt = n('9Xeq');
      const ft = [ht];
      let pt = (() => {
        class t {}
        return (
          (t.ɵmod = r.Ib({ type: t })),
          (t.ɵinj = r.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[s.c, ...ft, dt.a]]
          })),
          t
        );
      })();
      var mt = n('bTqV'),
        gt = n('NFeN');
      const bt = ['*', [['mat-toolbar-row']]],
        _t = ['*', 'mat-toolbar-row'];
      class yt {
        constructor(t) {
          this._elementRef = t;
        }
      }
      const vt = Object(M.r)(yt);
      let wt = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [['mat-toolbar-row']],
              hostAttrs: [1, 'mat-toolbar-row'],
              exportAs: ['matToolbarRow']
            })),
            t
          );
        })(),
        Ct = (() => {
          class t extends vt {
            constructor(t, e, n) {
              super(t), (this._platform = e), (this._document = n);
            }
            ngAfterViewInit() {
              this._platform.isBrowser &&
                (this._checkToolbarMixedModes(),
                this._toolbarRows.changes.subscribe(() =>
                  this._checkToolbarMixedModes()
                ));
            }
            _checkToolbarMixedModes() {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(r.l), r.Kb(K.a), r.Kb(s.d));
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['mat-toolbar']],
              contentQueries: function (t, e, n) {
                if ((1 & t && r.Db(n, wt, !0), 2 & t)) {
                  let t;
                  r.nc((t = r.Yb())) && (e._toolbarRows = t);
                }
              },
              hostAttrs: [1, 'mat-toolbar'],
              hostVars: 4,
              hostBindings: function (t, e) {
                2 & t &&
                  r.Cb('mat-toolbar-multiple-rows', e._toolbarRows.length > 0)(
                    'mat-toolbar-single-row',
                    0 === e._toolbarRows.length
                  );
              },
              inputs: { color: 'color' },
              exportAs: ['matToolbar'],
              features: [r.wb],
              ngContentSelectors: _t,
              decls: 2,
              vars: 0,
              template: function (t, e) {
                1 & t && (r.hc(bt), r.gc(0), r.gc(1, 1));
              },
              styles: [
                '.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            t
          );
        })();
      const Et = [
        (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[M.e], M.e]
            })),
            t
          );
        })(),
        gt.b,
        mt.b
      ];
      let St = (() => {
        class t {}
        return (
          (t.ɵmod = r.Ib({ type: t })),
          (t.ɵinj = r.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[s.c, dt.a, ...Et]]
          })),
          t
        );
      })();
      var Dt = n('3Pt+'),
        At = n('tyNb');
      const xt = [
        {
          path: 'team-builder',
          loadChildren: () =>
            Promise.all([n.e(1), n.e(6)])
              .then(n.bind(null, '3Qrf'))
              .then((t) => t.TeamBuilderModule)
        },
        {
          path: 'nuzlocke',
          loadChildren: () =>
            Promise.all([n.e(1), n.e(7)])
              .then(n.bind(null, '/LoN'))
              .then((t) => t.NuzlockeModule)
        },
        { path: '', redirectTo: 'team-builder', pathMatch: 'full' },
        { path: '**', redirectTo: 'team-builder' }
      ];
      let Ot = (() => {
        class t {}
        return (
          (t.ɵmod = r.Ib({ type: t })),
          (t.ɵinj = r.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[At.e.forRoot(xt)], At.e]
          })),
          t
        );
      })();
      var kt = n('7o/Q');
      function Tt(t) {
        return (e) => e.lift(new Ft(t));
      }
      class Ft {
        constructor(t) {
          this.value = t;
        }
        call(t, e) {
          return e.subscribe(new jt(t, this.value));
        }
      }
      class jt extends kt.a {
        constructor(t, e) {
          super(t), (this.value = e);
        }
        _next(t) {
          this.destination.next(this.value);
        }
      }
      var It = n('Kj3r');
      const Rt = ['*'];
      function Pt(t, e) {
        if (1 & t) {
          const t = r.Rb();
          r.Qb(0, 'div', 2),
            r.Xb('click', function () {
              return r.qc(t), r.bc()._onBackdropClicked();
            }),
            r.Pb();
        }
        if (2 & t) {
          const t = r.bc();
          r.Cb('mat-drawer-shown', t._isShowingBackdrop());
        }
      }
      function Nt(t, e) {
        1 & t && (r.Qb(0, 'mat-drawer-content'), r.gc(1, 2), r.Pb());
      }
      const Lt = [[['mat-drawer']], [['mat-drawer-content']], '*'],
        Mt = ['mat-drawer', 'mat-drawer-content', '*'];
      function Vt(t, e) {
        if (1 & t) {
          const t = r.Rb();
          r.Qb(0, 'div', 2),
            r.Xb('click', function () {
              return r.qc(t), r.bc()._onBackdropClicked();
            }),
            r.Pb();
        }
        if (2 & t) {
          const t = r.bc();
          r.Cb('mat-drawer-shown', t._isShowingBackdrop());
        }
      }
      function Bt(t, e) {
        1 & t && (r.Qb(0, 'mat-sidenav-content', 3), r.gc(1, 2), r.Pb());
      }
      const Ut = [[['mat-sidenav']], [['mat-sidenav-content']], '*'],
        zt = ['mat-sidenav', 'mat-sidenav-content', '*'],
        Ht =
          '.mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n',
        qt = {
          transformDrawer: Object(B.l)('transform', [
            Object(B.i)(
              'open, open-instant',
              Object(B.j)({ transform: 'none', visibility: 'visible' })
            ),
            Object(B.i)(
              'void',
              Object(B.j)({ 'box-shadow': 'none', visibility: 'hidden' })
            ),
            Object(B.k)('void => open-instant', Object(B.e)('0ms')),
            Object(B.k)(
              'void <=> open, open-instant => void',
              Object(B.e)('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
            )
          ])
        },
        Kt = new r.q('MAT_DRAWER_DEFAULT_AUTOSIZE', {
          providedIn: 'root',
          factory: function () {
            return !1;
          }
        }),
        $t = new r.q('MAT_DRAWER_CONTAINER');
      let Gt = (() => {
          class t extends W.a {
            constructor(t, e, n, r, s) {
              super(n, r, s),
                (this._changeDetectorRef = t),
                (this._container = e);
            }
            ngAfterContentInit() {
              this._container._contentMarginChanges.subscribe(() => {
                this._changeDetectorRef.markForCheck();
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(r.h),
                r.Kb(Object(r.T)(() => Qt)),
                r.Kb(r.l),
                r.Kb(W.c),
                r.Kb(r.z)
              );
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['mat-drawer-content']],
              hostAttrs: [1, 'mat-drawer-content'],
              hostVars: 4,
              hostBindings: function (t, e) {
                2 & t &&
                  r.wc('margin-left', e._container._contentMargins.left, 'px')(
                    'margin-right',
                    e._container._contentMargins.right,
                    'px'
                  );
              },
              features: [r.wb],
              ngContentSelectors: Rt,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (r.hc(), r.gc(0));
              },
              encapsulation: 2,
              changeDetection: 0
            })),
            t
          );
        })(),
        Wt = (() => {
          class t {
            constructor(t, e, n, s, i, o, a) {
              (this._elementRef = t),
                (this._focusTrapFactory = e),
                (this._focusMonitor = n),
                (this._platform = s),
                (this._ngZone = i),
                (this._doc = o),
                (this._container = a),
                (this._elementFocusedBeforeDrawerWasOpened = null),
                (this._enableAnimations = !1),
                (this._position = 'start'),
                (this._mode = 'over'),
                (this._disableClose = !1),
                (this._opened = !1),
                (this._animationStarted = new d.a()),
                (this._animationEnd = new d.a()),
                (this._animationState = 'void'),
                (this.openedChange = new r.n(!0)),
                (this._openedStream = this.openedChange.pipe(
                  Object(_.a)((t) => t),
                  Object(b.a)(() => {})
                )),
                (this.openedStart = this._animationStarted.pipe(
                  Object(_.a)(
                    (t) =>
                      t.fromState !== t.toState &&
                      0 === t.toState.indexOf('open')
                  ),
                  Tt(void 0)
                )),
                (this._closedStream = this.openedChange.pipe(
                  Object(_.a)((t) => !t),
                  Object(b.a)(() => {})
                )),
                (this.closedStart = this._animationStarted.pipe(
                  Object(_.a)(
                    (t) => t.fromState !== t.toState && 'void' === t.toState
                  ),
                  Tt(void 0)
                )),
                (this._destroyed = new d.a()),
                (this.onPositionChanged = new r.n()),
                (this._modeChanged = new d.a()),
                this.openedChange.subscribe((t) => {
                  t
                    ? (this._doc &&
                        (this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement),
                      this._takeFocus())
                    : this._isFocusWithinDrawer() && this._restoreFocus();
                }),
                this._ngZone.runOutsideAngular(() => {
                  Object(c.a)(this._elementRef.nativeElement, 'keydown')
                    .pipe(
                      Object(_.a)(
                        (t) =>
                          t.keyCode === $.e &&
                          !this.disableClose &&
                          !Object($.o)(t)
                      ),
                      Object(H.a)(this._destroyed)
                    )
                    .subscribe((t) =>
                      this._ngZone.run(() => {
                        this.close(), t.stopPropagation(), t.preventDefault();
                      })
                    );
                }),
                this._animationEnd
                  .pipe(
                    Object(z.a)(
                      (t, e) =>
                        t.fromState === e.fromState && t.toState === e.toState
                    )
                  )
                  .subscribe((t) => {
                    const { fromState: e, toState: n } = t;
                    ((0 === n.indexOf('open') && 'void' === e) ||
                      ('void' === n && 0 === e.indexOf('open'))) &&
                      this.openedChange.emit(this._opened);
                  });
            }
            get position() {
              return this._position;
            }
            set position(t) {
              (t = 'end' === t ? 'end' : 'start') != this._position &&
                ((this._position = t), this.onPositionChanged.emit());
            }
            get mode() {
              return this._mode;
            }
            set mode(t) {
              (this._mode = t),
                this._updateFocusTrapState(),
                this._modeChanged.next();
            }
            get disableClose() {
              return this._disableClose;
            }
            set disableClose(t) {
              this._disableClose = Object(q.b)(t);
            }
            get autoFocus() {
              const t = this._autoFocus;
              return null == t ? 'side' !== this.mode : t;
            }
            set autoFocus(t) {
              this._autoFocus = Object(q.b)(t);
            }
            get opened() {
              return this._opened;
            }
            set opened(t) {
              this.toggle(Object(q.b)(t));
            }
            _takeFocus() {
              this.autoFocus &&
                this._focusTrap &&
                this._focusTrap.focusInitialElementWhenReady().then((t) => {
                  t ||
                    'function' != typeof this._elementRef.nativeElement.focus ||
                    this._elementRef.nativeElement.focus();
                });
            }
            _restoreFocus() {
              this.autoFocus &&
                (this._elementFocusedBeforeDrawerWasOpened
                  ? this._focusMonitor.focusVia(
                      this._elementFocusedBeforeDrawerWasOpened,
                      this._openedVia
                    )
                  : this._elementRef.nativeElement.blur(),
                (this._elementFocusedBeforeDrawerWasOpened = null),
                (this._openedVia = null));
            }
            _isFocusWithinDrawer() {
              var t;
              const e =
                null === (t = this._doc) || void 0 === t
                  ? void 0
                  : t.activeElement;
              return !!e && this._elementRef.nativeElement.contains(e);
            }
            ngAfterContentInit() {
              (this._focusTrap = this._focusTrapFactory.create(
                this._elementRef.nativeElement
              )),
                this._updateFocusTrapState();
            }
            ngAfterContentChecked() {
              this._platform.isBrowser && (this._enableAnimations = !0);
            }
            ngOnDestroy() {
              this._focusTrap && this._focusTrap.destroy(),
                this._animationStarted.complete(),
                this._animationEnd.complete(),
                this._modeChanged.complete(),
                this._destroyed.next(),
                this._destroyed.complete();
            }
            open(t) {
              return this.toggle(!0, t);
            }
            close() {
              return this.toggle(!1);
            }
            _closeViaBackdropClick() {
              return this._setOpen(!1, !0);
            }
            toggle(t = !this.opened, e) {
              return this._setOpen(t, !t && this._isFocusWithinDrawer(), e);
            }
            _setOpen(t, e, n = 'program') {
              return (
                (this._opened = t),
                t
                  ? ((this._animationState = this._enableAnimations
                      ? 'open'
                      : 'open-instant'),
                    (this._openedVia = n))
                  : ((this._animationState = 'void'),
                    e && this._restoreFocus()),
                this._updateFocusTrapState(),
                new Promise((t) => {
                  this.openedChange
                    .pipe(Object(w.a)(1))
                    .subscribe((e) => t(e ? 'open' : 'close'));
                })
              );
            }
            _getWidth() {
              return (
                (this._elementRef.nativeElement &&
                  this._elementRef.nativeElement.offsetWidth) ||
                0
              );
            }
            _updateFocusTrapState() {
              this._focusTrap &&
                (this._focusTrap.enabled = this.opened && 'side' !== this.mode);
            }
            _animationStartListener(t) {
              this._animationStarted.next(t);
            }
            _animationDoneListener(t) {
              this._animationEnd.next(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(r.l),
                r.Kb(P.f),
                r.Kb(P.e),
                r.Kb(K.a),
                r.Kb(r.z),
                r.Kb(s.d, 8),
                r.Kb($t, 8)
              );
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['mat-drawer']],
              hostAttrs: ['tabIndex', '-1', 1, 'mat-drawer'],
              hostVars: 12,
              hostBindings: function (t, e) {
                1 & t &&
                  r.xc('@transform.start', function (t) {
                    return e._animationStartListener(t);
                  })('@transform.done', function (t) {
                    return e._animationDoneListener(t);
                  }),
                  2 & t &&
                    (r.Ab('align', null),
                    r.yc('@transform', e._animationState),
                    r.Cb('mat-drawer-end', 'end' === e.position)(
                      'mat-drawer-over',
                      'over' === e.mode
                    )('mat-drawer-push', 'push' === e.mode)(
                      'mat-drawer-side',
                      'side' === e.mode
                    )('mat-drawer-opened', e.opened));
              },
              inputs: {
                position: 'position',
                mode: 'mode',
                disableClose: 'disableClose',
                autoFocus: 'autoFocus',
                opened: 'opened'
              },
              outputs: {
                openedChange: 'openedChange',
                _openedStream: 'opened',
                openedStart: 'openedStart',
                _closedStream: 'closed',
                closedStart: 'closedStart',
                onPositionChanged: 'positionChanged'
              },
              exportAs: ['matDrawer'],
              ngContentSelectors: Rt,
              decls: 2,
              vars: 0,
              consts: [[1, 'mat-drawer-inner-container']],
              template: function (t, e) {
                1 & t && (r.hc(), r.Qb(0, 'div', 0), r.gc(1), r.Pb());
              },
              encapsulation: 2,
              data: { animation: [qt.transformDrawer] },
              changeDetection: 0
            })),
            t
          );
        })(),
        Qt = (() => {
          class t {
            constructor(t, e, n, s, i, o = !1, a) {
              (this._dir = t),
                (this._element = e),
                (this._ngZone = n),
                (this._changeDetectorRef = s),
                (this._animationMode = a),
                (this._drawers = new r.D()),
                (this.backdropClick = new r.n()),
                (this._destroyed = new d.a()),
                (this._doCheckSubject = new d.a()),
                (this._contentMargins = { left: null, right: null }),
                (this._contentMarginChanges = new d.a()),
                t &&
                  t.change.pipe(Object(H.a)(this._destroyed)).subscribe(() => {
                    this._validateDrawers(), this.updateContentMargins();
                  }),
                i
                  .change()
                  .pipe(Object(H.a)(this._destroyed))
                  .subscribe(() => this.updateContentMargins()),
                (this._autosize = o);
            }
            get start() {
              return this._start;
            }
            get end() {
              return this._end;
            }
            get autosize() {
              return this._autosize;
            }
            set autosize(t) {
              this._autosize = Object(q.b)(t);
            }
            get hasBackdrop() {
              return null == this._backdropOverride
                ? !this._start ||
                    'side' !== this._start.mode ||
                    !this._end ||
                    'side' !== this._end.mode
                : this._backdropOverride;
            }
            set hasBackdrop(t) {
              this._backdropOverride = null == t ? null : Object(q.b)(t);
            }
            get scrollable() {
              return this._userContent || this._content;
            }
            ngAfterContentInit() {
              this._allDrawers.changes
                .pipe(
                  Object(U.a)(this._allDrawers),
                  Object(H.a)(this._destroyed)
                )
                .subscribe((t) => {
                  this._drawers.reset(
                    t.filter((t) => !t._container || t._container === this)
                  ),
                    this._drawers.notifyOnChanges();
                }),
                this._drawers.changes.pipe(Object(U.a)(null)).subscribe(() => {
                  this._validateDrawers(),
                    this._drawers.forEach((t) => {
                      this._watchDrawerToggle(t),
                        this._watchDrawerPosition(t),
                        this._watchDrawerMode(t);
                    }),
                    (!this._drawers.length ||
                      this._isDrawerOpen(this._start) ||
                      this._isDrawerOpen(this._end)) &&
                      this.updateContentMargins(),
                    this._changeDetectorRef.markForCheck();
                }),
                this._ngZone.runOutsideAngular(() => {
                  this._doCheckSubject
                    .pipe(Object(It.a)(10), Object(H.a)(this._destroyed))
                    .subscribe(() => this.updateContentMargins());
                });
            }
            ngOnDestroy() {
              this._contentMarginChanges.complete(),
                this._doCheckSubject.complete(),
                this._drawers.destroy(),
                this._destroyed.next(),
                this._destroyed.complete();
            }
            open() {
              this._drawers.forEach((t) => t.open());
            }
            close() {
              this._drawers.forEach((t) => t.close());
            }
            updateContentMargins() {
              let t = 0,
                e = 0;
              if (this._left && this._left.opened)
                if ('side' == this._left.mode) t += this._left._getWidth();
                else if ('push' == this._left.mode) {
                  const n = this._left._getWidth();
                  (t += n), (e -= n);
                }
              if (this._right && this._right.opened)
                if ('side' == this._right.mode) e += this._right._getWidth();
                else if ('push' == this._right.mode) {
                  const n = this._right._getWidth();
                  (e += n), (t -= n);
                }
              (t = t || null),
                (e = e || null),
                (t === this._contentMargins.left &&
                  e === this._contentMargins.right) ||
                  ((this._contentMargins = { left: t, right: e }),
                  this._ngZone.run(() =>
                    this._contentMarginChanges.next(this._contentMargins)
                  ));
            }
            ngDoCheck() {
              this._autosize &&
                this._isPushed() &&
                this._ngZone.runOutsideAngular(() =>
                  this._doCheckSubject.next()
                );
            }
            _watchDrawerToggle(t) {
              t._animationStarted
                .pipe(
                  Object(_.a)((t) => t.fromState !== t.toState),
                  Object(H.a)(this._drawers.changes)
                )
                .subscribe((t) => {
                  'open-instant' !== t.toState &&
                    'NoopAnimations' !== this._animationMode &&
                    this._element.nativeElement.classList.add(
                      'mat-drawer-transition'
                    ),
                    this.updateContentMargins(),
                    this._changeDetectorRef.markForCheck();
                }),
                'side' !== t.mode &&
                  t.openedChange
                    .pipe(Object(H.a)(this._drawers.changes))
                    .subscribe(() => this._setContainerClass(t.opened));
            }
            _watchDrawerPosition(t) {
              t &&
                t.onPositionChanged
                  .pipe(Object(H.a)(this._drawers.changes))
                  .subscribe(() => {
                    this._ngZone.onMicrotaskEmpty
                      .pipe(Object(w.a)(1))
                      .subscribe(() => {
                        this._validateDrawers();
                      });
                  });
            }
            _watchDrawerMode(t) {
              t &&
                t._modeChanged
                  .pipe(
                    Object(H.a)(
                      Object(g.a)(this._drawers.changes, this._destroyed)
                    )
                  )
                  .subscribe(() => {
                    this.updateContentMargins(),
                      this._changeDetectorRef.markForCheck();
                  });
            }
            _setContainerClass(t) {
              const e = this._element.nativeElement.classList,
                n = 'mat-drawer-container-has-open';
              t ? e.add(n) : e.remove(n);
            }
            _validateDrawers() {
              (this._start = this._end = null),
                this._drawers.forEach((t) => {
                  'end' == t.position ? (this._end = t) : (this._start = t);
                }),
                (this._right = this._left = null),
                this._dir && 'rtl' === this._dir.value
                  ? ((this._left = this._end), (this._right = this._start))
                  : ((this._left = this._start), (this._right = this._end));
            }
            _isPushed() {
              return (
                (this._isDrawerOpen(this._start) &&
                  'over' != this._start.mode) ||
                (this._isDrawerOpen(this._end) && 'over' != this._end.mode)
              );
            }
            _onBackdropClicked() {
              this.backdropClick.emit(), this._closeModalDrawersViaBackdrop();
            }
            _closeModalDrawersViaBackdrop() {
              [this._start, this._end]
                .filter((t) => t && !t.disableClose && this._canHaveBackdrop(t))
                .forEach((t) => t._closeViaBackdropClick());
            }
            _isShowingBackdrop() {
              return (
                (this._isDrawerOpen(this._start) &&
                  this._canHaveBackdrop(this._start)) ||
                (this._isDrawerOpen(this._end) &&
                  this._canHaveBackdrop(this._end))
              );
            }
            _canHaveBackdrop(t) {
              return 'side' !== t.mode || !!this._backdropOverride;
            }
            _isDrawerOpen(t) {
              return null != t && t.opened;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(G.b, 8),
                r.Kb(r.l),
                r.Kb(r.z),
                r.Kb(r.h),
                r.Kb(W.e),
                r.Kb(Kt),
                r.Kb(o.a, 8)
              );
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['mat-drawer-container']],
              contentQueries: function (t, e, n) {
                if ((1 & t && (r.Db(n, Gt, !0), r.Db(n, Wt, !0)), 2 & t)) {
                  let t;
                  r.nc((t = r.Yb())) && (e._content = t.first),
                    r.nc((t = r.Yb())) && (e._allDrawers = t);
                }
              },
              viewQuery: function (t, e) {
                if ((1 & t && r.Ec(Gt, !0), 2 & t)) {
                  let t;
                  r.nc((t = r.Yb())) && (e._userContent = t.first);
                }
              },
              hostAttrs: [1, 'mat-drawer-container'],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t &&
                  r.Cb(
                    'mat-drawer-container-explicit-backdrop',
                    e._backdropOverride
                  );
              },
              inputs: { autosize: 'autosize', hasBackdrop: 'hasBackdrop' },
              outputs: { backdropClick: 'backdropClick' },
              exportAs: ['matDrawerContainer'],
              features: [r.yb([{ provide: $t, useExisting: t }])],
              ngContentSelectors: Mt,
              decls: 4,
              vars: 2,
              consts: [
                [
                  'class',
                  'mat-drawer-backdrop',
                  3,
                  'mat-drawer-shown',
                  'click',
                  4,
                  'ngIf'
                ],
                [4, 'ngIf'],
                [1, 'mat-drawer-backdrop', 3, 'click']
              ],
              template: function (t, e) {
                1 & t &&
                  (r.hc(Lt),
                  r.zc(0, Pt, 1, 2, 'div', 0),
                  r.gc(1),
                  r.gc(2, 1),
                  r.zc(3, Nt, 2, 0, 'mat-drawer-content', 1)),
                  2 & t &&
                    (r.ic('ngIf', e.hasBackdrop),
                    r.zb(3),
                    r.ic('ngIf', !e._content));
              },
              directives: [s.m, Gt],
              styles: [Ht],
              encapsulation: 2,
              changeDetection: 0
            })),
            t
          );
        })(),
        Zt = (() => {
          class t extends Gt {
            constructor(t, e, n, r, s) {
              super(t, e, n, r, s);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(r.h),
                r.Kb(Object(r.T)(() => Jt)),
                r.Kb(r.l),
                r.Kb(W.c),
                r.Kb(r.z)
              );
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['mat-sidenav-content']],
              hostAttrs: [1, 'mat-drawer-content', 'mat-sidenav-content'],
              hostVars: 4,
              hostBindings: function (t, e) {
                2 & t &&
                  r.wc('margin-left', e._container._contentMargins.left, 'px')(
                    'margin-right',
                    e._container._contentMargins.right,
                    'px'
                  );
              },
              features: [r.wb],
              ngContentSelectors: Rt,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (r.hc(), r.gc(0));
              },
              encapsulation: 2,
              changeDetection: 0
            })),
            t
          );
        })(),
        Xt = (() => {
          class t extends Wt {
            constructor() {
              super(...arguments),
                (this._fixedInViewport = !1),
                (this._fixedTopGap = 0),
                (this._fixedBottomGap = 0);
            }
            get fixedInViewport() {
              return this._fixedInViewport;
            }
            set fixedInViewport(t) {
              this._fixedInViewport = Object(q.b)(t);
            }
            get fixedTopGap() {
              return this._fixedTopGap;
            }
            set fixedTopGap(t) {
              this._fixedTopGap = Object(q.e)(t);
            }
            get fixedBottomGap() {
              return this._fixedBottomGap;
            }
            set fixedBottomGap(t) {
              this._fixedBottomGap = Object(q.e)(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return Yt(e || t);
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['mat-sidenav']],
              hostAttrs: ['tabIndex', '-1', 1, 'mat-drawer', 'mat-sidenav'],
              hostVars: 17,
              hostBindings: function (t, e) {
                2 & t &&
                  (r.Ab('align', null),
                  r.wc('top', e.fixedInViewport ? e.fixedTopGap : null, 'px')(
                    'bottom',
                    e.fixedInViewport ? e.fixedBottomGap : null,
                    'px'
                  ),
                  r.Cb('mat-drawer-end', 'end' === e.position)(
                    'mat-drawer-over',
                    'over' === e.mode
                  )('mat-drawer-push', 'push' === e.mode)(
                    'mat-drawer-side',
                    'side' === e.mode
                  )('mat-drawer-opened', e.opened)(
                    'mat-sidenav-fixed',
                    e.fixedInViewport
                  ));
              },
              inputs: {
                fixedInViewport: 'fixedInViewport',
                fixedTopGap: 'fixedTopGap',
                fixedBottomGap: 'fixedBottomGap'
              },
              exportAs: ['matSidenav'],
              features: [r.wb],
              ngContentSelectors: Rt,
              decls: 2,
              vars: 0,
              consts: [[1, 'mat-drawer-inner-container']],
              template: function (t, e) {
                1 & t && (r.hc(), r.Qb(0, 'div', 0), r.gc(1), r.Pb());
              },
              encapsulation: 2,
              data: { animation: [qt.transformDrawer] },
              changeDetection: 0
            })),
            t
          );
        })();
      const Yt = r.Sb(Xt);
      let Jt = (() => {
        class t extends Qt {}
        return (
          (t.ɵfac = function (e) {
            return te(e || t);
          }),
          (t.ɵcmp = r.Eb({
            type: t,
            selectors: [['mat-sidenav-container']],
            contentQueries: function (t, e, n) {
              if ((1 & t && (r.Db(n, Zt, !0), r.Db(n, Xt, !0)), 2 & t)) {
                let t;
                r.nc((t = r.Yb())) && (e._content = t.first),
                  r.nc((t = r.Yb())) && (e._allDrawers = t);
              }
            },
            hostAttrs: [1, 'mat-drawer-container', 'mat-sidenav-container'],
            hostVars: 2,
            hostBindings: function (t, e) {
              2 & t &&
                r.Cb(
                  'mat-drawer-container-explicit-backdrop',
                  e._backdropOverride
                );
            },
            exportAs: ['matSidenavContainer'],
            features: [r.yb([{ provide: $t, useExisting: t }]), r.wb],
            ngContentSelectors: zt,
            decls: 4,
            vars: 2,
            consts: [
              [
                'class',
                'mat-drawer-backdrop',
                3,
                'mat-drawer-shown',
                'click',
                4,
                'ngIf'
              ],
              ['cdkScrollable', '', 4, 'ngIf'],
              [1, 'mat-drawer-backdrop', 3, 'click'],
              ['cdkScrollable', '']
            ],
            template: function (t, e) {
              1 & t &&
                (r.hc(Ut),
                r.zc(0, Vt, 1, 2, 'div', 0),
                r.gc(1),
                r.gc(2, 1),
                r.zc(3, Bt, 2, 0, 'mat-sidenav-content', 1)),
                2 & t &&
                  (r.ic('ngIf', e.hasBackdrop),
                  r.zb(3),
                  r.ic('ngIf', !e._content));
            },
            directives: [s.m, Zt, W.a],
            styles: [Ht],
            encapsulation: 2,
            changeDetection: 0
          })),
          t
        );
      })();
      const te = r.Sb(Jt);
      let ee = (() => {
        class t {}
        return (
          (t.ɵmod = r.Ib({ type: t })),
          (t.ɵinj = r.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[s.c, M.e, K.b, W.b], W.b, M.e]
          })),
          t
        );
      })();
      var ne = n('f0Cb');
      const re = [ee, M.n, ne.b, gt.b];
      let se = (() => {
        class t {}
        return (
          (t.ɵmod = r.Ib({ type: t })),
          (t.ɵinj = r.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[s.c, Dt.g, Ot, dt.a, ...re]]
          })),
          t
        );
      })();
      var ie = n('WPX1'),
        oe = n('ioxi');
      let ae = (() => {
          class t {
            constructor(t) {
              this.titleCaseService = t;
            }
            transform(t) {
              return this.titleCaseService.titlecase(t.replace('-', ' '));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(oe.a));
            }),
            (t.ɵpipe = r.Jb({ name: 'route', type: t, pure: !0 })),
            t
          );
        })(),
        ue = (() => {
          class t {
            constructor(t) {
              (this.routerService = t), (this.title = 'Pokemon');
            }
            ngOnInit() {
              this.routerService.route$.subscribe((t) => {
                this.title = t.substring(t.lastIndexOf('/') + 1);
              });
            }
            toggleMenu() {
              this.routerService.clickMenu();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(ie.a));
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['app-nav-header']],
              decls: 7,
              vars: 3,
              consts: [
                [1, 'hover', 3, 'click'],
                ['routerLink', '/', 1, 'pr-1', 'hover', 'text-center', 'w-100'],
                [
                  'src',
                  './assets/icons/32x32.png',
                  'routerLink',
                  '/',
                  1,
                  'hover',
                  'logo'
                ]
              ],
              template: function (t, e) {
                1 & t &&
                  (r.Qb(0, 'mat-toolbar'),
                  r.Qb(1, 'mat-icon', 0),
                  r.Xb('click', function () {
                    return e.toggleMenu();
                  }),
                  r.Ac(2, ' menu '),
                  r.Pb(),
                  r.Qb(3, 'div', 1),
                  r.Ac(4),
                  r.cc(5, 'route'),
                  r.Pb(),
                  r.Lb(6, 'img', 2),
                  r.Pb()),
                  2 & t && (r.zb(4), r.Cc(' ', r.dc(5, 1, e.title), ' '));
              },
              directives: [Ct, gt.a],
              pipes: [ae],
              encapsulation: 2
            })),
            t
          );
        })();
      function ce(t, e) {
        if (1 & t) {
          const t = r.Rb();
          r.Qb(0, 'a', 3),
            r.Xb('click', function () {
              r.qc(t);
              const n = e.$implicit;
              return r.bc(2).navigate(n.route);
            }),
            r.Ac(1),
            r.cc(2, 'route'),
            r.Pb();
        }
        if (2 & t) {
          const t = e.$implicit,
            n = r.bc(2);
          r.ic('active', n.isActive(t.route)),
            r.zb(1),
            r.Cc(' ', r.dc(2, 2, t.name), ' ');
        }
      }
      function le(t, e) {
        if (
          (1 & t && (r.Qb(0, 'nav', 1), r.zc(1, ce, 3, 4, 'a', 2), r.Pb()),
          2 & t)
        ) {
          const t = r.bc();
          r.zb(1), r.ic('ngForOf', t.tabs);
        }
      }
      let he = (() => {
          class t {
            constructor(t) {
              (this.routerService = t), (this.tabs = []), (this.route = '');
            }
            ngOnInit() {
              this.routerService.route$.subscribe((t) => {
                (this.tabs = this.routerService.getTabs(t)), (this.route = t);
              });
            }
            navigate(t) {
              this.routerService.changeTab(t);
            }
            isActive(t) {
              return this.routerService.isCurrentRoute(t);
            }
            get areTabsDisabled() {
              return this.routerService.open;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(ie.a));
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['app-nav-footer']],
              decls: 1,
              vars: 1,
              consts: [
                ['mat-tab-nav-bar', '', 'mat-stretch-tabs', '', 4, 'ngIf'],
                ['mat-tab-nav-bar', '', 'mat-stretch-tabs', ''],
                [
                  'mat-tab-link',
                  '',
                  3,
                  'active',
                  'click',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                ['mat-tab-link', '', 3, 'active', 'click']
              ],
              template: function (t, e) {
                1 & t && r.zc(0, le, 2, 1, 'nav', 0),
                  2 & t && r.ic('ngIf', !e.areTabsDisabled);
              },
              directives: [s.m, ot, s.l, lt],
              pipes: [ae],
              styles: [
                'nav[_ngcontent-%COMP%]{position:fixed;bottom:0;text-align:center;width:100%}'
              ]
            })),
            t
          );
        })(),
        de = (() => {
          class t {
            constructor() {
              (this.swipeCoord = [0, 0]), (this.swipeTime = 0);
            }
            swipe(t, e) {
              const n = [
                  t.changedTouches[0].clientX,
                  t.changedTouches[0].clientY
                ],
                r = new Date().getTime();
              if ('start' === e)
                return (this.swipeCoord = n), (this.swipeTime = r), !1;
              if ('end' === e) {
                const t = [
                  n[0] - this.swipeCoord[0],
                  n[1] - this.swipeCoord[1]
                ];
                if (
                  r - this.swipeTime < 1e3 &&
                  Math.abs(t[0]) > 50 &&
                  Math.abs(t[0]) > Math.abs(3 * t[1])
                )
                  return 'previous' == (t[0] < 0 ? 'next' : 'previous');
              }
              return !1;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })();
      function fe(t, e) {
        if (
          (1 & t &&
            (r.Qb(0, 'div'),
            r.Qb(1, 'a', 4),
            r.Qb(2, 'mat-icon', 5),
            r.Ac(3),
            r.Pb(),
            r.Ac(4),
            r.cc(5, 'route'),
            r.Pb(),
            r.Lb(6, 'mat-divider'),
            r.Pb()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = r.bc();
          r.zb(1),
            r.Cb('active-link', n.isActive(t.link)),
            r.ic('routerLink', t.link),
            r.zb(2),
            r.Bc(t.icon),
            r.zb(1),
            r.Cc(' ', r.dc(5, 5, t.link), ' ');
        }
      }
      let pe = (() => {
          class t {
            constructor(t, e) {
              (this.routerService = t),
                (this.swipeService = e),
                (this.opened = !1),
                (this.links = []);
            }
            setOpen(t) {
              this.opened = this.routerService.open = t;
            }
            ngOnInit() {
              (this.links = this.routerService.links),
                this.routerService.menuClick$.subscribe((t) => {
                  this.setOpen(t);
                });
            }
            isActive(t) {
              return this.routerService.isViewMode(t);
            }
            hideOverflow() {
              return this.routerService.isCurrentRoute('/team-builder/home');
            }
            swipe(t, e) {
              !this.opened && this.swipeService.swipe(t, e) && this.setOpen(!0);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(ie.a), r.Kb(de));
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['app-nav-sidebar']],
              decls: 6,
              vars: 4,
              consts: [
                [3, 'touchstart', 'touchend'],
                [1, 'container', 3, 'backdropClick'],
                [
                  'disableClose',
                  '',
                  1,
                  'sidebar',
                  3,
                  'opened',
                  'openedChange',
                  'keydown.escape'
                ],
                [4, 'ngFor', 'ngForOf'],
                ['matRipple', '', 1, 'text-center', 'link', 3, 'routerLink'],
                [1, 'icon']
              ],
              template: function (t, e) {
                1 & t &&
                  (r.Qb(0, 'div', 0),
                  r.Xb('touchstart', function (t) {
                    return e.swipe(t, 'start');
                  })('touchend', function (t) {
                    return e.swipe(t, 'end');
                  }),
                  r.Qb(1, 'mat-sidenav-container', 1),
                  r.Xb('backdropClick', function () {
                    return e.setOpen(!1);
                  }),
                  r.Qb(2, 'mat-sidenav', 2),
                  r.Xb('openedChange', function (t) {
                    return (e.opened = t);
                  })('keydown.escape', function () {
                    return e.setOpen(!1);
                  }),
                  r.zc(3, fe, 7, 7, 'div', 3),
                  r.Pb(),
                  r.Qb(4, 'mat-sidenav-content'),
                  r.Lb(5, 'router-outlet'),
                  r.Pb(),
                  r.Pb(),
                  r.Pb()),
                  2 & t &&
                    (r.zb(2),
                    r.ic('opened', e.opened),
                    r.zb(1),
                    r.ic('ngForOf', e.links),
                    r.zb(1),
                    r.Cb('overflow-y-off', e.hideOverflow()));
              },
              directives: [Jt, Xt, s.l, Zt, At.f, At.d, M.m, gt.a, ne.a],
              pipes: [ae],
              styles: [
                '.container[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:64px;bottom:48px}mat-sidenav-content[_ngcontent-%COMP%]{height:calc(100vh - 48px - 64px)}.overflow-y-off[_ngcontent-%COMP%]{overflow-y:hidden}@media (max-width:599px){.container[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:56px}mat-sidenav-content[_ngcontent-%COMP%]{height:calc(100vh - 48px - 56px)}}mat-icon[_ngcontent-%COMP%]{position:relative;left:10px;bottom:2px;float:left}.sidebar[_ngcontent-%COMP%]{min-width:200px;font-size:large}.link[_ngcontent-%COMP%]{height:5vh;padding-top:2.5vh;display:block;text-decoration:none;color:inherit}.active-link[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.1)}'
              ]
            })),
            t
          );
        })(),
        me = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['app-root']],
              decls: 3,
              vars: 0,
              template: function (t, e) {
                1 & t &&
                  (r.Lb(0, 'app-nav-header'),
                  r.Lb(1, 'app-nav-footer'),
                  r.Lb(2, 'app-nav-sidebar'));
              },
              directives: [ue, he, pe],
              encapsulation: 2
            })),
            t
          );
        })(),
        ge = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t, bootstrap: [me] })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [
                [
                  s.c,
                  i.a,
                  St,
                  pt,
                  se,
                  o.b,
                  R.register('ngsw-worker.js', { enabled: !0 })
                ]
              ]
            })),
            t
          );
        })();
      Object(r.S)(),
        i
          .c()
          .bootstrapModule(ge)
          .catch((t) => console.error(t));
    },
    zn8P: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = 'zn8P');
    },
    zx2A: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      }),
        n.d(e, 'b', function () {
          return a;
        }),
        n.d(e, 'c', function () {
          return u;
        });
      var r = n('7o/Q'),
        s = n('HDdC'),
        i = n('SeVD');
      class o extends r.a {
        constructor(t) {
          super(), (this.parent = t);
        }
        _next(t) {
          this.parent.notifyNext(t);
        }
        _error(t) {
          this.parent.notifyError(t), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class a extends r.a {
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyError(t) {
          this.destination.error(t);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function u(t, e) {
        if (!e.closed)
          return t instanceof s.a ? t.subscribe(e) : Object(i.a)(t)(e);
      }
    }
  },
  [[0, 0]]
]);
