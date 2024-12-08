import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horas-extra',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './horas-extra.component.html',
  styleUrl: './horas-extra.component.css',
})
export class HorasExtraComponent {
  private sweetAlertConfig = {
    confirmButtonColor: '#28a745',
    cancelButtonColor: '#dc3545',
    customClass: {
      popup: 'swal-dark',
      title: 'swal-title',
      confirmButton: 'swal-confirm',
      cancelButton: 'swal-cancel'
    },
    background: '#24293e',
    color: '#ffffff'
  };

  agregarHorasExtras() {
    Swal.fire({
      ...this.sweetAlertConfig,
      title: 'Agregar Horas Extra',
      html: `
        <div class="text-center" style="font-size: 14px;">
          <div class="mb-3">
            <label class="input-label">Empleado:</label>
            <input type="text" class="swal2-input" placeholder="Nombre del empleado" style="height: 36px; font-size: 14px;">
          </div>
          
          <div class="mb-3">
            <label class="input-label">Fecha:</label>
            <input type="date" class="swal2-input" style="height: 36px; font-size: 14px;">
          </div>
          
          <div class="row mb-3">
            <div class="col-6">
              <label class="input-label">Hora Inicio:</label>
              <input type="time" class="swal2-input" style="height: 36px; font-size: 13px;">
            </div>
            <div class="col-6">
              <label class="input-label">Hora Final:</label>
              <input type="time" class="swal2-input" style="height: 36px; font-size: 13px;">
            </div>
          </div>
        </div>
      `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      cancelButtonText: 'Cancelar',
      showCloseButton: true,
      focusConfirm: false,
      width: '32em'
    } as any).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          ...this.sweetAlertConfig,
          title: '¡Agregado!',
          text: 'Las horas extra han sido registradas exitosamente.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  }

  editarHorasExtras() {
    Swal.fire({
      ...this.sweetAlertConfig,
      title: 'Editar Horas Extra',
      html: `
        <div class="text-start">
          <p class="text-muted mb-3">Modifica los campos necesarios:</p>
          <label class="form-label">Fecha:</label>
          <input type="date" class="swal2-input">
          
          <div class="row mt-3">
            <div class="col-6">
              <label class="form-label">Hora Inicio:</label>
              <input type="time" class="swal2-input">
            </div>
            <div class="col-6">
              <label class="form-label">Hora Final:</label>
              <input type="time" class="swal2-input">
            </div>
          </div>
        </div>
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '<i class="bi bi-pencil"></i> Guardar cambios',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          ...this.sweetAlertConfig,
          title: '¡Actualizado!',
          text: 'Los cambios han sido guardados exitosamente.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  }

  eliminarHorasExtras() {
    Swal.fire({
      ...this.sweetAlertConfig,
      title: '¿Eliminar Horas Extra?',
      text: 'Esta acción no se puede deshacer',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: '<i class="bi bi-trash"></i> Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#dc3545',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          ...this.sweetAlertConfig,
          title: '¡Eliminado!',
          text: 'El registro ha sido eliminado.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  }

  generarReporte() {
    Swal.fire({
      ...this.sweetAlertConfig,
      title: 'Generar Reporte',
      html: `
        <div class="text-start">
          <div class="mb-3">
            <label class="form-label">Fecha Inicio:</label>
            <input type="date" class="swal2-input">
          </div>
          
          <div class="mb-3">
            <label class="form-label">Fecha Final:</label>
            <input type="date" class="swal2-input">
          </div>
          
          <div class="mb-3">
            <label class="form-label">Cargo:</label>
            <select class="swal2-select">
              <option value="">Todos los cargos</option>
              <option value="Asesor">Asesor</option>
              <option value="Programador">Programador</option>
              <option value="Manager">Manager</option>
            </select>
          </div>
          
          <div class="mb-3">
            <label class="form-label">Formato:</label>
            <select class="swal2-select">
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
            </select>
          </div>
        </div>
      `,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: '<i class="bi bi-download"></i> Descargar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          ...this.sweetAlertConfig,
          title: '¡Descargando!',
          text: 'El reporte se está generando...',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  }
}
