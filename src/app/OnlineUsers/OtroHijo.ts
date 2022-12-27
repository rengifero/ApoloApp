import { Component, Input } from '@angular/core'; 

@Component({  
    selector: 'OtroHijo',  
    templateUrl: './OtroHijo.template.html',  
  }) 

export class OtroHijoCommponent {
  @Input() rengis: string; 
    

    constructor(){}


    rengis_ :string ="hola juna";
 
    ngOnInit() {  
      console.log(this.rengis);  
      } 

  }
