import { Routes ,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
    path: '',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
    },

];

@NgModule({
    imports:[
        RouterModule.forRoot(routes),
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}