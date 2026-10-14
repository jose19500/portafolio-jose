import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  formStatus: 'idle' | 'sending' | 'sent' | 'error' = 'idle';

  onSubmit() {
    this.formStatus = 'sending';
    setTimeout(() => {
      this.formStatus = 'sent';
      this.contactForm = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => this.formStatus = 'idle', 5000);
    }, 1500);
  }
}
