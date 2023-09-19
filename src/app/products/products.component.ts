import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { id: 1, title: 'Vivo T1', price: 29.99, description:'Amazing Product', category:'Mobile',image:'',rating:4.2,count:'1' },
    { id: 2, title: 'T-shirt', price: 29.99, description:'Amazing Product', category:'Cloth',image:' ',rating:4.2,count:'1' },
    { id: 3, title: 'Laptop', price: 29.99, description:'Amazing Product', category:'Electronic Gadget',image:'',rating:4.2,count:'1' },
    { id: 4, title: '', price: 29.99, description:'Amazing Product', category:'Mobile',image:'',rating:4.2,count:'1' },
    
  ];
}


