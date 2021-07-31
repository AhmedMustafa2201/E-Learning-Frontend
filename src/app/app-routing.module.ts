import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './components/answers/answers.component';
import { ErrorComponent } from './components/error/error.component';
import { ExamComponent } from './components/exam/exam.component';
import { MasterpageComponent } from './components/Home/masterpage/masterpage.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  {path:"", redirectTo:"Home", pathMatch:"full"},
  {path:"questions", component:QuestionsComponent},
  {path:"answers/:id", component:AnswersComponent},
  {path:"Home", component:MasterpageComponent},
  {path:"exam/:id", component:ExamComponent},
  {path:"lesson/:id", component:LessonComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
