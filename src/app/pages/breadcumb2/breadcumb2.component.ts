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

  ngOnInit(): void {
  }

  verDescripcion(anime:string, catologo:string,imagen:string){
    this.router.navigateByUrl('/description');
    this.service.enviar(anime,catologo,imagen);
  }


}

