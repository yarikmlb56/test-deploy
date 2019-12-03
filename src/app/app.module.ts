import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule, Type,} from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { SignInModule } from './modules/signin/sign-in.module';
import { SignUpModule } from './modules/signup/signup.module';

/* tslint:disable-next-line */
export const appModuleImports: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
  AppRoutingModule,
  BrowserModule,
  CoreModule,
  HomeModule,
  SignInModule,
  SignUpModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: appModuleImports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
