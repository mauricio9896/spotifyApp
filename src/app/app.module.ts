import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './search/components/home/home.component';
import { NavbarComponent } from './search/components/navbar/navbar.component';
import { ListComponent } from './search/components/list-search/list.component';
import { ListSongsComponent } from './search/components/list-songs/list-songs.component';
import { ListArtistsComponent } from './search/components/list-artists/list-artists.component';
import { ListAlbumsComponent } from './search/components/list-albums/list-albums.component';
import { CardSongComponent } from './search/components/card-song/card-song.component';
import { ConvertTimePipe } from './search/pipes/convert-time.pipe';
import { CardArtistComponent } from './search/components/card-artist/card-artist.component';
import { CardAlbumComponent } from './search/components/card-album/card-album.component';
import { DetailSongComponent } from './search/components/detail-song/detail-song.component';
import { PlayerComponent } from './search/components/player/player.component';
import { DetailPipe } from './search/pipes/detail.pipe';
import { HeaderComponent } from './search/components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListComponent,
    ListSongsComponent,
    ListArtistsComponent,
    ListAlbumsComponent,
    CardSongComponent,
    ConvertTimePipe,
    CardArtistComponent,
    CardAlbumComponent,
    DetailSongComponent,
    PlayerComponent,
    DetailPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
