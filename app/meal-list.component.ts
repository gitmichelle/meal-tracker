// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Meal } from './meal.model';
//
// @Component({
//   selector: 'meal-list',
//   template: `
//   <ul>
//   <li *ngFor="let currentMeal of childMealList">{{currentMeal.name}{currentMeal.details}{currentMeal.calories}} <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button></li>
//   </ul>
//   `
// })
//
// export class MealListComponent {
//   @Input() MealTaskList: Meal[];
//   @Output() clickSender = new EventEmitter();
//
//   editButtonHasBeenClicked(mealToEdit: Meal) {
//     this.clickSender.emit(mealToEdit);
//   }
//
//
//   priorityColor(currentMeal){
//     if (currentMeal.calories >= 500){
//       return "bg-danger";
//     } else {
//       return "bg-success";
//     }
//   }
// }
