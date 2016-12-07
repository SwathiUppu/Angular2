import {  PipeTransform, Pipe } from '@angular/core';
import { Users } from '../login/users';

@Pipe({
    name: 'searchFilter'
})
export class RecipeFilterPipe implements PipeTransform {

    transform(value: Users[], filterBy: string): Users[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: Users) =>
            product.recipe_name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}