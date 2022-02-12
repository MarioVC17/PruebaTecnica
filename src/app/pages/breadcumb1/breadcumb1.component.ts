import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-breadcumb1',
  templateUrl: './breadcumb1.component.html',
  styleUrls: ['./breadcumb1.component.scss']
})
export class Breadcumb1Component implements OnInit {

  constructor( private router:Router) { }

  imagenes = [
    "../../../assets/image1.jpg" , "../../../assets/image2.jpg" , "../../../assets/image3.jpg"
  ]
  ngOnInit(): void {
  }

  ver(){
    this.router.navigateByUrl('/description');
  }

}
