import { projectsArray } from '@/data/projects';
import HomePage from '@/components/home/HomePage';

export const metadata = {
  title: "Bader's Mohammad Portfolio",
  description: "This is my portfolio website showcasing my work and skills.",
};

export default function Page() {
  return <HomePage projects={projectsArray} />;
}
