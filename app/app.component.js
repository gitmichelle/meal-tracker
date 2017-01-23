"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.selectedMeal = null;
    }
    AppComponent.prototype.editMeal = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedMeal = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <div class=\"container\">\n    <h1>Meal List</h1>\n    <hr>\n    <meal-list></meal-list>\n    <div>\n      <div *ngIf=\"selectedMeal\">\n        <h3>{{selectedMeal.name}}</h3>\n        <hr>\n        <h3>Edit Meal</h3>\n        <label>Enter Meal Name:</label>\n        <input [(ngModel)]=\"selectedMeal.name\">\n        <label>Enter Meal Details:</label>\n        <input [(ngModel)]=\"selectedMeal.details\">\n        <label>Enter Meal Calories:</label>\n        <input [(ngModel)]=\"selectedMeal.calories\">\n         <br>\n         <button type=\"button\" class=\"btn btn-info\" (click)=\"finishedEditing()\">Done</button>\n       </div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map