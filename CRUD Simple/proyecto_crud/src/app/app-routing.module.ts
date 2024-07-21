import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Componentes

import { ListusersComponent } from './components/listusers/listusers.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';

const routes: Routes = [
  { path: '', component: ListusersComponent },
  { path: 'add', component: AddEditUserComponent },
  { path: 'edit/:id', component: AddEditUserComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // SIEMPRE AL ULTIMO!!!!

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
