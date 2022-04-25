import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AddComponent } from 'src/app/views/rdv/add/add.component';
import { ListComponent } from 'src/app/views/rdv/list/list.component';


const routes: Routes = [

  {
    component:AddComponent ,
    path: 'add/:id/:id',
    pathMatch: 'full',
  },
  {
    component:ListComponent ,
    path: 'list_rdvpat/:id',
    pathMatch: 'full',
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RdvRoutingModule {}
