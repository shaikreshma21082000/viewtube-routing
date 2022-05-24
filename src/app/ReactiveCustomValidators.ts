import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";
     
var startDate:any;

export  function eventStartDateTimeValidator():ValidatorFn{
     return (control:AbstractControl):ValidationErrors | null =>{
         console.log(control);
        var today =new Date();
        // console.log(today,"today");
        var dateData=new Date(control.value);
        startDate=dateData;
        console.log(dateData,"controlsdata");

        if(today<=dateData){
            console.log("selected date is greater than todays date");
            return null;
        }
        else{
            console.log("selected date is less than todays date");
            console.log(control.value);
            return {data:dateData};
        }

     };
 }


  export function eventendDateTimeValidator():ValidatorFn{
    return (control:AbstractControl):ValidationErrors | null =>{
       console.log(startDate,"startDate");
       var dateData=new Date(control.value)
       // console.log(dateData,"controlsdata");

       if(startDate<=dateData){
           return null;
       }
       else{
           return {data:control.value};
       }
    };
  }

    export function validateEmail():ValidatorFn{
        return (control:AbstractControl):ValidationErrors | null =>{
           const emailpattern=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
           const email=emailpattern.test(control.value);
           return (email)? null:{err:false}; 
        };

    }



// 5. Custom validators has to be created to check that 
//     - Event start date time is greater than the current date time.
//     - Event end date time is greater than the event start date time.
//     - Guest emails are valid
// 6. On clicking the save button, valid form should be submitted and a toast message stating that "Your live stream event is scheduled successfully" should be displayed.