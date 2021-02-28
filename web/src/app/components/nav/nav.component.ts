import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <ul>
      <li><a [routerLink]="['/home']">Home</a></li>
      <li><a [routerLink]="['/simulator']">Simulador</a></li>
      <li><a [routerLink]="['/team']">Equipa</a></li>
      <li><a [routerLink]="['/admin']">Admin</a></li>
    </ul>
  `,
  styles: [],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
