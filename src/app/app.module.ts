import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    PodcastComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
