import { Component, OnInit } from '@angular/core';
import { PizzaserviceService } from '../pizzaservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items:any = [];

  constructor(private pizzaService: PizzaserviceService) { }

  ngOnInit(): void {
    this.items = this.pizzaService.fetchCartItems();
  }

  calculateTotal() {
    let total = 0;
    this.items.forEach((item:any)=>{
      total+= item.prize;
    });
    //tax - 10%
    total = total + (total*0.10);
    return total;
  }

}
