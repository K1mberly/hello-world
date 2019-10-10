import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.css']
})
export class LikeComponent {
    @Input() isActive: boolean;
    @Input() likesCount: number;
    @Output() click = new EventEmitter();

    onClick() {
        this.likesCount += (this.isActive) ? -1 : 1;
        this.isActive = !this.isActive;
        this.click.emit({ newValue: this.isActive, newNumber: this.likesCount });
    }
}

export interface LikeChangedEventArgs {
    newValue: boolean,
    newNumber: number
}