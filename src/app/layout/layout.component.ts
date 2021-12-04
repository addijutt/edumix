import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  path: string = null;

  isSidebar = true;
  constructor() {}

  ngOnInit(): void {}

  receiveMessage(val: string): void {
    console.log('in');
    console.log(val);
    this.path = val;
    console.log(this.path);
  }
}
