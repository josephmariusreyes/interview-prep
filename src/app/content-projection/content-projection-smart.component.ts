import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PanelComponent } from './panel/panel.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';

@Component({
  selector: 'app-content-projection-smart',
  standalone: true,
  imports: [CommonModule, CardComponent, PanelComponent, TabsComponent, TabComponent],
  templateUrl: './content-projection-smart.component.html',
  styleUrls: ['./content-projection-smart.component.scss']
})
export class ContentProjectionSmartComponent {

}
