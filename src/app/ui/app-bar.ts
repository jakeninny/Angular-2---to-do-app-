import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-bar',
  directives: [...ROUTER_DIRECTIVES],
  styles: [`
    .app-bar {
      height: 65px;
      padding: 5px 30px;
      background-color: deeppink;
    }
    .logo {
      color: white;
      font-size: 30px;
      font-weight: 300;
      cursor: pointer;
    }
    .link {
      color: white;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
    }
  `],
  template: `

  <header class="app-bar row middle-xs">
   <span [routerLink]="['']" class="logo col-xs-10">
     Don't Forget
   </span>
   <nav class="col-xs-2">
     <div class="row middle-xs between-xs">
       <span [routerLink]="['', 'about']" class="link">About</span>
       <span class="link">signout</span>
     </div>
   </nav>
 </header>

`
})

export class AppBar {}
