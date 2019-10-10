import { PasswordValidators } from './password.validators';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
    form;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            oldPassword: ['', 
                Validators.required,
                PasswordValidators.validOldPassword
            ],
            newPassword: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, { 
            validator: PasswordValidators.passwordShouldMatch
        });
    }

    get oldPassword(){
        return this.form.get('oldPassword');
    }

    get newPassword(){
        return this.form.get('newPassword');
    }

    get confirmPassword(){
        return this.form.get('confirmPassword');
    }

    prueba(f){
        console.log(f);
    }
}