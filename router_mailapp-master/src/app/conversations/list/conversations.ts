import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/mergeAll';

import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {Conversation} from '../../shared/model';

@Component({
  templateUrl: './conversations.html',
  styleUrls: ['./conversations.css']
})
export class ConversationsCmp {
  folder: Observable<string>;
  conversations: Observable<Conversation[]>;

  constructor(route: ActivatedRoute) {
    this.folder = route.params.pluck('folder');
    this.conversations = (<any>route.data.pluck('conversations')).mergeAll();
  }
}