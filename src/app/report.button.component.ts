import { Component, ElementRef } from '@angular/core';
import { PlayerService } from './player.service';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';

@Component({
  selector: 'report-button',
  template: ` <button (click)="ReportAnotherPlayer()">{{ text }}</button> `,
})
export class ReportComponent {
  text: string = '';

  playerService: PlayerService;
  public ReportAnotherPlayer() {
    let name = prompt('Enter Player Name') + '';
    let desc = prompt('Enter Description') + '';

    try {
      this.playerService.setDescription(name, desc);
      alert('User ' + name + ' Was Succsefully Reported!');
    } catch (error) {
      alert('!!! ERROR !!! Show logs to admin');
    }
  }
  constructor(elementRef: ElementRef) {
    const httpClient = new HttpClient(
      new HttpXhrBackend({
        build: () => new XMLHttpRequest(),
      })
    );
    this.playerService = new PlayerService(httpClient);
    this.text = elementRef.nativeElement.getAttribute('text');
  }
}
