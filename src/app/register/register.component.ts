import { Component, OnInit } from '@angular/core';
import { VerifyService } from '../guards/verify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formsData:any={};
  constructor(private verifyservice:VerifyService) { }

  ngOnInit(): void {
  }
  register(){
    console.log("register=======",this.formsData);
    this.verifyservice.register(this.formsData);
  }

}
