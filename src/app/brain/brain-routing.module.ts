import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProteinsComponent } from './proteins/proteins.component';

const routes: Routes = [
    { path: '', component: ProteinsComponent },
    { path: 'proteins', component: ProteinsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrainRoutingModule { }
