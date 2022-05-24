import { Component,  OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes'
export interface TagList {
  tags: string;
}
@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {
  formsData:any={}
 submit()
 {
   console.log(this. formsData.value);
   alert("Form Submitted Succesfully")
 }
  constructor() {
  }
  ngOnInit(): void {
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
