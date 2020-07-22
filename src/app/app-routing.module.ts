import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { RutinaComponent } from './rutina/rutina.component';
import { PlanillaComponent } from './planilla/planilla.component';


const routes: Routes = [

{path : 'cliente-component', component: ClienteComponent},
{path : 'rutina-component', component: RutinaComponent},
{path : 'planilla-component', component: PlanillaComponent},
{ path : '', redirectTo: 'planilla-component', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
