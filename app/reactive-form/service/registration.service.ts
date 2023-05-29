import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url = "http://localhost:3000/register"
  constructor(private http: HttpClient) {
  }
  register(userData: any){
    return this.http.post<any>(this.url, userData).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => error)
  }
}
