import { Component, OnInit, ViewChild } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';


// Importamos la componente sidenav par utilizar ' toggle function'
import {SidenavComponent} from '../sidenav/sidenav.component'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public auth:AngularFireAuth, public sidnav: SidenavComponent) { }

  ngOnInit(): void {
  }

  // Abrimos y cerramos el drawer de la componente sidenav
  OpenClose(){
    this.sidnav.toggle()
  }

}
