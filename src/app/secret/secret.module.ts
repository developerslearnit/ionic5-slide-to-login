import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecretPageRoutingModule } from './secret-routing.module';

import { SecretPage } from './secret.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecretPageRoutingModule
  ],
  declarations: [SecretPage]
})
export class SecretPageModule {}
