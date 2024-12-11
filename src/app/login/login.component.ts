import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('loginContainer') container!: ElementRef;

  constructor(private router: Router) {}

  toggleRegister(): void {
    this.container.nativeElement.classList.add('active');
  }

  toggleLogin(): void {
    this.container.nativeElement.classList.remove('active');
  }

  onLogin() {
    // Para debuggear, puedes agregar un console.log
    console.log('Navegando a inicio...');
    this.router.navigate(['/directorio'])
      .then(() => console.log('Navegación exitosa'))
      .catch(err => console.error('Error en navegación:', err));
  }

  onVacantes() {
    this.router.navigate(['/principal'])
      .then(() => console.log('Navegación exitosa'))
      .catch(err => console.error('Error en navegación:', err));

  }

  
}
