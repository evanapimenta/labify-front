import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit sidebarToggle when onSidebarToggle is called', () => {
    spyOn(component.sidebarToggle, 'emit');
    component.onSidebarToggle();
    expect(component.sidebarToggle.emit).toHaveBeenCalled();
  });

  it('should toggle user dropdown when toggleUserDropdown is called', () => {
    expect(component.isUserDropdownOpen).toBeFalse();
    component.toggleUserDropdown();
    expect(component.isUserDropdownOpen).toBeTrue();
    component.toggleUserDropdown();
    expect(component.isUserDropdownOpen).toBeFalse();
  });

  it('should logout and navigate to sign-in when logout is called', () => {
    spyOn(localStorage, 'removeItem');
    component.logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith('access');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/sign-in']);
    expect(component.isUserDropdownOpen).toBeFalse();
  });

  it('should have default user profile data', () => {
    expect(component.userProfile.name).toBe('Evana Pimenta');
    expect(component.userProfile.email).toBe('evana.pimenta@icloud.com');
    expect(component.userProfile.role).toBe('Administrador');
    expect(component.userProfile.avatar).toBe('/assets/images/profile.png');
  });

  it('should handle search change events', () => {
    spyOn(console, 'log');
    component.onSearchChange('test search');
    expect(console.log).toHaveBeenCalledWith('Search term changed:', 'test search');
  });

  it('should handle search events', () => {
    spyOn(console, 'log');
    component.onSearch('test search');
    expect(console.log).toHaveBeenCalledWith('Search executed:', 'test search');
  });
});
