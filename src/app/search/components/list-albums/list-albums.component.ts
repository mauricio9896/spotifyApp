import { Component, Input } from '@angular/core';
import { Albums } from '../../models/resultSearch.model';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})
export class ListAlbumsComponent {
  @Input() albums !: Albums;
}
