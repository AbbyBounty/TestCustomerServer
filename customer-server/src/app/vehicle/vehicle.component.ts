import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
   
     vehicals=[
      {"Vehicle_Name":"Classic 350","Vehicle_Company":"Royal Enfield", "Vehicle_Model":"Classic", "Vehicle_Number":16},
      {"Vehicle_Name":"Pulser","Vehicle_Company":"Bajaj", "Vehicle_Model":"Pulser220", "Vehicle_Number":15},
      {"Vehicle_Name":"Apache","Vehicle_Company":"TVS", "Vehicle_Model":"Apache180", "Vehicle_Number":20},

     ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onEdit(vehicle)
  {
     this.router.navigate(['/vehicle-add'],{queryParams:{id:vehicle['Vehicle_Number']}})

 }

 addvehicle()
 {

  this.router.navigate(['/vehicle-add'])
 }

}
