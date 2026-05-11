import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { NgxExtendedPdfViewerModule, ProgressBarEvent } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-cv-viewer',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  template: `
    <section class="cv-page" aria-label="PDF CV">
      @if (isBrowser) {
        @if (isLoading()) {
          <div class="cv-page__loading" role="status" aria-live="polite">
            <div class="cv-page__spinner" aria-hidden="true"></div>
            <span>Loading CV{{ loadingPercent() ? ' ' + loadingPercent() + '%' : '' }}</span>
          </div>
        }

        @if (loadError()) {
          <div class="cv-page__error" role="alert">
            <p>Unable to load the CV preview.</p>
            <a [href]="cvPath" target="_blank" rel="noopener noreferrer">
              Open CV PDF
            </a>
          </div>
        }

        <ngx-extended-pdf-viewer
          [src]="cvPath"
          height="calc(100vh - 96px)"
          [textLayer]="true"
          [showHandToolButton]="true"
          [showPresentationModeButton]="true"
          [showDownloadButton]="true"
          [showPrintButton]="true"
          [showOpenFileButton]="false"
          [filenameForDownload]="downloadFilename"
          (pdfLoadingStarts)="showLoading()"
          (progress)="updateLoadingProgress($event)"
          (pdfLoaded)="hideLoading()"
          (pdfLoadingFailed)="showLoadError()"
        />
      } @else {
        <div class="cv-page__fallback">
          <a [href]="cvPath" target="_blank" rel="noopener noreferrer">
            Open CV PDF
          </a>
        </div>
      }
    </section>
  `,
  styleUrl: './cv-viewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvViewerComponent {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly isBrowser = isPlatformBrowser(this.platformId);
  protected readonly isLoading = signal(this.isBrowser);
  protected readonly loadingPercent = signal<number | null>(null);
  protected readonly loadError = signal(false);
  protected readonly cvPath = 'https://znuujsmtrbbkeuafjcxx.supabase.co/storage/v1/object/sign/pdf-cv-upload/Bader_Alyami_Resume.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYmEyYTQ0NC01N2I1LTRjOTUtYTgxMy1lN2I3NjMxNmM3N2YiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGYtY3YtdXBsb2FkL0JhZGVyX0FseWFtaV9SZXN1bWUucGRmIiwiaWF0IjoxNzc4NTI1Njg3LCJleHAiOjE4MTAwNjE2ODd9.HQzduuK-YtAVkHrJMXqtXiNKHRzcODptRdTKZJI2mDA';
  protected readonly downloadFilename = 'Bader-Alyami-CV.pdf';

  protected showLoading(): void {
    this.loadError.set(false);
    this.loadingPercent.set(null);
    this.isLoading.set(true);
  }

  protected updateLoadingProgress(event: ProgressBarEvent): void {
    if (event.type !== 'load') {
      return;
    }

    this.loadingPercent.set(Math.max(0, Math.min(100, Math.round(event.percent))));
  }

  protected hideLoading(): void {
    this.isLoading.set(false);
    this.loadingPercent.set(null);
  }

  protected showLoadError(): void {
    this.isLoading.set(false);
    this.loadingPercent.set(null);
    this.loadError.set(true);
  }
}
