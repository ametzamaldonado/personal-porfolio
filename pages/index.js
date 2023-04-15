import Head from "next/head";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import PawsterTwo from "../public/pawster-two-screen.png"
import personalPic from "../public/personalPic.png";
import pawsterPic from "../public/pawster-screenshot.png";
import lawFirmPic from "../public/lawFirm-screenshot.png";
import BudgetingApp from "../public/budget-screen.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const personalProjectsObj = [
    {
      title: "Pawster 2.0",
      image: PawsterTwo,
      liveSiteLink: "https://pawster-two-demo.netlify.app/",
      githubLink: "https://github.com/ametzamaldonado/pawster-ver-two",
      techLangUsed: "React | Javascript | CSS | HTML | React-Bootstrap | Firebase | NoSql",
      description: "Welcome to the revamped version of Pawster! Building on the original project's goal of connecting users with shelters, I utilized various tools such as React-Bootstrap, Firebase auth, Cloud Storage, and Firestore/NoSQL to create a more efficient and user-friendly platform. Users can easily sign up or login to explore animals available for fostering by swiping right to add to their likes or left to view the next animal. ",
    },
    {
      title: "F&L Website",
      image: lawFirmPic,
      liveSiteLink: "https://fixlerlaw-sample.netlify.app/",
      githubLink: "https://github.com/ametzamaldonado/fixlerlaw-web-sample",
      techLangUsed: "JavaScript | CSS | Bootstrap | HTML | JSX | Netlify | React App",
      description: "As a personal project, I created a modern version of my current place of employment's website. I implemented and included all the information that was in the original site, while also adding an interactive contact form, which is fully functional. The website was styled utilizing Bootstrap and was designed to be completely mobile responsive.",
    },
    // {
    //   title: "Youtube Clone",
    //   liveSiteLink: "https://youtube-team-4.netlify.app/",
    //   githubLink: "https://github.com/ametzamaldonado/react-youtube-app",
    //   techLangUsed: "React | Javascript | CSS | HTML | Express",
    //   description: "Working in a team of three, our group created a lite version of Youtube that is fully capable of making a query search, displaying and playing a suggested video. Personal contributions to the project included but were not limited to: navbar functionality and appearance, display of our view page after populating search results, ability to play video in a new page that includes the video id in the url path, and the beginnings of our comment section.",
    // },
    {
      title: "Pawster (1st Version)",
      image: pawsterPic,
      liveSiteLink: "https://pawster-frontend.netlify.app",
      githubLink: "https://github.com/ametzamaldonado/Pawster-capstone-project",
      techLangUsed: "React | Javascript | CSS | HTML | Express JSX | Material UI | Tailwind | Firebase",
      description: "As our capstone project, this project was created to connect users with shelters in the hopes that they will foster their preferred shelter animal. The user will log into their account using Google Authentication. After clicking on the Explore button on the home page, they will be directed to a page where they can swipe right (add animals to their likes) or swipe left (view next animal). Also on this page is a button where users can click and be redirected to a page showing their “liked” pets and more information on each pet.",
    },
    {
      title: "Budgeting App",
      image: BudgetingApp,
      liveSiteLink: "https://budgeting-app-101.netlify.app/",
      githubLink: "https://github.com/ametzamaldonado/new-budget-app",
      techLangUsed: "JavaScript | CSS | HTML | JSX | Heroku/Onrender",
      description: "As a class project, we were tasked with creating an API with sample expenses/income prompts, and working on the front-end design of our budgeting app. The required features included: (1) an Index, Show, Edit and New page, (2) a functional navigation bar, (3) online deployment of the application, (4) delete functionality (5) and the account total CSS to be responsive based on the amount value, displaying either red, green or neutral.",
    }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{`Ametza Maldonado's Portfolio`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* About Me Section */}
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">ADM</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-600 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://docs.google.com/document/d/1sSu0cYR26zRwWWVuVMwJmuXJhEYGrmas/export?format=pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Ametzayin Maldonado
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              FullStack Web Developer
            </h3>

            <div className="mx-auto bg-gradient-to-b from-slate-400 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={personalPic}
                alt="personal-photo"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Welcome to my personal portfolio website!
              <br />
              <br />
             {"I'm a recent graduate of the Pursuit Fellowship with a strong foundation in various technologies such as JavaScript, HTML, CSS, Node, Express, React/Redux, PostgreSQL, and experience working with APIs. Throughout my time at the Pursuit, I had the opportunity to build a variety of projects that allowed me to hone my skills and showcase my abilities. On this website, you'll find an overview of my completed projects as well as my professional experience. Thank you for taking the time to visit my portfolio website."}
            </p>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://www.linkedin.com/in/ametzayin-maldonado/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="dark:text-white" />
              </a>
              <a
                href="https://github.com/ametzamaldonado"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="dark:text-white" />
              </a>
              <a href="mailto:ametza.maldonado@gmail.com?subject=Personal Profolio Comment/Question">
                <AiFillMail className="dark:text-white" />
              </a>
            </div>
          </div>
        </section>

      {/* Projects Section */}
        <section className="py-10 mx-auto">
          <div>
            <h2 className="text-4xl py-2 text-teal-600 text-center font-bold md:text-4xl  dark:text-white">
              My Projects
            </h2>
          </div>

          

          <div className="grid md:grid-cols-1 md:gap-4 xl:grid-cols-2 xl:gap-8">    
            {personalProjectsObj.map((item, index) => (
              <div key={index} className="shadow-lg p-10 rounded-xl my-10 dark:bg-white overflow-auto">
                <div className="text-center">
                  <Image  
                  src={item.image}
                  alt={`${item.name}-img`}
                  />
                </div>
                <h3 className="text-center text-2xl font-medium pt-8 pb-2 ">
                  {item.title}
                </h3>
                <div className="flex justify-around dark:text-white">
                  <a
                    className="bg-gradient-to-r from-gray-600 text- to-gray-400 text-white px-4 py-2 rounded-lg mr-1"
                    href={item.liveSiteLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>

                  <a
                    className="bg-gradient-to-r from-gray-600 text- to-gray-400 text-white px-4 py-2 rounded-lg ml-1"
                    href={item.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
                <h4 className="text-center text-xl pt-3 text-teal-600 font-semibold">
                  Tech Stack:
                </h4>
                <p className="text-center text-gray-800 py-1 text-md font-semibold">
                  {item.techLangUsed}{" "}
                </p>

                <p className="px-10 ">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

      {/* Footer Section */}
        <footer className="py-10 mt-12">
          <div className="flex justify-between">
            <h1 className="text-xl font-burtons  dark:text-white">
              developedbyADM
            </h1>
            <div className="text-lg dark:text-white">
              <p>Built using Next.js && Tailwind</p>
              <p>Copyright © ADM</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
3;
