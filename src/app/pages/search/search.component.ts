import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/entity/user';
import { Course } from '../../models/entity/course';
import { CourseService } from '../../services/course.service';
import { UserService } from '../../services/user.service';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { TeacherCardComponent } from '../../components/teacher-card/teacher-card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, TeacherCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  query: string = '';
  searchCourse: Array<Course> = [];
  searchTeacher: Array<Course> = [];

  constructor(
    private _route: ActivatedRoute,
    private courseService: CourseService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this._route.queryParams.subscribe((param) => {
      this.query = param['query'];
      this.fetchCourse();
      this.fetchCourse();
    });
  }

  fetchTeacher(): void {}
  fetchCourse(): void {}
}
