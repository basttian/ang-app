import { Component, OnInit, ViewChild} from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { MatDrawer, MatDrawerToggleResult} from '@angular/material/sidenav'; 
import { AuthComponent } from '../../auth/auth.component';

import { NavigationService } from '../../services/navigation.service'


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

userInLineAuth: string | null;

@ViewChild('drawer') public drawer:MatDrawer;

  constructor(public auth:AngularFireAuth,private navigation: NavigationService) { }

  ngOnInit(): void {}

  toggle(): Promise<MatDrawerToggleResult> {
    return this.drawer.toggle()
  }
  close(): Promise<MatDrawerToggleResult> {
    return this.drawer.close()
  }

  userInLine(u){
    this.userInLineAuth =  u
  }

  // Volver atras
  back(): void {
    this.navigation.back()
  }

  showButtonBack():boolean{
    return this.navigation.home()
  }

}
