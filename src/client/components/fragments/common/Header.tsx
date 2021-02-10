import React from 'react'

// import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// libraries
import { useCurrentLanguagePack } from 'client/components/custom/hooks'

// interface
import { AllProps } from 'common'

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbarTitle: {
		flex: 1,
	},
}))

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
				{/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
			</Toolbar>
		</React.Fragment>
	)
}

export default Header
