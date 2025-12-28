
import React from 'react';
import Cv from '@/components/cv/Cv';

export const metadata = {
  title: "Bader's CV",
  description: "Check out my PDF CV to learn more about my skills and experience.",
  authors: [{ name: "Bader Alyami" }],
  openGraph: {
    title: "PDF CV - Bader",
    description: "Check out my PDF CV",
  },
};

export default function CvPage() {
  return (
    <Cv />
  );
}
