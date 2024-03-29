import { Injectable } from '@angular/core';
import { User } from '../models/entity/user';
import { Teacher } from '../models/entity/teacher';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  findUserById(id: string): User {
    return {
      coverUrl:
        'https://images.unsplash.com/photo-1528465424850-54d22f092f9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profileUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbafNwVpCOrAr_0CzOHY66Ltw3CImsyAS9LQ&usqp=CAU',
      name: 'Abhisek Mohanty',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae massa id dolor mollis imperdiet sed non enim. Etiam faucibus suscipit ultrices. Donec et aliquet arcu. Quisque tempus facilisis erat, nec consequat massa hendrerit non. In maximus in neque in tempor. Praesent rutrum nibh in enim hendrerit, eu faucibus enim aliquet. Vestibulum pharetra placerat eros eu mollis. Maecenas venenatis porta libero ut lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque et rutrum erat. Fusce fermentum nisl in dapibus mattis. Vivamus molestie nunc elementum sem bibendum facilisis. Quisque tristique rhoncus congue. Vestibulum et est.',

      teacherProfile: {
        websiteUrl: '',
        talksAbout: ['Economics', 'Politics', 'Lorem', 'Ipsum'],
        contactEmail: 'contactEmail@gmail.com',
      },
      studentProfile: {
        contactEmail: 'studentContactEmail@gmail.com',
        findsAbout: ['Economics', 'Politics', 'Lorem', 'Ipsum'],
      },
    };
  }
  searchTeacherByQuery(query: string): Teacher[] {
    return [
      {
        id: 'teacher',
        userProfile: {
          name: 'Teacher Mohanty',
          profileUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbafNwVpCOrAr_0CzOHY66Ltw3CImsyAS9LQ&usqp=CAU',
        },
      },
    ];
  }
}
