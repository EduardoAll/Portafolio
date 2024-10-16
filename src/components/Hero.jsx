import React from "react";
import { NavLink } from 'react-router-dom';
import me from '../media/yo.jpg';
import 'animate.css';


import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
} from "react-icons/ai";

//asdasdasdasdASDASDASDASDasdasdasdasdasdasdasdasdadaasdasdasdasdasdsaasdasdasdasdasdasd

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-black dark:text-white py-5">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl animate__animated animate__pulse ">
            Hi, <br />I am <span className="text-accent">E</span>duardo, <br />
            Frontend Developer.
          </h1>

          <p className="py-5 animate__animated animate__rollIn animate__delay-1s">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          <div className="flex py-5">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/edu.all/"
              className="pr-4 inline-block text-accent hover:text-neutral-600 animate__animated animate__rollIn animate__delay-2s"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=%2B542236033394&text&type=phone_number&app_absent=0"
              className="pr-4 inline-block text-accent hover:text-neutral-600 animate__animated animate__rollIn animate__delay-2s"
            >
              {" "}
              <AiOutlineWhatsApp size={40} />{" "}
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/eduu.allegrini/"
              className="pr-4 inline-block text-accent hover:text-neutral-600 animate__animated animate__rollIn animate__delay-2s"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
          </div>

          <NavLink
            end
            to="/projects"
            className=" btn bg-accent  border-2 border-[#7477FF] px-6 py-3 hover:bg-[#7477FF] animate__animated animate__shakeX animate__slower animate__delay-4s "
          >
            See Projects
          </NavLink>
        </div>

        <div className="hero-img">
          <img
            src={me}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;