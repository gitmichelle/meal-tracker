import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal List</h1>
    <ul>
       <li [class]="priorityColor(currentMeal)" *ngFor="let currentMeal of meals">{{currentMeal.name}} // {{currentMeal.details}} // {{currentMeal.calories}} calories <button type="button" class="btn btn-default" (click)="editMeal()">Edit</button></li>
     </ul>
     <hr>
    <div>
     <h3>{{selectedMeal.name}}</h3>
    <h3>Edit Meal</h3>
    <label>Enter Meal Name:</label>
    <input [(ngModel)]="selectedMeal.name">
    <label>Enter Meal Details:</label>
    <input [(ngModel)]="selectedMeal.details">
    <label>Enter Meal Calories:</label>
    <input [(ngModel)]="selectedMeal.calories">
     <br>
    </div>
  </div>
  `
})

export class AppComponent {
  meals: Meal[] = [
    new Meal('Burger and fries','Only ate half of the fries', 650),
    new Meal('Chicken and veggies','Roasted both', 350),
    new Meal('Salmon and side salad', 'No dairy or gluten in meal', 375)
  ];
  selectedMeal: Meal = this.meals[0];

  editMeal() {
    alert("You just requested to edit a Meal!");
  }
  priorityColor(currentMeal){
    if (currentMeal.calories >= 500){
      return "bg-danger";
    } else {
      return "bg-success";
    }
  }
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number) { }
}



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
