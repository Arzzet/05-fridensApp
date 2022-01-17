import { Pipe, PipeTransform } from '@angular/core';
import { Friden } from '../interfaces/fridens.interface';

@Pipe({
  name: 'imagen',
  pure: false     // impure pipe, re-evaluates every time
})
export class ImagenPipe implements PipeTransform {

  transform(friden: Friden): string {

    // console.log("Pipe procesado");

    if(!friden.id && !friden.alt_img) {
      return 'assets/no-image.png';
    } else if(friden.alt_img) {
      return friden.alt_img;
    } else {
      return `assets/fridens/${friden.id}.jpg`;
    }
  }

}
