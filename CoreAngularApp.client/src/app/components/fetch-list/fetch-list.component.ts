import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-list',
  templateUrl: './fetch-list.component.html',
  styleUrl: './fetch-list.component.scss',
  providers:[]
})

export class FetchListComponent implements OnInit {

  private _http: HttpClient;
  public customerVms: CustomerVM[];
  private _baseUrl: string;
  
  constructor(http: HttpClient) {
    this._http = http;
    this._baseUrl = 'https://localhost:4200/api/';
    this.customerVms = [];
  }

  ngOnInit() {
    this._http
      .get<CustomerVM[]>(this._baseUrl + 'Customer')
      .subscribe(result => {
        this.customerVms = result;
      },
        error =>
          console.error(error)
      );
  }
}

interface CustomerVM {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  gender: string;

}

