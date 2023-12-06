import { Course } from './course';
import { Student } from './student';

export class Purchase {
  id?: string;
  time?: Date;
  student?: Student;
  course?: Course;
}
