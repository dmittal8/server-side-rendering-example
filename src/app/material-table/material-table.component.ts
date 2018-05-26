import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MaterialTableDataSource } from './material-table-datasource';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {
  public dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // dataSource: MaterialTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  //displayedColumns = ['name', 'status'];
  displayedColumns = ['label', 'identifier','startDate','amount','commRate'];
  constructor(private http: HttpClient){

  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-api-key': 'TaCepEXaqJ1JYSKu2auhe6SKc6LXpfZ36GIjGe9Y',
        'content-language': 'en'
      })
    };
    this.http.get('https://diaas-insurance.gtaia-test-domain.net/fid-dev-lux-10134/insurance/claims/ID-K8kKBH1000B5d',httpOptions).subscribe(
      (res:any)=>{
        this.http.get('https://diaas-insurance.gtaia-test-domain.net/fid-dev-lux-10134/insurance/contracts/ID-W4Fb6H1002wrC/risks/ID-YQiPDH1002KkR',httpOptions).subscribe(
          (res:any)=>{
            debugger;
            this.http.get('https://diaas-insurance.gtaia-test-domain.net/fid-dev-lux-10134/insurance/contracts/ID-W4Fb6H1002wrC/risks/ID-YQiPDH1002KkR/coverages?_inquiry=e_mmbr_cvrgs',httpOptions).subscribe(
              (res:any)=>{
                debugger;
                if (res._links.item.length > 0) {
                  let data = [];
                  res._links.item.forEach(element => {
                    console.log(element);
            
                    var result = element.summary;
                    data.push(result);
                  });
                  this.dataSource = new MatTableDataSource(data);
                  this.dataSource.paginator = this.paginator;
                }
              }
            );
        
          }
        );
    
      }
    );
    // this.dataSource = new MaterialTableDataSource(this.paginator, this.sort);
  }
}
