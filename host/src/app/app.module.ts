import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { matcher: startsWith('childAngular'), component: WrapperComponent, data: { importName: 'childAngular', elementName: 'child-angular-element' }},
      { matcher: startsWith('childBlazor'), component: WrapperComponent, data: { importName: 'childBlazor', elementName: 'child-blazor-element' }},
      { matcher: startsWith('childReact'), component: WrapperComponent, data: { importName: 'childReact', elementName: 'child-react-element' }},
      { matcher: startsWith('childWasm'), component: WrapperComponent, data: { importName: 'childWasm', elementName: 'child-wasm-element' }},
    ])
  ],
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
