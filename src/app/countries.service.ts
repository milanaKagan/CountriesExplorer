import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl:string = 'https://restcountries.eu/rest/v2';

  constructor(private httpClient:HttpClient) { }

  getAllCountries() : Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/all`);
  }
  getCountriesByCapital(capital : string) : Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/capital/${capital}`);
  }
  getCountriesByRegion(region : string) : Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/region/${region}`);
  }
  getCountryByCountryFullName(name : string) : Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/name/${name}?fullText=true`);
  }
}
