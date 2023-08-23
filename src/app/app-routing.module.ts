import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanApplicantComponent } from './loan-applicant/loan-applicant.component';
import { LoanApplicationStatusComponent } from './loan-application-status/loan-application-status.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {  path: 'apply-loan', component: LoanApplicantComponent},
{ path: 'check-status', component: LoanApplicationStatusComponent },
{path:'sign-in',component:SignInComponent},
{path:'sign-up',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
