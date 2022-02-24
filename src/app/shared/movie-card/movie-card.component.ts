import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openDetails(id: string){
    this.router.navigate(['/details/'+id])
  }


}
