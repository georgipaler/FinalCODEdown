import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteleMeleComponent } from './pagini-profesor/testele-mele/testele-mele.component';
import { RapoarteStudentiComponent } from './pagini-profesor/rapoarte-studenti/rapoarte-studenti.component';
import { CatalogComponent } from './pagini-profesor/catalog/catalog.component';
import { CreeazaTestComponent } from './pagini-profesor/creeaza-test/creeaza-test.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogStudentiComponent } from './pagini-profesor/catalog/catalog-studenti/catalog-studenti.component';
import { PunctajeTesteComponent } from './pagini-profesor/rapoarte-studenti/punctaje-teste/punctaje-teste.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionCardComponent } from './pagini-profesor/creeaza-test/question-card/question-card.component';
import { ListaTesteComponent } from './pagini-profesor/testele-mele/lista-teste/lista-teste.component';
import { StartTestComponent } from './pagini-student/start-test/start-test.component';
import { HomeStudentComponent } from './pagini-student/home-student/home-student.component';
import { ActualContentComponent } from './pagini-profesor/actual-content/actual-content.component';
import { StudentContentComponent } from './pagini-student/student-content/student-content.component';
import { RapoarteleMeleComponent } from './pagini-student/rapoartele-mele/rapoartele-mele.component';
import { FeedbackComponent } from './pagini-student/feedback/feedback.component';
import { QuizzComponent } from './pagini-student/quizz/quizz.component';
import { FinishQuizComponent } from './pagini-student/finish-quiz/finish-quiz.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';
 



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
    QuestionCardComponent,
    ListaTesteComponent,
    StudentContentComponent,
    StartTestComponent,
    HomeStudentComponent,
    RapoarteleMeleComponent,
    FeedbackComponent,
    QuizzComponent,
    FinishQuizComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
