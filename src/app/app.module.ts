import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import{ ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { BookListComponent } from './BookDetails/book-list/book-list.component';
import { OrderListComponent } from './OrderDetails/order-list/order-list.component';
import { AddTocartComponent } from './Shoppingcart/add-tocart/add-tocart.component';
import { UpdateCartComponent } from './ShoppingCart/update-cart/update-cart.component';
import { AddCreditCardDetailsComponent } from './PaymentDetails/add-credit-card-details/add-credit-card-details.component';
import { AddFeedbackComponent } from './Feedback/add-feedback/add-feedback.component';
import { EditFeedbackComponent } from './Feedback/edit-feedback/edit-feedback.component';
import { OrderDetailsComponent } from './OrderDetails/order-details/order-details.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ShowUserComponent } from './user/show-user/show-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { LoginComponent } from './homePage/login/login.component';
import { BookDetailComponent } from './BookDetails/book-detail/book-detail.component';
import { AddbookComponent } from './BookDetails/addbook/addbook.component';
import { UpdatebookComponent } from './BookDetails/updatebook/updatebook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ShowUserComponent,
    EditUserComponent,
    LoginComponent,
    BookListComponent,
    OrderListComponent,
    AddTocartComponent,
    UpdateCartComponent,
    AddCreditCardDetailsComponent,
    AddFeedbackComponent,
    EditFeedbackComponent,
    OrderDetailsComponent,
    BookDetailComponent,
    AddbookComponent,
    UpdatebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
