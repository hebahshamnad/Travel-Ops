import { NgModule, viewChild } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { RouterLinkActive,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { EventsComponent } from './components/events/events.component';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { EventSignupComponent } from './components/events/event-signup/event-signup.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExpensesComponent } from './components/expenses/expenses.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PolicyComponent } from './components/policy/policy.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { TravelComponent } from './components/travel/travel.component';
import { ViewApprovalFormComponent } from './components/approvals/view-approval-form/view-approval-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    UserProfileComponent,
    HomeComponent,
    EventsComponent,
    EventSignupComponent,
    ExpensesComponent,
    PolicyComponent,
    ApprovalsComponent,
    TravelComponent,
    ViewApprovalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    RouterModule,    
    RouterLinkActive,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    FormsModule,
    MatTooltipModule,
    MatTabsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
