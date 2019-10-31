import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from  './components/dashboard/dashboard.component';
import { BoardsComponent } from './components/boards/boards.component';
import { CreateboardComponent } from './components/createboard/createboard.component';
import { BoarddetailComponent } from './components/boarddetail/boarddetail.component';
import { DeleteboardComponent } from './components/deleteboard/deleteboard.component';
import { BoardlistComponent } from './components/boardlist/boardlist.component';
import { DeletelistComponent } from './components/deletelist/deletelist.component';
import { CardsComponent } from './components/cards/cards.component';

import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

const routes: Routes = [
                      {path: '', component: LoginComponent},
                      {path: 'register', component: RegisterComponent},
                      {path: 'dashboard', component: DashboardComponent},
                      {path: 'boards', component: BoardsComponent},
                      {path: 'create/board', component: CreateboardComponent},
                      {path: 'board/detail/:id', component: BoarddetailComponent},
                      {path: 'board/:id/deleted', component:DeleteboardComponent},
                      {path: 'board/detail/:id/lists', component:BoardlistComponent},
                      {path: 'board/:board/list/:id/deleted', component:DeletelistComponent},
                      {path: 'board/:id/list/:id/cards', component:CardsComponent}
                       ];

@NgModule({
  declarations: [],
  imports: [CommonModule,
            RouterModule.forRoot(routes),
            HttpClientXsrfModule.withOptions({ cookieName: 'csrftoken', headerName: 'X-CSRFToken' }), 
          ],

  exports: [
            RouterModule
           ],
  



})
export class AppRoutingModule { }
