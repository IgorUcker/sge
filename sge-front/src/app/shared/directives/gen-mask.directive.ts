// import { Directive, OnChanges, Input, SimpleChanges, ElementRef, forwardRef, HostListener, Output, EventEmitter, OnInit, Renderer2 } from '@angular/core';
// import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, ValidationErrors, AbstractControl } from '@angular/forms';


// @Directive({
//   // tslint:disable-next-line:directive-selector
//   selector: '[genMask]',
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => GenMaskDirective),
//       multi: true,
//     },
//     {
//       provide: NG_VALIDATORS,
//       useExisting: forwardRef(() => GenMaskDirective),
//       multi: true,
//     }
//   ]
// })

// export class GenMaskDirective implements OnInit, ControlValueAccessor, OnChanges, Validator {

//   @Input('genMask') genMask: string;
//   @Input('mReverse') mReverse = true; // indica para começar a mascara da esquerda para direita
//   @Input() setValueOnChange = true; // quando verdadeiro, seta o valor a cada digito, quando falso, seta valor ao completar a marcara
//   @Input() isNumber = false;

//   // tslint:disable-next-line:no-output-on-prefix
//   @Output() onChange: EventEmitter<any> = new EventEmitter();


//   _onTouched = () => { };
//   _onChange = (val: any) => { };

//   constructor(
//     private renderer: Renderer2,
//     private element: ElementRef
//     ) {
//     }

//     ngOnInit(): void {
//       const _this = this;
//       if (!this.genMask) {
//         console.error('genMask não definido');
//       }
//       $(this.element.nativeElement).mask(this.genMask, {
//         reverse: _this.mReverse,
//         watchInterval: 200,
//         onComplete: function(value) { // quando completa toda a mascara
//           if (!_this.setValueOnChange) {
//             if (_this.isNumber) {
//               _this._onChange(Number(value));
//               _this.onChange.emit(Number(value));
//             } else {
//               _this._onChange(value);
//               _this.onChange.emit(value);
//             }
//           }
//         },
//         onKeyPress: function(value, event, currentField, options) { // quando é precionado alguma tecla
//         },
//         onChange: function(value) {// toda vez que é atualizado o value
//           if (_this.isNumber) {
//             value = Number(value.replace('%', '').replace(',', '.'));
//             _this._onChange(value);
//             _this.onChange.emit(value);
//           } else {
//             _this._onChange(value);
//             _this.onChange.emit(value);
//           }
//         },
//         onInvalid: function(val, e, f, invalid, options) {// invalido
//         }
//       });
//     }

//   // @HostListener('keyup', ['$event'])
//   // onInput(input: any) {
//   //   this._onChange(input.target.value);
//   //   this.onChange.emit(input.target.value);
//   // }

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

//   ngOnChanges(changes: SimpleChanges): void {
//   }

//   writeValue(obj: any): void {
//     this.renderer.setProperty(this.element.nativeElement, 'value', obj);
//   }

//   registerOnChange(fn: any): void {
//     this._onChange = fn;
//   }

//   registerOnTouched(fn: any): void {
//     this._onTouched = fn;
//   }

//   setDisabledState(isDisabled: boolean): void {
//     this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
//   }

// }
