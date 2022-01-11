import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friden',
  templateUrl: './friden.component.html',
  styles: [
  ]
})
export class FridenComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedroute.params
    .subscribe(({id}) => console.log(id))  }

}
