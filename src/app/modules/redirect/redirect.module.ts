import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectComponent } from './redirect.component';

const redirectRoutes: Routes = [{ path: '**', component: RedirectComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(redirectRoutes)],
})
export class RedirectModule {}
