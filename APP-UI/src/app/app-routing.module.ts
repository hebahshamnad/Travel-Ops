import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { EventSignupComponent } from './components/events/event-signup/event-signup.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { PolicyComponent } from './components/policy/policy.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user-profile', component: UserProfileComponent },
  {path: 'expenses', component:ExpensesComponent},
  { path: 'events/signup', component: EventSignupComponent },  
  { path: 'events', component: EventsComponent},
  {path:'policy',component:PolicyComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent,UserProfileComponent]
