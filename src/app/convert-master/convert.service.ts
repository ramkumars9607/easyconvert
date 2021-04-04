import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor(private http: HttpClient) { }

  // Method for getting source file
  getSourceFile(params): Observable<any> {
    return this.http
      .get<any>(
        ('assets/file1.json')
      )
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  // Method for getting destination file
  getDestinationFile(params): Observable<any> {
    return this.http
      .get<any>(
        ('assets/file2.json')
      )
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
