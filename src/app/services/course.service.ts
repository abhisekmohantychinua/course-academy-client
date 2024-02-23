import { Injectable } from '@angular/core';
import { Course } from '../models/entity/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  searchCourseByQuery(): Course[] {
    return [
      {
        id: 'course',
        thumbnailUrl:
          'https://www.vcubesoftsolutions.com/wp-content/uploads/2022/03/Advance.png',
        name: 'Java Premium Course',
      },
    ];
  }
}
