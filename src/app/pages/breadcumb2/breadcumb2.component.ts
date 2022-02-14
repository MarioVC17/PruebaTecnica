import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-breadcumb2',
  templateUrl: './breadcumb2.component.html',
  styleUrls: ['./breadcumb2.component.scss']
})
export class Breadcumb2Component implements OnInit {

  constructor(private router:Router , private service:ServicesService ) { }

  // AQUI SE CARGAN LAS IMAGENES Y SE NOMBRA CADA UNO DE LOS CONTENIDOS
  imagenes = [
    {
      "imagen":"../../../assets/image1.jpg",
      "anime":"Kimetsu no yaiba"
    },

    {
      "imagen":"../../../assets/image2.jpg",
      "anime":"Jujutsu kaisen"
    },

    {
      "imagen":"../../../assets/image3.jpg",
      "anime":"Shigeki no kyojin"
    }

  ]

  ngOnInit(): void {
  }


  // ESTA FUNCION ES LA QUE CARGA LA PESTAÑA DE DESCRIPCION CORRESPONDIENTE DE CADA OPCION
  verDescripcion(anime:string, catologo:string,imagen:string){
    this.router.navigateByUrl('/description');
    this.service.enviar(anime,catologo,imagen);
  }


}

