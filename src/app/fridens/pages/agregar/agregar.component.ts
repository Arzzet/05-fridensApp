import { Component, OnInit } from '@angular/core';
import { Friden, Publisher } from '../../interfaces/fridens.interface';
import { FridensService } from '../../services/fridens.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 10px;
    }
  `
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

  constructor(private fridensService: FridensService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return
    }
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.fridensService.getFridenPorId(id))
      )
      .subscribe(friden => this.friden = friden);

  }

  guardar() {
    if(this.friden.friden_nombre.trim().length === 0) {
      return;
    } 

    if(this.friden.id) {
      // Actualizar friden
      this.fridensService.actualizarFriden(this.friden)
        .subscribe(friden => this.mostrarSnackbar('Registro actualizado'))
    } else {
      // Crear friden
      this.fridensService.agregarFriden(this.friden)
        .subscribe(friden => {
          this.router.navigate(['/fridens/editar', friden.id]);
        });
    }


  }

  borrar() {
    this.fridensService.borrarFriden(this.friden.id!)
      .subscribe(resp => {
        this.router.navigate(['/fridens']);
      });
  }

  mostrarSnackbar(mensaje: string) {
    this.snackBar.open( mensaje, 'Cerrar', {
      duration: 3000
    } );
  }
}
