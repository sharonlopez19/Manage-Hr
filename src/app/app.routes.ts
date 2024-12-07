import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './administrador/menu/menu.component';
import { InicioComponent } from './administrador/inicio/inicio.component';
import { DirectorioComponent } from './administrador/directorio/directorio.component';
import { VacantesComponent } from './administrador/vacantes/vacantes.component';
import { VacacionesComponent } from './administrador/vacaciones/vacaciones.component';
import { IncapacidadesComponent } from './administrador/incapacidades/incapacidades.component';
import { HorasExtraComponent } from './administrador/horas-extra/horas-extra.component';
import { NotificacionesComponent } from './administrador/notificaciones/notificaciones.component';
import { TituloComponent } from  './administrador/titulo/titulo.component'

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'directorio', component: DirectorioComponent },
  { path: 'vacantes', component: VacantesComponent },
  { path: 'vacaciones', component: VacacionesComponent },
  { path: 'incapacidades', component: IncapacidadesComponent },
  { path: 'horas-extra', component: HorasExtraComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'titulo', component: TituloComponent },
  
];
