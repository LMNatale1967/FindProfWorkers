
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAvailable'
})

export class IsAvailablePipe implements PipeTransform {

  transform(pStatus: String): string {
    const status = pStatus == 'Available' ? 'green' : 'red';
    return status;
    
  }
}
