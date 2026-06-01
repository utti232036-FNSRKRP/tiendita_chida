import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'Disponible' | 'Agotado';
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  products: Product[] = [
    { id: 1, name: 'Monitor 24"', category: 'Electrónica', price: 249.99, stock: 15, status: 'Disponible' },
    { id: 2, name: 'Teclado Mecánico', category: 'Electrónica', price: 89.99, stock: 8, status: 'Disponible' },
    { id: 3, name: 'Mouse Inalámbrico', category: 'Electrónica', price: 34.99, stock: 0, status: 'Agotado' },
    { id: 4, name: 'Camiseta Deportiva', category: 'Ropa', price: 25.00, stock: 50, status: 'Disponible' }
  ];

  showModal: boolean = false;
  isEditing: boolean = false;
  currentProduct: Product = this.getEmptyProduct();
  private nextId: number = 5;

  // 🔍 Nueva propiedad para el filtro de búsqueda
  searchTerm: string = '';

  constructor() {}

  private getEmptyProduct(): Product {
    return {
      id: 0,
      name: '',
      category: '',
      price: 0,
      stock: 0,
      status: 'Disponible'
    };
  }

  // Getter que filtra productos según searchTerm (nombre o categoría)
  get filteredProducts(): Product[] {
    if (!this.searchTerm.trim()) {
      return this.products;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.products.filter(
      product =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
  }

  onAddNew(): void {
    this.isEditing = false;
    this.currentProduct = this.getEmptyProduct();
    this.showModal = true;
  }

  onEdit(id: number): void {
    const productToEdit = this.products.find(p => p.id === id);
    if (productToEdit) {
      this.isEditing = true;
      this.currentProduct = { ...productToEdit };
      this.showModal = true;
    }
  }

  saveProduct(): void {
    if (!this.currentProduct.name || !this.currentProduct.category ||
        this.currentProduct.price <= 0 || this.currentProduct.stock < 0) {
      return;
    }

    if (this.isEditing) {
      const index = this.products.findIndex(p => p.id === this.currentProduct.id);
      if (index !== -1) {
        const updatedProducts = [...this.products];
        updatedProducts[index] = { ...this.currentProduct };
        this.products = updatedProducts;
      }
    } else {
      const newProduct: Product = {
        ...this.currentProduct,
        id: this.nextId++
      };
      this.products = [...this.products, newProduct];
    }

    this.closeModal();
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.products = this.products.filter(product => product.id !== id);
      console.log(`Producto ${id} eliminado.`);
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.isEditing = false;
    this.currentProduct = this.getEmptyProduct();
  }
}

