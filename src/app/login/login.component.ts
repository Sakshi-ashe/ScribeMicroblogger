import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  myForm: FormGroup;
  message : string = "";
  userError : any;

  constructor(public fb: FormBuilder,public authservice:AuthenticationService, public router:Router) {
    this.myForm = this.fb.group({
      
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]],
    })}
    
    ngOnInit() {
  }

  onSubmit(form){
    this.authservice.login(form.value.email,form.value.password)
    .then((data) => {
      console.log(data);
      this.message="You have been successfully logged in."

      this.router.navigate(['/myblogs'])

    }).catch((error) => {
      console.log(error);
      this.userError= error;
    })
  }

}
