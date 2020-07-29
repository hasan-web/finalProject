import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../app/user/user.component';
import { HomeComponent } from './home/home.component';
import { CoronaComponent } from './corona/corona.component';
import { MeanStackCrudComponent } from './mean-stack-crud/mean-stack-crud.component';
import { ListEmployeeComponent } from './mean-stack-crud/list-employee/list-employee.component';
import { AddEmployeeComponent } from './mean-stack-crud/add-employee/add-employee.component';
import { EditEmployeeComponent } from './mean-stack-crud/edit-employee/edit-employee.component';

const routes: Routes = [{
  path:'login', component:UserComponent
},
{
  path:'home', component:HomeComponent,
  pathMatch:'full'
},
{
  path:'corona',component:CoronaComponent
},
{
  path:'meanstack',component:MeanStackCrudComponent,
},
{
  path:'meanstack/list', component:ListEmployeeComponent
},
{
  path:'meanstack/add', component:AddEmployeeComponent
},
{
  path:'meanstack/edit', component:EditEmployeeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
