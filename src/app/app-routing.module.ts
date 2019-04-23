import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotingComponent } from './voting/voting.component';
import { ResultsComponent } from './results/results.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path : "voting" , component : VotingComponent },
  { path : "results" , component : ResultsComponent },
  { path : "thank-you" , component : ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
