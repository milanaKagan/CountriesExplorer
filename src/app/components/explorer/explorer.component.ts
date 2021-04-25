import { Component,ViewChild, ElementRef, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent {
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  filterChoices: string[] = ['Region', 'Capital City','Country Name'];
  choiceFlag: number = -1;


  @ViewChild('regionfilter',{ read: ElementRef })
  regionSubFilter!: ElementRef;
  @ViewChild('capitalFilter',{ read: ElementRef })
  capitalSubFilter!: ElementRef;
  @ViewChild('countryFilter',{ read: ElementRef })
  countrySubFilter!: ElementRef;
  @ViewChild('searchBtn',{ read: ElementRef })
  searchBtn!: ElementRef;
  

  @Input() countries: string[] = [];

  @Output() capital$ = new EventEmitter();
  @Output() fullName$ = new EventEmitter();
  @Output() region$ = new EventEmitter();
  @Output() flag$ = new EventEmitter();
  
  hideSubFilters(choice: number) {
  if(choice === 0){
    this.regionSubFilter.nativeElement.style.display = 'block';
    this.capitalSubFilter.nativeElement.style.display = 'none';
    this.countrySubFilter.nativeElement.style.display = 'none';
    this.choiceFlag = 0;
  }
  else if(choice === 1){
    this.regionSubFilter.nativeElement.style.display = 'none';
    this.capitalSubFilter.nativeElement.style.display = 'block';
    this.countrySubFilter.nativeElement.style.display = 'none';
    this.choiceFlag = 1;
  }
  else if(choice === 2){
    this.regionSubFilter.nativeElement.style.display = 'none';
    this.capitalSubFilter.nativeElement.style.display = 'none';
    this.countrySubFilter.nativeElement.style.display = 'block';
    this.choiceFlag = 2;
  }
  }
  
  handleChange(event: any) {
    this.searchBtn.nativeElement.style.display = 'inline-block';

    var target = event.target.id;
    if (target === this.filterChoices[0])
      this.hideSubFilters(0);
    else if (target === this.filterChoices[1])
      this.hideSubFilters(1);
    else if (target === this.filterChoices[2])
      this.hideSubFilters(2);
  }
 
  regionChoice: string = "Africa";
  countryChoice: string = "Afghanistan";
  capitalChoice: string = "";
  setRegion(event: any){
    this.regionChoice = event.target.value;
  }
  setCountry(event: any){
    this.countryChoice = event.target.value;
  }

  setCapital(event: any){
    this.capitalChoice = event.target.value;
  }
  searchCountries(){
   if(this.choiceFlag === 0){
    this.region$.emit([this.regionChoice,0]);

   }
   else if(this.choiceFlag === 1){
    this.capital$.emit([this.capitalChoice,1]);

   }
   else if(this.choiceFlag === 2){
    this.fullName$.emit([this.countryChoice,2]);
 
   }

  }

}
