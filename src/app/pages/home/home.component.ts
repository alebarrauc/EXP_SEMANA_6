import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent implements OnInit {
  products: any[] = [
    { id: 1, name: 'Cowboy Beebop', price: 99990, image: './assets/images/cowbobebop.jpeg',routerLink: '/ost' },
    { id: 2, name: 'Cloud Atlas', price: 59990, image: './assets/images/cloud.jpg',routerLink: '/ost' },
    { id: 3, name: 'Transformers 2', price: 69990, image: 'assets/images/transformers.jpg',routerLink: '/ost' },
    { id: 4, name: 'Michael Jackson - Dangerous', price: 79990, image: './assets/images/michaeljacksondangerous.jpg',routerLink: '/pop' },
    { id: 5, name: 'Dua Lipa - Future Nostalgia', price: 49990, image: './assets/images/dualipamoonlight.jpg',routerLink: '/pop' },
    { id: 6, name: 'Five - Invincible (Special Edition)', price: 29990, image: 'assets/images/fiveinvincible.jpg',routerLink: '/pop' },
    { id: 7, name: 'Britney Spears - Greatest Hits', price: 39990, image: 'assets/images/britneypregorative.jpg',routerLink: '/pop' },
    { id: 8, name: 'Prince - Purple Rain', price: 49990, image: 'assets/images/princerain.jpg',routerLink: '/pop' },
    { id: 9, name: 'Lana Del Rey - Born To Die', price: 29990, image: './assets/images/lanadelreyborntodie.jpg',routerLink: '/pop' },
    { id: 10, name: 'Motley Crue - Shout At The Devil', price: 39990, image: './assets/images/motleycrueshoutatthedevil.jpg' ,routerLink: '/rock'},
    { id: 11, name: 'Limp Bizkit - Significant Other', price: 39990, image: './assets/images/limpbizkitsignificantother.jpg' ,routerLink: '/rock'},
    { id: 12, name: 'Linkin Park - Hibrid Theory', price: 29990, image: 'assets/images/linkinparkhibridtheory.jpg' ,routerLink: '/rock'},
    { id: 13, name: 'Linkin Park - Reanimation', price: 29990, image: 'assets/images/linkinparkreanimation.jpg' ,routerLink: '/rock'},
    { id: 14, name: 'Misfits - Famous Monsters', price: 45590, image: 'assets/images/misfitsmonster.jpg' ,routerLink: '/rock'},
    { id: 15, name: 'Queen - A Kind Of Magic', price: 59990, image: 'assets/images/queenmagic.png' ,routerLink: '/rock'}
  ];

  currentProduct: any;

  ngOnInit(): void {
    this.currentProduct = this.products[0];
    setInterval(() => this.rotateProduct(), 5000);
  }

  rotateProduct(): void {
    const currentIndex = this.products.findIndex(p => p === this.currentProduct);
    const nextIndex = (currentIndex + 1) % this.products.length;
    this.currentProduct = this.products[nextIndex];
  }
}
