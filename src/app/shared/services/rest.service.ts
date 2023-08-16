import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestResponse } from '../interfaces/rest-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService<T> {
  protected abstract uri: string;
  constructor(private _http: HttpClient) {}

  all(): Observable<RestResponse<T>>{
    //return this._http.get<RestResponse<T>>('http://localhost:8000/api/annees');
    return this._http.get<RestResponse<T>>(`http://localhost:8000/api/${this.uri}`);

  }

  create(data:T): Observable<RestResponse<T>>{
    return this._http.post<RestResponse<T>>(`http://localhost:8000/api/${this.uri}`,data);

  }

  update(id:number , data:T): Observable<RestResponse<T>>{
    return this._http.post<RestResponse<T>>(`http://localhost:8000/api/${this.uri}/${id}`,data);
  }

  remove(id:number): Observable<RestResponse<T>>{
    return this._http.delete<RestResponse<T>>(`http://localhost:8000/api/${this.uri}/${id}`);

  }


}
