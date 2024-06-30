import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admin', component: AdminComponent },
];
