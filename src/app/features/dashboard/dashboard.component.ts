import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  allQuestions = [];
  subComment: string;
  currentUser: string;


  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser');
    this.allQuestions = JSON.parse(localStorage.getItem('allQuestions'));

    if (!this.allQuestions){ this.allQuestions = []; }
  }

  questionAdded(event: any){

    this.allQuestions.push(event);
    localStorage.setItem('allQuestions', JSON.stringify(this.allQuestions));
  }



}
