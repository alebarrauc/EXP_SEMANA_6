import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RockComponent } from './pages/rock/rock.component';
import { PopComponent } from './pages/pop/pop.component';
import { OstComponent } from './pages/ost/ost.component';
import { RegisterComponent } from './pages/register/register.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'rock', component: RockComponent },
  { path: 'pop', component: PopComponent },
  { path: 'ost', component: OstComponent },
  { path: 'form', component: RegisterComponent }
];
