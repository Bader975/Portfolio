import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { throttleTime, filter, fromEvent, map, startWith , tap, debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { IconComponent } from '../shared/icons/icon.component';
import { NAV_LINKS, NavLink } from './nav-links';

const SCROLL_THRESHOLD_MIN = 50;
const SCROLL_THRESHOLD_MAX = 650;
const DEBOUNCE_MS = 200;

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [IconComponent, RouterLink],
  template: `
    <header class="site-header" [class.site-header--contrast]="navInContrastRange()">
      <nav #navbar id="navbar" class="nav-shell" aria-label="Main navigation">
        <a class="logo-button" routerLink="/" aria-label="Go to homepage" (click)="closeMobileMenu()">
          <img
            src="/bm-logo-remove-bg.webp"
            width="120"
            height="100"
            alt="Bader Mohammad logo"
            class="logo-button__mark"
          >
        </a>

        <button
          class="mobile-menu-button"
          type="button"
          aria-label="Toggle mobile menu"
          [attr.aria-expanded]="mobileMenuOpen()"
          (click)="toggleMobileMenu()"
        >
          <app-icon [name]="mobileMenuOpen() ? 'x' : 'menu'" />
        </button>

        <div class="desktop-links" [class.desktop-links--light]="navInContrastRange()">
          @for (link of navLinks; track link.label; let index = $index) {
            <a
              class="nav-link"
              [class.nav-link--active]="activeIndex() === index"
              [routerLink]="getRouterLink(link)"
              [fragment]="getFragment(link)"
              (click)="activateLink(index)"
            >
              {{ getLinkLabel(link) }}
            </a>
          }
        </div>

        @if (mobileMenuOpen()) {
          <div class="mobile-menu" role="dialog" aria-label="Mobile navigation">
            @for (link of navLinks; track link.label) {
              <a
                class="mobile-menu__link"
                [routerLink]="getRouterLink(link)"
                [fragment]="getFragment(link)"
                (click)="closeMobileMenu()"
              >
                {{ getLinkLabel(link) }}
              </a>
            }
          </div>
        }
      </nav>
    </header>
  `,
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('navbar') private readonly navbar?: ElementRef<HTMLElement>;

  protected readonly navLinks = NAV_LINKS;
  protected readonly navInContrastRange = signal(false);
  protected readonly activeIndex = signal<number | null>(null);
  protected readonly mobileMenuOpen = signal(false);
  private readonly currentPath = signal('/');

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);

  constructor() {
    this.currentPath.set(this.normalizePath(this.router.url));

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => {
        this.currentPath.set(this.normalizePath(event.urlAfterRedirects));
        this.mobileMenuOpen.set(false);
      });
  }

  ngAfterViewInit(): void {
    this.setScrollPadding();
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    fromEvent(globalThis.window, 'scroll', { passive: true })
      .pipe(
        startWith(null),
        debounceTime(DEBOUNCE_MS),
        map(() => globalThis.window.scrollY),
        tap(console.log),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((scrollY) => this.updateScrollState(scrollY));
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected activateLink(index: number): void {
    this.activeIndex.set(index);
    this.closeMobileMenu();
  }

  protected getRouterLink(link: NavLink): string {
    if (link.href === '/cv') {
      return '/cv';
    }

    return this.currentPath() !== '/' ? link.awayHref ?? '/' : '/';
  }

  protected getFragment(link: NavLink): string | undefined {
    if (link.href === '/cv' || this.currentPath() !== '/') {
      return undefined;
    }

    const fragment = link.href.split('#')[1];
    return fragment || undefined;
  }

  protected getLinkLabel(link: NavLink): string {
    if (link.awayLabel && this.currentPath() !== '/') {
      return link.awayLabel;
    }

    return link.homeLabel ?? link.label;
  }

  private setScrollPadding(): void {
    if (!isPlatformBrowser(this.platformId) || !this.navbar) {
      return;
    }

    const navbarHeight = this.navbar.nativeElement.offsetHeight;
    this.document.documentElement.style.setProperty(
      '--scroll-padding',
      `${navbarHeight}px`,
    );
  }

  private normalizePath(url: string): string {
    return url.split('#')[0]?.split('?')[0] || '/';
  }

  private updateScrollState(scrollY: number): void {
    this.navInContrastRange.set(
      scrollY >= SCROLL_THRESHOLD_MIN && scrollY <= SCROLL_THRESHOLD_MAX,
    );
  }
}
