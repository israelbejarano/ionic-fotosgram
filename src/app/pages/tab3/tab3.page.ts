import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from '../../services/ui-service.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {};

  constructor(private usuarioService: UsuarioService, private uiService: UiServiceService,
              private postService: PostService) {}

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    console.log(this.usuario);
  }

  async actualizar(fActualizar: NgForm) {
    if (fActualizar.invalid) { return; }

    const actualizado = await this.usuarioService.actualizarUsuario(this.usuario);
    if (actualizado) {
      // toast con mms actualizado
      this.uiService.presentToast('registro actualizado');
    } else {
      // toast con error
      this.uiService.presentToast('no se puedo actualizar');
    }
  }

  logout() {
    this.postService.paginaPosts = 0;
    this.usuarioService.logout();
  }
}
