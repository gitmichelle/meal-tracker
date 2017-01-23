import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal List</h1>
    <hr>
    <meal-list></meal-list>
    <div>
      <div *ngIf="selectedMeal">
        <h3>{{selectedMeal.name}}</h3>
        <hr>
        <h3>Edit Meal</h3>
        <label>Enter Meal Name:</label>
        <input [(ngModel)]="selectedMeal.name">
        <label>Enter Meal Details:</label>
        <input [(ngModel)]="selectedMeal.details">
        <label>Enter Meal Calories:</label>
        <input [(ngModel)]="selectedMeal.calories">
         <br>
         <button type="button" class="btn btn-info" (click)="finishedEditing()">Done</button>
       </div>
    </div>
  </div>
  `
})

export class AppComponent {
  selectedMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}
