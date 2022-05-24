import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoService } from '../services/video.service';
import * as moment from 'moment';
import  'moment-duration-format';
// var moment = require("moment");
// var momentDurationFormatSetup = require("moment-duration-format");
// import momentDurationFormatSetup from 'moment-duration-format';
// momentDurationFormatSetup(moment);

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent {
  /* the code here subscribes to the observable providing the video list
    and additionally adds the relativeTime which gives the publish duration
    and the length of video
  */
  video:any;
  // videoList: Observable<Array<any>>;
  video$: Observable<Array<any>>;
  constructor(private videoService: VideoService) {
    this.video$ = this.videoService.video$.pipe(map(this.addRelativeTime));
    this.video$.subscribe(res=>{
      console.log(res);
      this.video=res;
      console.log(this.video);
      // this.videoList = videoService.getVideos();
      // console.log(this.videoList);
    }); 
  }

  addRelativeTime(videos: any) {
    return videos.map((video: any) => {
      video.snippet.relativeTime = moment(video.snippet.publishedAt, moment.defaultFormatUtc).fromNow();
      video.contentDetails.length = moment.duration(video.contentDetails.duration,"minutes").format();
      return video;
    });
  }

 

  

}
