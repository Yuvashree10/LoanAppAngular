import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-applicant',
  templateUrl: './loan-applicant.component.html',
  styleUrls: ['./loan-applicant.component.css']
})
export class LoanApplicantComponent {
  registerform: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
   
    email:new FormControl('',Validators.email),
    mobile: new FormControl('',Validators.required),
    DOB:new FormControl(),
    Purpose:new FormControl(),
    loan:new FormControl()
  });
  onSubmit() {
    if (this.registerform.valid) {
      const { firstName, lastName,email, mobile} = this.registerform.value;
      // You can perform your login logic here, e.g., make an API call.
      console.log('Username:', firstName);
      console.log('Password:', lastName);
    } else {
      // Form is invalid; show error messages or handle accordingly.
      console.log("invalid")
    }

    
  }
  
}
