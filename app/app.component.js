"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.meals = [
            new Meal('Burger and fries', 'Only ate half of the fries', 650),
            new Meal('Chicken and veggies', 'Roasted both', 350),
            new Meal('Salmon and side salad', 'No dairy or gluten in meal', 375)
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n    <h1>Meal List</h1>\n    <ul>\n       <li *ngFor=\"let currentMeal of meals\">{{currentMeal.name}} // {{currentMeal.details}} // {{currentMeal.calories}} calories</li>\n     </ul>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Meal = (function () {
    function Meal(name, details, calories) {
        this.name = name;
        this.details = details;
        this.calories = calories;
    }
    return Meal;
}());
exports.Meal = Meal;
// import { Component } from '@angular/core';
// import { Meal } from './meal.model';
// @Component({
//   selector: 'app-root',
//   template: `
//   <div class="container">
//     <h1>Meal Tracker</h1>
//     <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
//     <hr>
//       <div>
//         <div *ngIf="selectedMeal">
//           <h3>{{selectedMeal.name}}</h3>
//           <hr>
//           <h3>Edit Meal</h3>
//           <label>Enter Meal Name:</label>
//           <input [(ngModel)]="selectedMeal.name">
//           <label>Enter Meal Details:</label>
//           <input [(ngModel)]="selectedMeal.details">
//           <label>Enter Meal Calories:</label>
//           <input [(ngModel)]="selectedMeal.calories">
//           <button (click)="finishedEditing()">Done</button>
//         </div>
//       </div>
//   </div>
//   `
// })
//
// export class AppComponent {
//   selectedMeal = null;
//
//   masterMealList: Meal[] = [
//     new Meal('Burger and fries', 'Ordered a small fry', 650),
//     new Meal('Chicken breast and veggies', 'Roasted', 350),
//     new Meal('Salmon and side salad', 'Side salad had no dairy', 375)
//   ];
//
//   editMeal(clickedMeal) {
//     this.selectedMeal = clickedMeal;
//   }
//
//   finishedEditing() {
//     this.selectedMeal = null;
//   }
//
// }
//# sourceMappingURL=app.component.js.map