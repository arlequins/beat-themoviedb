import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// action
import { addMovieDetails } from 'client/actions'

// libraries
import { useCurrentLanguagePack } from 'client/components/custom/hooks'
import { env, NO_IMAGE } from 'client/constants/Env'
import { initialState } from 'client/store/state'

// components
import MainFeaturedPost from 'client/components/fragments/blog/parts/MainFeaturedPost'
import Loading from 'client/components/fragments/common/Loading'
import ErrorPage from 'client/containers/common/ErrorPage'

// interfaces
import { AllProps, ParamsBlogDetail, SessionInfo, State, StateMovieDetails } from 'common'
import { useParams } from 'react-router'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	taglineContent: {
		marginBottom: theme.spacing(4),
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}))

const BlogDetailPart: React.FC<AllProps> = () => {
	const {
		sessionInfo = initialState.sessionInfo as SessionInfo,
		movieDetails = initialState.movieDetails as StateMovieDetails,
	} = useSelector((state: State) => state)

	const classes = useStyles()

	const { status } = useCurrentLanguagePack()

	const { id }: ParamsBlogDetail = useParams()
	const parseId = Number.parseInt(id, 10)

	const [moveId, setMoveId] = useState(-1)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			addMovieDetails({
				movie_id: moveId,
				language: status,
			})
		)
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

	const detail = movieDetails.result

	return (
		<main className={classes.paper}>
			<MainFeaturedPost
				title={detail.title}
				imgUri={detail.poster_path ? `${env.CDN_URI}${detail.poster_path}` : NO_IMAGE}
				overview={detail.overview ? detail.overview : ''}
				voteAverage={detail.vote_average > 0 ? detail.vote_average / 2 : 0}
				voteCount={detail.vote_count}
				releaseDate={detail.release_date}
				id={detail.id}
				sessionInfo={sessionInfo}
			/>
			{detail.homepage && (
				<div className={classes.heroContent}>
					<Container maxWidth="md">
						<Typography
							variant="h5"
							align="center"
							color="textPrimary"
							className={classes.taglineContent}
						>
							{detail.tagline}
						</Typography>
						<div>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Link
										color="inherit"
										align="center"
										noWrap
										href={detail.homepage}
										target="_blank"
									>
										<Button variant="contained" color="primary">
											Homepage
										</Button>
									</Link>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			)}
		</main>
	)
}

export default BlogDetailPart
