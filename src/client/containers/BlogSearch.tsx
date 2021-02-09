import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// action
import { addSearchMovies } from 'client/actions'

// components
import Loading from 'client/components/fragments/common/Loading'

// interface
import { AllProps, AppConfig, State, StateSearchMovies } from 'common'

const BlogSearch: React.FC<AllProps> = () => {
	const {
		searchMovies = {} as StateSearchMovies,
		appConfig = {
			lang: 'EN',
		} as AppConfig,
	} = useSelector((state: State) => state)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			addSearchMovies({
				query: 'a',
				language: appConfig.lang.toLowerCase(),
			})
		)
	}, [])

	if (!searchMovies.result) {
		return <Loading text={'LOADING DATA'} />
	}

	if (searchMovies.statusCode !== 200) {
		return <div>error</div>
	}

	const { result } = searchMovies

	return (
		<div>
			<h1>BLOG SEARCH</h1>
			<h2>{result.page}</h2>
		</div>
	)
}

export default BlogSearch
