import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Weed } from '../models/weed'

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }

  getStrain(name): Observable<Array<Weed>> {
    return this._http.get<Array<Weed>>(`https://whateverthepathis=${name}`)
  }

  postStrain(name): Observable<Array<Weed>> {
    return this._http.post<Array<Weed>>(`https://whateverthepathis=${name}`)
  }

  putStrain(name): Observable<Array<Weed>> {
    return this._http.get<Array<Weed>>(`https://whateverthepathis=${name}`)
  }

  deleteStrain(name): Observable<Array<Weed>> {
    return this._http.get<Array<Weed>>(`https://whateverthepathis=${name}`)
  }

}
