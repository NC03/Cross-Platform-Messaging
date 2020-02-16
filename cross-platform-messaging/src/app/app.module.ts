import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {RouterModule, Routes } from "@angular/router";
import {StorageServiceModule} from "angular-webstorage-service";
import { HttpClientModule } from '@angular/common/http';
//import { AlertController } from '@angular/compiler';

// const routing: Routes = [
//     {path: "", redirectTo: "/home"},
//     { path: '**', redirectTo: "/home" }
// ]

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    //   RouterModule.forRoot(routing, {enableTracing:true})
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    StorageServiceModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
