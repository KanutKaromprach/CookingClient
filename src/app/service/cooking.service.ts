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

  getCookingByUsertrname(username: string): Observable<Cooking> {
    return this.http.get<Cooking>(`${environment.baseUrl}/api/cooking/${username}`);
  }

  updateCooking(cooking: Cooking): Observable<Cooking> {
    return this.http.put<Cooking>(`${environment.baseUrl}/api/cooking/update`, cooking);
  }
}
