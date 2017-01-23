import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
     <li [class]="priorityColor(currentMeal)" *ngFor="let currentMeal of meals">{{currentMeal.name}} // {{currentMeal.details}} // {{currentMeal.calories}} calories <button type="button" class="btn btn-default" (click)="editMeal(currentMeal)">Edit</button></li>
   </ul>
  `
})

export class MealListComponent {
  meals: Meal[] = [
    new Meal('Burger and fries','Only ate half of the fries', 650),
    new Meal('Chicken and veggies','Roasted both', 350),
    new Meal('Salmon and side salad', 'No dairy or gluten in meal', 375)
  ];

  priorityColor(currentMeal){
    if (currentMeal.calories >= 500){
      return "bg-danger";
    } else {
      return "bg-success";
    }
  }
}
