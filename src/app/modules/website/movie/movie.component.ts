import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDto } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  id: number;
  movie: MovieDto;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.id = this.route.snapshot.params['id'];
  } 

  ngOnInit(): void {
    this.movieService.getMovie(this.id).subscribe({
      next: (movie) => {
        this.movie = movie;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
