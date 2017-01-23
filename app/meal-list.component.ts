import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
     <li [class]="priorityColor(currentMeal)" *ngFor="let currentMeal of childMealList">{{currentMeal.name}} // {{currentMeal.details}} // {{currentMeal.calories}} calories <button type="button" class="btn btn-default" (click)="editMeal(currentMeal)">Edit</button></li>
   </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];

  priorityColor(currentMeal){
    if (currentMeal.calories >= 500){
      return "bg-danger";
    } else {
      return "bg-success";
    }
  }
}
