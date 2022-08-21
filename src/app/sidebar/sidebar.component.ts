import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  category: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://store.vrunibex.com/mobile2/mbProduct/CategoryList')
      .subscribe((data) => {
        this.category = data;
        console.log(this.category);
      });
  }
}
