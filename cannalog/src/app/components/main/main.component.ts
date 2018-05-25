import { Component, OnInit } from '@angular/core';
import { WEED } from '../../models/weedlist';
import { Weed } from '../../models/weed'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  weed = WEED
  
  constructor() { }

  ngOnInit() {
  }

}
