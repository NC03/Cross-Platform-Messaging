import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndividualMessagePageRoutingModule } from './individual-message-routing.module';

import { IndividualMessagePage } from './individual-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividualMessagePageRoutingModule
  ],
  declarations: [IndividualMessagePage]
})
export class IndividualMessagePageModule {}
