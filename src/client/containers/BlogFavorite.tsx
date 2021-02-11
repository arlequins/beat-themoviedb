import React from 'react'

import Divider from '@material-ui/core/Divider'

// components
import BlogFavoritePart from 'client/components/pages/BlogFavoritePart'

// interface
import { AllProps } from 'common'

const BlogFavorite: React.FC<AllProps> = () => {
	return (
		<>
			<Divider />
			<BlogFavoritePart />
		</>
	)
}

export default BlogFavorite
