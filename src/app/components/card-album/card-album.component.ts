import { Component, Input } from '@angular/core';
import { AlbumElement } from '../../models/resultSearch.model';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrl: './card-album.component.css'
})
export class CardAlbumComponent {
  @Input() album !: AlbumElement;
}
