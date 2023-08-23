import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SignInRequest } from "./SignInRequest";
import { SignUpRequest } from "./SignUpRequest";
@Injectable({
    providedIn:'root'
})
export class LoanService{
    private baseURL="http://localhost:8082"

    constructor(private httpClient:HttpClient) { }

    signin(signInRequest:SignInRequest): Observable<object>{
        console.log("signInRequest"+signInRequest.username+"pa"+signInRequest.password);
        return this.httpClient.post(`${this.baseURL}/api/auth/signin`,signInRequest);
    }

    signup(signUpRequest:SignUpRequest):Observable<object>{
        return this.httpClient.post(`${this.baseURL}/api/auth/signup`,signUpRequest);
    }
}