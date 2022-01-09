import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { Product } from '../product';


@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList: any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data =>{
      this.productList=data;
    })
  }

}
