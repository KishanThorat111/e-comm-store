import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { CategoriesFormComponent } from './components/manage/categories-form/categories-form.component';
import { BrandsComponent } from './components/manage/brands/brands.component';
import { BrandFormComponent } from './components/manage/brand-form/brand-form.component';
import { ProductsComponent } from './components/manage/products/products.component';
import { ProductFormComponent } from './components/manage/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { authGaurd } from './core/auth-guard';
import { AdminDashboardComponent } from './components/manage/admin-dashboard/admin-dashboard.component';
import { adminGaurd } from './core/admin-guard';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { WishlistsComponent } from './components/wishlists/wishlists.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate:[authGaurd]
    },
    {
        path: 'admin',
        component: AdminDashboardComponent,
        canActivate:[adminGaurd]
    },
    {
        path:'admin/categories',
        component: CategoriesComponent,
        canActivate:[adminGaurd]
    },
    {
        path: 'admin/categories/add',
        component: CategoriesFormComponent,
        canActivate:[adminGaurd]
    },
    {
        path: 'admin/categories/:id',
        component: CategoriesFormComponent,
        canActivate:[adminGaurd]
    },
    {
        path:'admin/brand',
        component: BrandsComponent,
        canActivate:[adminGaurd]
    },
    {
        path: 'admin/brand/add',
        component: BrandFormComponent,
        canActivate:[adminGaurd]
    },
    {
        path: 'admin/brand/:id',
        component:  BrandFormComponent,
        canActivate:[adminGaurd]
    },
    {
        path:'admin/products',
        component: ProductsComponent,
        canActivate:[adminGaurd]
    },
    {
        path: 'admin/products/add',
        component: ProductFormComponent,
        canActivate:[adminGaurd]
    },
    {
        path: 'admin/products/:id',
        component:  ProductFormComponent,
        canActivate:[adminGaurd]
    },
    {
        path:"products",
        component: ProductListComponent,
        canActivate:[authGaurd]
    },
    {
        path:"product/:id",
        component: ProductDetailsComponent,
        canActivate:[authGaurd]
    },
    {
        path:"profile",
        component: CustomerProfileComponent,
        canActivate:[authGaurd]
    },
    {
        path:"wishlists",
        component: WishlistsComponent,
        canActivate:[authGaurd]
    },
    {
        path:"cart",
        component: ShoppingCartComponent,
        canActivate:[authGaurd]
    },
    {
        path: "register",
        component : RegisterComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"orders",
        component: CustomerOrdersComponent,
        canActivate:[authGaurd]
    },
];
