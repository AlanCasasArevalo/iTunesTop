import { Component, OnInit } from '@angular/core';
import { ItunesService } from './../../../services/itunes.service';

@Component({
  selector: 'myNavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  objectToSearch:string = ""

  constructor( private _itunesService: ItunesService ) { }

  ngOnInit() {
  }
  
  toGetObjectToSearch(){
    if(this.objectToSearch !== ""){
      this._itunesService.getObjectsFound(this.objectToSearch.toLowerCase())
                        .subscribe()
    }

  }

}
