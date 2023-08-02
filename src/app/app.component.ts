
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideUpAnimation', [
      state('active', style({ transform: 'translateY(-50px)' })),
      state('inactive', style({ transform: 'translateY(0)' })),
      transition('inactive => active', animate('0.5s ease-in')),
      transition('active => inactive', animate('0.5s ease-out')),
    ]),
  ],
})
export class AppComponent {
  title = 'url-shortener-service'.toUpperCase();

  isHomeRoute!: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomeRoute = event.url === '/';
      }
    });
  }
}
