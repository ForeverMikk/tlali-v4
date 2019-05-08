import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HierbabuenaPage } from './hierbabuena.page';

const routes: Routes = [
  {
    path: '',
    component: HierbabuenaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HierbabuenaPage]
})
export class HierbabuenaPageModule {}
