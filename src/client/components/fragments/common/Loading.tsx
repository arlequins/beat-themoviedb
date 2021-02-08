import * as React from 'react'

import { AllProps } from 'common'

interface Props {
	text?: string
}

const Loading: React.FC<AllProps & Props> = React.memo(({ text = 'LOADING APP' }) => {
	return (
		<div>
			<h1>{text}</h1>
		</div>
	)
})

export default Loading
