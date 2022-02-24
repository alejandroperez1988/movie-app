import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;
  constructor(private activatedRoute : ActivatedRoute, private movieService:MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      
      this.getMovieById(params.get('id')!);
      
    });
    console.log(this.movie);
    
  }

  getMovieById(id:string){
    this.movieService.getMovieById(id).subscribe(result =>{
      this.movie = result;
      console.log(this.movie);   
    })
  }

  goHome(){
    this.router.navigateByUrl('');
  }

}
