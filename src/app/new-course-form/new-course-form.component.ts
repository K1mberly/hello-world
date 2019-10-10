import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent  {
    form;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            name: ['', Validators.required],
            contact: fb.group({
                email: [],
                phone: []
            }),
            topics: fb.array([])
        });
    }

    // una manera distinta de hacer esto con un constructor como arriba
    // form = new FormGroup({
    //     name: new FormControl('', Validators.required),
    //     contact: new FormGroup({
    //         email: new FormControl(),
    //         phone: new FormControl()
    //     }),
    //     topics: new FormArray([]) // para trabajar con un array de objetos en un formulario
    // });

    // ************************** v12

    // form = new FormGroup({
    //     topics: new FormArray([]) // para trabajar con un array de objetos en un formulario
    // });

    addTopic(topic: HTMLInputElement){
        this.topics.push(new FormControl(topic.value));
        topic.value = '';
    }

    removeTopic(topic: FormControl){
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }

    get topics(){
        return this.form.get('topics') as FormArray;
    }

    // ***************
    // categories = [
    //     {id: 1, name: 'Development'},
    //     {id: 2, name: 'Art'},
    //     {id: 3, name: 'Languages'},
    // ]

    // submit(x){
    //     console.log(x);
    // }
}
