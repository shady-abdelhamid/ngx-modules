import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) }, { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule) }, { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
