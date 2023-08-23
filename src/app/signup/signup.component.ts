import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpRequest } from '../SignUpRequest';
import { LoanService } from '../loan.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm:any=FormGroup;
  signUpRequest: SignUpRequest=new SignUpRequest;
  
  submitted = false; 
  constructor(private formbuilder:FormBuilder,private loanService:LoanService,private route:ActivatedRoute,private router:Router){}
 
  get f(){
    return this.signupForm.controls;}
  
  onSubmit(){
    this.submitted = true; 
    if(this.signupForm.invalid){
      return
    }
    if(this.submitted){
      this.loanService.signup(this.signUpRequest).subscribe(data=>{})
    }
  }
  goToSignInForm(){
    this.router.navigate(['/sign-in']);
  }
  ngOnInit(){
    this.signupForm=this.formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required,Validators.min(6),Validators.max(40)],
      name:['',Validators.required]
    });
  }
}
