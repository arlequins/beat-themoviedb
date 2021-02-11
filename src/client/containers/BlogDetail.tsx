import React from 'react'

import Divider from '@material-ui/core/Divider'

// components
import BlogDetailPart from 'client/components/pages/BlogDetailPart'

// interface
import { AllProps } from 'common'

const BlogDetail: React.FC<AllProps> = () => {
	return (
		<>
			<Divider />
			<BlogDetailPart />
		</>
	)
}

export default BlogDetail
