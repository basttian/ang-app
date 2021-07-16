import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private userSource = new BehaviorSubject<string>('')
  public userInLine$ = this.userSource.asObservable() 

  constructor(public auth:AngularFireAuth,public routes:Router, private _ngZone: NgZone) { 
    
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed In')
        this.userSource.next(user.displayName)
        this._ngZone.run(()=>{
          this.routes.navigate(['desktop'])
        })
      } else {
        console.log('User is signed Out')
        this._ngZone.run(()=>{
          this.routes.navigate(['home'])
        })
      }
    })

  }

  usuarioConectadoActivo(): Promise<any> {
    return this.auth.currentUser
  }

  ngOnInit(): void {}


}
