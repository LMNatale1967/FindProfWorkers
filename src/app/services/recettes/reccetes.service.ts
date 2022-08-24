
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RecettesService {

  constructor(
    private readonly _http: HttpClient
  ) {}


  // **********************************
  //  Get The Data From a AJAX request
  // **********************************   
  async getData() {
    const url = "./assets/data/resto-data.json";
    const request = this._http.get(url);
    const response = await firstValueFrom(request);
    return response;
  }
}
