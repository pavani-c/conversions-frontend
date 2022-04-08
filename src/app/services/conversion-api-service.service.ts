import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap,catchError } from 'rxjs/operators';
import { Observable, of,throwError  } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConversionApiServiceService {

  constructor(private httpClient: HttpClient) { }

  convertTemperature(params: any){
    return this.httpClient.post(environment.tempConvertAPIUrl, params, this.getOptions())
     .pipe(catchError(this.erroHandler));
  }
  convertVolume(params: any){
    return this.httpClient.post(environment.volConvertAPIUrl, params, this.getOptions())
     .pipe(catchError(this.erroHandler));
  }

  private erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
  getOptions(): any {
    const httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                "Accept": "*/*",

            }
        )
    };

    return httpOptions;
}
}
