import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// action
import { addMovieDetails } from 'client/actions'

// components
import Loading from 'client/components/fragments/common/Loading'

// interface
import { AllProps, AppConfig, State, StateMovieDetails } from 'common'

const BlogDetail: React.FC<AllProps> = () => {
	const {
		movieDetails = {} as StateMovieDetails,
		appConfig = {
			lang: 'EN',
		} as AppConfig,
	} = useSelector((state: State) => state)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			addMovieDetails({
				movie_id: 550,
				language: appConfig.lang.toLowerCase(),
			})
		)
	}, [])

	if (!movieDetails.result) {
		return <Loading text={'LOADING DATA'} />
	}

	if (movieDetails.statusCode !== 200) {
		return <div>error</div>
	}

	const { result } = movieDetails

	return (
		<div>
			<h1>BLOG DETAIL</h1>
			<h2>{result.title}</h2>
		</div>
	)
}

export default BlogDetail
