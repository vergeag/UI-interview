import { Component } from '@angular/core';
import { TheButtonComponent } from './the-button/the-button.component';
@Component({
  selector: 'app-root',
  imports: [TheButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'style-the-button';
}
