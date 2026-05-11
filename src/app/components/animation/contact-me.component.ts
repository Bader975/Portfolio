import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { InViewDirective } from '../../directives/in-view.directive';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [IconComponent, InViewDirective],
  template: `
    <section class="contact-section" aria-label="Contact section">
      <div
        class="contact-visual"
        appInView
        (inViewChange)="inView.set($event)"
        [class.contact-visual--visible]="inView()"
      >
        <h1>Get to know me better through my Social Media platforms</h1>
        <img
          src="/mobile-marketing.svg"
          width="420"
          height="360"
          loading="lazy"
          alt="Social media marketing illustration"
        >
      </div>

      <footer class="social-links">
        <a
          class="icon-button social-link social-link--linkedin"
          href="https://www.linkedin.com/in/bader-mohammad-al/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <app-icon name="linkedin" />
          <span>Linkedin</span>
        </a>
        <a
          class="icon-button social-link social-link--github"
          href="https://github.com/Bader975"
          target="_blank"
          rel="noopener noreferrer"
        >
          <app-icon name="github" />
          <span>Github</span>
        </a>
        <a class="icon-button social-link social-link--email" href="mailto:bader97alyami@hotmail.com">
          <app-icon name="email" />
          <span>Email Me</span>
        </a>
      </footer>
    </section>
  `,
  styleUrl: './contact-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactMeComponent {
  protected readonly inView = signal(false);
}
