import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddComponent } from 'src/app/views/rdv/add/add.component';
import { ListComponent } from 'src/app/views/rdv/list/list.component';
import { RdvRoutingModule } from './rdv.routing';

@NgModule({
  declarations: [AddComponent,ListComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RdvRoutingModule
  ]
})
export class RdvModule { }
