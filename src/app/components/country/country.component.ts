import { Component, Input } from '@angular/core';
import { CountryInterface } from 'src/app/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  @Input() country !: CountryInterface;

}
