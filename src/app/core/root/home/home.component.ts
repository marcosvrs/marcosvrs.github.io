import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  host: {
    class: 'container-fluid'
  },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() { }
}
