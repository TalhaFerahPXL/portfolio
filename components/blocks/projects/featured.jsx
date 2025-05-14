import Image from 'next/image'

import { useEffect } from 'react'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';


import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/projects.json'

export default function FeaturedProject({ content }, index) {

	const { project, url, repo, descriptionTitle,description, stack, imageOptions, images } = content

	const controls = useAnimation();
	const { ref, inView  } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	useEffect( () => {
		if ( inView ) {	controls.start("visible") }
		if ( !inView ) { controls.start("hidden") }
	}, [ controls, inView ] )

	return (
		
		<m.section 	
		
			key={index}
			className={css.project} 
			
			//framer-motion
			ref={ref}
			variants={container}
			initial={[ "rest", "hidden" ]}
			whileHover="hover"
			style={{ cursor: 'default', padding: '10px'}}
           
			animate={controls} >
				
			
			<div className={css.details}>
				<div className={css.projectHeader}>
					<div className={css.header}>
						<h3 className="highlight">{project}</h3><span className={css.privateOr}><i className="devicon-github-plain"></i>{repo}</span>	
					</div>
					<div className={css.description}>
						<p><strong>{descriptionTitle}</strong> {description}</p>
					</div>
					<div className={css.stackContainer}>
						<Badges list={stack} block="stack" fullContainer={false} color={false} />
					</div>
					{/* <m.div variants={''} className={css.viewProject}>
						<Icon icon={[ 'fad', 'arrow-right-to-bracket' ]} />
					</m.div> */}
				</div>
			</div>

			{imageOptions[0].device === 'laptop' 
			? 
			<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
			}}
			style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}
			>
			{laptop(images[0].url)}
			</motion.div>
			
		
			
			: imageOptions[0].device === 'mobile' ? 

			<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
			}}
			style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}
			>
			{mobile(images[0].url)}
			</motion.div>
			
		:
		
		
		<div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
<motion.img
      ref={ref}
      src={images[0].url}
      alt="Generated"
      style={{
        width: 'auto',
        maxHeight: '80vh',
        objectFit: 'contain',
		
      }}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    />
</div>
		
		}
			

		</m.section>

		

		
	)
	
}

const container = {
	hidden: { 
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.0625
		}
	},
	visible: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.25,
		}
	},
	rest: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	},
	hover: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	}
}

const item = {
	hidden: { 
		y: 75, 
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
			duration: 0.7, 
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: 0.9, 
		}
	},
}

const hoverLeft = {
	rest: {
		x: 0
	},
	hover: {
		x: -20
	}
}

const hoverRight = {
	rest: {
		x: 0
	},
	hover: {
		x: 20
	}
}


function laptop(url){
 

	
	return(


<>
<div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[6px] rounded-t-xl h-[160px] max-w-[280px] md:h-[205px] md:max-w-[360px]">
  <div class="rounded-lg overflow-hidden h-[148px] md:h-[190px] bg-white dark:bg-gray-800">
    <img src={url} class="hidden dark:block h-[148px] md:h-[190px] w-full rounded-lg" alt=""/>
  </div>
</div>

<div class="relative mx-auto w-200 bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[16px] max-w-[300px] md:h-[15px] md:max-w-[410px]">
  <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[50px] h-[5px] md:w-[70px] md:h-[6px] bg-gray-800"></div>
</div>
</>




	)
}


function mobile(url){

	return(



<>
<div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[9px] rounded-[1.5rem] h-[375px] w-[188px] shadow-xl">
  
    <div class="w-[92px] h-[11px] bg-gray-800 top-0 rounded-b-[0.625rem] left-1/2 -translate-x-1/2 absolute"></div>

   
    <div class="h-[29px] w-[3px] bg-gray-800 absolute -start-[10px] top-[78px] rounded-s-lg"></div>
    <div class="h-[40px] w-[3px] bg-gray-800 absolute -start-[10px] top-[111px] rounded-s-lg"></div>

    
    <div class="h-[40px] w-[3px] bg-gray-800 absolute -end-[10px] top-[89px] rounded-e-lg"></div>

   
    <div class="rounded-[1.25rem] overflow-hidden w-[170px] h-[357px] bg-white dark:bg-gray-800">
        <img src={url} class="hidden dark:block w-[170px] h-[357px]" alt=""/>
    </div>
</div>

</>
	)

}