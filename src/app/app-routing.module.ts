import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoPageModule' },
  { path: 'gallinero', loadChildren: './gallinero/gallinero.module#GallineroPageModule' },
  { path: 'instrucciones', loadChildren: './instrucciones/instrucciones.module#InstruccionesPageModule' },
  { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' },
  { path: 'zanahoria', loadChildren: './zanahoria/zanahoria.module#ZanahoriaPageModule' },
  { path: 'quienes', loadChildren: './quienes/quienes.module#QuienesPageModule' },
  { path: 'acelga', loadChildren: './acelga/acelga.module#AcelgaPageModule' },
  { path: 'ajo', loadChildren: './ajo/ajo.module#AjoPageModule' },
  { path: 'albahaca', loadChildren: './albahaca/albahaca.module#AlbahacaPageModule' },
  { path: 'calabaza', loadChildren: './calabaza/calabaza.module#CalabazaPageModule' },
  { path: 'cebolla', loadChildren: './cebolla/cebolla.module#CebollaPageModule' },
  { path: 'chicharo', loadChildren: './chicharo/chicharo.module#ChicharoPageModule' },
  { path: 'cilantro', loadChildren: './cilantro/cilantro.module#CilantroPageModule' },
  { path: 'frijol', loadChildren: './frijol/frijol.module#FrijolPageModule' },
  { path: 'garbanzo', loadChildren: './garbanzo/garbanzo.module#GarbanzoPageModule' },
  { path: 'hierbabuena', loadChildren: './hierbabuena/hierbabuena.module#HierbabuenaPageModule' },
  { path: 'lenteja', loadChildren: './lenteja/lenteja.module#LentejaPageModule' },
  { path: 'papa', loadChildren: './papa/papa.module#PapaPageModule' },
  { path: 'perejil', loadChildren: './perejil/perejil.module#PerejilPageModule' },
  { path: 'pimiento', loadChildren: './pimiento/pimiento.module#PimientoPageModule' },
  { path: 'rabano', loadChildren: './rabano/rabano.module#RabanoPageModule' },
  { path: 'lechuga', loadChildren: './lechuga/lechuga.module#LechugaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
