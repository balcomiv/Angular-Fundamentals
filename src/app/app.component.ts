import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
     <passenger-dashboard></passenger-dashboard>
    </div>
  `
})
export class AppComponent {
  title = 'Ultimate Angular';
  name: string = "Todd";
  logo: string = "img/logo.svg";

  onInput(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  onBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  onClick() {
    this.name = "Motto";
  }
}
