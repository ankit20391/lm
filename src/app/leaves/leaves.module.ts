import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesRequestsComponent } from './leaves-requests/leaves-requests.component';
import { ApplyLeavesComponent } from './apply-leaves/apply-leaves.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeavesRequestsComponent, ApplyLeavesComponent]
})
export class LeavesModule { }
