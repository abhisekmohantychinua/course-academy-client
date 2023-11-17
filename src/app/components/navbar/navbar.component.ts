import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private render: Renderer2,
    private breakPointService: BreakpointObserver
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
    this.theme = localStorage.getItem('theme');
  }

  onSubmit() {
    console.log(this.query);
    this.query = '';
    this.showSearch = false;
  }
  toggleShowSearch() {
    this.showSearch = !this.showSearch;
  }
  toggleTheme() {
    this.render.removeClass(this.document.body, 'dark');
    this.render.removeClass(this.document.body, 'light');

    if (this.theme === 'dark') {
      this.render.addClass(this.document.body, 'light');
      localStorage.setItem('theme', 'light');
      this.theme = 'light';
    } else {
      this.render.addClass(this.document.body, 'dark');
      localStorage.setItem('theme', 'dark');
      this.theme = 'dark';
    }
  }
}
