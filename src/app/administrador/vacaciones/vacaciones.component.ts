import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
  agregarVacacion() {
    Swal.fire({
      title: 'Agregar Vacación',
      text: '¿Quieres agregar una nueva vacación?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Agregado!', 'La vacación ha sido agregada.', 'success');
      }
    });
  }
  editarVacacion() {
    // Simulando que los datos de la vacación provienen de la tabla o un modelo
    const vacacion = {
      nombre: '',
      cargo: '',
      fechaInicio: '',
      fechaFin: '',
    };

    Swal.fire({
      title: 'Editar Vacación',
      html: `
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input id="nombre" class="swal2-input" value="${vacacion.nombre}" />
        </div>
        <div class="form-group">
          <label for="cargo">Cargo</label>
          <input id="cargo" class="swal2-input" value="${vacacion.cargo}" />
        </div>
        <div class="form-group">
          <label for="fechaInicio">Fecha Inicio</label>
          <input id="fechaInicio" class="swal2-input" type="date" value="${vacacion.fechaInicio}" />
        </div>
        <div class="form-group">
          <label for="fechaFin">Fecha Fin</label>
          <input id="fechaFin" class="swal2-input" type="date" value="${vacacion.fechaFin}" />
        </div>
      `,
      showCancelButton: true,
      // confirmButtonText: 'Guardar Cambios',
      // cancelButtonText: 'Cancelar',                      Agregar Botones al formulario
      preConfirm: () => {
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const cargo = (document.getElementById('cargo') as HTMLInputElement).value;
        const fechaInicio = (document.getElementById('fechaInicio') as HTMLInputElement).value;
        const fechaFin = (document.getElementById('fechaFin') as HTMLInputElement).value;

        // Aquí puedes realizar la lógica para guardar los cambios
        console.log({ nombre, cargo, fechaInicio, fechaFin });
        Swal.fire('¡Editado!', 'La vacación ha sido editada.', 'success');
      }
    });
  }

  // Función para eliminar una vacación
  eliminarVacacion() {
    Swal.fire({
      title: 'Eliminar Vacación',
      text: '¿Estás seguro que quieres eliminar esta vacación?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Eliminado!', 'La vacación ha sido eliminada.', 'success');
      }
    });
  }

  generarReporte() {
    Swal.fire({
      title: 'Generar Reporte',
      html: `
        <div class="text-start">
          <label for="fechaInicio" class="form-label">Fecha Inicio:</label>
          <input type="date" id="fechaInicio" class="form-control">
        </div>
        <div class="text-start mt-3">
          <label for="fechaFinal" class="form-label">Fecha Final:</label>
          <input type="date" id="fechaFinal" class="form-control">
        </div>
        <div class="text-start mt-3">
          <label for="cargo" class="form-label">Cargo:</label>
          <select id="cargo" class="form-select">
            <option value="" selected>Seleccione un cargo</option>
            <option value="Asesor">Asesor</option>
            <option value="Programador">Programador</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Descargar',
      cancelButtonText: 'Cerrar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Descargado!', 'El reporte se ha descargado exitosamente.', 'success');
      }
    });
  }
}
