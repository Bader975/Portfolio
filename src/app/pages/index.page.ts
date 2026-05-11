import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';

import { HomePageComponent } from '../components/home/home-page.component';
import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_SOCIAL_IMAGE,
  SITE_TITLE,
  SITE_URL,
} from '../shared/site.config';

export const routeMeta: RouteMeta = {
  title: SITE_TITLE,
  meta: [
    {
      name: 'description',
      content: SITE_DESCRIPTION,
    },
    {
      name: 'keywords',
      content: SITE_KEYWORDS,
    },
    {
      name: 'author',
      content: SITE_AUTHOR,
    },
    {
      property: 'og:title',
      content: SITE_TITLE,
    },
    {
      property: 'og:description',
      content: SITE_DESCRIPTION,
    },
    {
      property: 'og:url',
      content: `${SITE_URL}/`,
    },
    {
      property: 'og:image',
      content: SITE_SOCIAL_IMAGE,
    },
    {
      name: 'twitter:title',
      content: SITE_TITLE,
    },
    {
      name: 'twitter:description',
      content: SITE_DESCRIPTION,
    },
  ],
};

@Component({
  standalone: true,
  imports: [HomePageComponent],
  template: '<app-home-page />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPageComponent {}
