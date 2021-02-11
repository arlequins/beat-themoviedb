import * as React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Pagination from '@material-ui/lab/Pagination'

// libraries
import { useCurrentLanguagePack } from 'client/components/custom/hooks'

// components
import FeaturedPost from 'client/components/fragments/blog/parts/FeaturedPost'

// interfaces
import { AllProps } from 'common'
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

interface Props {
	area: string
	totalResults?: number
	totalPages?: number
	currentPage?: number
	setCurrentPage?: any
	results: ResSearchMoviesDetail[]
}

const SearchPost: React.FC<AllProps & Props> = React.memo(({ area = 'search', totalResults = 0, currentPage = 0, totalPages = 0, setCurrentPage, results = [] }) => {
	const classes = useStyles()

	const { text } = useCurrentLanguagePack()

	const countText = [
		totalResults === 10000 ? text.info.overCount : '',
		`${totalResults}`,
		text.info.countText,
	]
		.filter((str: string) => str.length > 0)
		.join(' ')

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

			{ area === 'search' && (
				<Pagination
					count={totalPages}
					page={currentPage}
					color="primary"
					className={classes.pager}
					onChange={(_event: React.ChangeEvent<unknown>, value: number) => {
						setCurrentPage(value)
					}}
				/>
			)}
		</main>
	)
})

export default SearchPost
