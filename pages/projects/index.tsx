// Sections
import GitRecentProjects from '../../components/sections/projects/recent'
import FeaturedProjects from '../../components/sections/projects/featured'

import Color  from '../../components/utils/page.colors.util'

import settings from '../../content/_settings.json'
import colors from '../../content/projects/_colors.json'

import content from '../../content/projects/featured.json'

//
export default function Projects({ user, repos }) {
    return (
        <>
        <Color colors={colors} />
        <FeaturedProjects />
        <GitRecentProjects user={user} repos={repos} />
        </>
    )
}

// This gets called on every request
