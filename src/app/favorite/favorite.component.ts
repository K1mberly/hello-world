import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // inputs: ['isFavorite']
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected:boolean;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit(this.isSelected);
  }
  title:string;



}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}