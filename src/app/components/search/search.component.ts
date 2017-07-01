import { ItunesService } from './../../services/itunes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  

  constructor( private _itunesService:ItunesService ) { }

  ngOnInit() {
  }


}
