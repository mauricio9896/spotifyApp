import { Component, Input } from '@angular/core';
import { TracksItem } from '../../../search/models/resultSearch.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() song !: TracksItem;
}
