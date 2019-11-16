import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ng-style',
  template: `
    <!--<p [ngStyle]="{'font-size': '15px'}">-->
    <p [style.fontSize.px]="tamano">
      Hola mundo... esto es una etiqueta.
    </p>

    <button class="btn btn-primary" (click)="tamano=tamano+5">
<i class="fas fa-plus" aria-hidden="true"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano=tamano-5">
    <i class="fas fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
