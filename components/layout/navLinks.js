/**
 * Shared navigation link configuration used by both
 * desktop (NavBar) and mobile (MobileNavBar) navigation.
 */

export const NAV_LINKS = [
  {
    label: "My Projects",
    homeLabel: "My Projects",
    awayLabel: "Home",
    href: "/#my-projects",
    awayHref: "/",
  },
  {
    label: "Take a look at my CV",
    href: "/cv",
  },
  {
    label: "My Skills",
    href: "/#skills",
    awayHref: "/",
  },
  {
    label: "About Me",
    href: "/#about",
    awayHref: "/",
  },
];

/**
 * Returns the correct href for a nav link based on the current route.
 * If the user is already on "/", the link scrolls to the section.
 * If the user is on another page, the link navigates home first.
 */
export function getLinkHref(link, pathname) {
  if (link.href === "/cv") return "/cv";
  return pathname !== "/" ? (link.awayHref ?? "/") : link.href;
}

/**
 * Returns the display label for a nav link based on the current route.
 */
export function getLinkLabel(link, pathname) {
  if (link.awayLabel && pathname !== "/") return link.awayLabel;
  return link.homeLabel ?? link.label;
}
