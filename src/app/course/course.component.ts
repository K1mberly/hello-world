import { Component } from '@angular/core';

@Component({
  selector: 'course',
  // templateUrl: './course.component.html',
  template: `
    {{ text | summary:10 }} 
  `,
  // {{ course.title | lowercase }} <br/>
  // {{ course.students | number }} <br/>
  // {{ course.rating | number }} <br/>
  // {{ course.price }} <br/>
  // {{ course.releaseDate }} <br/>
  // <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  // <button class="btn btn-primary" (click)="onSave">Save</button>
  // styleUrls: ['./course.component.css']
})
export class CourseComponent{
  text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
  `
  // course = {
  //   title: "The Complete Angular Course",
  //   rating: 4.9745,
  //   students: 3213,
  //   price: 190.45,
  //   releaseDate: new Date(2016,3,1)
  // }
  // email ="me@prueba";
  // onKeyUp(){
  //   console.log(this.email);
  // }
  // onSave(){
  //   console.log("button was clicked");
  // } 
}
