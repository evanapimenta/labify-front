import { Component } from '@angular/core';
import { IconLockDotsComponent } from '../../../icons/icon-lock-dots';
import { IconMailComponent } from '../../../icons/icon-mail';
import { RouterLink } from '@angular/router';
import { IconUserComponent } from '../../../icons/icon-user';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink ,IconMailComponent, IconLockDotsComponent, IconUserComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
