import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  showLogoutMessage: boolean = false;
  transferAmount: number | null = null;
  isInvalidAmount: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private alertController: AlertController
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
        },
        {
          text: 'Sí',
          handler: () => {
            console.log('Cerrando sesión');
            this.showLogoutMessage = true;
            setTimeout(() => {
              this.showLogoutMessage = false;
              // Aquí puedes agregar la lógica para cerrar sesión (ej: this.router.navigate(['/login']));
            }, 3000);
          },
        },
      ],
    });

    await alert.present();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  validateAmount() {
    if (this.transferAmount === null || (this.transferAmount < 10 && this.transferAmount !== 0)) {
      this.isInvalidAmount = true;
    } else {
      this.isInvalidAmount = false;
    }
  }
}