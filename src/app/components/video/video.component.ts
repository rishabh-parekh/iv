
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']

})


export class VideoComponent implements OnInit {

  //private id: string = 'qDuKsiwS5xw';
  player: YT.Player;
  done = false;
  //
  youtubelink: string = 'https://www.youtube.com/embed/videoseries?list=PLbTNZNtSmrpoUVan0LVqTP3qu_9_aMr6P';

  constructor() {
  }

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  savePlayer(player) {
    this.player = player;
    this.player.setSize(540,360);
    this.player.cuePlaylist({list:'PLbTNZNtSmrpoUVan0LVqTP3qu_9_aMr6P'})
  }

  ngOnInit() {

  }

  onStateChange(event) {
    console.log('player state', event.data);
  }
  // 4. The API will call this function when the video player is ready.
  onPlayerReady(event) {
    event.target.playVideo();
  }

  stopVideo() {
    this.player.stopVideo();
  }

}
