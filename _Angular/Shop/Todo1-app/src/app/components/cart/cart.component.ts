import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private ss: ShareService) { }
  ngOnInit() {
  }

  get totalPrice()
  {
    let totalPrices = 0;
    this.ss.products.forEach(function(element)
    {
      totalPrices+=element.price*element.count;
    })
    return totalPrices;
  }

  remove(index)
  {
    this.ss.cartList.splice(index,1);
    this.ss.products.splice(index,1);
    localStorage['shop'] = JSON.stringify(this.cartList);
  }

  get cartList()
  {
    return this.ss.products;
  }
}
