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
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
	},
}))

const Footer: React.FC<AllProps> = () => {
	const { text } = useCurrentLanguagePack()
	const classes = useStyles()

	return (
		<footer className={classes.footer}>
			<Container maxWidth="sm">
				<Typography variant="body1">{text.info.footerTitle}</Typography>
				<Copyright />
			</Container>
		</footer>
	)
}

export default Footer
