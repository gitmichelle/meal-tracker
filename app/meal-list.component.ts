import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allMeals" selected="selected">All Meals</option>
    <option value="highCalorieMeals">High Calorie Meals</option>
    <option value="lowCalorieMeals">Low Calorie Meals</option>
  </select>

  <ul>
     <li *ngFor="let currentMeal of childMealList | views:filterByViews">{{currentMeal.name}} // {{currentMeal.details}} // {{currentMeal.calories}} calories <button type="button" class="btn btn-primary" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button></li>
   </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByViews: string = "allMeals";

  onChange(optionFromMenu) {
  this.filterByViews = optionFromMenu;
}

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
