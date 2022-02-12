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

  ver(anime:string){
    this.router.navigateByUrl('/description');
    this.service.enviar(anime);
  }

}
