import { ChangeDetectionStrategy, Component } from '@angular/core';
interface User {
  id: number;
  name: string;
  role: string;
  email: string;
  status: 'Activo' | 'Inactivo';
}
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {


  users: User[] = [
    { id: 1, name: 'Sofía Rodríguez', role: 'Diseñadora UI/UX', email: 'sofia.r@example.com', status: 'Activo' },
    { id: 2, name: 'Alejandro Marín', role: 'Frontend Dev', email: 'a.marin@example.com', status: 'Activo' },
    { id: 3, name: 'Elena Gómez', role: 'Product Manager', email: 'elena.g@example.com', status: 'Inactivo' },
    { id: 4, name: 'Lucas Silva', role: 'DevOps Engineer', email: 'lucas.s@example.com', status: 'Activo' }
  ];

  constructor() {}

  // Métodos de acción
  onAddNew(): void {
    console.log('Abrir modal para agregar nuevo usuario');
    // Aquí iría tu lógica para añadir registros
  }

  onEdit(id: number): void {
    console.log(`Editar usuario con ID: ${id}`);
    // Aquí iría tu lógica para editar
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.users = this.users.filter(user => user.id !== id);
      console.log(`Usuario ${id} eliminado.`);
    }
  }

}
