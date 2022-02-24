import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies!: Movie[];
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(result =>{
      console.log('Result :', result);
      
      this.movies = result;
      
    });
  }

}
