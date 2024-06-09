import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  AllLinks: Link[] = [
    {
      title: 'Home',
      links: '/dashboard/home',
    },
    {
      title: 'Management',
      links: '/dashboard/management',
    },
    {
      title: 'Login',
      links: '/login',
    },
  ];
}

interface Link {
  title: string;
  links: string;
}
