import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// libraries
import { env, NO_IMAGE } from 'client/constants/Env'
import { setMaxTextLength } from 'client/helpers'

// interfaces
import { AllProps } from 'common'
import { ResSearchMoviesDetail } from 'response'

const useStyles = makeStyles({
	card: {
		display: 'flex',
	},
	cardDetails: {
		flex: 1,
	},
	cardDetailsText: {
		height: '84px',
	},
	cardMedia: {
		width: 160,
	},
})

interface Props {
	moviePost: ResSearchMoviesDetail
}

const FeaturedPost: React.FC<AllProps & Props> = ({ moviePost = {} }) => {
	const classes = useStyles()

	return (
		<Grid item xs={12} md={6}>
			<CardActionArea component="a" href={`/m${moviePost.id}`}>
				<Card className={classes.card}>
					<div className={classes.cardDetails}>
						<CardContent>
							<Typography component="h2" variant="h5">
								{moviePost.title ? setMaxTextLength(moviePost.title, 18) : ''}
							</Typography>
							<Typography variant="subtitle1" color="textSecondary">
								{moviePost.release_date}
							</Typography>
							<Typography variant="subtitle1" paragraph className={classes.cardDetailsText}>
								{moviePost.overview ? setMaxTextLength(moviePost.overview, 90) : ''}
							</Typography>
						</CardContent>
					</div>
					<Hidden xsDown>
						<CardMedia
							className={classes.cardMedia}
							image={
								moviePost.poster_path ? `${env.CDN_URI}${moviePost.poster_path}` : `${NO_IMAGE}`
							}
							title={moviePost.title}
						/>
					</Hidden>
				</Card>
			</CardActionArea>
		</Grid>
	)
}

export default FeaturedPost
