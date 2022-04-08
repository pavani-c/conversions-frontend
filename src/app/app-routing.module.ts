import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TemperatureConversionComponent } from './components/temperature-conversion/temperature-conversion.component';
import { VolumeConversionComponent } from './components/volume-conversion/volume-conversion.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "temp-conversion", component: TemperatureConversionComponent},
  {path: "volume-conversion", component: VolumeConversionComponent}  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
