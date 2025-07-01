import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicesSmartComponent } from './services-smart.component';
import { ServicesDumbComponent } from './services-dumb.component';

const routes: Routes = [
  { path: '', component: ServicesSmartComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ServicesSmartComponent,
    ServicesDumbComponent
  ]
})
export class ServicesModule {}
