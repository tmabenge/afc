import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  template: `
    <div class="container">
      <h2>Contact Us</h2>
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="outline">
          <mat-label>Email</mat-label>
          <input matInput type="email" formControlName="email">
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Cell Phone Number</mat-label>
          <input matInput type="tel" formControlName="cellPhoneNumber">
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Message</mat-label>
          <textarea matInput formControlName="message" rows="5"></textarea>
          </mat-form-field>
          <button mat-raised-button color="primary" type="submit">Submit</button>
        </form>
      </div>
    `,
    styles: [`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
      }
      form {
        width: 50%;
      }
    `]
  })
  export class ContactUsComponent implements OnInit {
    contactForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder) { }
  
    ngOnInit(): void {
      this.contactForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        cellPhoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        message: ['', Validators.required],
      });
    }
  
    onSubmit() {
      // send email with contact form details here
      console.log(this.contactForm.value);
    }
  
  }
  
