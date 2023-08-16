import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<main>
    <header class="brand-name">
      <img
        aria-hidden="true"
        alt="logo"
        class="brand-logo"
        src="/assets/logo.svg"
      />
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Homes';
}
