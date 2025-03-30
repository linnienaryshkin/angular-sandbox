import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  Injector,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-trial',
  imports: [CommonModule],
  template: `
    <section>
      <button (click)="toggleTrial()">Activate Trial</button>
      <p *ngIf="showTrial()">Trial is active and not expired.</p>
      <p *ngIf="!showTrial()">Trial is either not active or expired.</p>
    </section>
  `,
})
export class TrialComponent {
  isTrial: WritableSignal<boolean> = signal(false);
  showTrial: Signal<boolean> = computed(() => this.isTrial());

  toggleTrial() {
    this.isTrial.set(!this.isTrial());
  }

  constructor() // private injector: Injector
  {
    // Register a new effect.
    effect(() => {
      console.log(`The isTrial is: ${this.isTrial()}`);
    });
  }

  // private loggingEffect = effect(() => {
  //   console.log(`The isTrial is: ${this.isTrial()}`);
  // });

  // initializeLogging(): void {
  //   effect(
  //     () => {
  //       console.log(`The isTrial is: ${this.isTrial()}`);
  //     },
  //     { injector: this.injector }
  //   );
  // }
}
