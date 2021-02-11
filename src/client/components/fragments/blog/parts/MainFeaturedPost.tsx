import React, { useEffect, useState } from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Rating from '@material-ui/lab/Rating'

import moment from 'moment'

// actions
import {
	addFavorite as actionAddFavorite,
	listFavorite as actionListFavorite,
	removeFavorite as actionRemoveFavorite,
} from 'client/actions'

// libraries
import { initialState } from 'client/store/state'

// interfaces
import { useCurrentLanguagePack } from 'client/components/custom/hooks'
import {
	AllProps,
	SessionInfo,
	State,
	StateAddFavorite,
	StateListFavorite,
	StateRemoveFavorite,
} from 'common'
import { useDispatch, useSelector } from 'react-redux'
import { ResSearchMoviesDetail } from 'response'

const useStyles = makeStyles((theme) => ({
	mainFeaturedPost: {
		position: 'relative',
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
	},
	imageArea: {
		width: '100%',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	mainFeaturedPostContent: {
		position: 'relative',
		padding: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(4),
		},
	},
	reviewArea: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(4),
	},
}))

interface Props {
	id: number
	imgUri: string
	title: string
	overview?: string
	releaseDate: string
	voteAverage?: number
	voteCount?: number
	sessionInfo: SessionInfo
}

const MainFeaturedPost: React.FC<AllProps & Props> = ({
	id = -1,
	imgUri = '',
	title = '',
	overview = '',
	releaseDate = '',
	voteAverage = 0,
	voteCount = 0,
	sessionInfo = {} as SessionInfo,
}) => {
	const {
		listFavorite = initialState.listFavorite as StateListFavorite,
		removeFavorite = initialState.removeFavorite as StateRemoveFavorite,
		addFavorite = initialState.addFavorite as StateAddFavorite,
	} = useSelector((state: State) => state)
	const classes = useStyles()

	const [listFavoriteItems, setListFavoriteItems] = useState([] as ResSearchMoviesDetail[])

	const { text, status } = useCurrentLanguagePack()

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			actionListFavorite({
				path: {
					list_id: sessionInfo.listId,
				},
				query: {
					language: status,
				},
			})
		)
	}, [])

	useEffect(() => {
		if (listFavorite.statusCode === 200) {
			const items =
				listFavorite.result && listFavorite.result.items && listFavorite.result.items.length > 0
					? listFavorite.result.items
					: []
			const filterWithId = items.filter((item: ResSearchMoviesDetail) => item.id === id)
			setListFavoriteItems(filterWithId)
		}
	}, [listFavorite])

	useEffect(() => {
		if (removeFavorite.statusCode === 200 || addFavorite.statusCode === 200) {
			dispatch(
				actionListFavorite({
					path: {
						list_id: sessionInfo.listId,
					},
					query: {
						language: status,
					},
				})
			)
		}
	}, [removeFavorite, addFavorite])

	if (imgUri.length === 0 || title.length === 0) {
		return <></>
	}

	return (
		<Paper className={classes.mainFeaturedPost}>
			<div className={classes.overlay} />

			<Grid container spacing={3}>
				<Grid item md={4}>
					{<img src={imgUri} alt={title} className={classes.imageArea} />}
				</Grid>
				<Grid item md={8}>
					<Grid item container direction="row" className={classes.mainFeaturedPostContent}>
						<Grid item md={10}>
							<Typography
								component="h1"
								variant="h3"
								color="inherit"
								display={'inline'}
								gutterBottom
								paragraph
							>
								{title}
								{(releaseDate && releaseDate.length > 0) && (
								<Typography
									variant="overline"
									align="center"
									color="textSecondary"
									display={'inline'}
								>
									({moment(releaseDate, 'YYYY-MM-DD').format('YYYY')})
								</Typography>
								)}
							</Typography>
						</Grid>
						{/* will add favorite btn */}
						<Grid item md={2}>
							<Button
								variant="contained"
								color="primary"
								onClick={(_event: any) => {
									const divider = listFavoriteItems.length > 0 ? true : false
									if (!divider) {
										dispatch(
											actionAddFavorite({
												path: {
													list_id: sessionInfo.listId,
												},
												query: {
													session_id: sessionInfo.sessionId,
												},
												body: {
													media_id: id, // movie_id?
												},
											})
										)
									} else {
										dispatch(
											actionRemoveFavorite({
												path: {
													list_id: sessionInfo.listId,
												},
												query: {
													session_id: sessionInfo.sessionId,
												},
												body: {
													media_id: id, // movie_id?
												},
											})
										)
									}
								}}
							>
								{listFavoriteItems.length > 0 ? (
									<FavoriteIcon fontSize="large" />
								) : (
									<FavoriteBorderIcon fontSize="large" />
								)}
								{text.info.likeText}
							</Button>
						</Grid>
						<Grid item md={12} container direction="row" className={classes.reviewArea}>
							{voteAverage > 0 && (
								<>
									<Grid item md={3}>
										<Rating name="read-only" value={voteAverage} readOnly max={5} precision={0.5} />
									</Grid>
									<Grid item md={9}>
										<Box ml={2}>
											{voteCount} {text.info.countText}
										</Box>
									</Grid>
								</>
							)}
						</Grid>
						<Grid item md={12}>
							{overview.length > 0 && (
								<Typography variant="h5" color="inherit" paragraph>
									{overview}
								</Typography>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	)
}

export default MainFeaturedPost
