import { Component, Input } from '@angular/core';  // Asegúrate de importar Input

@Component({
  selector: 'app-titulo',
  standalone: true,
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent {
  @Input() title: string = '';  // Asegúrate de definir el Input

}
