import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'shopping-list',
        component: ShoppingListComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
})
export class ShoppingListModule {}
