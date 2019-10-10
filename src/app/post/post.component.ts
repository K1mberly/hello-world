import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
    posts;

    constructor(private service: PostService){
        // http.get(this.url)
        // .subscribe(response => { // devuelve el body de la respuesta y convertida en json
        //     this.posts = response;
        //     console.log(response);
        // });
    }

    ngOnInit(){
        // this.http.get(this.url)
        this.service.getAll() // el componente del dice al servicio que quiere la data
        .subscribe(posts => this.posts = posts);// devuelve el body de la respuesta y convertida en json
        // .subscribe(response => { // devuelve el body de la respuesta y convertida en json
        //     this.posts = response;
        //     console.log(response);
        // });
    }

    createPost(input: HTMLInputElement){
        let post = { title: input.value};
        this.posts.splice(0, 0, post); //

        input.value = ''; 

        this.service.create(post)
        .subscribe(newPost=> {
            post['id'] = newPost['id'];
            // this.posts.splice(0, 0, post);
        },
        // .subscribe(response => {
        //     post['id'] = response['id'];
        //     this.posts.splice(0, 0, post)
        //     console.log(response);
        // }, 
        (error: AppError) => {
            this.posts.splice(0,1);
            if(error instanceof BadInput)
                alert('An expected error occurred.');
            else{
                throw error;
            }
        });
    }

    updatePost(post){
        // patch solo actualiza una parte del objeto
        // put actualiza todo el objeto
        this.service.update(post)
        .subscribe(updatedPost => console.log(updatedPost));
        // .subscribe(
        //     response =>{
        //         console.log(response);
        //     }
        // );
    }

    deletePost(post){
        this.service.delete(post.id).subscribe();


        // let index = this.posts.indexOf(post);
        // this.posts.splice(index, 1);

        // this.service.delete(post.id)
        // // this.service.delete(45554)
        // .subscribe(
        //     null,
        //     // ()=> {
        //     // let index = this.posts.indexOf(post);
        //     // this.posts.splice(index, 1);
        //     // },
        // // .subscribe(
        //     // response =>{
        //     //     let index = this.posts.indexOf(post);
        //     //     this.posts.splice(index, 1);
        //     // }, 
        //     (error: AppError) => {
        //         this.posts.splice(index,0, post);

        //         if(error instanceof NotFoundError)
        //             alert('This post has already been deleted.');
        //         else{
        //             throw error;
        //         }
        //     });
    }
}
