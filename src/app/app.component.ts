import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cource-academy';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private render: Renderer2,
    private util: UtilityService
  ) {}
  ngOnInit(): void {
    const theme = this.util.storageGet('theme');
    if (theme === null) {
      this.render.addClass(this.document.body, 'light');
      this.util.storageSet('theme', 'light');
      return;
    }
    this.render.addClass(this.document.body, theme);
  }
}
