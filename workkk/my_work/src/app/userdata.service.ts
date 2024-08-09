import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface users {
  id: number;
  name: string;
  email: string;
  password: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private apiUrl = 'http://localhost:3000/workkk/php-angular/index.php';

  constructor(private abc : HttpClient) { }

  getdata(){

    return this.abc.get<users[]>(this.apiUrl);
  }

   


}
