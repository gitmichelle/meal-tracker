import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <hr>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <hr>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
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

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
    console.log(newMealFromChild);
  }

}
