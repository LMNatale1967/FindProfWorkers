
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientHttpService {

  constructor(
    private readonly _http: HttpClient

  ) { }


  // **************************************
  //  Master Model to Made an AJAX Request
  //  Based on RxJS Library of ReactivX
  // **************************************
  async doRequestHttp() {
    const url = "https://api.gitHub.com/users/angular/repos";
    // Build Observable Request
    const request = this._http.get(url);
    // Extract Response
    const response = await firstValueFrom(request);
    // return data
    return response;
  }


}
