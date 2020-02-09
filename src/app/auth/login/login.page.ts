import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {
  user: string;
  pass: string;
  constructor() { }

  ngOnInit() {
  }
signIn(){
  console.log(`El usuario es: ${this.user} y la contraseña es ${this.pass}`);
}
}
