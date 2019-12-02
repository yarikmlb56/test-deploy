import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { SignInModule } from './modules/signin/sign-in.module';
import { SignUpModule } from './modules/signup/signup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HomeModule,
    SignInModule,
    SignUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
