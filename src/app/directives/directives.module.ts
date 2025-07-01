import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesSmartComponent } from './directives-smart.component';
import { DirectivesDumbComponent } from './directives-dumb.component';

const routes: Routes = [
  { path: '', component: DirectivesSmartComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DirectivesSmartComponent,
    DirectivesDumbComponent
  ]
})
export class DirectivesModule {}
