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



  anime = "";

  descripcion = "";

  ngOnInit(): void {
    this.mostrarDescripcion();
  }

  verCatalogo(){
    this.router.navigateByUrl('/breadcumb1');
  }

  mostrarDescripcion(){
    let data=this.service.devolver();
    this.anime=data[0]["anime"];
    this.descripcion=data[0]["descripcion"];

  }
}
