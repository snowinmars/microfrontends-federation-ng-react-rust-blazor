import {Component, OnDestroy, OnInit} from '@angular/core';
import {bus, clickerEvent} from 'childBus/web-components/bus';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  ngVersion = require('../../package.json').dependencies['@angular/core'];

  title = 'host';


  ngOnInit(): void {
    bus.subscribe(clickerEvent, event => {
      console.log(event.payload.count);
    });

  }

  ngOnDestroy(): void {
  }
}
