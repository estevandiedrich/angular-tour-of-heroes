import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Address } from './address';
import { HttpErrorHandler } from './http-error-handler';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends HttpErrorHandler {
  private addressUrl:string = "http://localhost:8080/addresses";
  httpOptions:any = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http: HttpClient) {
    super();
   }
  addHeroAddress(address:Address):Observable<any>{
    return this.http.post(this.addressUrl,address,this.httpOptions).pipe(
      catchError(this.handleError<Address>('insertAddress', { id: 1, address: "estevan", hero: { id: 1 }}))
    );
  }
}
