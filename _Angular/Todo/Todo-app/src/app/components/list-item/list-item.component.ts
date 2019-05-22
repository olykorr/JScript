import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item = '';
  @Output() itemChange = new EventEmitter();
  @Input() index = 0;
  @Output() remove = new EventEmitter();
  //todo = JSON.parse(localStorage.todo || '[]');

  edit_param = false;

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.itemChange.emit('');
  }

  remove2() {
    this.remove.emit(this.index);
  }

  edit() {
    this.edit_param = true;
  }

  apply() {
    this.edit_param = false;
    this.itemChange.emit(this.item);
    }

}
