import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://store.vrunibex.com/mobile2/mbProduct/CategoryList')
      .subscribe(
        (data) => {
          this.category = data;
          console.log(this.category);
        },
        (error) => console.log(error)
      )
  }
  categoryMap() {
    return this.category.Result.TreeList;
  }
}
