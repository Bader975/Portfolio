import HomePage from '../components/home/HomePage';
import Head from 'next/head';

export default function Home({ projects }) {

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="This is my portfolio website showcasing my work and skills." />
        <meta name="keywords" content="portfolio, web development, design, projects" />
        <meta name="author" content="Bader Alyami" />
        <link rel="icon" href="/space-ship.webp" />
      </Head>

      <HomePage projects={projects} />

    </>
  )
}


export async function getStaticProps() {

  const projectsArray = [
    {
      id: 1,
      title: "Tuwaiq Projects",
      discription:"One website helps Tuwaiq students to get project ideas provided by companies, upload their projects, and display them for any company. They can also modify their projects if they wish.",
      href: "https://github.com/Bader975/Tuwaiq-Projects",
      image: "https://user-images.githubusercontent.com/80196102/226158760-ae515f25-346c-4c1e-989a-ac1441d51bf2.png"
    },
    {
      id: 2,
      title: "Invest With Us",
      href: "https://invest-with-us.vercel.app/",
      image: "https://github.com/Bader975/README/assets/80196102/4fde5233-1112-438f-8d68-5130a0d0215a"
    },
    {
      id: 3,
      title: "Aramco Direct Hires Dashboard",
      href: "https://bader10alyami.000webhostapp.com/Aramco%20Pages/Dashboard/index.html",
      image: "https://github.com/Bader975/README/assets/80196102/7d0382d4-4c8d-4e74-b6a4-115c931f08b7"
    },
    {
      id: 4,
      title: "Aramco Home Page",
      href: "https://bader10alyami.000webhostapp.com/Aramco%20Pages/Aramco%20Home%20Page/aramco%20page%20.html",
      image: "https://github.com/Bader975/README/assets/80196102/5a74bca0-0c38-4529-803d-608723123e7c"
    },

    {
      id: 5,
      title: "Aramco VPs PDF viewer",
      href: "https://bader10alyami.000webhostapp.com/Aramco%20Pages/PDF%20Viewer/pdf.html",
      image: "https://github.com/Bader975/README/assets/80196102/96447707-6c66-4735-9cc9-34951155ad51"
    }
  ]

  return {
    props: {
      projects: projectsArray

      // projects: projectsArray.map(project => ({
      //     id: project.toString(),
      //     title: project.title,
      //     image: project.image,
      //     href: project.href,
      // }))

    },
    revalidate: 60,


  }
}


