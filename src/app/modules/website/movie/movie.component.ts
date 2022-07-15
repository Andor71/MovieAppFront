import { Component, OnInit } from '@angular/core';
import { MovieDto } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: MovieDto;

  constructor() { }

  ngOnInit(): void {
    this.movie = {
      id: 1,
      title: "Harry Potter",
      image: "movie1.jpg",
      author: "JK Rowling"
    };
  }

}
