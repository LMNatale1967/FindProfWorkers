
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantity',
  // *********************************************************
  //  Force the System to Made Extra Validation With The Pipe
  // *********************************************************
  pure: false
})

export class QuantityPipe implements PipeTransform {

  transform(recette: string, listRecettes : {name:string; quantity:number;}[]): number {

      // Cherhcer dans La Liste si la Recette Existe
      const exist = listRecettes.find(inRecette => inRecette.name === recette)

      if (exist){
        // Checher la Quantite
        return exist.quantity;
      } else {
        // Retrourner laValeur 0
        return 0;
      }
  }

}
