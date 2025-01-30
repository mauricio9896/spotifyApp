import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SearchRoutes } from './search-routing.module';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { ListArtistsComponent } from './components/list-artists/list-artists.component';
import { ListSongsComponent } from './components/list-songs/list-songs.component';
import { CardAlbumComponent } from './components/card-album/card-album.component';
import { CardArtistComponent } from './components/card-artist/card-artist.component';
import { CardSongComponent } from './components/card-song/card-song.component';
import { DetailSongComponent } from './components/detail-song/detail-song.component';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { DetailPipe } from './pipes/detail.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
    ListAlbumsComponent,
    ListArtistsComponent,
    ListSongsComponent,
    CardAlbumComponent,
    CardArtistComponent,
    CardSongComponent,
    DetailSongComponent,

    //pipes
    ConvertTimePipe,
    DetailPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(SearchRoutes)
  ],
  exports:[
    ListComponent,
    ListAlbumsComponent,
    ListArtistsComponent,
    ListSongsComponent,
    CardAlbumComponent,
    CardArtistComponent,
    CardSongComponent,
    DetailSongComponent,

    //pipes
    ConvertTimePipe,
    DetailPipe
  ]
})
export class SearchModule { }
