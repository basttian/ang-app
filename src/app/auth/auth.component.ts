import { Component, OnInit, Output, EventEmitter, ɵɵtrustConstantResourceUrl  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { Router } from '@angular/router';
// Importamos la componente sidenav par utilizar ' close function'
import {SidenavComponent} from '../component/sidenav/sidenav.component'
import {SnackbarService} from '../services/snackbar.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[]
})


export class AuthComponent implements OnInit {

  constructor(public auth:AngularFireAuth, public routes:Router, public drawer: SidenavComponent, public snackbar:SnackbarService) { }

  public login(){
     this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch((e)=>{
       this.snackbar.openSnackBar(e.message,'')
     })
    }
  public logout(){
      this.auth.signOut()
      .then(()=>{
        this.routes.navigate(['home'])
        this.drawer.close()
      })
      .catch((error)=>{ console.log(error)});
    }

  ngOnInit(): void {}
  
}
