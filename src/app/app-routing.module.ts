import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { DetailProductComponent } from './compte/detail-product/detail-product.component';
import { ListProductComponent } from './compte/list-product/list-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
{
    component: HomeComponent,
    path: '',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component:RegisterComponent,
    path: 'register',
  },
  {
      component:ListProductComponent,
      path: 'products',
    },
  { path: 'products/:id', component: DetailProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
