import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  passwordForm: FormGroup = new FormGroup({
   
  });
    submitted = false;
    constructor(private fb: FormBuilder) {
      this.passwordForm = fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      acceptTerms: new FormControl(false, Validators.requiredTrue),
      email: new FormControl('', [Validators.required, Validators.email]),
      phonenumber: new FormControl('', [Validators.required,  Validators.minLength(3)])
  
      });
    }
    get f(){
  
      return this.passwordForm.controls;
  
    }
  
    submit(){
      if (this.passwordForm.invalid) {
        return;
    }
  
    }
}

