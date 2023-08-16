import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}
  title = 'employee-app';
  employeeList: any = [];
  name: any;
  cities: any = [];
  selectedCity: any;
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
      label: 'Next Tueday',
      active: false,
    },
    {
      label: 'Next Week',
      active: false,
    },
  ];
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  setActive(action: any) {
    if (action) {
      this.calendarOptions.map((data: any) => {
        if (data.label != action.label) {
          data.active = false;
        } else {
          data.active = true;
        }
      });
    }
  }
}
