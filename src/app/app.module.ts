import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemperatureConversionComponent } from './components/temperature-conversion/temperature-conversion.component';
import { VolumeConversionComponent } from './components/volume-conversion/volume-conversion.component';
import { UcHeaderComponent } from './components/uc-header/uc-header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemperatureConversionComponent,
    VolumeConversionComponent,
    UcHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
