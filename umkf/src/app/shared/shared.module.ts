import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThfModule } from '@totvs/thf-ui';
import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';

import { AuthGuard } from '../auth-guard/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    ThfModule,
    ThfPageLoginModule
  ],
  exports: [
    CommonModule,
    ThfModule,
    ThfPageLoginModule
  ],
  providers: [AuthGuard]
})
export class SharedModule { }
