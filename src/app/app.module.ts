import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de tener esto importado
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LocalStorageService } from './local-storage.service'; // Importa tu servicio de LocalStorage
import { CartService } from './cart.service'; // Importa tu servicio de Carrito

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, LocalStorageService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
