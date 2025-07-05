import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private message = 'Hello from ExampleService!';

  getMessage(): string {
    return this.message;
  }
}
