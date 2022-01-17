import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Friden } from '../../interfaces/fridens.interface';
import { FridensService } from '../../services/fridens.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  fridens: Friden[] = [];
  fridenSeleccionado!: Friden | undefined;

  constructor(private fridensService: FridensService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.fridensService.getSugerencias(this.termino.trim())
      .subscribe(fridens => this.fridens = fridens);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if (!event.option.value) {
      this.fridenSeleccionado = undefined;
      return;
    }

    const friden: Friden = event.option.value;
    this.termino = friden.friden_nombre;

    this.fridensService.getFridenPorId(friden.id!)
      .subscribe( friden => this.fridenSeleccionado = friden);
  }

}
