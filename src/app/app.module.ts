import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, AddEmployeeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    MatGridListModule,
    MatIconModule,
    RouterModule,
    ButtonModule,
    AppRoutingModule,
    MatSnackBarModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
