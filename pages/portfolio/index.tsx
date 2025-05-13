// Sections
import GitRecentProjects from '../../components/sections/projects/recent'
import AllProjects from '../../components/sections/projects/allProjects'

import Color  from '../../components/utils/page.colors.util'

import settings from '../../content/_settings.json'
import colors from '../../content/projects/_colors.json'

import content from '../../content/projects/featured.json'

//
export default function Projects() {
    return (
        <>
        <Color colors={colors} />
        <AllProjects />
        




        </>
    )
}

// This gets called on every request
