import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, NO_ERRORS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { NgCardElementVComponent } from './ng-card-element-v/ng-card-element-v.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCardElementVComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    NgCardElementVComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(NgCardElementVComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('facebook-card', el);
  }
}
