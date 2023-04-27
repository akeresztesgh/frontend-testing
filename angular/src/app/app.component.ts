import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ItemViewModel } from './itemViewModel';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: ItemViewModel[] = [];

  constructor(private http: HttpClient) {
  }

  public async getItems() {

    this.items = await lastValueFrom(this.http.get<ItemViewModel[]>('https://localhost:7159/api/items'));
    // this.http.get<ItemViewModel[]>('https://localhost:7159/api/items').subscribe(x => {
    //   this.items = x;
    //   console.log(`got ${this.items.length} items`);
    // });
  }
  public clearItems() {
    this.items = [];
  }
}
