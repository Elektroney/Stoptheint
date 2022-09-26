import { Component, DebugEventListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { ReportComponent } from './report.button.component';
@Component({
  selector: 'lobby',
  template: `<report-button text="Report Another Player"></report-button>
    <div>
      <player [attr.name]="names[0]" id="0"></player>
      <player [attr.name]="names[1]" id="1"></player>
      <player [attr.name]="names[2]" id="2"></player>
      <player [attr.name]="names[3]" id="3"></player>
      <player [attr.name]="names[4]" id="4"></player>
    </div>`,
})
export class LobbyComponent {
  names = ['None', 'None', 'None', 'None', 'None'];
  us = ['13TheNightmare', '15junglemain', 'aaqbrip'];
  constructor(private http: HttpClient) {
    let namesText = window.prompt(
      'Give the summoner names from the client',
      ''
    );
    // namesText = namesText?.replace(' joined the lobby', ',') + '';

    namesText = namesText?.replace(/(?:\\[rn]|[\r\n]+)+/g, '') + '';

    for (let ourName = 0; ourName < this.us.length; ourName++) {
      namesText = namesText.replace(this.us[ourName] + ' joined the lobby', '');
    }

    let names: string[] = [];

    names = namesText?.split(' joined the lobby')!;

    console.log(names);

    this.names = names;
  }
}
