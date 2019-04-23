import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results = [0,0,0,0,0]

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['AC Milan', 'Bayern Munich', 'FC Barcelona', 'Manchester United', 'Real Madrid'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: this.results }
  ];

  constructor( private dataService : DataService ) { }

  ngOnInit() {
    
    this.dataService.getVoteCount()
      .then( ( voteCount : any[] ) => {
          
        var data = []
        voteCount.forEach(element => {
          data.push( element.score )
        });

        this.barChartData[0].data = data;

      } )
    
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
