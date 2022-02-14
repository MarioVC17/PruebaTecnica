import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-breadcumb1',
  templateUrl: './breadcumb1.component.html',
  styleUrls: ['./breadcumb1.component.scss']
})
export class Breadcumb1Component implements OnInit {

  constructor( private router:Router , private service:ServicesService) { }

  imagenes = [
    {
      "imagen":"../../../assets/image1.jpg",
      "anime":"Kimetsu no yaiba",
      "introduccion":"Estamos en la era Taisho de Japón. Tanjiro, un joven que se gana la vida vendiendo carbón, descubre un día ... "
    },

    {
      "imagen":"../../../assets/image2.jpg",
      "anime":"Jujutsu kaisen",
      "introduccion":"Yuuji Itadori es un estudiante de instituto con unas habilidades físicas excepcionales. Todos los días ..."
    },

    {
      "imagen":"../../../assets/image3.jpg",
      "anime":"Shingeki no kyojin",
      "introduccion":"La historia nos lleva a un mundo en el que la humanidad estuvo a punto de ser exterminada años atras ..."
    }

  ]




  ngOnInit(): void {
  }

  ver(anime:string, catologo:string,imagen:string){
    this.router.navigateByUrl('/description');
    this.service.enviar(anime,catologo,imagen);
  }

}
