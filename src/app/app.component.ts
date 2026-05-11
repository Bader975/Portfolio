import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { NavBarComponent } from './layouts/nav-bar.component';
import { SITE_URL } from './shared/site.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, RouterOutlet],
  template: `
    <app-nav-bar />
    <main class="site-main">
      <router-outlet />
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  constructor() {
    this.ensureCanonical(this.router.url);

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => this.ensureCanonical(event.urlAfterRedirects));
  }

  private ensureCanonical(url: string): void {
    const cleanPath = url.split('#')[0]?.split('?')[0] || '/';
    const canonicalHref = `${SITE_URL}${cleanPath === '/' ? '/' : cleanPath}`;
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', canonicalHref);
  }
}
