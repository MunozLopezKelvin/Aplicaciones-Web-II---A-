import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoneradoListComponent } from './components/exonerado-list/exonerado-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'exonerado/inicio', pathMatch: 'full'},
  {path: 'exonerado/inicio', component: ExoneradoListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
