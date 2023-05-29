import { AbstractControl } from "@angular/forms";

export function pswdValidator(control: AbstractControl): {[key: string]: boolean}| null {
    const pswd = control.get('password')
    const confPswd = control.get('confirmPassword')
    if (pswd?.pristine || confPswd?.pristine){
        return null
    }
    return pswd && confPswd && pswd.value != confPswd.value ? {'misMatch' : true} : null 
}