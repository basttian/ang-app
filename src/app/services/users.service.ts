import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private userSource = new BehaviorSubject<string>('')
  public userInLine$ = this.userSource.asObservable() 

  constructor(public auth:AngularFireAuth,public routes:Router) { 

    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed In')
        this.userSource.next(user.displayName)
        this.routes.navigate(['desktop'])
      } else {
        console.log('User is signed Out')
        this.routes.navigate(['home'])
      }
    })

  }

  ngOnInit(): void {
   
  }


}
