"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../accernityui/lamp";


import css from "../../styles/sections/projects/featured.module.scss"
import { BackgroundGradient } from "../accernityui/background-gradient";

import { m, useAnimation } from "framer-motion"
import BadgesBlock from "./about.badges.block";
import about from "../sections/index/about";

import Badges from "../utils/badge.list.utilnoanimation";

export function TechStack() {



const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'microsoftsqlserver', 		name: 'microsoftsqlserver', 				type: 'devicon' },
  { key: 'remix.js', 		name: 'remix.js', 				type: 'devicon' },
  { key: 'graphql', 		name: 'graphql', 				type: 'devicon' },
  { key: 'dotnetcore', 		name: 'dotnetcore', 				type: 'devicon' }, 
  { key: 'typescript', 		name: 'typescript', 				type: 'devicon' }, 
  { key: 'oauth', 		name: 'oauth', 				type: 'devicon' }, 
  { key: 'auth.js', 		name: 'auth.js', 				type: 'devicon' }, 
  { key: 'prisma', 		name: 'prisma', 				type: 'devicon' }, 
  { key: 'framermotion', 		name: 'framermotion', 				type: 'devicon' },
  { key: 'figma', 		name: 'figma', 				type: 'devicon' }, 
  { key: 'amazonwebservices', 		name: 'aws', 				type: 'devicon' }, 
  { key: 'azure', 		name: 'azure', 				type: 'devicon' }, 
  { key: 'shopify liquid', 		name: 'shopify liquid', 				type: 'devicon' },
  { key: 'tailwindcss', 		name: 'tailwindcss', 				type: 'devicon' }





]

  return (
      
  
    <LampContainer >
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-6 mb-20 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Technology stack
      </motion.h1> 

<div className="flex justify-self items-center flex-col w-[90%] text-center">
<Badges list={tech} block="stack" fullContainer={false} color={false} />
</div>
      

    </LampContainer>









    
    
    
  );
}
