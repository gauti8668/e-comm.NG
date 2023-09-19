import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {};

  submitForm() {
    // Add logic to send form data to your server or perform other actions.
    console.log('Form data submitted:', this.formData);
  }
}
