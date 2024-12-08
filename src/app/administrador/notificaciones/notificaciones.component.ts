import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { TituloComponent } from '../titulo/titulo.component'; // Importar el TituloComponent
import { CommonModule } from '@angular/common';

declare var bootstrap: any; // Declarar Bootstrap para evitar errores

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [MenuComponent, TituloComponent, CommonModule,], // Asegurarse de que el componente Titulo esté importado
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
  title: string = "Notificaciones"; // Título para el componente

  // Objeto para almacenar los datos de la notificación seleccionada
  selectedNotification: any = null;

  // Función para mostrar el modal de detalles
  openDetailsModal(notification: any) {
    this.selectedNotification = notification;
    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
      const bootstrapModal = new bootstrap.Modal(modalElement); // Crear una instancia del modal
      bootstrapModal.show(); // Mostrar el modal
    }
  }

  // Función para aceptar una solicitud
  acceptRequest() {
    Swal.fire('¡Solicitud aceptada!', 'La solicitud ha sido aprobada.', 'success');
    this.closeModal();
  }

  // Función para rechazar una solicitud
  rejectRequest() {
    Swal.fire('Solicitud rechazada', 'La solicitud ha sido rechazada.', 'info');
    this.closeModal();
  }

  // Función para cerrar el modal
  closeModal() {
    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
      const bootstrapModal = bootstrap.Modal.getInstance(modalElement); // Obtener la instancia del modal
      bootstrapModal?.hide(); // Cerrar el modal
    }
  }

  // Función para mostrar el alerta de confirmación al eliminar una notificación
  showDeleteAlert() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta notificación se eliminará.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminada!', 'La notificación ha sido eliminada.', 'success');
        // Aquí podrías agregar la lógica para eliminar la notificación del DOM
      }
    });
  }
}
