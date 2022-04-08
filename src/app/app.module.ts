import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthServiceService } from './shared/services/auth-service.service';
import { provideAuth } from '@angular/fire/auth';
import { Capacitor } from '@capacitor/core';
import { getAuth, indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';
import { getApp, initializeApp } from 'firebase/app';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import '@capacitor-community/camera-preview';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    // provideAuth(() => {
    //   if (Capacitor.isNativePlatform()) {
    //     return initializeAuth(getApp(), {
    //       persistence: indexedDBLocalPersistence,
    //     });
    //   } else {
    //     return getAuth();
    //   }
    // }),
    AngularFireAnalyticsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthServiceService],
  bootstrap: [AppComponent],
})

export class AppModule {
  // init() {
  //   const app = initializeApp(environment.firebase);
  //   if (Capacitor.isNativePlatform) {
  //     initializeAuth(app, {
  //       persistence: indexedDBLocalPersistence
  //     });
  //   }
  //   // this.firestore = getFirestore(app);
  // }
}
