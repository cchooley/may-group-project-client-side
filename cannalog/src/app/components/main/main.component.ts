import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Weed } from '../../models/weed'
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  weed: Array<Weed> = []
  filtered: Array<Weed> = []

  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._httpService.getStrain().subscribe(thisWeed => {
      this.weed = thisWeed
    }
  )}

  getWeed() {
    this._httpService.getStrain().subscribe(thisWeed => {
      return this.weed = thisWeed;
    }
  )}



  filterThis(event: any) {
    this.weed = this.filterStrain(event.target.innerText)
    this.getWeed()
  }

  filterStrain(strain) {
    return this.weed.filter(x => x.strain === strain)
  }

}
