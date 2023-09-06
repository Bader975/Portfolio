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
      discription:" website used (React.TS - Node.js - Express.js) helps Tuwaiq students to get project ideas provided by companies, upload their projects, and display them for any company. They can also modify their projects if they wish.",
      href: "https://github.com/Bader975/Tuwaiq-Projects",
      image: "/tuwaiq-projets.webp"
    },
    {
      id: 2,
      title: "Invest With Us",
      discription:"An investment platform for informed decision-making and linking between the invester and thecompany ",
      href: "https://invest-with-us.vercel.app/",
      image: "/invest-with-us.webp"
    },
    {
      id: 3,
      title: "NEXT.JS App MeetUp",
      discription:"Web app that uses NEXT.JS and Mongodb to add and manage your meetups and put the important in favorites meetup",
      href: "https://github.com/Bader975/nextjs-meetup/tree/main",
      image: "/nextjs-meetup.webp"
    },
    {
      id: 4,
      title: "NEXT.JS Auth ",
      discription:"Used NextAuth to implement login and logout operations and sessions",
      href: "https://github.com/Bader975/NEXT-Auth",
      image: "/nextjs-auth.webp"
    },
    {
      id: 5,
      title: "Aramco Direct Hires Dashboard",
      discription:"A comprehensive dashboard by (HTML - Bootstrp - Jquery - chart.js) that streamlines the direct hiring process at Aramco, enhancing the need for employees by displaying charts and improving communication between candidates and recruiters",
      href: "https://bader10alyami.000webhostapp.com/Aramco%20Pages/Dashboard/index.html",
      image: "/dashboard-aramco.webp"
    }, 
    
    {
      id: 6,
      title: "Aramco Home Page",
      discription:" A visually appealing and user-friendly home page for Aramco, showcasing their brand and providing easy access to essential information.",
      href: "https://bader10alyami.000webhostapp.com/Aramco%20Pages/Aramco%20Home%20Page/aramco%20page%20.html",
      image: "/home-page-aramco.webp"
    },

    {
      id: 7,
      title: "Aramco VPs PDF viewer",
      discription:"A PDF viewer using JSpdf specifically designed for Aramco's Vice Presidents, ensuring a smooth and secure document viewing experience.",
      href: "https://bader10alyami.000webhostapp.com/Aramco%20Pages/PDF%20Viewer/pdf.html",
      image: "/aramco-pdf-viewer.webp"
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


