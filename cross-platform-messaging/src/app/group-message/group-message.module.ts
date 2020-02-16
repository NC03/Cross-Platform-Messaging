import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupMessagePageRoutingModule } from './group-message-routing.module';

import { GroupMessagePage } from './group-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupMessagePageRoutingModule
  ],
  declarations: [GroupMessagePage]
})
export class GroupMessagePageModule {}
