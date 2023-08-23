import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInRequest } from '../SignInRequest';
import { LoanService } from '../loan.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  implements OnInit{
  registerForm:any = FormGroup;
  signInRequest: SignInRequest=new SignInRequest();
  submitted = false; 
  constructor( private formBuilder: FormBuilder,private loanService :LoanService, private route:ActivatedRoute,
    private router: Router){}
  //Add user form actions
  get f() { return this.registerForm.controls; }

  onSubmit() {
    
    this.submitted = true;
   
    // stop here if form is invalid
    if (this.registerForm.invalid) {
     
        return;
    }
   
    //True if all the fields are filled
    if(this.submitted)
    {
      this.loanService.signin(this.signInRequest).subscribe(data=>{this.goToRegisterForm()},
      error=>console.log(error))
      alert("Great!!");
    }
   
   
  } goToRegisterForm(){
    this.router.navigate(['/apply-loan']);
  }
    ngOnInit() {
      //Add User form validations
      this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
      });
    }
}
