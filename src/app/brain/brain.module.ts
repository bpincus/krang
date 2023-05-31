import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProteinsComponent } from './proteins/proteins.component';

import { BrainRoutingModule } from './brain-routing.module';

@NgModule({
  declarations: [
    ProteinsComponent
  ],
  imports: [
    CommonModule,
    BrainRoutingModule
  ]
})
export class BrainModule { }
