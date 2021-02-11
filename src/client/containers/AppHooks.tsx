import * as React from 'react'
import Helmet from 'react-helmet'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

// libraries
import { FLAGSHIP_URL, STATIC_URL } from 'client/constants/Env'
import { initialState } from 'client/store/state'
import { renderRoutes, RouteConfig } from 'react-router-config'

// components
import { useCurrentLanguagePack } from 'client/components/custom/hooks'
import Footer from 'client/components/fragments/common/Footer'
import Header from 'client/components/fragments/common/Header'
import Loading from 'client/components/fragments/common/Loading'

// interfaces
import { AllProps, State } from 'common'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}))

const App: React.FC<AllProps> = () => {
	const classes = useStyles()

	const { route = initialState.route as RouteConfig } = useSelector((state: State) => state)
	const { text, status } = useCurrentLanguagePack()
	const currentUri = `${window.location.origin}${window.location.pathname}`

	return (
		<main className={classes.root}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<Helmet>
				<html lang={status} />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<meta name="format-detection" content="telephone=no" />
				<link rel="icon shortcut" href={`${STATIC_URL}/images/icon/favicon.ico`} sizes="32x32" />
				<link rel="icon shortcut" href={`${STATIC_URL}/images//icon/favicon.ico`} sizes="192x192" />
				<link
					rel="apple-touch-icon-precomposed"
					href={`${STATIC_URL}/images/icon/apple-touch-icon.png`}
				/>
				<link rel="shortcut icon" href={`${STATIC_URL}/images/icon/favicon.ico`} />
				<link rel="apple-touch-icon" href={`${STATIC_URL}/images/icon/apple-touch-icon.png`} />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
				<meta name="apple-mobile-web-app-title" content={text.head.title} />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href={`${FLAGSHIP_URL}/manifest.json`} />
				<title>{text.head.title}</title>
				<meta name="description" content={text.head.desc} />
				<meta property="og:title" content={text.head.title} />
				<meta property="og:description" content={text.head.desc} />
				<meta property="og:url" content={currentUri} />
				<meta name="twitter:title" content={text.head.title} />
				<meta name="twitter:description" content={text.head.desc} />
				<meta name="twitter:url" content={currentUri} />
				<meta name="keywords" content={text.head.keywords.join(',')} />
				<link rel="canonical" href={currentUri} />
			</Helmet>
			<React.Fragment>
				<Container maxWidth="lg">
					<Header />
					<React.Suspense fallback={<Loading text={'LOADING COMPONENTS'} />}>
						{route && renderRoutes(route.routes)}
					</React.Suspense>
				</Container>
				<Footer />
			</React.Fragment>
		</main>
	)
}

export default App
