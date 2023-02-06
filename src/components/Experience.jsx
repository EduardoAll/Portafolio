import React from "react";
import dashboard from "../media/dashboard.jpg";
import filter from "../media/filter.jpg";
import panel from "../media/panel.jpg";
import login from "../media/login.jpg";


const Experience = () => {
  return (
    <section className="bg-secondery px-5 py-7" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-black dark:text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2 animate__animated animate__pulse ">
          Experience:
        </h2>
        <p className="animate__animated animate__lightSpeedInLeft animate__delay-1s">
        I work as a <span className="font-bold">React developer</span> Junior at "Distri-soft" since September 2022, where I carry out tasks such as creating responsive applications with <span className="font-bold">Tailwind</span>, interacting with remote servers based on http requests with <span className="font-bold">Axios</span>. During this process, I learned how to fully utilize the framework and its hooks, such as <span className="font-bold">useState, useEffect, useRef, useMemo, useReducer, useContext </span>among others such as <span className="font-bold">useSelector</span> and <span className="font-bold">useDispatch</span> to handle <span className="font-bold">react-redux</span> and <span className="font-bold">Redux Toolkit.</span>
        </p>

        <p className="py-2 animate__animated animate__jackInTheBox animate__delay-2s">
          Here you can see screenshots of what i'm currently working on:
        </p>
        <div className="mx-auto grid md:grid-cols-3 gap-10 mt-8">
          <img src={dashboard} alt="html" className="cursor-pointer m-2 animate__animated animate__backInUp animate__delay-3s "/>
          <img src={filter} alt="html" className="cursor-pointer m-2 animate__animated animate__backInUp animate__delay-4s "/>
          <img src={panel} alt="html" className="cursor-pointer m-2 animate__animated animate__backInUp animate__delay-5s "/>
        </div>
      </div>
    </section>
  );
};

export default Experience;