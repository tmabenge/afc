import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <button mat-button routerLink="/">Home</button>
      <button mat-button routerLink="/services">Services</button>
      <button mat-button routerLink="/contact-us">Contact Us</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    mat-toolbar {
      justify-content: center;
    }
  `]
})
export class AppComponent { }
