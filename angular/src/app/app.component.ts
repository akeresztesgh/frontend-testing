import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ItemViewModel } from './itemViewModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: ItemViewModel[] = [];

  constructor(private http: HttpClient) {
  }

  public getItems() {
    this.http.get<ItemViewModel[]>('https://localhost:7159/api/items').subscribe(x => {
      this.items = x;
      console.log(`got ${this.items.length} items`);
    });
  }
  public clearItems() {
    this.items = [];
  }
}
