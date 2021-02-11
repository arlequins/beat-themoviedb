import React from 'react'

import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// libraries
import { useCurrentLanguagePack } from 'client/components/custom/hooks'

// interface
import { AllProps, Section } from 'common'

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbarSecondary: {
		justifyContent: 'space-between',
		overflowX: 'auto',
	},
	toolbarTitle: {
		flex: 1,
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
}))

const sections = [
	{ title: 'Search', url: `/`, name: 'search', id: 0 },
	{ title: 'Favorite', url: `/favorite`, name: 'favorite', id: 1 },
]

const Header: React.FC<AllProps> = () => {
	const { text } = useCurrentLanguagePack()
	const classes = useStyles()

	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				<Typography
					component="h2"
					variant="h5"
					color="inherit"
					align="center"
					noWrap
					className={classes.toolbarTitle}
				>
					<Link variant="h5" color="inherit" align="center" noWrap href="/">
						{text.info.headerTitle}
					</Link>
				</Typography>
			</Toolbar>
			<Grid container spacing={3}>
				<Grid item md={4} />
				<Grid item md={4}>
					<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
						{sections.map((section: Section) => {
							return (
								<Link
									color="textSecondary"
									noWrap
									key={section.title}
									variant="body2"
									href={section.url}
									className={classes.toolbarLink}
								>
									{section.title}
								</Link>
							)
						})}
					</Toolbar>
				</Grid>
				<Grid item md={4} />
			</Grid>
		</React.Fragment>
	)
}

export default Header
