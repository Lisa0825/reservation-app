import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { products } from '../../product';

@Component({
  selector: 'app-product-list',
  // standalone: true,
  // imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss'
})
export class ProductListComponent{
  products:any

  constructor(private route:ActivatedRoute){}

  ngOnInit(  ){
    this.products = products;
  }

}
