import { Component } from '@angular/core';
import { NbCalendarDayCellComponent } from '@nebular/theme';

@Component({
  selector: 'ngx-day-cell',
  templateUrl: 'day-cell.component.html',
  styleUrls: ['day-cell.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '(click)': 'onClick()', class: 'day-cell' },
})
export class DayCellComponent extends NbCalendarDayCellComponent<Date> {
}
