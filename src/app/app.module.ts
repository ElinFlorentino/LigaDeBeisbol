import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { MenuComponent } from './menu/menu.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
