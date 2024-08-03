import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrl: './detail-song.component.css',
})
export class DetailSongComponent implements OnInit {
  public detail!: any;
  public type!: string | null;

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
}
