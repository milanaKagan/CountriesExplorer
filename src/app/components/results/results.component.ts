import { Component, Input } from '@angular/core';
import { CountryInterface } from 'src/app/country.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  @Input() countriesItems: CountryInterface[] = [];

}
