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
      "introduccion":"Kimetsu no Yaiba, también conocida bajo su nombre en inglés Demon Slayer, es una serie de manga escrita e ilustrada por Koyoharu Gotōge, cuya publicación comenzó el 15 de febrero de 2016 en la revista semanal Shūkan Shōnen Jump de la editorial Shūeisha"
    },

    {
      "imagen":"../../../assets/image2.jpg",
      "anime":"Jujutsu kaisen",
      "introduccion":"Jujutsu Kaisen, también conocida como Jujutsu Kaisen: Guerra de hechiceros en España, es una serie de manga japonés escrita e ilustrada por Gege Akutami."
    },

    {
      "imagen":"../../../assets/image3.jpg",
      "anime":"Shingeki no kyojin",
      "introduccion":"Shingeki no Kyojin, también conocida en países de habla hispana como Ataque a los titanes y Ataque de los titanes, ​​ es una serie de manga japonesa escrita e ilustrada por Hajime Isayama."
    }

  ]




  ngOnInit(): void {
  }

  ver(anime:string, catologo:string,imagen:string){
    this.router.navigateByUrl('/description');
    this.service.enviar(anime,catologo,imagen);
  }

}
