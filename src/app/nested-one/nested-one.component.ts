import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataShareService } from '../service/data-share.service';

@Component({
  selector: 'app-nested-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nested-one.component.html',
  styleUrls: ['./nested-one.component.scss']
})
export class NestedOneComponent{
  // colorChange: boolean = false;
  @Input() colorChange: any = false; 
  employees: any;
  callCount: number = 0;

  constructor(private dataShareService: DataShareService) {
    this.employees = this.dataShareService.data;
  }

  click() { }

  getWeeklySalary(salary: number) {
    console.log("Nested Child 1 getWeeklySalary Method Call Count: " + ++this.callCount);
    return salary / 52;
  }
}
