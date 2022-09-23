import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiereListComponent } from './biere-list/biere-list.component';
import { DetailBiereComponent } from './detail-biere/detail-biere.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { HeightCardDirective } from './directives/height-card.directive';
import { HeightImageCardDirective } from './directives/height-image-card.directive';


@NgModule({
  declarations: [
    AppComponent,
    BiereListComponent,
    DetailBiereComponent,
    PageNotFoundComponent,
    BorderCardDirective,
    HeightCardDirective,
    HeightImageCardDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
