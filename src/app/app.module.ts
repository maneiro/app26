import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AppPipesModule } from './pipes/pipes.module';
import { CuentasService } from './services/cuentas.service';
import { AcreedoresPageModule } from './pages/acreedores/acreedores.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp (FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppPipesModule,
    AcreedoresPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,CuentasService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
