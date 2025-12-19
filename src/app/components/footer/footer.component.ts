import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreBadgesComponent } from '../store-badges/store-badges.component';
import { ComingSoonModalComponent } from '../coming-soon-modal/coming-soon-modal.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, StoreBadgesComponent, ComingSoonModalComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  isSocialModalOpen = false;
  socialPlatform = '';

  openSocialModal(platform: string) {
    this.socialPlatform = platform;
    this.isSocialModalOpen = true;
  }

  closeSocialModal() {
    this.isSocialModalOpen = false;
  }
}
