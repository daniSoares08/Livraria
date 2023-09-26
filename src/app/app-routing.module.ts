

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/pages/register/register.component';
import { VitriniComponent } from './component/vitrini/vitrini.component'
import { LoginComponent } from './component/pages/login/login.component';
import { BookDetailsComponent } from './component/pages/book-details/book-details.component'
import { AddBookComponent } from './component/pages/add-book/add-book.component';
import { EditBookComponent } from './component/pages/edit-book/edit-book.component';

const routes: Routes = [
  { path: 'pages/register', component: RegisterComponent },
  { path: 'pages/login', component: LoginComponent },
  { path: 'vitrini', component: VitriniComponent },
  { path: 'pages/book-details/:id', component: BookDetailsComponent },
  { path: 'pages/add-book', component: AddBookComponent},
  { path: 'pages/edit-book', component: EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

