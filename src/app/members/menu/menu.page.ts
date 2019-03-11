import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';
 
  pages = [
    {
      title: 'dashboard',
      url: '/menu/dashboard',
      icon: 'home'
    },
    {
      title: 'Cool Frameworks',
      children: [
        {
          title: 'Ionic',
          url: '/menu/first',
          icon: 'logo-ionic'
        },
        {
          title: 'Flutter',
          url: '/menu/second',
          icon: 'logo-google'
        },
      ]
    },
  ];
 
  constructor(private router: Router, private authService: AuthenticationService) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
 
  ngOnInit() {
 
  }
  logout() {
    console.log('Logout');
    this.authService.logout();
  }
 
}
