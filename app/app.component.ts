import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal List</h1>
    <hr>
    <meal-list [childMealList]="masterMealList"></meal-list>
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

  masterMealList: Meal[] = [
    new Meal('Burger and fries','Only ate half of the fries', 650),
    new Meal('Chicken and veggies','Roasted both', 350),
    new Meal('Salmon and side salad', 'No dairy or gluten in meal', 375)
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}
