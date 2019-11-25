import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { MatchValue } from '../validators/match-value.validator';

@Directive({
  selector: '[appMatchValue]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MatchValueDirective,
    multi: true
  }]
})
export class MatchValueDirective implements Validator {

  // tslint:disable-next-line:no-input-rename
  @Input('appMatchValue') matchValueFields: string[] = [];

  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors {
    return MatchValue(this.matchValueFields[0], this.matchValueFields[1])(formGroup);
  }

  registerOnValidatorChange?(fn: () => void): void {
  }

}
