import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-button-container',
  standalone: true,
  imports: [IconComponent, RouterLink],
  template: `
    <section class="button-section" aria-label="Primary actions">
      <div class="button-stack">
        <a class="icon-button action-button action-button--secondary" routerLink="/" fragment="my-projects">
          <app-icon name="react" />
          <span>My Projects</span>
        </a>
        <a class="icon-button action-button action-button--primary" routerLink="/cv">
          <app-icon name="file-pdf" />
          <span>Take a look at my CV</span>
        </a>
      </div>
    </section>
  `,
  styleUrl: './button-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonContainerComponent {}
