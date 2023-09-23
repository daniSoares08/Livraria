

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/pages/register/register.component';
import { VitriniComponent } from './component/vitrini/vitrini.component'
import { LoginComponent } from './component/pages/login/login.component';


const routes: Routes = [
  { path: 'pages/register', component: RegisterComponent },
  { path: 'pages/login', component: LoginComponent },
  { path: 'vitrini', component: VitriniComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
