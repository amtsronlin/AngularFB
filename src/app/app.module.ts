import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { JwtInterceptor } from './core/jwt.interceptor';
import { UserService } from './user/user.service';
import { TokenStorage } from './core/token.storage';
import { ErrorDialogComponent } from './error/error-dialog.component';
import { LoginService } from './login/login.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  entryComponents: [ErrorDialogComponent],
  providers: [
    ErrorDialogComponent,
    LoginService,
    UserService,
    TokenStorage,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
