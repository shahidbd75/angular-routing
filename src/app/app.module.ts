import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidenavComponent,
    HeaderComponent,
    LoginComponent,
    ProductsComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AdminModule, CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
