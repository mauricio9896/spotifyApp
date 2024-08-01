import { Component, Input } from '@angular/core';
import { Tracks } from '../../models/resultSearch.model';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrl: './list-songs.component.css'
})
export class ListSongsComponent {

  @Input() tracks !: Tracks;
}
