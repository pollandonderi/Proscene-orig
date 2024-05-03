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
      let isClickInside = primaryNav?.contains(event.target as Node);
      if (!isClickInside) {
        this.closeAllDropdowns();
      }
    });
  }

  closeAllDropdowns(): void {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i] as HTMLElement;
        if (openDropdown.style.display === "block") {
            openDropdown.style.display = "none";
        }
    }
  }

  toggleDropdown(event: Event): void {
    // Close all other dropdowns
    this.closeAllDropdowns();

    // Open the clicked dropdown
    let dropdownBtn = event.target as HTMLElement;
    let dropdownContent = dropdownBtn.nextElementSibling as HTMLElement | null;
    if (dropdownContent !== null) {
        dropdownContent.style.display = "block";
    }
  }
}
