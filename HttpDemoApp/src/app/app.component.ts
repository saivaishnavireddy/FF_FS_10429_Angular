import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formdata: any;
  title = 'HttpDemoApp';
  
  public persondata = [];
   constructor(private myservice: UserService, private http: HttpClient) {}
   ngOnInit() {
     this.formdata= new FormGroup({
       name:new FormControl(""),
       salary:new FormControl(""),
       age:new FormControl("")

     })
      this.myservice.getData().subscribe((data) => {
         this.persondata = Array.from(Object.keys(data), k=>data[k]);
         //console.log(this.persondata);
      });
   }
   msg = "";
   onFormSubmit(data){
     var formData: any = new FormData();
     formData.append("name", data.name);
     formData.append("salary", data.salary);
     formData.append("age", data.age);
     this.http.post('http://dummy.restapiexample.com/api/v1/create', formData).subscribe(
     (Response) =>{
       console.log(Response);
       this.msg = "Added successfully";

     },
     (error) => {
       console.log(error);
       this.msg = error.console.error(); 
      }
     )};
     
   }
