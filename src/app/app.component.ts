import { Component } from '@angular/core';
import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor() {
    this.links = [
      new Link('Aular', 'http://angular.io', 40),
      new Link('NIno nino', 'http://google.es', 10),
    ];
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement){
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
}
