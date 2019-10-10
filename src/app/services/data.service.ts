import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private url: string, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url)
        
        .pipe(
            map(response => response),
            catchError(this.handleError)
        );
    }

    create(resource) {
        return throwError(new AppError());
        // return this.http.post(this.url, JSON.stringify(resource)).pipe(
        //     map(response => response),
        //     catchError(this.handleError)
        // );
    }

    update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true })).pipe(
            map(response => response),
            catchError(this.handleError)
        );
    }

    delete(id) {
        // return throwError(new AppError());
        // no se recomienda convertir observables a promises
        return this.http.delete(this.url+'/'+id).pipe(
            retry(3),
            map(response => response),
            catchError(this.handleError)
        )
        // .toPromise()

    }

    private handleError(error: Response){
        if (error.status === 400)
            return throwError(new BadInput(error));

        if (error.status === 404)
            return throwError(new NotFoundError());
        
        return throwError(new AppError(error));
    }
}
