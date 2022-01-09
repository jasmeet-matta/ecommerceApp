import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { Product } from '../product';
import { Category} from 'src/app/site-layout/category';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {

  searchCategory: any;
  productList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
  this.activatedRoute.queryParams.subscribe(data => {
    this.searchCategory = data['id'];

    this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData => {
      this.productList = categoryData;
    });
  });

  }

}
