import {NgModule} from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listing/product-listing.component';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

export const routes: Routes = [
    {path:'',redirectTo: 'product', pathMatch: 'full'},
    {
        path:'product', component:ProductComponent,
        children: [
            {path: '', component: ProductListComponent},
            {path: ':productId', component: ProductDetailComponent}
        ]
    }
];

@NgModule({
    declarations:[
        ProductDetailComponent,
        ProductListComponent,
    ], 
    imports:[
        RouterModule.forChild(routes),
        CommonModule,
        RouterOutlet,
        RouterLink
    ],
    providers:[],
    bootstrap:[]
})
export class ProductModule{}