import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  template: `
    <div class="typewriter-shell" aria-live="polite">
      <span class="typewriter">
        <span>I'm </span>
        <span>{{ displayText() }}</span>
        <span class="typewriter__cursor" aria-hidden="true"></span>
      </span>
    </div>
  `,
  styleUrl: './typewriter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypewriterComponent implements OnInit {
  private readonly phrases = ['Bader Mohammad', 'Web Devoleper', 'Software Engineer'];
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly displayText = signal(this.phrases[0]);
  private phraseIndex = 0;
  private characterIndex = 0;
  private deleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.displayText.set('');
    this.tick();
    this.destroyRef.onDestroy(() => clearTimeout(this.timeoutId));
  }

  private tick(): void {
    const phrase = this.phrases[this.phraseIndex] ?? this.phrases[0];

    if (this.deleting) {
      this.characterIndex -= 1;
    } else {
      this.characterIndex += 1;
    }

    this.displayText.set(phrase.slice(0, this.characterIndex));

    if (!this.deleting && this.characterIndex === phrase.length) {
      this.deleting = true;
      this.timeoutId = setTimeout(() => this.tick(), 1300);
      return;
    }

    if (this.deleting && this.characterIndex === 0) {
      this.deleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
    }

    this.timeoutId = setTimeout(() => this.tick(), this.deleting ? 55 : 95);
  }
}
