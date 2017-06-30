import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MusicComponent } from './components/music/music.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { FilmsComponent } from './components/films/films.component';
import { BooksComponent } from './components/books/books.component';
import { AudiobooksComponent } from './components/audiobooks/audiobooks.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'music', component: MusicComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'audiobooks', component: AudiobooksComponent },
  { path: 'books', component: BooksComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];
 
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true })