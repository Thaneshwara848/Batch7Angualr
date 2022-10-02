import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommnservService {

  constructor(private _http:HttpClient) { }


  getProducts():Observable<any>{

    return this._http.get("http://localhost:9999/getProd")
  }


}
