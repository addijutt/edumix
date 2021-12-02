import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  grade = [
    { id: 1, name: 'Grade Here' },
    { id: 2, name: 'Grade Here' },
    { id: 3, name: 'Grade Here' },
    { id: 4, name: 'Grade Here' },
];

detail =[
  {name: "Chemistry - 2022 Theory - Nugegoda"},
  {name: "Chemistry - 2022 Theory - Nugegoda"},
  {name: "Chemistry - 2022 Theory - Nugegoda"},
  {name: "Chemistry - 2022 Theory - Nugegoda"},

]

  constructor() { }

  ngOnInit(): void {
  }

}
