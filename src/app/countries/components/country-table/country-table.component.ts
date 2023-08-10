import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
      img {
        max-width: 32px;
      }
    `,
  ],
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
