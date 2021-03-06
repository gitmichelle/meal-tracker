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
var meal_model_1 = require('./meal.model');
var AppComponent = (function () {
    function AppComponent() {
        this.selectedMeal = null;
        this.masterMealList = [
            new meal_model_1.Meal('Burger and fries', 'Only ate half of the fries', 650),
            new meal_model_1.Meal('Chicken and veggies', 'Roasted both', 350),
            new meal_model_1.Meal('Salmon and side salad', 'No dairy or gluten in meal', 375)
        ];
    }
    AppComponent.prototype.editMeal = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedMeal = null;
    };
    AppComponent.prototype.addMeal = function (newMealFromChild) {
        this.masterMealList.push(newMealFromChild);
        console.log(newMealFromChild);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <div class=\"container\">\n    <h1>Meal Tracker</h1>\n    <hr>\n    <meal-list [childMealList]=\"masterMealList\" (clickSender)=\"editMeal($event)\"></meal-list>\n    <hr>\n    <edit-meal [childSelectedMeal]=\"selectedMeal\" (doneButtonClickedSender)=\"finishedEditing()\"></edit-meal>\n    <new-meal (newMealSender)=\"addMeal($event)\"></new-meal>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map