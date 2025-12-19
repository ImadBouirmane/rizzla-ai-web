import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coming-soon-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coming-soon-modal.component.html',
  styleUrl: './coming-soon-modal.component.css'
})
export class ComingSoonModalComponent {
  @Input() isOpen = false;
  @Input() storeName = 'App Store';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }
}
