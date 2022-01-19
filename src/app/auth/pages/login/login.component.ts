import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{

  constructor(private router: Router,
              private authService: AuthService) { }

  login(){
    // ir a lbackend
    // hay que tener un usuario que se almacena en un servicio
    
    this.authService.login()
      .subscribe( resp => {
        console.log(resp);
        
        if (resp.id) {
            this.router.navigate(['/fridens']);
        }
      })
  }

  logout(){

  }

 
}
