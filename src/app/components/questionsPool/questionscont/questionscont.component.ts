import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionscont',
  templateUrl: './questionscont.component.html',
  styleUrls: ['./questionscont.component.css']
})
export class QuestionscontComponent implements OnInit {

  constructor() { }
  //just for test
  favoriteSeason: string;
  seasons: string[] = ['الاجابة الاولي', 'الاجابة الثانية', 'الاجابة الثالثة', 'الاجابة الرابعة'];

  ngOnInit(): void {
  }

}
