import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteleMeleComponent } from './pagini-profesor/testele-mele/testele-mele.component';
import { RapoarteStudentiComponent } from './pagini-profesor/rapoarte-studenti/rapoarte-studenti.component';
import { CatalogComponent } from './pagini-profesor/catalog/catalog.component';
import { CreeazaTestComponent } from './pagini-profesor/creeaza-test/creeaza-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteleMeleComponent,
    RapoarteStudentiComponent,
    CatalogComponent,
    CreeazaTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
