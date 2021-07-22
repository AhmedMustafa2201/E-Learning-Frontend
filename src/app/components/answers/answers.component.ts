import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from 'src/services/answer.service';
import { QuestionService } from 'src/services/question.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit, OnDestroy {
  id:number=0
  private subscriptions: Subscription[] = [];

  allAnswers:any=[]
  questions:any=[]
  otherAnswers:any=[]

  bestAnswer:any
  questionDetails:any
  answer:string=""

  constructor(private myService: AnswerService, private qService: QuestionService,
    activated:ActivatedRoute, private router: Router) {
    this.id = activated.snapshot.params["id"];
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnDestroy(): void {
    for(let sub of this.subscriptions){
      sub.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.getQuestionDetail(this.id)
    this.getAllData(this.id)
    this.getquestions()
  }

  getquestions(){
    this.subscriptions.push(
    this.qService.getAllWithLimited().subscribe(
      (res)=>this.questions=res,
      (err)=>console.error(err)
    ))
  }

  getEstimatedDate(date: string): string {
    return moment(date).locale('ar').fromNow();
  }

  getAllData(id:number){
    this.subscriptions.push(
    this.myService.getAllByQuestion(id).subscribe(
      (res)=>{
        this.allAnswers=res
        this.bestAnswer=this.allAnswers.sort(function (a: any, b: any) {
          return a.evaluation<b.evaluation
        })[0]

        this.otherAnswers = this.allAnswers.filter( (p: any) => {
          return p.id != this.bestAnswer.id;
        });
        // this.otherAnswers.pop()
      },
      (err)=>console.error(err)
    ))
  }

  getQuestionDetail(id:number){
    this.subscriptions.push(
    this.qService.getByID(id).subscribe(
      (res)=>{
        this.questionDetails=res
      },
      (err)=>console.error(err)
    ))
  }


  increaseEval(up: HTMLElement, down: HTMLElement) {
    if (!up.classList.contains('text-muted')) {
      this.questionDetails.evaluation++
      this.qService.update(this.id, this.questionDetails).subscribe(
        (res) => {
          up.classList.add('text-muted');
          down.classList.remove('text-muted');
        },
        (err) => console.error(err)
      );
    }
    console.log(this.questionDetails)
  }

  decreaseEval(up: HTMLElement, down: HTMLElement) {
    if (!down.classList.contains('text-muted')) {

      if (this.questionDetails.evaluation != 0) {
        this.questionDetails.evaluation--;
        this.qService.update(this.id, this.questionDetails).subscribe(
          (res) => {
            down.classList.add('text-muted');
            up.classList.remove('text-muted');
          },
          (err) => console.error(err)
        );
      }
    }
  }
  ////////////////////////////////////////////////////
  increaseAnsEval(id:number, up: HTMLElement, down: HTMLElement){
    debugger
    let ss = this.allAnswers.filter(function (p: any) {
      return p.id == id;
    });
    console.log(ss)
    if (!up.classList.contains('text-muted')) {
      ss[0].evaluation++
      this.myService.update(id, ss[0]).subscribe(
        (res) => {
          up.classList.add('text-muted');
          down.classList.remove('text-muted');
        },
        (err) => console.error(err)
      );
    }
  }

  decreaseAnsEval(id:number, up: HTMLElement, down: HTMLElement){
    if (!down.classList.contains('text-muted')) {
      let ss = this.allAnswers.filter(function (p: any) {
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
  ////////////////////////////////////////////////////
  AddData(){
    let date=new Date()
    let answerObj:any={
      content:this.answer,
      createdAt: date.toUTCString(),
      evaluation:0,
      questionID:this.id,
      user: {
        id: 1,
        name: 'hsn mohammed',
        photo:
          'https://lh3.googleusercontent.com/a-/AOh14GivB7p6yl_U3CC8bDpmPJ-Yixf3nDgYMLaVHgUc=s96-c',
      }
    }

    this.myService.add(answerObj).subscribe(
      (res)=>{
        console.log(res)
        this.getAllData(this.id)
      },
      (err)=>console.error(err)
    )
  }
}
