import { Component, Input, OnInit } from '@angular/core';
import { GeneratorService } from './generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'even-odd-app';
  oddNumbers: Array<number> = [];
  evenNumbers: Array<number> = [];

  constructor(private generatorService: GeneratorService) {}

  ngOnInit(): void {
    this.generatorService.generatedNumber.subscribe((coming: number) => {
      if (coming % 2 === 0) {
        this.evenNumbers.push(coming);
        return;
      }
      this.oddNumbers.push(coming);
    });
  }
}
