import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from '../Routing/products/laptop/laptop.component';
import { TabletComponent } from '../Routing/products/tablet/tablet.component';
import { TvComponent } from '../Routing/products/tv/tv.component';
import { WashingMachineComponent } from '../Routing/products/washing-machine/washing-machine.component';
import { ProductsComponent } from '../Routing/products/products.component';
import { AppRoutingModule } from '../app-routing.module';
import { UtilityModule } from '../utility.module';



@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    TvComponent,
    TabletComponent,
    WashingMachineComponent
  ],
  imports: [
    
    CommonModule,
    AppRoutingModule,
    UtilityModule
  ]
})
export class ProductsModule { }
