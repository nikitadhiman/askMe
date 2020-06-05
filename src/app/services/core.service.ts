import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<any>{
    return this.http.get('assets/users.json');
  }
}
