import { Pipe, PipeTransform } from '@angular/core';
import { Friden } from '../interfaces/fridens.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(friden: Friden): string {
    return `assets/fridens/${friden.id}.jpg`;
  }

}
