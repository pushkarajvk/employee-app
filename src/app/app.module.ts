import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

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
    MatTooltipModule,
    MatSnackBarModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
