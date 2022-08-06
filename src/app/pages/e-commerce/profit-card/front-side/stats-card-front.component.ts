import { Component } from '@angular/core';
import { ProfitBarAnimationChartData } from '../../../../@core/data/profit-bar-animation-chart';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-stats-card-front',
  styleUrls: ['./stats-card-front.component.scss'],
  templateUrl: './stats-card-front.component.html',
})
export class StatsCardFrontComponent {

  linesData: { firstLine: number[]; secondLine: number[] };

  private alive = true;

  constructor(private profitBarAnimationChartService: ProfitBarAnimationChartData) {
    this.profitBarAnimationChartService.getChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((linesData) => {
        this.linesData = linesData;
      });
  }
}
