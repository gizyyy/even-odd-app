import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'even-odd-app';
  @Input() oddNumbers: Array<number> = [];
  @Input() evenNumbers: Array<number> = [];

  putNumberToList(coming: number) {
    if (coming % 2 === 0) {
      this.evenNumbers.push(coming);
      return;
    }
    this.oddNumbers.push(coming);
  }
}
