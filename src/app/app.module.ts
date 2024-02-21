import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';
import { MemoryLeakFixComponent, SalaryPipe } from './memory-leak-fix/memory-leak-fix.component';
import { NestedOneComponent } from './nested-one/nested-one.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryLeakComponent,
    MemoryLeakFixComponent,
    NestedOneComponent,
    SalaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
