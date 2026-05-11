import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { injectResponse } from '@analogjs/router/tokens';

export const routeMeta: RouteMeta = {
  title: 'Page Not Found',
  canActivate: [
    () => {
      const response = injectResponse();

      if (import.meta.env.SSR && response) {
        response.statusCode = 404;
      }

      return true;
    },
  ],
};

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="not-found">
      <h1>Page Not Found</h1>
      <a routerLink="/">Go Back Home</a>
    </section>
  `,
  styles: [
    `
      .not-found {
        display: grid;
        min-height: calc(100vh - 96px);
        align-content: center;
        justify-items: center;
        gap: 1rem;
        padding: 2rem;
        text-align: center;
      }

      .not-found h1 {
        margin: 0;
      }

      .not-found a {
        color: var(--color-brand);
        font-weight: 700;
        text-decoration: underline;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundPageComponent {}
