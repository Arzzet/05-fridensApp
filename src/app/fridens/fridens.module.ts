import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FridensRoutingModule } from './fridens-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { FridenComponent } from './pages/friden/friden.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { FridenTarjetaComponent } from './components/friden-tarjeta/friden-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    FridenComponent,
    HomeComponent,
    ListadoComponent,
    FridenTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FridensRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class FridensModule { }
