import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';  // Importa AlertController

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  showLogoutMessage: boolean = false; // Variable para controlar la visibilidad del mensaje

  constructor(
    private router: Router,
    private location: Location,
    private alertController: AlertController  // Inyecta AlertController
  ) {}

  async confirmLogout() {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: '¿Deseas cerrar sesión?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cierre de sesión cancelado');
          }
        }, {
          text: 'Sí',
          handler: () => {
            console.log('Cerrando sesión');
            this.showLogoutMessage = true; // Muestra el mensaje
            setTimeout(() => {
              this.showLogoutMessage = false; // Oculta el mensaje después de 3 segundos
              // Aquí puedes agregar la lógica para cerrar sesión (ej: this.router.navigate(['/login']));
            }, 3000);
          }
        }
      ]
    });

    await alert.present();
  }

  goToHome() {
    this.router.navigate(['/home']);  // Reemplaza '/home' con la ruta de tu página de inicio
  }
}