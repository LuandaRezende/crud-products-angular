import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadTwoDataSource } from './product-read-two-datasource';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read-two',
  templateUrl: './product-read-two.component.html',
  styleUrls: ['./product-read-two.component.css']
})
export class ProductReadTwoComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductReadTwoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','price'];

  ngOnInit() {
    this.dataSource = new ProductReadTwoDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
