import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnswersComponent } from './components/answers/answers.component';
import { HeaderComponent } from './components/Shared/header/header.component';
import { FooterComponent } from './components/Shared/footer/footer.component';
import { FirstsectionComponent } from './components/Home/firstsection/firstsection.component';
import { MasterpageComponent } from './components/Home/masterpage/masterpage.component';
import { SecondsectionComponent } from './components/Home/secondsection/secondsection.component';
import { ThiredsectionComponent } from './components/Home/thiredsection/thiredsection.component';
import { FourthsectionComponent } from './components/Home/fourthsection/fourthsection.component';
import { SectionfiveComponent } from './components/Home/sectionfive/sectionfive.component';
import { SectionsixComponent } from './components/Home/sectionsix/sectionsix.component';
import { SectionsevenComponent } from './components/Home/sectionseven/sectionseven.component';
import { ExamComponent } from './components/exam/exam.component';
import { LessonComponent } from './components/lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ErrorComponent,
    AnswersComponent,
    HeaderComponent,
    FooterComponent,
    FirstsectionComponent,
    MasterpageComponent,
    SecondsectionComponent,
    ThiredsectionComponent,
    FourthsectionComponent,
    SectionfiveComponent,
    SectionsixComponent,
    SectionsevenComponent,
    ExamComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
