import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class RockComponent implements OnInit {
  rockVinils = [
    { id: 1, name: 'Motley Crue - Shout At The Devil', price: 39990, image: './assets/images/motleycrueshoutatthedevil.jpg' },
    { id: 2, name: 'Limp Bizkit - Significant Other', price: 39990, image: './assets/images/limpbizkitsignificantother.jpg' },
    { id: 3, name: 'Linkin Park - Hibrid Theory', price: 29990, image: 'assets/images/linkinparkhibridtheory.jpg' },
    { id: 4, name: 'Linkin Park - Reanimation', price: 29990, image: 'assets/images/linkinparkreanimation.jpg' },
    { id: 5, name: 'Misfits - Famous Monsters', price: 45590, image: 'assets/images/misfitsmonster.jpg' },
    { id: 6, name: 'Queen - A Kind Of Magic', price: 59990, image: 'assets/images/queenmagic.png' },
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
