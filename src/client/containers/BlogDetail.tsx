import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// action
import { addMovieDetails } from 'client/actions'

// components
import Loading from 'client/components/fragments/common/Loading'
import ErrorPage from 'client/containers/common/ErrorPage'

// interface
import { AllProps, AppConfig, ParamsBlogDetail, State, StateMovieDetails } from 'common'
import { useParams } from 'react-router'

const BlogDetail: React.FC<AllProps> = () => {
	const {
		movieDetails = {} as StateMovieDetails,
		appConfig = {
			lang: 'EN',
		} as AppConfig,
	} = useSelector((state: State) => state)

	const dispatch = useDispatch()

	const { id }: ParamsBlogDetail = useParams()

	const parseId = Number.parseInt(id, 10)

	const [moveId, setMoveId] = useState(-1)

	useEffect(() => {
		if (moveId !== -1) {
			dispatch(
				addMovieDetails({
					movie_id: moveId,
					language: appConfig.lang.toLowerCase(),
				})
			)
		}
	}, [moveId])

	if (!Number.isInteger(parseId)) {
		return <ErrorPage text={`${parseId}`} />
	}

	if (parseId > 0 && moveId === -1) {
		setMoveId(parseId)
	}

	if (!movieDetails.result) {
		return <Loading text="LOADING DATA" />
	}

	if (movieDetails.statusCode !== 200) {
		return <ErrorPage text={`${movieDetails.statusCode}`} />
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
