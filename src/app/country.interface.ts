export interface CountryInterface {
    name: string;
    topLevelDomain : string[];
    alpha2Code : string;
    alpha3Code : string;
    callingCodes : string[];
    capital : string;
    altSpellings : string[];
    region : string;
    subregion : string;
    population : number;
    latlng : any[]; 
    demonym : string;
    area : number;
    gini : any; 
    timezones : string[];
    borders : string[];
    nativeName : string;
    numericCode : number;
    currencies : any[];
    languages : any[];
    translations : {}; 
    flag : string;
    regionalBlocs : any[];
    cioc : string;
}
