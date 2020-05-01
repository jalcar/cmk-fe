import { Component, OnInit } from '@angular/core';
import { CmkService } from '../../services/cmk.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  UrlBaseImg = 'https://my2.digitalexperience.ibm.com';
  contenidos: any;

  constructor(
    private srvCMK: CmkService
  ) {
    srvCMK.getContenidos().subscribe(
    respOK => {
      console.log(respOK);
      this.contenidos = respOK;
    },
    respER => {

    });
  }

  ngOnInit() {
  }

}
