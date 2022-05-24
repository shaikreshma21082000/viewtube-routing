import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http:HttpClient) { }

  isLoggedIn: boolean = false;
  

  redirectUrl: string ="";

  login(code: string) {
    this.isLoggedIn = true;
    console.log("this.isLoggedIn",this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    console.log("this.isLoggedIn",this.isLoggedIn);
  }
   register(data:any){
     console.log("entered in register in service")
    this.http.post("http://localhost:3000/data",data);
   }

}
