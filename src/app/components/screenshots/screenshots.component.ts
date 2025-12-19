import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDataService, Screenshot } from '../../services/website-data.service';

@Component({
  selector: 'app-screenshots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screenshots.component.html',
  styleUrl: './screenshots.component.css'
})
export class ScreenshotsComponent implements OnInit {
  screenshots: Screenshot[] = [
    {
      title: 'AI Chat Coach',
      description: 'Interact with intelligent AI to guide your emotional journey',
      imageUrl: '/placeholder-mobile-1.png'
    },
    {
      title: 'Message Generation',
      description: 'Generate perfectly matched custom replies and messages',
      imageUrl: '/placeholder-mobile-2.png'
    },
    {
      title: 'Emotional Insights',
      description: 'Track and understand your emotional connection patterns',
      imageUrl: '/placeholder-mobile-3.png'
    }
  ];

  constructor(private websiteDataService: WebsiteDataService) {}

  ngOnInit() {
    this.websiteDataService.getScreenshots().subscribe({
      next: (data) => {
        // Only update if we got data from Firestore
        if (data && data.length > 0) {
          this.screenshots = data;
        }
        // Otherwise keep the fallback data defined above
      },
      error: (error) => {
        console.error('Error loading screenshots:', error);
        // Keep fallback data
      }
    });
  }
}
