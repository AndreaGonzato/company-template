import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

export interface JSONText {
    text: string;
}

@Injectable({
    providedIn: 'root'
})
export class BackEndManagerService {

    constructor(private _http: HttpClient) {
    }

    public getTestJSON(): Observable<JSONText> {
        return this._http.get<JSONText>(`http://localhost:3000/api/test-json`)
    }
}
