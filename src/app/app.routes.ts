// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
// 1. Importa el componente Products (asegúrate de que la ruta del archivo sea la correcta)
import { Products } from './pages/home/products/products';

export const routes: Routes = [
  // 2. Opción recomendada: Redirigir la ruta vacía a '/products'
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  // 3. Declarar la ruta de productos
  {
    path: 'products',
    component: Products
  },
  // Tu ruta de Home actual (por si la sigues necesitando en otra url)
  {
    path: 'home',
    component: Home
  }
];