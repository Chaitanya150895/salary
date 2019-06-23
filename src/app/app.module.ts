import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalaryComponent } from './salary/salary.component';
import { PageComponent } from './page/page.component';
import { Project3Component } from './project3/project3.component';

@NgModule({
  declarations: [
    AppComponent,
    SalaryComponent,
    PageComponent,
    Project3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
