import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'

import moment from 'moment'

// interfaces
import { useCurrentLanguagePack } from 'client/components/custom/hooks'
import { AllProps } from 'common'

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
	imgUri: string
	title: string
	overview?: string
	releaseDate: string
	voteAverage?: number
	voteCount?: number
}

const MainFeaturedPost: React.FC<AllProps & Props> = ({ imgUri = '', title = '', overview = '', releaseDate = '', voteAverage = 0, voteCount = 0 }) => {
	const classes = useStyles()

	const { text } = useCurrentLanguagePack()

	if (imgUri.length === 0 || title.length === 0) {
		return (<></>)
	}

	return (
		<Paper
			className={classes.mainFeaturedPost}
		>
			<div className={classes.overlay} />

			<Grid container spacing={3}>
				<Grid item md={4}>
					{<img src={imgUri} alt={title} className={classes.imageArea} />}
				</Grid>
				<Grid item md={8}>
					<Grid item container direction="row" className={classes.mainFeaturedPostContent}>
						<Grid item md={10}>
							<Typography component="h1" variant="h3" color="inherit" display={'inline'} gutterBottom paragraph>
								{title}
								<Typography variant="overline" align="center" color="textSecondary" display={'inline'}>
									({moment(releaseDate).format('YYYY')})
								</Typography>
							</Typography>
						</Grid>
						{/* will add favorite btn */}
						<Grid item md={2}>

						</Grid>
						<Grid item md={12} container direction="row" className={classes.reviewArea}>
							{voteAverage > 0 && (
							<>
								<Grid item md={3}>
									<Rating name="read-only" value={voteAverage} readOnly max={5} precision={0.5} />
								</Grid>
								<Grid item md={9}>
									<Box ml={2}>{voteCount} {text.info.countText}</Box>
								</Grid>
							</>
							)}
						</Grid>
						<Grid item md={12}>
							{ overview.length > 0 && (
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
