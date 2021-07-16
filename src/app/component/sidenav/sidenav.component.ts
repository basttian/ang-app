import { Component, OnInit, ViewChild} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDrawer, MatDrawerToggleResult} from '@angular/material/sidenav'; 
import { NavigationService } from '../../services/navigation.service'

import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  
})
export class SidenavComponent implements OnInit {

@ViewChild('drawer') public drawer:MatDrawer;

  constructor(public auth:AngularFireAuth,private navigation: NavigationService, public usuarios:UsersService) { }

  ngOnInit(): void {}

  toggle(): Promise<MatDrawerToggleResult> {
    return this.drawer.toggle()
  }
  close(): Promise<MatDrawerToggleResult> {
    return this.drawer.close()
  }

  // Volver atras
  back(): void {
    this.navigation.back()
  }

  showButtonBack():boolean{
    return this.navigation.home()
  }

}
