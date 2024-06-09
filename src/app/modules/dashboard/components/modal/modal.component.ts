import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input('open') open: boolean | undefined;

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  handleClose(): void {
    this.open = false;
    this.close.emit(this.open);
  }
}
