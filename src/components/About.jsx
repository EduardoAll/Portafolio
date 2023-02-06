import React from "react";
import AboutImg from "../../public/logo.png";

const About = () => {
  return (
    <section className="bg-secondery text-black dark:text-white px-5 py-20" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2 animate__animated animate__backInLeft">
            About Me
          </h2>

          <p className="pb-5 pt-8 animate__animated animate__backInRight animate__delay-1s text-xl">
            Hi, My Name Is Eduardo Allegrini but everyone calls me Edu. I am a
            Frontend Developer. I build beautifull websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5 animate__animated animate__backInRight animate__delay-1s text-xl">
            I am proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, Css3 and many more.
          </p>

          <p className="animate__animated animate__backInRight animate__delay-1s text-xl">In backend I know Node.js, Express.js and MongoDB.</p>

        </div>

        <div className="about-img animate__animated animate__backInUp animate__delay-2s">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;