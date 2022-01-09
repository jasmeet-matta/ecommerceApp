import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { Category } from '../category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryList: any
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data =>{
      this.categoryList=data;
    })
  }

}
