import { Badinput } from './../posts/common/bad-input';
import { NotFoundError } from './../posts/common/not-found-error';
import { AppError } from './../posts/common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    
    constructor(private url: string, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url)
            .pipe(catchError(this.handleError));
    }

    create(resource) {
        return this.http.post(this.url, resource)
            .pipe(catchError(this.handleError))
    }

    update(resource) {
        return this.http.put(this.url + resource.id, resource)
            .pipe(catchError(this.handleError))
    }

    delete(resource) {
        return this.http.delete(this.url + resource.id)
            .pipe(catchError(this.handleError))
    }


    private handleError(error: Response) {
        if (error.status === 404) {
            return throwError(new NotFoundError);
        }

        if (error.status === 400) {
            return throwError(new Badinput);
        }
        return throwError(new AppError);
    }


}
