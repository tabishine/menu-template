import { Component } from "@angular/core";
import { App, MenuController } from "ionic-angular";

// @Component({
//   templateUrl: 'menu.html'
// })
@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle icon-only>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title> Menu </ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <button ion-button round block menuToggle>Toggle Menu</button>
    </ion-content>
  `
})
export class MenuPage {
  constructor(public app: App, menu: MenuController) {
    menu.enable(false);
  }
}
