import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleMoviePage } from './single-movie.page';

const routes: Routes = [
  {
    path: ':idMovie',
    component: SingleMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleMoviePageRoutingModule {}
