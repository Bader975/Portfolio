import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';

import { CvViewerComponent } from '../../components/cv/cv-viewer.component';
import { SITE_AUTHOR, SITE_URL } from '../../shared/site.config';

export const routeMeta: RouteMeta = {
  title: "Bader's CV",
  meta: [
    {
      name: 'description',
      content: 'Check out my PDF CV to learn more about my skills and experience.',
    },
    {
      name: 'author',
      content: SITE_AUTHOR,
    },
    {
      name: 'keywords',
      content: 'CV, resume, portfolio',
    },
    {
      name: 'application-name',
      content: 'Portfolio',
    },
    {
      property: 'og:title',
      content: 'PDF CV - Bader',
    },
    {
      property: 'og:description',
      content: 'Check out my PDF CV',
    },
    {
      property: 'og:url',
      content: `${SITE_URL}/cv`,
    },
  ],
};

@Component({
  standalone: true,
  imports: [CvViewerComponent],
  template: '<app-cv-viewer />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CvPageComponent {}
