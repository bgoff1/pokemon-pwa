(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '3Qrf': function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'TeamBuilderModule', function () {
          return st;
        });
      var n = i('ofXK'),
        r = i('bTqV'),
        s = i('R1ws'),
        a = i('FKr1'),
        o = i('fXoL');
      const c = ['*', [['mat-card-footer']]],
        l = ['*', 'mat-card-footer'];
      let h = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = o.Fb({
              type: e,
              selectors: [
                ['mat-card-content'],
                ['', 'mat-card-content', ''],
                ['', 'matCardContent', '']
              ],
              hostAttrs: [1, 'mat-card-content']
            })),
            e
          );
        })(),
        d = (() => {
          class e {
            constructor(e) {
              this._animationMode = e;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(o.Kb(s.a, 8));
            }),
            (e.ɵcmp = o.Eb({
              type: e,
              selectors: [['mat-card']],
              hostAttrs: [1, 'mat-card', 'mat-focus-indicator'],
              hostVars: 2,
              hostBindings: function (e, t) {
                2 & e &&
                  o.Cb(
                    '_mat-animation-noopable',
                    'NoopAnimations' === t._animationMode
                  );
              },
              exportAs: ['matCard'],
              ngContentSelectors: l,
              decls: 2,
              vars: 0,
              template: function (e, t) {
                1 & e && (o.hc(c), o.gc(0), o.gc(1, 1));
              },
              styles: [
                '.mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            e
          );
        })(),
        m = (() => {
          class e {}
          return (
            (e.ɵmod = o.Ib({ type: e })),
            (e.ɵinj = o.Hb({
              factory: function (t) {
                return new (t || e)();
              },
              imports: [[a.e], a.e]
            })),
            e
          );
        })();
      var u = i('8LU1'),
        p = i('3Pt+'),
        b = i('GU7r'),
        f = i('u47x');
      const g = ['input'],
        k = function () {
          return { enterDuration: 150 };
        },
        v = ['*'],
        _ = new o.q('mat-checkbox-default-options', {
          providedIn: 'root',
          factory: x
        });
      function x() {
        return { color: 'accent', clickAction: 'check-indeterminate' };
      }
      let w = 0;
      const y = x(),
        C = { provide: p.i, useExisting: Object(o.T)(() => T), multi: !0 };
      class S {}
      class P {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const O = Object(a.v)(Object(a.r)(Object(a.s)(Object(a.t)(P))));
      let T = (() => {
          class e extends O {
            constructor(e, t, i, n, r, s, a) {
              super(e),
                (this._changeDetectorRef = t),
                (this._focusMonitor = i),
                (this._ngZone = n),
                (this._animationMode = s),
                (this._options = a),
                (this.ariaLabel = ''),
                (this.ariaLabelledby = null),
                (this._uniqueId = 'mat-checkbox-' + ++w),
                (this.id = this._uniqueId),
                (this.labelPosition = 'after'),
                (this.name = null),
                (this.change = new o.n()),
                (this.indeterminateChange = new o.n()),
                (this._onTouched = () => {}),
                (this._currentAnimationClass = ''),
                (this._currentCheckState = 0),
                (this._controlValueAccessorChangeFn = () => {}),
                (this._checked = !1),
                (this._disabled = !1),
                (this._indeterminate = !1),
                (this._options = this._options || y),
                (this.color = this.defaultColor =
                  this._options.color || y.color),
                (this.tabIndex = parseInt(r) || 0);
            }
            get inputId() {
              return (this.id || this._uniqueId) + '-input';
            }
            get required() {
              return this._required;
            }
            set required(e) {
              this._required = Object(u.b)(e);
            }
            ngAfterViewInit() {
              this._focusMonitor
                .monitor(this._elementRef, !0)
                .subscribe((e) => {
                  e ||
                    Promise.resolve().then(() => {
                      this._onTouched(), this._changeDetectorRef.markForCheck();
                    });
                }),
                this._syncIndeterminate(this._indeterminate);
            }
            ngAfterViewChecked() {}
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef);
            }
            get checked() {
              return this._checked;
            }
            set checked(e) {
              e != this.checked &&
                ((this._checked = e), this._changeDetectorRef.markForCheck());
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(e) {
              const t = Object(u.b)(e);
              t !== this.disabled &&
                ((this._disabled = t), this._changeDetectorRef.markForCheck());
            }
            get indeterminate() {
              return this._indeterminate;
            }
            set indeterminate(e) {
              const t = e != this._indeterminate;
              (this._indeterminate = Object(u.b)(e)),
                t &&
                  (this._transitionCheckState(
                    this._indeterminate ? 3 : this.checked ? 1 : 2
                  ),
                  this.indeterminateChange.emit(this._indeterminate)),
                this._syncIndeterminate(this._indeterminate);
            }
            _isRippleDisabled() {
              return this.disableRipple || this.disabled;
            }
            _onLabelTextChange() {
              this._changeDetectorRef.detectChanges();
            }
            writeValue(e) {
              this.checked = !!e;
            }
            registerOnChange(e) {
              this._controlValueAccessorChangeFn = e;
            }
            registerOnTouched(e) {
              this._onTouched = e;
            }
            setDisabledState(e) {
              this.disabled = e;
            }
            _getAriaChecked() {
              return this.checked
                ? 'true'
                : this.indeterminate
                ? 'mixed'
                : 'false';
            }
            _transitionCheckState(e) {
              let t = this._currentCheckState,
                i = this._elementRef.nativeElement;
              if (
                t !== e &&
                (this._currentAnimationClass.length > 0 &&
                  i.classList.remove(this._currentAnimationClass),
                (this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(
                  t,
                  e
                )),
                (this._currentCheckState = e),
                this._currentAnimationClass.length > 0)
              ) {
                i.classList.add(this._currentAnimationClass);
                const e = this._currentAnimationClass;
                this._ngZone.runOutsideAngular(() => {
                  setTimeout(() => {
                    i.classList.remove(e);
                  }, 1e3);
                });
              }
            }
            _emitChangeEvent() {
              const e = new S();
              (e.source = this),
                (e.checked = this.checked),
                this._controlValueAccessorChangeFn(this.checked),
                this.change.emit(e);
            }
            toggle() {
              this.checked = !this.checked;
            }
            _onInputClick(e) {
              var t;
              const i =
                null === (t = this._options) || void 0 === t
                  ? void 0
                  : t.clickAction;
              e.stopPropagation(),
                this.disabled || 'noop' === i
                  ? this.disabled ||
                    'noop' !== i ||
                    ((this._inputElement.nativeElement.checked = this.checked),
                    (this._inputElement.nativeElement.indeterminate = this.indeterminate))
                  : (this.indeterminate &&
                      'check' !== i &&
                      Promise.resolve().then(() => {
                        (this._indeterminate = !1),
                          this.indeterminateChange.emit(this._indeterminate);
                      }),
                    this.toggle(),
                    this._transitionCheckState(this._checked ? 1 : 2),
                    this._emitChangeEvent());
            }
            focus(e = 'keyboard', t) {
              this._focusMonitor.focusVia(this._inputElement, e, t);
            }
            _onInteractionEvent(e) {
              e.stopPropagation();
            }
            _getAnimationClassForCheckStateTransition(e, t) {
              if ('NoopAnimations' === this._animationMode) return '';
              let i = '';
              switch (e) {
                case 0:
                  if (1 === t) i = 'unchecked-checked';
                  else {
                    if (3 != t) return '';
                    i = 'unchecked-indeterminate';
                  }
                  break;
                case 2:
                  i = 1 === t ? 'unchecked-checked' : 'unchecked-indeterminate';
                  break;
                case 1:
                  i = 2 === t ? 'checked-unchecked' : 'checked-indeterminate';
                  break;
                case 3:
                  i =
                    1 === t
                      ? 'indeterminate-checked'
                      : 'indeterminate-unchecked';
              }
              return 'mat-checkbox-anim-' + i;
            }
            _syncIndeterminate(e) {
              const t = this._inputElement;
              t && (t.nativeElement.indeterminate = e);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                o.Kb(o.l),
                o.Kb(o.h),
                o.Kb(f.e),
                o.Kb(o.z),
                o.Vb('tabindex'),
                o.Kb(s.a, 8),
                o.Kb(_, 8)
              );
            }),
            (e.ɵcmp = o.Eb({
              type: e,
              selectors: [['mat-checkbox']],
              viewQuery: function (e, t) {
                if ((1 & e && (o.Ec(g, !0), o.Ec(a.m, !0)), 2 & e)) {
                  let e;
                  o.nc((e = o.Yb())) && (t._inputElement = e.first),
                    o.nc((e = o.Yb())) && (t.ripple = e.first);
                }
              },
              hostAttrs: [1, 'mat-checkbox'],
              hostVars: 12,
              hostBindings: function (e, t) {
                2 & e &&
                  (o.Tb('id', t.id),
                  o.Ab('tabindex', null),
                  o.Cb('mat-checkbox-indeterminate', t.indeterminate)(
                    'mat-checkbox-checked',
                    t.checked
                  )('mat-checkbox-disabled', t.disabled)(
                    'mat-checkbox-label-before',
                    'before' == t.labelPosition
                  )(
                    '_mat-animation-noopable',
                    'NoopAnimations' === t._animationMode
                  ));
              },
              inputs: {
                disableRipple: 'disableRipple',
                color: 'color',
                tabIndex: 'tabIndex',
                ariaLabel: ['aria-label', 'ariaLabel'],
                ariaLabelledby: ['aria-labelledby', 'ariaLabelledby'],
                id: 'id',
                labelPosition: 'labelPosition',
                name: 'name',
                required: 'required',
                checked: 'checked',
                disabled: 'disabled',
                indeterminate: 'indeterminate',
                ariaDescribedby: ['aria-describedby', 'ariaDescribedby'],
                value: 'value'
              },
              outputs: {
                change: 'change',
                indeterminateChange: 'indeterminateChange'
              },
              exportAs: ['matCheckbox'],
              features: [o.yb([C]), o.wb],
              ngContentSelectors: v,
              decls: 17,
              vars: 20,
              consts: [
                [1, 'mat-checkbox-layout'],
                ['label', ''],
                [1, 'mat-checkbox-inner-container'],
                [
                  'type',
                  'checkbox',
                  1,
                  'mat-checkbox-input',
                  'cdk-visually-hidden',
                  3,
                  'id',
                  'required',
                  'checked',
                  'disabled',
                  'tabIndex',
                  'change',
                  'click'
                ],
                ['input', ''],
                [
                  'matRipple',
                  '',
                  1,
                  'mat-checkbox-ripple',
                  'mat-focus-indicator',
                  3,
                  'matRippleTrigger',
                  'matRippleDisabled',
                  'matRippleRadius',
                  'matRippleCentered',
                  'matRippleAnimation'
                ],
                [1, 'mat-ripple-element', 'mat-checkbox-persistent-ripple'],
                [1, 'mat-checkbox-frame'],
                [1, 'mat-checkbox-background'],
                [
                  'version',
                  '1.1',
                  'focusable',
                  'false',
                  'viewBox',
                  '0 0 24 24',
                  0,
                  'xml',
                  'space',
                  'preserve',
                  1,
                  'mat-checkbox-checkmark'
                ],
                [
                  'fill',
                  'none',
                  'stroke',
                  'white',
                  'd',
                  'M4.1,12.7 9,17.6 20.3,6.3',
                  1,
                  'mat-checkbox-checkmark-path'
                ],
                [1, 'mat-checkbox-mixedmark'],
                [1, 'mat-checkbox-label', 3, 'cdkObserveContent'],
                ['checkboxLabel', ''],
                [2, 'display', 'none']
              ],
              template: function (e, t) {
                if (
                  (1 & e &&
                    (o.hc(),
                    o.Qb(0, 'label', 0, 1),
                    o.Qb(2, 'span', 2),
                    o.Qb(3, 'input', 3, 4),
                    o.Xb('change', function (e) {
                      return t._onInteractionEvent(e);
                    })('click', function (e) {
                      return t._onInputClick(e);
                    }),
                    o.Pb(),
                    o.Qb(5, 'span', 5),
                    o.Lb(6, 'span', 6),
                    o.Pb(),
                    o.Lb(7, 'span', 7),
                    o.Qb(8, 'span', 8),
                    o.ac(),
                    o.Qb(9, 'svg', 9),
                    o.Lb(10, 'path', 10),
                    o.Pb(),
                    o.Zb(),
                    o.Lb(11, 'span', 11),
                    o.Pb(),
                    o.Pb(),
                    o.Qb(12, 'span', 12, 13),
                    o.Xb('cdkObserveContent', function () {
                      return t._onLabelTextChange();
                    }),
                    o.Qb(14, 'span', 14),
                    o.Ac(15, '\xa0'),
                    o.Pb(),
                    o.gc(16),
                    o.Pb(),
                    o.Pb()),
                  2 & e)
                ) {
                  const e = o.oc(1),
                    i = o.oc(13);
                  o.Ab('for', t.inputId),
                    o.zb(2),
                    o.Cb(
                      'mat-checkbox-inner-container-no-side-margin',
                      !i.textContent || !i.textContent.trim()
                    ),
                    o.zb(1),
                    o.ic('id', t.inputId)('required', t.required)(
                      'checked',
                      t.checked
                    )('disabled', t.disabled)('tabIndex', t.tabIndex),
                    o.Ab('value', t.value)('name', t.name)(
                      'aria-label',
                      t.ariaLabel || null
                    )('aria-labelledby', t.ariaLabelledby)(
                      'aria-checked',
                      t._getAriaChecked()
                    )('aria-describedby', t.ariaDescribedby),
                    o.zb(2),
                    o.ic('matRippleTrigger', e)(
                      'matRippleDisabled',
                      t._isRippleDisabled()
                    )('matRippleRadius', 20)('matRippleCentered', !0)(
                      'matRippleAnimation',
                      o.kc(19, k)
                    );
                }
              },
              directives: [a.m, b.a],
              styles: [
                '@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            e
          );
        })(),
        I = (() => {
          class e {}
          return (
            (e.ɵmod = o.Ib({ type: e })),
            (e.ɵinj = o.Hb({
              factory: function (t) {
                return new (t || e)();
              }
            })),
            e
          );
        })(),
        M = (() => {
          class e {}
          return (
            (e.ɵmod = o.Ib({ type: e })),
            (e.ɵinj = o.Hb({
              factory: function (t) {
                return new (t || e)();
              },
              imports: [[a.n, a.e, b.c, I], a.e, I]
            })),
            e
          );
        })();
      var z = i('kmnG'),
        E = i('NFeN'),
        D = i('qFsG'),
        R = i('Xa2L'),
        A = i('0EQZ'),
        W = i('7+OI'),
        F = i('XNiG'),
        G = i('2Vo4'),
        L = i('LRne'),
        N = i('IzEk'),
        H = i('pLZG'),
        j = i('1G5W');
      i('cH1L');
      class B extends class {
        constructor() {
          this.expansionModel = new A.c(!0);
        }
        toggle(e) {
          this.expansionModel.toggle(this._trackByValue(e));
        }
        expand(e) {
          this.expansionModel.select(this._trackByValue(e));
        }
        collapse(e) {
          this.expansionModel.deselect(this._trackByValue(e));
        }
        isExpanded(e) {
          return this.expansionModel.isSelected(this._trackByValue(e));
        }
        toggleDescendants(e) {
          this.expansionModel.isSelected(this._trackByValue(e))
            ? this.collapseDescendants(e)
            : this.expandDescendants(e);
        }
        collapseAll() {
          this.expansionModel.clear();
        }
        expandDescendants(e) {
          let t = [e];
          t.push(...this.getDescendants(e)),
            this.expansionModel.select(...t.map((e) => this._trackByValue(e)));
        }
        collapseDescendants(e) {
          let t = [e];
          t.push(...this.getDescendants(e)),
            this.expansionModel.deselect(
              ...t.map((e) => this._trackByValue(e))
            );
        }
        _trackByValue(e) {
          return this.trackBy ? this.trackBy(e) : e;
        }
      } {
        constructor(e, t) {
          super(),
            (this.getChildren = e),
            (this.options = t),
            this.options && (this.trackBy = this.options.trackBy);
        }
        expandAll() {
          this.expansionModel.clear();
          const e = this.dataNodes.reduce(
            (e, t) => [...e, ...this.getDescendants(t), t],
            []
          );
          this.expansionModel.select(...e.map((e) => this._trackByValue(e)));
        }
        getDescendants(e) {
          const t = [];
          return this._getDescendants(t, e), t.splice(1);
        }
        _getDescendants(e, t) {
          e.push(t);
          const i = this.getChildren(t);
          Array.isArray(i)
            ? i.forEach((t) => this._getDescendants(e, t))
            : Object(W.a)(i) &&
              i.pipe(Object(N.a)(1), Object(H.a)(Boolean)).subscribe((t) => {
                for (const i of t) this._getDescendants(e, i);
              });
        }
      }
      const Q = new o.q('CDK_TREE_NODE_OUTLET_NODE');
      let K = (() => {
        class e {
          constructor(e, t) {
            (this.viewContainer = e), (this._node = t);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(o.Kb(o.P), o.Kb(Q, 8));
          }),
          (e.ɵdir = o.Fb({
            type: e,
            selectors: [['', 'cdkTreeNodeOutlet', '']]
          })),
          e
        );
      })();
      class V {
        constructor(e) {
          this.$implicit = e;
        }
      }
      let U = (() => {
          class e {
            constructor(e) {
              this.template = e;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(o.Kb(o.L));
            }),
            (e.ɵdir = o.Fb({
              type: e,
              selectors: [['', 'cdkTreeNodeDef', '']],
              inputs: { when: ['cdkTreeNodeDefWhen', 'when'] }
            })),
            e
          );
        })(),
        q = (() => {
          class e {
            constructor(e, t) {
              (this._differs = e),
                (this._changeDetectorRef = t),
                (this._onDestroy = new F.a()),
                (this._levels = new Map()),
                (this.viewChange = new G.a({
                  start: 0,
                  end: Number.MAX_VALUE
                }));
            }
            get dataSource() {
              return this._dataSource;
            }
            set dataSource(e) {
              this._dataSource !== e && this._switchDataSource(e);
            }
            ngOnInit() {
              this._dataDiffer = this._differs.find([]).create(this.trackBy);
            }
            ngOnDestroy() {
              this._nodeOutlet.viewContainer.clear(),
                this.viewChange.complete(),
                this._onDestroy.next(),
                this._onDestroy.complete(),
                this._dataSource &&
                  'function' == typeof this._dataSource.disconnect &&
                  this.dataSource.disconnect(this),
                this._dataSubscription &&
                  (this._dataSubscription.unsubscribe(),
                  (this._dataSubscription = null));
            }
            ngAfterContentChecked() {
              const e = this._nodeDefs.filter((e) => !e.when);
              (this._defaultNodeDef = e[0]),
                this.dataSource &&
                  this._nodeDefs &&
                  !this._dataSubscription &&
                  this._observeRenderChanges();
            }
            _switchDataSource(e) {
              this._dataSource &&
                'function' == typeof this._dataSource.disconnect &&
                this.dataSource.disconnect(this),
                this._dataSubscription &&
                  (this._dataSubscription.unsubscribe(),
                  (this._dataSubscription = null)),
                e || this._nodeOutlet.viewContainer.clear(),
                (this._dataSource = e),
                this._nodeDefs && this._observeRenderChanges();
            }
            _observeRenderChanges() {
              let e;
              Object(A.f)(this._dataSource)
                ? (e = this._dataSource.connect(this))
                : Object(W.a)(this._dataSource)
                ? (e = this._dataSource)
                : Array.isArray(this._dataSource) &&
                  (e = Object(L.a)(this._dataSource)),
                e &&
                  (this._dataSubscription = e
                    .pipe(Object(j.a)(this._onDestroy))
                    .subscribe((e) => this.renderNodeChanges(e)));
            }
            renderNodeChanges(
              e,
              t = this._dataDiffer,
              i = this._nodeOutlet.viewContainer,
              n
            ) {
              const r = t.diff(e);
              r &&
                (r.forEachOperation((t, r, s) => {
                  if (null == t.previousIndex) this.insertNode(e[s], s, i, n);
                  else if (null == s) i.remove(r), this._levels.delete(t.item);
                  else {
                    const e = i.get(r);
                    i.move(e, s);
                  }
                }),
                this._changeDetectorRef.detectChanges());
            }
            _getNodeDef(e, t) {
              return 1 === this._nodeDefs.length
                ? this._nodeDefs.first
                : this._nodeDefs.find((i) => i.when && i.when(t, e)) ||
                    this._defaultNodeDef;
            }
            insertNode(e, t, i, n) {
              const r = this._getNodeDef(e, t),
                s = new V(e);
              (s.level = this.treeControl.getLevel
                ? this.treeControl.getLevel(e)
                : void 0 !== n && this._levels.has(n)
                ? this._levels.get(n) + 1
                : 0),
                this._levels.set(e, s.level),
                (i || this._nodeOutlet.viewContainer).createEmbeddedView(
                  r.template,
                  s,
                  t
                ),
                $.mostRecentTreeNode && ($.mostRecentTreeNode.data = e);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(o.Kb(o.s), o.Kb(o.h));
            }),
            (e.ɵcmp = o.Eb({
              type: e,
              selectors: [['cdk-tree']],
              contentQueries: function (e, t, i) {
                if ((1 & e && o.Db(i, U, !0), 2 & e)) {
                  let e;
                  o.nc((e = o.Yb())) && (t._nodeDefs = e);
                }
              },
              viewQuery: function (e, t) {
                if ((1 & e && o.vc(K, !0), 2 & e)) {
                  let e;
                  o.nc((e = o.Yb())) && (t._nodeOutlet = e.first);
                }
              },
              hostAttrs: ['role', 'tree', 1, 'cdk-tree'],
              inputs: {
                dataSource: 'dataSource',
                treeControl: 'treeControl',
                trackBy: 'trackBy'
              },
              exportAs: ['cdkTree'],
              decls: 1,
              vars: 0,
              consts: [['cdkTreeNodeOutlet', '']],
              template: function (e, t) {
                1 & e && o.Mb(0, 0);
              },
              directives: [K],
              encapsulation: 2
            })),
            e
          );
        })(),
        $ = (() => {
          class e {
            constructor(t, i) {
              (this._elementRef = t),
                (this._tree = i),
                (this._destroyed = new F.a()),
                (this._dataChanges = new F.a()),
                (e.mostRecentTreeNode = this),
                this._elementRef.nativeElement.classList.add('cdk-tree-node'),
                (this.role = 'treeitem');
            }
            get role() {
              return 'treeitem';
            }
            set role(e) {
              this._elementRef.nativeElement.setAttribute('role', e);
            }
            get data() {
              return this._data;
            }
            set data(e) {
              e !== this._data &&
                ((this._data = e),
                this._setRoleFromData(),
                this._dataChanges.next());
            }
            get isExpanded() {
              return this._tree.treeControl.isExpanded(this._data);
            }
            _setExpanded(e) {
              (this._isAriaExpanded = e),
                this._elementRef.nativeElement.setAttribute(
                  'aria-expanded',
                  '' + e
                );
            }
            get level() {
              return this._tree.treeControl.getLevel
                ? this._tree.treeControl.getLevel(this._data)
                : this._parentNodeAriaLevel;
            }
            ngOnInit() {
              (this._parentNodeAriaLevel = (function (e) {
                let t = e.parentElement;
                for (; t && !X(t); ) t = t.parentElement;
                return t
                  ? t.classList.contains('cdk-nested-tree-node')
                    ? Object(u.e)(t.getAttribute('aria-level'))
                    : 0
                  : -1;
              })(this._elementRef.nativeElement)),
                this._elementRef.nativeElement.setAttribute(
                  'aria-level',
                  '' + (this.level + 1)
                );
            }
            ngDoCheck() {
              this.isExpanded != this._isAriaExpanded &&
                this._setExpanded(this.isExpanded);
            }
            ngOnDestroy() {
              e.mostRecentTreeNode === this && (e.mostRecentTreeNode = null),
                this._dataChanges.complete(),
                this._destroyed.next(),
                this._destroyed.complete();
            }
            focus() {
              this._elementRef.nativeElement.focus();
            }
            _setRoleFromData() {
              this.role = 'treeitem';
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(o.Kb(o.l), o.Kb(q));
            }),
            (e.ɵdir = o.Fb({
              type: e,
              selectors: [['cdk-tree-node']],
              inputs: { role: 'role' },
              exportAs: ['cdkTreeNode']
            })),
            (e.mostRecentTreeNode = null),
            e
          );
        })();
      function X(e) {
        const t = e.classList;
        return !(
          !(null == t ? void 0 : t.contains('cdk-nested-tree-node')) &&
          !(null == t ? void 0 : t.contains('cdk-tree'))
        );
      }
      let Y = (() => {
          class e extends $ {
            constructor(e, t, i) {
              super(e, t),
                (this._elementRef = e),
                (this._tree = t),
                (this._differs = i),
                this._elementRef.nativeElement.classList.add(
                  'cdk-nested-tree-node'
                );
            }
            ngAfterContentInit() {
              this._dataDiffer = this._differs
                .find([])
                .create(this._tree.trackBy);
              const e = this._tree.treeControl.getChildren(this.data);
              Array.isArray(e)
                ? this.updateChildrenNodes(e)
                : Object(W.a)(e) &&
                  e
                    .pipe(Object(j.a)(this._destroyed))
                    .subscribe((e) => this.updateChildrenNodes(e)),
                this.nodeOutlet.changes
                  .pipe(Object(j.a)(this._destroyed))
                  .subscribe(() => this.updateChildrenNodes());
            }
            ngOnInit() {
              super.ngOnInit();
            }
            ngDoCheck() {
              super.ngDoCheck();
            }
            ngOnDestroy() {
              this._clear(), super.ngOnDestroy();
            }
            updateChildrenNodes(e) {
              const t = this._getNodeOutlet();
              e && (this._children = e),
                t && this._children
                  ? this._tree.renderNodeChanges(
                      this._children,
                      this._dataDiffer,
                      t.viewContainer,
                      this._data
                    )
                  : this._dataDiffer.diff([]);
            }
            _clear() {
              const e = this._getNodeOutlet();
              e && (e.viewContainer.clear(), this._dataDiffer.diff([]));
            }
            _getNodeOutlet() {
              const e = this.nodeOutlet;
              return e && e.find((e) => !e._node || e._node === this);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(o.Kb(o.l), o.Kb(q), o.Kb(o.s));
            }),
            (e.ɵdir = o.Fb({
              type: e,
              selectors: [['cdk-nested-tree-node']],
              contentQueries: function (e, t, i) {
                if ((1 & e && o.Db(i, K, !0), 2 & e)) {
                  let e;
                  o.nc((e = o.Yb())) && (t.nodeOutlet = e);
                }
              },
              inputs: {
                role: 'role',
                disabled: 'disabled',
                tabIndex: 'tabIndex'
              },
              exportAs: ['cdkNestedTreeNode'],
              features: [
                o.yb([
                  { provide: $, useExisting: e },
                  { provide: Q, useExisting: e }
                ]),
                o.wb
              ]
            })),
            e
          );
        })(),
        Z = (() => {
          class e {
            constructor(e, t) {
              (this._tree = e), (this._treeNode = t), (this._recursive = !1);
            }
            get recursive() {
              return this._recursive;
            }
            set recursive(e) {
              this._recursive = Object(u.b)(e);
            }
            _toggle(e) {
              this.recursive
                ? this._tree.treeControl.toggleDescendants(this._treeNode.data)
                : this._tree.treeControl.toggle(this._treeNode.data),
                e.stopPropagation();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(o.Kb(q), o.Kb($));
            }),
            (e.ɵdir = o.Fb({
              type: e,
              selectors: [['', 'cdkTreeNodeToggle', '']],
              hostBindings: function (e, t) {
                1 & e &&
                  o.Xb('click', function (e) {
                    return t._toggle(e);
                  });
              },
              inputs: { recursive: ['cdkTreeNodeToggleRecursive', 'recursive'] }
            })),
            e
          );
        })(),
        J = (() => {
          class e {}
          return (
            (e.ɵmod = o.Ib({ type: e })),
            (e.ɵinj = o.Hb({
              factory: function (t) {
                return new (t || e)();
              }
            })),
            e
          );
        })();
      var ee = i('VRyK'),
        te = i('lJxs');
      const ie = Object(a.v)(Object(a.t)($));
      let ne = (() => {
          class e extends ie {
            constructor(e, t, i) {
              super(e, t),
                (this._elementRef = e),
                (this._tree = t),
                (this.tabIndex = Number(i) || 0),
                this._elementRef.nativeElement.classList.add('mat-tree-node');
            }
            ngOnInit() {
              super.ngOnInit();
            }
            ngDoCheck() {
              super.ngDoCheck();
            }
            ngOnDestroy() {
              super.ngOnDestroy();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(o.Kb(o.l), o.Kb(q), o.Vb('tabindex'));
            }),
            (e.ɵdir = o.Fb({
              type: e,
              selectors: [['mat-tree-node']],
              inputs: {
                role: 'role',
                disabled: 'disabled',
                tabIndex: 'tabIndex'
              },
              exportAs: ['matTreeNode'],
              features: [o.yb([{ provide: $, useExisting: e }]), o.wb]
            })),
            e
          );
        })(),
        re = (() => {
          class e extends U {}
          return (
            (e.ɵfac = function (t) {
              return se(t || e);
            }),
            (e.ɵdir = o.Fb({
              type: e,
              selectors: [['', 'matTreeNodeDef', '']],
              inputs: {
                when: ['matTreeNodeDefWhen', 'when'],
                data: ['matTreeNode', 'data']
              },
              features: [o.yb([{ provide: U, useExisting: e }]), o.wb]
            })),
            e
          );
        })();
      const se = o.Sb(re);
      let ae = (() => {
          class e extends Y {
            constructor(e, t, i, n) {
              super(e, t, i),
                (this._elementRef = e),
                (this._tree = t),
                (this._differs = i),
                (this._disabled = !1),
                (this.tabIndex = Number(n) || 0),
                this._elementRef.nativeElement.classList.add(
                  'mat-nested-tree-node'
                );
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(e) {
              this._disabled = Object(u.b)(e);
            }
            get tabIndex() {
              return this.disabled ? -1 : this._tabIndex;
            }
            set tabIndex(e) {
              this._tabIndex = null != e ? e : 0;
            }
            ngOnInit() {
              super.ngOnInit();
            }
            ngDoCheck() {
              super.ngDoCheck();
            }
            ngAfterContentInit() {
              super.ngAfterContentInit();
            }
            ngOnDestroy() {
              super.ngOnDestroy();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                o.Kb(o.l),
                o.Kb(q),
                o.Kb(o.s),
                o.Vb('tabindex')
              );
            }),
            (e.ɵdir = o.Fb({
              type: e,
              selectors: [['mat-nested-tree-node']],
              inputs: {
                role: 'role',
                disabled: 'disabled',
                tabIndex: 'tabIndex',
                node: ['matNestedTreeNode', 'node']
              },
              exportAs: ['matNestedTreeNode'],
              features: [
                o.yb([
                  { provide: Y, useExisting: e },
                  { provide: $, useExisting: e },
                  { provide: Q, useExisting: e }
                ]),
                o.wb
              ]
            })),
            e
          );
        })(),
        oe = (() => {
          class e {
            constructor(e, t) {
              (this.viewContainer = e), (this._node = t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(o.Kb(o.P), o.Kb(Q, 8));
            }),
            (e.ɵdir = o.Fb({
              type: e,
              selectors: [['', 'matTreeNodeOutlet', '']],
              features: [o.yb([{ provide: K, useExisting: e }])]
            })),
            e
          );
        })(),
        ce = (() => {
          class e extends q {}
          return (
            (e.ɵfac = function (t) {
              return le(t || e);
            }),
            (e.ɵcmp = o.Eb({
              type: e,
              selectors: [['mat-tree']],
              viewQuery: function (e, t) {
                if ((1 & e && o.vc(oe, !0), 2 & e)) {
                  let e;
                  o.nc((e = o.Yb())) && (t._nodeOutlet = e.first);
                }
              },
              hostAttrs: ['role', 'tree', 1, 'mat-tree', 'cdk-tree'],
              exportAs: ['matTree'],
              features: [o.yb([{ provide: q, useExisting: e }]), o.wb],
              decls: 1,
              vars: 0,
              consts: [['matTreeNodeOutlet', '']],
              template: function (e, t) {
                1 & e && o.Mb(0, 0);
              },
              directives: [oe],
              styles: [
                '.mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n'
              ],
              encapsulation: 2
            })),
            e
          );
        })();
      const le = o.Sb(ce);
      let he = (() => {
        class e extends Z {
          get recursive() {
            return this._recursive;
          }
          set recursive(e) {
            this._recursive = Object(u.b)(e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return de(t || e);
          }),
          (e.ɵdir = o.Fb({
            type: e,
            selectors: [['', 'matTreeNodeToggle', '']],
            inputs: { recursive: ['matTreeNodeToggleRecursive', 'recursive'] },
            features: [o.yb([{ provide: Z, useExisting: e }]), o.wb]
          })),
          e
        );
      })();
      const de = o.Sb(he);
      let me = (() => {
        class e {}
        return (
          (e.ɵmod = o.Ib({ type: e })),
          (e.ɵinj = o.Hb({
            factory: function (t) {
              return new (t || e)();
            },
            imports: [[J, a.e], a.e]
          })),
          e
        );
      })();
      class ue extends A.b {
        constructor() {
          super(...arguments), (this._data = new G.a([]));
        }
        get data() {
          return this._data.value;
        }
        set data(e) {
          this._data.next(e);
        }
        connect(e) {
          return Object(ee.a)(e.viewChange, this._data).pipe(
            Object(te.a)(() => this.data)
          );
        }
        disconnect() {}
      }
      var pe = i('tyNb'),
        be = i('9Xeq'),
        fe = i('mrSG'),
        ge = i('aCrv');
      const ke = ['header'],
        ve = ['container'],
        _e = ['content'],
        xe = ['invisiblePadding'],
        we = ['*'];
      function ye() {
        return {
          checkResizeInterval: 1e3,
          modifyOverflowStyleOfParentScroll: !0,
          resizeBypassRefreshThreshold: 5,
          scrollAnimationTime: 750,
          scrollDebounceTime: 0,
          scrollThrottlingTime: 0,
          stripedTable: !1
        };
      }
      let Ce = (() => {
          let e = class {
            constructor(e, t, i, r, s, a) {
              (this.element = e),
                (this.renderer = t),
                (this.zone = i),
                (this.changeDetectorRef = r),
                (this.window = window),
                (this.executeRefreshOutsideAngularZone = !1),
                (this._enableUnequalChildrenSizes = !1),
                (this.RTL = !1),
                (this.useMarginInsteadOfTranslate = !1),
                (this.ssrViewportWidth = 1920),
                (this.ssrViewportHeight = 1080),
                (this._items = []),
                (this.compareItems = (e, t) => e === t),
                (this.vsUpdate = new o.n()),
                (this.vsChange = new o.n()),
                (this.vsStart = new o.n()),
                (this.vsEnd = new o.n()),
                (this.calculatedScrollbarWidth = 0),
                (this.calculatedScrollbarHeight = 0),
                (this.padding = 0),
                (this.previousViewPort = {}),
                (this.cachedPageSize = 0),
                (this.previousScrollNumberElements = 0),
                (this.isAngularUniversalSSR = Object(n.w)(s)),
                (this.checkResizeInterval = a.checkResizeInterval),
                (this.modifyOverflowStyleOfParentScroll =
                  a.modifyOverflowStyleOfParentScroll),
                (this.resizeBypassRefreshThreshold =
                  a.resizeBypassRefreshThreshold),
                (this.scrollAnimationTime = a.scrollAnimationTime),
                (this.scrollDebounceTime = a.scrollDebounceTime),
                (this.scrollThrottlingTime = a.scrollThrottlingTime),
                (this.scrollbarHeight = a.scrollbarHeight),
                (this.scrollbarWidth = a.scrollbarWidth),
                (this.stripedTable = a.stripedTable),
                (this.horizontal = !1),
                this.resetWrapGroupDimensions();
            }
            get viewPortInfo() {
              let e = this.previousViewPort || {};
              return {
                startIndex: e.startIndex || 0,
                endIndex: e.endIndex || 0,
                scrollStartPosition: e.scrollStartPosition || 0,
                scrollEndPosition: e.scrollEndPosition || 0,
                maxScrollPosition: e.maxScrollPosition || 0,
                startIndexWithBuffer: e.startIndexWithBuffer || 0,
                endIndexWithBuffer: e.endIndexWithBuffer || 0
              };
            }
            get enableUnequalChildrenSizes() {
              return this._enableUnequalChildrenSizes;
            }
            set enableUnequalChildrenSizes(e) {
              this._enableUnequalChildrenSizes !== e &&
                ((this._enableUnequalChildrenSizes = e),
                (this.minMeasuredChildWidth = void 0),
                (this.minMeasuredChildHeight = void 0));
            }
            get bufferAmount() {
              return 'number' == typeof this._bufferAmount &&
                this._bufferAmount >= 0
                ? this._bufferAmount
                : this.enableUnequalChildrenSizes
                ? 5
                : 0;
            }
            set bufferAmount(e) {
              this._bufferAmount = e;
            }
            get scrollThrottlingTime() {
              return this._scrollThrottlingTime;
            }
            set scrollThrottlingTime(e) {
              (this._scrollThrottlingTime = e), this.updateOnScrollFunction();
            }
            get scrollDebounceTime() {
              return this._scrollDebounceTime;
            }
            set scrollDebounceTime(e) {
              (this._scrollDebounceTime = e), this.updateOnScrollFunction();
            }
            updateOnScrollFunction() {
              this.onScroll = this.scrollDebounceTime
                ? this.debounce(() => {
                    this.refresh_internal(!1);
                  }, this.scrollDebounceTime)
                : this.scrollThrottlingTime
                ? this.throttleTrailing(() => {
                    this.refresh_internal(!1);
                  }, this.scrollThrottlingTime)
                : () => {
                    this.refresh_internal(!1);
                  };
            }
            get checkResizeInterval() {
              return this._checkResizeInterval;
            }
            set checkResizeInterval(e) {
              this._checkResizeInterval !== e &&
                ((this._checkResizeInterval = e),
                this.addScrollEventHandlers());
            }
            get items() {
              return this._items;
            }
            set items(e) {
              e !== this._items &&
                ((this._items = e || []), this.refresh_internal(!0));
            }
            get horizontal() {
              return this._horizontal;
            }
            set horizontal(e) {
              (this._horizontal = e), this.updateDirection();
            }
            revertParentOverscroll() {
              const e = this.getScrollElement();
              e &&
                this.oldParentScrollOverflow &&
                ((e.style['overflow-y'] = this.oldParentScrollOverflow.y),
                (e.style['overflow-x'] = this.oldParentScrollOverflow.x)),
                (this.oldParentScrollOverflow = void 0);
            }
            get parentScroll() {
              return this._parentScroll;
            }
            set parentScroll(e) {
              if (this._parentScroll === e) return;
              this.revertParentOverscroll(),
                (this._parentScroll = e),
                this.addScrollEventHandlers();
              const t = this.getScrollElement();
              this.modifyOverflowStyleOfParentScroll &&
                t !== this.element.nativeElement &&
                ((this.oldParentScrollOverflow = {
                  x: t.style['overflow-x'],
                  y: t.style['overflow-y']
                }),
                (t.style['overflow-y'] = this.horizontal ? 'visible' : 'auto'),
                (t.style['overflow-x'] = this.horizontal ? 'auto' : 'visible'));
            }
            ngOnInit() {
              this.addScrollEventHandlers();
            }
            ngOnDestroy() {
              this.removeScrollEventHandlers(), this.revertParentOverscroll();
            }
            ngOnChanges(e) {
              let t = this.cachedItemsLength !== this.items.length;
              (this.cachedItemsLength = this.items.length),
                this.refresh_internal(
                  t ||
                    !e.items ||
                    !e.items.previousValue ||
                    0 === e.items.previousValue.length
                );
            }
            ngDoCheck() {
              if (this.cachedItemsLength !== this.items.length)
                return (
                  (this.cachedItemsLength = this.items.length),
                  void this.refresh_internal(!0)
                );
              if (
                this.previousViewPort &&
                this.viewPortItems &&
                this.viewPortItems.length > 0
              ) {
                let e = !1;
                for (let t = 0; t < this.viewPortItems.length; ++t)
                  if (
                    !this.compareItems(
                      this.items[
                        this.previousViewPort.startIndexWithBuffer + t
                      ],
                      this.viewPortItems[t]
                    )
                  ) {
                    e = !0;
                    break;
                  }
                e && this.refresh_internal(!0);
              }
            }
            refresh() {
              this.refresh_internal(!0);
            }
            invalidateAllCachedMeasurements() {
              (this.wrapGroupDimensions = {
                maxChildSizePerWrapGroup: [],
                numberOfKnownWrapGroupChildSizes: 0,
                sumOfKnownWrapGroupChildWidths: 0,
                sumOfKnownWrapGroupChildHeights: 0
              }),
                (this.minMeasuredChildWidth = void 0),
                (this.minMeasuredChildHeight = void 0),
                this.refresh_internal(!1);
            }
            invalidateCachedMeasurementForItem(e) {
              if (this.enableUnequalChildrenSizes) {
                let t = this.items && this.items.indexOf(e);
                t >= 0 && this.invalidateCachedMeasurementAtIndex(t);
              } else
                (this.minMeasuredChildWidth = void 0),
                  (this.minMeasuredChildHeight = void 0);
              this.refresh_internal(!1);
            }
            invalidateCachedMeasurementAtIndex(e) {
              if (this.enableUnequalChildrenSizes) {
                let t = this.wrapGroupDimensions.maxChildSizePerWrapGroup[e];
                t &&
                  ((this.wrapGroupDimensions.maxChildSizePerWrapGroup[
                    e
                  ] = void 0),
                  --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes,
                  (this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -=
                    t.childWidth || 0),
                  (this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -=
                    t.childHeight || 0));
              } else
                (this.minMeasuredChildWidth = void 0),
                  (this.minMeasuredChildHeight = void 0);
              this.refresh_internal(!1);
            }
            scrollInto(e, t = !0, i = 0, n, r) {
              let s = this.items.indexOf(e);
              -1 !== s && this.scrollToIndex(s, t, i, n, r);
            }
            scrollToIndex(e, t = !0, i = 0, n, r) {
              let s = 5,
                a = () => {
                  if ((--s, s <= 0)) return void (r && r());
                  let n = this.calculateDimensions(),
                    o = Math.min(Math.max(e, 0), n.itemCount - 1);
                  this.previousViewPort.startIndex !== o
                    ? this.scrollToIndex_internal(e, t, i, 0, a)
                    : r && r();
                };
              this.scrollToIndex_internal(e, t, i, n, a);
            }
            scrollToIndex_internal(e, t = !0, i = 0, n, r) {
              n = void 0 === n ? this.scrollAnimationTime : n;
              let s = this.calculateDimensions(),
                a = this.calculatePadding(e, s) + i;
              t || (a -= s.wrapGroupsPerPage * s[this._childScrollDim]),
                this.scrollToPosition(a, n, r);
            }
            scrollToPosition(e, t, i) {
              (e += this.getElementsOffset()),
                (t = void 0 === t ? this.scrollAnimationTime : t);
              let n,
                r = this.getScrollElement();
              if (
                (this.currentTween &&
                  (this.currentTween.stop(), (this.currentTween = void 0)),
                !t)
              )
                return (
                  this.renderer.setProperty(r, this._scrollType, e),
                  void this.refresh_internal(!1, i)
                );
              const s = { scrollPosition: r[this._scrollType] };
              let a = new ge.Tween(s)
                .to({ scrollPosition: e }, t)
                .easing(ge.Easing.Quadratic.Out)
                .onUpdate((e) => {
                  isNaN(e.scrollPosition) ||
                    (this.renderer.setProperty(
                      r,
                      this._scrollType,
                      e.scrollPosition
                    ),
                    this.refresh_internal(!1));
                })
                .onStop(() => {
                  cancelAnimationFrame(n);
                })
                .start();
              const o = (t) => {
                a.isPlaying() &&
                  (a.update(t),
                  s.scrollPosition !== e
                    ? this.zone.runOutsideAngular(() => {
                        n = requestAnimationFrame(o);
                      })
                    : this.refresh_internal(!1, i));
              };
              o(), (this.currentTween = a);
            }
            getElementSize(e) {
              let t = e.getBoundingClientRect(),
                i = getComputedStyle(e),
                n = parseInt(i['margin-top'], 10) || 0,
                r = parseInt(i['margin-bottom'], 10) || 0,
                s = parseInt(i['margin-left'], 10) || 0,
                a = parseInt(i['margin-right'], 10) || 0;
              return {
                top: t.top + n,
                bottom: t.bottom + r,
                left: t.left + s,
                right: t.right + a,
                width: t.width + s + a,
                height: t.height + n + r
              };
            }
            checkScrollElementResized() {
              let e,
                t = this.getElementSize(this.getScrollElement());
              if (this.previousScrollBoundingRect) {
                let i = Math.abs(
                    t.width - this.previousScrollBoundingRect.width
                  ),
                  n = Math.abs(
                    t.height - this.previousScrollBoundingRect.height
                  );
                e =
                  i > this.resizeBypassRefreshThreshold ||
                  n > this.resizeBypassRefreshThreshold;
              } else e = !0;
              e &&
                ((this.previousScrollBoundingRect = t),
                t.width > 0 && t.height > 0 && this.refresh_internal(!1));
            }
            updateDirection() {
              this.horizontal
                ? ((this._childScrollDim = 'childWidth'),
                  (this._invisiblePaddingProperty = 'scaleX'),
                  (this._marginDir = 'margin-left'),
                  (this._offsetType = 'offsetLeft'),
                  (this._pageOffsetType = 'pageXOffset'),
                  (this._scrollType = 'scrollLeft'),
                  (this._translateDir = 'translateX'))
                : ((this._childScrollDim = 'childHeight'),
                  (this._invisiblePaddingProperty = 'scaleY'),
                  (this._marginDir = 'margin-top'),
                  (this._offsetType = 'offsetTop'),
                  (this._pageOffsetType = 'pageYOffset'),
                  (this._scrollType = 'scrollTop'),
                  (this._translateDir = 'translateY'));
            }
            debounce(e, t) {
              const i = this.throttleTrailing(e, t),
                n = function () {
                  i.cancel(), i.apply(this, arguments);
                };
              return (
                (n.cancel = function () {
                  i.cancel();
                }),
                n
              );
            }
            throttleTrailing(e, t) {
              let i = void 0,
                n = arguments;
              const r = function () {
                const r = this;
                (n = arguments),
                  i ||
                    (t <= 0
                      ? e.apply(r, n)
                      : (i = setTimeout(function () {
                          (i = void 0), e.apply(r, n);
                        }, t)));
              };
              return (
                (r.cancel = function () {
                  i && (clearTimeout(i), (i = void 0));
                }),
                r
              );
            }
            refresh_internal(e, t, i = 2) {
              if (
                e &&
                this.previousViewPort &&
                this.previousViewPort.scrollStartPosition > 0
              ) {
                let e = this.previousViewPort,
                  i = this.viewPortItems,
                  n = t;
                t = () => {
                  let t = this.previousViewPort.scrollLength - e.scrollLength;
                  if (t > 0 && this.viewPortItems) {
                    let e = i[0],
                      r = this.items.findIndex((t) => this.compareItems(e, t));
                    if (r > this.previousViewPort.startIndexWithBuffer) {
                      let e = !1;
                      for (let t = 1; t < this.viewPortItems.length; ++t)
                        if (!this.compareItems(this.items[r + t], i[t])) {
                          e = !0;
                          break;
                        }
                      if (!e)
                        return void this.scrollToPosition(
                          this.previousViewPort.scrollStartPosition + t,
                          0,
                          n
                        );
                    }
                  }
                  n && n();
                };
              }
              this.zone.runOutsideAngular(() => {
                requestAnimationFrame(() => {
                  e && this.resetWrapGroupDimensions();
                  let n = this.calculateViewport(),
                    r = e || n.startIndex !== this.previousViewPort.startIndex,
                    s = e || n.endIndex !== this.previousViewPort.endIndex,
                    a = n.scrollLength !== this.previousViewPort.scrollLength,
                    o = n.padding !== this.previousViewPort.padding,
                    c =
                      n.scrollStartPosition !==
                        this.previousViewPort.scrollStartPosition ||
                      n.scrollEndPosition !==
                        this.previousViewPort.scrollEndPosition ||
                      n.maxScrollPosition !==
                        this.previousViewPort.maxScrollPosition;
                  if (
                    ((this.previousViewPort = n),
                    a &&
                      (this.renderer.setStyle(
                        this.invisiblePaddingElementRef.nativeElement,
                        'transform',
                        `${this._invisiblePaddingProperty}(${n.scrollLength})`
                      ),
                      this.renderer.setStyle(
                        this.invisiblePaddingElementRef.nativeElement,
                        'webkitTransform',
                        `${this._invisiblePaddingProperty}(${n.scrollLength})`
                      )),
                    o &&
                      (this.useMarginInsteadOfTranslate
                        ? this.renderer.setStyle(
                            this.contentElementRef.nativeElement,
                            this._marginDir,
                            n.padding + 'px'
                          )
                        : (this.renderer.setStyle(
                            this.contentElementRef.nativeElement,
                            'transform',
                            `${this._translateDir}(${n.padding}px)`
                          ),
                          this.renderer.setStyle(
                            this.contentElementRef.nativeElement,
                            'webkitTransform',
                            `${this._translateDir}(${n.padding}px)`
                          ))),
                    this.headerElementRef)
                  ) {
                    let e = this.getScrollElement()[this._scrollType],
                      t = this.getElementsOffset(),
                      i = Math.max(
                        e -
                          n.padding -
                          t +
                          this.headerElementRef.nativeElement.clientHeight,
                        0
                      );
                    this.renderer.setStyle(
                      this.headerElementRef.nativeElement,
                      'transform',
                      `${this._translateDir}(${i}px)`
                    ),
                      this.renderer.setStyle(
                        this.headerElementRef.nativeElement,
                        'webkitTransform',
                        `${this._translateDir}(${i}px)`
                      );
                  }
                  const l =
                    r || s
                      ? {
                          startIndex: n.startIndex,
                          endIndex: n.endIndex,
                          scrollStartPosition: n.scrollStartPosition,
                          scrollEndPosition: n.scrollEndPosition,
                          startIndexWithBuffer: n.startIndexWithBuffer,
                          endIndexWithBuffer: n.endIndexWithBuffer,
                          maxScrollPosition: n.maxScrollPosition
                        }
                      : void 0;
                  if (r || s || c) {
                    const e = () => {
                      (this.viewPortItems =
                        n.startIndexWithBuffer >= 0 && n.endIndexWithBuffer >= 0
                          ? this.items.slice(
                              n.startIndexWithBuffer,
                              n.endIndexWithBuffer + 1
                            )
                          : []),
                        this.vsUpdate.emit(this.viewPortItems),
                        r && this.vsStart.emit(l),
                        s && this.vsEnd.emit(l),
                        (r || s) &&
                          (this.changeDetectorRef.markForCheck(),
                          this.vsChange.emit(l)),
                        i > 0 ? this.refresh_internal(!1, t, i - 1) : t && t();
                    };
                    this.executeRefreshOutsideAngularZone
                      ? e()
                      : this.zone.run(e);
                  } else {
                    if (i > 0 && (a || o))
                      return void this.refresh_internal(!1, t, i - 1);
                    t && t();
                  }
                });
              });
            }
            getScrollElement() {
              return this.parentScroll instanceof Window
                ? document.scrollingElement ||
                    document.documentElement ||
                    document.body
                : this.parentScroll || this.element.nativeElement;
            }
            addScrollEventHandlers() {
              if (this.isAngularUniversalSSR) return;
              let e = this.getScrollElement();
              this.removeScrollEventHandlers(),
                this.zone.runOutsideAngular(() => {
                  this.parentScroll instanceof Window
                    ? ((this.disposeScrollHandler = this.renderer.listen(
                        'window',
                        'scroll',
                        this.onScroll
                      )),
                      (this.disposeResizeHandler = this.renderer.listen(
                        'window',
                        'resize',
                        this.onScroll
                      )))
                    : ((this.disposeScrollHandler = this.renderer.listen(
                        e,
                        'scroll',
                        this.onScroll
                      )),
                      this._checkResizeInterval > 0 &&
                        (this.checkScrollElementResizedTimer = setInterval(
                          () => {
                            this.checkScrollElementResized();
                          },
                          this._checkResizeInterval
                        )));
                });
            }
            removeScrollEventHandlers() {
              this.checkScrollElementResizedTimer &&
                clearInterval(this.checkScrollElementResizedTimer),
                this.disposeScrollHandler &&
                  (this.disposeScrollHandler(),
                  (this.disposeScrollHandler = void 0)),
                this.disposeResizeHandler &&
                  (this.disposeResizeHandler(),
                  (this.disposeResizeHandler = void 0));
            }
            getElementsOffset() {
              if (this.isAngularUniversalSSR) return 0;
              let e = 0;
              if (
                (this.containerElementRef &&
                  this.containerElementRef.nativeElement &&
                  (e += this.containerElementRef.nativeElement[
                    this._offsetType
                  ]),
                this.parentScroll)
              ) {
                let t = this.getScrollElement(),
                  i = this.getElementSize(this.element.nativeElement),
                  n = this.getElementSize(t);
                (e += this.horizontal ? i.left - n.left : i.top - n.top),
                  this.parentScroll instanceof Window ||
                    (e += t[this._scrollType]);
              }
              return e;
            }
            countItemsPerWrapGroup() {
              if (this.isAngularUniversalSSR)
                return Math.round(
                  this.horizontal
                    ? this.ssrViewportHeight / this.ssrChildHeight
                    : this.ssrViewportWidth / this.ssrChildWidth
                );
              let e = this.horizontal ? 'offsetLeft' : 'offsetTop',
                t = (
                  (this.containerElementRef &&
                    this.containerElementRef.nativeElement) ||
                  this.contentElementRef.nativeElement
                ).children,
                i = t ? t.length : 0;
              if (0 === i) return 1;
              let n = t[0][e],
                r = 1;
              for (; r < i && n === t[r][e]; ) ++r;
              return r;
            }
            getScrollStartPosition() {
              let e = void 0;
              return (
                this.parentScroll instanceof Window &&
                  (e = window[this._pageOffsetType]),
                e || this.getScrollElement()[this._scrollType] || 0
              );
            }
            resetWrapGroupDimensions() {
              const e = this.wrapGroupDimensions;
              if (
                (this.invalidateAllCachedMeasurements(),
                !this.enableUnequalChildrenSizes ||
                  !e ||
                  0 === e.numberOfKnownWrapGroupChildSizes)
              )
                return;
              const t = this.countItemsPerWrapGroup();
              for (let i = 0; i < e.maxChildSizePerWrapGroup.length; ++i) {
                const n = e.maxChildSizePerWrapGroup[i];
                if (!n || !n.items || !n.items.length) continue;
                if (n.items.length !== t) return;
                let r = !1,
                  s = t * i;
                for (let e = 0; e < t; ++e)
                  if (!this.compareItems(n.items[e], this.items[s + e])) {
                    r = !0;
                    break;
                  }
                r ||
                  (++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes,
                  (this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths +=
                    n.childWidth || 0),
                  (this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights +=
                    n.childHeight || 0),
                  (this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] = n));
              }
            }
            calculateDimensions() {
              let e = this.getScrollElement();
              (this.calculatedScrollbarHeight = Math.max(
                Math.min(e.offsetHeight - e.clientHeight, 25),
                this.calculatedScrollbarHeight
              )),
                (this.calculatedScrollbarWidth = Math.max(
                  Math.min(e.offsetWidth - e.clientWidth, 25),
                  this.calculatedScrollbarWidth
                ));
              let t,
                i,
                n,
                r =
                  e.offsetWidth -
                  (this.scrollbarWidth ||
                    this.calculatedScrollbarWidth ||
                    (this.horizontal ? 0 : 25)),
                s =
                  e.offsetHeight -
                  (this.scrollbarHeight ||
                    this.calculatedScrollbarHeight ||
                    (this.horizontal ? 25 : 0)),
                a =
                  (this.containerElementRef &&
                    this.containerElementRef.nativeElement) ||
                  this.contentElementRef.nativeElement,
                o = this.countItemsPerWrapGroup();
              if (this.isAngularUniversalSSR) {
                (r = this.ssrViewportWidth),
                  (s = this.ssrViewportHeight),
                  (i = this.ssrChildWidth),
                  (n = this.ssrChildHeight);
                let e = Math.max(Math.ceil(r / i), 1),
                  a = Math.max(Math.ceil(s / n), 1);
                t = this.horizontal ? e : a;
              } else if (this.enableUnequalChildrenSizes) {
                let c =
                    e[this._scrollType] -
                    (this.previousViewPort ? this.previousViewPort.padding : 0),
                  l = this.previousViewPort.startIndexWithBuffer || 0,
                  h = Math.ceil(l / o),
                  d = 0,
                  m = 0,
                  u = 0,
                  p = 0;
                t = 0;
                for (let e = 0; e < a.children.length; ++e) {
                  ++l;
                  let i = this.getElementSize(a.children[e]);
                  if (
                    ((d = Math.max(d, i.width)),
                    (m = Math.max(m, i.height)),
                    l % o == 0)
                  ) {
                    let e = this.wrapGroupDimensions.maxChildSizePerWrapGroup[
                      h
                    ];
                    e &&
                      (--this.wrapGroupDimensions
                        .numberOfKnownWrapGroupChildSizes,
                      (this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -=
                        e.childWidth || 0),
                      (this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -=
                        e.childHeight || 0)),
                      ++this.wrapGroupDimensions
                        .numberOfKnownWrapGroupChildSizes;
                    const i = this.items.slice(l - o, l);
                    if (
                      ((this.wrapGroupDimensions.maxChildSizePerWrapGroup[h] = {
                        childWidth: d,
                        childHeight: m,
                        items: i
                      }),
                      (this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += d),
                      (this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += m),
                      this.horizontal)
                    ) {
                      let e = Math.min(d, Math.max(r - u, 0));
                      if (c > 0) {
                        let t = Math.min(c, e);
                        (e -= t), (c -= t);
                      }
                      (u += e), e > 0 && r >= u && ++t;
                    } else {
                      let e = Math.min(m, Math.max(s - p, 0));
                      if (c > 0) {
                        let t = Math.min(c, e);
                        (e -= t), (c -= t);
                      }
                      (p += e), e > 0 && s >= p && ++t;
                    }
                    ++h, (d = 0), (m = 0);
                  }
                }
                let b =
                    this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths /
                    this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes,
                  f =
                    this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights /
                    this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                (i = this.childWidth || b || r),
                  (n = this.childHeight || f || s),
                  this.horizontal
                    ? r > u && (t += Math.ceil((r - u) / i))
                    : s > p && (t += Math.ceil((s - p) / n));
              } else {
                if (a.children.length > 0) {
                  (this.childWidth && this.childHeight) ||
                    (!this.minMeasuredChildWidth &&
                      r > 0 &&
                      (this.minMeasuredChildWidth = r),
                    !this.minMeasuredChildHeight &&
                      s > 0 &&
                      (this.minMeasuredChildHeight = s));
                  let e = this.getElementSize(a.children[0]);
                  (this.minMeasuredChildWidth = Math.min(
                    this.minMeasuredChildWidth,
                    e.width
                  )),
                    (this.minMeasuredChildHeight = Math.min(
                      this.minMeasuredChildHeight,
                      e.height
                    ));
                }
                (i = this.childWidth || this.minMeasuredChildWidth || r),
                  (n = this.childHeight || this.minMeasuredChildHeight || s);
                let e = Math.max(Math.ceil(r / i), 1),
                  o = Math.max(Math.ceil(s / n), 1);
                t = this.horizontal ? e : o;
              }
              let c = this.items.length,
                l = o * t,
                h = c / l,
                d = Math.ceil(c / o),
                m = 0,
                u = this.horizontal ? i : n;
              if (this.enableUnequalChildrenSizes) {
                let e = 0;
                for (let t = 0; t < d; ++t) {
                  let i =
                    this.wrapGroupDimensions.maxChildSizePerWrapGroup[t] &&
                    this.wrapGroupDimensions.maxChildSizePerWrapGroup[t][
                      this._childScrollDim
                    ];
                  i ? (m += i) : ++e;
                }
                m += Math.round(e * u);
              } else m = d * u;
              this.headerElementRef &&
                (m += this.headerElementRef.nativeElement.clientHeight);
              let p = this.horizontal ? r : s;
              return {
                childHeight: n,
                childWidth: i,
                itemCount: c,
                itemsPerPage: l,
                itemsPerWrapGroup: o,
                maxScrollPosition: Math.max(m - p, 0),
                pageCount_fractional: h,
                scrollLength: m,
                viewportLength: p,
                wrapGroupsPerPage: t
              };
            }
            calculatePadding(e, t) {
              if (0 === t.itemCount) return 0;
              let i = t[this._childScrollDim],
                n = Math.floor(e / t.itemsPerWrapGroup) || 0;
              if (!this.enableUnequalChildrenSizes) return i * n;
              let r = 0,
                s = 0;
              for (let a = 0; a < n; ++a) {
                let e =
                  this.wrapGroupDimensions.maxChildSizePerWrapGroup[a] &&
                  this.wrapGroupDimensions.maxChildSizePerWrapGroup[a][
                    this._childScrollDim
                  ];
                e ? (s += e) : ++r;
              }
              return (s += Math.round(r * i)), s;
            }
            calculatePageInfo(e, t) {
              let i = 0;
              if (this.enableUnequalChildrenSizes) {
                const n = Math.ceil(t.itemCount / t.itemsPerWrapGroup);
                let r = 0,
                  s = t[this._childScrollDim];
                for (let t = 0; t < n; ++t)
                  if (
                    ((r +=
                      (this.wrapGroupDimensions.maxChildSizePerWrapGroup[t] &&
                        this.wrapGroupDimensions.maxChildSizePerWrapGroup[t][
                          this._childScrollDim
                        ]) ||
                      s),
                    e < r)
                  ) {
                    i = t / n;
                    break;
                  }
              } else i = e / t.scrollLength;
              let n =
                  Math.min(
                    Math.max(i * t.pageCount_fractional, 0),
                    t.pageCount_fractional
                  ) * t.itemsPerPage,
                r = t.itemCount - t.itemsPerPage - 1,
                s = Math.min(Math.floor(n), r);
              if (((s -= s % t.itemsPerWrapGroup), this.stripedTable)) {
                let e = 2 * t.itemsPerWrapGroup;
                s % e != 0 && (s = Math.max(s - (s % e), 0));
              }
              let a = Math.ceil(n) + t.itemsPerPage - 1,
                o = (a + 1) % t.itemsPerWrapGroup;
              o > 0 && (a += t.itemsPerWrapGroup - o),
                isNaN(s) && (s = 0),
                isNaN(a) && (a = 0),
                (s = Math.min(Math.max(s, 0), t.itemCount - 1)),
                (a = Math.min(Math.max(a, 0), t.itemCount - 1));
              let c = this.bufferAmount * t.itemsPerWrapGroup;
              return {
                startIndex: s,
                endIndex: a,
                startIndexWithBuffer: Math.min(
                  Math.max(s - c, 0),
                  t.itemCount - 1
                ),
                endIndexWithBuffer: Math.min(
                  Math.max(a + c, 0),
                  t.itemCount - 1
                ),
                scrollStartPosition: e,
                scrollEndPosition: e + t.viewportLength,
                maxScrollPosition: t.maxScrollPosition
              };
            }
            calculateViewport() {
              let e = this.calculateDimensions(),
                t = this.getElementsOffset(),
                i = this.getScrollStartPosition();
              i > e.scrollLength + t && !(this.parentScroll instanceof Window)
                ? (i = e.scrollLength)
                : (i -= t),
                (i = Math.max(0, i));
              let n = this.calculatePageInfo(i, e),
                r = this.calculatePadding(n.startIndexWithBuffer, e),
                s = e.scrollLength;
              return {
                startIndex: n.startIndex,
                endIndex: n.endIndex,
                startIndexWithBuffer: n.startIndexWithBuffer,
                endIndexWithBuffer: n.endIndexWithBuffer,
                padding: Math.round(r),
                scrollLength: Math.round(s),
                scrollStartPosition: n.scrollStartPosition,
                scrollEndPosition: n.scrollEndPosition,
                maxScrollPosition: n.maxScrollPosition
              };
            }
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                o.Kb(o.l),
                o.Kb(o.E),
                o.Kb(o.z),
                o.Kb(o.h),
                o.Kb(o.B),
                o.Kb('virtual-scroller-default-options', 8)
              );
            }),
            (e.ɵcmp = o.Eb({
              type: e,
              selectors: [['virtual-scroller'], ['', 'virtualScroller', '']],
              contentQueries: function (e, t, i) {
                if (
                  (1 & e && (o.Db(i, ke, !0, o.l), o.Db(i, ve, !0, o.l)), 2 & e)
                ) {
                  let e;
                  o.nc((e = o.Yb())) && (t.headerElementRef = e.first),
                    o.nc((e = o.Yb())) && (t.containerElementRef = e.first);
                }
              },
              viewQuery: function (e, t) {
                if ((1 & e && (o.vc(_e, !0, o.l), o.vc(xe, !0, o.l)), 2 & e)) {
                  let e;
                  o.nc((e = o.Yb())) && (t.contentElementRef = e.first),
                    o.nc((e = o.Yb())) &&
                      (t.invisiblePaddingElementRef = e.first);
                }
              },
              hostVars: 8,
              hostBindings: function (e, t) {
                2 & e &&
                  o.Cb('horizontal', t.horizontal)('vertical', !t.horizontal)(
                    'selfScroll',
                    !t.parentScroll
                  )('rtl', t.RTL);
              },
              inputs: {
                executeRefreshOutsideAngularZone:
                  'executeRefreshOutsideAngularZone',
                RTL: 'RTL',
                useMarginInsteadOfTranslate: 'useMarginInsteadOfTranslate',
                ssrViewportWidth: 'ssrViewportWidth',
                ssrViewportHeight: 'ssrViewportHeight',
                compareItems: 'compareItems',
                checkResizeInterval: 'checkResizeInterval',
                modifyOverflowStyleOfParentScroll:
                  'modifyOverflowStyleOfParentScroll',
                resizeBypassRefreshThreshold: 'resizeBypassRefreshThreshold',
                scrollAnimationTime: 'scrollAnimationTime',
                scrollDebounceTime: 'scrollDebounceTime',
                scrollThrottlingTime: 'scrollThrottlingTime',
                scrollbarHeight: 'scrollbarHeight',
                scrollbarWidth: 'scrollbarWidth',
                stripedTable: 'stripedTable',
                horizontal: 'horizontal',
                enableUnequalChildrenSizes: 'enableUnequalChildrenSizes',
                bufferAmount: 'bufferAmount',
                items: 'items',
                parentScroll: 'parentScroll',
                childWidth: 'childWidth',
                childHeight: 'childHeight',
                ssrChildWidth: 'ssrChildWidth',
                ssrChildHeight: 'ssrChildHeight'
              },
              outputs: {
                vsUpdate: 'vsUpdate',
                vsChange: 'vsChange',
                vsStart: 'vsStart',
                vsEnd: 'vsEnd'
              },
              exportAs: ['virtualScroller'],
              features: [o.xb],
              ngContentSelectors: we,
              decls: 5,
              vars: 0,
              consts: [
                [1, 'total-padding'],
                ['invisiblePadding', ''],
                [1, 'scrollable-content'],
                ['content', '']
              ],
              template: function (e, t) {
                1 & e &&
                  (o.hc(),
                  o.Lb(0, 'div', 0, 1),
                  o.Qb(2, 'div', 2, 3),
                  o.gc(4),
                  o.Pb());
              },
              styles: [
                '[_nghost-%COMP%] {\n      position: relative;\n\t  \tdisplay: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\n\t\t.horizontal.selfScroll[_nghost-%COMP%] {\n      overflow-y: visible;\n      overflow-x: auto;\n\t\t}\n\n\t\t.horizontal.selfScroll.rtl[_nghost-%COMP%] {\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\n\t\t.vertical.selfScroll[_nghost-%COMP%] {\n      overflow-y: auto;\n      overflow-x: visible;\n\t\t}\n\n    .scrollable-content[_ngcontent-%COMP%] {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t\t.scrollable-content[_ngcontent-%COMP%]     > * {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\n\t\t.horizontal[_nghost-%COMP%] {\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%] {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\t\tflex-shrink: 0;\n\t\t\tflex-grow: 0;\n\t\t\twhite-space: initial;\n\t\t}\n\n\t\t.horizontal.rtl[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\t\ttransform:scaleX(-1);\n\t\t}\n\n    .total-padding[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 1px;\n      width: 1px;\n      transform-origin: 0 0;\n      opacity: 0;\n    }\n\n    .horizontal[_nghost-%COMP%]   .total-padding[_ngcontent-%COMP%] {\n      height: 100%;\n    }'
              ]
            })),
            (e = Object(fe.b)(
              [
                Object(fe.c)(4, Object(o.p)(o.B)),
                Object(fe.c)(5, Object(o.A)()),
                Object(fe.c)(5, Object(o.p)('virtual-scroller-default-options'))
              ],
              e
            )),
            e
          );
        })(),
        Se = (() => {
          let e = class {};
          return (
            (e.ɵmod = o.Ib({ type: e })),
            (e.ɵinj = o.Hb({
              factory: function (t) {
                return new (t || e)();
              },
              providers: [
                { provide: 'virtual-scroller-default-options', useFactory: ye }
              ],
              imports: [[n.c]]
            })),
            e
          );
        })();
      var Pe = i('NptF'),
        Oe = i('9PoT');
      function Te(e, t, i) {
        const n = [],
          r = i ? i + t : t;
        for (let s = i ? i + 0 : 0; s < r; ++s) n.push(e[s]);
        return n;
      }
      var Ie = i('GJmQ'),
        Me = i('HCsY'),
        ze = i('nRuA');
      function Ee(e, t) {
        if ((1 & e && (o.Lb(0, 'img', 4), o.cc(1, 'image')), 2 & e)) {
          const e = o.bc(2);
          o.jc('src', o.dc(1, 2, e.pokemon.name), o.rc),
            o.ic('alt', e.imageAlt);
        }
      }
      function De(e, t) {
        1 & e && o.Lb(0, 'span', 5);
      }
      function Re(e, t) {
        if (
          (1 & e &&
            (o.Qb(0, 'div', 1),
            o.cc(1, 'titlecase'),
            o.zc(2, Ee, 2, 4, 'img', 2),
            o.zc(3, De, 1, 0, 'span', 3),
            o.Pb()),
          2 & e)
        ) {
          const e = o.bc();
          o.Bb('sprite inline-block ', e.pokemon.cssClasses, ''),
            o.jc('title', o.dc(1, 6, e.pokemon.name)),
            o.zb(2),
            o.ic('ngIf', !e.empty),
            o.zb(1),
            o.ic('ngIf', e.empty);
        }
      }
      let Ae = (() => {
        class e {
          get imageUrl() {
            return this.empty ? '' : this.pokemon.name;
          }
          get imageAlt() {
            return this.empty ? '' : this.pokemon.name;
          }
          get rowOne() {
            return 1 === this.row;
          }
          get empty() {
            return 'Empty Team Member' === this.pokemon.name;
          }
          get types() {
            return this.pokemon.types.map((e) => Oe.a[e].toLowerCase());
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = o.Eb({
            type: e,
            selectors: [['app-pokemon']],
            inputs: { pokemon: 'pokemon', row: 'row' },
            decls: 1,
            vars: 1,
            consts: [
              [3, 'class', 'title', 4, 'ngIf'],
              [3, 'title'],
              [3, 'src', 'alt', 4, 'ngIf'],
              ['class', 'empty-item', 4, 'ngIf'],
              [3, 'src', 'alt'],
              [1, 'empty-item']
            ],
            template: function (e, t) {
              1 & e && o.zc(0, Re, 4, 8, 'div', 0),
                2 & e && o.ic('ngIf', t.pokemon);
            },
            directives: [n.m],
            pipes: [n.t, ze.a],
            styles: [
              '.empty-item[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{width:70px;height:70px}.empty-item[_ngcontent-%COMP%]{display:inline-block}'
            ]
          })),
          e
        );
      })();
      var We = i('vZ4y');
      function Fe(e, t) {
        1 & e && (o.Qb(0, 'div'), o.Ac(1, ' \xa0 '), o.Pb()),
          2 & e && o.Bb('', t.$implicit, '-type type inline-block');
      }
      function Ge(e, t) {
        if (
          (1 & e && (o.Qb(0, 'div'), o.zc(1, Fe, 2, 3, 'div', 9), o.Pb()),
          2 & e)
        ) {
          const e = t.$implicit;
          o.zb(1), o.ic('ngForOf', e);
        }
      }
      function Le(e, t) {
        if (1 & e) {
          const e = o.Rb();
          o.Qb(0, 'span', 10),
            o.Xb('click', function () {
              o.qc(e);
              const i = t.$implicit;
              return o.bc().removeFromTeam(i);
            }),
            o.Lb(1, 'app-pokemon', 11),
            o.Pb();
        }
        if (2 & e) {
          const e = t.$implicit,
            i = o.bc();
          o.zb(1), o.ic('pokemon', e)('row', i.getRow(e));
        }
      }
      function Ne(e, t) {
        if (
          (1 & e && (o.Qb(0, 'span', 12), o.Ac(1), o.cc(2, 'hideForm'), o.Pb()),
          2 & e)
        ) {
          const e = t.$implicit;
          o.zb(1), o.Cc(' ', o.dc(2, 1, e), ' ');
        }
      }
      function He(e, t) {
        if (1 & e) {
          const e = o.Rb();
          o.Qb(0, 'span', 10),
            o.Xb('click', function () {
              o.qc(e);
              const i = t.$implicit;
              return o.bc().removeFromTeam(i);
            }),
            o.Lb(1, 'app-pokemon', 11),
            o.Pb();
        }
        if (2 & e) {
          const e = t.$implicit,
            i = o.bc();
          o.zb(1), o.ic('pokemon', e)('row', i.getRow(e));
        }
      }
      function je(e, t) {
        if (
          (1 & e && (o.Qb(0, 'span', 12), o.Ac(1), o.cc(2, 'hideForm'), o.Pb()),
          2 & e)
        ) {
          const e = t.$implicit;
          o.zb(1), o.Cc(' ', o.dc(2, 1, e), ' ');
        }
      }
      function Be(e, t) {
        1 & e && (o.Qb(0, 'div'), o.Ac(1, ' \xa0 '), o.Pb()),
          2 & e && o.Bb('', t.$implicit, '-type type inline-block');
      }
      function Qe(e, t) {
        if (
          (1 & e && (o.Qb(0, 'span'), o.zc(1, Be, 2, 3, 'div', 9), o.Pb()),
          2 & e)
        ) {
          const e = t.$implicit;
          o.zb(1), o.ic('ngForOf', e);
        }
      }
      let Ke = (() => {
        class e {
          constructor(e) {
            (this.teamService = e), (this.team = []), (this.alive = !0);
          }
          ngOnInit() {
            (this.alive = !0),
              this.teamService.requestUpdate(),
              this.teamService.teamChange$
                .pipe(Object(Ie.a)(() => this.alive))
                .subscribe((e) => {
                  for (
                    this.team = e.filter(
                      ({ name: e }) => 'Empty Team Member' !== e
                    );
                    this.team.length < 6;

                  )
                    this.team.push(new Pe.a());
                });
          }
          removeFromTeam(e) {
            this.teamService.removeFromTeam(e);
          }
          getTypes(e) {
            return e
              .filter((e) => (null == e ? void 0 : e.types))
              .map((e) => e.types.map((e) => Oe.a[e].toLowerCase()));
          }
          getNames(e) {
            return e
              .filter((e) => (null == e ? void 0 : e.name))
              .map((e) => e.name);
          }
          getRow(e) {
            return this.team.indexOf(e) < 3 ? 1 : 2;
          }
          get firstThree() {
            return Te(this.team, 3);
          }
          get firstThreeTypes() {
            return this.getTypes(this.firstThree);
          }
          get firstThreeNames() {
            return this.getNames(this.firstThree);
          }
          get lastThree() {
            return Te(this.team, 3, 3);
          }
          get lastThreeTypes() {
            return this.getTypes(this.lastThree);
          }
          get lastThreeNames() {
            return this.getNames(this.lastThree);
          }
          ngOnDestroy() {
            this.alive = !1;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(o.Kb(Me.a));
          }),
          (e.ɵcmp = o.Eb({
            type: e,
            selectors: [['app-team']],
            decls: 13,
            vars: 6,
            consts: [
              [1, 'card'],
              [1, 'container'],
              [1, 'text-center', 'first-types', 'type-display'],
              [4, 'ngFor', 'ngForOf'],
              [1, 'first-three', 'text-center', 'pokemon-display', 'mt-1'],
              [3, 'click', 4, 'ngFor', 'ngForOf'],
              ['class', 'pokemon-name', 4, 'ngFor', 'ngForOf'],
              [1, 'last-three', 'text-center', 'pokemon-display'],
              [1, 'text-center', 'last-types', 'type-display'],
              [3, 'class', 4, 'ngFor', 'ngForOf'],
              [3, 'click'],
              [3, 'pokemon', 'row'],
              [1, 'pokemon-name']
            ],
            template: function (e, t) {
              1 & e &&
                (o.Qb(0, 'mat-card', 0),
                o.Qb(1, 'mat-card-content'),
                o.Qb(2, 'div', 1),
                o.Qb(3, 'div', 2),
                o.zc(4, Ge, 2, 1, 'div', 3),
                o.Pb(),
                o.Qb(5, 'div', 4),
                o.zc(6, Le, 2, 2, 'span', 5),
                o.zc(7, Ne, 3, 3, 'span', 6),
                o.Pb(),
                o.Qb(8, 'div', 7),
                o.zc(9, He, 2, 2, 'span', 5),
                o.zc(10, je, 3, 3, 'span', 6),
                o.Pb(),
                o.Qb(11, 'div', 8),
                o.zc(12, Qe, 2, 1, 'span', 3),
                o.Pb(),
                o.Pb(),
                o.Pb(),
                o.Pb()),
                2 & e &&
                  (o.zb(4),
                  o.ic('ngForOf', t.firstThreeTypes),
                  o.zb(2),
                  o.ic('ngForOf', t.firstThree),
                  o.zb(1),
                  o.ic('ngForOf', t.firstThreeNames),
                  o.zb(2),
                  o.ic('ngForOf', t.lastThree),
                  o.zb(1),
                  o.ic('ngForOf', t.lastThreeNames),
                  o.zb(2),
                  o.ic('ngForOf', t.lastThreeTypes));
            },
            directives: [d, h, n.l, Ae],
            pipes: [We.a],
            styles: [
              '.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto;grid-template-rows:2.5% 47.5% 47.5% 2.5%;height:100%}@media screen and (min-width:700px){.container[_ngcontent-%COMP%]{width:33.3%;margin-left:33.3%}}mat-card-content[_ngcontent-%COMP%]{width:100%;height:100%}.card[_ngcontent-%COMP%]{margin:1.5vh 7.5vw;height:35vh}.type[_ngcontent-%COMP%]{border-radius:10%;margin:0 1px;text-shadow:1px 1px #000;background-size:100%;background-position:50%;width:32px;height:16px}.pokemon-display[_ngcontent-%COMP%]{grid-template-rows:70% 30%}.pokemon-display[_ngcontent-%COMP%], .type-display[_ngcontent-%COMP%]{display:grid;grid-template-columns:33% 33% 33%}.type-display[_ngcontent-%COMP%]{grid-template-rows:auto}.pokemon-name[_ngcontent-%COMP%]{max-width:75px;padding-left:calc(calc(100% - 75px) / 2)}'
            ]
          })),
          e
        );
      })();
      function Ve(e, t) {
        if (1 & e) {
          const e = o.Rb();
          o.Qb(0, 'span', 3),
            o.Xb('click', function () {
              o.qc(e);
              const i = t.$implicit;
              return o.bc().addPokemon(i);
            }),
            o.Lb(1, 'app-pokemon', 4),
            o.Pb();
        }
        if (2 & e) {
          const e = t.$implicit;
          o.zb(1), o.ic('pokemon', e);
        }
      }
      let Ue = (() => {
          class e {
            constructor(e) {
              (this.teamService = e),
                (this.filtersLoading = !0),
                (this.pokemon = []);
            }
            ngOnInit() {
              this.teamService.fetchFilters(),
                this.teamService.pokemonChange$.subscribe((e) => {
                  (this.filtersLoading = !1), (this.pokemon = e);
                });
            }
            addPokemon(e) {
              this.teamService.addToTeam(e);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(o.Kb(Me.a));
            }),
            (e.ɵcmp = o.Eb({
              type: e,
              selectors: [['app-picker']],
              decls: 5,
              vars: 4,
              consts: [
                [1, 'virtual-scroller', 3, 'items'],
                ['scroll', ''],
                [
                  'class',
                  'pokemon-container',
                  3,
                  'click',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [1, 'pokemon-container', 3, 'click'],
                [3, 'pokemon']
              ],
              template: function (e, t) {
                if (
                  (1 & e &&
                    (o.Qb(0, 'div'),
                    o.Lb(1, 'mat-spinner'),
                    o.Pb(),
                    o.Qb(2, 'virtual-scroller', 0, 1),
                    o.zc(4, Ve, 2, 1, 'span', 2),
                    o.Pb()),
                  2 & e)
                ) {
                  const e = o.oc(3);
                  o.Cb('hidden', !t.filtersLoading),
                    o.zb(2),
                    o.ic('items', t.pokemon),
                    o.zb(2),
                    o.ic('ngForOf', e.viewPortItems);
                }
              },
              directives: [R.b, Ce, n.l, Ae],
              styles: [
                '.virtual-scroller[_ngcontent-%COMP%]{height:44vh;width:100%;text-align:center;overflow-x:hidden!important}@media (max-height:700px){.virtual-scroller[_ngcontent-%COMP%]{height:41.5vh}}.pokemon-container[_ngcontent-%COMP%]{display:inline-block;width:90px;height:90px}'
              ]
            })),
            e
          );
        })(),
        qe = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = o.Eb({
              type: e,
              selectors: [['app-team-builder-container']],
              decls: 6,
              vars: 0,
              consts: [[1, 'text-center']],
              template: function (e, t) {
                1 & e &&
                  (o.Lb(0, 'app-team'),
                  o.Qb(1, 'div'),
                  o.Lb(2, 'div'),
                  o.Qb(3, 'div', 0),
                  o.Lb(4, 'app-picker'),
                  o.Pb(),
                  o.Lb(5, 'div'),
                  o.Pb());
              },
              directives: [Ke, Ue],
              encapsulation: 2
            })),
            e
          );
        })();
      var $e = i('AfiK'),
        Xe = i('jeMW'),
        Ye = i('req1');
      let Ze = (() => {
        class e {
          generateTree(e) {
            if (0 === e.length) return [];
            let t = this.getFilterType(e[0]);
            const i = [];
            let n = [];
            for (const r of e)
              t !== $e.a[r.filter]
                ? (i.push({
                    checked: !1,
                    children: n,
                    value: t,
                    name: t,
                    expanded: !1
                  }),
                  (t = this.getFilterType(r)),
                  (n = [this.createChild(r, t)]))
                : n.push(this.createChild(r, t));
            return (
              i.push({
                checked: !1,
                children: n,
                value: t,
                name: t,
                expanded: !1
              }),
              i
            );
          }
          createChild(e, t) {
            return {
              id: e.id,
              checked: !!e.enabled,
              value: Object(Ye.c)(e.value),
              name: t,
              children: []
            };
          }
          getFilterType(e) {
            return $e.a[e.filter];
          }
          getChild(e) {
            var t;
            return null !== (t = e.children) && void 0 !== t ? t : [];
          }
          descendantsAllChecked(e) {
            var t;
            return (null !== (t = e.children) && void 0 !== t ? t : []).every(
              (e) => e.checked
            );
          }
          descendantsPartiallyChecked(e) {
            return (
              e.children.some((e) => e.checked) &&
              !e.children.every((e) => e.checked)
            );
          }
          hasChild(e, t) {
            return !!t.children && t.children.length > 0;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = o.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      var Je = i('Kj3r');
      let et = (() => {
        class e {
          constructor() {
            (this.searchSubject = new F.a()), (this.search = new o.n());
          }
          ngOnInit() {
            this.searchSubject
              .pipe(Object(Je.a)(500))
              .subscribe((e) => this.search.emit(e));
          }
          onKeyUp(e) {
            var t;
            const i =
              null === (t = e.target) || void 0 === t ? void 0 : t.value;
            void 0 !== i && this.searchSubject.next(i);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = o.Eb({
            type: e,
            selectors: [['app-search']],
            inputs: { filter: 'filter' },
            outputs: { search: 'search' },
            decls: 3,
            vars: 1,
            consts: [
              [1, 'text-center'],
              [
                'autocomplete',
                'off',
                'type',
                'text',
                'placeholder',
                'Search Pokemon...',
                'matInput',
                '',
                3,
                'value',
                'keyup'
              ]
            ],
            template: function (e, t) {
              1 & e &&
                (o.Qb(0, 'div', 0),
                o.Qb(1, 'mat-form-field'),
                o.Qb(2, 'input', 1),
                o.Xb('keyup', function (e) {
                  return t.onKeyUp(e);
                }),
                o.Pb(),
                o.Pb(),
                o.Pb()),
                2 & e &&
                  (o.zb(2),
                  o.ic('value', null == t.filter ? null : t.filter.value));
            },
            directives: [z.b, D.a],
            styles: [
              'input[type=text][_ngcontent-%COMP%]{border-radius:5px}mat-form-field[_ngcontent-%COMP%]{width:80%}div[_ngcontent-%COMP%]{width:100%}'
            ]
          })),
          e
        );
      })();
      function tt(e, t) {
        if (1 & e) {
          const e = o.Rb();
          o.Qb(0, 'mat-tree-node', 8),
            o.Qb(1, 'li', 9),
            o.Lb(2, 'button', 10),
            o.Qb(3, 'mat-checkbox', 11),
            o.Xb('change', function () {
              o.qc(e);
              const i = t.$implicit;
              return o.bc().handleNodeChange(i);
            }),
            o.Ac(4),
            o.Pb(),
            o.Pb(),
            o.Pb();
        }
        if (2 & e) {
          const e = t.$implicit;
          o.zb(3), o.ic('checked', e.checked), o.zb(1), o.Cc(' ', e.value, ' ');
        }
      }
      function it(e, t) {
        if (1 & e) {
          const e = o.Rb();
          o.Qb(0, 'mat-nested-tree-node'),
            o.Qb(1, 'li'),
            o.Qb(2, 'div', 9),
            o.Qb(3, 'button', 12),
            o.Qb(4, 'mat-icon'),
            o.Ac(5),
            o.Pb(),
            o.Pb(),
            o.Qb(6, 'mat-checkbox', 13),
            o.Xb('change', function (i) {
              o.qc(e);
              const n = t.$implicit;
              return o.bc().selectionToggle(n, i);
            }),
            o.Ac(7),
            o.Pb(),
            o.Pb(),
            o.Qb(8, 'ul'),
            o.Mb(9, 14),
            o.Pb(),
            o.Pb(),
            o.Pb();
        }
        if (2 & e) {
          const e = t.$implicit,
            i = o.bc();
          o.zb(3),
            o.Ab('aria-label', 'toggle ' + e.name),
            o.zb(2),
            o.Cc(' ', e.expanded ? 'expand_more' : 'chevron_right', ' '),
            o.zb(1),
            o.ic('checked', i.descendantsAllChecked(e))(
              'indeterminate',
              i.descendantsPartiallyChecked(e)
            ),
            o.zb(1),
            o.Cc(' ', e.name, ' '),
            o.zb(1),
            o.Cb('hidden', !i.treeControl.isExpanded(e));
        }
      }
      const nt = [
          { path: '', pathMatch: 'full', redirectTo: 'home' },
          { path: 'home', component: qe },
          {
            path: 'options',
            component: (() => {
              class e {
                constructor(e, t, i) {
                  (this.filterService = e),
                    (this.optionsService = t),
                    (this.teamService = i),
                    (this.treeControl = new B(this.optionsService.getChild)),
                    (this.descendantsAllChecked = this.optionsService.descendantsAllChecked),
                    (this.descendantsPartiallyChecked = this.optionsService.descendantsPartiallyChecked),
                    (this.hasChild = this.optionsService.hasChild),
                    (this.treeData = new ue()),
                    (this.checkingCoverage = !1);
                }
                ngOnInit() {
                  this.filterService
                    .createDatabase()
                    .then(() => this.initializeFilters());
                }
                initializeFilters() {
                  return Object(fe.a)(this, void 0, void 0, function* () {
                    (this.searchFilter = this.filterService.getSearchFilter()),
                      (this.checkingCoverage = this.filterService.checkingCoverage);
                    const e = yield this.filterService.getAllFilters();
                    this.treeData.data = this.optionsService.generateTree(e);
                  });
                }
                get treeHasData() {
                  return !!this.treeData.data.length;
                }
                selectionToggle(e, t) {
                  if (this.descendantsPartiallyChecked(e)) {
                    for (const t of e.children) t.checked = !1;
                    t.source.toggle();
                  } else for (const i of e.children) i.checked = !i.checked;
                  this.filterService.updateFilters(
                    e.children.map((e) => {
                      var t;
                      return {
                        id: null !== (t = e.id) && void 0 !== t ? t : -1,
                        filter: $e.a[e.name],
                        value: e.value,
                        enabled: e.checked ? 1 : 0
                      };
                    })
                  );
                }
                handleNodeChange(e) {
                  var t;
                  (e.checked = !e.checked),
                    this.filterService.updateFilter({
                      id: null !== (t = e.id) && void 0 !== t ? t : -1,
                      filter: $e.a[e.name],
                      value: e.value,
                      enabled: e.checked ? 1 : 0
                    });
                }
                handleCoverage() {
                  this.filterService.checkCoverage(this.teamService.team),
                    (this.checkingCoverage = !this.checkingCoverage);
                }
                resetFilters() {
                  return Object(fe.a)(this, void 0, void 0, function* () {
                    yield this.filterService.resetFilters(),
                      this.filterService
                        .createDatabase()
                        .then(() => this.initializeFilters());
                  });
                }
                get coverageText() {
                  return this.checkingCoverage
                    ? 'Showing Pokemon with Coverage'
                    : 'Check Coverage';
                }
                get hasTeamMembers() {
                  return !!this.teamService.team.length;
                }
                handleSearch(e) {
                  return this.filterService.addSearchFilter(e);
                }
              }
              return (
                (e.ɵfac = function (t) {
                  return new (t || e)(o.Kb(Xe.a), o.Kb(Ze), o.Kb(Me.a));
                }),
                (e.ɵcmp = o.Eb({
                  type: e,
                  selectors: [['app-filter']],
                  decls: 15,
                  vars: 10,
                  consts: [
                    [1, 'options-tree', 3, 'dataSource', 'treeControl'],
                    ['matTreeNodeToggle', '', 4, 'matTreeNodeDef'],
                    [4, 'matTreeNodeDef', 'matTreeNodeDefWhen'],
                    [1, 'search'],
                    [3, 'filter', 'search'],
                    [1, 'text-center'],
                    [
                      'mat-raised-button',
                      '',
                      1,
                      'w-80',
                      3,
                      'disabled',
                      'click'
                    ],
                    ['mat-raised-button', '', 1, 'w-80', 3, 'click'],
                    ['matTreeNodeToggle', ''],
                    [1, 'mat-tree-node'],
                    ['mat-icon-button', '', 'disabled', ''],
                    [3, 'checked', 'change'],
                    ['mat-icon-button', '', 'matTreeNodeToggle', ''],
                    [3, 'checked', 'indeterminate', 'change'],
                    ['matTreeNodeOutlet', '']
                  ],
                  template: function (e, t) {
                    1 & e &&
                      (o.Qb(0, 'div'),
                      o.Lb(1, 'mat-spinner'),
                      o.Pb(),
                      o.Qb(2, 'mat-tree', 0),
                      o.zc(3, tt, 5, 2, 'mat-tree-node', 1),
                      o.zc(4, it, 10, 7, 'mat-nested-tree-node', 2),
                      o.Pb(),
                      o.Qb(5, 'div', 3),
                      o.Qb(6, 'app-search', 4),
                      o.Xb('search', function (e) {
                        return t.handleSearch(e);
                      }),
                      o.cc(7, 'async'),
                      o.Pb(),
                      o.Pb(),
                      o.Qb(8, 'div'),
                      o.Qb(9, 'div', 5),
                      o.Qb(10, 'button', 6),
                      o.Xb('click', function () {
                        return t.handleCoverage();
                      }),
                      o.Ac(11),
                      o.Pb(),
                      o.Pb(),
                      o.Pb(),
                      o.Qb(12, 'div', 5),
                      o.Qb(13, 'button', 7),
                      o.Xb('click', function () {
                        return t.resetFilters();
                      }),
                      o.Ac(14, ' Reset Filters '),
                      o.Pb(),
                      o.Pb()),
                      2 & e &&
                        (o.Cb('hidden', t.treeHasData),
                        o.zb(2),
                        o.ic('dataSource', t.treeData)(
                          'treeControl',
                          t.treeControl
                        ),
                        o.zb(2),
                        o.ic('matTreeNodeDefWhen', t.hasChild),
                        o.zb(2),
                        o.ic('filter', o.dc(7, 8, t.searchFilter)),
                        o.zb(4),
                        o.ic('disabled', !t.hasTeamMembers),
                        o.zb(1),
                        o.Cc(' ', t.coverageText, ' '));
                  },
                  directives: [R.b, ce, re, et, r.a, ne, he, T, ae, E.a, oe],
                  pipes: [n.b],
                  styles: [
                    '.options-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .options-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;list-style-type:none}.w-80[_ngcontent-%COMP%]{width:80vw}.search[_ngcontent-%COMP%]{margin:1vh 0}div.text-center[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:1vh 0}.spinner[_ngcontent-%COMP%]{width:100%}.mat-icon-button[disabled][_ngcontent-%COMP%]{width:25px}'
                  ]
                })),
                e
              );
            })()
          }
        ],
        rt = [me, M, z.d, E.b, D.b, r.b, R.a, m, Se];
      let st = (() => {
        class e {}
        return (
          (e.ɵmod = o.Ib({ type: e })),
          (e.ɵinj = o.Hb({
            factory: function (t) {
              return new (t || e)();
            },
            imports: [[n.c, be.a, ...rt, pe.e.forChild(nt)]]
          })),
          e
        );
      })();
    },
    aCrv: function (e, t, i) {
      var n,
        r = function () {
          (this._tweens = {}), (this._tweensAddedDuringUpdate = {});
        };
      r.prototype = {
        getAll: function () {
          return Object.keys(this._tweens).map(
            function (e) {
              return this._tweens[e];
            }.bind(this)
          );
        },
        removeAll: function () {
          this._tweens = {};
        },
        add: function (e) {
          (this._tweens[e.getId()] = e),
            (this._tweensAddedDuringUpdate[e.getId()] = e);
        },
        remove: function (e) {
          delete this._tweens[e.getId()],
            delete this._tweensAddedDuringUpdate[e.getId()];
        },
        update: function (e, t) {
          var i = Object.keys(this._tweens);
          if (0 === i.length) return !1;
          for (e = void 0 !== e ? e : a.now(); i.length > 0; ) {
            this._tweensAddedDuringUpdate = {};
            for (var n = 0; n < i.length; n++) {
              var r = this._tweens[i[n]];
              r &&
                !1 === r.update(e) &&
                ((r._isPlaying = !1), t || delete this._tweens[i[n]]);
            }
            i = Object.keys(this._tweensAddedDuringUpdate);
          }
          return !0;
        }
      };
      var s,
        a = new r();
      (a.Group = r),
        (a._nextId = 0),
        (a.nextId = function () {
          return a._nextId++;
        }),
        (a.now =
          'undefined' == typeof self &&
          'undefined' != typeof process &&
          process.hrtime
            ? function () {
                var e = process.hrtime();
                return 1e3 * e[0] + e[1] / 1e6;
              }
            : 'undefined' != typeof self &&
              void 0 !== self.performance &&
              void 0 !== self.performance.now
            ? self.performance.now.bind(self.performance)
            : void 0 !== Date.now
            ? Date.now
            : function () {
                return new Date().getTime();
              }),
        (a.Tween = function (e, t) {
          (this._object = e),
            (this._valuesStart = {}),
            (this._valuesEnd = {}),
            (this._valuesStartRepeat = {}),
            (this._duration = 1e3),
            (this._repeat = 0),
            (this._repeatDelayTime = void 0),
            (this._yoyo = !1),
            (this._isPlaying = !1),
            (this._reversed = !1),
            (this._delayTime = 0),
            (this._startTime = null),
            (this._easingFunction = a.Easing.Linear.None),
            (this._interpolationFunction = a.Interpolation.Linear),
            (this._chainedTweens = []),
            (this._onStartCallback = null),
            (this._onStartCallbackFired = !1),
            (this._onUpdateCallback = null),
            (this._onRepeatCallback = null),
            (this._onCompleteCallback = null),
            (this._onStopCallback = null),
            (this._group = t || a),
            (this._id = a.nextId());
        }),
        (a.Tween.prototype = {
          getId: function () {
            return this._id;
          },
          isPlaying: function () {
            return this._isPlaying;
          },
          to: function (e, t) {
            return (
              (this._valuesEnd = Object.create(e)),
              void 0 !== t && (this._duration = t),
              this
            );
          },
          duration: function (e) {
            return (this._duration = e), this;
          },
          start: function (e) {
            for (var t in (this._group.add(this),
            (this._isPlaying = !0),
            (this._onStartCallbackFired = !1),
            (this._startTime =
              void 0 !== e
                ? 'string' == typeof e
                  ? a.now() + parseFloat(e)
                  : e
                : a.now()),
            (this._startTime += this._delayTime),
            this._valuesEnd)) {
              if (this._valuesEnd[t] instanceof Array) {
                if (0 === this._valuesEnd[t].length) continue;
                this._valuesEnd[t] = [this._object[t]].concat(
                  this._valuesEnd[t]
                );
              }
              void 0 !== this._object[t] &&
                ((this._valuesStart[t] = this._object[t]),
                this._valuesStart[t] instanceof Array == 0 &&
                  (this._valuesStart[t] *= 1),
                (this._valuesStartRepeat[t] = this._valuesStart[t] || 0));
            }
            return this;
          },
          stop: function () {
            return this._isPlaying
              ? (this._group.remove(this),
                (this._isPlaying = !1),
                null !== this._onStopCallback &&
                  this._onStopCallback(this._object),
                this.stopChainedTweens(),
                this)
              : this;
          },
          end: function () {
            return this.update(1 / 0), this;
          },
          stopChainedTweens: function () {
            for (var e = 0, t = this._chainedTweens.length; e < t; e++)
              this._chainedTweens[e].stop();
          },
          group: function (e) {
            return (this._group = e), this;
          },
          delay: function (e) {
            return (this._delayTime = e), this;
          },
          repeat: function (e) {
            return (this._repeat = e), this;
          },
          repeatDelay: function (e) {
            return (this._repeatDelayTime = e), this;
          },
          yoyo: function (e) {
            return (this._yoyo = e), this;
          },
          easing: function (e) {
            return (this._easingFunction = e), this;
          },
          interpolation: function (e) {
            return (this._interpolationFunction = e), this;
          },
          chain: function () {
            return (this._chainedTweens = arguments), this;
          },
          onStart: function (e) {
            return (this._onStartCallback = e), this;
          },
          onUpdate: function (e) {
            return (this._onUpdateCallback = e), this;
          },
          onRepeat: function (e) {
            return (this._onRepeatCallback = e), this;
          },
          onComplete: function (e) {
            return (this._onCompleteCallback = e), this;
          },
          onStop: function (e) {
            return (this._onStopCallback = e), this;
          },
          update: function (e) {
            var t, i, n;
            if (e < this._startTime) return !0;
            for (t in (!1 === this._onStartCallbackFired &&
              (null !== this._onStartCallback &&
                this._onStartCallback(this._object),
              (this._onStartCallbackFired = !0)),
            (i = (e - this._startTime) / this._duration),
            (n = this._easingFunction(
              (i = 0 === this._duration || i > 1 ? 1 : i)
            )),
            this._valuesEnd))
              if (void 0 !== this._valuesStart[t]) {
                var r = this._valuesStart[t] || 0,
                  s = this._valuesEnd[t];
                s instanceof Array
                  ? (this._object[t] = this._interpolationFunction(s, n))
                  : ('string' == typeof s &&
                      (s =
                        '+' === s.charAt(0) || '-' === s.charAt(0)
                          ? r + parseFloat(s)
                          : parseFloat(s)),
                    'number' == typeof s &&
                      (this._object[t] = r + (s - r) * n));
              }
            if (
              (null !== this._onUpdateCallback &&
                this._onUpdateCallback(this._object, i),
              1 === i)
            ) {
              if (this._repeat > 0) {
                for (t in (isFinite(this._repeat) && this._repeat--,
                this._valuesStartRepeat)) {
                  if (
                    ('string' == typeof this._valuesEnd[t] &&
                      (this._valuesStartRepeat[t] =
                        this._valuesStartRepeat[t] +
                        parseFloat(this._valuesEnd[t])),
                    this._yoyo)
                  ) {
                    var a = this._valuesStartRepeat[t];
                    (this._valuesStartRepeat[t] = this._valuesEnd[t]),
                      (this._valuesEnd[t] = a);
                  }
                  this._valuesStart[t] = this._valuesStartRepeat[t];
                }
                return (
                  this._yoyo && (this._reversed = !this._reversed),
                  (this._startTime =
                    void 0 !== this._repeatDelayTime
                      ? e + this._repeatDelayTime
                      : e + this._delayTime),
                  null !== this._onRepeatCallback &&
                    this._onRepeatCallback(this._object),
                  !0
                );
              }
              null !== this._onCompleteCallback &&
                this._onCompleteCallback(this._object);
              for (var o = 0, c = this._chainedTweens.length; o < c; o++)
                this._chainedTweens[o].start(this._startTime + this._duration);
              return !1;
            }
            return !0;
          }
        }),
        (a.Easing = {
          Linear: {
            None: function (e) {
              return e;
            }
          },
          Quadratic: {
            In: function (e) {
              return e * e;
            },
            Out: function (e) {
              return e * (2 - e);
            },
            InOut: function (e) {
              return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
            }
          },
          Cubic: {
            In: function (e) {
              return e * e * e;
            },
            Out: function (e) {
              return --e * e * e + 1;
            },
            InOut: function (e) {
              return (e *= 2) < 1
                ? 0.5 * e * e * e
                : 0.5 * ((e -= 2) * e * e + 2);
            }
          },
          Quartic: {
            In: function (e) {
              return e * e * e * e;
            },
            Out: function (e) {
              return 1 - --e * e * e * e;
            },
            InOut: function (e) {
              return (e *= 2) < 1
                ? 0.5 * e * e * e * e
                : -0.5 * ((e -= 2) * e * e * e - 2);
            }
          },
          Quintic: {
            In: function (e) {
              return e * e * e * e * e;
            },
            Out: function (e) {
              return --e * e * e * e * e + 1;
            },
            InOut: function (e) {
              return (e *= 2) < 1
                ? 0.5 * e * e * e * e * e
                : 0.5 * ((e -= 2) * e * e * e * e + 2);
            }
          },
          Sinusoidal: {
            In: function (e) {
              return 1 - Math.cos((e * Math.PI) / 2);
            },
            Out: function (e) {
              return Math.sin((e * Math.PI) / 2);
            },
            InOut: function (e) {
              return 0.5 * (1 - Math.cos(Math.PI * e));
            }
          },
          Exponential: {
            In: function (e) {
              return 0 === e ? 0 : Math.pow(1024, e - 1);
            },
            Out: function (e) {
              return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
            },
            InOut: function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : (e *= 2) < 1
                ? 0.5 * Math.pow(1024, e - 1)
                : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
            }
          },
          Circular: {
            In: function (e) {
              return 1 - Math.sqrt(1 - e * e);
            },
            Out: function (e) {
              return Math.sqrt(1 - --e * e);
            },
            InOut: function (e) {
              return (e *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
            }
          },
          Elastic: {
            In: function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : -Math.pow(2, 10 * (e - 1)) *
                  Math.sin(5 * (e - 1.1) * Math.PI);
            },
            Out: function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : Math.pow(2, -10 * e) * Math.sin(5 * (e - 0.1) * Math.PI) + 1;
            },
            InOut: function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : (e *= 2) < 1
                ? -0.5 *
                  Math.pow(2, 10 * (e - 1)) *
                  Math.sin(5 * (e - 1.1) * Math.PI)
                : 0.5 *
                    Math.pow(2, -10 * (e - 1)) *
                    Math.sin(5 * (e - 1.1) * Math.PI) +
                  1;
            }
          },
          Back: {
            In: function (e) {
              var t = 1.70158;
              return e * e * ((t + 1) * e - t);
            },
            Out: function (e) {
              var t = 1.70158;
              return --e * e * ((t + 1) * e + t) + 1;
            },
            InOut: function (e) {
              var t = 2.5949095;
              return (e *= 2) < 1
                ? e * e * ((t + 1) * e - t) * 0.5
                : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
            }
          },
          Bounce: {
            In: function (e) {
              return 1 - a.Easing.Bounce.Out(1 - e);
            },
            Out: function (e) {
              return e < 1 / 2.75
                ? 7.5625 * e * e
                : e < 2 / 2.75
                ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                : e < 2.5 / 2.75
                ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
            },
            InOut: function (e) {
              return e < 0.5
                ? 0.5 * a.Easing.Bounce.In(2 * e)
                : 0.5 * a.Easing.Bounce.Out(2 * e - 1) + 0.5;
            }
          }
        }),
        (a.Interpolation = {
          Linear: function (e, t) {
            var i = e.length - 1,
              n = i * t,
              r = Math.floor(n),
              s = a.Interpolation.Utils.Linear;
            return t < 0
              ? s(e[0], e[1], n)
              : t > 1
              ? s(e[i], e[i - 1], i - n)
              : s(e[r], e[r + 1 > i ? i : r + 1], n - r);
          },
          Bezier: function (e, t) {
            for (
              var i = 0,
                n = e.length - 1,
                r = Math.pow,
                s = a.Interpolation.Utils.Bernstein,
                o = 0;
              o <= n;
              o++
            )
              i += r(1 - t, n - o) * r(t, o) * e[o] * s(n, o);
            return i;
          },
          CatmullRom: function (e, t) {
            var i = e.length - 1,
              n = i * t,
              r = Math.floor(n),
              s = a.Interpolation.Utils.CatmullRom;
            return e[0] === e[i]
              ? (t < 0 && (r = Math.floor((n = i * (1 + t)))),
                s(
                  e[(r - 1 + i) % i],
                  e[r],
                  e[(r + 1) % i],
                  e[(r + 2) % i],
                  n - r
                ))
              : t < 0
              ? e[0] - (s(e[0], e[0], e[1], e[1], -n) - e[0])
              : t > 1
              ? e[i] - (s(e[i], e[i], e[i - 1], e[i - 1], n - i) - e[i])
              : s(
                  e[r ? r - 1 : 0],
                  e[r],
                  e[i < r + 1 ? i : r + 1],
                  e[i < r + 2 ? i : r + 2],
                  n - r
                );
          },
          Utils: {
            Linear: function (e, t, i) {
              return (t - e) * i + e;
            },
            Bernstein: function (e, t) {
              var i = a.Interpolation.Utils.Factorial;
              return i(e) / i(t) / i(e - t);
            },
            Factorial:
              ((s = [1]),
              function (e) {
                var t = 1;
                if (s[e]) return s[e];
                for (var i = e; i > 1; i--) t *= i;
                return (s[e] = t), t;
              }),
            CatmullRom: function (e, t, i, n, r) {
              var s = 0.5 * (i - e),
                a = 0.5 * (n - t),
                o = r * r;
              return (
                (2 * t - 2 * i + s + a) * (r * o) +
                (-3 * t + 3 * i - 2 * s - a) * o +
                s * r +
                t
              );
            }
          }
        }),
        void 0 ===
          (n = function () {
            return a;
          }.apply(t, [])) || (e.exports = n);
    }
  }
]);