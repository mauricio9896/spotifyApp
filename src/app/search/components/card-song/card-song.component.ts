import { Component, Input } from '@angular/core';
import { TracksItem } from '../../models/resultSearch.model';

@Component({
  selector: 'app-card-song',
  templateUrl: './card-song.component.html',
  styleUrl: './card-song.component.css'
})
export class CardSongComponent {

  @Input() song !: TracksItem;
}
