import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  AfterViewInit,
  Output,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appInView]',
  standalone: true,
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  @Input() rootMargin = '-100px 0px';
  @Input() threshold = 0;
  @Output() readonly inViewChange = new EventEmitter<boolean>();

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.inViewChange.emit(true);
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => this.inViewChange.emit(entry?.isIntersecting ?? false),
      {
        rootMargin: this.rootMargin,
        threshold: this.threshold,
      },
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
