import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanDeactivatedTeam } from './guard/deactivete.guard';
import { ProjectComponent } from './project/project.component';

import { AuthGuardGuard } from './guard/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BoardViewComponent } from './board-view/board-view.component';

const routes: Routes = [
  {path:'', redirectTo:'/homepage', pathMatch:'full'},
  {path:'homepage', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent,  canDeactivate:[CanDeactivatedTeam] },
  {path:'project', component:ProjectComponent},
  {path:'boardView', component:BoardViewComponent, canActivate:[AuthGuardGuard] },
  {path:'**', component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
