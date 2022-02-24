import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from 'src/app/shared/movie-details/movie-details.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent 
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
