import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productDetail: any = [];
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.http
        .get(
          'https://store.vrunibex.com/mobile2/mbProduct/ProductDetail?productId=' +
            params['product']
        )
        .subscribe((data) => {
          this.productDetail = data;
          console.log(this.productDetail);
        });
    });
  }
}
