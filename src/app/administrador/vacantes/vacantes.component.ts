import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-vacantes',
  standalone: true,
  imports: [MenuComponent, NavComponent],
  templateUrl: './vacantes.component.html',
  styleUrl: './vacantes.component.css'
})
export class VacantesComponent {

}
