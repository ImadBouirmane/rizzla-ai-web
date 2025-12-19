import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonModalComponent } from '../coming-soon-modal/coming-soon-modal.component';

@Component({
  selector: 'app-store-badges',
  standalone: true,
  imports: [CommonModule, ComingSoonModalComponent],
  templateUrl: './store-badges.component.html',
  styleUrl: './store-badges.component.css'
})
export class StoreBadgesComponent {
  isModalOpen = false;
  selectedStore = 'App Store';

  openModal(storeName: string) {
    this.selectedStore = storeName;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
