import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService{

    constructor(private http:Http){

    }
    getAll(){
        // let headers = new Headers();
        // headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'GET');
        // headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get('http://localhost:8080/employee/getAll')
        .map(response => {
            return response.json();
        });
    }
    searchName(name){
        let searchParams = new URLSearchParams();
        searchParams.append("name",name);
        return this.http.get('http://localhost:8080/employee/findByName', { search: searchParams })
      .map(response => {
        return response.json();
      });
    }

    getContactById(id){
        return this.http.get('http://localhost:8080/employee/getById/'+id)
      .map(response => {
        return response.json();
      });
    }

    delete(id){
        return this.http.delete('http://localhost:8080/employee/delete/' + id)
      .map(response => {
        return response.json();
      });
        
    }
}