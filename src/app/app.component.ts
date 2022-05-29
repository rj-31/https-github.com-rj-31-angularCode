import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  flag = false;
  arr = [1, 2, 3, 4];
  times = this.arr.length;

  data = [
    {
      name: 'Ruchi',
      age: 23,
      dob: '07-31-1996',
      salary: 100000
    },
    {
      name: 'Sidharth',
      age: 24,
      dob: '05-08-1995',
      salary: 340000
    },
    {
      name: 'Puneet',
      age: 28,
      dob: '07-08-1991',
      salary: 300000
    },
  ];
}
