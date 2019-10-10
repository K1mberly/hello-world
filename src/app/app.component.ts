import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    // safe traversal operator
    task = {
        title : 'Review',
        assignee: null
        // assignee:{
        //     name: 'Kim'
        // }
    }

    // ngStyle
    // canSave = true;

    // ngFor
    // courses;
    // onAdd(){
    //     this.courses.push({ id: 4, name: 'course4'});
    // }
    // onRemove(course){
    //     let index = this.courses.indexOf(course);
    //     this.courses.splice(index,1);
    // }
    // onChange(course){
    //     course.name = 'UPDATED';
    // }
    // loadCourses(){
    //     this.courses = [
    //         { id: 1, name: 'course1'},
    //         { id: 2, name: 'course2'},
    //         { id: 3, name: 'course3'}
    //     ];
    // }
    // trackCourse(index, course){
    //     // para evitar que la lista se cargue varias veces
    //     return course ? course.id : undefined;
    // }

    // ngSwitch
    // viewMode = 'somethingElse';

    // favorite
    // title = 'Angular hello-world';
    // post = {
    //     title: "Title",
    //     isFavorite: true
    // }
    // onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    //     console.log("Favorite changed: " + eventArgs);
    // }

    // tweet = {
    //     body: 'Here is the body of a tweet..',
    //     isLiked: true,
    //     likesCount: 10
    // }

    // ngIf , hidden
    // courses = [1];
}
