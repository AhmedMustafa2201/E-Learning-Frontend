import {
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { QuestionService } from 'src/services/question.service';
import * as moment from 'moment';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit, OnDestroy {
  constructor(private myService: QuestionService) {}
  ngOnDestroy(): void {
    for(let sub of this.subscriptions){
      sub.unsubscribe()
    }

  }
  private subscriptions: Subscription[] = [];
  question = '';
  questions: any = [];
  copiedQuestions: any = [];
  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.subscriptions.push(
      this.myService.getAll().subscribe(
        (res) => {
          this.questions = res;
          this.copiedQuestions = res;
        },
        (err) => console.error(err)
      )
    )
  }

  ReBind(e: any): void {
    if (e.target.value !== '') {
      let newData = this.questions.filter((p: any) => {
        return p.title.includes(e.target.value);
      });
      this.copiedQuestions = newData;
    } else {
      this.copiedQuestions = this.questions;
    }
    console.log(e.target.value);
  }
  getEstimatedDate(date: string): string {
    return moment(date).locale('ar').fromNow();
  }

  increaseEval(id: number, up: HTMLElement, down: HTMLElement) {
    if (!up.classList.contains('text-muted')) {
      let ss = this.questions.filter(function (p: any) {
        return p.id == id;
      });
      ss[0].evaluation++;
      this.myService.update(id, ss[0]).subscribe(
        (res) => {
          up.classList.add('text-muted');
          down.classList.remove('text-muted');
        },
        (err) => console.error(err)
      );
    }
  }

  decreaseEval(id: number, up: HTMLElement, down: HTMLElement) {
    if (!down.classList.contains('text-muted')) {
      let ss = this.questions.filter(function (p: any) {
        return p.id == id;
      });
      if (ss[0].evaluation != 0) {
        ss[0].evaluation--;
        this.myService.update(id, ss[0]).subscribe(
          (res) => {
            down.classList.add('text-muted');
            up.classList.remove('text-muted');
          },
          (err) => console.error(err)
        );
      }
    }
  }

  Add() {
    let date = new Date();
    let question: any = {
      title: this.question,
      evaluation: 0,
      answerCount: 0,
      views: 0,
      createdAt: date.toUTCString(),
      user: {
        id: 1,
        name: 'hsn mohammed',
        photo:
          'https://lh3.googleusercontent.com/a-/AOh14GivB7p6yl_U3CC8bDpmPJ-Yixf3nDgYMLaVHgUc=s96-c',
      },
    };
    this.myService.add(question).subscribe(
      (res) => this.getAllData(),
      (err) => console.error(err)
    );
  }
}
