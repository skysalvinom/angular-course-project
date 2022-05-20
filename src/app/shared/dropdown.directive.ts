import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class dropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elemRef: ElementRef) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //this.isOpen = !this.isOpen;
    this.isOpen = this.elemRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
