import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteleMeleComponent } from './pagini-profesor/testele-mele/testele-mele.component';
import { RapoarteStudentiComponent } from './pagini-profesor/rapoarte-studenti/rapoarte-studenti.component';
import { CatalogComponent } from './pagini-profesor/catalog/catalog.component';
import { CreeazaTestComponent } from './pagini-profesor/creeaza-test/creeaza-test.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ActualContentComponent } from './actual-content/actual-content.component';

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
        path: 'rapoarteProf',
        component: RapoarteStudentiComponent,
        outlet: "sidebar"
      },
      {
        path: 'catalog',
        component: CatalogComponent,
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
