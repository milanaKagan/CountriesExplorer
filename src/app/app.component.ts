import { Component ,OnInit} from '@angular/core';
import { CountriesService } from './countries.service';
import { CountryInterface} from './country.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countries';

constructor(private countryService: CountriesService) {

}
ngOnInit() {
  this.getAllCountries();
}
 countriesList: CountryInterface[] = [];
 countriesNames: string[] = [];
 sub : any;
 getAllCountries(){
  this.sub = this.countryService.getAllCountries()
     .subscribe((dataFromServer: CountryInterface[]) => {
      dataFromServer;
      for (let i=0; i < dataFromServer.length; i++){
        this.countriesNames[i] = dataFromServer[i].name;
      }
     });
 }

 temp : any;
 getCountryByCapital(capital: string){
  if(this.temp)  {this.temp.unsubscribe();}
  if(this.sub)  {this.sub.unsubscribe();}

  this.temp = this.countryService.getCountriesByCapital(capital)
  .subscribe((dataFromServer: CountryInterface[]) => {
   this.countriesList = dataFromServer;
  });
}
getCountryByRegion(region: string){
  if(this.temp)  {this.temp.unsubscribe();}
  if(this.sub)  {this.sub.unsubscribe();}
  this.temp = this.countryService.getCountriesByRegion(region)
  .subscribe((dataFromServer: CountryInterface[]) => {
   this.countriesList = dataFromServer;
  });
}
getCountry(countryName: string){
  if(this.temp)  {this.temp.unsubscribe();}
  if(this.sub)  {this.sub.unsubscribe();}
  this.temp =  this.countryService.getCountryByCountryFullName(countryName)
  .subscribe((dataFromServer: CountryInterface[]) => {
   this.countriesList = dataFromServer;
  });
}

 explore(userSearchValue: [string,number]){
   if(userSearchValue[1] == 0){
     this.getCountryByRegion(userSearchValue[0]);
   }
   else if (userSearchValue[1] == 1){
     this.getCountryByCapital(userSearchValue[0]);
   }
   else if (userSearchValue[1]== 2){
     this.getCountry(userSearchValue[0]);
  }

 }

}

