import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

export interface CustomJSON {
    field: string;
}

@Injectable({
    providedIn: 'root'
})
export class BackEndManagerService {

    constructor(private _http: HttpClient) {
    }

    public getCustomJSON(): Observable<CustomJSON> {
        return this._http.get<CustomJSON>(`http://localhost:3000/api/test-json`)
    }
}
