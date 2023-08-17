import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import {HousingService} from "../housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="filter by  city" #filter />
        <button (click)="filterResults(filter.value)" class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation" 
        [imageURL]="imageURL" 
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  filteredLocationList: HousingLocation[] = [];
  housingLocationList: HousingLocation[] = [];
  imageURL :string = ""
  houseService : HousingService = inject(HousingService);
  constructor() {
    this.houseService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
      this.imageURL = this.houseService.baseUrl;
    });
  }
    
  filterResults(text: string){
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
