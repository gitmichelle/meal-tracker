import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>

  </div>
  `
})

export class AppComponent {
  selectedTask = null;

  masterMealList: Meal[] = [
    new Meal('Burger and fries', 'Ordered a small fry', 650),
    new Meal('Chicken breast and veggies', 'Roasted', 350),
    new Meal('Salmon and side salad', 'Side salad had no dairy', 375)
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

}
