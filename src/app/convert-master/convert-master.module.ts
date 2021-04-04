import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {TreeModule} from 'primeng/tree';




import { ConvertMasterRoutingModule } from './convert-master-routing.module';
import { ConvertMasterComponent } from './convert-master.component';


@NgModule({
  declarations: [ConvertMasterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TreeModule,
    ConvertMasterRoutingModule
  ]
})
export class ConvertMasterModule { }
