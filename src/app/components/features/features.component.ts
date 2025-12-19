import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      icon: 'bx-message-rounded-dots',
      title: 'AI-Powered Messages',
      description: 'Generate perfectly matched custom replies and messages that resonate with your partner\'s emotional state.'
    },
    {
      icon: 'bx-mobile-alt',
      title: 'Smart Post Generation',
      description: 'Create engaging social media posts that express your emotions authentically and connect deeply.'
    },
    {
      icon: 'bx-bot',
      title: 'Chat AI Coach',
      description: 'Interact with our intelligent AI coach that guides couples to be more emotional and master their connection.'
    },
    {
      icon: 'bx-heart',
      title: 'Emotional Intelligence',
      description: 'Learn to understand and express emotions better, building stronger bonds with your partner.'
    },
    {
      icon: 'bx-target-lock',
      title: 'Personalized Guidance',
      description: 'Receive tailored advice and suggestions based on your unique relationship dynamics.'
    },
    {
      icon: 'bx-magic-wand',
      title: 'Premium Features',
      description: 'Unlock advanced features with subscription plans designed to deepen your emotional connection.'
    }
  ];
}
