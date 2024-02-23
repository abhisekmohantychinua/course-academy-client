import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/entity/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  course: Course = {
    id: 'qe353',
    thumbnailUrl:
      'https://www.vcubesoftsolutions.com/wp-content/uploads/2022/03/Advance.png',
    name: 'Java Advance Course',
    price: '3500',
    teacher: { userProfile: { name: 'Teacher mohanty' } },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam inventore eum odio doloribus laudantium consequuntur necessitatibus nulla repellat quaerat vero.',
  };
  purchased: boolean = true;
}
