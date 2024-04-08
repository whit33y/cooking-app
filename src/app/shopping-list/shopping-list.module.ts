import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingListComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
  ],
  // providers: [LoggingService], nie jest widoczne w całej apce ma osobną instancje danych
})
export class ShoppingListModule {}
