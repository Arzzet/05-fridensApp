import { Component, OnInit } from '@angular/core';
import { Friden } from '../../interfaces/fridens.interface';
import { FridensService } from '../../services/fridens.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
    }
  `]
})
export class ListadoComponent implements OnInit {

  fridens: Friden[] = [];

  constructor(private fridensService: FridensService) { }

  ngOnInit(): void {
    this.fridensService.getFridens()
    .subscribe( fridens => this.fridens = fridens);
  }

}
