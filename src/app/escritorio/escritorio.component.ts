import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'


@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {

  constructor(public usuario: UsersService) { }

  user = null

  ngOnInit(): void {

    this.usuario.usuarioConectadoActivo().then(resp => {
      this.user =  resp
      return this.user
    })

  }

}
