import React from 'react'

import Divider from '@material-ui/core/Divider'

// components
import BlogSearchPart from 'client/components/pages/BlogSearchPart'

// interface
import { AllProps } from 'common'

const BlogSearch: React.FC<AllProps> = () => {
	return (
		<>
			<Divider />
			<BlogSearchPart />
		</>
	)
}

export default BlogSearch
