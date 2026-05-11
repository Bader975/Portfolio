import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { IconComponent, IconName } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [IconComponent],
  template: `
    <article class="skill-card">
      <app-icon [name]="icon()" />
      <hr>
      <span>{{ label() }}</span>
    </article>
  `,
  styleUrl: './skill-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillCardComponent {
  readonly icon = input.required<IconName>();
  readonly label = input.required<string>();
}
