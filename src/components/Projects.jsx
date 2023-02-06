import React from "react";
import weather from "../media/weather.jpg";
import eze from "../media/eze.jpg";
import ger from "../media/ger.jpg";

const Projects = () => {
    const projects = [
        {
          img: ger,
          title: "Germán Rubino web",
          desc: "Germán Rubino official web-page. Built with React",
          live: "https://german-rubino-web.vercel.app/",
          code: "https://github.com/EduardoAll/german-rubino-web",
        },
        {
          img: eze,
          title: "Faurt Prod web",
          desc: "Ezequiel Faurt producer official web-page. Built with React",
          live: "https://faurt-prod.netlify.app/",
          code: "https://github.com/EduardoAll/faurt-prod",
        },
        {
          img: weather,
          title: "Wheather App",
          desc: "Wheater App Built with React",
          live: "https://weather-app-react-web.netlify.app/",
          code: "https://github.com/EduardoAll/weather-app",
        },
      ]; 

  return (
    <section className="bg-primary text-black dark:text-white px-5 py-20" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2 animate__animated animate__backInDown">
            Projects
          </h2>

          <p className="pb-5 animate__animated animate__backInLeft animate__delay-1s">
            These are some of my best projects. I have built these with React,
            Javascript, HTML, CSS, GIT, Tailwind and others technologies. Check them out!
          </p>
          
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative animate__animated animate__backInUp animate__delay-2s" key={i}>
              <img src={project.img} alt={project.title} className="opacity-60"/>
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 ">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    target='_blank' 
                    rel='noreferrer'
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    target='_blank' 
                    rel='noreferrer'
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;