import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { MembersComponent } from './pages/members/members.component';
import { SportsComponent } from './pages/sports/sports.component';
import { MemberComponent } from './pages/member/member.component';
import { MainComponent } from './layouts/main/main.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationPanelComponent,
    MembersComponent,
    SportsComponent,
    MemberComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
