import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students.routings';

@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    SharedModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
