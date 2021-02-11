import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Pagination from '@material-ui/lab/Pagination'

// action
import { addSearchMovies } from 'client/actions'

// libraries
import { useCurrentLanguagePack, useQuery } from 'client/components/custom/hooks'
import { initialState } from 'client/store/state'

// components
import FeaturedPost from 'client/components/fragments/blog/parts/FeaturedPost'
import Loading from 'client/components/fragments/common/Loading'
import ErrorPage from 'client/containers/common/ErrorPage'

// interfaces
import { AllProps, ParamsBlogSearch, State, StateSearchMovies } from 'common'
import { useParams } from 'react-router'
import { ResSearchMoviesDetail } from 'response'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	searchTitle: {
		marginBottom: theme.spacing(2),
	},
	gridBox: {
		height: '232px',
	},
	pager: {
		marginTop: theme.spacing(4),
		textAlign: 'center',
	},
}))

const BlogSearchPart: React.FC<AllProps> = () => {
	const { searchMovies = initialState.searchMovies as StateSearchMovies } = useSelector(
		(state: State) => state
	)

	const history = useHistory()
	const location = useLocation()
	const classes = useStyles()

	const { text, status } = useCurrentLanguagePack()

	const query: URLSearchParams = useQuery()
	const { keyword }: ParamsBlogSearch = useParams()

	const rawQueryPage: any = query.get('page') !== null ? query.get('page') : '1'
	const queryPage = Number.parseInt(rawQueryPage, 10)
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(Number.isInteger(queryPage) ? queryPage : 1)

	const dispatch = useDispatch()

	useEffect(() => {
		if (isLoading && searchMovies.statusCode === 200) {
			setIsLoading(false)
			if (query.get('page') !== null || (query.get('page') === null && currentPage > 1)) {
				history.push(`${location.pathname}?page=${currentPage}`)
			}
		}
	}, [searchMovies])

	useEffect(() => {
		setIsLoading(true)
		dispatch(
			addSearchMovies({
				query: keyword,
				language: status,
				page: currentPage,
			})
		)
	}, [currentPage])

	useEffect(() => {
		if (queryPage !== currentPage) {
			setCurrentPage(queryPage)
		}
	}, [location])

	if (searchMovies.statusCode === -1 || isLoading) {
		return <Loading text="LOADING DATA" />
	}

	if (searchMovies.statusCode !== 200 || !searchMovies.result) {
		return <ErrorPage text={`${searchMovies.statusCode}`} />
	}

	const { results, total_pages, total_results } = searchMovies.result

	if (results.length === 0) {
		return <ErrorPage text="NO RESULTS" />
	}

	const countText = [total_results === 10000 ? text.info.overCount : '', `${total_results}`, text.info.countText].filter((str: string) => str.length > 0).join(' ')

	return (
		<main className={classes.paper}>
			<Typography component="h1" variant="h5" className={classes.searchTitle}>
				{text.info.searchTitle} - {countText}
			</Typography>
			<Grid container spacing={4}>
				{results.map((movie: ResSearchMoviesDetail) => (
					<FeaturedPost className={classes.gridBox} key={movie.id} moviePost={movie} />
				))}
			</Grid>

			<Pagination count={total_pages} page={currentPage} color="primary" className={classes.pager} onChange={(_event: React.ChangeEvent<unknown>, value: number) => {
				setCurrentPage(value)
			}}/>
		</main>
	)
}

export default BlogSearchPart
