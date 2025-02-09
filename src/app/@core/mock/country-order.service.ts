import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { CountryOrderData } from '../data/country-order';

@Injectable()
export class CountryOrderService extends CountryOrderData {
  private countriesCategories = [
    'Sofas',
    'Furniture',
    'Lighting',
    'Tables',
    'Textiles',
  ];

  private countriesCategoriesLength = this.countriesCategories.length;

  getCountriesCategories(): Observable<string[]> {
    return observableOf(this.countriesCategories);
  }

  getCountriesCategoriesData(country: string): Observable<number[]> {
    return observableOf(this.generateRandomData(this.countriesCategoriesLength));
  }

  private generateRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => Math.round(Math.random() * 20));
  }
}
