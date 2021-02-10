import Status from 'client/containers/common/Status'
import * as React from 'react'

export default ({ text = '' }): JSX.Element => (
	<Status status={500}>
		<main>
			<article className="not-found">
				<h1>{text.length > 0 ? text : 'ERROR'}</h1>
			</article>
		</main>
	</Status>
)
