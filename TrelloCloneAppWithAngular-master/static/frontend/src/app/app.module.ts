import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoardsComponent } from './components/boards/boards.component';
import { HeaderComponent } from './layout/header/header.component';
import { CreateboardComponent } from './components/createboard/createboard.component'; 

import { Interceptor } from '../app/interceptor'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DeleteboardComponent } from './components/deleteboard/deleteboard.component';
import { BoarddetailComponent } from './components/boarddetail/boarddetail.component';
import { BoardheaderComponent } from './layout/boardheader/boardheader.component';
import { BoardlistComponent } from './components/boardlist/boardlist.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DeletelistComponent } from './components/deletelist/deletelist.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BoardsComponent,
    HeaderComponent,
    CreateboardComponent,
    DeleteboardComponent,
    BoarddetailComponent,
    BoardheaderComponent,
    BoardlistComponent,
    DeletelistComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: Interceptor, 
      multi: true },
      CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
