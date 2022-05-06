import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailComponent } from './inventory/food-detail/food-detail.component';
import { FoodListComponent } from './inventory/food-list/food-list.component';

const routes: Routes = [
  {
    path:'', component: FoodListComponent
  },
  {
    path:'food-detail', component: FoodDetailComponent
  },
  { path: '',   redirectTo: 'food-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
