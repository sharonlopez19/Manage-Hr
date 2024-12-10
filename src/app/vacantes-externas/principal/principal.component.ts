import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  onEdit() {
    console.log('Editar acción ejecutada');
    // Lógica para editar el elemento
  }

  confirmDelete() {
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
        // Llama la lógica de eliminación
        this.deleteItem();

        // Muestra el mensaje de éxito
        Swal.fire(
          '¡Eliminado!',
          'El elemento ha sido eliminado correctamente.',
          'success'
        );
      }
    });
  }

  deleteItem() {
    console.log('Elemento eliminado');
    // Aquí puedes agregar tu lógica para eliminar el elemento, como un servicio HTTP.
  }
}
