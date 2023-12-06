import { Content } from './content';
import { Teacher } from './teacher';

export class Course {
  id?: string;
  name?: string;
  teacher?: Teacher;
  contents?: Array<Content>;
  language?: string;
  price?: string;
  thumbnailUrl?: string;
  description?: string;
  tags?: Array<string>;
  createdAt?: Date;
  LastEditedAt?: Date;
  purchased?: Array<Object>;
}
