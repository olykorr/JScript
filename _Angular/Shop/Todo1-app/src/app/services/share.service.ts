import { Injectable } from '@angular/core';

@Injectable()



export class ShareService {
  

  productList = [
    {
      id: 0,
      name: "milk",
      price: 20,
      count: 0
    },
    {
      id: 1,
      name: "bread",
      price: 10,
      count: 0
    },
    {
      id: 2,
      name: "cheez",
      price: 30,
      count: 0
    },
    {
      id: 3,
      name: "виноград",
      price: 40,
      count: 0
    },
    {
      id: 4,
      name: "potatos",
      price: 50,
      count: 0
    },

  ];

  listForCart = [{
    id: 5,
    name: "banana",
    price: 600,
    count: 0
  }];
  list = JSON.parse(localStorage['list'] || JSON.stringify(['First','Second']));
  products = JSON.parse(localStorage['shop'] || JSON.stringify(this.listForCart));
  
  constructor() {

  }



}
