import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  //Outputs
  @Output() checkLogout = new EventEmitter<boolean>();
  @Output() nickName = new EventEmitter<string>();

  //Formularios
  loginUser: FormGroup;

  //endpoint
  urlendpoint: string = "http://localhost:8080/api/usuarios"

  constructor(private httpClient: HttpClient) {
    this.loginUser = new FormGroup({
      usuario: new FormControl(),
      password: new FormControl()
    })
   }

  getClientes(){
    this.httpClient.get(this.urlendpoint).subscribe(data =>{
      console.log(data);
    });
  }
   
  ngOnInit(): void {
  }

  setLogin(){
    this.checkLogout.emit(false);
     if(this.loginUser.get('usuario')?.value !== null){
      let nombre: any =  this.loginUser.get('usuario')?.value;
      this.nickName.emit(nombre);
    } 
    
    console.log(this.loginUser.get('usuario')?.value);
    
  }

}
