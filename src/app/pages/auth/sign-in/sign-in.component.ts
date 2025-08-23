import { Component } from '@angular/core';
import { IconMailComponent } from '../../../icons/icon-mail';
import { IconLockDotsComponent } from '../../../icons/icon-lock-dots';
import { RouterLink } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthController } from '../../../core/controllers/auth.controller';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink ,IconMailComponent, IconLockDotsComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(private authController: AuthController){}

  form!: UntypedFormGroup;
  ngOnInit(): void {
    this.createForm();
  }

  createForm = () => {
    this.form = new UntypedFormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
 }

 login = () => {
  console.log(this.form.value);
  this.authController.login(this.form.value).then((resp: any) => {
    console.log(resp);
  })

 }
}