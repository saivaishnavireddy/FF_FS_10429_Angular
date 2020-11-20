import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata;
  retUrl: string;
 /* onClickSubmit(data) {
    alert(data.emailid.length + "|" + data.password.length);
    if(((data.emailid.length > 0 && data.password.length > 0))){
      alert("You have successfully registered !!!");
     this.router.navigate(["/dashboard"]);
     //this.router.navigate(["home",{p1:"Dear " + data.username + ", you are successfully registered"}]);
    }else{
      alert("You have entered wrong username and password");
    }
  }*/
  constructor(private router: Router,private authService: LoginService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      emailid: new FormControl(""),
      password: new FormControl("")
  
    });
  }
  onFormSubmit(loginForm){

    this.authService.login(loginForm.emailid, loginForm.password).subscribe(data => {
      if (this.retUrl!= null){
        this.router.navigate([this.retUrl]);
      } else {
        this.router.navigate(['dashboard']);
      }
    });
}
}
