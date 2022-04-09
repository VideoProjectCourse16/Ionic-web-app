import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleMoviePageRoutingModule } from './single-movie-routing.module';

import { SingleMoviePage } from './single-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleMoviePageRoutingModule
  ],
  declarations: [SingleMoviePage]
})
export class SingleMoviePageModule {}
