import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './components/answers/answers.component';
import { ErrorComponent } from './components/error/error.component';
import { MasterpageComponent } from './components/Home/masterpage/masterpage.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  {path:"", redirectTo:"Home", pathMatch:"full"},
  {path:"questions", component:QuestionsComponent},
  {path:"answers/:id", component:AnswersComponent},
  {path:"Home", component:MasterpageComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
