import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { TrackByID } from '../../models/trackById.model';
import { ArtistByID } from '../../models/artistById.model';
import { AlbumByID } from '../../models/albumById.model';

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
    private spotifyService: SpotifyService
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
}
