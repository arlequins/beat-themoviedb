import React from 'react'

import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// libraries
import { useCurrentLanguagePack } from 'client/components/custom/hooks'

// interfaces
import { AllProps } from 'common'

const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/arlequins">
				AN
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6, 0),
	},
}))

const Footer: React.FC<AllProps> = () => {
	const { text } = useCurrentLanguagePack()
	const classes = useStyles()

	return (
		<footer className={classes.footer}>
			<Container maxWidth="lg">
				<Typography variant="h6" align="center" gutterBottom>
					{text.info.footerTitle}
				</Typography>
				<Copyright />
			</Container>
		</footer>
	)
}

export default Footer
