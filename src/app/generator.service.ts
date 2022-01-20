import { EventEmitter, Injectable } from '@angular/core';
import { generate } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  generatedNumber = new EventEmitter<number>();
  generated: number = 0;
  interval: any;
  constructor() {}

  startToGenerate() {
    this.interval = setInterval(() => {
      this.generatedNumber.emit(this.generated + 1);
      this.generated++;
    }, 1000);
  }

  pauseGame() {
    clearInterval(this.interval);
  }
}
