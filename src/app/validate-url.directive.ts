import { Directive,Input } from '@angular/core';
import { AbstractControl,NG_VALIDATORS,ValidationErrors,Validator} from '@angular/forms';

@Directive({
  selector: '[appValidateUrl]',
  providers:[{provide:NG_VALIDATORS,useExisting:ValidateUrlDirective,multi:true}]
})
export class ValidateUrlDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    // (http|https)://)(www.)? [a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z] 
    const urlpattern=/^http+[s]*[\:\/\/]+www+[\.]+[a-zA-z0-9]/;
    const url=urlpattern.test(control.value);
    console.log(url);
    return (url)? null:{appValidatorUrl:false};
  }
}
