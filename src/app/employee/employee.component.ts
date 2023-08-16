import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexedDBService } from '../services/indexed-db.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [DatePipe],
})
export class EmployeeComponent implements OnInit {
  currentEmployees: any = [];
  previousEmployees: any = [];
  employeeList: any;
  constructor(
    private router: Router,
    public indexedDbService: IndexedDBService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.getAllEmployees();
    }, 300);
  }

  getAllEmployees() {
    this.indexedDbService
      .getAllEmployees()
      .then((res: any) => {
        console.log(res);
        if (res && res.length) {
          this.employeeList = res;
          this.previousEmployees = [];
          this.currentEmployees = [];
          this.employeeList.map((data: any) => {
            let element = JSON.parse(data);
            if (new Date(element.toDate).getTime() < new Date().getTime()) {
              this.previousEmployees.push(element);
            } else {
              this.currentEmployees.push(element);
            }
          });
        }
      })
      .catch((err: any) => {});
  }
  onAddClick() {
    this.router.navigate(['add-employee']);
  }

  deleteEmployeeData(element: any) {
    this.indexedDbService
      .deletEmployee(element.employeeId)
      .then((res: any) => {
        this.snackBar.open('Employee Deleted Sucessfully', 'Success', {
          duration: 100,
        });
        this.getAllEmployees();
      })
      .catch((err: any) => {});
  }

  editEmployeeData(element: any) {
    this.indexedDbService.editData = element;
    this.router.navigate(['add-employee']);
  }
}
