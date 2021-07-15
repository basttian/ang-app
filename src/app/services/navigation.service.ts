import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { Router, NavigationEnd, ActivatedRoute, ParamMap } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = []
  constructor(private router: Router, private location: Location, public route: ActivatedRoute) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }


back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl('/')
    }
  }


home(): boolean{
    return this.router.url === '/home' || this.router.url === '/'
}


// https://nils-mehlhorn.de/posts/angular-navigate-back-previous-page

}
