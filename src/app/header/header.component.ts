import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title = 'Welcome to Angular 6 todo app';
  constructor() { }

  ngOnInit() {
  }

  public getDate() {
    return (new Date());
  }
}
