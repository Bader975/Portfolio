import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  siAngular,
  siBootstrap,
  siChartdotjs,
  siChakraui,
  siCss,
  siExpress,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siJquery,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPrisma,
  siReact,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';

export type IconName =
  | 'angular'
  | 'bar-chart'
  | 'bootstrap'
  | 'chakra'
  | 'css'
  | 'database'
  | 'email'
  | 'express'
  | 'file-pdf'
  | 'git'
  | 'github'
  | 'html'
  | 'javascript'
  | 'jquery'
  | 'linkedin'
  | 'menu'
  | 'mysql'
  | 'nextjs'
  | 'node'
  | 'prisma'
  | 'react'
  | 'server'
  | 'tailwind'
  | 'typescript'
  | 'x';

interface IconDefinition {
  readonly viewBox: string;
  readonly path: string;
  readonly color: string;
}

const fromSimpleIcon = (icon: SimpleIcon): IconDefinition => ({
  viewBox: '0 0 24 24',
  path: icon.path,
  color: `#${icon.hex}`,
});

const ICONS: Record<IconName, IconDefinition> = {
  angular: fromSimpleIcon(siAngular),
  'bar-chart': fromSimpleIcon(siChartdotjs),
  bootstrap: fromSimpleIcon(siBootstrap),
  chakra: fromSimpleIcon(siChakraui),
  css: fromSimpleIcon(siCss),
  database: fromSimpleIcon(siMysql),
  express: fromSimpleIcon(siExpress),
  git: fromSimpleIcon(siGit),
  html: fromSimpleIcon(siHtml5),
  javascript: fromSimpleIcon(siJavascript),
  jquery: fromSimpleIcon(siJquery),
  mysql: fromSimpleIcon(siMysql),
  nextjs: fromSimpleIcon(siNextdotjs),
  node: fromSimpleIcon(siNodedotjs),
  prisma: fromSimpleIcon(siPrisma),
  react: fromSimpleIcon(siReact),
  tailwind: fromSimpleIcon(siTailwindcss),
  typescript: fromSimpleIcon(siTypescript),
  github: {
    ...fromSimpleIcon(siGithub),
    color: '#ffffff',
  },
  email: {
    viewBox: '0 0 24 24',
    color: '#ffffff',
    path: 'M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 3.1V17h16V8.1l-8 5.2-8-5.2Zm1.5-1.1 6.5 4.2L18.5 7h-13Z',
  },
  'file-pdf': {
    viewBox: '0 0 24 24',
    color: '#ffffff',
    path: 'M6 2h8l5 5v15H6V2Zm7 1.8V8h4.2L13 3.8ZM8 13h2.1c1.4 0 2.2.7 2.2 1.9s-.8 1.9-2.2 1.9H9.2V19H8v-6Zm1.2 2.8h.8c.7 0 1-.3 1-.9s-.3-.9-1-.9h-.8v1.8Zm4.1-2.8h2c1.7 0 2.8 1.1 2.8 3s-1.1 3-2.8 3h-2v-6Zm1.2 5h.7c1 0 1.6-.7 1.6-2s-.6-2-1.6-2h-.7v4Z',
  },
  linkedin: {
    viewBox: '0 0 24 24',
    color: '#ffffff',
    path: 'M5 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 10h4v11H3V10Zm6 0h3.8v1.5h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6V21h-4v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V21H9V10Z',
  },
  menu: {
    viewBox: '0 0 24 24',
    color: 'currentColor',
    path: 'M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z',
  },
  server: {
    viewBox: '0 0 24 24',
    color: '#153243',
    path: 'M4 4h16v6H4V4Zm2 2v2h12V6H6Zm-2 8h16v6H4v-6Zm2 2v2h12v-2H6Zm11-9h1v1h-1V7Zm0 10h1v1h-1v-1Z',
  },
  x: {
    viewBox: '0 0 24 24',
    color: 'currentColor',
    path: 'm6.4 5 12.6 12.6-1.4 1.4L5 6.4 6.4 5Zm11.2 0L19 6.4 6.4 19 5 17.6 17.6 5Z',
  },
};

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg
      aria-hidden="true"
      focusable="false"
      [attr.viewBox]="icon().viewBox"
      [style.color]="icon().color"
      [style.fill]="icon().color"
    >
      <path [attr.d]="icon().path" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  protected readonly icon = computed(() => ICONS[this.name()]);
}
