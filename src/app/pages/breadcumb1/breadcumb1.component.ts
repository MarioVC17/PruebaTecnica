import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-breadcumb1',
  templateUrl: './breadcumb1.component.html',
  styleUrls: ['./breadcumb1.component.scss']
})
export class Breadcumb1Component implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  ver(){
    this.router.navigateByUrl('/description');
  }

}
