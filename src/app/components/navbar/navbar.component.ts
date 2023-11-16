import { Component, Inject, OnInit, Renderer2, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

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
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  theme = signal<string>('light');
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

    this.theme.update((t) => {
      if (t === 'dark') {
        this.render.addClass(this.document.body, 'light');
        return 'light';
      } else {
        this.render.addClass(this.document.body, 'dark');
        return 'dark';
      }
    });
  }
}
