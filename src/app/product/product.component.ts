import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: any;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.http
        .get(
          'https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=' +
            params['product_id']
        )
        .subscribe((data) => {
          this.product = data;
          console.log(this.product);
        });
    });
  }
}
