import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MessageService } from 'primeng/api';

interface QuestionInterface {
  'id': number;
  'content': string;
  'date': any;
  'author': string;
  'comment'?: any;
  'tags'?: Array<any>;
  'answers'?: Array<any>;
  'currentAnswered'?: boolean;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [MessageService]
})
export class PostComponent implements OnInit {

  dropdownList = [];
  selectedTags = [];
  question: string;
  user: any;
  dropdownSettings: IDropdownSettings;
  @Output() questionContent = new EventEmitter();

  constructor(private messageService: MessageService) { }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.dropdownList = [
      { id: 'science', value: 'Science' },
      { id: 'history', value: 'History' },
      { id: 'politics', value: 'Politics' },
      { id: 'literature', value: 'Literature' },
      { id: 'socialLife', value: 'Social Life' },
      { id: 'arts', value: 'Arts' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'value',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    this.selectedTags.push(item);
  }
  onSelectAll(items: any) {
    this.selectedTags = items;
  }

  onItemDeSelect(item: any) {
    console.log(item);
    this.selectedTags = this.selectedTags.filter(tag => {
      return tag.id !== item.id;
    });

    console.log(this.selectedTags);
  }

  onDeSelectAll(item: any) {
    this.selectedTags = [];
  }

  addQuestion() {

    const question: QuestionInterface = {
      id: new Date().getMilliseconds(),
      content: this.question,
      date: new Date().toDateString(),
      answers: [],
      tags: this.selectedTags,
      author: this.user.userName,
      comment: [],
      currentAnswered: false
    };
    this.messageService.add({
      severity: 'success',
      summary: 'Question Added',
      detail: 'Your question has been added Successfully.We are reaching out to experts to get the answer'
    }
    );
    this.questionContent.emit(question);
  }

}
