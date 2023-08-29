import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Routing/home/home.component';
import { AboutUsComponent } from './Routing/about-us/about-us.component';
import { ContactUsComponent } from './Routing/contact-us/contact-us.component';
import { LoginComponent } from './Routing/login/login.component';
import { NewUserComponent } from './Routing/new-user/new-user.component';
import { NotfoundComponent } from './Routing/notfound/notfound.component';
import { ForgotpasswordComponent } from './Routing/forgotpassword/forgotpassword.component';
import { LaptopComponent } from './Routing/products/laptop/laptop.component';
import { TvComponent } from './Routing/products/tv/tv.component';
import { TabletComponent } from './Routing/products/tablet/tablet.component';
import { WashingMachineComponent } from './Routing/products/washing-machine/washing-machine.component';
import { ProductsComponent } from './Routing/products/products.component';
import { PostComponent } from './Routing/post/post.component';
import { PostdetailsComponent } from './Routing/postdetails/postdetails.component';
import { UserComponent } from './Routing/user/user.component';
import { UserdetailsComponent } from './Routing/userdetails/userdetails.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}, // localhost:4200/login
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'newuser', component: NewUserComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  
  {path: 'product', children: [
    
    { path: '', component: ProductsComponent}, // localhost:4200/product/laptop
    {path: 'laptop', component: LaptopComponent},
    { path: 'tv', component: TvComponent},
    {path: 'tablet', component: TabletComponent},
    {path: 'washingmachine', component: WashingMachineComponent},

  ] },
  {path: 'post', component: PostComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  {path: 'user', component: UserComponent},
  {path: 'userdetails/:id', component: UserdetailsComponent},
  {path: 'userdetails', component: UserdetailsComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }