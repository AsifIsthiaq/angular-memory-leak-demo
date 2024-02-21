import { Component } from '@angular/core';
import { DataShareService } from '../service/data-share.service';

@Component({
  selector: 'app-memory-leak',
  templateUrl: './memory-leak.component.html',
  styleUrls: ['./memory-leak.component.scss']
})
export class MemoryLeakComponent {

  callCount:number=0;
  colorChange:boolean = false;
  employees:any;

  constructor(private dataShareService:DataShareService){
    this.employees = this.dataShareService.data;
  }

  getWeeklySalary(salary:number){
    console.log("getWeeklySalary Method Call Count: "+ ++this.callCount);
    return salary/52;
  }

  click() {
    // this.callCount = 0;
  }

  changeColor(){
    // this.callCount=0;
    this.colorChange != this.colorChange;
  }
}
