 import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';
  import { Validators } from '@angular/forms';
  import { eventendDateTimeValidator,eventStartDateTimeValidator,validateEmail } from 'src/app/ReactiveCustomValidators';
  import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes'
export interface TagList {
  tags: string;
}
  
  
  @Component({
    selector: 'app-livestream',
    templateUrl: './livestream.component.html',
    styleUrls: ['./livestream.component.css']
  })
  export class LivestreamComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit(): void {
    }
    livestream=new FormGroup({
      title:new FormControl('',[Validators.required, Validators.maxLength(100)]),
      startDateAndStartTime:new FormControl('',[Validators.required,eventStartDateTimeValidator()]),
      endDateandTime:new FormControl('',[Validators.required,eventendDateTimeValidator()]),
      eventDetails:new FormControl('',[Validators.required]),
      tagList:new FormControl('',[validateEmail()])
    });
  
    get title(){return this.livestream.controls['title'];}
    get startDateAndStartTime(){return this.livestream.controls['startDateAndStartTime'];}
    get endDateandTime(){return this.livestream.controls['endDateandTime'];}
   
    // ,eventendDateTimeValidator()
    buttonClicked(){
         alert("FORM SUBMITTED.")
    }
    onSubmit(){
      console.log(this.livestream.value);
      alert("FORM IS SUCCESSFULLY SUBMITTED");
      
    }
    visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  taglist: TagList[] = [
  ];
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our chip 
    if ((value || '').trim()) {
      this.taglist.push({tags: value.trim()});
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(tag: TagList): void {
    const index = this.taglist.indexOf(tag);
    if (index >= 0) {
      this.taglist.splice(index, 1);
    }
  }
  }



  

