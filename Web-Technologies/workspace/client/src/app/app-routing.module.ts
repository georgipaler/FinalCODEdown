import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteleMeleComponent } from './pagini-profesor/testele-mele/testele-mele.component';
import { RapoarteStudentiComponent } from './pagini-profesor/rapoarte-studenti/rapoarte-studenti.component';
import { CatalogComponent } from './pagini-profesor/catalog/catalog.component';
import { CreeazaTestComponent } from './pagini-profesor/creeaza-test/creeaza-test.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CatalogStudentiComponent } from './pagini-profesor/catalog/catalog-studenti/catalog-studenti.component';
import { PunctajeTesteComponent } from './pagini-profesor/rapoarte-studenti/punctaje-teste/punctaje-teste.component';
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


const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: "welcome",
    component: WelcomePageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'homePage', component: ActualContentComponent, children: [
      {
        path: 'testeProf',
        component: TesteleMeleComponent,
        outlet: "sidebar"
      },
      {
        path: 'listaTeste/:materie',
        component: ListaTesteComponent,
        outlet: "sidebar"
      },
      {
        path: 'rapoarteProf',
        component: RapoarteStudentiComponent,
        outlet: "sidebar"
      },
      {
        path: 'punctajeTeste',
        component: PunctajeTesteComponent,
        outlet: "sidebar"
      },
      {
        path: 'catalog',
        component: CatalogComponent,
        outlet: "sidebar"
      },
      {
        path: 'catalogStudenti',
        component: CatalogStudentiComponent,
        outlet: "sidebar"
      },
      {
        path: 'creeazaTest',
        component: CreeazaTestComponent,
        outlet: "sidebar"
      }
    ]
  },
  {
    path: 'studentPage', component: StudentContentComponent, children: [
      {
        path: 'homeStudent',
        component: HomeStudentComponent,
        outlet: "sidebar"
      },
      {
        path: 'startTest',
        component: StartTestComponent,
        outlet: "sidebar"
      },
      {
        path: 'yourQuizz',
        component: QuizzComponent,
        outlet: "sidebar"
      },
      {
        path: 'rapoarteleMele',
        component: RapoarteleMeleComponent,
        outlet: "sidebar"
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
        outlet: "sidebar"
      },
      {
        path: 'finishQuiz',
        component: FinishQuizComponent,
        outlet: "sidebar"
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
