import React, { useState } from 'react'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'

// libraries
import { useCurrentLanguagePack } from 'client/components/custom/hooks'

// interfaces
import { AllProps } from 'common'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const BlogTopPart: React.FC<AllProps> = () => {
	const { text } = useCurrentLanguagePack()
	const classes = useStyles()

	const [keyword, setKeyword] = useState('')

	const targetUri = `/search/${keyword}`

	return (
		<main className={classes.paper}>
			<Avatar className={classes.avatar}>
				<SearchIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				{text.info.topTitle}
			</Typography>
			<form
				className={classes.form}
				noValidate
				autoComplete="off"
				onSubmit={(event: any) => {
					event.preventDefault()
					window.location.href = targetUri
				}}
			>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="standard-basic"
					label={text.info.searchLabel}
					autoComplete="off"
					autoFocus
					value={keyword}
					onChange={(event: any) => setKeyword(event.target.value)}
				/>
			</form>
			<Link
				variant="h5"
				color="inherit"
				align="center"
				noWrap
				href={targetUri}
				className={classes.submit}
			>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
				>
					{text.info.submitBtn}
				</Button>
			</Link>
		</main>
	)
}

export default BlogTopPart
