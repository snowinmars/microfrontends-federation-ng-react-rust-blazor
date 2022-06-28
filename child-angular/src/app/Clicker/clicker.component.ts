import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {bus, setClickerCount, onClickerCountChanged} from 'childBus/web-components/bus';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {
  public count = 0;

  constructor(private readonly ref: ChangeDetectorRef) {
  }

  public incrementCount(): void {
    bus.publish(setClickerCount({count: this.count + 1}));
  }

  ngOnInit(): void {
    bus.subscribe(onClickerCountChanged, (e) => {
      this.count = e.payload.count;
      this.ref.detectChanges();
    })
  }
}
