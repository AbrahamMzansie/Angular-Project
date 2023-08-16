import { RouterModule } from '@angular/router';
import { Component , Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
 
}
