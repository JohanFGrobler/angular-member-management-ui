import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Pages
import {MembersComponent} from './pages/members/members.component';
import {MemberComponent} from './pages/member/member.component';
import {SportsComponent} from './pages/sports/sports.component';

const routes: Routes = [
  {path: '', component: MembersComponent},
  {path: 'member/:id', component: MemberComponent},
  {path: 'sports', component: SportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
