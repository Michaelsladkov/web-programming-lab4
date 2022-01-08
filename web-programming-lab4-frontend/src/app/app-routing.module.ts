import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './app.login-guard';
import { HomeComponent } from './home/home.component';
import { WorkingPageComponent } from './working-page/working-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shots', component: WorkingPageComponent, runGuardsAndResolvers: 'always', canActivate: [LoginGuard]},
  {path: 'login', component: HomeComponent}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
