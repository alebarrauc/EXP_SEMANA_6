import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pop',
  templateUrl: './ost.component.html',
  styleUrls: ['./ost.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class OstComponent implements OnInit {
  ostVinils = [
    { id: 1, name: 'Cowboy Beebop', price: 99990, image: './assets/images/cowbobebop.jpeg' },
    { id: 2, name: 'Cloud Atlas', price: 59990, image: './assets/images/cloud.jpg' },
    { id: 3, name: 'Transformers 2', price: 69990, image: 'assets/images/transformers.jpg' }
  ];


  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

  addToCart(product: any): void {
    let cart = this.localStorageService.getItem('cart') || [];
    cart.push(product);
    this.localStorageService.setItem('cart', cart);
    alert(`${product.name} ha sido agregado al carrito.`);
  }
}
