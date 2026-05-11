import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <h1 class="projects-heading" id="my-projects">My Projects:</h1>
    <hr class="section-divider">

    <section class="projects-grid" aria-label="Projects section">
      @for (project of projectsService.projects(); track project.id) {
        <article class="project-card">
          <a [href]="project.href" target="_blank" rel="noopener noreferrer">
            <img
              [src]="project.image"
              width="300"
              height="300"
              loading="lazy"
              alt="Image of one of Bader Mohammad's projects"
              class="project-card__image"
            >
          </a>
          <h2>{{ project.title }}</h2>
          <hr>
          <p>{{ project.description }}</p>
        </article>
      }
    </section>
  `,
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly projectsService = inject(ProjectsService);
}
