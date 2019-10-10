import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors = ["kim", "jaz", "kev", "axel"];
  getAuthors(){
    return this.authors;
  }

  constructor() { }
}
