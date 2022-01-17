import { Component, OnInit } from '@angular/core';
import { Friden, Publisher } from '../../interfaces/fridens.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel-Comics'
    }
  ];

  friden: Friden = {
    friden_nombre: '',
    titulo: '',
    nombre: '',
    primera_aparicion: '',
    colores: [],
    publisher: Publisher.DCComics,
    alt_img: ''

  };

  constructor() { }

  ngOnInit(): void {
  }

}
