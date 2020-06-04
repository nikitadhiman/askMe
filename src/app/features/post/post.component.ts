import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MessageService } from 'primeng/api';

interface questionInterface{
  'id' : number;
  'content' : string,
  'date' : Date,
  'author' : string,
  'comment'? : any,
  'tags'? : Array<any>,
  'addComment'? : boolean
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers:[MessageService]
})
export class PostComponent implements OnInit {

  dropdownList = [];
  selectedTags = [];
  question : string;
  dropdownSettings: IDropdownSettings;
  @Output() questionContent = new EventEmitter();

  constructor(private messageService : MessageService){}
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
      itemsShowLimit: 3,
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
    let question : questionInterface = {
      'id' : new Date().getMilliseconds(),
      'content' : this.question,
      'date' : new Date(),
      'addComment' : false,
      'tags' : this.selectedTags,
      'author' : localStorage.getItem("currentUser"),
      'comment' : []
    }
    this.questionContent.emit(question);
  }

}
