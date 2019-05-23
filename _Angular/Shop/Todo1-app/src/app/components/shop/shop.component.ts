import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private ss: ShareService) { }

  ngOnInit() {
  }

  add(index){
    this.ss.cartList.forEach((product) => {
      if(this.ss.cartList.indexOf(this.ss.productList[index])<0)
      {
        this.ss.productList[index].count++;
        this.ss.cartList.push(this.ss.productList[index]);
        this.ss.products.push(this.ss.productList[index]);
      }
      else if(index === product.id)
      {
        product.count++;
      }
	localStorage['shop'] = JSON.stringify(this.ss.cartList);
    })

  }

  get productList(){
    return this.ss.productList;
  }

}
