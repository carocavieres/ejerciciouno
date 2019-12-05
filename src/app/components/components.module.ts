import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {IonicModule} from '@ionic/angular';


import { EncabezadocComponent} from './encabezadoc/encabezadoc.component';


@NgModule({
  declarations: [
    EncabezadocComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EncabezadocComponent
  ]
})
export class ComponentsModule { }
