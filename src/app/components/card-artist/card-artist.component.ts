import { Component, Input } from '@angular/core';
import { ArtistsItem } from '../../models/resultSearch.model';


@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrl: './card-artist.component.css'
})
export class CardArtistComponent {
  @Input() artist !: ArtistsItem;
}
