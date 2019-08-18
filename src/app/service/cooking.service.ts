import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cooking } from '../model/cooking';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CookingService {

  constructor(private http: HttpClient) { }

  getCookingByUsrtrname(username: string): Observable<Cooking> {
    return this.http.get<Cooking>(`${environment.baseUrl}/api/cooking/${username}`);
  }
}
