import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}
  ngOnInit(): void {
    this._route.queryParams.subscribe((param) => {
      console.log(param['query']);
    });
  }
}
