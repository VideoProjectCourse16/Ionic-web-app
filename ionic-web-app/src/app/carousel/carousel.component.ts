import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movies.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() genre: string;
  constructor() { }

  ngOnInit() {
  }

}
