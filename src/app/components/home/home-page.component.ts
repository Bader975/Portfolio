import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutComponent } from '../about/about.component';
import { ButtonContainerComponent } from './button-container.component';
import { ContactMeComponent } from '../animation/contact-me.component';
import { ContentComponent } from './content.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { TypewriterComponent } from '../animation/typewriter.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AboutComponent,
    ButtonContainerComponent,
    ContactMeComponent,
    ContentComponent,
    ProjectsComponent,
    SkillsComponent,
    TypewriterComponent,
  ],
  template: `
    <section class="hero-section" aria-label="Hero section">
      <img
        src="/hero-image.jpg"
        alt="Banner image"
        width="680"
        height="900"
        fetchpriority="high"
        class="hero-section__image"
      >
      <app-typewriter />
    </section>
    <app-button-container />
    <app-content />
    <app-about />
    <app-skills />
    <app-projects />
    <app-contact-me />
  `,
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
