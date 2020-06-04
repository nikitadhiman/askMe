import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MessageService } from 'primeng/api';

interface questionInterface{
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
  dropdownSettings: IDropdownSettings;
  @Output() questionContent = new EventEmitter();

  constructor(private messageService: MessageService){}
  ngOnInit() {
    this.dropdownList = [
      { item_id: 'science', item_text: 'Science' },
      { item_id: 'history', item_text: 'History' },
      { item_id: 'politics', item_text: 'Politics' },
      { item_id: 'literature', item_text: 'Literature' },
      { item_id: 'socialLife', item_text: 'Social Life' },
      { item_id: 'arts', item_text: 'Arts' }
    ];
    this.dropdownSettings  = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    this.selectedTags = item;
  }
  onSelectAll(items: any) {
    this.selectedTags = items;
  }

  addQuestion(){

    const question: questionInterface = {
      id : new Date().getMilliseconds(),
      content : this.question,
      date : new Date().toDateString(),
      answers : [],
      tags : this.selectedTags,
      author : localStorage.getItem('currentUser'),
      comment : [],
      currentAnswered : false
    };
    this.messageService.add({
      severity: 'success',
      summary: 'Question Added',
      detail: 'Your question has been added Successfully.We are reaching out to experts to get the answer'}
    );
    this.questionContent.emit(question);
  }

}
