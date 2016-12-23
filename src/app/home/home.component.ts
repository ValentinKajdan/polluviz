import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit
{
  public errorMessage: string;

  constructor(private _apiService: ApiService) { }

  ngOnInit()
  {
    this._apiService.getData("http://api.waqi.info/").toPromise().then(data => console.log(data) );
  }

}