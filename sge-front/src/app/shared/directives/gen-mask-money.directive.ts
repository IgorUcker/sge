// import {Directive, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, Renderer2} from '@angular/core';
// import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';
// import {CurrencyPipe} from '@angular/common';


// /**
//  * Options:
//  * The options that you can set are:
//  *
//  *   prefix: the prefix to be displayed before(aha!) the value entered by the user(example: "US$ 1234.23"). default: ''
//  *   suffix: the prefix to be displayed after the value entered by the user(example: "1234.23 €"). default: ''
//  *   affixesStay: set if the prefix and suffix will stay in the field's value after the user exits the field. default: true
//  *   thousands: the thousands separator. default: ','
//  *   decimal: the decimal separator. default: '.'
//  *   precision: how many decimal places are allowed. default: 2
//  *   allowZero: use this setting to prevent users from inputing zero. default: false
//  *   allowNegative: use this setting to prevent users from inputing negative values. default: false
//  *   IMPORTANT: if you try to bind maskMoney to a read only field, nothing will happen, since we ignore completely read only fields. So, if you have a read only
//  *   field, try to bind maskMoney to it, it will not work. Even if you change the field removing the readonly property, you will need to re-bind maskMoney to make
//  *   it work.
//  */
// @Directive({
//   // tslint:disable-next-line:directive-selector
//   selector: '[genMaskMoney]',
//   // tslint:disable-next-line:use-host-property-decorator
//   host: {
//     '(keyup)': '_onInput($event.target.value)',
//     '(blur)': '_onTouched()'
//   },
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => GenMaskMoneyDirective),
//       multi: true,
//     },
//     {
//       provide: NG_VALIDATORS,
//       useExisting: forwardRef(() => GenMaskMoneyDirective),
//       multi: true,
//     },
//     CurrencyPipe
//   ]
// })
// export class GenMaskMoneyDirective implements ControlValueAccessor, OnInit, Validator {

//   // tslint:disable-next-line:no-output-on-prefix
//   @Output('onChange') onChange: EventEmitter<number> = new EventEmitter();
//   @Input() options: {
//     prefix?: string,
//     suffix?: string,
//     affixesStay?: boolean
//     thousands?: string,
//     decimal?: string,
//     precision?: number,
//     allowZero?: boolean,
//     allowNegative?: boolean,
//   } = {prefix: 'R$ ', allowNegative: true, thousands: '.', decimal: ',', precision: 2, allowZero: true};

//   constructor(
//     private _currency: CurrencyPipe,
//     private _renderer: Renderer2,
//     private _element: ElementRef
//   ) {
//   }

//   _onTouched = () => {
//   };
//   _onChange = (val: any) => {
//   };

//   ngOnInit(): void {
//     (<any> $(this._element.nativeElement)).css({'text-align': 'right'});
//     (<any> $(this._element.nativeElement)).maskMoney(this.options);
//   }

//   _onInput(value: any) {
//     const aux = (<any> $(this._element.nativeElement)).maskMoney('unmasked')[0];
//     this.onChange.emit(aux);
//     this._onChange(aux);
//   }

//   writeValue(obj: any): void {
//     if (obj !== undefined && obj !== null) {
//       if (obj.toString().indexOf('.') < 0) {
//         obj = obj.toString() + '.';
//         for (let index = 0; index < this.options.precision; index++) {
//           obj += '0';
//         }
//       }

//       if (obj.toString().indexOf('.') > 0 && obj.toString().split('.')[1].length === 1) {
//         let aux: string[] = obj.toString().split('.');
//         for (let index = aux[1].length; index < this.options.precision; index++) {
//           aux[1] += '0';
//         }
//         obj = aux[0] + '.' + aux[1];
//       }

//       this._renderer.setProperty(this._element.nativeElement, 'value', parseFloat(obj).toFixed(this.options.precision));
//       setTimeout(() => {
//         (<any> $(this._element.nativeElement)).maskMoney('mask');
//       }, 5);
//     }
//   }

//   registerOnChange(fn: any): void {
//     this._onChange = fn;
//   }

//   registerOnTouched(fn: any): void {
//     this._onTouched = fn;
//   }

//   setDisabledState?(isDisabled: boolean): void {
//     this._renderer.setProperty(this._element.nativeElement, 'disabled', isDisabled);
//   }

//   validate(c: AbstractControl): ValidationErrors {
//     return (control: AbstractControl) => {
//       // if (control.value && !CpfValidator.validar(control.value)) {
//       //     return { 'invalid': "CPF Inválido" };
//       // }
//       return null;
//     };
//   }

//   registerOnValidatorChange?(fn: () => void): void {
//   }

// }
