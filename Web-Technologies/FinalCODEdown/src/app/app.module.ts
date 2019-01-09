import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteleMeleComponent } from './pagini-profesor/testele-mele/testele-mele.component';
import { RapoarteStudentiComponent } from './pagini-profesor/rapoarte-studenti/rapoarte-studenti.component';
import { CatalogComponent } from './pagini-profesor/catalog/catalog.component';
import { CreeazaTestComponent } from './pagini-profesor/creeaza-test/creeaza-test.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ActualContentComponent } from './actual-content/actual-content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogStudentiComponent } from './pagini-profesor/catalog/catalog-studenti/catalog-studenti.component';
import { PunctajeTesteComponent } from './pagini-profesor/rapoarte-studenti/punctaje-teste/punctaje-teste.component';
import { FormBuilder } from '@angular/forms';
import { QuestionCardComponent } from './pagini-profesor/creeaza-test/question-card/question-card.component';



@NgModule({
  declarations: [
    AppComponent,
    TesteleMeleComponent,
    RapoarteStudentiComponent,
    CatalogComponent,
    CreeazaTestComponent,
    WelcomePageComponent,
    ActualContentComponent,
    HeaderComponent,
    FooterComponent,
    CatalogStudentiComponent,
    PunctajeTesteComponent,
    QuestionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
