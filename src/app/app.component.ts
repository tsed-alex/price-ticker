import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {FxPrice} from "./types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'bid', 'ask', 'timestamp'];
  dataSource: FxPrice[] = [];

  constructor(private appService: AppService) {  }

  public ngOnInit(): void {
    this.appService.getAllPrices().subscribe(data => this.dataSource = data);
  }

  public onDataRowChanged(updatedItem: FxPrice): void {
    const expiredData = this.dataSource.find((item)=>item.id === updatedItem.id);
    if(expiredData) {
      expiredData.ask = updatedItem.ask;
      expiredData.bid = updatedItem.bid;
      expiredData.timestamp = updatedItem.timestamp;
    }
  }
}
