import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Teacher } from '../../models/entity/teacher';

@Component({
  selector: 'app-teacher-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-card.component.html',
  styleUrl: './teacher-card.component.scss',
})
export class TeacherCardComponent {
  teacher: Teacher = {
    userProfile: {
      name: 'Teacher Mohanty',
      profileUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbafNwVpCOrAr_0CzOHY66Ltw3CImsyAS9LQ&usqp=CAU',
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae totam cupiditate praesentium dolorum ab modi consequuntur velit recusandae, adipisci est atque laborum provident aliquam.',
    },
    talksAbout: ['Economics', 'Politics', 'Lorem', 'Ipsum'],
  };
}
