import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductsComponent } from './components/products/products.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Welcome Home'}},
  { path: 'about', component: AboutComponent, data: {title: 'About Page'}},
  { path: 'contact', component: ContactComponent, data: {title: 'Contact Page'}},
  { path: 'checkout', component: CheckoutComponent, data: {title: 'Checkout Page'}},
  { path: 'products', component: ProductsComponent, data: {title: 'Products Page'}},
  { path: 'reviews', component: ReviewsComponent, data: {title: 'Reviews Page'}},
  { path: '404', component: NotFoundComponent },
  // {path: '**', redirectTo: '/404', pathMatch: 'full'}
  // { path: 'products/:category/page/:page', component: ProductsComponent, data: { title: 'Products' } },
  // { path: 'products', redirectTo: 'products/all/page/1' },
  { path: 'products/category/:id', component: ProductsComponent, data: {title: 'Shop By Category'}},
  { path: 'category/:category/product/:id', component: ProductComponent},
  { path: 'search/:id', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
