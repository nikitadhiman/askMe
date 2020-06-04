import { Component, OnInit, Input } from '@angular/core';
interface answerInterface{
  'id': number;
  'content': string;
  'date': any;
  'author': string;
  'subComment'?: any;
  'tags'?: Array<any>;
}


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor() { }
  @Input() feed: any;
  answer = '';

  ngOnInit(): void {
    console.log(this.feed);
  }

  putAnswer(item: any){
    this.feed.forEach(element => {
      element.currentAnswered = false;
    });
    item.currentAnswered = true;
  }

  cancelAnswer(item: any){
    this.feed.forEach(element => {
      element.currentAnswered = false;
    });
  }

  submitAnswer(item: any){
    const answer: answerInterface = {
      id : Math.random(),
      author : localStorage.getItem('currentUser'),
      content: this.answer,
      date: new Date(),
      subComment: ''
    };
    item.answers.push(answer);
    item.currentAnswered = false;
    localStorage.setItem('allQuestions', JSON.stringify(this.feed));
  }
}
