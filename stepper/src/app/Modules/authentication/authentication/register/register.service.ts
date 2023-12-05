import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConstantService} from '../../../../Services/constant.service'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient, private ConstantSer: ConstantService) { }
  registerUser(model : any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(this.ConstantSer.registerUserUrl, model,  { headers });
  }

}
