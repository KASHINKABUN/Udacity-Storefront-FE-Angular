import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppBarComponent } from './app-bar/app-bar.component';
import { ProductsComponent } from './products/products.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CongratulationComponent } from './congratulation/congratulation.component';
import { BlankContentComponent } from './blank-content/blank-content.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    ProductsComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LoginComponent,
    CartComponent,
    CongratulationComponent,
    BlankContentComponent,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
