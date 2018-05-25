import { Injectable } from '@angular/core';
import { Weed } from '../models/weed'
import { HttpService } from '../services/http.service';

@Injectable()
export class FilterService {

  weed: Array<Weed> = []

  constructor(
    private _httpService: HttpService,
  ) { }

  getWeed() {
    this._httpService.getStrain().subscribe(thisWeed => {
      return this.weed = thisWeed;
    }

    )}
}
