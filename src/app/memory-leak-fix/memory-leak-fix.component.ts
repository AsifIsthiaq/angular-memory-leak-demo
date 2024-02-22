import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DataShareService } from '../service/data-share.service';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary',
})
export class SalaryPipe implements PipeTransform {

  transform(salary: any, ...args: any[]): any {
    if (salary === null || salary === undefined) return null;
    console.log("Salary Pipe Called");
    return salary / 52;
  }
}

@Component({
  selector: 'app-memory-leak-fix',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './memory-leak-fix.component.html',
  styleUrls: ['./memory-leak-fix.component.scss']
})
export class MemoryLeakFixComponent {
  callCount: number = 0;
  colorChange: boolean = false;
  employees: any;

  constructor(private dataShareService: DataShareService, private cd: ChangeDetectorRef) {
    this.employees = this.dataShareService.data.map(e => {
      return { ...e, 'employee_salary_weekly': e.employee_salary / 52 }
    });;
    /*
    .map(e => {
        return {...e, 'employee_salary_weekly' : e.employee_salary/52}
      });
    */
    setTimeout(() => {
      this.employees[0] = { ...this.employees[0], employee_salary: 777777 };
      console.log(this.employees[0]);
      this.cd.detectChanges();
    }, 5000);
  }

  getWeeklySalary(salary: number) {
    console.log("getWeeklySalary Method Call Count: " + ++this.callCount);
    return salary / 52;
  }

  click() {
    // this.callCount = 0;
  }

  changeColor() {
    // this.callCount=0;
    this.colorChange = !this.colorChange;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  updateSalary() {
    this.employees[0] = { ...this.employees[0], employee_salary: 999999 };
    this.employees[1] = { ...this.employees[0], employee_salary: 888888 };
  }
}