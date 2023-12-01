import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NudoPageRoutingModule } from './nudo-routing.module';

import { NudoPage } from './nudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NudoPageRoutingModule
  ],
  declarations: [NudoPage]
})
export class NudoPageModule {}
