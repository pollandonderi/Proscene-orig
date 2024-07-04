import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const primaryNav = document.querySelector('.primary-navigation');
    const navMobile = document.querySelector('.mobile-nav-toggle');

    navMobile?.addEventListener('click', () => {
      const visibility = primaryNav?.getAttribute('data-visible');

      if (!visibility || visibility === 'false') {
        primaryNav?.setAttribute('data-visible', 'true');
        navMobile.setAttribute('aria-expanded', 'true');
      } else {
        primaryNav?.setAttribute('data-visible', 'false');
        navMobile.setAttribute('aria-expanded', 'false');
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (!primaryNav?.contains(target) && !target.closest('.dropdown-content')) {
        this.closeAllDropdowns();
      }
    });
  }

  closeAllDropdowns(): void {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(dropdown => {
      (dropdown as HTMLElement).style.display = "none";
    });
  }

  toggleDropdown(event: Event): void {
    event.stopPropagation(); // Prevent click event from propagating

    // Close all other dropdowns
    this.closeAllDropdowns();

    // Open the clicked dropdown
    const dropdownBtn = event.currentTarget as HTMLElement;
    const dropdownContent = dropdownBtn.nextElementSibling as HTMLElement;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }
}
