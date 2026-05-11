import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [IconComponent],
  template: `
    <section class="content-section" aria-label="Description section">
      <article class="intro-card">
        <p>Hi,</p>
        <p>
          I'm so happy that you visited my Portfolio, My name is Bader Mohammad and
          I'm <strong>JavaScript</strong> and
          <strong class="typescript">TypeScript</strong> Developer
        </p>
      </article>

      <article class="intro-card intro-card--compact">
        <p>
          I used for this Project AnalogJS
          <app-icon name="angular" />,
          it's powerful because of Server-side Rendering (SSR) and Search engine
          optimization (SEO)
          <app-icon name="server" />
        </p>
      </article>
    </section>
  `,
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {}
