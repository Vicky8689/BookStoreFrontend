import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import {MatRadioModule} from '@angular/material/radio';


import { ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookComponent } from './components/book/book.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { AddressdetailComponent } from './components/addressdetail/addressdetail.component';
import { WhishListComponent } from './components/whish-list/whish-list.component';
import { OrderSuccesComponent } from './components/order-succes/order-succes.component';
import { OrderComponent } from './components/order/order.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    BookComponent,
    BookdetailComponent,
    MycartComponent,
    AddressdetailComponent,
    WhishListComponent,
    OrderSuccesComponent,
    OrderComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatSnackBarModule,
 MatMenuModule ,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatRadioModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
