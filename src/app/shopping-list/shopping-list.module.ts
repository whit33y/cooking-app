import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    RouterModule.forChild([
      {
        path: 'shopping-list',
        component: ShoppingListComponent,
      },
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
})
export class ShoppingListModule {}
