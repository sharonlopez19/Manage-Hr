import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { CommonModule } from '@angular/common';  // Importa CommonModule
import Swal from 'sweetalert2';

// Definir la interfaz fuera de la clase
export interface Vacante {
  nombre: string;
  cargo: string;
  telefono: string;
  correo: string;
  direccion: string;
  estado: string;
  foto: string;
}

@Component({
  selector: 'app-directorio',
  standalone: true,
  imports: [MenuComponent, FormsModule, CommonModule],  // Agrega CommonModule aquí
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent {

  vacante: Vacante = { nombre: '', cargo: '', telefono: '', correo: '', direccion: '', estado: '', foto: '' };

  vacantes: Vacante[] = [
    { nombre: 'Emma Wilson', cargo: 'Data Analyst', telefono: '321 123 4567', correo: 'emma@company.com', direccion: 'Calle 100 #15-30, Bogotá', estado: 'ACTIVO', foto: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { nombre: 'Noah Smith', cargo: 'UI/UX Designer', telefono: '322 234 5678', correo: 'noah@company.com', direccion: 'Carrera 7 #45-21, Bogotá', estado: 'ACTIVO', foto: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { nombre: 'Sofia Martinez', cargo: 'Marketing Manager', telefono: '323 345 6789', correo: 'sofia@company.com', direccion: 'Avenida 50 #12-10, Medellín', estado: 'INACTIVO', foto: 'https://randomuser.me/api/portraits/women/70.jpg' },
    { nombre: 'James Brown', cargo: 'Software Engineer', telefono: '324 456 7890', correo: 'james@company.com', direccion: 'Calle 200 #10-15, Cali', estado: 'ACTIVO', foto: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { nombre: 'Isabella Garcia', cargo: 'HR Specialist', telefono: '325 567 8901', correo: 'isabella@company.com', direccion: 'Carrera 13 #20-25, Bogotá', estado: 'ACTIVO', foto: 'https://randomuser.me/api/portraits/women/30.jpg' },
    { nombre: 'Mason Davis', cargo: 'Project Manager', telefono: '326 678 9012', correo: 'mason@company.com', direccion: 'Calle 300 #8-12, Barranquilla', estado: 'INACTIVO', foto: 'https://randomuser.me/api/portraits/men/33.jpg' },
    { nombre: 'Ava Lopez', cargo: 'Business Analyst', telefono: '327 789 0123', correo: 'ava@company.com', direccion: 'Avenida 60 #22-30, Bogotá', estado: 'ACTIVO', foto: 'https://randomuser.me/api/portraits/women/42.jpg' },
    { nombre: 'Liam Wilson', cargo: 'Full Stack Developer', telefono: '328 890 1234', correo: 'liam@company.com', direccion: 'Calle 400 #4-10, Medellín', estado: 'ACTIVO', foto: 'https://randomuser.me/api/portraits/men/60.jpg' },
    { nombre: 'Olivia Rodriguez', cargo: 'Graphic Designer', telefono: '329 901 2345', correo: 'olivia@company.com', direccion: 'Carrera 8 #14-18, Bogotá', estado: 'ACTIVO', foto: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { nombre: 'Ethan Clark', cargo: 'Data Scientist', telefono: '330 012 3456', correo: 'ethan@company.com', direccion: 'Avenida 90 #18-25, Cali', estado: 'INACTIVO', foto: 'https://randomuser.me/api/portraits/men/11.jpg' }
  ];
   

  editarVacante(vacante: Vacante) {
    this.vacante = { ...vacante };
  }

  confirmDelete(vacante: Vacante) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Esta acción no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminado!',
          'El elemento ha sido eliminado correctamente.',
          'success'
        );
      }
    });
  }

  

  onSubmit() {
    console.log('Vacante editada:', this.vacante);
  }

}
