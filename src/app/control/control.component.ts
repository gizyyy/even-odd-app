import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
})
export class ControlComponent implements OnInit {
  constructor(private generatedService: GeneratorService) {}

  onStartGame(): void {
    this.generatedService.startToGenerate();
  }

  onStopGame(): void {
    this.generatedService.pauseGame();
  }

  ngOnInit(): void {}
}
