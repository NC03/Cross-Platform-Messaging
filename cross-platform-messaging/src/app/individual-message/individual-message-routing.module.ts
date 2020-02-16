import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualMessagePage } from './individual-message.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualMessagePageRoutingModule {}
