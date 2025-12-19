import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionModalComponent } from '../subscription-modal/subscription-modal.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, SubscriptionModalComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  isModalOpen = false;
  selectedPlan = { name: '', price: '' };

  openSubscriptionModal(plan: any) {
    this.selectedPlan = { name: plan.name, price: plan.price + ' ' + plan.period };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  plans = [
    {
      name: 'Weekly',
      price: '$3.99',
      period: 'per week',
      description: 'Perfect for trying out Rizzla AI',
      features: [
        'Unlimited message generation',
        'Advanced AI chat coach',
        'Custom reply suggestions',
        'Smart post generation',
        'Priority support',
        'Emotional insights & analytics'
      ],
      cta: 'Subscribe Now',
      popular: false
    },
    {
      name: 'Monthly',
      price: '$9.99',
      period: 'per month',
      description: 'Best value for couples serious about emotional connection',
      features: [
        'Unlimited message generation',
        'Advanced AI chat coach',
        'Custom reply suggestions',
        'Smart post generation',
        'Priority support',
        'Emotional insights & analytics'
      ],
      cta: 'Subscribe Now',
      popular: true
    },
    {
      name: 'Yearly',
      price: '$34.99',
      period: 'per year',
      description: 'Maximum savings for long-term commitment',
      features: [
        'Unlimited message generation',
        'Advanced AI chat coach',
        'Custom reply suggestions',
        'Smart post generation',
        'Priority support',
        'Emotional insights & analytics',
        'Save 70% compared to monthly'
      ],
      cta: 'Subscribe Now',
      popular: false
    }
  ];
}
