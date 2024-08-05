import { PlayerService } from '../../../player/services/player.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { TracksItem } from '../../models/resultSearch.model';

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrl: './detail-song.component.css',
})
export class DetailSongComponent implements OnInit {
  public detail!: any;
  public type!: string | null;
  public topTracksArtist !: TracksItem[];

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.type = params.get('type');
      const id = params.get('id');
      this.type && id && this.detailById(this.type, id);
      if( this.type === 'artist' && id){
        this.getTopTracksArtist(id);
      }
    });
  }

  detailById(type: string, id: string) {
    this.spotifyService.detailById(type, id).subscribe((res) => {
      this.detail = res;
    });
  }

  playSong( track : any ){
    this.playerService.idTrack$.next(track.id);
  }

  getTopTracksArtist(id : string){
    this.spotifyService.getTopTracksArtist(id).subscribe((res) => {
      this.topTracksArtist = res.tracks
    });
  }
}
