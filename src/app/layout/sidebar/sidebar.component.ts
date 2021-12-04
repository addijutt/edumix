import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  name: string = null;

  // path:string=null
  // constructor(private router: Router) {
  //   let arr=this.router.url; //  /routename
  //   let splittedArr=arr.split("/")
  //   this.path=splittedArr[1]
  //   console.log(this.router.url); //  /routename
  // }
  constructor() {}

  ngOnInit(): void {}
  sidebarLgCollapse(val: number) {
    const element = document.getElementsByTagName('body')[0];
    let w = element.offsetWidth;
    if (w < 992) {
      if (element.classList.contains('sidebar-xs')) {
        element.classList.remove('sidebar-xs');
      } else {
        element.classList.add('sidebar-xs');
      }
    }
    if (val === 1) {
      this.name = 'dashbaord';
    } else if (val === 2) {
      this.name = 'teacher';
    } else {
      this.name = null;
    }
console.log("emit");
console.log(this.name);

    this.messageEvent.emit(this.name);
  }
}
