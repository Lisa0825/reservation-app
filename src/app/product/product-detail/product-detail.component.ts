import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../product';

@Component({
  selector: 'app-product-detail',
  // standalone: true,
  // imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product:any

  constructor(private route:ActivatedRoute){}

  ngOnInit(  ){
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')!]
    })
  }

}
