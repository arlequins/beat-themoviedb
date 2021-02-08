import Status from 'client/containers/common/Status'
import * as React from 'react'

export default (): JSX.Element => (
	<Status status={404}>
		<main>
			<article className="not-found">
				<h1>NOT FOUND</h1>
			</article>
		</main>
	</Status>
)
