import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { NavigationEnd } from '@angular/router';

@Injectable()
export class Projects {
    http: Http
    httpClient: HttpClient
    constructor(private router: Router){
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function(){
           return false;
        }
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
               // trick the Router into believing it's last link wasn't previously loaded
               this.router.navigated = false;
               // if you need to scroll back to top, here is the right place
               window.scrollTo(0, 0);
            }
        });
    }

    resolve() {
            
    }
}
