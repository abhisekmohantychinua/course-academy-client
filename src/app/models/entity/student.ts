import { Purchase } from './purchase';
import { User } from './user';

export class Student {
  id?: string;
  userProfile?: User;
  contactPhone?: string;
  contactEmail?: string;
  findsAbout?: Array<string>;
  purchases?: Array<Purchase>;
}
