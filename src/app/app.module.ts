import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';


import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { SignUpPage } from './../pages/sign-up/sign-up';
import { UserService } from '../providers/user/user.service';


const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyD8e9wKkGqSY4YkmBjEcmSZZQnPPU3TWkE",
  authDomain: "curso-ionic-chat-cfb73.firebaseapp.com",
  databaseURL: "https://curso-ionic-chat-cfb73.firebaseio.com",
  storageBucket: "curso-ionic-chat-cfb73.appspot.com",
  messagingSenderId: "366254907495",
  appId: "1:366254907495:web:369cc9c92e5ebb3b"

}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
  ]
})
export class AppModule {}
