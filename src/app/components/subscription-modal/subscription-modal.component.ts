import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscription-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription-modal.component.html',
  styleUrl: './subscription-modal.component.css'
})
export class SubscriptionModalComponent implements OnInit {
  @Input() isOpen = false;
  @Input() planName = '';
  @Input() planPrice = '';
  @Output() close = new EventEmitter<void>();

  isIOS = false;
  isAndroid = false;
  appStoreUrl = 'https://apps.apple.com/app/rizzla-ai';
  playStoreUrl = 'https://play.google.com/store/apps/details?id=com.rizzlaai.app';

  ngOnInit() {
    this.detectPlatform();
  }

  detectPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      this.isIOS = true;
    }
    // Android detection
    else if (/android/i.test(userAgent)) {
      this.isAndroid = true;
    }
  }

  redirectToStore() {
    if (this.isIOS) {
      this.openUrl(this.appStoreUrl);
    } else if (this.isAndroid) {
      this.openUrl(this.playStoreUrl);
    }
    this.closeModal();
  }

  openUrl(url: string) {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }
}
