import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RxjsSmartComponent } from './rxjs-smart.component';
import { RxjsDumbComponent } from './rxjs-dumb.component';

const routes: Routes = [
  { path: '', component: RxjsSmartComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RxjsSmartComponent,
    RxjsDumbComponent
  ]
})
export class RxjsModule {}
