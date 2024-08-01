import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListSongsComponent } from './components/list-songs/list-songs.component';
import { ListArtistsComponent } from './components/list-artists/list-artists.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { ListComponent } from './components/list-results/list.component';
import { CardSongComponent } from './components/card-song/card-song.component';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { CardArtistComponent } from './components/card-artist/card-artist.component';
import { CardAlbumComponent } from './components/card-album/card-album.component';
import { DetailSongComponent } from './components/detail-song/detail-song.component';

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
    DetailSongComponent
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
