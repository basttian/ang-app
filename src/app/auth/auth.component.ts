import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { Router } from '@angular/router';
// Importamos la componente sidenav par utilizar ' close function'
import {SidenavComponent} from '../component/sidenav/sidenav.component'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})


export class AuthComponent implements OnInit {

  @Output() userName = new EventEmitter();

  constructor(public auth:AngularFireAuth, public routes:Router, public drawer: SidenavComponent) { }

  public login(){
     this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
  public logout(){
      this.auth.signOut()
      .then(()=>{
        this.routes.navigate(['home'])
        this.drawer.close()
      })
      .catch((error)=>{ console.log(error)});
    }

  ngOnInit(): void {

    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed In')
        this.userName.emit(user.displayName);
        this.routes.navigate(['desktop'])
      } else {
        this.userName.emit('');
        console.log('User is signed Out')
        this.routes.navigate(['home'])
      }
    })
  }

}
