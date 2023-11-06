import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoutesGroup } from 'src/app/models/entities/routes-group.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input()
  routesGroups: RoutesGroup[] = [];

  @Output()
  onRouteSelected: EventEmitter<string> = new EventEmitter<string>();

  isShowing: boolean = true;

  toggle() {
    this.isShowing = !this.isShowing;
  }

  selectRoute(path: string) {
    this.onRouteSelected.emit(path);
  }
}
