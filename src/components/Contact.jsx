import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
} from "react-icons/ai";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-black dark:text-white text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2 animate__animated animate__bounceInDown">
          Contact Me
        </h2>
        <p className="text-black dark:text-white pt-8 animate__animated animate__bounceInUp animate__delay-1s">
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="text-black dark:text-white py-2 pt-4 animate__animated animate__bounceInUp animate__delay-1s">
          <span className="font-bold">Email:</span> eduardo.allegrini123@gmail.com
        </p>
        <p className="text-black dark:text-white py-2 pt-4 animate__animated animate__rollIn animate__delay-1s">
          <span className="font-bold">Phone:</span> +54 02236-033394
        </p>
        <div className="flex py-5 justify-center">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/edu.all/"
              className="text-black dark:text-white pr-4 text-accent hover:text-neutral-600 animate__animated animate__rollIn animate__delay-2s"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=%2B542236033394&text&type=phone_number&app_absent=0"
              className="text-black dark:text-white pr-4 text-accent hover:text-neutral-600 animate__animated animate__rollIn animate__delay-2s"
            >
              {" "}
              <AiOutlineWhatsApp size={40} />{" "}
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/eduu.allegrini/"
              className="text-black dark:text-white pr-4 text-accent hover:text-neutral-600 animate__animated animate__rollIn animate__delay-2s"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
          </div>
      </div>
    </section>
  );
};

export default Contact;