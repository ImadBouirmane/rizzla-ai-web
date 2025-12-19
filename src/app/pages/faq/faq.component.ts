import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is Rizzla AI?',
      answer: 'Rizzla AI is an emotional intelligence coaching platform that helps couples build deeper emotional connections through AI-powered guidance, personalized message generation, and intelligent conversation coaching.'
    },
    {
      question: 'How does the AI message generation work?',
      answer: 'Our AI analyzes your partner\'s emotional state and communication style to generate perfectly matched custom replies and messages that resonate authentically with them.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take data security seriously. All your conversations and personal information are encrypted and stored securely. We never share your data with third parties.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. Your subscription will remain active until the end of the current billing period.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and PayPal. All payments are processed securely through our payment partners.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! All our premium plans include a 7-day free trial. You can explore all features risk-free before committing to a subscription.'
    },
    {
      question: 'How accurate is the AI coach?',
      answer: 'Our AI coach is trained on emotional intelligence principles and relationship psychology. While it provides valuable guidance, it\'s designed to complement, not replace, professional relationship counseling when needed.'
    },
    {
      question: 'Can I use Rizzla AI on mobile?',
      answer: 'Yes! Rizzla AI is fully responsive and works great on mobile devices. We\'re also working on dedicated mobile apps for iOS and Android.'
    }
  ];

  openIndex: number | null = null;

  toggleFaq(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
