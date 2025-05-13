import FeaturedProject from '../../blocks/projects/featured'



// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'
import SectionTitle from '../../blocks/section.title.block'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/featured.json'

import { ArrowRightIcon } from '@heroicons/react/24/solid';

import { useRouter } from 'next/router';




export default function FeaturedProjects() {
	  const router = useRouter();


	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXLrg'}>
				<SectionTitle
					title="Recent Projects"
					preTitle=""
					subTitle="Focused on the experience, driven by the engineering."
				/> 				{
				content.map( (data, index) => {
					return (
						<FeaturedProject content={data} index={index} key={index} />
					)
				})
				}
				<div className='w-full justify-center items-center flex'>

<button onClick={()=>  router.push('/portfolio')} className="relative inline-flex h-12 w-150 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">

	<p className='mr-1'>View All Projects</p>
   <ArrowRightIcon className="h-5 w-5 text-white" />
  </span>
</button>
</div>
			</Container>


				

			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}