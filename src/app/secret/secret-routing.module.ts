import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecretPage } from './secret.page';

const routes: Routes = [
  {
    path: '',
    component: SecretPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecretPageRoutingModule {}
