import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }


  // ESTA FUNCION PERMITE DIRIGIR AL USUARIO A LA PAGINA breadcumb1 DONDE SALE EL CATOLOGO 1
  catalogo1() {
    this.router.navigateByUrl('/breadcumb1');
  }


  // ESTA FUNCION PERMITE DIRIGIR AL USUARIO A LA PAGINA breadcumb2 DONDE SALE EL CATOLOGO 2
  catalogo2() {
    this.router.navigateByUrl('/breadcumb2')
  }

}
