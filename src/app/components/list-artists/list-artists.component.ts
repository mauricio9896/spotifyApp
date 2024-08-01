import { Component, Input } from '@angular/core';
import { Artists } from '../../models/resultSearch.model';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrl: './list-artists.component.css'
})
export class ListArtistsComponent {
  @Input() artists !: Artists;
}
