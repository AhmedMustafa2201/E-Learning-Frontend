import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
<<<<<<< HEAD
import { AllLessonsComponent } from './components/all-lessons/all-lessons.component';
=======
import { AllcoursesComponent } from './components/allcourses/allcourses.component';
>>>>>>> 9be91294c70714d4c622ebb4a67f239c60fb7d3c
import { AnswersComponent } from './components/answers/answers.component';
import { ArticleComponent } from './components/article/article.component';
import { CoursedetailesComponent } from './components/coursedetailes/coursedetailes.component';
import { ErrorComponent } from './components/error/error.component';
import { ExamComponent } from './components/exam/exam.component';
import { MasterpageComponent } from './components/Home/masterpage/masterpage.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { MasterquestionpoolComponent } from './components/questionsPool/masterquestionpool/masterquestionpool.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:"", redirectTo:"Home", pathMatch:"full"},
  {path:"questions", component:QuestionsComponent},
  {path:"answers/:id", component:AnswersComponent},
  {path:"Home", component:MasterpageComponent},
  {path:"exam/:id", component:ExamComponent ,canActivate:[AuthGuard]},
  {path:"lesson/:id", component:LessonComponent ,canActivate:[AuthGuard]},
  {path:"questionpool",component:MasterquestionpoolComponent},
  {path:"course/:id", component:CoursedetailesComponent},
  {path:"courses", component:AllcoursesComponent},
  {path:"article/:id", component:ArticleComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"lessons",component:AllLessonsComponent},
  { path: 'admin',
  loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
