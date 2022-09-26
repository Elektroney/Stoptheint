import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby.component';
import { PlayerComponent } from './player.component';
import { ReportComponent } from './report.button.component';

@NgModule({
  declarations: [
    ReportComponent,
    PlayerComponent,
    LobbyComponent,
    AppComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
