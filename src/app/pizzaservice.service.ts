import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaserviceService {

  items:any = [];

  constructor() { }

  addToCart(item:any) {
    this.items.push(item);
  }

  removeFromCart(item:any) {
    // todo
    let index = this.items.findIndex((obj:any)=>obj.id == item.id);
    this.items.splice(index,1);
  }

  fetchCartItems() {
    return this.items;
  }
}
