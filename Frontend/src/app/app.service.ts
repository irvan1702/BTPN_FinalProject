import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService{

    constructor(private http:Http){

    }
    getAll(){
        return this.http.get('http://localhost:8080/employee/getAll')
        .map(response => {
            return response.json();
        });
    }
}