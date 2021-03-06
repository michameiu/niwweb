import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {AccountService} from './login/account.service'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   NgxDatatableModule,
    MaterialModule
  ],

  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
