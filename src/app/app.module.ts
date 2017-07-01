import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";


import { ItunesService } from './services/itunes.service';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/music/music.component';
import { AudiobooksComponent } from './components/audiobooks/audiobooks.component';
import { BooksComponent } from './components/books/books.component';
import { FilmsComponent } from './components/films/films.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { SinfotoPipe } from './pipes/sinfoto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    MusicComponent,
    AudiobooksComponent,
    BooksComponent,
    FilmsComponent,
    PodcastComponent,
    SinfotoPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    ItunesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
