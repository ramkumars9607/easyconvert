import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertMasterComponent } from './convert-master.component';

const routes: Routes = [{ path: '', component: ConvertMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertMasterRoutingModule { }
