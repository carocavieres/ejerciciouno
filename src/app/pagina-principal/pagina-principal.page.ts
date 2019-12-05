import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {

  datos: any;

  nombrePagina = "Detalle contacto"
  constructor(
    private ActivatedRoute: ActivatedRoute
  ) {
    this.datos = this.ActivatedRoute.queryParams.subscribe(datosRecibidos =>{
      this.datos = JSON.parse(datosRecibidos['dUsuarios']);
      console.log(this.datos);
    })
   }

  ngOnInit() {
   
    
  }


}


