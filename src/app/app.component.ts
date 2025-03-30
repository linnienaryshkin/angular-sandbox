import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrialComponent } from './trial/trial.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, TrialComponent],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section>
        <app-trial></app-trial>
      </section>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'homes';
}
