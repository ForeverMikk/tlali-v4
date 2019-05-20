import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mostrar: boolean;
  userD: any = {};
  huertoD: any = {
    huertoId: '',
    hortalizaId: '',
  };

  options: any;
  reporteHue = [, , ,];
  reportePlant = [, , , , , , , ,];
  reporte1;
  reporte2;
  reporte3;
  reporte4;
  reporte5;
  reporte6;
  reporte7;
  reporte8;
  reporte9;

  rehuerto1;
  rehuerto2;
  rehuerto3;
  rehuerto4;

  mihortaliza: [
    {
      nombre: "zanahoria"
    }, {
      nombre: "papa"
    }, {
      nombre: "cebolla"
    }
  ];

  constructor(public storage: Storage, public http: HttpClient) { }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    this.ngOnInit();
  }

  ngOnInit() {
    this.http.get<any>('http://tlali.xyz/api/get-plants-report').subscribe(res => {
      console.log(res);
      for (let i = 8; i >= 0; i--) {
        console.log("id humedad: " + res.detalle[i].plantaHuertoId);
        console.log("humedad: " + res.detalle[i].valor_humedad);
        this.reportePlant[i] = res.detalle[i].valor_humedad;
      }
      console.log(this.reportePlant);
    });
    this.http.get<any>('http://tlali.xyz/api/get-garden-report').subscribe(res => {
      console.log(res);
      for (let i = 3; i >= 0; i--) {
        console.log("id otro: " + res.detalle[i].sensorId);
        console.log("valor: " + res.detalle[i].valor);
        this.reporteHue[i] = JSON.parse(res.detalle[i].valor);
      }
      console.log(this.reporteHue);
    });
    this.reporte1 = this.reportePlant[0];
    this.reporte2 = this.reportePlant[1];
    this.reporte3 = this.reportePlant[2];
    this.reporte4 = this.reportePlant[3];
    this.reporte5 = this.reportePlant[4];
    this.reporte6 = this.reportePlant[5];
    this.reporte7 = this.reportePlant[6];
    this.reporte8 = this.reportePlant[7];
    this.reporte9 = this.reportePlant[8];

    this.rehuerto1 = this.reporteHue[0];
    this.rehuerto2 = this.reporteHue[1];
    this.rehuerto3 = this.reporteHue[2];
    this.rehuerto4 = this.reporteHue[3];

    this.options = {
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
          axisTick: { show: false },
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
          data: [this.reporte1, this.reporte2, this.reporte3, this.reporte4, this.reporte5, this.reporte6, this.reporte7, this.reporte8, this.reporte9,]
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
          data: [, , , , , , , , , this.rehuerto3]
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
          data: [, , , , , , , , , this.rehuerto2]
        },
      ]
    };
  }



  agregar() {
    this.storage.get('id').then(val => {
      this.userD.id = JSON.stringify(val);
      console.log('userid ' + JSON.stringify(this.userD));
      this.http.post<any>('http://tlali.xyz/api/new-garden', this.userD).subscribe(res => {
        this.storage.set('gardenId', JSON.parse(res.gardenId));
        console.log('gardenId ' + res.gardenId);
      });
    });
    this.mostrar = true;
  }

  boton() {
    let h = ["2", "3", "4", "4", "5", "2", "3", "4", "5"];

    this.storage.get('gardenId').then(val => {
      this.huertoD.huertoId = JSON.stringify(val);
      for (let i = 0; i < 9; i++) {
        console.log(h[i]);
        this.huertoD.hortalizaId = h[i];
        this.http.post<any>('http://tlali.xyz/api/new-garden-plant', this.huertoD).subscribe(res => {
          console.log(res);
        });
      }
    });
    this.mostrar = false;
  }
}

