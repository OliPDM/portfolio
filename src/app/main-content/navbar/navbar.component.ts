import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})


export class NavbarComponent {
  toggleLanguageIcon() {
    document.getElementById('de_active')?.classList.toggle('dNone');
    document.getElementById('en_active')?.classList.toggle('dNone');
  }
}
