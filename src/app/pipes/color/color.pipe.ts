
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})

export class ColorPipe implements PipeTransform {

  // ***************************************
  //  The Parameter except is NOT MANDATORY
  // ***************************************
  transform(pValue: number, except?:boolean): string {
    if (except == true) {
      return 'blue';
    } else {
      const color = pValue > 0 ? 'green' : 'red';
      return color;
    }

    // *****************************
    //  This Alternative also Work
    // *****************************

    //  if (pValue < 5) {
    //   return "red";
    //  } else {
    //   return "green";
    //  }

    
    // *******************
    //  Nothing Work Here    
    // *******************
    // <ng-template #thenRed>
    //  return "Red";
    // </ng-template>

    
    // *******************
    //  Nothing Work Here    
    // *******************
    // <ng-template #thenGreen>
    //  return "Green";
    // </ng-template>


    // *******************
    //  Nothing Work Here    
    // *******************
    // <ng-template [ngIf]="pValue < 5 [ngIfElse]="elseBlock">    
    //   <div>
    //    return "Red"
    //   </div>      
    // </ng-template>


    // *******************
    //  Nothing Work Here    
    // *******************
    // <ng-template #elseBlock>
    //   <div>
    //     return "Green""
    //   </div>
    //  </ng-template>
    
  }
}
