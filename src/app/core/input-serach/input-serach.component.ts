import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-serach',
  templateUrl: './input-serach.component.html',
  styleUrls: ['./input-serach.component.css']
})
export class InputSerachComponent implements OnInit {

  @Output() keyword: EventEmitter<string> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  getKeyword(event) {
    let value = event.target.value;
    this.keyword.emit(value)
  }

}
