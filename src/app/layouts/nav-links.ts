export interface NavLink {
  readonly label: string;
  readonly homeLabel?: string;
  readonly awayLabel?: string;
  readonly href: string;
  readonly awayHref?: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  {
    label: 'My Projects',
    homeLabel: 'My Projects',
    awayLabel: 'Home',
    href: '/#my-projects',
    awayHref: '/',
  },
  {
    label: 'Take a look at my CV',
    href: '/cv',
  },
  {
    label: 'My Skills',
    href: '/#skills',
    awayHref: '/',
  },
  {
    label: 'About Me',
    href: '/#about',
    awayHref: '/',
  },
];
