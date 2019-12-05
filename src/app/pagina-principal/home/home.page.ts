import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titpag = "Página Principal";
  
  listado:any = [{"id":1,"email":"Jorge.blanco@Gmail.com","first_name":"Jorge","last_name":"Blanco","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},{"id":2,"email":"jaime.Lorca@hotmail.com","first_name":"Jaime","last_name":"Lorca","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":3,"email":"Diego.Lopezg@icloud.com","first_name":"Diego","last_name":"Lopez","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},{"id":4,"email":"Matias.Diaz@Gmail.es","first_name":"Matias","last_name":"Diaz","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},{"id":5,"email":"charles.morris@hotmail.com","first_name":"Charles","last_name":"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},{"id":6,"email":"tomas.ramos@icloud.com","first_name":"Tomas","last_name":"Ramos","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"},{"id":7,"email":"andres.lazcano@gmail.es","first_name":"Andres","last_name":"Lazcano","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"},{"id":8,"email":"luis.fereira@gmail.com","first_name":"Luis","last_name":"Fereira","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"},{"id":9,"email":"alberto.faundez@hotmail.com","first_name":"Alberto","last_name":"Faundez","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"},{"id":10,"email":"byron.caceres@gmail.es","first_name":"Byron","last_name":"Caceres","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"}]; 

  constructor(
    public navCtrl: NavController
  ) {
    console.log('listado');
  }
  irA(usuario) {
    let parametros: NavigationExtras = {
      queryParams: {
      dUsuarios: JSON.stringify(usuario)
      }
      };
    this.navCtrl.navigateForward(['pagina-principal'], parametros);
    }

}
