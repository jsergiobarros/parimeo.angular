import {Component, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Output() click = new EventEmitter();
  constructor() {

  }
  onClick(){
    this.click.emit();
  }
  ngOnInit() {
  }
}
