import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mostrar : boolean;
  
  mihortaliza: [
    {
      nombre:"zanahoria"
    },{
      nombre:"papa"
    },{
      nombre:"cebolla"
    }
  ]
  
   
  options = {
    legend: {
      data: ['Humedad', 'Luz UV', 'Temperatura']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value'
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: ['Hortaliza 1', 'Hortaliza 2', 'Hortaliza 3', 'Hortaliza 4', 
        'Hortaliza 5', 'Hortaliza 6', 'Hortaliza 7', 'Hortaliza 8', 'Hortaliza 9', 'Hortaliza 10']
      }
    ],
    series: [
      {
        name: 'Humedad',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [50, 75, 24, 10, 100, 20, 68, 75, 98, ]
      },
      {
        name: 'Luz UV',
        type: 'bar',
        stack: 'Total',
        label: {
          normal: {
            show: true
          }
        },
        data: [, , , , , , , , , 100]
      },
      {
        name: 'Temperatura',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [, , , , , , , , , 50]
      },
      
     
    ]};

    agregar(){
      this.mostrar=true;
    }
    boton(){
      this.mostrar=false;
  }
}
 
