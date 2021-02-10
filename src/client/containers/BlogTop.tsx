import React from 'react'

import Container from '@material-ui/core/Container'

// components
import BlogTopPart from 'client/components/pages/BlogTopPart'

// interfaces
import { AllProps } from 'common'

// common sass
// tslint:disable:no-import-side-effect
import 'scss/top.scss'

const BlogTop: React.FC<AllProps> = () => {
	return (
		<Container component="main" maxWidth="xs">
			<BlogTopPart />
		</Container>
	)
}

export default BlogTop
