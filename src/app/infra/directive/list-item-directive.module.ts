import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListItemDirective } from './list-item.directive';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ListItemDirective,
    ],
    exports: [
        ListItemDirective,
    ]
})
export class ListItemDirectiveModule { }
