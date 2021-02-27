import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  //Outputs
  @Output() checkLogout = new EventEmitter<boolean>();
  

  constructor() { }

  ngOnInit(): void {
  }

  setLogin(){
    this.checkLogout.emit(false);
  }

}
