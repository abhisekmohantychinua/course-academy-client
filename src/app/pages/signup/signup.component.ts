import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  stepperIndex = 0;
  profileImage: File | null = null;
  profileError: string | null = null;
  profileUrl: string = '/assets/default-profile.png';
  coverImage: File | null = null;
  coverError: string | null = null;
  coverUrl: string = '/assets/default-cover.png';

  credentialGroup = this._formBuilder.group({
    type: ['', Validators.required],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^[6-9]\\d{9}$'),
      ],
    ],
    about: ['', [Validators.required, Validators.minLength(250)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(private _formBuilder: FormBuilder) {
    this.credentialGroup.addValidators(
      (control: AbstractControl): ValidationErrors | null => {
        if (
          control.get('password')?.value ===
          control.get('confirmPassword')?.value
        ) {
          return null;
        }
        return { matcherror: true };
      }
    );
  }

  previous(): void {
    this.stepperIndex--;
  }

  next(): void {
    this.stepperIndex++;
    if (this.stepperIndex === 9) this.stepperIndex = 0;
  }

  onSubmit() {
    if (this.credentialGroup.valid && this.profileImage && this.coverImage) {
      const formData = new FormData();
      formData.append('user', JSON.stringify(this.credentialGroup.value));
      formData.append('profile', this.profileImage);
      formData.append('cover', this.coverImage);
      // API call
      console.log(formData.get('user'));
      console.log(formData.get('profile'));
      console.log(formData.get('cover'));
    }
  }

  onProfileChange(e: any) {
    if (e.target.files) {
      if (e.target.files[0].size > 2048000) {
        this.profileImage = null;
        this.profileError = 'Please select an image upto 2mb.';
        this.profileUrl = '/assets/default-profile.png';
        return;
      }
      this.profileImage = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event) =>
        (this.profileUrl = event.target
          ? (event.target.result as string)
          : '/assets/default-profile.png');

      this.profileError = null;
    } else {
      this.profileImage = null;
      this.profileError = 'Please select an image.';
      this.profileUrl = '/assets/default-profile.png';
    }
  }
  onCoverchange(e: any) {
    if (e.target.files) {
      if (e.target.files[0].size > 2048000) {
        this.coverImage = null;
        this.coverError = 'Please select an image upto 2mb.';
        this.coverUrl = '/assets/default-cover.png';
        return;
      }
      this.coverImage = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event) =>
        (this.coverUrl = event.target
          ? (event.target.result as string)
          : '/assets/default-cover.png');
      this.coverError = null;
    } else {
      this.coverImage = null;
      this.coverError = 'Please select an image.';
      this.coverUrl = '/assets/default-cover.png';
    }
  }
}
