import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    FoodDetailComponent,
    FoodListComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class InventoryModule { }
