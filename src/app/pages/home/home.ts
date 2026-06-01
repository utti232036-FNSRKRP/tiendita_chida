import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styles: `
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}

