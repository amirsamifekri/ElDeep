import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlankLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ElDeeb';
}
