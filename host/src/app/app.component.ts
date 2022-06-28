import {Component, OnDestroy, OnInit} from '@angular/core';
import {bus, setClickerCount, onClickerCountChanged} from 'childBus/web-components/bus';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  ngVersion = require('../../package.json').dependencies['@angular/core'];

  title = 'host';

  private count = 0;

  ngOnInit(): void {
    bus.subscribe(setClickerCount, event => {
      this.count = event.payload.count;
      bus.publish(onClickerCountChanged({count: this.count}))
      console.log('host proxy', event.payload.count);
    });
  }

  ngOnDestroy(): void {
  }
}
