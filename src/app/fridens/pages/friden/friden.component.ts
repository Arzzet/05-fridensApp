import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Friden } from '../../interfaces/fridens.interface';
import { FridensService } from '../../services/fridens.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-friden',
  templateUrl: './friden.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 10px;
    }`
  ]
})
export class FridenComponent implements OnInit {

  friden!: Friden;

  constructor(
      private activatedroute: ActivatedRoute,
      private fridensService: FridensService,
      private router: Router 
  ) { }
      

  ngOnInit(): void {

    this.activatedroute.params
      .pipe(
        switchMap(({id}) => this.fridensService.getFridenPorId(id))
      )
      .subscribe(friden => this.friden = friden) 
  
    
  }

  regresar(){
    this.router.navigate(['/fridens/listado']);
  }

    

}
