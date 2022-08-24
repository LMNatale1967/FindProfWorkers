
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DisplayWelcomeService } from '../services/display-welcome/display-welcome.service';
import { RecettesService } from '../services/recettes/reccetes.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  // *******************************************************
  //  Allow @ HTML to use myDatabase
  //  Allow @ HTML to use data
  //  We Inform HTMl we Have Exported some Var Ready to Use 
  // *******************************************************
  myDatabase!: any; 
  myDisplayWelcome = this._displayWelcome.displayWelcome();
  
  name!: string;
  form!: FormGroup;

  // ***********************
  //  INIT Array of Objects
  // ***********************
  productItems = [
    {name: 'Pizza Margherita', description: 'A hugely popular margherita, with a deliciously tangy single cheese topping.', value:1},
    {name: 'Pizza Double Cheese Margherita', description: 'The ever-popular Margherita - loaded with extra cheese', value:2},
    {name: 'Pizzas Farm House', description: 'A pizza that goes ballistic on veggies !', value:7},
    {name: 'Pizza Peppy Paneer', description: 'The best Mexican Peppy Paneer Pizza', value:4},
    {name: 'Pizza Mexican Green Wave', description: 'The best Mexican Green Wave Pizza', value:5},
    {name: 'Pizza Deluxe Veggie', description: 'The best Deluxe Veggie Pizza', value:6},
    {name: 'Pizza Veg Extravaganza', description: 'The best Veg Extravaganza Pizza', value:8},
    {name: 'Pizza CHEESE N CORN', description: 'The best CHEESE N CORN Pizza', value:1} 
  ]

  displayDescription(pDescription:string, pValue:number, pEvent:any) {
    alert(pDescription + " " + "\n Current Value : " + pValue);
    console.log(pEvent);    
  }

  // *******************************************************
  // Recomendation use private and _in The Name of the VAR
  // *******************************************************
  constructor(
    private readonly _service: RecettesService,
    private readonly _displayWelcome: DisplayWelcomeService,
  ) {}

  async ngOnInit() {

    this.myDatabase = await this._service.getData();   

    this.form = new FormGroup({
      recettes: new FormArray([
        new FormGroup({
          name: new FormControl('', Validators.required),
          quantity: new FormControl(1, Validators.compose ([
            Validators.required,
            Validators.min(1),
          ])),
        })
      ]),
    });

    
    // ******************
    //  Log pour Checker
    // ******************
    console.log(this.form.status)
    console.log(this.form.value.recettes.map((elem: any) => elem.quantity));
  }

  addRecette(name: string) {
    const liste = this.form.get('recettes') as FormArray;
    const index = liste.value.findIndex(
      (el: any) => el.name === name
    );

    // ******************
    //  Log pour Checker
    // ******************
    console.log(liste.value);

    // Si la recette existe deja dans la liste...    
    if (index >= 0) {
      const recetteAIncremenet = liste.at(index);
      const quantity = recetteAIncremenet.value.quantity;
      recetteAIncremenet.patchValue({
        quantity: quantity + 1
      });

    } else {
      // Si la recette n'existe pas dans la list...
      const group = new FormGroup({
        name: new FormControl(name, Validators.required),
        quantity: new FormControl(1, Validators.compose([
          Validators.required,
          Validators.min(1),
        ])),
      });

      // *****************************************
      //  Mettre le Nouveau Group Dans le Tableau
      // *****************************************
      liste.push(group);
    }

    // ******************
    //  Log pour Checker
    // ******************
    console.log(this.form.value);
    console.log(this.form.value.recettes.map((elem: any) => elem.quantity));
  }

  addGroup(name:string){
    this.form.value.items.push();
    (this.form.get('items') as FormArray).push(new FormGroup({
      name: new FormControl(name),
      quantity: new FormControl(1)
    }));

    // ******************
    //  Log pour Checker
    // ******************
    console.log(this.form.value);    
  }

  // *****************************************
  //  Call The Service Disply Welcome Message
  // *****************************************
  displayWelcome() {
  }
}
