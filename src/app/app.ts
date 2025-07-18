import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { ProductoLista } from "./producto-lista/producto-lista";
//import { RouterModule, RouterOutlet_1 as RouterOutlet } from "../../node_modules/@angular/router/router_module.d";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html'
})
export class App {
  title = 'inventario-app';
}

/*RouterOutlet */