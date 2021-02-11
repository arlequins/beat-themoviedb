import React from 'react'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import Link from '@material-ui/core/Link'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// libraries
import { useCurrentLanguagePack } from 'client/components/custom/hooks'
import { SETTING_STORAGE_KEY } from 'client/constants'

// interface
import { AllProps, Section } from 'common'

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
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

const Header: React.FC<AllProps> = () => {
	const { text, status, mode } = useCurrentLanguagePack()
	const classes = useStyles()

	const sections = [
		{ title: text.head.search, url: `/`, name: text.head.search, id: 0 },
		{ title: text.head.favorite, url: `/favorite`, name: text.head.favorite, id: 1 },
	]

	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				<Button
					variant="outlined"
					size="small"
					onClick={(_event: any) => {
						const nextMode = mode === 'light' ? 'dark' : 'light'

						window.localStorage.setItem(
							SETTING_STORAGE_KEY,
							JSON.stringify({
								mode: nextMode,
								lang: status.toLocaleUpperCase(),
							})
						)
						window.location.reload()
					}}
				>
					{mode} Mode
				</Button>
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
				<FormControl className={classes.formControl}>
					<InputLabel id="simple-select-label">{text.info.lang}</InputLabel>
					<Select
						labelId="simple-select-label"
						id="simple-select"
						value={status.toLocaleUpperCase()}
						onChange={(event: any) => {
							window.localStorage.setItem(
								SETTING_STORAGE_KEY,
								JSON.stringify({
									mode: mode,
									lang: event.target.value,
								})
							)
							window.location.reload()
						}}
					>
						<MenuItem value={'EN'}>English</MenuItem>
						<MenuItem value={'JA'}>日本語</MenuItem>
						<MenuItem value={'KO'}>한글</MenuItem>
					</Select>
				</FormControl>
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
