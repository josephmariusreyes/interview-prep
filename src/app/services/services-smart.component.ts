import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-services-smart',
  template: `
    <p>Services Smart Component</p>
    <p>Service message: {{ message }}</p>
  `,
  standalone: true
})
export class ServicesSmartComponent {
  message: string;

  constructor(private exampleService: ExampleService) {
    this.message = this.exampleService.getMessage();
  }
}
