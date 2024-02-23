import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UtilityService } from '../../services/utility.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/entity/user';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  theme: string | null = '';
  query: string = '';
  deviceS: boolean = false;
  showSearch: boolean = false;
  isLoggesIn: boolean = false;
  user?: User | null;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private render: Renderer2,
    private breakPointService: BreakpointObserver,
    private router: Router,
    private authService: AuthService,
    private util: UtilityService
  ) {}

  ngOnInit(): void {
    this.breakPointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.deviceS = false;
        if (result.matches) {
          this.deviceS = true;
        }
      });
    this.isLoggesIn = this.authService.isLoggedIn();
    this.user = this.authService.getAuthUser();
    this.theme = this.util.storageGet('theme');
  }

  onSubmit() {
    this.router.navigate(['search'], { queryParams: { query: this.query } });
    this.query = '';
  }
  toggleShowSearch() {
    this.showSearch = !this.showSearch;
  }
  toggleTheme() {
    this.render.removeClass(this.document.body, 'dark');
    this.render.removeClass(this.document.body, 'light');

    if (this.theme === 'dark') {
      this.render.addClass(this.document.body, 'light');
      this.util.storageSet('theme', 'light');
      this.theme = 'light';
    } else {
      this.render.addClass(this.document.body, 'dark');
      this.util.storageSet('theme', 'dark');
      this.theme = 'dark';
    }
  }
}
