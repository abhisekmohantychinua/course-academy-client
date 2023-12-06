import { Student } from './student';
import { Teacher } from './teacher';

export class User {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  about?: string;
  profileUrl?: string;
  coverUrl?: string;
  role?: 'TEACHER' | 'STUDENT' | 'BOTH';
  teacherProfile?: Teacher | null;
  studentProfile?: Student | null;
}
