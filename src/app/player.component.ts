import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'player',
  template: `
    <div>
      <h1>{{ name }}</h1>

      <div>
        <h2>{{ desc }}</h2>
      </div>
    </div>
  `,
})
export class PlayerComponent {
  name: string = '';
  desc: any;
  id = 0;

  constructor(private elementRef: ElementRef) {
    this.setup();
  }
  async setup() {
    const httpClient = new HttpClient(
      new HttpXhrBackend({
        build: () => new XMLHttpRequest(),
      })
    );

    let service = new PlayerService(httpClient);
    service.startService();
    await new Promise((resolve) => setTimeout(resolve, 100));
    this.name = '';
    this.id = this.elementRef.nativeElement.getAttribute('id');
    this.name = this.elementRef.nativeElement.getAttribute('name');
    if (this.name == 'None') this.elementRef.nativeElement.remove();
    this.desc = await service.getDescription(this.name);
  }
}
