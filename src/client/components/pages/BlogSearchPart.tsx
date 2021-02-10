import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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

	const classes = useStyles()

	const { text, status } = useCurrentLanguagePack()

	const query: URLSearchParams = useQuery()
	const currentPage = query.get('page')
	const { keyword }: ParamsBlogSearch = useParams()

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			addSearchMovies({
				query: keyword,
				language: status,
				page: currentPage ? Number.parseInt(currentPage, 10) : 1,
			})
		)
	}, [])

	if (searchMovies.statusCode === -1) {
		return <Loading text="LOADING DATA" />
	}

	if (searchMovies.statusCode !== 200 || !searchMovies.result) {
		return <ErrorPage text={`${searchMovies.statusCode}`} />
	}

	const { results, page, total_pages, total_results } = searchMovies.result

	if (results.length === 0) {
		return <ErrorPage text="NO RESULTS" />
	}

	return (
		<main className={classes.paper}>
			<Typography component="h1" variant="h5" className={classes.searchTitle}>
				{text.info.searchTitle} - {total_results} {text.info.countText}
			</Typography>
			<Grid container spacing={4}>
				{results.map((movie: ResSearchMoviesDetail) => (
					<FeaturedPost className={classes.gridBox} key={movie.title} moviePost={movie} />
				))}
			</Grid>

			<Pagination count={total_pages} page={page} color="primary" className={classes.pager} />
		</main>
	)
}

export default BlogSearchPart
