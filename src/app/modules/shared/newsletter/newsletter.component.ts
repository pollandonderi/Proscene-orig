import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  form: FormGroup = this.fb.group({
    email:''
  })
  async send(){
    emailjs.init('WtTeYCIxNDYbZa2iM')
    let response = await emailjs.send("service_vlhicni","template_nhbbixx",{
      email: this.form.value.email,
      });

      alert("Message has been sent");
      this.form.reset()
  }
    submitted = false;
    constructor(private fb: FormBuilder) {
      this.form = fb.group({
        email: new FormControl('', [Validators.required, Validators.email])
  
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
