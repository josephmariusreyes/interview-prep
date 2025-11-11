import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tab-content" [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .tab-content {
      padding: 20px;
    }
  `]
})
export class TabComponent {
  @Input() title: string = '';
  active: boolean = false;
}
