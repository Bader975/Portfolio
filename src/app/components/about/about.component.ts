import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about-section" aria-label="About section" id="about">
      <h1 class="section-title">About Me</h1>
      <hr class="section-divider">

      <div class="about-grid">
        <div class="portrait-wrap">
          <img
            src="/bader-img.png"
            width="350"
            height="350"
            loading="lazy"
            alt="Bader Mohammad"
            class="portrait"
          >
        </div>

        <article class="about-copy">
          <h2>Hi, I'm Bader Mohammad!</h2>
          <p>
            I'm full-stack web developer specializing in <strong>JavaScript</strong>,
            <strong>TypeScript</strong>, I strive to create innovative and high-quality web
            applications. My focus is on delivering exceptional user experiences through
            clean code and efficient solutions.
          </p>
          <p>
            With expertise in front-end development using modern frameworks like
            <strong>React</strong> and <strong>Angular</strong> and <strong>Next.js</strong>,
            I excel at crafting intuitive and responsive user interfaces. On the back-end,
            I specialize in building robust APIs and server-side applications using
            <strong>Node.js</strong> and <strong>Express.js</strong>.
          </p>
          <p>
            If you have a project that you'd like to discuss or if you are interested in
            collaborating, feel free to reach out to me. Let's work together to bring your
            ideas to life!
          </p>
        </article>
      </div>
    </section>
  `,
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
