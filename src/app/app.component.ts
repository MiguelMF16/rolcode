import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  checkLogout: boolean = true;

  setLogin(){
    
    this.checkLogout = false;
  }

  title = 'rolcode';
}
