import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { TrackByID } from '../../models/trackById.model';

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrl: './detail-song.component.css'
})
export class DetailSongComponent implements OnInit {

  public track !: TrackByID ;

  constructor(private route: ActivatedRoute, private spotifyService : SpotifyService) {};

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      id && this.getTrack(id);
    });
  }

  getTrack(id: string){
    this.spotifyService.getTrack(id).subscribe(data => {
      console.log('data :>> ', data);
      this.track = data;
    });
  }

}
