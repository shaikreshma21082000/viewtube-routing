import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-selected-video',
  templateUrl: './selected-video.component.html',
  styleUrls: ['./selected-video.component.css']
})
export class SelectedVideoComponent implements OnInit {

  videoObservable: Observable<any> = new Observable<any>();

  constructor(private activatedRoute: ActivatedRoute, private videoservice: VideoService) { 
    this.activatedRoute.params.subscribe(data => {
      this.videoObservable= videoservice.getVideo(data['videoid']);
      console.log(this.videoObservable);
    })
  }

  ngOnInit(): void {
  }

}
