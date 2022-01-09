import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrderComponent } from './list-order/list-order.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListOrderComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ],
  exports:[ListOrderComponent]
})
export class OrdersModule { }
