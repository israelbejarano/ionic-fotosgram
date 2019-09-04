import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  loginUser = {
    email: 'israel@prueba.com',
    password: '123456'
  };

  registerUser: Usuario = {
    email: 'test@test.com',
    password: '123456',
    nombre: 'test',
    avatar: 'av-1.png'
  };

  constructor(private usuarioService: UsuarioService, private navCtrl: NavController,
              private uiService: UiServiceService) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm) {
    if (fLogin.invalid) { return; }
    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);
    console.log(this.loginUser);
    if (valido) {
      // navegar al tabs
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    } else {
      // mostrar alerta usuario password incorrecto
      this.uiService.alertaInformativa('Usuario y contraseña incorrectos');
    }
  }

  async registro(fRegistro: NgForm) {
    console.log(fRegistro.valid);
    if (fRegistro.invalid) { return; }
    const valido = this.usuarioService.registro(this.registerUser);
    if (valido) {
      // navegar al tabs
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    } else {
      // mostrar alerta usuario password incorrecto
      this.uiService.alertaInformativa('El correo electrónico ya existe');
    }
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

}
