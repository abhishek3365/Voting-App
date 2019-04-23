import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  bestTeam: string;
  teams: string[] = ['AC Milan', 'Bayern Munich', 'FC Barcelona', 'Manchester United', 'Real Madrid'];

  constructor( private dataSerive : DataService , private router : Router ) { }

  ngOnInit() {

  }

  castService() {

    this.dataSerive.castVote(this.bestTeam)
      .then( () => {
        this.router.navigate(['/thank-you']);
      } )
      .catch( () => {

      } )

  }

}
