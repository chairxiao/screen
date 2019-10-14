import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.less']
})
export class RadarComponent implements OnInit {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  constructor() { }

  ngOnInit() {
  }

}
