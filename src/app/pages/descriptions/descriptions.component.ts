import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss']
})
export class DescriptionsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verCatalogo(){
    this.router.navigateByUrl('/breadcumb1');
  }


}
