import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {NgxEchartsModule} from 'ngx-echarts';



import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage] 
})
export class HomePageModule {}
