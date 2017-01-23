import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "views",
  pure: false
})


export class ViewsPipe implements PipeTransform {
  transform(input: Meal[], desiredViews) {
    var output: Meal[] = [];
    if(desiredViews === "lowCalorieMeals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredViews === "highCalorieMeals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
