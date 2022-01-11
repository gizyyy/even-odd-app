import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
})
export class ControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  intervalNumber = 0;
  interval: any;

  constructor() {}

  onStartGame(): void {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.intervalNumber + 1);
      this.intervalNumber++;
    }, 1000);
  }

  onStopGame(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {}
}
