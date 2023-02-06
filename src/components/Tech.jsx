import React from 'react';
import "../css/Tech.css";
import boot from "../media/boot.png";
import css from "../media/css.png";
import git from "../media/git.png";
import github from "../media/github.png";
import html from "../media/html.png";
import js from "../media/js.png";
import mui from "../media/mui.png";
import node from "../media/node.svg.png";
import npm from "../media/npm.svg.png";
import react from "../media/react.png";
import slack from "../media/slack.svg.png";
import sql from "../media/sql.png";
import strapi from "../media/strapi.png";
import tailwind from "../media/tailwind.png";
import vite from "../media/vite.png";
import vscode from "../media/vscode.png";


const Tech = () => {
    const data = {
   
        stack: {
            html,
            css,
            js,
            node,
            react,
            sql,
            strapi,
            vscode,
            tailwind,
            mui,
            boot,
            slack,
            git,
            github,
            npm,
            vite
        }
    }
    
  return (
    <div className="flex flex-col items-start justify-center relative w-full h-96 top-5 p-9 mb-5 mt-12">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2 text-center md:w-[60%] md:mt-8 mx-auto text-black dark:text-white animate__animated animate__backInDown ">
          My Tech Stack:
        </h2>
        <div className="stacks mt-8 animate__animated animate__backInUp animate__delay-1s">
            <img src={data.stack.html} alt="html" className="stack"/>
            <img src={data.stack.css} alt="css" className="stack"/>
            <img src={data.stack.js} alt="js" className="stack"/>
            <img src={data.stack.react} alt="react" className="stack"/>
            <img src={data.stack.node} alt="node" className="stack"/>
            <img src={data.stack.sql} alt="sql" className="stack"/>
            <img src={data.stack.strapi} alt="strapi" className="stack"/>
            <img src={data.stack.vscode} alt="vscode" className="stack"/>
            <img src={data.stack.tailwind} alt="tailwind" className="stack"/>
            <img src={data.stack.mui} alt="mui" className="stack"/>
            <img src={data.stack.boot} alt="boot" className="stack"/>
            <img src={data.stack.slack} alt="slack" className="stack"/>
            <img src={data.stack.npm} alt="npm" className="stack"/>
            <img src={data.stack.git} alt="git" className="stack"/>
            <img src={data.stack.github} alt="github" className="stack"/>
            <img src={data.stack.vite} alt="vite" className="stack"/>         
        </div>
    </div>
  )
}

export default Tech;