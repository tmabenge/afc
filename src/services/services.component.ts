import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <div class="container">
      <h2>Our Services</h2>
      <mat-card class="service-card" *ngFor="let service of services">
        <img [src]="service.image" alt="Service Image">
        <p>{{service.name}}</p>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 20px;
    }
    .service-card {
      width: 300px;
      height: 200px;
      margin: 20px;
      text-align: center;
    }
  `]
})
export class ServicesComponent implements OnInit {

  services = [    {      name: 'Rubberizing',      image: 'https://via.placeholder.com/300x200'    },    {      name: 'Canopies',      image: 'https://via.placeholder.com/300x200'    },    {      name: 'Vehicle Protection',      image: 'https://via.placeholder.com/300x200'    },    {      name: 'Vehicle Security',      image: 'https://via.placeholder.com/300x200'    },    {      name: 'Vehicle Entertainment',      image: 'https://via.placeholder.com/300x200'    },    {      name: 'Vehicle Accessories',      image: 'https://via.placeholder.com/300x200'    },    {      name: 'Panel Beating',      image: 'https://via.placeholder.com/300x200'    },    {      name: 'Spray Painting',      image: 'https://via.placeholder.com/300x200'    },  ];

  constructor() { }

  ngOnInit(): void {
  }

}
