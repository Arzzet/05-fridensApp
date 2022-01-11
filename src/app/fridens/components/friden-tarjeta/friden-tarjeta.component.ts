import { Component, Input, OnInit } from '@angular/core';
import { Friden } from '../../interfaces/fridens.interface';
import { ListadoComponent } from '../../pages/listado/listado.component';
import { FridensService } from '../../services/fridens.service';

@Component({
  selector: 'app-friden-tarjeta',
  templateUrl: './friden-tarjeta.component.html',
  styles: [
  ]
})
export class FridenTarjetaComponent {

@Input() friden!: Friden;


}
