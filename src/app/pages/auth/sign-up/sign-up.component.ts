import { Component } from '@angular/core';
import { IconLockDotsComponent } from '../../../icons/icon-lock-dots';
import { IconMailComponent } from '../../../icons/icon-mail';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink ,IconMailComponent, IconLockDotsComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
