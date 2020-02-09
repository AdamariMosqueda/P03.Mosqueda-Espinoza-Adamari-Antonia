
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {

  constructor(private routes: Router ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.routes.navigateByUrl('login');
    }, 5000);
  }

}