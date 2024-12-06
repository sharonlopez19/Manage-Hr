import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";



@Component({
  selector: 'app-vacaciones',
  standalone: true,
  imports: [MenuComponent],
  // tslint:disable-next-line: max-line-length
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.scss']
})
export class VacacionesComponent {
}
