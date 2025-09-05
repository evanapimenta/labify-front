import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
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