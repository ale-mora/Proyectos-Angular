import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';


// Contiene los servicios que proporcionan funcionalidades como 
// la lógica de negocio, la gestión de datos y la comunicación 
// con APIs externas. Los servicios son clases que se pueden 
// inyectar en componentes o en otros servicios.

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users/'
  }

  getListUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}`);

  }

  deleteUser(id: number): Observable<User[]> {
    return this.http.delete<User[]>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveUser(user: User): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, user);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.myAppUrl}${this.myApiUrl}${user.id}`, user);
  }
}
