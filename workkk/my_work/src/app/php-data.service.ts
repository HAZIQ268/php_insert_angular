import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhpDataService {
  private php_api = 'http://localhost:3000/fetch_data_using_php/index.php';
  constructor(private http : HttpClient) { }

  xyz(userdata: any) {
    const headers = new HttpHeaders();
    return this.http.post(this.php_api,JSON.stringify(userdata), {headers})
   }
}
