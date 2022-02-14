import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss']
})
export class DescriptionsComponent implements OnInit {

  constructor(private router:Router , private service:ServicesService) { }

  // AQUI SE CARGAN LAS IMAGENES Y EL RESPECTIVO NOMBRE DE CADA UNA
  imagenes = [
    {
      "imagen":"../../../assets/image1.jpg",
      "anime":"kimetsu"
    },

    {
      "imagen":"../../../assets/image2.jpg",
      "anime":"jujutsu"
    },

    {
      "imagen":"../../../assets/image3.jpg",
      "anime":"atack"
    }

  ]

  anime = "";
  descripcion = "";
  catologo = "";
  img = "";

  ngOnInit(): void {
    this.mostrarDescripcion();
  }


  // ESTA FUNCION LO QUE PERMITE ES DIRIGIR A LA PAGINA breadcumb1
  verCatalogo(){
    this.router.navigateByUrl('/breadcumb1');
  }


  // AQUI MUESTRA LA RESPECTIVA DESCRIPCION CUANDO SELECCIONEN UNA YA SEA DE CATOLOGO 1 O CATOLOGO 2
  mostrarDescripcion(){
    let data=this.service.devolver();
    this.anime=data[0]["anime"];
    this.descripcion=data[0]["descripcion"];
    this.catologo=data[0]["catologo"];
    this.img=data[0]["imagen"];
  }
}
