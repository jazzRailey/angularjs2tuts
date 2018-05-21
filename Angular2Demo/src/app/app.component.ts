import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`,
  //templateUrl : 'app/app.component.html'
 // it's best practice you will only use templateurl if your html tags has more than 3 lines
  template: `<div>
                <h1>{{pageHeader}}</h1>
                <my-employee></my-employee>
            </div>
            `
})
export class AppComponent  { pageHeader = 'Employee Details'; }
