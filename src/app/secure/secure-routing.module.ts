import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  {
      //Charge le composant
    path: '', component: SecureComponent ,
    children: [
      {
        path: 'parametrage',
        loadChildren: () =>
        import('./parametrage/parametrage.module').then(
         (m) => m.ParametrageModule
        )
      }
    ]
  }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
