import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  isMenu: boolean = true;

  @Input()
  headerText: string = "";

  @Output()
  onMenuClick: EventEmitter<any> = new EventEmitter<any>();

  clickMenu() {
    this.onMenuClick.emit();
  }
}
