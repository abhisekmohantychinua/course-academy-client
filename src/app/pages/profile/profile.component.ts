import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/entity/user';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTabsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user?: User;
  isMyProfile?: boolean;
  constructor(
    private _route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this._route.params.subscribe((param) => {
      const id = param['id'];
      console.log(id);
      this.user = this.userService.findUserById(id);
      this.isMyProfile = this.authService.isMyProfile(this.user.id);
      console.log(this.user);
    });
  }
}
