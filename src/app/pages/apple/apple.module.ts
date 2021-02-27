import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplePageRoutingModule } from './apple-routing.module';

import { ApplePage } from './apple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplePageRoutingModule
  ],
  declarations: [ApplePage]
})
export class ApplePageModule {}
