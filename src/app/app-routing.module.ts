import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';
import { MemoryLeakFixComponent } from './memory-leak-fix/memory-leak-fix.component';

const routes: Routes = [
  { path: 'memory-leak', component: MemoryLeakComponent },
  { path: 'memory-leak-fix', component: MemoryLeakFixComponent },
  // { path: '',   redirectTo: '/memory-leak', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
