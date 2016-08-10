import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  styles: [`
    .app-bar {
      height: 65px;
      padding: 5px 30px;
      background-color: rgb(227, 147, 74);
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
   <span class="logo col-xs-10">
     Don't Forget
   </span>
   <nav class="col-xs-2">
     <div class="row middle-xs between-xs">
       <span class="link">Settings</span>
       <span class="link">signout</span>
     </div>
   </nav>
 </header>

`
})

export class AppBar {}
