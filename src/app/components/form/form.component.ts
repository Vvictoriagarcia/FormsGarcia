import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formRegister: FormGroup;

  constructor(){
    let controles: any = {
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      acceptTerms: new FormControl(true, [Validators.requiredTrue])
    }
    this.formRegister = new FormGroup(controles)
  }
  register(){
    console.log(this.formRegister);
  }
}
