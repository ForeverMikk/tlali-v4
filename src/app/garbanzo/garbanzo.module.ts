import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GarbanzoPage } from './garbanzo.page';

const routes: Routes = [
  {
    path: '',
    component: GarbanzoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GarbanzoPage]
})
export class GarbanzoPageModule {}
