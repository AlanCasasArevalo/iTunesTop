import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ItunesService {

  founds:any[] = []
  urlSearch:string = "https://itunes.apple.com/search"

  constructor( private _http: Http) { }

  getObjectsFound( objectToSearch:string ){

    let query = `?term=${ objectToSearch }`
    let url = this.urlSearch + query

    return this._http.get( url )
              .map( res => {
                console.log("*******************")
                // console.log(res.json().results )
                this.founds = res.json().results     
                console.log(this.founds)         
                return this.founds
              })

  }


}
