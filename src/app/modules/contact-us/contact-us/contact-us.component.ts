import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  form: FormGroup = this.fb.group({
    message:'',
    subject:'',
    pnonenumber:'',
    from_email:'',
    to_name:'Admin',
    from_name:'',
    company:'',
    jobfunction:'',
    department:'',
    country:''
  });
  isLoading = false;

  async send() {
    this.isLoading = true;  
    emailjs.init('WtTeYCIxNDYbZa2iM');
    try {
      let response = await emailjs.send("service_vlhicni","template_307vh9s",{
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_email: this.form.value.from_email,
        pnonenumber: this.form.value.phonenumber,
        subject: this.form.value.subject,
        company: this.form.value.company,
        jobfunction: this.form.value.jobfunction,
        department: this.form.value.department,
        country: this.form.value.country,
        message: this.form.value.message,
      });
      alert("Message has been sent");
      this.form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      this.isLoading = false;  // Set loading state to false
    }
  }

  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      from_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      to_name: new FormControl(false, Validators.requiredTrue),
      from_email: new FormControl('', [Validators.required, Validators.email]),
      pnonenumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
      message: new FormControl('', [Validators.required, Validators.minLength(3)]),
      company: new FormControl('', [Validators.required, Validators.minLength(3)]),
      jobfunction: new FormControl('', [Validators.required, Validators.minLength(3)]),
      department: new FormControl('', [Validators.required, Validators.minLength(3)]),
      country: new FormControl('', [Validators.required, Validators.minLength(3)]),
      subject: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
  }
}
