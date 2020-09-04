import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './homePage/login/login.component';
import { BookListComponent } from './BookDetails/book-list/book-list.component';
import { AddFeedbackComponent } from './Feedback/add-feedback/add-feedback.component';
import { EditFeedbackComponent } from './Feedback/edit-feedback/edit-feedback.component';
import { OrderListComponent } from './OrderDetails/order-list/order-list.component';
import { AddCreditCardDetailsComponent } from './PaymentDetails/add-credit-card-details/add-credit-card-details.component';
import { AddTocartComponent } from './Shoppingcart/add-tocart/add-tocart.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ShowUserComponent } from './user/show-user/show-user.component';
import { UpdateCartComponent } from './ShoppingCart/update-cart/update-cart.component';
import { OrderDetailsComponent } from './OrderDetails/order-details/order-details.component';
import { BookDetailComponent } from './BookDetails/book-detail/book-detail.component';
import { AddbookComponent } from './BookDetails/addbook/addbook.component';
import { UpdatebookComponent } from './BookDetails/updatebook/updatebook.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'booklist', component:BookListComponent},
  {path:'bookdetail',component:BookDetailComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'updatebook/:id',component:UpdatebookComponent},
  {path:'editfeedback/:id', component:EditFeedbackComponent},
  {path:'addfeedback', component:AddFeedbackComponent},
  {path:'orderlist', component:OrderListComponent},
  {path:'orderdetails', component:OrderDetailsComponent},
  {path:'addcarddetails', component:AddCreditCardDetailsComponent},
  {path:'addtocart', component:AddTocartComponent},
  {path:'updatecart/:id', component:UpdateCartComponent},
  {path:'edituser/:id', component:EditUserComponent},
  {path:'createuser', component:AddUserComponent},
  {path:'showuser', component:ShowUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
