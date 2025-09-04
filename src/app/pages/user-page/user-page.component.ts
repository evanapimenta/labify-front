import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  user = {
    firstName: 'Evana Pimenta',
    dateOfBirth: '09-03-1996',
    email: 'evana.pimenta@icloud.com',
    phoneNumber: '(11) 94772-4717',
    currentPassword: '1234567',
    newPassword: '12345612345797947',
    confirmPassword: '12345612345797947'
  };
}