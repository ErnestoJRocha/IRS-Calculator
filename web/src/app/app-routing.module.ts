import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { SimulationsComponent } from './components/simulations/simulations.component';
import { TeamComponent } from './components/team/team.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simulator', component: SimulatorComponent },
  { path: 'simulations', component: SimulationsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
