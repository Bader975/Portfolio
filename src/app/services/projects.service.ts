import { Injectable, computed, signal } from '@angular/core';

import { Project } from '../shared/models/project.model';

const PROJECTS: readonly Project[] = [
  {
    id: 1,
    title: 'كــــدان - Kidan',
    description:
      'في كدان نمكّنك من تحقيق أعلى مستويات الكفاءة، الشفافية، والاستدامة عبر حلول متكاملة صممت خصيصاً للقطاع الثالث',
    href: 'https://new.kidanm.com.sa/',
    image: '/projects-images/kedan.png',
  },
  {
    id: 2,
    title: 'Wajeeh Bot',
    description:
      'المساعد الافتراضي الأول في عالم التعليم بالتكامل مع مسارات التعلم المرن',
    href: 'https://wajeeh-snowy.vercel.app/',
    image: '/projects-images/wajeeh.jpeg',
  },
  {
    id: 3,
    title: 'common voice Arabic Version (الجداريــة الصوتيـة)',
    description:
      'Arabic voice data controller, which participates in recording Arabic voice calls and interacts with a distinctive mark.',
    href: 'https://falak.ksaa.gov.sa/voicewall/ar',
    image: '/projects-images/common-voice-ar.png',
  },
  {
    id: 4,
    title: 'Invest With Us',
    description:
      'An investment platform for informed decision-making and linking between the invester and thecompany',
    href: 'https://react-app-b699b.firebaseapp.com/',
    image: '/projects-images/invest-with-us.webp',
  },
  {
    id: 5,
    title: 'Tuwaiq Projects',
    description:
      'Website used (React.TS - Node.js - Express.js) helps Tuwaiq students to get project ideas provided by companies, upload their projects, and display them for any company. They can also modify their projects if they wish.',
    href: 'https://github.com/Bader975/Tuwaiq-Projects',
    image: '/projects-images/tuwaiq-projets.webp',
  },
  {
    id: 6,
    title: 'Aramco Direct Hires Dashboard',
    description:
      'Dashboard by (HTML-Bootstrp-Jquery-chart.js) that streamlines the direct hiring process at Aramco, enhancing and improving communication between candidates and recruiters',
    href: 'https://bader10alyami.000webhostapp.com/Aramco%20Pages/Dashboard/index.html',
    image: '/projects-images/dashboard-aramco.webp',
  },
  {
    id: 7,
    title: 'Aramco Home Page',
    description:
      'A visually appealing and user-friendly home page for Aramco, showcasing their brand and providing easy access to essential information.',
    href: 'https://bader10alyami.000webhostapp.com/Aramco%20Pages/Aramco%20Home%20Page/aramco%20page%20.html',
    image: '/projects-images/home-page-aramco.webp',
  },
  {
    id: 8,
    title: 'Aramco VPs PDF viewer',
    description:
      "A PDF viewer using JSpdf specifically designed for Aramco's Vice Presidents, ensuring a smooth and secure document viewing experience.",
    href: 'https://bader10alyami.000webhostapp.com/Aramco%20Pages/PDF%20Viewer/pdf.html',
    image: '/projects-images/aramco-pdf-viewer.webp',
  },
  {
    id: 9,
    title: 'RATEME.com',
    description:
      'Our site offers a rating of local restaurants and hotels in order to search for the best with ease.',
    href: 'https://bader10alyami.000webhostapp.com/Ratings/restaurantsHome.html',
    image: '/projects-images/rateme.webp',
  },
  {
    id: 10,
    title: 'NEXT.JS App MeetUp',
    description:
      'Web app that uses NEXT.JS and Mongodb to add and manage your meetups and put the important in favorites meetup',
    href: 'https://github.com/Bader975/nextjs-meetup/tree/main',
    image: '/projects-images/nextjs-meetup.webp',
  },
  {
    id: 11,
    title: 'NEXT.JS Auth',
    description:
      'Used NextAuth to implement login and logout operations and sessions',
    href: 'https://github.com/Bader975/NEXT-Auth',
    image: '/projects-images/nextjs-auth.webp',
  },
];

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projectsState = signal(PROJECTS);

  readonly projects = computed(() => this.projectsState());
}
