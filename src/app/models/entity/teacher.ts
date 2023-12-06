import { Address } from './address';
import { Course } from './course';
import { Education } from './education';
import { Experience } from './experience';
import { User } from './user';

export class Teacher {
  id?: string;
  userProfile?: User;
  websiteUrl?: string;
  contactPhone?: string;
  contactEmail?: string;
  talksAbout?: Array<string>;
  experiancess?: Array<Experience>;
  educations?: Array<Education>;
  resumeUrl?: string;
  address?: Address;
  courses?: Array<Course>;
}
