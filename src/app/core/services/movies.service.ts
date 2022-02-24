import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public url: string = environment.backendUrl;
  constructor(public httpClient: HttpClient) {
    
    
   }

  public getMovies(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.url+'movies');
  }
  public getMovieById(id:string): Observable<Movie>{
    return this.httpClient.get<Movie>(this.url+'movies/'+id);
  }
}
