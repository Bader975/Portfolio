import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconName } from '../../shared/icons/icon.component';
import { SkillCardComponent } from './skill-card.component';

interface Skill {
  readonly icon: IconName;
  readonly label: string;
}

const SKILLS: readonly Skill[] = [
  { icon: 'html', label: 'HTML' },
  { icon: 'css', label: 'CSS' },
  { icon: 'tailwind', label: 'Tailwind CSS' },
  { icon: 'bootstrap', label: 'Bootstrap' },
  { icon: 'chakra', label: 'Chakra UI' },
  { icon: 'angular', label: 'Angular Material' },
  { icon: 'bar-chart', label: 'Chart.js' },
  { icon: 'jquery', label: 'jQuery' },
  { icon: 'react', label: 'React.js' },
  { icon: 'angular', label: 'Angular' },
  { icon: 'nextjs', label: 'Next.js' },
  { icon: 'javascript', label: 'JavaScript' },
  { icon: 'typescript', label: 'TypeScript' },
  { icon: 'node', label: 'Node.js' },
  { icon: 'express', label: 'Express.js' },
  { icon: 'mysql', label: 'MySQL' },
  { icon: 'prisma', label: 'Prisma' },
  { icon: 'git', label: 'Git' },
];

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent],
  template: `
    <section class="skills-section" aria-label="Skills section" id="skills">
      <h1 class="section-title">Skills</h1>
      <hr class="section-divider">
      <p>Here are some of the key technologies and tools I work with:</p>

      <div class="skills-grid">
        @for (skill of skills; track skill.label) {
          <app-skill-card [icon]="skill.icon" [label]="skill.label" />
        }
      </div>
    </section>
  `,
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly skills = SKILLS;
}
