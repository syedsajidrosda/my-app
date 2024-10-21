import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private _httpclient:HttpClient) { }

  getbank():Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }
  getfilteredbank(term:string):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }
  
  getsortedbank(column:string,order:string):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
  }
  getpagedbank(page:number):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page="+page);
    
  }
  createbank(data:any):Observable<any>{
    return this._httpclient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
  }

  
  deletebank(id:string):Observable<any>{
    return this._httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
    
  

  
}
