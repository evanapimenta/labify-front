import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IconMenuComponent } from '../../icons/icon-menu';
import { IconUserComponent } from '../../icons/icon-user';
import { SearchInputComponent } from '../search-input/search-input.component';
import { environment } from '../../../../environment';

interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IconMenuComponent, IconUserComponent, SearchInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() sidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();
  
  logo = environment.logo;
  isUserDropdownOpen = false;
  
  userProfile: UserProfile = {
    name: 'Evana Pimenta',
    email: 'evana.pimenta@icloud.com',
    role: 'Administrador',
    avatar: '/assets/images/profile.png'
  };

  constructor(private router: Router) {}

  onSidebarToggle() {
    this.sidebarToggle.emit();
  }

  toggleUserDropdown() {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  logout() {
    localStorage.removeItem('access');
    this.router.navigate(['/sign-in']);
    this.isUserDropdownOpen = false;
  }

  onSearchChange(searchTerm: string) {
    console.log('Search term changed:', searchTerm);
  }

  onSearch(searchTerm: string) {
    console.log('Search executed:', searchTerm);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const userDropdown = target.closest('[data-user-dropdown]');
    
    if (!userDropdown && this.isUserDropdownOpen) {
      this.isUserDropdownOpen = false;
    }
  }
}
