import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiereListComponent } from './biere-list/biere-list.component';
import { DetailBiereComponent } from './detail-biere/detail-biere.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'bieres', component: BiereListComponent },
  { path: 'biere/:id', component: DetailBiereComponent },
  { path: '', redirectTo: 'bieres', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
