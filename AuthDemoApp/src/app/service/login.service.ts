import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isloggedIn: boolean;
  private emailid: string;
  login(emailid: any,password: any){
    this.isloggedIn = true;
    this.emailid = emailid;
    return of(this.isloggedIn);
  }
  isUserLoggedIn(): boolean{
    return this.isloggedIn;
  }


  constructor() {
    this.isloggedIn = false;
   }
   isAdminUser(): boolean {
     if(this.emailid == 'hcl@hcl.com') {
       return true;
     }
     return false;
   }
}
