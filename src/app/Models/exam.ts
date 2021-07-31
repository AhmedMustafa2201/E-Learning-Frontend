
import { Question } from './question';

export class Exam {
  id:number=0;
  name:string="";
  courseId:number=0;
  questions:Question[]=[]
}
