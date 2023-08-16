import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { IndexedDBService } from '../services/indexed-db.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  @ViewChild('fromCalendar') fromDatePicker: any;
  @ViewChild('toCalendar') toDatePicker: any;
  fromDate: any = new Date();
  toDate: any = new Date();
  previousToDate: any;
  previousfromDate: any;
  editData: any;
  constructor(
    public indexedDbService: IndexedDBService,
    private router: Router,
    private snackBar: MatSnackBar,
    public datepipe: DatePipe
  ) {}
  employeeList: any = [];
  name: any;
  roles: any = [];
  selectedRole: any;
  date: any = new Date();
  trueValue: any = true;
  calendarOptions: any = [
    {
      label: 'Today',
      active: false,
    },
    {
      label: 'Next Monday',
      active: false,
    },
    {
      label: 'Next Tuesday',
      active: false,
    },
    {
      label: 'Next Week',
      active: false,
    },
  ];
  calendarOptionstoDate: any = [
    {
      label: 'Today',
      active: false,
    },
    {
      label: 'No Date',
      active: false,
    },
  ];
  ngOnInit() {
    this.roles = [
      'Product Designer',
      'Flutter Developer',
      'QA Tester',
      'Product Owner',
    ];
    if (this.indexedDbService.editData) {
      this.editData = this.indexedDbService.editData;
      this.indexedDbService.editData = undefined;
      this.name = this.editData.name;
      this.selectedRole = this.editData.role;
      this.fromDate = new Date(this.editData.fromDate);
      this.toDate = new Date(this.editData.toDate);
    }
  }

  setActiveDate(action: any) {
    if (action) {
      if (action.label == 'Today') {
        this.setTodaysFromDate();
      } else if (action.label == 'Next Monday') {
        this.setNextMonday();
      } else if (action.label == 'Next Tuesday') {
        this.setNextTuesDay();
      } else {
        this.setNextWeek();
      }
    }
  }
  setActiveToDate(action: any) {
    if (action) {
      if (action.label == 'Today') {
        this.setTodaysToDate();
      } else if (action.label == 'No Date') {
        this.setNoDateToToDate();
      }
    }
  }

  onSave() {
    let employeeId = this.editData
      ? this.editData.employeeId
      : Math.floor(Math.random() * 1000);
    let data = {
      employeeId: employeeId,
      name: this.name,
      role: this.selectedRole,
      fromDate: this.datepipe.transform(this.fromDate, 'dd-MMM-yyyy'),
      toDate: this.datepipe.transform(this.toDate, 'dd-MMM-yyyy'),
    };
    this.indexedDbService
      .addEmployee(JSON.stringify(data), employeeId)
      .then(() => {
        this.snackBar.open('Employee Added Sucessfully', 'Success', {
          duration: 100,
        });
        this.navigateToList();
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  setTodaysFromDate() {
    this.fromDate = new Date();
  }

  setTodaysToDate() {
    this.toDate = new Date();
  }

  setNoDateToToDate() {
    this.toDate = undefined;
  }

  setNextMonday() {
    var d = new Date();
    d.setDate(d.getDate() + ((1 + 7 - d.getDay()) % 7 || 7));
    this.fromDate = d;
  }

  setNextTuesDay() {
    var d = new Date();
    d.setDate(d.getDate() + ((2 + 7 - d.getDay()) % 7 || 7));
    this.fromDate = d;
  }

  setNextWeek() {
    let currentDate = new Date();
    let nextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    this.fromDate = nextWeek;
  }

  closeFromCalendar(isCancel?: any) {
    this.fromDatePicker.overlayVisible = false;
    if (isCancel) {
      this.fromDate = this.previousfromDate;
    }
  }
  closeToCalendar(isCancel?: any) {
    this.toDatePicker.overlayVisible = false;
    if (isCancel) {
      this.toDate = this.previousToDate;
    }
  }

  setPreviousFromDate() {
    this.previousfromDate = this.fromDate;
  }
  setPreviousToDate() {
    this.previousToDate = this.toDate;
  }

  navigateToList() {
    this.router.navigate(['']);
  }
}
