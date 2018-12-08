import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteleMeleComponent } from './pagini-profesor/testele-mele/testele-mele.component';
import { RapoarteStudentiComponent } from './pagini-profesor/rapoarte-studenti/rapoarte-studenti.component';
import { CatalogComponent } from './pagini-profesor/catalog/catalog.component';
import { CreeazaTestComponent } from './pagini-profesor/creeaza-test/creeaza-test.component';

const routes: Routes =[
  { path: '',
   redirectTo: 'testeProf', 
   pathMatch: 'full'},

  { path: 'testeProf', 
    component: TesteleMeleComponent,
    outlet: "sidebar"
  },

  { path: 'rapoarteProf', 
  component: RapoarteStudentiComponent,
  outlet: "sidebar"
},

  { path: 'catalog', 
    component: CatalogComponent,
    outlet: "sidebar"
  },

  { path: 'creeazaTest', 
    component: CreeazaTestComponent,
    outlet: "sidebar"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true,
      onSameUrlNavigation: 'reload'
    } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
