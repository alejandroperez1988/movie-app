import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieListComponent } from 'src/app/shared/movie-list/movie-list.component';
import { MovieCardComponent } from 'src/app/shared/movie-card/movie-card.component';
import { MovieDetailsComponent } from 'src/app/shared/movie-details/movie-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    MoviesService
  ]
})
export class HomeModule { }
