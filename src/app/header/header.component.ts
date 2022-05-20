import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;
  @Output() sectionEvent = new EventEmitter<string>();

  onSectionClick(section: string) {
    console.log(section + ' clicked');

    this.sectionEvent.emit(section);
  }
}
