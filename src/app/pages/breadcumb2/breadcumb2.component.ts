import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-breadcumb2',
  templateUrl: './breadcumb2.component.html',
  styleUrls: ['./breadcumb2.component.scss']
})
export class Breadcumb2Component implements OnInit {

  constructor(private router:Router) { }

  imagenes = [
    "../../../assets/image4.jpg" , "../../../assets/image5.jpg" , "../../../assets/image6.jpg"
  ]

  ngOnInit(): void {
  }

  verDescripcion(){
    this.router.navigateByUrl('/description');
  }


}

