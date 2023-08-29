import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Service1Service } from './Services/service1.service';

import { LoginComponent } from './Routing/login/login.component';
import { AboutUsComponent } from './Routing/about-us/about-us.component';
import { ContactUsComponent } from './Routing/contact-us/contact-us.component';
import { HomeComponent } from './Routing/home/home.component';
import { NewUserComponent } from './Routing/new-user/new-user.component';
import { NotfoundComponent } from './Routing/notfound/notfound.component';
import { ForgotpasswordComponent } from './Routing/forgotpassword/forgotpassword.component';
import { PostComponent } from './Routing/post/post.component';
import { PostdetailsComponent } from './Routing/postdetails/postdetails.component';
import { UserComponent } from './Routing/user/user.component';
import { UserdetailsComponent } from './Routing/userdetails/userdetails.component';
import { ProductsModule } from './products/products.module';
import { UtilityModule } from './utility.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    NewUserComponent,
    NotfoundComponent,
    ForgotpasswordComponent,
    PostComponent,
    PostdetailsComponent,
    UserComponent,
    UserdetailsComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductsModule,
    UtilityModule
  ],
  providers: [
    // Service1Service    // It's another method to use service 
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
  // constructor(){
  //   console.log('AppModule constructure called.'); 
  // }
}