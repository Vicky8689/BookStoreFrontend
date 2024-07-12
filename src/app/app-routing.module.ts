import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookComponent } from './components/book/book.component';
import { AuthService } from './services/auth.service';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { LoginComponent } from './components/login/login.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { WhishListComponent } from './components/whish-list/whish-list.component';
import { OrderSuccesComponent } from './components/order-succes/order-succes.component';

const routes: Routes = [

  {path:'',component:NewUserComponent},
  // { path:'booksdetail',component:BookdetailComponent },

  {path: 'dashboard',component:DashboardComponent,

    // canActivate:[AuthService],
        children:[
            {
                path: '', redirectTo: '/dashboard/books', pathMatch:'full'
            },
          {
             path: 'books',component:BookComponent,
          } ,
          {
            path:'booksdetail/:id',component:BookdetailComponent
          },
          {
            path:'cart',component:MycartComponent
          },
          {
            path:'mywhishlist',component:WhishListComponent
          },
          {
            path:'orderSucces',component:OrderSuccesComponent
          }

        ]
   }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
