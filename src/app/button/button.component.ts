import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {

  @Input() text: string
  @Input() color: string
  @Output() btnClickTest = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClickTest() {
    this.btnClickTest.emit()
  }

}
