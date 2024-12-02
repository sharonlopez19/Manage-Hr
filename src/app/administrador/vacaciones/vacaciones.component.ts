import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-vacaciones',
  standalone: true,
  imports: [AppComponent, MenuComponent],
  templateUrl: './vacaciones.component.html',
  styleUrl: './vacaciones.component.css'
})
export class VacacionesComponent {

}
