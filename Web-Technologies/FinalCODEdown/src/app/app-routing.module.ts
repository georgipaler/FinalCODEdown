import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteleMeleComponent } from './pagini-profesor/testele-mele/testele-mele.component';
import { RapoarteStudentiComponent } from './pagini-profesor/rapoarte-studenti/rapoarte-studenti.component';
import { CatalogComponent } from './pagini-profesor/catalog/catalog.component';
import { CreeazaTestComponent } from './pagini-profesor/creeaza-test/creeaza-test.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ActualContentComponent } from './actual-content/actual-content.component';
import { CatalogStudentiComponent } from './pagini-profesor/catalog/catalog-studenti/catalog-studenti.component';
import { PunctajeTesteComponent } from './pagini-profesor/rapoarte-studenti/punctaje-teste/punctaje-teste.component';
import { ListaTesteComponent } from './pagini-profesor/testele-mele/lista-teste/lista-teste.component';


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
    path: 'homePage', component: ActualContentComponent, children: [
      {
        path: 'testeProf',
        component: TesteleMeleComponent,
        outlet: "sidebar"
      },
      {
        path: 'listaTeste',
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
