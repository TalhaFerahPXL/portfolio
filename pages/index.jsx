import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/looking'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

import { TechStack } from '../components/blocks/techstack'

import Head from 'next/head';



import { useEffect, useState } from "react";




export default function HomePage() {

	/*
	const [showMatrix, setShowMatrix] = useState(false);

	useEffect(() => {
	  const alreadySeen = sessionStorage.getItem('ms');
  
	  if (alreadySeen !== 'true') {
		const delay = Math.floor(Math.random() * 2000) + 10000; // 10-17 seconden
  
		const showTimeout = setTimeout(() => {
		  setShowMatrix(true);
		  document.body.style.overflow = 'hidden';
  
		  const hideTimeout = setTimeout(() => {
			setShowMatrix(false);
			document.body.style.overflow = 'auto';
  
			// mark as seen in sessionStorage
			sessionStorage.setItem('ms', 'true');
		  }, 3000); // matrix visible for 3 seconds
  
		  // Cleanup hide timeout
		  return () => clearTimeout(hideTimeout);
		}, delay);
  
		// Cleanup show timeout
		return () => clearTimeout(showTimeout);
	  }
	}, []);    
	*/



	return (
		
		<>
		 <Head>
        <title>Talha Ferah– Full Stack Developer Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Full-stack developer specialized in React, Node.js, Remix and Shopify. Explore projects and skills." />
        
      </Head>

			<Color colors={colors} />
			<Hero />
			{/* <Looking /> */}
			<FeaturedProjects />
			{/* <About /> */}
			{/* <Technical /> */}
			{/* <Career /> */}
			<TechStack/>
			     
				 {/* {showMatrix && <MatrixIntro />} */}

		</>
	);
}