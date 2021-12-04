import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  public selectedIndex: number;
  

  grade = [
    { id: 1, name: 'Grade Here' },
    { id: 2, name: 'Grade Here' },
    { id: 3, name: 'Grade Here' },
    { id: 4, name: 'Grade Here' },
];

subject = [
  { id: 1, name: 'Subject Here' },
  { id: 2, name: 'Subject Here' },
  { id: 3, name: 'Subject Here' },
  { id: 4, name: 'Subject Here' },
];
medium = [
  { id: 1, name: 'Medium Here' },
  { id: 2, name: 'Medium Here' },
  { id: 3, name: 'Medium Here' },
  { id: 4, name: 'Medium Here' },
];
  teacher = [
    {name: "Charitha Dissanayake", imgUrl: "assets/images/user1.png"},
    {name: "Charitha Dissanayake", imgUrl: "assets/images/user2.png"},
    {name: "Charitha Dissanayake", imgUrl: "assets/images/user1.png"},
    {name: "Charitha Dissanayake", imgUrl: "assets/images/user2.png"},
    {name: "Charitha Dissanayake", imgUrl: "assets/images/user1.png"},
    {name: "Charitha Dissanayake", imgUrl: "assets/images/user1.png"},
    {name: "Charitha Dissanayake", imgUrl: "assets/images/user1.png"},
    {name: "Charitha Dissanayake", imgUrl: "assets/images/user1.png"},

  ]

  constructor() { }

  ngOnInit(): void {
    this.selectedIndex = 0;
    
  }

 

}
