import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  bannerActiveIndex: number = 0;
  image: string = this.images[this.bannerActiveIndex];

  constructor() {}
  ngOnInit(): void {
    this.startBanner();
  }
  startBanner() {
    const interval = setInterval(() => {
      this.bannerActiveIndex++;
      if (this.bannerActiveIndex >= this.images.length) {
        this.bannerActiveIndex = 0;
      }
      this.image = this.images[this.bannerActiveIndex];
    }, 4000);
  }
}
