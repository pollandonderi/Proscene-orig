import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {
  form: FormGroup = this.fb.group({
    message:'',
    subject:'',
    pnonenumber:'',
    from_email:'',
    to_name:'Admin',
    from_name:''
  })
  async send(){
    emailjs.init('WtTeYCIxNDYbZa2iM')
    let response = await emailjs.send("service_vlhicni","template_nhbbixx",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      pnonenumber: this.form.value.phonenumber,
      subject: this.form.value.subject,
      message: this.form.value.message,
      });

      alert("Message has been sent");
      this.form.reset()
  }
    submitted = false;
    constructor(private fb: FormBuilder) {
      this.form = fb.group({
        from_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        to_name: new FormControl(false, Validators.requiredTrue),
        from_email: new FormControl('', [Validators.required, Validators.email]),
      pnonenumber: new FormControl('', [Validators.required,  Validators.minLength(3)]),
      message: new FormControl('', [Validators.required, Validators.minLength(3)]),
        subject: new FormControl('', [Validators.required, Validators.minLength(3)]),
  
      });
    }
    get f(){
  
      return this.form.controls;
  
    }
  
    submit(){
      if (this.form.invalid) {
        return;
    }
  
    }
    
}
