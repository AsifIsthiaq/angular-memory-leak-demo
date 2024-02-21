import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { DataShareService } from '../service/data-share.service';

@Component({
  selector: 'app-change-detection-fix',
  templateUrl: './change-detection-fix.component.html',
  styleUrls: ['./change-detection-fix.component.scss']
})
export class ChangeDetectionFixComponent implements AfterViewInit{
  callCount: number = 0;
  colorChange: boolean = false;
  employees: any;

  constructor(private dataShareService: DataShareService, private cd: ChangeDetectorRef) {
    this.employees = this.dataShareService.data;
  }

  ngAfterViewInit(): void {
    this.cd.detach();
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
    this.cd.detectChanges();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  updateSalary(){
    this.employees[0] = {...this.employees[0], employee_salary:999999};
    this.employees[1] = {...this.employees[0], employee_salary:888888};
    // this.cd.detectChanges();
  }
}
