import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieDto } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  movieLoading: boolean = true;

  movies: Array<MovieDto> = [];
  
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  ngOnDestroy(): void {
  }

  getAllMovies(){
    this.movieService.getAllMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
        this.movieLoading = false;
      },
      error: (error) => {
        console.log(error);
      },
   })
  }
}
