import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PokemonServicesService } from '../../services/pokemonServices/pokemon-services.service';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { ManagementComponent } from './features/management/management.component';

const routesDashboard: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'management', component: ManagementComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    ManagementComponent,
    DashboardComponent,
    NavBarComponent,
    CardPokemonComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routesDashboard),
  ],
  providers: [PokemonServicesService],
})
export class DashboardModule {}
