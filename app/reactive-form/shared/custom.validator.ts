import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbidenVal (val: RegExp): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any}|null => {
        const forbidden = val.test(control.value)
        return forbidden ? {'val': {value: control.value}}: null
    }
}