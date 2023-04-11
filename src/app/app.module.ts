import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersDataService } from './services/users-data.service';
import { PaginationListComponent } from './components/pagination-list/pagination-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCardComponent } from './components/user-card/user-card.component';

import { RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResourceComponent } from './components/resource/resource.component';
import { ReslistComponent } from './components/reslist/reslist.component';
import { RegistrationUsefFormComponent } from './forms/registration-user-form/registration-user-form.component';
import { AuthkaComponent } from './forms/authka/authka.component';
import { myGuard } from './components/pagination-list/guard';

const appRoutes: Routes =[
  { path: 'home', component: PaginationListComponent, canActivate: [myGuard]},
  {path: 'r', component: RegistrationUsefFormComponent},
  {path: '', component: AuthkaComponent},
  { path: 'profile/:id', component: UserCardComponent, canActivate: [myGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PaginationListComponent,
    UserCardComponent,
    ResourceComponent,
    ReslistComponent,
    RegistrationUsefFormComponent,
    AuthkaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
