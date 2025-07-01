import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignalsSmartComponent } from './signals-smart.component';
import { SignalsDumbComponent } from './signals-dumb.component';

const routes: Routes = [
  { path: '', component: SignalsSmartComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SignalsSmartComponent,
    SignalsDumbComponent
  ]
})
export class SignalsModule {}
