import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoutesGroup } from 'src/app/models/routes-group.model';

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

  selectRoute(path: string) {
    this.onRouteSelected.emit(path);
  }
}