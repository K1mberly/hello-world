// import { BadInput } from './../common/bad-input';
// import { NotFoundError } from './../common/not-found-error';
// import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class PostService extends DataService {
    // private url = 'http://jsonplaceholder.typicode.com/posts';
    // se cambio al url por que la anterior no devuelve los errores al borrar registros que no existen
    // private url = 'https://my-json-server.typicode.com/typicode/demo/posts';


    constructor(http: HttpClient) { 
        super('https://my-json-server.typicode.com/typicode/demo/posts', http);
    }





    // getPosts() {
    //     return this.http.get(this.url).pipe(
    //         catchError(this.handleError)
    //     );
    // }

    // createPost(post) {
    //     return this.http.post(this.url, JSON.stringify(post)).pipe(
    //         catchError(this.handleError)
    //         // catchError((error: Response) => {
    //         //     if (error.status === 400)
    //         //         return throwError(new BadInput(error));
    //         //     return throwError(new AppError(error));
    //         // })
    //     );
    // }

    // updatePost(post) {
    //     return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).pipe(
    //         catchError(this.handleError)
    //     );
    // }

    // deletePost(id) {
    //     return this.http.delete(this.url+'/'+id).pipe(
    //         catchError(this.handleError)
    //         // catchError((error: Response) => {
    //         //     if (error.status === 404)
    //         //         return throwError(new NotFoundError());
    //         //     else
    //         //         return throwError(new AppError(error));
    //         // })
    //     )
    // }

    // private handleError(error: Response){
    //     if (error.status === 400)
    //         return throwError(new BadInput(error));

    //     if (error.status === 404)
    //         return throwError(new NotFoundError());
        
    //     return throwError(new AppError(error));
    // }
}
