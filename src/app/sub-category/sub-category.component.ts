import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css'],
})
export class SubCategoryComponent implements OnInit {
  subCategory: any;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.http
        .get(
          'https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=' +
            params['category_id']
        )
        .subscribe((data) => {
          this.subCategory = data;
          console.log(this.subCategory);
        });
    });
  }
}
