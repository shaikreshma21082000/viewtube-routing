import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyService } from '../guards/verify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private verifyService:VerifyService,private router:Router) { }
  
  formsData:any={};
  ngOnInit(): void {
  }

  login(){
    console.log(this.formsData);
    this.verifyService.login(this.formsData.username);
    //console.log("checking at login-comp Redirected url:"+this.authService.redirectUrl);
    console.log(this.verifyService.redirectUrl);
    this.router.navigate([this.verifyService.redirectUrl]);
    //this.router.navigate([""]);
    alert("login successfull");

  }
}
